grid8player.components['mmBtn']={
styles: `
        #$id {
        --xtra: 0px;
        --nbsp: 0px;
        --left: 0px
        }

        .button$id {
          pointer-events: none;
          position: absolute;
          overflow: hidden;
          border-radius: $roundnesspx;
          font-size: $font-sizepx;
          padding: calc($font-sizepx * 0.7) calc($font-sizepx * 2.5 - 5.4 * var(--nbsp))  calc($font-sizepx * 0.7)  $font-sizepx;
          font-family: "NotoSans-Bold";
          font-weight: normal;
          border: 0;
        }

        #$id>#btn {
          background-color: $bg-color;
          border-color: $bg-color;
          color: $txt-color;
          clip-path: inset(0 0 0% 0)
        }

        #$id>#btn2 {
          background-color: $bg-hover;
          border-color: $bg-hover;
          color: $txt-hover;
          clip-path: inset(100% 0 0 0);
        }
 
        .icon$id {
          position: absolute;
          top: calc(50% + 0.1em - 0.1ex);
        }

        .left$id {
          transform: translate(calc(var(--xtra) - 1.5 * $font-sizepx), -50%) scale(calc($font-size / 12));
        }
        .right$id {
          transform: translate(calc(var(--xtra) + $font-sizepx - 4.6 * var(--nbsp)),-50%) scale(calc($font-size / 12));
        }

        .span$id {
vertical-align: -.1em;
          position: relative;
          left: var(--left);
          white-space: nowrap;
        }
     `,
  html: `
   <button id="btn" class="button$id"><span id="span" class="span$id">
    <svg class="left$id icon$id" xmlns="http://www.w3.org/2000/svg" width="4.881" height="9.762" viewBox="0 0 4.881 9.762">
      <path d="M-38.5-49l2.789,4.881L-38.5-39.238h1.395l3.486-4.881L-37.105-49Z" transform="translate(38.5 49)" fill="currentColor"/>
    </svg>
    <span id="txt">$cta_text</span>
    <svg class="right$id icon$id" xmlns="http://www.w3.org/2000/svg" width="4.881" height="9.762" viewBox="0 0 4.881 9.762">
      <path d="M-38.5-49l2.789,4.881L-38.5-39.238h1.395l3.486-4.881L-37.105-49Z" transform="translate(38.5 49)" fill="currentColor"/>
    </svg>
  </span></button>
    `,
  init(element, pos, size, props) {
    const self = this;
    self.vars = props;
    
    this.dom = element;
    var effect = (self.vars['effect'] - 1)/10
    var xtra =  0.2*self.vars['font-size'] +"px";
    var txt = element.querySelector("#txt");
    if(props.dynamic){
      txt.innerHTML=props.variable||""
    }
    if(txt.innerHTML==""){
      txt.innerHTML="&#8202;";
      txt.style.width = 0;
      txt.style.display = "inline-block";
      gsap.set(element,{ "--nbsp":xtra });
    }
    var lft = 1.4*self.vars['font-size'] +"px";
    const btn = element.querySelector("#btn");
    const align8 = ["center","topright","right","bottomright","bottom","bottomleft","left","topleft","top"][self.vars['allign']]
    var hor = 0, ver = 0;
    if (align8.indexOf("left")>-1){btn.style.left = "0px"}else if (align8.indexOf("right")>-1){btn.style.right = "0px"}else{btn.style.left = "50%";hor ="-50%"}
    if (align8.indexOf("top")>-1){btn.style.top = "0px"}else if (align8.indexOf("bottom")>-1){btn.style.bottom = "0px"}else{btn.style.top = "50%";ver ="-50%"}
    if(hor != 0 || ver != 0){btn.style.transform = "translate("+hor+" , "+ver+")"}
    const clone = btn.cloneNode(true);
    clone.id="btn2"
    element.appendChild(clone);
this.dom.onclick     = function(){
grid8player.onSwipe('tap');
}
    this.dom.onmouseenter = function(e){
     wipe(effect-0.2)
    }.bind(this);

    this.dom.onmouseleave = function(e){
     unwipe(effect-0.2)
    }.bind(this);

     function wipe(fx) {
      if(fx>=0&&fx<0.2){ 
        gsap.to(clone, 2*fx, { "clip-path": "inset(0% 0 0 0)" },0.15-fx);
        gsap.to(btn, 2*fx, { "clip-path": "inset( 0 0 100% 0)" },0.15-fx);
      }
    } 
     
    function unwipe (fx) {
      if(fx>=0&&fx<0.2){
       gsap.to(clone,  2*fx, { "clip-path": "inset(100% 0 0 0)" },0.15-fx);
       gsap.to(btn, 2*fx, { "clip-path": "inset( 0 0 0% 0)" },0.15-fx);
      }
    }  

    this.dom.hovering = function (){
      gsap.to(element, 0.3, { "--left": lft });
      gsap.to(element, 0.3, { "--xtra": xtra });
      wipe(effect)
    }.bind(this);

 
    this.dom.unhover = function () {
      gsap.to(element, 0.3, { "--left": "0px" });
      gsap.to(element, 0.3, { "--xtra": "0px" });
      unwipe(effect)
    }.bind(this);

  },
  
  onMouseClick() {
   
  },
 onMouseOver() {
    this.dom.hovering();
 },
  onMouseOut() {
     this.dom.unhover();
  }};