this.grid8player = {
  layers: [],
  loop: 0,
  bDebugMode: false,
  bDebugButton: 'play',
  bMasterTimelineCompleted: false,
  bHoverTimelineCompleted: false,
  componentsToLoad: 0,
  components: [],
  instancedComponents: [],
  effectsToLoad: 0,
  effects: [],
  effectsToInit:[],
  instancedEffects: [],
  transitionsToLoad: 0,
  transitions: [],
  transitionFrames:[],
  instancedTransitions: [],
  videoDuration: 0,
  shotTimelines: [],
  shotOutTimelines: [],
  customScriptsToExecute: [],
  globalScripts: function () {},
  timelineMaster: null, //master timeline
  timelineHover: null,
  timelineClick: null,
  timelineSwipe: {
    'left': null,
    'right': null,
    'up': null,
    'down': null
  },
  currentShot: null, //if we don't auto play
  duration: 0,
  editorMode: false,
  editedLayer: undefined,
  blockAnimations: false,
  originalManifest: undefined,
  swipeThreshold: 10,
  shotsPlayedCounter: [],
  init: function (onReadyCallback) {
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
      trialWarn: true,
      units: {
        left: "%",
        top: "%",
        rotation: "deg"
      }
    });
    var self = this;
    console.log(manifest);
    this.originalManifest = JSON.parse(JSON.stringify(manifest));
    this.loadFonts(function () {
      self.loadComponents(function () {
        self.loadEffects(function () {
          self.loadTransitions(function () {
        self.initLayers(function () {
          self.animationLoaded();
          self.buildTimelines();
          console.log('executing custom code');
          self.globalScripts();
          for (let i = 0; i < self.customScriptsToExecute.length; i++) {
            const cs = self.customScriptsToExecute[i];
            cs.onStart();
          }
          console.log('complete');

          gsap.delayedCall(0.1, function () {
            externalAnimation(self.timelineMaster, self.getAllDOMLayers());
            window.addEventListener("resize", self.onResize);
            self.onResize();
            if (onReadyCallback != undefined) {
              onReadyCallback();
            } else
              gsap.delayedCall(0.1, function () {
                if (manifest.settings.autoPlay == false) {
                  self.shotTimelines[0].play();
                  self.currentShot = 0;
                  self.duration = self.timelineMaster.totalDuration();

                } else {
                  console.log('play animation');
                  self.timelineMaster.play();
                  self.duration = self.timelineMaster.totalDuration();
                }

              });
          });




        });
        });
        });
      });
    });

    this.initPlatformEvents();
    if (manifest.settings.useSwipeEvents == true)
      this.initTouchEvents();
  },
  initTouchEvents() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let self = this;

    function handleGesture(touchStartX, touchStartY, touchEndX, touchEndY) {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) < self.swipeThreshold) return {
          "type": "tap"
        };
        if (deltaX > 0) return {
          "type": "right",
          "x": deltaX,
          "y": deltaY
        };
        else return {
          "type": "left",
          "x": deltaX,
          "y": deltaY
        }
      } else if (Math.abs(deltaX) < Math.abs(deltaY)) {
        if (Math.abs(deltaY) < self.swipeThreshold) return "tap";

        if (deltaY > 0) return {
          "type": "down",
          "x": deltaX,
          "y": deltaY
        }
        else return {
          "type": "up",
          "x": deltaX,
          "y": deltaY
        };
      } else return "tap";
    }

    function isTouch() {
      return matchMedia('(hover: none)').matches;
    }

    function onTouchStart(event) {

      touchStartX = (isTouch() && event.changedTouches.length > 0) ? event.changedTouches[0].screenX : event.clientX;
      touchStartY = (isTouch() && event.changedTouches.length > 0) ? event.changedTouches[0].screenY : event.clientY;
    }

    function onTouchEnd(event) {
      touchEndX = (isTouch() && event.changedTouches.length > 0) ? event.changedTouches[0].screenX : event.clientX;
      touchEndY = (isTouch() && event.changedTouches.length > 0) ? event.changedTouches[0].screenY : event.clientY;
      let swipe = handleGesture(touchStartX, touchStartY, touchEndX, touchEndY);
      switch (swipe.type) {
        case "tap":
          window.onClick();
          break;
        default:
          self.onSwipe(swipe);

      }
    }
    const clickLayer = document.getElementById('clickLayer');

    clickLayer.addEventListener('touchstart', onTouchStart, false);
    clickLayer.addEventListener('touchend', onTouchEnd, false);

    clickLayer.onclick = function () {};

    if (!isTouch()) {

      //   this.element.addEventListener('mousedown', this._onTouchStart, passiveIfSupported);
      //  document.addEventListener('mousemove', this._onTouchMove, passiveIfSupported);
      // document.addEventListener('mouseup', this._onTouchEnd, passiveIfSupported);

      clickLayer.addEventListener('mousedown', onTouchStart, false);
      clickLayer.addEventListener('mouseup', onTouchEnd, false);

    }

  },

  initPlatformEvents() {
    return;
    window.addEventListener('message', function (e) {
      // Get the sent data
      const data = JSON.parse(e.data);
      console.log(data);
      switch (data.type) {
        case "showShot":
          this.showShot(data.index);
          break;
        case "editLayer":

          this.editLayer("#layer-" + this.getLayerIDFromName(data.id));
          break;
        case "rebuild":

          console.log(data.layerData);

          let tempLayer = this.getLayerByID(this.getLayerIDFromName(data.layerData.id));

          for (const [key, value] of Object.entries(data.layerData)) {
            if (key == 'componentManifest') tempLayer[key].properties = data.layerData[key];
            else if (key == 'zIndex') tempLayer.shots[0].zIndex = data.layerData[key];
            else if (key != 'guid') tempLayer[key] = data.layerData[key];
          }

          this.rebuild();
          break;
        case "preview":
          this.editLayer('');
          this.currentShot = null;
          this.playShot(data.index);
          break;
      }
      // If you encode the message in JSON before sending them,
      // then decode here
      // const decoded = JSON.parse(data);
    }.bind(this));
  },
  playShot: function (index) {
    console.log("play shot ", index);
    let outDuration = 0;
    let self = this;
    if (index == this.currentShot || manifest.settings.autoPlay == true) return;
    if (this.currentShot != null) {
      if ((new Error()).stack.indexOf("nav8.js") > -1) this.shotTimelines[this.currentShot].progress(1, false);
      this.shotOutTimelines[this.currentShot].play(0);
      outDuration = this.shotOutTimelines[this.currentShot].totalDuration();
      this.blockAnimations = true;

    }
    self.currentShot = index;
    gsap.delayedCall(outDuration - parseFloat(manifest.settings.overlapBetweenShots), function () {
      outDuration = self.shotTimelines[self.currentShot].totalDuration();

      gsap.delayedCall(outDuration, function () {
        self.blockAnimations = false;
      });
      self.shotTimelines[self.currentShot].play(0);
    });

  },
  showShot: function (index) {
    this.currentShot = index;
    for (let l = 0; l < manifest.layers.length; l++)

    {
      let layer = manifest.layers[l];
      let visibility = 'hidden';
      let opacity = 0;


      if (layer.shots.find(x => x.index == index)) {
        visibility = 'visible';
        opacity = 1;
      }

      console.log(this.getLayerByID(layer.guid));

      let dom = $('#layer-' + layer.guid);
   
      dom.style.visibility = visibility;
      dom.style.opacity = opacity;

      this.shotTimelines[index].timeScale(100);
      this.shotTimelines[index].play(0);

      gsap.delayedCall(0.1, function () {
        this.shotTimelines[index].timeScale(1);
      }.bind(this));

      this.editLayer("");
    }
  },
  editLayer: function (id) {

    this.resizable = $('.resizable')[0];

    let layer = $(id);
    if (layer == undefined) {
      this.resizable.style.display = "none";
      return;
    }

    this.resizable.style.display = "block";
    this.resizable.style.width = layer.offsetWidth + "px";
    this.resizable.style.height = layer.offsetHeight + "px";
    this.resizable.style.transform = layer.style.transform;
    this.editedLayer = layer;
    this.initResizable();

    this.editorMode = true;
    //   this.resizable.style.height = 200+"px";
  },
  initResizable: function () {
    let resizable = this.resizable;
    let resizers = $('.resizer');
    let rotators = $('.rotator');
    let xdLayer = this.getLayerByID(grid8player.editedLayer.id.replace("layer-", ""));
    for (let index = 0; index < resizers.length; index++) {
      const resizer = resizers[index];

      resizer.onmousedown = function (event) {
        event.preventDefault();
        event.stopPropagation();

        let shiftX = event.clientX - getTranslateXY(resizer).x;
        let shiftY = event.clientY - getTranslateXY(resizer).y;

        let originalWidth = parseInt(resizable.style.width);
        let originalHeight = parseInt(resizable.style.height);

        let originalX = getTranslateXY(resizable).x;
        let originalY = getTranslateXY(resizable).y;

        function scaleAt(pageX, pageY, e) {
          let x = pageX - shiftX;
          if (resizer.classList.contains('bottom-left') || resizer.classList.contains('top-left')) x = -(pageX - shiftX);
          let y = pageY - shiftY;
          if (resizer.classList.contains('top-right') || resizer.classList.contains('top-left')) y = -(pageY - shiftY);

          if (!e.shiftKey && xdLayer.fileType != 'text') {
            let total = x + y;
            x = total;
            let ratio = (originalWidth + x) / originalWidth;
            y = ratio * originalHeight - originalHeight;
          }
          let pX = (originalX - x / 2) + "px";
          let pY = (originalY - y / 2) + "px";

          grid8player.editedLayer.style.width = resizable.style.width = (originalWidth + x) + "px";
          grid8player.editedLayer.style.height = resizable.style.height = (originalHeight + y) + "px";

          gsap.set([grid8player.editedLayer, resizable], {
            x: pX,
            y: pY

          });
        }

        function onMouseMove(event) {
          scaleAt(event.pageX, event.pageY, event);

        }

        function cancelDrag() {
          resizer.onmouseup = null;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('onmouseup', onMouseMove);
          grid8player.saveToManifest(grid8player.editedLayer, getTranslateXY(resizable).x, getTranslateXY(resizable).y, grid8player.editedLayer.style.width, grid8player.editedLayer.style.height);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', cancelDrag);
      };
    }

    for (let index = 0; index < rotators.length; index++) {
      const rotator = rotators[index];

      rotator.onmousedown = function (event) {
        event.preventDefault();
        event.stopPropagation();

        let shiftX = event.clientX - getTranslateXY(rotator).x;
        let shiftY = event.clientY - getTranslateXY(rotator).y;

        let originalRotationX = getRotation(resizable).x;
        let originalRotationY = getRotation(resizable).y;
        let originalRotationZ = getRotation(resizable).z;

        let originalX = getTranslateXY(resizable).x;
        let originalY = getTranslateXY(resizable).y;

        const boundingRect = grid8player.editedLayer.getBoundingClientRect();
        const centerX = boundingRect.left + boundingRect.width / 2;
        const centerY = boundingRect.top + boundingRect.height / 2;

        function scaleAt(pageX, pageY, e) {
          let y = pageX - shiftX;

          let x = pageY - shiftY;
          let z = x + y + originalRotationZ;
          // let z2 = z;
          x = y = 0;

          const center_x = originalX;
          const center_y = originalY;
          const mouse_x = pageX;
          const mouse_y = pageY;
          const radians = Math.atan2(mouse_x - centerX, mouse_y - centerY);
          const degree = radians * (180 / Math.PI) * -1 + 180;
          z = degree;


          if (!e.shiftKey) {
            z = Math.round(z / 45) * 45;
          }



          // if (e.shiftKey) {
          //     z = 0;
          // }
          // else{
          //   x=y=0;
          // }


          gsap.set([grid8player.editedLayer, resizable], {
            x: originalX,
            y: originalY,
            rotationX: originalRotationX + x,
            rotationY: originalRotationY + y,
            rotationZ: z
          });
        }

        function onMouseMove(event) {
          scaleAt(event.pageX, event.pageY, event);

        }

        function cancelDrag() {
          rotator.onmouseup = null;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('onmouseup', onMouseMove);
          grid8player.saveToManifest(grid8player.editedLayer, getTranslateXY(resizable).x, getTranslateXY(resizable).y, grid8player.editedLayer.style.width, grid8player.editedLayer.style.height, getRotation(resizable).x, getRotation(resizable).y, getRotation(resizable).z);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', cancelDrag);
      };
    }
    resizable.onmousedown = function (event) {
      event.preventDefault();
      event.stopPropagation();

      let shiftX = event.clientX - getTranslateXY(resizable).x;
      let shiftY = event.clientY - getTranslateXY(resizable).y;

      let originalWidth = parseInt(resizable.style.width);
      let originalHeight = parseInt(resizable.style.height);

      let target = event.target;


      function moveAt(pageX, pageY) {
        let x = pageX - shiftX + 'px';
        let y = pageY - shiftY + 'px';

        gsap.set([grid8player.editedLayer, resizable], {
          x: x,
          y: y,
          rotationX: getRotation(grid8player.editedLayer).x,
          rotationY: getRotation(grid8player.editedLayer).y,
          rotationZ: getRotation(grid8player.editedLayer).z
        });

      }



      function onMouseMove(event) {

        moveAt(event.pageX, event.pageY);
      }

      // move the resizable on mousemove
      document.addEventListener('mousemove', onMouseMove);

      // drop the resizable, remove unneeded handlers
      resizable.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        resizable.onmouseup = null;
        grid8player.saveToManifest(grid8player.editedLayer, getTranslateXY(resizable).x, getTranslateXY(resizable).y);
      };
      resizable.onmouseleave = function () {
        document.removeEventListener('mousemove', onMouseMove);
        resizable.onmouseleave = null;
        grid8player.saveToManifest(grid8player.editedLayer, getTranslateXY(resizable).x, getTranslateXY(resizable).y);

      };
    };


  },
  saveToManifest: function (layer, x, y, w, h, rx, ry, rz) {
    console.log('save', layer, x, y);
    let shotIndex = this.currentShot;

    let l = manifest.layers.find(x => `layer-${x.guid}` == layer.id);
    let shot = l.shots.find(x => x.index == this.currentShot);

    shot.pos.x = parseFloat(x);
    shot.pos.y = parseFloat(y);

    if (w != undefined)
      shot.size.initW = parseFloat(w);

    if (h != undefined)
      shot.size.initH = parseFloat(h);

    if (rx != undefined) shot.rotationX = rx;
    if (ry != undefined) shot.rotationY = ry;
    if (rz != undefined) shot.rotation = rz;

  },
  rebuild: function () {
    let shotIndex = this.currentShot;
    this.initLayers(function () {

      //todo: uncomment for grid8editor grid8player.buildTimelines();

      for (let i = 0; i < manifest.layers.length; i++)

      {
        let tempLayer = manifest.layers[i];
        let visibility = 'hidden';
        let opacity = 0;

        if (tempLayer.shots.find(x => x.index == shotIndex)) {
          visibility = 'visible';
          opacity = 1;
        }
        let dom = $('#layer-' + tempLayer.guid);
        dom.style.visibility = visibility;
        dom.style.opacity = opacity;


      }
      grid8player.shotTimelines[shotIndex].pause(grid8player.shotTimelines[shotIndex].duration());
      this.editLayer("#" + this.editedLayer.id);
    }.bind(this));
  },
  onVideoReady: function () {
    
    this.animationLoaded();
    this.buildTimelines();
    this.timelineMaster.pause();
    this.waitForVideoAndPlay();

  },
  waitForVideoAndPlay(){
    console.log('waiting....');
    let self = this;
    setTimeout(() => {
      if(video.currentTime==0){
        self.waitForVideoAndPlay();
        return;
      }
     self.timelineMaster.play(video.currentTime);
   $('#ad').style.opacity=1;

    }, 100);

  },
  buildTimelines: function () {
    this.customScriptsToExecute =[];
    this.shotsPlayedCounter = [];
    this.shotTimelines = [];
    this.shotOutTimelines = [];
    this.timelineMaster = gsap.timeline({
      repeat: GetValue(manifest.settings.loop),
      repeatDelay: GetValue(manifest.settings.loopDelay),
      paused: true,
      onComplete: this.onComplete.bind(this),
      onUpdate: this.onUpdate
    });

    this.timelineHover = gsap.timeline({
      paused: true,
      onComplete: this.onHoverComplete.bind(this)
    });

    this.timelineSwipe['left'] = gsap.timeline({
      paused: true
    });
    this.timelineSwipe['right'] = gsap.timeline({
      paused: true
    });
    this.timelineSwipe['up'] = gsap.timeline({
      paused: true
    });
    this.timelineSwipe['down'] = gsap.timeline({
      paused: true
    });
    this.timelineClick = gsap.timeline({
      paused: true,
      onComplete: this.onHoverComplete.bind(this)
    });
    
    let previousShotDelay = 0;
    let totalDelay = 0;

    const overlap = manifest.settings.overlapBetweenShots;

    for (let i = 0; i < manifest.shots.length; i++) {
    
      var timelines = this.buildShotTimeline(manifest.shots[i]);
      
      if(i!=0)
      this.timelineMaster.to(`.shot${i}`,{'visibility':'hidden'},0);

      if (manifest.settings.autoPlay != false) {
        let shotDelay = 0;
        shotDelay = previousShotDelay;

        if (!isNaN(manifest.shots[i].duration)) {
          previousShotDelay = parseFloat(manifest.shots[i].duration);
        } else {
          previousShotDelay = timelines.shotTimeline.totalDuration();
        }

        this.timelineClick.add(timelines.clickTimeline, 0);

        totalDelay += shotDelay;

        this.timelineMaster.addLabel(`shot${i}`, totalDelay);
        this.timelineMaster.add(timelines.shotTimeline, totalDelay);
        if (i < (manifest.shots.length - 1)) {
          this.timelineMaster.add(timelines.shotOutTimeline, totalDelay+previousShotDelay);
        }
        timelines.shotOutTimeline.paused = false;
        this.timelineMaster.to(`.shot${i}`,{'visibility':'visible'},totalDelay);
        

      } else {
        this.shotOutTimelines.push(timelines.shotOutTimeline);
      this.timelineMaster.addLabel(`shot${i}`, this.timelineMaster.duration());

      }

      this.shotTimelines.push(timelines.shotTimeline);

      this.timelineHover.add(timelines.hoverTimeline, 0);

      this.timelineSwipe['left'].add(timelines.swipeLeftTimeline, 0);
      this.timelineSwipe['right'].add(timelines.swipeRightTimeline, 0);
      this.timelineSwipe['up'].add(timelines.swipeUpTimeline, 0);
      this.timelineSwipe['down'].add(timelines.swipeDownTimeline, 0);

    }
  },
  onShotStart: function (shot) {
    let self = this;
    console.log(`shot ${shot.index} started`);
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      if (layer.shots[0].index == shot.index) {
        layer.div.classList.remove('hidden8');

        let component = layer.div.component; //this.components.find(x=>x.guid==layer.guid);
        if (component != undefined) {
          if (typeof component.onStart === 'function')
            component.onStart(self.shotsPlayedCounter.indexOf(shot.index) == -1);
        }

        if(layer.div.effects != undefined){

          layer.div.effects.forEach(effect => {
            if (typeof effect.onStart === 'function')
            effect.onStart(self.shotsPlayedCounter.indexOf(shot.index) == -1);
          });

        }
      }
    }
    if (self.shotsPlayedCounter.indexOf(shot.index) == -1) self.shotsPlayedCounter.push(shot.index);
    this.currentShot = shot.index;
    if(shot.index>0){
   //   grid8player.shotOutTimelines[this.currentShot-1].play(0);
    }

  },
  buildShotTimeline: function (shot) {

    var timelines = {
      shotTimeline: manifest.settings.autoPlay == false ?
        gsap.timeline({
          paused: true,
          onStart: this.onShotStart.bind(this),
          onStartParams: [shot]
        }) : gsap.timeline({
          onStart: this.onShotStart.bind(this),
          onStartParams: [shot]
        }),
      shotOutTimeline: gsap.timeline({
        paused: manifest.settings.autoPlay != false?false:true
      }),
      hoverTimeline: gsap.timeline(),
      swipeLeftTimeline: gsap.timeline(),
      swipeRightTimeline: gsap.timeline(),
      swipeUpTimeline: gsap.timeline(),
      swipeDownTimeline: gsap.timeline(),
      clickTimeline: gsap.timeline(),
      shotTimeLineDelay: 0
    }
    var staggers = {};

    if (manifest.customLabels == undefined) manifest.customLabels = [];

    for (let index = 0; index < manifest.customLabels.length; index++) {
      const label = manifest.customLabels[index];
      if(label.labelType == "before end" || label.labelType == "after end")
      timelines.shotOutTimeline.addLabel(label.id + "-" + shot.index, "+="+label.time);
      else
      timelines.shotTimeline.addLabel(label.id + "-" + shot.index, label.time);
    }


    var triggers = [];

    timelines.shotTimeLineDelay = this.getNegativeDelay(shot);

    for (let i = 0; i < manifest.layers.length; i++) {
      var layer = manifest.layers[i];
      var shotInLayer = this.getShotInLayer(layer, shot.index);
      var domLayer = document.getElementById("layer-" + layer.guid);
      if (domLayer == undefined) break;
      if (domLayer.component != undefined && domLayer.component.animate != undefined && shotInLayer != undefined && !layer.isCSSMask) {
        domLayer.component.animate(timelines.shotTimeline);
      }

      if (domLayer.effects != undefined && shotInLayer != undefined && !layer.isCSSMask) {
        domLayer.effects.forEach(effect => {
          if(effect.animate != undefined)
            effect.animate(timelines.shotTimeline);
        });
      }
      if (shotInLayer != null) {

        if (shotInLayer.name == 'video-layer') {

          var vtl = gsap.timeline();
          vtl.to('#empty-video', {
            //    opacity:0,
            duration: this.videoDuration
          });
        //  grid8player.masterTimeline.shotTimeline.add(vtl,0);
        }


        for (let t = 0; t < shotInLayer.timelines.length; t++) {
          var timeline = shotInLayer.timelines[t];
          if (timeline.trigger == 'None' || timeline.trigger == 'Disabled')  continue;
          let animationGroup = this.getAnimationGroup(timeline.trigger);

          if (animationGroup != null) {
            if (staggers[animationGroup.name] == undefined)
              staggers[animationGroup.name] = {
                elements: [],
                settings: animationGroup
              };
            domLayer[animationGroup.name + "-order"] = timeline.groupAnimationOrder;
            if (domLayer.splitText != undefined) {
              if (layer.textAnimation.type == 'chars')
                staggers[animationGroup.name].elements.push(domLayer.splitText.chars);

              else if (layer.textAnimation.type == 'lines')
                staggers[animationGroup.name].elements.push(domLayer.splitText.lines);

              else
                staggers[animationGroup.name].elements.push(domLayer.splitText.words);
            } else
              staggers[animationGroup.name].elements.push(domLayer);


          } else {
            var tl = gsap.timeline();



            if (tl != null && timeline.trigger == 'Timestamp') {
              //          timelines.shotTimeline.addLabel("start-"+ shot.index+"-"+layer.guid,'<');  
              console.log('start-' + shot.index + "-" + layer.guid);
            }


            for (let s = 0; s < timeline.steps.length; s++) {
              var settings = timeline.steps[s].settings;

              var posX = GetValue(settings.preset == '⭠' ? settings.x : settings.x);
              var posY = GetValue(settings.preset == '⭡' ? settings.y : settings.y);

              if (s == 0 && settings.animationType == 'from') {
                // posX *= -1;
                // posY *= -1;
              }

              var animation = {
                ease: settings.ease,
                scale: (settings.scale==""||settings.scale==undefined)?undefined:GetValue(settings.scale),
                opacity: settings.preset == 'Transition' ? 1 :( (settings.opacity===""||settings.opacity===undefined)?undefined:GetValue(settings.opacity)),
                duration: GetValue(settings.duration)
              };

              if(animation.opacity==undefined) delete animation.opacity;
              if(animation.scale==undefined) delete animation.scale;

              if (animation.duration == 0) animation.duration = 0.0001;

              if (posX != 0) animation.x = '+=' + posX;
              if (posY != 0) animation.y = '+=' + posY;

              if(settings.preset == 'GSAP Expression'){
                animation = {
              
                  duration: GetValue(settings.duration),
                  ease: settings.ease

                };

               animation = Object.assign(animation, JSON.parse(settings.customScript));

              }
              else if (settings.preset == 'Transition') {

                let domWidth = domLayer.width;
                let domHeight = domLayer.height;

                if (isNaN(domWidth) || domWidth == "") domWidth = domLayer.clientWidth;
                if (isNaN(domHeight)|| domHeight == "") domHeight = domLayer.clientHeight;

                animation = {
                  x: shotInLayer.pos.x + (shotInLayer.size.initW - domWidth) / 2,
                  y: shotInLayer.pos.y + (shotInLayer.size.initH - domHeight) / 2,
                  scale: shotInLayer.size.initW / domWidth,
                  rotationZ: GetValue(shotInLayer.rotation),
                  // opacity: GetValue(shotInLayer.opacity),
                  opacity: shotInLayer.opacity,
                  duration: GetValue(settings.duration),
                  ease: settings.ease

                };

                

                if (settings.transitPosition == false) {
                  delete animation.x;
                  delete animation.y;
                }
                if (settings.transitScale == false) {
                  delete animation.scale;
                }
                if (settings.transitRotation == false) {
                  delete animation.rotationZ;
                }

              } else {

                delete animation.rotation;
                if (settings.rotationX != undefined && settings.rotationX != "") animation.rotationX = '+=' + GetValue(settings.rotationX);
                if (settings.rotationY != undefined && settings.rotationY != "") animation.rotationY = '+=' + GetValue(settings.rotationY);
                if (settings.rotationZ != undefined && settings.rotationZ != "") animation.rotationZ = '+=' + GetValue(settings.rotationZ);

              }


              var delay = GetValue(settings.delay);
              if (delay < 0) {

                if (shot.index == layer.shots[0].index && s == 0) {

                  delay = (timelines.shotTimeLineDelay - delay) * -1;
                  delay = "+=" + delay;
                } else
                  delay = "-=" + delay * -1;
              } else {

                delay += timelines.shotTimeLineDelay * -1;
                delay = "+=" + delay;
              }


              var customPreset = this.getPreset(settings.preset);

              if (customPreset != null) {
                let presetData = customPreset.gsap;
                if (settings.overwritePreset == true) presetData = settings.presetOverwriteData;
                //  animation = JSON.parse(customPreset.gsap);
                eval("animation =" + presetData);
              }

              if (settings.preset == 'Custom Script') {
                let cs = settings.customScript;
                eval(`animation.onStart = function () {${cs}}.bind(domLayer);`);
                // animation.onComplete = function () {eval(cs); }.bind(domLayer);
                if (settings.delay === "") {
                  console.log('add to execute', layer.name)
                  this.customScriptsToExecute.push(animation);
                  // animation.onComplete();
                } else {

                  tl.to('#layer-' + layer.guid, animation, delay);
                }

                //tl.to('#layer-' + layer.guid, animation, delay);
              } else if (s == 0 && settings.animationType == 'from' && settings.preset != 'Transition' && timeline.trigger != 'On Hover Ad' && timeline.trigger != 'On Hover Layer' && t == 0) //t - timelineindex
                tl.from('#layer-' + layer.guid, animation, delay);
              else
                tl.to('#layer-' + layer.guid, animation, delay);

            }


            if (timeline.trigger == 'None' || timeline.trigger == 'Disabled') {

            } else if (tl != null && timeline.trigger == 'Timestamp' && (timeline.customLabel == 'Auto' || timeline.customLabel == '')) {

              timelines.shotTimeline.add(tl, '<');

              console.log('end-' + shot.index + "-" + layer.guid);
              //    timelines.shotTimeline.addLabel('end-'+ shot.index+"-"+layer.guid);


            } else if (tl != null && timeline.trigger == 'Timestamp') {

              let customLabel = manifest.customLabels.find(x=>x.id == timeline.customLabel);
              if(customLabel.labelType=="before end"){
                timelines.shotOutTimeline.add(tl, timeline.customLabel + "-" + shot.index);
              }
              else if(customLabel.labelType=="after end"){
                timelines.shotOutTimeline.add(tl, timeline.customLabel + "-" + shot.index);
              }
              else
              timelines.shotTimeline.add(tl, timeline.customLabel + "-" + shot.index);

            } else if (tl != null && timeline.trigger == 'Swipe Left') {
              timelines.swipeLeftTimeline.add(tl, '<');
            } else if (tl != null && timeline.trigger == 'Swipe Right') {
              timelines.swipeRightTimeline.add(tl, '<');
            } else if (tl != null && timeline.trigger == 'Swipe Top') {
              timelines.swipeUpTimeline.add(tl, '<');
            } else if (tl != null && timeline.trigger == 'Swipe Bottom') {
              timelines.swipeDownTimeline.add(tl, '<');
            } else if (tl != null && timeline.trigger == 'On Hover Ad') {
              timelines.hoverTimeline.add(tl, '<');
            } else if (tl != null && timeline.trigger == 'On Hover Layer') {
              timelines.hoverTimeline.add(tl, '<');
            }else if (tl != null && timeline.trigger == 'On Click Ad') {
              timelines.clickTimeline.add(tl, '<');
            } 
            else if (tl != null && (timeline.trigger == 'Animate Out' || manifest.animationGroups.find(g => g.id == timeline.trigger).name.indexOf('ANIMOUT') != -1)) {
              timelines.shotOutTimeline.add(tl, '<');
            } else if (timeline.trigger == 'With Layer Animation') {
              triggers.push({
                timeline: timeline,
                id: shot.index + "-" + this.getLayerIDFromName(layer.name),
                label: 'start-' + shot.index + "-" + this.getLayerIDFromName(timeline.triggerLayer),
                tl: tl,
                type: '<'
              });
              // console.log('trigger on: start-'+ shot.index+"-"+this.getLayerIDFromName(timeline.triggerLayer));

              //     timelines.shotTimeline.add(tl,'start-'+ shot.index+"-"+this.getLayerIDFromName(timeline.triggerLayer),'>');   

            } else if (timeline.trigger == 'After Layer Animation') {

              triggers.push({
                timeline: timeline,
                id: shot.index + "-" + this.getLayerIDFromName(layer.name),
                label: 'end-' + shot.index + "-" + this.getLayerIDFromName(timeline.triggerLayer),
                tl: tl,
                type: '<'
              });
              // console.log('trigger on: end-'+ shot.index+"-"+this.getLayerIDFromName(timeline.triggerLayer));

              //     timelines.shotTimeline.add(tl,'end-'+ shot.index+"-"+this.getLayerIDFromName(timeline.triggerLayer),'>');   

            }
          }
        }

      }
    }
    //       console.log(staggers);
    for (var key in staggers) {
      if (staggers.hasOwnProperty(key)) {
        //             console.log(staggers[key]);
        let settings = staggers[key].settings;
        var staggerStart = settings.staggerFrom;
        //      if (staggerStart == 'start') staggerStart = 'end';
        //    else if (staggerStart == 'end') staggerStart = 'start';
        var animation = {
          x: '+=' + settings.x,
          y: '+=' + settings.y,
          ease: settings.ease,
          scale: settings.scale===""?undefined:GetValue(settings.scale),
          opacity: GetValue(settings.opacity),
          duration: GetValue(settings.duration),
          stagger: {
            from: staggerStart,
            //  grid:settings.staggerAxis
          }
        };





        if(animation.opacity==undefined) delete animation.opacity;
        if(animation.scale==undefined) delete animation.scale;

        if(settings.customStagger!=undefined && settings.customStagger.length > 2)
        animation = Object.assign(animation, JSON.parse(settings.customStagger));
        if (animation.duration == 0) animation.duration = 0.0001;

        delete animation.rotation;
        if (settings.rotationX != undefined && settings.rotationX != "") animation.rotationX = '+=' + GetValue(settings.rotationX);
        if (settings.rotationY != undefined && settings.rotationY != "") animation.rotationY = '+=' + GetValue(settings.rotationY);
        if (settings.rotationZ != undefined && settings.rotationZ != "") animation.rotationZ = '+=' + GetValue(settings.rotationZ);

        if (settings.staggerAmountEach == 'Amount') animation.stagger.amount = settings.staggerAmount;
        else animation.stagger.each = settings.staggerAmount;

        let elements = this.sortGroupElementsByOrder(staggers[key].elements, settings.name + "-order")
        //     console.log(elements);
        if ((settings.name == 'Animate Out' || settings.name.indexOf('ANIMOUT') != -1))
          timelines.shotOutTimeline.to(elements, animation, settings.delay);
        else if (settings.animationType == 'from')
          timelines.shotTimeline.from(elements, animation, settings.delay);
        else
          timelines.shotTimeline.to(elements, animation, settings.delay);
      }
    }
    let previousTransition= null;
    let previousDuration = null;
  
    this.instancedTransitions.forEach(transition=>{
      if(transition.shot == shot.index){
        let duration = manifest.shots[shot.index].duration;
        let previousDuration = null;
        let previousTimeline = null;

        if(shot.index > 0){
          previousDuration = manifest.shots[shot.index-1].duration;
          previousTimeline = this.shotTimelines[shot.index-1];
        }
        if(!isNumber(duration)) duration = timelines.shotTimeline.duration();
        transition.transition.animate(timelines.shotTimeline, duration, previousTimeline, previousDuration);

      if (typeof transition.transition.animateIn === 'function')
        transition.transition.animateIn(timelines.shotTimeline, duration);

      if (typeof transition.transition.animateOut === 'function'){
         // transition.transition.animateOut( timelines.shotOutTimeline, previousDuration);
       transition.transition.animateOut(previousTimeline, previousDuration);
      }
       
      }
    });
    timelines.shotTimeLineDelay = "-=" + timelines.shotTimeLineDelay * -1;
    return timelines;
  },
  getNegativeDelay: function (shot) {
    var shotTimeLineDelay = 0;


    for (let i = 0; i < manifest.layers.length; i++) {
      var layer = manifest.layers[i];
      var shotInLayer = this.getShotInLayer(layer, shot.index);

      if (shotInLayer != null) {
        for (let t = 0; t < shotInLayer.timelines.length; t++) {


          var timeline = shotInLayer.timelines[t];

          for (let s = 0; s < timeline.steps.length; s++) {
            var settings = timeline.steps[s].settings;


            var delay = GetValue(settings.delay);

            if (delay < 0) {
              if (shot.index == layer.shots[0].index && s == 0) {

                if (delay < shotTimeLineDelay)
                  shotTimeLineDelay = delay;
              }
            }
          }


        }

      }
    }




    return shotTimeLineDelay;
  },
  initLayers: function (onComplete) {
    this.layer = [];
    this.effectsToInit=[];
    let imagesToPreload = [];
    $('#ad').classList.add('ad' + manifest.settings.width + 'x' + manifest.settings.height);
    let root = $('#overlay');
    let self = this;

    root.innerHTML = "";

    var style = document.createElement('style');
    style.innerHTML = manifest.settings.styleSheet;
    document.head.appendChild(style);

    for (let i = 0; i < manifest.layers.length; i++) {
      let e = manifest.layers[i];
      let layer = undefined;
     


      if (e.name.toLowerCase() == "video-layer") {
        layer = document.createElement('div');
        layer.id = 'layer-' + e.guid;
        ad.videoHolder = layer;

        dashMainfestUrl = e.dashURL + "/dash/manifest.mpd";
        hlsManifestUrl = e.dashURL + "/hls/final.m3u8";
        if (e.zIndex != undefined && e.zIndex != 'auto') {
          layer.style.zIndex = e.zIndex;
        }


      } else if (e.componentManifest != undefined) {
        layer = this.registerComponent(e);
      } else if (e.isGroup) {
        layer = document.createElement('div');
        layer.style.zIndex = e.shots[0].zIndex;

        if (e.zIndex != undefined && e.zIndex != 'auto') {
          layer.style.zIndex = e.zIndex;
        }

        layer.id = 'layer-' + e.guid;
        if (e.isMask == true) {
          layer.style.overflow = 'hidden';

          if (e.maskCorners != false && e.maskCorners != undefined) {
            var corners = e.maskCorners.split(',').join("px ");
            layer.style.borderRadius = corners + "px";

          }
        }
        else  layer.style.overflow = 'visible !important';
      } else if (e.fileType == "text") {
        layer = document.createElement('div');
        layer.style.zIndex = e.shots[0].zIndex;

        if (e.zIndex != undefined && e.zIndex != 'auto') {
          layer.style.zIndex = e.zIndex;
        }


        layer.id = 'layer-' + e.guid;

        layer.style.fontSize = e.fontSize + 'px';
        layer.style.fontFamily = e.fontFamily;
        layer.style.color = e.fontColor;
        if (e.fontStyle.toLowerCase() == 'regular') layer.style.fontWeight = 400;
        if (e.fontStyle.toLowerCase() == 'semibold') layer.style.fontWeight = 600;
        if (e.fontStyle.toLowerCase() == 'bold') layer.style.fontWeight = 700;
        layer.style.textAlign = e.textAlign;
        var lineSpacing = e.lineSpacing;
        if (e.lineSpacing == undefined || e.lineSpacing == 0)
          lineSpacing = e.fontSize;
        else
          lineSpacing = e.lineSpacing;
        layer.style.lineHeight = lineSpacing + "px";

        layer.style.letterSpacing = ((e.fontSize / 1000) * (e.charSpacing)) + "px";

        if (e.underline == true) {
          layer.style.textDecoration = "underline";
        }
        if (e.strikethrough == true) {
          layer.style.textDecoration = "line-through";
        }
        layer.style.textTransform = e.textTransform;

        layer.style.marginTop = (-1 * (lineSpacing - e.fontSize) / 2 + 2) + "px";

        if (e.isDynamic || e.isEditable) {
          let text = this.dynamicData[e.dynamicValue];
          if (text == undefined) text = e.text;
          if (e.fileType == "text") {
            if (!isNaN(e.maxCharacters) && e.maxCharacters > 0) {
              text = truncate(text, e.maxCharacters);
            }
            if (!isNaN(e.maxLines) && e.maxLines > 0) {
              text = splitToLines(text, layer, e);
              //   layer.style.overflow = 'hidden';


              // layer.style.textOverflow= 'ellipsis',


              // layer.style.display= '-webkit-box';
              // layer.style.webkitLineClamp= '3';
              // layer.style.webkitBoxOrient= 'vertical';
              //    layer.style.margin = 'auto';
            }
          }

          layer.innerHTML = text;

          if (e.fileType == "text") {


          }

        } else {
          if (e.textScript == "superscript") {
            layer.innerHTML = `<sup>${e.text}</sup>`;
            layer.childNodes[0].style.fontSize = e.fontSize / 1.75 + 'px';
            layer.style.marginTop = '-' + e.fontSize / 8 + 'px';

          } else if (e.textScript == "subscript") {
            layer.innerHTML = `<sub>${e.text}</sub>`;
            layer.childNodes[0].style.fontSize = e.fontSize / 1.75 + 'px';
            layer.style.marginTop = e.fontSize / 10 + 'px';

          } else
            layer.innerHTML = e.text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\n/g, '<br>');
        }


        if (e.shadow != undefined) {
          applyTextShadow(layer, e.shadow);
        }
        //  layer.style.lineHeight = e.lineSpacing+"px";
      } else {




        let otherLayer = this.getLayerByID(e.layerImage);
        if (otherLayer != undefined && otherLayer.fileType != undefined ) { 
          if (otherLayer.fileType.toLowerCase() == 'svg' && otherLayer.svgType.toLowerCase() == 'object')
            layer = document.createElement('object');
          else if (otherLayer.fileType.toLowerCase() == 'svg' && otherLayer.svgType.toLowerCase() == 'inline')
            layer = document.createElement('div');
          else
            layer = document.createElement('img');

          if (otherLayer.fileType.toLowerCase() == 'svg')
            layer.data = encodeURIComponent(encodeURIComponent(otherLayer.name)) + "." + otherLayer.fileType
          else
            layer.src = encodeURIComponent(encodeURIComponent(otherLayer.name)) + "." + otherLayer.fileType
        } else {

          if (e.fileType.toLowerCase() == 'svg'  && e.svgType.toLowerCase() == 'object')
            layer = document.createElement('object');
          else if (e.fileType.toLowerCase() == 'svg'  && e.svgType.toLowerCase() == 'inline')
            layer = document.createElement('div');
          else
            layer = document.createElement('img');

          if (e.isDynamic) {
            if (this.dynamicData[e.dynamicValue] == undefined) {
              this.setImage(layer, e, encodeURIComponent(encodeURIComponent(e.name)) + "." + e.fileType);

            } else
              this.setImage(layer, e, this.dynamicData[e.dynamicValue]);

          } else if (e.isEditable) {
            if (e.imageUrl == undefined)
              this.setImage(layer, e, encodeURIComponent(encodeURIComponent(e.name)) + "." + e.fileType);

            else
              this.setImage(layer, e, e.imageUrl);

          } else
            this.setImage(layer, e, encodeURIComponent(encodeURIComponent(e.name)) + "." + e.fileType);

     
        }


        layer.style.zIndex = e.shots[0].zIndex;
        if (e.zIndex != undefined && e.zIndex != 'auto') {
          layer.style.zIndex = e.zIndex;
        }
        layer.id = 'layer-' + e.guid;


      }
      layer.style.mixBlendMode = e.blendMode;
      if (e.useCSSMask) {
        let maskLayer = manifest.layers.find(x => x.guid == e.cssMask);
        if (maskLayer != undefined) {
          let maskL = maskLayer.shots[0];
          layer.style.maskImage = `url(${maskLayer.name}.png)`;
          layer.style.webkitMaskImage = `url(${maskLayer.name}.png)`;
          layer.style.webkitMaskRepeat = "no-repeat";
          layer.style.maskRepeat = "no-repeat";

          let maskPosX = maskL.pos.x-e.shots[0].pos.x;
          let maskPosY = maskL.pos.y-e.shots[0].pos.y;
          
          layer.style.maskPosition = layer.style.webkitMaskPosition = `${maskPosX}px ${maskPosY}px`;
        
          layer.style.maskSize = layer.style.webkitMaskSize = `${maskL.size.initW}px ${maskL.size.initH}px`;
          layer.style.maskRepeat = "no-repeat";
        }
      }
      if (e.isCSSMask == true) {
         root.appendChild(layer);
         layer.style.zIndex = -100;
         layer.style.visibility='hidden';
      } else if (e.parent == undefined) {
        root.appendChild(layer);
      } else if ($('#layer-' + e.parent) != undefined) {
        $('#layer-' + e.parent).appendChild(layer);
      }
      // layer.className = "layer-image";

      layer.classList.add("layer-image");
      if (e.shots[0].index != 0) {
        layer.classList.add(`shot${e.shots[0].index}`);
      //  layer.style.visibility="hidden";
         layer.classList.add('hidden8');
      }

      if (e.cssClasses != undefined) {
        let layerClasses = e.cssClasses.split(' ');
        for (let i = 0; i < layerClasses.length; i++) {
          const c = layerClasses[i].replace('.', '');
          if (c != undefined && c.length > 0)
            layer.classList.add(c);
        }
      }

      if (e.anchor != undefined)
        layer.style.transformOrigin = e.anchor;

      //   layer.style.visibility = 'hidden';


      gsap.set(layer, {
        x: e.shots[0].pos.x,
        y: e.shots[0].pos.y,
        //  x: e.shots[0].pos.x-(e.shots[0].size.w-e.shots[0].size.initW),
        //  y: e.shots[0].pos.y-(e.shots[0].size.h-e.shots[0].size.initH),

        rotationZ: e.shots[0].rotation ?? 0,
        rotationX: e.shots[0].rotationX ?? 0,
        rotationY: e.shots[0].rotationY ?? 0,
        width: e.shots[0].size.initW,
        height: e.shots[0].size.initH,
        // width: e.shots[0].size.w == undefined ? e.shots[0].size.initW : e.shots[0].size.w,
        // height: e.shots[0].size.h == undefined ? e.shots[0].size.initH : e.shots[0].size.h,
        opacity: e.shots[0].opacity
      });

      if (e.layoutBox == 'point') {
        layer.style.width = "auto";
      } else if (e.layoutBox == 'autoHeight') {
        layer.style.height = "auto";
        // layer.style.transformOrigin = "50% 100%";
        //  layer.style.lineBreak= "anywhere";

      } else if (e.layoutBox == 'fixedSize'){
        layer.style.overflow = "hidden";
      }

      if (e.animateText == true) {
        let splitType = "words,lines";

        if (e.textAnimation.type == 'chars')
          splitType = "chars,lines";
        else if (e.textAnimation.type == 'lines')
          splitType = "lines,lines";

        layer.splitText = new SplitText(layer, {
          type: splitType,
          charsClass: e.textAnimation.charsClass,
          wordsClass: e.textAnimation.wordsClass,
          linesClass: e.textAnimation.linesClass,
          lineThreshold:0.8
        });


        if (e.textAnimation.mask) {
          for (let index = 0; index < layer.splitText.lines.length; index++) {
            const line = layer.splitText.lines[index];
            const lineClone = line.cloneNode(true);
         
            if(e.textAnimation.margin==undefined) 
              e.textAnimation.margin="0";

            let margin =  parseInt( e.textAnimation.margin);
            let height = e.lineSpacing;

            console.log("text",margin, height);
            lineClone.className = "text-mask";
            
            lineClone.style.overflow = "hidden";
            //lineClone.style.width = line.offsetWidth*1.1+"px";
      
            lineClone.style.height = (height + margin * 2 ) + "px";
            lineClone.innerHTML = "";
            lineClone.style.top = -margin+"px";
            line.style.top = margin+"px";
            line.parentNode.appendChild(lineClone);
            lineClone.appendChild(line);
          }
        }

      }
      let animationElement = {
        div: layer,
        shots: e.shots
      };

      if(e.fileType.toLowerCase() == 'svg'  && (e.svgType.toLowerCase() == 'inline')){

      }
      else if (e.name.toLowerCase() != "video-layer" && !e.isGroup && e.fileType != "text" && e.componentManifest == null )
        imagesToPreload.push(animationElement);


        layer.effects = [];
        if (e.effects != undefined) {
          e.effects.forEach(effect => {
      
          layer.effects.push(   this.registerEffect(layer,e, effect));
          });
        }

      this.layers.push(animationElement);
    }


    let theShot = manifest.shots[0];
    if (theShot.background != undefined)
      gsap.set($('#ad'), {
        "background-color": theShot.background
      });
    if (manifest.settings.timeScale != undefined)
      gsap.globalTimeline.timeScale(manifest.settings.timeScale);


      this.initTransitions();

    this.initIntersectionObserver();

    if (imagesToPreload.length == 0)
      this.imagesLoaded(onComplete);
    else
      this.preloadImages(imagesToPreload, function () {
        grid8player.imagesLoaded(onComplete);
      });

  },
  initTransitions(){
    var self = this;
    this.instancedTransitions=[];
    this.transitionFrames = [];
    manifest.shots.forEach(shot => {
      if(shot.transitions != undefined){
        shot.transitions.forEach(transition=>{
          self.registerTransition(shot, transition);
          });
      }
      
});

  },
  initIntersectionObserver(){

  const observer = new IntersectionObserver(

    (entries) => {
      for (const entry of entries) {
        const ratio = entry.intersectionRatio;

        const component = entry.target.component;
        if(component != undefined){
          if (typeof component.intersect === 'function')
          component.intersect(ratio);

        }
      
        const effects = entry.target.effects;
        if(effects != undefined) {
          effects.forEach(effect => {
            if (typeof effect.intersect === 'function')
            effect.intersect(ratio);
            
          });
        }
       

      }
    },
    { threshold: [0, 0.01] }
  );

    this.instancedEffects.forEach(x=>{observer.observe(x);})
    this.instancedComponents.forEach(x=>{observer.observe(x.dom);})

 },
  setImage(element, layer, data) {
    if (layer.fileType.toLowerCase() == 'svg'   && layer.svgType.toLowerCase() == 'object')
      element.data = data;
    else if (layer.fileType.toLowerCase() == 'svg'  && layer.svgType.toLowerCase() == 'inline'){
      // let svgTag =  `url('data:image/svg+xml;utf8,${layer.svgData}');`;
      var mySVG = layer.svgData;
      //var mySVG64 = window.btoa(mySVG);
     // element.style.backgroundImage = "url('data:image/svg+xml;base64," + mySVG64 + "')";
     element.innerHTML   = layer.svgData;
      }
    else      
      element.src = data;
  },
  imagesLoaded(onComplete) {


    if (!ad || ad.init == undefined)
      onComplete();
    else
      ad.init();

  },
  loadComponents: function (onLoaded) {
    let self = this;
    let list = [];
    this.instancedComponents = [];

    for (let i = 0; i < manifest.components.length; i++) {
      let component = manifest.components[i];

      list.push(component.name);
      this.componentsToLoad++;

    }

    for (let i = 0; i < list.length; i++) {
      var script = document.createElement('script');
      script.onload = function () {
        self.componentsToLoad--;
        if (self.componentsToLoad <= 0) onLoaded();
      };
      script.src = list[i] + ".js";

      document.head.appendChild(script)
    }

    if (self.componentsToLoad <= 0) onLoaded();
  },
  registerComponent: function (e) {

    var self = this;
    var componentManifest = e.componentManifest;
    var componentName = e.componentManifest.id; //.replaceAll('-', '_');


    var component = Object.create(grid8player.components[componentName]);

    var html = component.html;
    var styles = component.styles;

    for (var p = 0; p < componentManifest.properties.length; p++) {
      var prop = componentManifest.properties[p];
      if(prop.type=="layer" &&  (typeof prop.value  === 'string' || prop.value  instanceof String)) 
        prop.value = self.getLayerByID(prop.value);
      html = html.replaceAll("$" + prop.name, prop.value);
      styles = styles.replaceAll("$" + prop.name, prop.value);
    }

    html = html.replaceAll("$id", 'layer-' + e.guid);
    styles = styles.replaceAll("$id", 'layer-' + e.guid);

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    let layer = undefined;

    layer = document.createElement('div');


    layer.innerHTML = html;

    layer.style.zIndex = e.zIndex;
    component.guid = e.guid;
    layer.id = 'layer-' + e.guid;
    layer.style.pointerEvents = "all";
    layer.component = component;
    //setTimeout(function () {
    component.init(layer, e.shots[0].pos, e.shots[0].size, componentManifest.properties, self.timelineMaster);


    if (e.useCSSMask) {
      let maskLayer = manifest.layers.find(x => x.guid == e.cssMask);
      if (maskLayer != undefined) {
        layer.style.maskImage = `url(${maskLayer.name}.png)`;
        layer.style.webkitMaskImage = `url(${maskLayer.name}.png)`;
        layer.style.webkitMaskRepeat = "no-repeat";
        layer.style.maskRepeat = "no-repeat";
      }
    }


    //}, 1);
    this.instancedComponents.push(component);
    return layer;
  },


  loadEffects: function (onLoaded) {
    let self = this;
    let list = [];
    this.instancedEffects = [];

    for (let i = 0; i < manifest.effects.length; i++) {
      let effect = manifest.effects[i];

      list.push(effect.name);
      this.effectsToLoad++;

    }

    for (let i = 0; i < list.length; i++) {
      var script = document.createElement('script');
      script.onload = function () {
        self.effectsToLoad--;
        if (self.effectsToLoad <= 0) onLoaded();
      };
      script.src = list[i] + ".js";

      document.head.appendChild(script)
    }

    console.log('effects loaded');
    if (self.effectsToLoad <= 0) onLoaded();
  },
  registerEffect: function (layer, e,  efMan) {

    var self = this;
    var effectManifest = efMan;
    var effectName = effectManifest.id; //.replaceAll('-', '_');


    var effect = Object.create(grid8player.effects[effectName]);

    var html = effect.html;
    var styles = effect.styles;

    for (var p = 0; p < effectManifest.properties.length; p++) {
      var prop = effectManifest.properties[p];
      if(prop.type=="layer" &&  (typeof prop.value  === 'string' || prop.value  instanceof String)) 
      prop.value = self.getLayerByID(prop.value);
      // html = html.replaceAll("$" + prop.name, prop.value);
      styles = styles.replaceAll("$" + prop.name, prop.value);
    }

    // html = html.replaceAll("$id", 'layer-' + e.guid);
    styles = styles.replaceAll("$id", 'layer-' + e.guid);

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    this.effectsToInit.push([effect,layer, e.shots[0].pos, e.shots[0].size, effectManifest.properties, self.timelineMaster]);
    // effect.init(layer, e.shots[0].pos, e.shots[0].size, effectManifest.properties, self.timelineMaster);



    //}, 1);
    if(this.instancedEffects.indexOf(layer)==-1)
    this.instancedEffects.push(layer);

    console.log('effects registered');

    return effect;
  },
  loadTransitions: function (onLoaded) {
    let self = this;
    let list = [];
    this.instancedTransitions = [];

    for (let i = 0; i < manifest.transitions.length; i++) {
      let transition = manifest.transitions[i];

      list.push(transition.name);
      this.transitionsToLoad++;

    }

    for (let i = 0; i < list.length; i++) {
      var script = document.createElement('script');
      script.onload = function () {
        self.transitionsToLoad--;
        if (self.transitionsToLoad <= 0) onLoaded();
      };
      script.src = list[i] + ".js";

      document.head.appendChild(script)
    }

    if (self.transitionsToLoad <= 0) onLoaded();
  },
  registerTransition: function (shot, transitionManifest) {
    var self = this;

    if(this.transitionFrames[shot.index]==undefined)this.transitionFrames[shot.index] = this.createTransitionFrame(shot,transitionManifest);

    var transitionFrameIn = this.transitionFrames[shot.index], transitionFrameOut = undefined; 
    if(shot.index > 0){
      transitionFrameOut = this.transitionFrames[shot.index-1]; 
      if(transitionFrameOut == undefined)
      transitionFrameOut =  this.transitionFrames[shot.index-1] = this.createTransitionFrame(manifest.shots[shot.index-1],transitionManifest);
    }
   
    var transitionName = transitionManifest.id; //.replaceAll('-', '_');

    var transition = Object.create(grid8player.transitions[transitionName]);

    var styles = transition.styles;

    for (var p = 0; p < transitionManifest.properties.length; p++) {
      var prop = transitionManifest.properties[p];
      if(prop.type=="layer") prop.value = self.getLayerByID(prop.value);
      styles = styles.replaceAll("$" + prop.name, prop.value);
    }

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    transition.init(
      transitionFrameIn.transitionFrame, 
      transitionManifest.properties,
      transitionFrameIn.elements, 
    transitionFrameOut!=undefined?transitionFrameOut.transitionFrame:null,  
    transitionFrameOut!=undefined?transitionFrameOut.elements:[]);

    //}, 1);
    if(this.instancedTransitions.indexOf(transitionFrameIn)==-1)
    this.instancedTransitions.push({
      shot:shot.index, transitionFrame:transitionFrameIn, transition:transition});
    return transition;
  },
  createTransitionFrame(shot,transitionManifest){
    var transitionFrame = document.createElement("div");
    let self = this;
    let root = $('#overlay');

    transitionFrame.classList.add('transition-frame');
    root.appendChild(transitionFrame);
    let zIndex = transitionManifest.properties.find(x=>x.name == 'zIndex').value.toString();
    let minZIndex = zIndex;
    let maxZIndex = zIndex;

    if(zIndex.indexOf('-')!=-1){
      minZIndex = parseInt( zIndex.split('-')[0]); 
      maxZIndex = parseInt(zIndex.split('-')[1]); 
      zIndex = Math.round((minZIndex+maxZIndex)/2);
    }
    else{
      minZIndex = maxZIndex = parseInt(zIndex);
    }

    transitionFrame.style.zIndex = zIndex;
    const elements = Array.from(document.getElementsByTagName('*')).filter(el => {
      if(el.id==""||el.id==undefined) return false;
      const style = window.getComputedStyle(el);
      let layer = self.getLayerFromDOMID(el.id);
      if(layer != undefined && self.getShotInLayer(layer, shot.index)==undefined) return false; 
      const elZIndex = parseInt(style.getPropertyValue('z-index'));
      return el != transitionFrame && elZIndex >= minZIndex.toString() && elZIndex <= maxZIndex.toString()
    });
    
    elements.forEach(element => {

      if (!transitionFrame.contains(element)) {
        transitionFrame.appendChild(element);
      }

    });
return {transitionFrame:transitionFrame,elements:elements};
  },
  getFontWeight: function (w) {
    w = w.toLowerCase();
    if (w == 'normal' || w == 'bold' || w.length > 0 && !isNaN(w)) return w;
    else if (w == 'semibold') return 600;
    else if (w == 'regular') return 'normal';
    else return 'normal';
  },
  loadFonts: function (onComplete) {
    let count = 0;
    
    if (manifest.settings.useWebFonts == false) {
      onComplete();
      return;
    }

    var fonts = [];
    //    var sheet = document.createElement('style');
    if (manifest.settings.webFonts.length == 0) {
      onComplete();
      return;
    }

    manifest.settings.webFonts = manifest.settings.webFonts.filter(x=>x.fontUrl.length>0 && !x.isDeleted);
    if(manifest.settings.webFonts.length == 0)    onComplete();

    for (let i = 0; i < manifest.settings.webFonts.length; i++) {
      const f = manifest.settings.webFonts[i];
      //  sheet.innerHTML += `@font-face { font-family: "${f.fontFamily}";  src: url("${f.fontUrl}");  font-weight: ${f.fontStyle.toLowerCase()}; }\n`;
      // sheet.innerHTML += `@font-face { font-family: "${f.fontFamily}";  src: url("${f.fontUrl}");  \n`;
      const newFont = new FontFace((f.fontFamilyUser==""||f.fontFamilyUser==undefined)?f.fontFamily:f.fontFamilyUser, `url(${f.fontUrl})`, {
        weight: this.getFontWeight((f.fontStyleUser==""||f.fontStyleUser==undefined)?f.fontStyle:f.fontStyleUser)
      });
      fonts.push(newFont);
      newFont.load().then(function (loadedFont) {
        document.fonts.add(loadedFont)
        console.log(loadedFont.family, loadedFont.weight, ' font loaded');
        count++;
        if (count >= manifest.settings.webFonts.length)
          onComplete();

      }).catch(function (error) {
        count++;
        if (count >= manifest.settings.webFonts.length)
          onComplete();
        console.error('Failed to load font: ' + error)
      })
    }

  },
  animationLoaded: function () {
    $('#ad').style.visibility = "visible";
    console.log("loaded");
    for (let i = 0; i < this.layers.length; i++) {

      if (this.layers[i].shots[0].size.w == undefined) {
        this.layers[i].div.width /= 2;
        //   this.layers[i].div.height /= 2;

      }

  
  
    }
    this.effectsToInit.forEach(effect => {
      effect[0].init(effect[1],effect[2],effect[3],effect[4],effect[5]);
    });
    this.playAllShots();
    window.ready = true;
  },
  replay: function () {
    this.timelineMaster.play(0);
  },

  reset: function () {

  },

  play: function () {
    if(this.timelineMaster!=null)
    this.timelineMaster.play();

  },
  resume: function () {
    this.timelineMaster.resume();

  },
  pause: function () {
    this.timelineMaster.pause();

  },
  seek(t) {
    this.timelineMaster.seek(t);

  },
  gotoAndStop(t) {
    this.timelineMaster.pause(t);
  },
  gotoAndPlay(t) {
    this.timelineMaster.play(t);
  },
  setTimeScale(s) {
    this.timelineMaster.timeScale(s);
  },
  playAllShots: function () {


  },
  getPreset: function (pname) {

    if (manifest.customPresets == undefined) return undefined;

    let preset = null;

    manifest.customPresets.forEach(p => {
      if (p.name == pname) {
        preset = p;
        return preset;
      }
    });

    return preset;
  },
  getAnimationGroup: function (groupName) {
    if (manifest.animationGroups == undefined) return undefined;

    for (var index = 0; index < manifest.animationGroups.length; index++) {
      const animationGroup = manifest.animationGroups[index];
      if (groupName == animationGroup.id) {
        return animationGroup;
      }
    }

    return undefined;
  },
  isAnimationGroup(a) {

    if (a == undefined) return false;
    if (manifest.customPresets != undefined) {

      for (var index = 0; index < manifest.customPresets.length; index++) {
        const preset = manifest.customPresets[index];
        if (a.preset == preset.name) {
          return false;
        }
      }
    }
    let presets = ['Manual', 'Fade', 'ScaleFrom', 'ScaleTo', 'Drop', '⭣', '⭡', '⭢', '⭠', 'Shake', 'Pop', 'Wiggle'];
    if (a != undefined && a.preset != undefined && presets.indexOf(a.preset) == -1) return true;




    return false;
  },
  onComplete: function () {
    this.bMasterTimelineCompleted = true;
  },
  onClick: function () {

    return;

  },
  onSwipe: function (direction) {
    console.log("Swipe", direction);

    if (direction != 'tap')
      this.timelineSwipe[direction.type].play(0);


    for (let index = 0; index < this.instancedComponents.length; index++) {
      const component = this.instancedComponents[index];
      if (typeof component.onSwipe === 'function')
        component.onSwipe(direction);
    }

  },
  onHoverComplete: function () {
    this.bHoverTimelineCompleted = true;
  },
  onMouseOver: function (event, obj) {

    console.log("mouse over");

    if (manifest.settings.autoPlay == false || this.bMasterTimelineCompleted == true && manifest.settings.autoPlay != false) {
      this.bHoverTimelineCompleted = false;
      this.timelineHover.play(0);

      for (let index = 0; index < this.instancedComponents.length; index++) {
        const component = this.instancedComponents[index];
        if (typeof component.onMouseOver === 'function')
          component.onMouseOver();
      }

      for (let index = 0; index < this.instancedEffects.length; index++) {
        const effects = this.instancedEffects[index].effects;
        effects.forEach(effect => {
          if (typeof effect.onMouseOver === 'function')
          effect.onMouseOver();
        });
      }

      return 0;
    }

  },
  onMouseOut: function () {

    if (manifest.settings.autoPlay == false || this.bMasterTimelineCompleted == true && manifest.settings.autoPlay != false) {


      this.timelineHover.reverse();
      for (let index = 0; index < this.instancedComponents.length; index++) {
        const component = this.instancedComponents[index];
        if (typeof component.onMouseOut === 'function')
          component.onMouseOut();
      }


      for (let index = 0; index < this.instancedEffects.length; index++) {
        const effects = this.instancedEffects[index].effects;
        effects.forEach(effect => {
          if (typeof effect.onMouseOut === 'function')
          effect.onMouseOut();
        });
      }

      return 0;
    }
    // this.playShot(manifest.shots.length - 2, manifest.shots.length - 1);
  },
  getAllDOMLayers: function () {
    let arr = {};
    for (let l = 0; l < manifest.layers.length; l++) {
      let layer = manifest.layers[l];
      arr[layer.name] = this.getDOMLayerFromName(layer.name);

    }
    return arr;
  },
  getLayerByID: function (layerID) {

    if (layerID == undefined) return undefined;

    for (let l = 0; l < manifest.layers.length; l++) {
      let layer = manifest.layers[l];
      if (layer.guid == layerID) return layer;
    }

    return undefined;

  },
  getDOMLayerByID: function (layerID) {
    return $('#layer-' + layerID);
  },  
  getDOMLayerFromName: function (n) {
    let layerID = this.getLayerIDFromName(n);
    return $('#layer-' + layerID);
  },
  getLayerFromDOMID(domID){
    let layerID = domID.replace('layer-',"");
    let layer = manifest.layers.find(x=>x.guid==layerID);
    return layer;
  },
  getLayerIDFromName: function (layerName) {
    for (let l = 0; l < manifest.layers.length; l++)
      if (manifest.layers[l].name == layerName)
        return manifest.layers[l].guid;

    return null;
  },
  getShot: function (shots, index) {

    for (let s = 0; s < shots.length; s++)
      if (shots[s].index == index) return shots[s];

    return null;
  },
  getShotInLayer: function (layer, shotIndex) {

    for (let s = 0; s < layer.shots.length; s++) {
      if (layer.shots[s].index == shotIndex) return layer.shots[s];

    }

    return null;
  },
  sortGroupElementsByOrder(elements, orderID) {

    return elements.sort(function (elementA, elementB) {
      let a = GetValue(elementA[orderID]);
      let b = GetValue(elementB[orderID]);
      return a - b;
    });


  },
  preloadImages: function (layers, callback) {
    var img;
    if (layers.length == 0) {
      callback();
      return;
    }
    var remaining = layers.length;
    for (var i = 0; i < layers.length; i++) {

      if (layers[i]) { //images
        img = new Image;
        let l = layers[i];
        img.onload = function () {
          if (l.div.src == undefined || l.div.src == "") {
            --remaining;

            if (remaining <= 0) {
              callback();
            }
            //this is svg, we wait till it's ready
            /*
            l.div.isLoaded = function (self) {

              var iframe = document.getElementById(self.div.id);
              if (iframe == null || iframe == undefined) {
                setTimeout(function () {
                  l.div.isLoaded(l)
                }, 1);
                return;
              }
                console.log(iframe);
              var innerDoc = iframe.contentDocument || iframe.contentWindow != undefined && iframe.contentWindow != null && iframe.contentWindow.document;

              if (innerDoc == null || innerDoc == undefined || innerDoc == false) {
                setTimeout(function () {
                  l.div.isLoaded(l)
                }, 1);
                return;
              }
              var defs = innerDoc.getElementsByTagName('defs');
              var svgs = innerDoc.getElementsByTagName('svg');

              if (defs.length == 0)
                setTimeout(function () {
                  l.div.isLoaded(l)
                }, 1);


              else {

                self.div.defs = defs;
                self.div.svg = svgs[0];


                --remaining;

                if (remaining <= 0) {
                  callback();
                }

              }


            };

            setTimeout(function () {
              l.div.isLoaded(l)
            }, 1);*/
          } else {
            --remaining;

            if (remaining <= 0) {
              callback();
            }
          }

        };

        if (layers[i].div.src == undefined || layers[i].div.src == "")
          img.src = '' + layers[i].div.data;
        else
          img.src = '' + layers[i].div.src;


      }


    }
  },
  onResize() {
    let scalableContent = document.getElementById("ad");

    let originalWidth = maxWidth = manifest.settings.width;
    let contentWidth = Math.ceil(document.documentElement.clientWidth);
    let originalHeight = maxHeight = manifest.settings.height;
    let contentHeight = Math.ceil(document.documentElement.clientHeight);
    let stretchType = manifest.settings.stretchAd;
    let scaleAmountX = contentWidth / originalWidth;
    let scaleAmountY = contentHeight / originalHeight;

    if (stretchType == "Horizontal") {

      scalableContent.style.transform = 'scale(' + scaleAmountX + ',' + scaleAmountX + ')';
    } else if (stretchType == "Vertical") {

      scalableContent.style.transform = 'scale(' + scaleAmountY + ',' + scaleAmountY + ')';

    } else if (stretchType == "Both") {

      scalableContent.style.transform = 'scale(' + scaleAmountX + ',' + scaleAmountY + ')';

    } else if (stretchType == "Auto") {

      if (originalWidth / originalHeight > contentWidth / contentHeight)
        scalableContent.style.transform = 'scale(' + scaleAmountX + ',' + scaleAmountX + ')';
      else
        scalableContent.style.transform = 'scale(' + scaleAmountY + ',' + scaleAmountY + ')';

    }

  },
  debug(bShow = true) {
    manifest.settings.autoPlay = true;
    let self = this;
    this.bDebugMode = bShow;
    self.init(function(){
      self.duration = self.timelineMaster.totalDuration();
      for (let l = 0; l < manifest.layers.length; l++) {
        let e = manifest.layers[l];
        let domLayer = self.getDOMLayerFromName(e.name);
        //   domLayer.classList.remove('hidden8');
        gsap.set(domLayer, {
          x: e.shots[0].pos.x,
          y: e.shots[0].pos.y,
  
          rotationZ: e.shots[0].rotation ?? 0,
          rotationX: e.shots[0].rotationX ?? 0,
          rotationY: e.shots[0].rotationY ?? 0,
          width: e.shots[0].size.initW ,
          height:e.shots[0].size.initH ,
          opacity: e.shots[0].opacity
        });
      

      if (e.layoutBox == 'point') {
        domLayer.style.width = "auto";
      } else if (e.layoutBox == 'autoHeight') {
        domLayer.style.height = "auto";
        // layer.style.transformOrigin = "50% 100%";
        //  layer.style.lineBreak= "anywhere";

      } else if (e.layoutBox == 'fixedSize'){
        domLayer.style.overflow = "hidden";
      }
    }

      const markerWrapper = document.createElement('div');
      markerWrapper.className = "label-marker-wrapper";
      $('#slider-wrapper').appendChild(markerWrapper);
      for (let index = 0; index < manifest.shots.length; index++) {
        const labelT = grid8player.timelineMaster.labels[`shot${index}`];
        console.log(labelT);
       

      
        const newMarker = document.createElement('div');
        newMarker.className ="label-marker";
        markerWrapper.appendChild(newMarker);
        newMarker.style.left=`${(labelT/grid8player.timelineMaster.totalDuration())*100}%`;
      }
  
      let backButton = document.querySelector('#debug-back');
      let playButton = document.querySelector('#debug-play');
      let forwardButton = document.querySelector('#debug-forward');
      let playIcon = document.querySelector('#play-debug-icon');
      let pauseIcon = document.querySelector('#pause-debug-icon');
  
      playButton.onclick = function () {
        if (!self.timelineMaster.isActive()) {
          self.timelineMaster.play();
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'initial';
          self.bDebugButton = 'pause';
        } else {
          playIcon.style.display = 'initial';
          pauseIcon.style.display = 'none';
          self.bDebugButton = 'play';
  
          self.timelineMaster.pause();
  
        }
      }
  
      backButton.onclick = function () {
        let nextFrame = self.currentShot - 1;
        if (nextFrame < 0)  return; //nextFrame = manifest.shots.length - 1;
        if (self.bDebugButton == 'play') {
          self.timelineMaster.pause(`shot${nextFrame}`);
          self.onUpdate();
        } else self.timelineMaster.play(`shot${nextFrame}`);
        self.currentShot = nextFrame;
      }
  
      forwardButton.onclick = function () {
        let nextFrame = self.currentShot + 1;
        if (nextFrame >= manifest.shots.length) return; //nextFrame = 0;
        if (self.bDebugButton == 'play') {
          self.timelineMaster.pause(`shot${nextFrame}`);
          self.onUpdate();
        } else self.timelineMaster.play(`shot${nextFrame}`);
        self.currentShot = nextFrame;
      }
  
      // <button id="debug-back" onclick="console.log('play')">«</button>
      // <button id="debug-play" onclick="console.log('play')">►</button>
      // <button id="debug-forward" onclick="console.log('play')">»</button>
  
  
      self.timelineMaster.pause(self.duration);
  
      if (bShow == false) {
        $('#debug-panel').style.display = 'none';
        $('#debug-slider').removeEventListener('input', self.onDebugChange);
  
        return;
      }
      $('#debug-panel').style.display = 'block';
  
      $('#debug-slider').addEventListener('input', self.onDebugChange);
      self.timelineMaster.pause(0);
      $('#debug-label').innerHTML = (0).toFixed(2) + " / " + (self.duration).toFixed(2);
  
    });
  
  },
  onUpdate() {
    let self = grid8player;
    if (self.bDebugMode) {
      if (self.progressBar == undefined) self.progressBar = document.querySelector('#debug-slider');
      let timeline = self.timelineMaster;
      self.progressBar.value = timeline.progress() * 100;
      // let progress = parseFloat(e.target.value) / 100;

      // self.timelineMaster.time( progress * self.duration);
      // self.timelineMaster.pause(progress * self.duration);

      $('#debug-label').innerHTML = (timeline.time()).toFixed(2) + " / " + (self.duration).toFixed(2);
    }
  },
  onDebugChange(e) {
    // console.log(e.target.value);
    let self = grid8player;
    let progress = parseFloat(e.target.value) / 100;

    // self.timelineMaster.time( progress * self.duration);
    if (self.bDebugButton == 'play')

      self.timelineMaster.pause(progress * self.duration);
    else
      self.timelineMaster.play(progress * self.duration);

    $('#debug-label').innerHTML = (progress * self.duration).toFixed(2) + " / " + (self.duration).toFixed(2);
   const time = self.timelineMaster.time();
    for (let index = 0; index < manifest.shots.length; index++) {
      const labelT = grid8player.timelineMaster.labels[`shot${index}`];
      if( time>labelT )
        self.currentShot = index;
  
    }

  }

}

function $(nameID) {
  var t = nameID[0];
  nameID = nameID.substr(1);

  if (t == "#")
    return document.getElementById(nameID);
  else if (t == ".")
    return document.getElementsByClassName(nameID);

}

function getTranslateXY(layer) {
  const style = window.getComputedStyle(layer)
  const matrix = new DOMMatrixReadOnly(style.transform)
  return {
    x: matrix.m41,
    y: matrix.m42
  }
}

function getRotation(layer) {
  var rotateX = gsap.getProperty(layer, "rotationX");
  rotateY = gsap.getProperty(layer, "rotationY");
  rotateZ = gsap.getProperty(layer, "rotationZ");


  // if (matrix !== 'none') {

  //   // do some magic
  //   var values = matrix.split('(')[1].split(')')[0].split(','),
  //     pi = Math.PI,
  //     sinB = parseFloat(values[8]),
  //     b = Math.round(Math.asin(sinB) * 180 / pi),
  //     cosB = Math.cos(b * pi / 180),
  //     matrixVal10 = parseFloat(values[9]),
  //     a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / pi),
  //     matrixVal1 = parseFloat(values[0]),
  //     c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / pi);

  //   rotateX = a;
  //   rotateY = b;
  //   rotateZ = c;

  // }

  return {
    x: rotateX,
    y: rotateY,
    z: rotateZ
  };
}

function applyTextShadow(layer, shadow) {
  let {
    r,
    g,
    b,
    a
  } = shadow.color;
  layer.style.textShadow = `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(${r},${g},${b},${a/256})`;
}

function GetValue(val) {
  if (val == undefined || val == "") return 0;
  var sVal = val + "";
  if (sVal.indexOf('/') == -1) return parseFloat(val + "");

  var values = val.split('/');
  var r = randomIntFromInterval(parseFloat(values[0]), parseFloat(values[1]));
  return parseFloat(r + "");

}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.random() * (max - min) + min;

}

function getTranslateXY(element) {
  const style = window.getComputedStyle(element)
  const matrix = new DOMMatrixReadOnly(style.transform)
  return {
    x: matrix.m41,
    y: matrix.m42
  }
}

function truncate(input, maxSize) {
  if (input.length > maxSize) {
    return input.substr(0, maxSize - 3) + '...';
  }
  return input;
};


function splitToLines(text, dom, layer) {
  let words = text.split(' ');
  let line = "";
  let maxHeight = layer.fontSize * parseInt(layer.maxLines);
  const clone = dom.cloneNode(true);
  clone.style.width = layer.shots[0].size.initW + "px",
    document.body.appendChild(clone);

  while (words.length > 0) {
    let word = words.shift();
    clone.innerHTML = line + word + "...";
    let rect = clone.getBoundingClientRect();
    if (rect.height > maxHeight) {
      line = line.slice(0, -4);
      clone.remove();
      return line + "...";
    }
    line += word + " ";

  }
  clone.remove();

  return line;
}

var createjs, AdobeAn;

/*!
 * SplitText 3.11.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function (D, u) {
  "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function (D) {
  "use strict";
  var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

  function k(D) {
    return e.getComputedStyle(D)
  }

  function n(D, u) {
    var e;
    return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(X.querySelectorAll(D), 0) : D && "object" == e && "length" in D ? E.call(D, 0) : D ? [D] : []
  }

  function o(D) {
    return "absolute" === D.position || !0 === D.absolute
  }

  function p(D, u) {
    for (var e, t = u.length; - 1 < --t;)
      if (e = u[t], D.substr(0, e.length) === e) return e.length
  }

  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return e && (D = D.split("++").join("")),
      function () {
        return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
      }
  }

  function s(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
  }

  function t(D, u) {
    for (var e = u.length; - 1 < --e;) D.push(u[e])
  }

  function u(D, u, e) {
    for (var t; D && D !== u;) {
      if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent
    }
  }

  function v(D) {
    var u, e, t = n(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)(e = t[u])._isSplit ? v(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
  }

  function w(D, u) {
    return parseFloat(u[D]) || 0
  }

  function x(D, e, F, C, i, n, E) {
    var r, l, p, d, a, h, B, f, A, c, x, g, y = k(D),
      _ = w("paddingLeft", y),
      b = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      m = w("paddingTop", y) + w("paddingBottom", y),
      N = w("paddingLeft", y) + w("paddingRight", y),
      L = w("fontSize", y) * (e.lineThreshold || .2),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [],
      Q = "flex" === y.display,
      U = D.style.display;
    for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), p = (l = D.getElementsByTagName("*")).length, a = [], r = 0; r < p; r++) a[r] = l[r];
    if (z || G)
      for (r = 0; r < p; r++)((h = (d = a[r]).parentNode === D) || G || q && !P) && (g = d.offsetTop, z && h && Math.abs(g - b) > L && ("BR" !== d.nodeName || 0 === r) && (B = [], z.push(B), b = g), G && (d._x = d.offsetLeft, d._y = g, d._w = d.offsetWidth, d._h = d.offsetHeight), z && ((d._isSplit && h || !q && h || P && h || !P && d.parentNode.parentNode === D && !d.parentNode._isSplit) && (B.push(d), d._x -= _, u(d, D, j) && (d._wordEnd = !0)), "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === r) && z.push([])));
    for (r = 0; r < p; r++)
      if (h = (d = a[r]).parentNode === D, "BR" !== d.nodeName)
        if (G && (A = d.style, P || h || (d._x += d.parentNode._x, d._y += d.parentNode._y), A.left = d._x + "px", A.top = d._y + "px", A.position = "absolute", A.display = "block", A.width = d._w + 1 + "px", A.height = d._h + "px"), !P && q)
          if (d._isSplit)
            for (d._next = l = d.nextSibling, d.parentNode.appendChild(d); l && 3 === l.nodeType && " " === l.textContent;) d._next = l.nextSibling, d.parentNode.appendChild(l), l = l.nextSibling;
          else d.parentNode._isSplit ? (d._parent = d.parentNode, !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0), d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && K.push(d.nextSibling), d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling, d.parentNode.removeChild(d), a.splice(r--, 1), p--) : h || (g = !d.nextSibling && u(d.parentNode, D, j), d.parentNode._parent && d.parentNode._parent.appendChild(d), g && d.parentNode.appendChild(X.createTextNode(" ")), "span" === M && (d.style.display = "inline"), H.push(d));
    else d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? O.push(d) : q && !d._isSplit && ("span" === M && (d.style.display = "inline"), H.push(d));
    else z || G ? (d.parentNode && d.parentNode.removeChild(d), a.splice(r--, 1), p--) : P || D.appendChild(d);
    for (r = K.length; - 1 < --r;) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (G && (c = X.createElement(M), D.appendChild(c), x = c.offsetWidth + "px", g = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), A = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
      for (f = " " === j && (!G || !P && !q), r = 0; r < z.length; r++) {
        for (B = z[r], (c = X.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? r + 1 : "")), V.push(c), p = B.length, l = 0; l < p; l++) "BR" !== B[l].nodeName && (d = B[l], c.appendChild(d), f && d._wordEnd && c.appendChild(X.createTextNode(" ")), G && (0 === l && (c.style.top = d._y + "px", c.style.left = _ + g + "px"), d.style.top = "0px", g && (d.style.left = d._x - g + "px")));
        0 === p ? c.innerHTML = "&nbsp;" : P || q || (v(c), s(c, String.fromCharCode(160), " ")), G && (c.style.width = x, c.style.height = d._h + "px"), D.appendChild(c)
      }
      D.style.cssText = A
    }
    G && (E > D.clientHeight && (D.style.height = E - m + "px", D.clientHeight < E && (D.style.height = E + S + "px")), n > D.clientWidth && (D.style.width = n - N + "px", D.clientWidth < n && (D.style.width = n + T + "px"))), Q && (U ? D.style.display = U : D.style.removeProperty("display")), t(F, H), P && t(C, O), t(i, V)
  }

  function y(D, u, e, t) {
    var F, C, i, n, E, r, l, d, a = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + a + ">",
      x = 1,
      g = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null,
      y = X.createElement("div"),
      v = D.parentNode;
    for (v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (F = function getText(D) {
        var u = D.nodeType,
          e = "";
        if (1 === u || 9 === u || 11 === u) {
          if ("string" == typeof D.textContent) return D.textContent;
          for (D = D.firstChild; D; D = D.nextSibling) e += getText(D)
        } else if (3 === u || 4 === u) return D.nodeValue;
        return e
      }(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")), l && (F = F.split("<").join("{{LT}}")), E = F.length, C = (" " === F.charAt(0) ? A : "") + e(), i = 0; i < E; i++)
      if (r = F.charAt(i), g && (d = g(F.substr(i), u.specialChars))) r = F.substr(i, d || 1), C += h && " " !== r ? t() + r + "</" + a + ">" : r, i += d - 1;
      else if (r === f && F.charAt(i - 1) !== f && i) {
      for (C += x ? c : "", x = 0; F.charAt(i + 1) === f;) C += A, i++;
      i === E - 1 ? C += A : ")" !== F.charAt(i + 1) && (C += A + e(), x = 1)
    } else "{" === r && "{{LT}}" === F.substr(i, 6) ? (C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039 ? (n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2, C += h && " " !== r ? t() + F.substr(i, n) + "</" + a + ">" : F.substr(i, n), i += n - 1) : C += h && " " !== r ? t() + r + "</" + a + ">" : r;
    D.outerHTML = C + (x ? c : ""), l && s(v, "{{LT}}", "<")
  }

  function z(D, u, e, t) {
    var F, C, i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, F = 0; F < E; F++)(C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null, 3 === C.nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, t));
      return u.absolute = s, void(D._isSplit = !0)
    }
    y(D, u, e, t)
  }
  var X, e, F, C, b = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l = ((C = SplitText.prototype).split = function split(D) {
      this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var u, e, t, F = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); - 1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, z(t, D, i, n), x(t, D, this.chars, this.words, this.lines, e, u);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, C.revert = function revert() {
      var e = this._originals;
      if (!e) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function (D, u) {
        return D.innerHTML = e[u]
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, SplitText.create = function create(D, u) {
      return new SplitText(D, u)
    }, SplitText);

  function SplitText(D, u) {
    F || function _initCore() {
      X = document, e = window, F = 1
    }(), this.elements = n(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, this.split(u)
  }
  l.version = "3.11.3", D.SplitText = l, D.default = l;
  if (typeof (window) === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", {
      value: !0
    })
  } else {
    delete D.default
  }
});

function isNumber(duration) {
  // check if duration is a number
  if (typeof duration === 'number' && !isNaN(duration)) {
    return true;
  }
  // check if duration is a string containing a number
  else if (typeof duration === 'string' && !isNaN(Number(duration))) {
    return true;
  }
  // otherwise, return false
  else {
    return false;
  }
}
function evalInContext(src) {

  eval(src);
}