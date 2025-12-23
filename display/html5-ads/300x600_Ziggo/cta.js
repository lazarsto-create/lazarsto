grid8player.components['cta']={manifest: {
    "id": "cta",
    "properties": [{
        "name": "text",
        "type": "string",
        "value": "Stap nu over"
      },
      {
        "name": "font-size",
        "type": "number",
        "value": "10.5"
      },
      {
        "name": "cta-text-color",
        "type": "color",
        "value": "#000000"
      },
      {
        "name": "background-color",
        "type": "bcolor",
        "value": "#ffffff"
      },
      {
        "name": "glow",
        "type": "number",
        "value": "0"
      }
    ],
     "fonts": [{"family":"Diodrum", "weight":"600"}],
    "width": 100,
    "height": 50
  },
  styles: `
   
        
        #cta{
            overflow: hidden;
            height: 100%;
            width: 100%;
            color: #ffffff;
            border-radius: 4px;
            text-align: center;
        }
        #cta-text{
          position: relative;
          font-size:$font-sizepx;
          font-family: "Diodrum";
          font-weight: 600;
        }     
        #cta-arr{
          position: absolute;
          width:8px;
          height: 12px;
          left: 11px;
          top: 7px;
          opacity:0;
        }   
    #glow{
          position: absolute;
          top:-5px;
          left:-50px;
          width:0px;
          transform: skew(-45deg, 0deg);
          background-color: #F28C2F;
          box-shadow: 0px 0px 12px 12px #F28C2F;
          opacity:0;
        }    `,
  html: `
        <div id="cta">
        <div id="glow"></div>
          <p id="cta-text">$text</p>
          <div id="cta-arr">
<svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 7 12">
  <path id="Arrow_Right" data-name="Arrow Right" stroke="white" fill="white" d="M0,.506A1.728,1.728,0,0,1,2.443.5l0,0L7.938,6,2.444,11.493a1.728,1.728,0,0,1-2.443,0l0,0L5.494,6Z" transform="translate(0 0)"/>
</svg>
          </div>
        </div>
    
    `,
  init(element, pos, size, props) {

    this.dom = element;

    ctaW = size.initW;

    ctaText = props[0].value;
    fontSize = props[1].value;
    color = props[2].value;
    backgroundColor = props[3].value;
    glow = props[4].value;

    if (ctaText.length < 1) {
      this.dom.querySelector('#cta-arr').style.opacity = 1;
    }

    this.dom.querySelector('#cta').style.backgroundColor = backgroundColor;
    this.dom.querySelector('#cta-text').style.color = color;

    this.dom.querySelector('#glow').style.height = size.initH+19 + "px";

    this.dom.querySelector('#cta-text').style.paddingTop = Math.round(size.initH*0.5 - 0.5*fontSize) + 1 + "px";
  },
  // global events
  onMouseClick() {
    window.open(clickTag, "_blank");
  },
 onMouseOver() {
    gsap.to(this.dom, {duration:0.5, scale:1.1, ease:"expo"});
    if (glow == 1) {
 this.dom.querySelector('#glow').style.opacity = 0.5;
    gsap.to(this.dom.querySelector('#glow'), {duration:0.6, x:ctaW*2.0, ease:"circ"});
    } 
  },
  onMouseOut() {
    gsap.to(this.dom, {duration:0.5, scale:1.0, ease:"expo"});
    if (glow == 1) {
      gsap.to(this.dom.querySelector('#glow'), {duration:0.6, x:0, ease:"circ"});
      } 
  }}