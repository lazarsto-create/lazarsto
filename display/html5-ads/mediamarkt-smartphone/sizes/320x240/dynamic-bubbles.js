grid8player.components['dynamic-bubbles']={
styles: `
       #default-component-$ id {

    height: 100%;
    width: 100%;

}

.speech-bubble-container {
    display: block;
        width: 100%;
    height: 100%;
    font-family: 'MM Headline Pro';
    bottom: 0;
    position: absolute;
}

.speech-bubble {
      padding: 0.4em 0.5em;
    top: 0px;
    border-radius: 12px;
    position: absolute;
    line-height:  var(--line-height, 1em);
    min-width: 10%;
   width: var(--width, auto);
    text-align: left;
    
    align-self: center;
    border-radius: 0.3em 0.1em 0.3em 0.1em;
    transform: skew(-11deg);
    white-space: var(--white-space, nowrap);
    display: inline;
    
}

.bubble-text{
    transform: skew(11deg);
    display: inline-block;
}

.regular-bubble {
    background-color: white;
    color: black;
}

.keyword-bubble {
     background-color: var(--keyword-color, #ff0000);
    
    color: white;
    z-index: 2;
    padding: 0.3em 0.5em;
}

.first-bubble {
}

.first-bubble::before{
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    top: -0.8em;
       left: 1.0em;
       margin-top:  var(--top-tail-margin,0);
    transform: skew(11deg) scale(var(--tail-scale, 0.5));
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61.131' height='40.146' viewBox='0 0 61.131 40.146'%3E%3Cpath id='Path_43718' data-name='Path_43718' d='M54.888,40.146,61.039,6.3a5.328,5.328,0,0,0-8.418-5.231L0,40.146Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: transparent;
       transform-origin: center center;
}




.last-bubble {
filter: drop-shadow(0 calc(0.1 * var(--shadow-strength, 1) * 1rem) calc(0.1 * var(--shadow-strength, 1) * 1rem) rgba(0, 0, 0, clamp(0, calc(0.15 * var(--shadow-strength, 1)), 1)));
z-index:-2;
top:0em;
}

.last-bubble::before  {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
       bottom: -0.8em;
       right: 0.5em;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61.131' height='40.146' viewBox='0 0 61.131 40.146'%3E%3Cpath id='Path_43743' data-name='Path_43743' d='M54.888,0l6.151,33.848a5.328,5.328,0,0,1-8.418,5.231L0,0Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: transparent;
    transform-origin: center center;
    transform:skew(9deg) scale(var(--tail-scale, 0.5));
       margin-bottom:  var(--bottom-tail-margin,0)!important;
    
}

.keyword-bubble.first-bubble::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61.131' height='40.146' viewBox='0 0 61.131 40.146'%3E%3Cpath id='Path_43718' data-name='Path_43718' d='M54.888,40.146,61.039,6.3a5.328,5.328,0,0,0-8.418-5.231L0,40.146Z' fill='%23df0000'/%3E%3C/svg%3E");
}

.keyword-bubble.last-bubble::before {
}

.middle-bubble {

}


.last-red-bubble::before {
    border-color: transparent transparent transparent  var(--keyword-color, #df0000);
}


.no-skew .speech-bubble,
.no-skew .bubble-text {
    transform: none !important;
}

.no-skew .first-bubble::before,
.no-skew .last-bubble::before {
    transform: scale(var(--tail-scale, 0.5)) !important;
}



.hide-top-tail .first-bubble::before {
    display: none !important;
}

.left-top-tail .first-bubble::before {
       left: -0.5em !important;
    top: -0.1em !important;
    transform: rotate(260deg) scale(var(--tail-scale, 0.5)) !important;
    
}



.hide-bottom-tail .last-bubble::before {
    display: none !important;
}

.right-bottom-tail .last-bubble::before {    
    right: -0.5em !important;
    bottom: -0.185em !important;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC45OTciIGhlaWdodD0iMTYuMzgiIHZpZXdCb3g9IjAgMCAyMC45OTcgMTYuMzgiPgogICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDM4NzEiIGRhdGEtbmFtZT0iUGF0aCA0Mzg3MSIgZD0iTTE0Ljk4LDE5LjY3MlYxLjk1OEMxNS4yMTYuNDgsMTMuNzQxLS41NjQsMTIuNjgyLjMzMkwwLDEyLjY1NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjQ1OSAwLjg2OCkgcm90YXRlKDkwKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPgo=);
    transform: scale(var(--tail-scale, 0.5)) !important;
}

.right-bottom-tail .keyword-bubble.last-bubble::before {
      right: -0.5em !important;
    bottom: -0.185em !important;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC45OTciIGhlaWdodD0iMTYuMzgiIHZpZXdCb3g9IjAgMCAyMC45OTcgMTYuMzgiPgogICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDM4NzEiIGRhdGEtbmFtZT0iUGF0aCA0Mzg3MSIgZD0iTTE0Ljk4LDE5LjY3MlYxLjk1OEMxNS4yMTYuNDgsMTMuNzQxLS41NjQsMTIuNjgyLjMzMkwwLDEyLjY1NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjQ1OSAwLjg2OCkgcm90YXRlKDkwKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPgo=);
    transform: scale(var(--tail-scale, 0.5)) !important;
}

.no-skew .keyword-bubble.last-bubble::before {
  bottom:-0.15em !important;
}

.no-skew .first-bubble::before{
    top: -0.145em !important;
}

    `, html: `
        <div id="default-component-$id" class="speech-bubble-container">
      
        </div>
    
    `, init(element, pos, size, props, timeline, shotIndex) {
    this.dom = element;

    this.fontSize = props.fontSize;
    this.fontSizeRed = props.fontSize * 1.2;
    this.maxLines = props.maxLines;
    this.keyWords = props.keywords.split('|');
    this.maxCharacters = 50;
    this.delay = props.delay;

    this.animateAllAtOnce = props.animateAllAtOnce;
    this.skew = props.skew;

    this.topTailPosition = props.topTailPosition;

    this.bottomTailPosition = props.bottomTailPosition;



    this.keywordColor = props.keywordColor;

    this.lastShotEnable = props.lastShotEnable;
    this.lastShotX = props.lastShotX;
    this.lastShotY = props.lastShotY;
    this.lastShotWidth = props.lastShotWidth;
    this.lastShotHeight = props.lastShotHeight;


    this.isLastShot = false;

    this.regularColor = "#FFFFFF";

    this.updateTailsColors();

    this.isLastShot = (manifest.shots.length - 1) == shotIndex;
    console.log('is last shot', this.isLastShot)


    if (this.skew == false) {
        const parts = props.text.split('|');
        const result = [];

        for (let i = 0; i < parts.length; i++) {
            result.push(parts[i]);

            if (i < parts.length - 1) {
                let keepPipe = this.keyWords.some(keyword =>
                    parts[i].endsWith(keyword) || parts[i + 1].startsWith(keyword)
                );
                if (manifest.settings.width == 320 && this.isLastShot) keepPipe = false;
                result.push(keepPipe ? '|' : ' ');
            }
        }
        props.text = result.join('');
        element.style.setProperty('--line-height', '1.2em');
        element.style.setProperty('--white-space', 'normal');
        element.style.setProperty('--width', 'auto');
    }

    element.style.setProperty('--keyword-color', this.keywordColor);
    element.style.setProperty('--shadow-strength', props.shadowStrength);


    const baseSize = 35;

    const tailScale = 1;

    element.style.setProperty('--tail-scale', tailScale);

    this.applySkewSetting();
    this.applyTailPositions();

    this.createBubbles(props.text);
},
createBubbles(text) {
    const isSingleLine = !text.includes('|');
    let processedLines = this.splitLines(text);

    if (isSingleLine) {
        if (processedLines.length === 1) {
            const line = processedLines[0];
            const textContent = line.text;

            let modifiedText = textContent;

            this.keyWords.forEach(keyword => {
                if (textContent.includes(keyword)) {
                    const parts = modifiedText.split(keyword);

                    modifiedText = '';
                    parts.forEach((part, index) => {
                        if (part) modifiedText += `<span>${part}</span>`;

                        if (index < parts.length - 1) {
                            modifiedText += `<span style="color:#DF0000">${keyword}</span>`;
                        }
                    });
                }
            });

            processedLines[0].text = modifiedText;
        }
    }

    this.createDOM(processedLines, isSingleLine);
},
updateTailsColors() {

    const styleElement = document.createElement('style');
    const keywordColor = this.keywordColor.replace('#', '%23');


    styleElement.textContent = `
        .keyword-bubble.first-bubble::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61.131' height='40.146' viewBox='0 0 61.131 40.146'%3E%3Cpath id='Path_43718' data-name='Path_43718' d='M54.888,40.146,61.039,6.3a5.328,5.328,0,0,0-8.418-5.231L0,40.146Z' fill='${keywordColor}'/%3E%3C/svg%3E") !important;
        }
        
        .keyword-bubble.last-bubble::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61.131' height='40.146' viewBox='0 0 61.131 40.146'%3E%3Cpath id='Path_43743' data-name='Path_43743' d='M54.888,0l6.151,33.848a5.328,5.328,0,0,1-8.418,5.231L0,0Z' fill='${keywordColor}'/%3E%3C/svg%3E") !important;
        }
        
        .right-bottom-tail .keyword-bubble.last-bubble::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.997' height='16.38' viewBox='0 0 20.997 16.38'%3E%3Cpath id='Path_43871' data-name='Path_43871' d='M14.98,19.672V1.958C15.216.48,13.741-.564,12.682.332L0,12.656Z' transform='translate(20.459 0.868) rotate(90)' fill='${keywordColor}' stroke='rgba(0,0,0,0)' stroke-miterlimit='10' stroke-width='1'/%3E%3C/svg%3E") !important;
        }
    `;


    document.head.appendChild(styleElement);
},

applyTailPositions() {
    const container = this.dom;

    if (this.topTailPosition === 'none') {
        container.classList.add('hide-top-tail');
    } else if (this.topTailPosition === 'left') {
        container.classList.add('left-top-tail');
    }

    if (this.bottomTailPosition === 'none') {
        container.classList.add('hide-bottom-tail');
    } else if (this.bottomTailPosition === 'right') {
        container.classList.add('right-bottom-tail');
    }
},

applySkewSetting() {

    if (this.skew === false) {
        this.dom.classList.add('no-skew');
    }
},

createDOM(processedLines, isSingleLine) {

    const container = this.dom.querySelector('.speech-bubble-container');
    this.bubbles = [];

    for (let i = 0; i < processedLines.length; i++) {
        const line = processedLines[i];
        const isKeyword = this.isKeyword(line.text);
        const bubble = document.createElement('div');
        bubble.innerHTML = line.text;

        bubble.classList.add('speech-bubble');

        if (isKeyword) {
            bubble.style.fontSize = this.fontSizeRed + 'px';
            bubble.classList.add('keyword-bubble');
        } else {
            bubble.style.fontSize = this.fontSize + 'px';
            bubble.classList.add('regular-bubble');
        }
        if (isSingleLine) {

            if (i === 0)
                bubble.classList.add('first-bubble');
        } else {


            if (i === 0) {
                bubble.classList.add('first-bubble');
            } else if (i === processedLines.length - 1) {
                bubble.classList.add('last-bubble');
                if (isKeyword) bubble.classList.add('last-red-bubble');
            } else {
                bubble.classList.add('middle-bubble');
            }
        }
        container.appendChild(bubble);
        this.bubbles.push(bubble);
    }
},
adjustMargins(bubbles) {
    const w = [];
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        const bubbleRect = bubble.getBoundingClientRect();
        w.push(bubbleRect.width);
    }

    const threshold = this.fontSize;

    function almostEqual(a, b, t = threshold) {
        return Math.abs(a - b) <= t;
    }

    if (w[1] > w[0] + threshold) {
        if (w.length == 2) this.applyMargin(3);
        else if (w[2] < w[1] - threshold) this.applyMargin(3);
        else if (almostEqual(w[2], w[1])) this.applyMargin(2);
        else this.applyMargin(1);
    } else if (almostEqual(w[1], w[0])) {
        if (w.length == 2 || almostEqual(w[2], w[1])) this.applyMargin(2);
        else if (w[2] < w[1] - threshold) this.applyMargin(4);
        else this.applyMargin(1);
    } else if (w[1] < w[0] - threshold) {
        if (w.length == 2) this.applyMargin(5);
        else if (w[2] < w[1] - threshold) this.applyMargin(6);
        else if (almostEqual(w[2], w[1])) this.applyMargin(6);
        else this.applyMargin(5);
    } else this.applyMargin(1);
},
applyMargin(layoutID) {
    const marginEM = 0.75;

    const layouts = [{
        id: 1, margins: [{direction: 'left', margin: 1}, {direction: 'left', margin: -1}]
    },
        {
            id: 2, margins: [{direction: 'left', margin: 1}, {direction: 'left', margin: 1}]
        },
        {
            id: 3, margins: [{direction: 'left', margin: -1}, {direction: 'right', margin: 1.5}]
        },
        {
            id: 4, margins: [{direction: 'left', margin: 1}, {direction: 'right', margin: 1.25}]
        },
        {
            id: 5, margins: [{direction: 'left', margin: 1}, {direction: 'left', margin: -1.5}]
        },
        {
            id: 6, margins: [{direction: 'left', margin: 1}, {direction: 'right', margin: -0.25}]
        }
    ];


    const selectedLayout = layouts.find(layout => layout.id === layoutID);
    if (!selectedLayout || !this.bubbles) {
        return;
    }


    const container = this.dom.querySelector('.speech-bubble-container');
    container.style.position = 'relative';


    for (let i = 1; i < this.bubbles.length && i <= selectedLayout.margins.length; i++) {
        const bubble = this.bubbles[i];
        const prevBubble = this.bubbles[i - 1];
        const margin = selectedLayout.margins[i - 1];
        const marginValue = margin.margin * marginEM;
        const isKeyword = bubble.classList.contains('keyword-bubble');
        const fontSize = isKeyword ? this.fontSizeRed : this.fontSize;


        bubble.style.position = 'absolute';
        bubble.style.top = '';
        bubble.style.bottom = '';
        bubble.style.left = '';
        bubble.style.right = '';

        const prevRect = prevBubble.getBoundingClientRect();

        const containerRect = container.getBoundingClientRect();


        if (margin.direction === 'left') {
            const leftPosition = prevRect.left - containerRect.left + marginValue * fontSize;
            bubble.style.left = `${leftPosition}px`;
            console.log(`bubble: ${i}  pref left ${prevRect.left} left position: ${leftPosition}px`)
        } else if (margin.direction === 'right') {
            const rightPosition = containerRect.right - prevRect.right + marginValue * fontSize;

            bubble.style.right = `${rightPosition}px`;
            console.log(`bubble: ${i} right position: ${rightPosition}px`)
        }
    }


    console.log(`layout ${selectedLayout.id}`)

},
alignVertically(bubbles) {

    const container = this.dom.querySelector('.speech-bubble-container');
    const domRect = this.dom.getBoundingClientRect();
    let verticalAlign = 'middle';
    if (this.bubbles.length === 1
        || (manifest.settings.width == 970 && manifest.settings.height == 250 || manifest.settings.width == 320 )) verticalAlign = 'middle';

    window.verticalAlign = verticalAlign;

    if (verticalAlign === 'top') {
        let currentPosition = 0;
        for (let i = 0; i < this.bubbles.length; i++) {
            const bubble = this.bubbles[i];
            bubble.style.position = 'absolute';
            bubble.style.top = `${currentPosition}px`;

            currentPosition += bubble.getBoundingClientRect().height;
        }
    } else if (verticalAlign === 'middle') { 

        let totalHeight = 0;
        for (let j = 0; j < this.bubbles.length; j++) {
            const bubbleRect = this.bubbles[j].getBoundingClientRect();
            totalHeight += bubbleRect.height;
        }

        const containerHeight = container.getBoundingClientRect().height;
        const startPosition = Math.floor((containerHeight - totalHeight) / 2);

        let currentPosition = startPosition;
        for (let j = 0; j < this.bubbles.length; j++) {
            const bubble = this.bubbles[j];
            bubble.style.position = 'absolute';
            bubble.style.top = `${currentPosition}px`;

            currentPosition += bubble.getBoundingClientRect().height;
        }
    } else if (verticalAlign === 'bottom') {

        let totalHeight = 0;
        for (let j = 0; j < this.bubbles.length; j++) {
            const bubbleRect = this.bubbles[j].getBoundingClientRect();
            totalHeight += bubbleRect.height;
        }

        const containerHeight = container.getBoundingClientRect().height;
        const startPosition = Math.floor(containerHeight - totalHeight);

        let currentPosition = startPosition;
        for (let j = 0; j < this.bubbles.length; j++) {
            const bubble = this.bubbles[j];
            bubble.style.position = 'absolute';
            bubble.style.top = `${currentPosition}px`;
            currentPosition += bubble.getBoundingClientRect().height;
        }
    }
},
adjustCorners(bubbles) {
    if (this.skew == true) {


        const roundTopLeft = "0.3em";
        const roundBottomLeft = "0.075em";
        const roundTopRight = "0.075em";
        const roundBottomRight = "0.3em";
        const flat = "0em";

        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i];
            const bubbleRect = bubble.getBoundingClientRect();

            const isFirstBubble = i === 0;
            const isLastBubble = i === bubbles.length - 1;

            const prevBubble = i > 0 ? bubbles[i - 1] : null;
            const nextBubble = i < bubbles.length - 1 ? bubbles[i + 1] : null;

            const prevRect = prevBubble ? prevBubble.getBoundingClientRect() : null;
            const nextRect = nextBubble ? nextBubble.getBoundingClientRect() : null;

            let topLeft = flat;
            let bottomLeft = flat;
            let topRight = flat;
            let bottomRight = flat;

            if (isFirstBubble) {
                topLeft = roundTopLeft;
                topRight = roundTopRight;
            } else {

                if (prevRect && prevRect.left > bubbleRect.left) {
                    topLeft = roundTopLeft;
                }
                if (prevRect && prevRect.right < bubbleRect.right) {
                    topRight = roundTopRight;
                }
            }

            if (isLastBubble) {
                bottomLeft = roundBottomLeft;
                bottomRight = roundBottomRight;
            } else {
                if (nextRect && nextRect.left > bubbleRect.left) {
                    bottomLeft = roundBottomLeft;
                }
                if (nextRect && nextRect.right < bubbleRect.right) {
                    bottomRight = roundBottomRight;
                }
            }
            bubble.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;

        }


    } else {
        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i];
            const rounded = "0.3em";

            bubble.style.borderRadius = `${rounded} ${rounded} ${rounded} ${rounded}`;
        }
    }
},
readjustCopy(bubbles) {
    if (!bubbles || bubbles.length === 0) return;

    for (let bubble of bubbles) {
        const originalContent = bubble.innerHTML;
        bubble.innerHTML = `<div class="bubble-text">${originalContent}</div>`;

        if (this.skew == false) {
            const bubbleText = bubble.querySelector('.bubble-text');
            const bubbleTextWidth = bubbleText.getBoundingClientRect().width;
            bubble.style.width = `${bubbleTextWidth}px`;
        }
    }

},
centerContent(bubbles) {
    if (!bubbles || bubbles.length === 0) return;


    const container = this.dom;
    const containerRect = container.getBoundingClientRect();

    let leftmostPoint = Infinity;
    let rightmostPoint = -Infinity;

    bubbles.forEach(bubble => {
        const bubbleRect = bubble.getBoundingClientRect();
        leftmostPoint = Math.min(leftmostPoint, bubbleRect.left);
        rightmostPoint = Math.max(rightmostPoint, bubbleRect.right);
    });

    const totalWidth = rightmostPoint - leftmostPoint;
    const shift = (containerRect.width - totalWidth) / 2 - (leftmostPoint - containerRect.left);

    bubbles.forEach(bubble => {
        if (bubble.style.right !== '' && bubble.style.right !== 'auto') {
            const currentRight = parseFloat(bubble.style.right) || 0;
            bubble.style.right = `${currentRight - shift}px`;
        } else {
            const currentLeft = parseFloat(bubble.style.left) || 0;
            bubble.style.left = `${currentLeft + shift}px`;
        }
    });
},
resizeToFit(bubbles) {
    if (!bubbles || bubbles.length === 0) return;
    const container = this.dom.querySelector('.speech-bubble-container');
    const domRect = this.dom.getBoundingClientRect();
    const buffer = this.fontSize * 0.45;

    let minLeft = Infinity;
    let minTop = Infinity;
    let maxRight = -Infinity;
    let maxBottom = -Infinity;

    let leftBuffer = this.topTailPosition === 'left' ? -buffer : 0;
    let rightBuffer = this.bottomTailPosition === 'right' ? buffer : 0;
    let topBuffer = this.topTailPosition === 'top' ? -buffer : 0;

    let bottomBuffer = this.bottomTailPosition === 'bottom' ? buffer : 0;
    let i = 0
    bubbles.forEach(bubble => {
        const rect = bubble.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(bubble);


        const adjustedLeft = rect.left + (i == 0 ? leftBuffer : 0);
        const adjustedTop = rect.top + (i == 0 ? topBuffer : 0);
        const adjustedRight = rect.right + (i == (bubbles.length - 1) ? rightBuffer : 0);
        const adjustedBottom = rect.bottom + (i == (bubbles.length - 1) ? bottomBuffer : 0);

        minLeft = Math.min(minLeft, adjustedLeft);
        minTop = Math.min(minTop, adjustedTop);
        maxRight = Math.max(maxRight, adjustedRight);
        maxBottom = Math.max(maxBottom, adjustedBottom);
        i++;
    });


    const leftOverflow = Math.max(0, domRect.left - minLeft);
    const rightOverflow = Math.max(0, maxRight - domRect.right);
    const topOverflow = Math.max(0, domRect.top - minTop);
    const bottomOverflow = Math.max(0, maxBottom - domRect.bottom);

    const needsResize = leftOverflow > 0 || rightOverflow > 0 || topOverflow > 0 || bottomOverflow > 0;

    if (needsResize) {
        const requiredWidth = domRect.width + leftOverflow + rightOverflow;
        const requiredHeight = domRect.height + topOverflow + bottomOverflow;

        const scaleX = domRect.width / requiredWidth;
        const scaleY = domRect.height / requiredHeight;
        const scale = Math.min(scaleX, scaleY);

        const verticalAlign = window.verticalAlign || 'center';
        let verticalOrigin = 'center';

        if (verticalAlign === 'bottom') {
            verticalOrigin = 'bottom';
            container.style.marginTop = `-${buffer}px`;
        }

        container.style.transformOrigin = `center ${verticalOrigin}`;
        container.style.transform = `scale(${scale * 0.98})`;

        console.log(`Scaling applied: ${scale.toFixed(3)}, vertical alignment: ${verticalOrigin}`);
    }

},
alignSpecialCases(bubbles) {

    if( this.skew == false && (manifest.settings.width == 320 ||manifest.settings.width == 120 || manifest.settings.width==160) ){

        for (let i=0; i<bubbles.length; i++){
            const bubble = bubbles[i];
            if(i==0) bubble.style.left = '0';
            else {
                bubble.style.left = 'auto';
                bubble.style.right = '0';
            }
        }

    }
},
splitLines(text) {
    let processedLines = [];
    let segments = text.split('|');
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i].trim();
        if (segment === '') continue;

        processedLines.push({
            text: segment, originalIndex: i
        });

    }


    if (this.maxCharacters && this.skew == true) {
        for (let i = 0; i < processedLines.length; i++) {
            let lineObj = processedLines[i];
            let text = lineObj.text;
            let effectiveLength = text.replace(/<br>/g, '').length;

            if (effectiveLength > this.maxCharacters) {
                if (effectiveLength + 3 <= this.maxCharacters) {

                    text = text + "...";
                } else {

                    text = text.substring(0, this.maxCharacters - 3) + "...";
                }

                lineObj.text = text;
                processedLines[i] = lineObj;

            }
        }
    }

    return processedLines;
},
isKeyword(text) {
    let isKeyword = false;
    this.keyWords.forEach(keyword => {
        if (text == keyword) {
            isKeyword = true;
        }
    })
    return isKeyword;
},

splitByCharCount(text, originalIndex, linesArray) {

    linesArray.push({
        text: text, originalIndex: originalIndex
    });

},
addBorders(bubbles) {

    if (bubbles.length == 2) {
        const bubble = bubbles[0];
        const computedStyle = window.getComputedStyle(bubble);
        const backgroundColor = computedStyle.backgroundColor;

        if (this.skew == false) {
            if (this.topTailPosition == 'top')
                bubble.style.setProperty('--top-tail-margin', "-0.6em");
            else
                bubble.style.setProperty('--top-tail-margin', "0.09em");
        } else
            bubble.style.setProperty('--top-tail-margin', "0.05em");

        if (this.skew == false) {
            if (this.bottomTailPosition == 'bottom')

                bubbles[1].style.setProperty('--bottom-tail-margin', "-0.5em");
            else
                bubbles[1].style.setProperty('--bottom-tail-margin', "0.0em");
        } else bubbles[1].style.setProperty('--bottom-tail-margin', "0.05em");
        return;
    } else if (bubbles.length == 1) {
        if (this.skew == false) {
            if (manifest.settings.width == 320 && this.isLastShot == true) {
                bubbles[0].classList.add('last-shot-special-bubble');

                const styleTag = document.createElement('style');
                styleTag.textContent = `
        .speech-bubble-container .speech-bubble.first-bubble.last-shot-special-bubble::before {
            bottom: -0.1em !important;
            top: auto !important;
            left: auto !important;
            right: -0.6em !important;
            transform: rotate(80deg) scale(var(--tail-scale, 0.5)) !important;
        }
    `;
                document.head.appendChild(styleTag);

            } else if (this.topTailPosition == 'left')
                bubbles[0].style.setProperty('--top-tail-margin', "0.04em");
            else if (this.topTailPosition == 'top')
                bubbles[0].style.setProperty('--top-tail-margin', "-0.6em");
        }
    }


    bubbles.forEach((bubble, index) => {

        if (bubbles.length === 3 && index === 1)
            return;

        if (bubbles.length === 2 && index === 1)
            return;


        const computedStyle = window.getComputedStyle(bubble);
        const backgroundColor = computedStyle.backgroundColor;

        bubble.style.border = `0.05em solid ${backgroundColor}`;
    });


},
adjustLastShotSize(bubbles) {
    if (this.isLastShot && this.lastShotEnable == true) {
        gsap.set(this.dom, {
            x: this.lastShotX,
            y: this.lastShotY,
            width: this.lastShotWidth,
            height: this.lastShotHeight
        })

    }
}
, animate(timeline) {

    this.adjustLastShotSize(this.bubbles);
    this.adjustMargins(this.bubbles);
    this.alignVertically(this.bubbles);
    this.adjustCorners(this.bubbles);
    this.readjustCopy(this.bubbles);
    this.centerContent(this.bubbles);
    this.resizeToFit(this.bubbles);
    this.alignSpecialCases(this.bubbles);
    this.addBorders(this.bubbles);


    timeline.fromTo(this.bubbles, {
        opacity: 0, y: 30, scale: 0.5, transformOrigin: "center center"
    }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 1.2, ease: "back.out(1.7)"
    }, this.delay);

    if (this.animateAllAtOnce != true) {
        timeline.fromTo('.bubble-text span', {
            opacity: 0, y: 30, scale: 0.5, transformOrigin: "center center"
        }, {
            opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 1.2, ease: "back.out(1.7)"
        }, 0.5);
    }


}, onMouseClick() {
}, onMouseOver() {
}, onMouseOut() {
}, onSwipe(swipe) {
}
};