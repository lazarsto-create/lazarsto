grid8player.components['shot-action']={
styles: ``, html: ``,
    init(el, pos, size, props) {
    this.dom = el;
    el.style.display="none"
    const  self=this, vars = props;
    let tl, target = [el], v=vars.target==2?5:vars.task

    if(vars.target==0) target = [grid8player.getDOMLayerByID(vars.layer.guid||vars.layer)]
    if(vars.target==1) target = document.querySelectorAll(vars.selector)

    this.run = function(g){
        tl=g

        if(v==4){
            tl[vars.direction](target, JSON.parse(vars.json.replace(/(['"])?([^:,{}]+)\1:/g,'"$2": ').replace(/:(\s?')(.*)(')/g,':"$2"')),vars.delay)
        }else{
            tl.call(callback,vars.delay)
        }
    }
    function callback(){

        if(v==3){
            let tweens = gsap.getTweensOf(el)
            for (i = 0; i < tweens.length; ++i) {
                let tween = tweens[i].vars
                delete tween.parent
                tl.to(target,tween,tweens[i]["._start"])
            }
        }
        if(v==6){

            let customEvent =  manifest.customEvents.find(x=>x.id==vars.customEvent);
            const dispatch = ["dispatchEvent","dispatchReverseEvent","dispatchResetEvent"][vars.dispatch]
            grid8player[dispatch](el, customEvent.name, target)
            console.log( 'dispatching', customEvent.name, target)
        }
        if(v==5){
            for (i = 0; v%2 && i < target.length; ++i) {
                const func = new Function(vars.func).bind(target[i])
                func();
            }
        }
    }
},
animate(tl) {
    tl.to(this,{onStart:function(){this.run.tl}})
    
}};