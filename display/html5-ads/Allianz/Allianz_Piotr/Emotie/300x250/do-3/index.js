(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.actor2 = function() {
	this.initialize(img.actor2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,610);


(lib.carman = function() {
	this.initialize(img.carman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,448);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,64);


(lib.actor3 = function() {
	this.initialize(img.actor3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,610);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,543);


(lib.actor4 = function() {
	this.initialize(img.actor4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,554);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,170);


(lib.carwomanclio = function() {
	this.initialize(img.carwomanclio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,448);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wheel();
	this.instance.setTransform(-48,-48,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel_1, new cjs.Rectangle(-48,-48,85,85), null);


(lib.topStripe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-201,19,402);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgbBhQgGgFAAgKQAAgJAGgGQAGgHAJAAQAJAAAFAHQAGAGAAAJQAAAKgGAFQgFAHgJgBQgJABgGgHgAgcAnIAAgDQAAgMAEgKQAFgIAGgGIARgMQAMgJAGgHQAGgHAAgJQAAgMgKgIQgKgHgQAAQgMAAgLAEQgLAEgIAHIgKgdQALgJAOgEQAOgEAQAAQATgBAPAIQAPAGAJANQAIAOAAAQQAAAOgFAJQgFAKgGAGIgSAMQgNAJgFAGQgGAGAAAKIAAADg");
	this.shape.setTransform(144.825,81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AhGBjIAAjCIAdAAIAAAVQASgZAdAAQATAAAPAKQAPAKAIAQQAIASAAAWQAAAVgIAQQgIARgPAKQgPAJgTAAQgbAAgSgWIAABHgAgcg5QgLAMAAAWQAAAUALALQAKANASAAQARAAAMgNQALgMAAgTQAAgVgLgNQgMgMgRAAQgSAAgKAMg");
	this.shape_1.setTransform(130.075,86.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLAMAAAUQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgUgLgMQgMgNgSAAQgRAAgMANg");
	this.shape_2.setTransform(112.625,83.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("Ag+BXIAIgbQAKAGAMADQAMADANAAQAXAAAMgLQAMgLAAgXIAAgGQgSAWgbAAQgTAAgPgJQgPgJgIgRQgIgPAAgVQAAgVAIgQQAIgQAPgKQAPgJATAAQAdAAASAZIAAgWIAdAAIAAB/QAAAigUASQgUATgkAAQgfAAgagOgAgcg7QgLAMAAATQAAATALALQALAMASAAQASAAAKgMQALgKAAgUQAAgUgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_3.setTransform(88.575,86.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_4.setTransform(72.525,83.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AAhBIIghhmIghBmIgkAAIgqiPIAgAAIAdBpIAjhpIAfAAIAjBpIAehpIAfAAIgrCPg");
	this.shape_5.setTransform(53.2,83.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_6.setTransform(27.125,83.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_7.setTransform(10.175,80.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,266,101.8), null);


(lib.stripebottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhefaMAAAg+zIC9AAMAAAA+zg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stripebottom, new cjs.Rectangle(-9.5,-201,19,402), null);


(lib.promocopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053781").s().p("AAOAdIAAgeQgBgIgDgEQgDgEgGAAQgGAAgEAEQgDAEgBAIIAAAeIgMAAIAAg4IAMAAIAAAJQADgFAFgDQAEgCAFAAQAKAAAGAGQAGAHAAAMIAAAgg");
	this.shape.setTransform(41.4,1.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053781").s().p("AgMAaQgGgEgEgGQgEgHAAgJQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAHAAAIIAAAEIgpAAQACAHAEADQAFAFAHAAIAJgCIAJgEIADAKQgEAEgGABQgFACgHAAQgIAAgHgEgAAPgFQgBgGgEgEQgEgDgGAAQgFAAgDADQgEAEgBAGIAcAAIAAAAg");
	this.shape_1.setTransform(34.875,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#053781").s().p("AgVAaIADgMQAIAEAJABQAEAAADgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgKgDQgEgCgDgDQgDgDAAgGQAAgIAGgEQAGgFAJAAIAKABIAIADIgDALQgHgEgIAAQgDAAgDACQgCABAAADQAAADADACIAHACIAKADQADACADADQADADAAAGQAAAIgHAFQgGAFgKAAQgMAAgIgEg");
	this.shape_2.setTransform(29.225,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#053781").s().p("AgVAaIADgMQAIAEAJABQAEAAADgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgKgDQgEgCgDgDQgDgDAAgGQAAgIAGgEQAGgFAJAAIAKABIAIADIgDALQgHgEgIAAQgDAAgDACQgCABAAADQAAADADACIAHACIAKADQADACADADQADADAAAGQAAAIgHAFQgGAFgKAAQgMAAgIgEg");
	this.shape_3.setTransform(24.225,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#053781").s().p("AgPAaQgGgEgDgGQgEgHAAgJQAAgIAEgGQAEgHAGgEQAFgEAHAAQAMAAAHAKIAAgJIAMAAIAAA5IgMAAIAAgJQgHAKgMAAQgHAAgGgEgAgLgMQgEAFAAAHQAAAIAEAFQAFAFAHAAQAGAAAFgFQAEgFAAgIQAAgHgEgFQgFgFgGAAQgHAAgFAFg");
	this.shape_4.setTransform(18.1,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#053781").s().p("AgcAoIAAhOIANAAIAAAJQAGgKAMAAQAHAAAGAEQAGAEADAHQADAGABAJQgBAJgDAGQgDAGgGAEQgGAEgHAAQgKAAgIgJIAAAdgAgLgWQgEAFAAAIQAAAIAEAEQAEAFAHAAQAHAAAFgFQAEgEAAgIQAAgIgEgFQgFgFgHAAQgHAAgEAFg");
	this.shape_5.setTransform(11.6,2.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#053781").s().p("AgTAXQgGgHAAgMIAAggIANAAIAAAeQAAAIADAEQADAEAGAAQAGAAAEgEQADgEAAgIIAAgeIANAAIAAA4IgMAAIAAgJQgDAGgEACQgFACgFAAQgKAAgGgGg");
	this.shape_6.setTransform(1.925,1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#053781").s().p("AgOAaQgHgDgEgIQgDgGAAgJQAAgIADgHQAEgHAHgDQAHgEAHAAQAJAAAGAEQAGADAFAHQADAHAAAIQAAAJgDAGQgFAIgGADQgGAEgJAAQgHAAgHgEgAgLgNQgEAGgBAHQABAIAEAFQAEAFAHAAQAHAAAFgFQAFgFAAgIQAAgHgFgGQgFgEgHAAQgGAAgFAEg");
	this.shape_7.setTransform(-4.65,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#053781").s().p("AgNA0IACgLIADAAQAEAAADgDQABgCAAgHIAAg2IAMAAIAAA4QAAAKgFAGQgFAGgJAAIgGgBgAAAgmQgBgDAAgDQAAgEABgCQADgCADAAQADAAACACQADADAAADQAAADgDADQgCACgDAAQgDAAgDgCg");
	this.shape_8.setTransform(-9.95,0.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#053781").s().p("AgNA0IABgLIAEAAQAEAAADgDQABgCAAgHIAAg2IAMAAIAAA4QAAAKgFAGQgFAGgJAAIgGgBgAAAgmQgBgDAAgDQAAgEABgCQADgCADAAQADAAACACQADADAAADQAAADgDADQgCACgDAAQgDAAgDgCg");
	this.shape_9.setTransform(-15.45,0.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#053781").s().p("AgGAqIAAg5IAMAAIAAA5gAgFgbQgCgDAAgDQAAgEACgCQADgCACAAQAEAAABACQADADAAADQAAADgDADQgBACgEAAQgCAAgDgCg");
	this.shape_10.setTransform(-17.7,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#053781").s().p("AgPAhIAAAJIgNAAIAAhUIANAAIAAAjQAIgJAKAAQAHAAAGAEQAGAEADAHQAEAFAAAJQAAAJgEAHQgDAGgGAEQgGAEgHAAQgMAAgGgKgAgLAAQgEAFAAAIQAAAIAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgHAAQgGAAgFAEg");
	this.shape_11.setTransform(-22.4,-0.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#053781").s().p("AgMAaQgGgEgEgGQgEgHAAgJQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAHAAAIIAAAEIgpAAQACAHAEADQAFAFAHAAIAJgCIAJgEIADAKQgEAEgGABQgFACgHAAQgIAAgHgEgAAPgFQgBgGgEgEQgEgDgGAAQgFAAgDADQgEAEgBAGIAcAAIAAAAg");
	this.shape_12.setTransform(-31.825,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#053781").s().p("AgFAqIAAg5IALAAIAAA5gAgFgbQgCgDAAgDQAAgEACgCQADgCACAAQADAAACACQADADAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_13.setTransform(-36.35,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#053781").s().p("AgPAnQgGgEgDgGQgEgHABgJQgBgJAEgFQAEgHAFgEQAGgEAIAAQAKAAAHAJIAAgjIAMAAIAABUIgLAAIAAgJQgHAKgLAAQgIAAgGgEgAgKAAQgFAFAAAIQAAAIAFAFQAEAFAGAAQAHAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgHAAQgGAAgEAEg");
	this.shape_14.setTransform(-41.45,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy2, new cjs.Rectangle(-58.5,-9.4,117,18.9), null);


(lib.promocopy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053781").s().p("AASAnIAAgpQAAgKgFgFQgEgFgIAAQgIAAgFAFQgFAFAAAKIAAApIgQAAIAAhMIAPAAIAAANQAEgIAGgCQAGgEAHAAQAOAAAIAJQAHAIAAARIAAArg");
	this.shape.setTransform(46.725,1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgCIALgEIAFANQgGAEgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_1.setTransform(38.025,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#053781").s().p("AghAuIAEgOIANAFIAMABQAMAAAHgGQAGgGAAgMIAAgDQgJAMgOAAQgLAAgHgFQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgFQAHgFALAAQAPAAAJANIAAgLIAQAAIAABDQAAASgKAKQgMAKgSAAQgRAAgOgIgAgPgfQgFAGgBAKQABAKAFAGQAGAGAKAAQAJAAAGgGQAFgFAAgLQAAgKgFgGQgGgGgJAAQgKAAgGAGg");
	this.shape_2.setTransform(29,2.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#053781").s().p("AASAnIAAgpQAAgKgFgFQgEgFgIAAQgIAAgFAFQgFAFAAAKIAAApIgQAAIAAhMIAPAAIAAANQAEgIAGgCQAGgEAHAAQAOAAAIAJQAHAIAAARIAAArg");
	this.shape_3.setTransform(20.325,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#053781").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDAEgFAAQgEAAgDgDg");
	this.shape_4.setTransform(13.925,-0.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#053781").s().p("AgVAnIAAhMIAPAAIAAAOQAGgPANAAQAFAAAFACIgDAQQgEgBgEAAQgJAAgDAGQgFAFAAAKIAAAng");
	this.shape_5.setTransform(9.6,1.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#053781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgCIALgEIAFANQgGAEgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_6.setTransform(2.075,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#053781").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_7.setTransform(-5.725,-0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#053781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgCIALgEIAFANQgGAEgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_8.setTransform(-14.575,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#053781").s().p("AgeAmIAAgNIAlgvIgkAAIAAgPIA7AAIAAANIgmAvIAnAAIAAAPg");
	this.shape_9.setTransform(-22.425,1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#053781").s().p("AgVAnIAAhMIAPAAIAAAOQAGgPANAAQAFAAAFACIgDAQQgEgBgEAAQgJAAgDAGQgFAFAAAKIAAAng");
	this.shape_10.setTransform(-28.55,1.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#053781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgCIALgEIAFANQgGAEgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_11.setTransform(-36.075,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#053781").s().p("AgIA1IgshpIATAAIAhBVIAihVIATAAIgsBpg");
	this.shape_12.setTransform(-45.675,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy1, new cjs.Rectangle(-58.5,-11.9,117,23.8), null);


(lib.nc_ctaDo_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape.setTransform(108.175,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86200").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_1.setTransform(102.125,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F86200").s().p("AAoAnIAAgpQAAgVgQABQgIAAgEAEQgEAGAAAIIAAArIgPAAIAAgpQAAgKgFgGQgDgEgIAAQgHAAgEAEQgFAGAAAIIAAArIgQAAIAAhMIAPAAIAAALQAEgGAFgDQAHgDAHAAQAHAAAGADQAFAEADAGQADgGAHgEQAGgDAJAAQAMAAAHAJQAIAIAAAPIAAAtg");
	this.shape_2.setTransform(93.7,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F86200").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_3.setTransform(82.825,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F86200").s().p("AgWAnIAAhMIAQAAIAAAOQAGgPANAAQAFAAAEACIgCAQQgEgBgEAAQgJAAgDAGQgFAFAAAKIAAAng");
	this.shape_4.setTransform(76.25,13.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86200").s().p("AglA1IAAhoIAPAAIAAAMQAKgNAPAAQAKAAAIAFQAIAFAEAJQAFAJAAAMQAAAMgFAIQgEAIgIAFQgIAGgKAAQgOAAgKgMIAAAmgAgPgeQgGAGAAAMQAAALAGAFQAGAHAJAAQAJAAAGgHQAGgGAAgKQAAgLgGgHQgGgGgJAAQgJgBgGAHg");
	this.shape_5.setTransform(68.6,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F86200").s().p("AASAnIAAgoQAAgLgFgFQgEgGgIABQgIgBgFAGQgFAGAAAJIAAApIgQAAIAAhMIAPAAIAAAMQAEgGAGgEQAGgDAHAAQAOAAAIAJQAHAIAAARIAAArg");
	this.shape_6.setTransform(55.825,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F86200").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_7.setTransform(47.125,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F86200").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_8.setTransform(39.325,11.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F86200").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_9.setTransform(30.475,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F86200").s().p("AgVAnIAAhMIAPAAIAAAOQAGgPANAAQAFAAAFACIgDAQQgDgBgFAAQgIAAgEAGQgFAFAAAKIAAAng");
	this.shape_10.setTransform(23.9,13.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F86200").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_11.setTransform(16.375,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F86200").s().p("AgoA1IAAhpIApAAQALAAAJADQAIAEAEAGQAEAHAAAIQAAAHgDAGQgEAGgGAEQAJACAEAHQAEAHABAIQAAAJgFAHQgEAHgJAEQgIADgLAAgAgXAlIAcAAQAJAAAFgEQAEgFABgGQgBgHgEgEQgFgEgJAAIgcAAgAgXgIIAYAAQAJAAAFgEQAEgEAAgGQAAgGgEgEQgFgEgJAAIgYAAg");
	this.shape_12.setTransform(7.45,11.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nc_ctaDo_txt, new cjs.Rectangle(0,0,117.6,23.9), null);


(lib.nc_cta_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAeQgHgJAAgPIAAgsIAQAAIAAAoQAAALAFAFQAEAGAIAAQAIAAAFgGQAFgGAAgJIAAgpIAQAAIAABLIgPAAIAAgLQgEAHgGADQgHADgHAAQgNAAgIgJg");
	this.shape.setTransform(61.525,13.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAnIAAgoQAAgLgFgFQgEgGgIABQgIgBgFAGQgFAGAAAJIAAApIgQAAIAAhMIAPAAIAAAMQAEgGAGgEQAGgDAHAAQAOAAAIAJQAHAIAAARIAAArg");
	this.shape_1.setTransform(52.825,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_2.setTransform(41.125,11.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBFIABgOIAEAAQAGAAADgEQADgDAAgJIAAhJIAQAAIAABLQAAAOgHAIQgHAHgLAAIgIgBgAAAgzQgCgDAAgFQAAgFACgDQADgCAFAAQAFAAADADQACADAAAEQAAAEgCADQgDADgFAAQgFAAgDgCg");
	this.shape_3.setTransform(33.8,13.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_4.setTransform(30.775,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_5.setTransform(25.225,11.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_6.setTransform(16.375,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIApAAQALAAAJADQAIAEAEAGQAEAHAAAIQAAAHgDAGQgEAGgGAEQAJACAEAHQAEAHABAIQAAAJgFAHQgEAHgJAEQgIADgLAAgAgXAlIAcAAQAJAAAFgEQAEgFABgGQgBgHgEgEQgFgEgJAAIgcAAgAgXgIIAYAAQAJAAAFgEQAEgEAAgGQAAgGgEgEQgFgEgJAAIgYAAg");
	this.shape_7.setTransform(7.45,11.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nc_cta_txt, new cjs.Rectangle(0,0,68.2,23.9), null);


(lib.mc_cta_arrowDo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AAAAbIARgRIhFAAIAAgSIBFAAIgRgRIANgOIAoAnIgoAog");
	this.shape.setTransform(10.675,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cta_arrowDo, new cjs.Rectangle(0,0,20.2,20), null);


(lib.mc_cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAbIARgRIhFAAIAAgSIBFAAIgRgRIANgOIAoAnIgoAog");
	this.shape.setTransform(10.675,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cta_arrow, new cjs.Rectangle(0,0,20.2,20), null);


(lib.logoWhite2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARCAQgfgJgXgYQgmgmAAg5QAAg4AmgmQASgSAXgKQAZgKAcAAQA5AAAnAmQAmAmgBA4QABA5gmAmQgYAYgfAJQgTAFgWAAQgVAAgTgFgAgVhPQgfAfAAAwQAAAxAfAfQAfAgAvAAQAwAAAgggQAfgfAAgxQAAgvgfggQgggggwAAQgvAAgfAggAM5BFQgJgKABgXIAAg8IgTAAIAAgbIAUAAIAGgrIAgAAIAAArIAdAAIAAAcIgdAAIAAA2QAAAKACAEQADAEAIAAIANgBIAAAaIgHADIgLACIgNABQgRAAgJgLgALCA+QgPgSAAgeQAAgdAQgTQARgTAbAAQAWAAAPANIgGAaQgHgGgFgCQgFgCgHAAQgaAAgBAnQABASAGAJQAHAKAMAAQAHAAAFgCQAHgCAHgFIAFAYIgJAGQgNAHgRAAQgbAAgQgSgAJDA/QgQgSAAgeQABgeAQgTQARgTAbAAQA1AAAABFIAAAHIhKAAQAAAQAIAGQAHAHAPAAQAJAAAHgCQAIgCAJgGIAIAYIgMAGQgQAIgVAAQgdAAgRgRgAJggUQgEAHgBANIAkAAIAAgBQAAgagRAAQgJAAgFAHgAn2BGQgJgJAAgSQAAgPAHgKQAFgJANgFIAPgEIAggGIAAgDQgBgIgDgEQgDgDgJAAQgIAAgLADQgKACgKAFIgKgZIAPgGQAFgDAIgBQAPgEAQAAQAZAAAKAKQAJAKAAAZIAAA9QABAGACACQACADAFAAIACAAIAAAOIglAAQgNAAAAgMIAAgCIgJAHIgIAEQgLAEgKAAQgSAAgHgJgAnPAWQgFACgCAEQgCADAAAIQAAAHADADQABADAGAAQAFAAAHgDQAGgDAFgFIAAgZQgPACgJAEgAHdBOIAAiBIAlAAIAAARIABAAQAHgJAHgEQAGgFAIAAIAFABIAHABIAAAkIgJgCIgHgBQgHAAgGACIgKAHIAABWgAGaBOIAAiBIAoAAIAACBgAD+BOIAAisIA4AAQASAAAKACQALADAKAGQAOAKAJAUQAIAUAAAaQAAAigRAWQgIALgMAHQgKAGgLADQgMACgSAAgAEnAwIANAAQATAAAKgOQALgPgBgaQAAgfgLgPQgHgLgUAAIgOAAgAjuBOIAAgbIA2hLIgdAAQgJAAAAAIIAAADIgQAAIAAgYQAAgHAEgEQADgDAIAAIBUAAIAAAbIg2BLIA6AAIAAAbgAkpBOIAAhRQAAgKgCgEQgCgDgGAAQgMAAgLALIAABXIgoAAIAAhoQAAgFgDgDQgCgCgFAAIgCAAIAAgPIAnAAQAMAAAAAMIAAAFQALgKAJgEQAKgFAMAAQARAAAHAKQAFAFACAGQACAHgBAQIAABXgAo6BOIAAhoQAAgFgCgDQgDgCgFAAIgCAAIAAgPIAnAAQAHAAAEAEQADADAAAGIAAB0gAqABOIAAiUQAAgFgDgCQgCgCgGAAIgCAAIAAgPIAoAAQAGAAAEADQADAEAAAGIAACfgArGBOIAAiUQAAgFgCgCQgDgCgFAAIgDAAIAAgPIApAAQAFAAAEADQAEAEgBAGIAACfgAsABOIgMgqIgxAAIgNAqIgqAAIAuiIIADgIIAAgGQAAgHgKAAIgGAAIAAgPIBBAAQAHAAAFADQAFADABAHIAuCfgAs3AIIAlAAIgRg/gABdBLIAAiBIAXAAQAJAAADADQAEAEAAAIIAABygAAmBLIAAiGQAAgHgBgCQgDgDgGAAIgBAAIAAgQIAiAAQAJAAADAEQAEADgBAJIAACSgAgQBLIAAhyQAAgIADgEQAEgDAJAAIAVAAIAACBgAGdhBQgGgFgBgJQABgIAGgFQAGgFALAAQALAAAGAFQAGAFAAAIQAAAJgGAFQgGAFgLAAQgLAAgGgFgAo5hBQgGgFAAgJQAAgIAGgFQAGgFALAAQALAAAGAFQAHAFgBAIQABAJgHAFQgGAFgLAAQgLAAgGgFg");
	this.shape.setTransform(88.5,13.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoWhite2, new cjs.Rectangle(0,0,177,26.7), null);


(lib.logoBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AARCAQgfgJgXgYQgmgmAAg5QAAg4AmgmQASgSAXgKQAZgKAcAAQA5AAAnAmQAmAmgBA4QABA5gmAmQgYAYgfAJQgTAFgWAAQgVAAgTgFgAgVhPQgfAfAAAwQAAAxAfAfQAfAgAvAAQAwAAAgggQAfgfAAgxQAAgvgfggQgggggwAAQgvAAgfAggAM5BFQgJgKABgXIAAg8IgTAAIAAgbIAUAAIAGgrIAgAAIAAArIAdAAIAAAcIgdAAIAAA2QAAAKACAEQADAEAIAAIANgBIAAAaIgHADIgLACIgNABQgRAAgJgLgALCA+QgPgSAAgeQAAgdAQgTQARgTAbAAQAWAAAPANIgGAaQgHgGgFgCQgFgCgHAAQgaAAgBAnQABASAGAJQAHAKAMAAQAHAAAFgCQAHgCAHgFIAFAYIgJAGQgNAHgRAAQgbAAgQgSgAJDA/QgQgSAAgeQABgeAQgTQARgTAbAAQA1AAAABFIAAAHIhKAAQAAAQAIAGQAHAHAPAAQAJAAAHgCQAIgCAJgGIAIAYIgMAGQgQAIgVAAQgdAAgRgRgAJggUQgEAHgBANIAkAAIAAgBQAAgagRAAQgJAAgFAHgAn2BGQgJgJAAgSQAAgPAHgKQAFgJANgFIAPgEIAggGIAAgDQgBgIgDgEQgDgDgJAAQgIAAgLADQgKACgKAFIgKgZIAPgGQAFgDAIgBQAPgEAQAAQAZAAAKAKQAJAKAAAZIAAA9QABAGACACQACADAFAAIACAAIAAAOIglAAQgNAAAAgMIAAgCIgJAHIgIAEQgLAEgKAAQgSAAgHgJgAnPAWQgFACgCAEQgCADAAAIQAAAHADADQABADAGAAQAFAAAHgDQAGgDAFgFIAAgZQgPACgJAEgAHdBOIAAiBIAlAAIAAARIABAAQAHgJAHgEQAGgFAIAAIAFABIAHABIAAAkIgJgCIgHgBQgHAAgGACIgKAHIAABWgAGaBOIAAiBIAoAAIAACBgAD+BOIAAisIA4AAQASAAAKACQALADAKAGQAOAKAJAUQAIAUAAAaQAAAigRAWQgIALgMAHQgKAGgLADQgMACgSAAgAEnAwIANAAQATAAAKgOQALgPgBgaQAAgfgLgPQgHgLgUAAIgOAAgAjuBOIAAgbIA2hLIgdAAQgJAAAAAIIAAADIgQAAIAAgYQAAgHAEgEQADgDAIAAIBUAAIAAAbIg2BLIA6AAIAAAbgAkpBOIAAhRQAAgKgCgEQgCgDgGAAQgMAAgLALIAABXIgoAAIAAhoQAAgFgDgDQgCgCgFAAIgCAAIAAgPIAnAAQAMAAAAAMIAAAFQALgKAJgEQAKgFAMAAQARAAAHAKQAFAFACAGQACAHgBAQIAABXgAo6BOIAAhoQAAgFgCgDQgDgCgFAAIgCAAIAAgPIAnAAQAHAAAEAEQADADAAAGIAAB0gAqABOIAAiUQAAgFgDgCQgCgCgGAAIgCAAIAAgPIAoAAQAGAAAEADQADAEAAAGIAACfgArGBOIAAiUQAAgFgCgCQgDgCgFAAIgDAAIAAgPIApAAQAFAAAEADQAEAEgBAGIAACfgAsABOIgMgqIgxAAIgNAqIgqAAIAuiIIADgIIAAgGQAAgHgKAAIgGAAIAAgPIBBAAQAHAAAFADQAFADABAHIAuCfgAsSAIIgRg/IgUA/IAlAAgABdBLIAAiBIAXAAQAJAAADADQAEAEAAAIIAABygAAmBLIAAiGQAAgHgBgCQgDgDgGAAIgBAAIAAgQIAiAAQAJAAADAEQAEADgBAJIAACSgAgQBLIAAhyQAAgIADgEQAEgDAJAAIAVAAIAACBgAGdhBQgGgFgBgJQABgIAGgFQAGgFALAAQALAAAGAFQAGAFAAAIQAAAJgGAFQgGAFgLAAQgLAAgGgFgAo5hBQgGgFAAgJQAAgIAGgFQAGgFALAAQALAAAGAFQAHAFgBAIQABAJgHAFQgGAFgLAAQgLAAgGgFg");
	this.shape.setTransform(88.5,13.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoBlue, new cjs.Rectangle(0,0,177,26.7), null);


(lib.largecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4B2CD").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0BEB8").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCAE7F").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C1EBFB").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A679C").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#407D71").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F76200").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#96DCFA").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-159.5,319,319);


(lib.copyDo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD25C").s().p("AghAuIAFgOIALAFIANABQANAAAGgGQAHgGgBgMIAAgDQgJAMgOAAQgKAAgIgFQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgFQAIgFAKAAQAPAAAJANIAAgLIAQAAIAABDQAAASgLAKQgKAKgTAAQgRAAgOgIgAgPgfQgFAGAAAKQAAAKAFAGQAHAGAJAAQAJAAAGgGQAGgFgBgLQABgKgGgGQgGgGgJAAQgJAAgHAGg");
	this.shape.setTransform(90.85,-36.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD25C").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_1.setTransform(82.325,-37.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD25C").s().p("AASAmIgSg1IgRA1IgTAAIgXhLIARAAIAQA3IASg3IARAAIASA3IAQg3IARAAIgXBLg");
	this.shape_2.setTransform(72.025,-37.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD25C").s().p("AglA1IAAhoIAPAAIAAAMQAKgNAPAAQALAAAHAFQAIAFAFAJQAEAJAAAMQAAAMgEAIQgFAIgIAFQgHAGgLAAQgOAAgJgMIAAAmgAgPgeQgGAGABAMQgBALAGAFQAGAHAJAAQAJAAAGgHQAGgGAAgKQAAgLgGgHQgGgGgJAAQgJgBgGAHg");
	this.shape_3.setTransform(58,-36.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD25C").s().p("AgTAiQgJgFgEgIQgFgJgBgMQABgLAFgJQAEgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAFAJQAEAJABALQgBAMgEAJQgFAIgJAFQgIAGgMAAQgKAAgJgGgAgPgRQgGAHAAAKQAAAKAGAHQAGAHAJAAQAKAAAGgHQAGgHAAgKQAAgKgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_4.setTransform(48.7,-37.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDD25C").s().p("AgUA0QgJgFgDgJQgFgJAAgLQAAgNAFgHQAEgKAIgFQAHgEALgBQAOAAAKANIAAgvIAQAAIAABvIgPAAIAAgLQgKANgPAAQgLAAgHgFgAgOAAQgHAHAAALQAAAKAHAHQAGAHAIAAQAKAAAGgHQAFgGABgLQgBgMgFgGQgGgGgKAAQgIAAgGAGg");
	this.shape_5.setTransform(35.9,-39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDD25C").s().p("AgVAnIAAhMIAPAAIAAAOQAGgPANAAQAFAAAFACIgDAQQgDgBgFAAQgIAAgEAGQgFAFAAAKIAAAng");
	this.shape_6.setTransform(29.15,-37.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDD25C").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_7.setTransform(21.625,-37.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDD25C").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_8.setTransform(13.825,-39.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDD25C").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_9.setTransform(4.975,-37.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDD25C").s().p("AgeAmIAAgNIAlgvIgkAAIAAgPIA7AAIAAANIgmAvIAnAAIAAAPg");
	this.shape_10.setTransform(-2.875,-37.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDD25C").s().p("AgWAnIAAhMIAQAAIAAAOQAGgPANAAQAFAAAEACIgCAQQgDgBgFAAQgIAAgEAGQgFAFAAAKIAAAng");
	this.shape_11.setTransform(-9,-37.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDD25C").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_12.setTransform(-16.525,-37.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDD25C").s().p("AgHAmIgfhLIASAAIAUA4IAWg4IARAAIgeBLg");
	this.shape_13.setTransform(-24.725,-37.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAnIAAgpQAAgKgFgFQgEgGgIABQgIgBgFAGQgFAGAAAJIAAApIgQAAIAAhMIAPAAIAAAMQAEgGAGgEQAGgDAHAAQAOAAAIAJQAHAIAAARIAAArg");
	this.shape_14.setTransform(-36.625,-37.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_15.setTransform(-45.325,-37.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAuIAFgOIALAFIAOABQAMAAAGgGQAHgGAAgMIAAgDQgKAMgOAAQgKAAgIgFQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgFQAIgFAKAAQAPAAAKANIAAgLIAPAAIAABDQAAASgLAKQgLAKgSAAQgRAAgOgIgAgPgfQgFAGAAAKQAAAKAFAGQAGAGAJAAQAKAAAGgGQAGgFAAgLQAAgKgGgGQgGgGgKAAQgJAAgGAGg");
	this.shape_16.setTransform(-57.9,-36.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_17.setTransform(-64.125,-39.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKA0QgEgFgBgLIAAhcIAQAAIAABZQAAAEACACQABACAFAAIAFgBIABAPQgEACgIAAQgJAAgEgFg");
	this.shape_18.setTransform(-67.75,-39.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_19.setTransform(-72.275,-39.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAJAGAGQAHAEAJAAQAGAAAHgBIALgGIAFAPQgGADgIADQgHACgJAAQgLAAgJgFgAAUgHQgBgIgFgFQgGgEgIAAQgHgBgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_20.setTransform(-78.375,-37.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAmIgfhLIASAAIAUA4IAWg4IARAAIgeBLg");
	this.shape_21.setTransform(-86.575,-37.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUA0QgJgFgDgJQgFgJAAgLQAAgNAFgHQAEgKAIgFQAHgEALgBQAOAAAKANIAAgvIAQAAIAABvIgQAAIAAgLQgJANgPAAQgLAAgHgFgAgOAAQgHAHAAALQAAAKAHAHQAFAHAKAAQAJAAAGgHQAFgGABgLQgBgMgFgGQgGgGgJAAQgKAAgFAGg");
	this.shape_22.setTransform(-99,-39.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBFIABgOIAEAAQAGAAADgEQADgDAAgJIAAhJIAQAAIAABLQAAAOgHAIQgGAHgMAAIgIgBgAAAgzQgCgDAAgFQAAgFACgDQADgCAFAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgFAAgDgCg");
	this.shape_23.setTransform(-106,-37.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_24.setTransform(-109.025,-39.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHArQgGgGAAgLIAAgmIgKAAIAAgPIAKAAIAAgSIAQgEIAAAWIAUAAIAAAPIgUAAIAAAjQAAALAKAAIAJgCIACAPQgGADgIgBQgLAAgGgGg");
	this.shape_25.setTransform(-113.625,-38.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKA0QgEgFgBgLIAAhcIAQAAIAABZQAAAEACACQACACAEAAIAFgBIACAPQgFACgIAAQgIAAgFgFg");
	this.shape_26.setTransform(-117.95,-39.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAhA1IgKgbIgtAAIgKAbIgTAAIAqhpIATAAIAqBpgAAQAJIgQgpIgQApIAgAAg");
	this.shape_27.setTransform(-125.775,-38.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_1, new cjs.Rectangle(-133,-50.8,266,49.5), null);


(lib.copy2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.copy2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHArQgGgGAAgLIAAglIgKAAIAAgQIAKAAIAAgSIAQgDIAAAVIAUAAIAAAQIgUAAIAAAiQAAALAKAAIAJgBIACAOQgGADgIAAQgLAAgGgHg");
	this.shape.setTransform(-74.225,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAjQgJgFgEgJQgEgJAAgMQAAgLAEgJQAFgJAIgFQAHgFALAAQAPAAAJANIAAgLIAQAAIAABLIgQAAIAAgLQgJANgPAAQgLAAgHgFgAgPgQQgFAGgBAKQABALAFAHQAGAGAKAAQAJAAAGgGQAFgHAAgLQAAgKgFgHQgGgGgJAAQgKAAgGAHg");
	this.shape_1.setTransform(-81.7,-8.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAjQgJgFgDgJQgFgJAAgMQAAgLAFgJQAEgJAIgFQAHgFALAAQAPAAAJANIAAgLIAQAAIAABLIgQAAIAAgLQgJANgPAAQgLAAgHgFgAgOgQQgHAGAAAKQAAALAHAHQAFAGAKAAQAJAAAGgGQAFgHABgLQgBgKgFgHQgGgGgJAAQgKAAgFAHg");
	this.shape_2.setTransform(-90.9,-8.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAnIAAgqQAAgTgPgBQgHAAgFAGQgEAEAAAJIAAArIgQAAIAAgqQAAgKgDgEQgFgGgHAAQgHAAgFAGQgDAEAAAJIAAArIgRAAIAAhMIAPAAIAAALQAEgGAFgDQAGgDAIAAQAHAAAGAEQAFADADAGQAEgGAGgDQAHgEAHAAQANAAAHAIQAIAJAAAPIAAAtg");
	this.shape_3.setTransform(-101.75,-8.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA1IAAhoIAQAAIAAAMQAJgNAPAAQALAAAHAFQAIAFAEAJQAFAJAAAMQAAALgFAIQgEAJgIAGQgHAEgLAAQgOAAgJgLIAAAmgAgPgeQgFAHAAALQAAALAFAGQAGAGAJAAQAJAAAGgHQAGgFAAgLQAAgLgGgGQgGgIgJAAQgJABgGAGg");
	this.shape_4.setTransform(-116.3,-7.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAjQgJgGgFgJQgEgJAAgLQAAgLAEgJQAFgJAJgFQAJgFAKAAQALAAAJAFQAJAFAFAJQAFAJgBALQABALgFAJQgFAJgJAGQgJAFgLAAQgKAAgJgFgAgPgQQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgIgKAAQgIAAgHAIg");
	this.shape_5.setTransform(-125.6,-8.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_2, new cjs.Rectangle(-132,-21.7,266,36.7), null);


(lib.copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AggAuIADgOIANAFIANABQALAAAHgGQAGgGABgMIAAgDQgKAMgOAAQgLAAgHgFQgIgFgEgJQgFgHAAgMQAAgLAFgIQAEgJAIgFQAHgFALAAQAPAAAJANIAAgLIAQAAIAABDQAAASgKAKQgMAKgSAAQgRAAgNgIgAgOgfQgHAGAAAKQAAAKAHAGQAFAGAKAAQAJAAAGgGQAFgFABgLQgBgKgFgGQgGgGgJAAQgKAAgFAGg");
	this.shape.setTransform(39.15,-20.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AASAnIAAgoQAAgLgFgFQgEgGgIAAQgIAAgFAGQgFAGAAAJIAAApIgQAAIAAhLIAPAAIAAALQAEgGAGgEQAGgDAHAAQAOAAAIAJQAHAJAAAPIAAAsg");
	this.shape_1.setTransform(30.475,-22.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgHA4IAAhLIAPAAIAABLgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAFgDADQgDACgFAAQgEABgDgDg");
	this.shape_2.setTransform(24.075,-24.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgWAnIAAhMIAQAAIAAAOQAGgPANAAQAFAAAEACIgCAQQgEgBgEAAQgIAAgEAGQgFAFAAAKIAAAng");
	this.shape_3.setTransform(19.75,-22.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_4.setTransform(12.225,-22.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AAPA4IgZgeIgIAIIAAAWIgRAAIAAhvIARAAIAABEIAfggIAVAAIgiAhIAkAqg");
	this.shape_5.setTransform(4.425,-24.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_6.setTransform(-4.425,-22.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgeAmIAAgNIAlgvIgkAAIAAgPIA7AAIAAANIgmAvIAnAAIAAAPg");
	this.shape_7.setTransform(-12.275,-22.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgVAnIAAhMIAPAAIAAAOQAGgPANAAQAFAAAFACIgDAQQgDgBgFAAQgIAAgEAGQgFAFAAAKIAAAng");
	this.shape_8.setTransform(-18.4,-22.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_9.setTransform(-25.925,-22.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgHAmIgfhLIASAAIAUA4IAWg4IARAAIgeBLg");
	this.shape_10.setTransform(-34.125,-22.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgTAiQgJgEgFgKQgEgIgBgMQABgLAEgJQAFgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAFAJQAEAJAAALQAAAMgEAIQgFAKgJAEQgIAGgMAAQgKAAgJgGgAgPgRQgGAHAAAKQAAAKAGAHQAGAHAJAAQAKAAAGgHQAGgHAAgKQAAgKgGgHQgGgGgKgBQgIABgHAGg");
	this.shape_11.setTransform(-42.55,-22.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgHArQgGgGAAgMIAAglIgKAAIAAgPIAKAAIAAgTIAQgDIAAAWIAUAAIAAAPIgUAAIAAAjQAAALAKAAIAJgCIACAPQgGACgIAAQgLAAgGgGg");
	this.shape_12.setTransform(-49.625,-23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgaAeQgHgIAAgRIAAgrIAQAAIAAAoQAAALAFAFQAEAGAIgBQAIABAFgGQAFgGAAgJIAAgpIAQAAIAABMIgPAAIAAgMQgEAHgGADQgHADgHAAQgNAAgIgJg");
	this.shape_13.setTransform(-56.725,-22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003781").s().p("AgUAjQgJgFgEgJQgEgJAAgMQAAgLAEgJQAFgJAIgFQAHgFALAAQAPAAAJANIAAgLIAQAAIAABLIgQAAIAAgLQgJANgPAAQgLAAgHgFgAgPgQQgFAGgBAKQABALAFAHQAGAGAKAAQAJAAAGgGQAFgHAAgLQAAgKgFgHQgGgGgJAAQgKAAgGAHg");
	this.shape_14.setTransform(-65.95,-22.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003781").s().p("AASAnIAAgoQAAgLgFgFQgEgGgIAAQgIAAgFAGQgFAGAAAJIAAApIgQAAIAAhLIAPAAIAAALQAEgGAGgEQAGgDAHAAQAOAAAIAJQAHAJAAAPIAAAsg");
	this.shape_15.setTransform(-78.175,-22.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_16.setTransform(-86.875,-22.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_17.setTransform(-95.225,-22.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003781").s().p("AgHArQgGgGAAgMIAAglIgKAAIAAgPIAKAAIAAgTIAQgDIAAAWIAUAAIAAAPIgUAAIAAAjQAAALAKAAIAJgCIACAPQgGACgIAAQgLAAgGgGg");
	this.shape_18.setTransform(-105.625,-23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAIAEAFAKQAEAIAAALIAAAHIg2AAQABAIAGAFQAHAGAJAAQAGAAAHgCIALgGIAFAPQgGADgIACQgHADgJAAQgLAAgJgFgAAUgHQgBgIgFgEQgGgFgIgBQgHAAgFAFQgFAFgBAIIAmAAIAAAAg");
	this.shape_19.setTransform(-112.425,-22.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003781").s().p("AApA1IAAhSIgmBAIgFAAIgnhAIAABSIgRAAIAAhpIAXAAIAjA7IAjg7IAYAAIAABpg");
	this.shape_20.setTransform(-123.775,-23.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_1, new cjs.Rectangle(-133,-35.7,338,49.5), null);


(lib.copy1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape.setTransform(-9.475,14.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_1.setTransform(-22.175,17.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgJgPAAQgOgBgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_2.setTransform(-36.325,17.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AAbBpIgvg5IgPAQIAAApIgfAAIAAjRIAfAAIAACBIA7g+IAnAAIg/A/IBDBPg");
	this.shape_3.setTransform(-50.975,14.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgJgPAAQgOgBgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_4.setTransform(-67.625,17.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("Ag6BIIAAgZIBHhZIhEAAIAAgdIBvAAIAAAZIhHBZIBKAAIAAAdg");
	this.shape_5.setTransform(-82.425,17.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_6.setTransform(-93.925,17.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgJgPAAQgOgBgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_7.setTransform(-108.075,17.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgPBIIg6iPIAiAAIAnBrIAohrIAiAAIg6CPg");
	this.shape_8.setTransform(-123.425,17.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_2, new cjs.Rectangle(-133,-35.7,266,71.5), null);


(lib.copy1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AAhBJIAAhMQAAgUgIgKQgIgKgQAAQgPAAgJAKQgKAKAAATIAABNIgeAAIAAiOIAcAAIAAAWQAIgMALgHQAMgGAOAAQAZAAAPAQQAOARAAAeIAABSg");
	this.shape.setTransform(-24.35,-12.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgKQAPgJATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBANIhnAAQADARAMAJQAMAJASAAQAMAAAMgEQAMgDAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgOQgCgOgJgKQgKgIgPgBQgOAAgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_1.setTransform(-40.725,-12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("Ag+BXIAIgbQAKAGAMADQAMADANAAQAXAAAMgLQAMgLAAgXIAAgGQgSAWgbAAQgTAAgPgJQgPgJgIgRQgIgPAAgVQAAgVAIgQQAIgQAPgKQAPgJATAAQAdAAASAZIAAgWIAdAAIAAB/QAAAigUASQgUATgkAAQgfAAgagOgAgcg7QgLAMAAATQAAATALALQALAMASAAQASAAAKgMQALgKAAgUQAAgUgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_2.setTransform(-64.325,-9.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgOBpIAAiOIAdAAIAACOgAgNhGQgGgGAAgJQAAgIAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgFg");
	this.shape_3.setTransform(-76.05,-15.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgUBhQgIgKAAgVIAAirIAeAAIAACmQAAAJADADQAEAFAHAAQAGAAAEgDIADAbQgIAEgOAAQgSAAgJgJg");
	this.shape_4.setTransform(-82.825,-15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgOBpIAAiOIAdAAIAACOgAgNhGQgGgGAAgJQAAgIAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgFg");
	this.shape_5.setTransform(-91.35,-15.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgKQAPgJATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBANIhnAAQADARAMAJQAMAJASAAQAMAAAMgEQAMgDAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgOQgCgOgJgKQgKgIgPgBQgOAAgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_6.setTransform(-102.825,-12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgRBkIhSjHIAkAAIA/CiIA/iiIAlAAIhTDHg");
	this.shape_7.setTransform(-120.8,-15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(-133,-35.7,266,71.5), null);


(lib.circleshapeCutout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsaVsMAAAgrXQFijPG4AAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQm4AAlijPgAxnRoQgmgmgigmMAAAgg3QAigmAmgmQBBhBBEg3MAAAAm/QhEg3hBhBgA46AAQAAmwDIldIAAYbQjIldAAmxg");

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A679C").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#407D71").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76200").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96DCFA").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4B2CD").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9EBDB7").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCAE7F").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C1EBFB").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-159.5,319,319);


(lib.circleshape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A679C").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#407D71").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76200").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96DCFA").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4B2CD").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9EBDB7").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCAE7F").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C1EBFB").s().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-159.5,319,319);


(lib.actorMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.girl();
	this.instance.setTransform(-126,-136,0.5,0.5);

	this.instance_1 = new lib.actor2();
	this.instance_1.setTransform(-143,-172,0.5,0.5);

	this.instance_2 = new lib.actor3();
	this.instance_2.setTransform(-140,-169,0.5,0.5);

	this.instance_3 = new lib.actor4();
	this.instance_3.setTransform(-116,-141,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-172,303,308);


(lib.wheelContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.wheel = new lib.wheel_1();
	this.wheel.name = "wheel";
	this.wheel.setTransform(-0.35,-1.3,1,1,0,0,0,-5.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheelContainer, new cjs.Rectangle(-42.8,-43.8,85,85), null);


(lib.stipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.topStripe = new lib.topStripe();
	this.topStripe.name = "topStripe";
	this.topStripe.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.topStripe).wait(1));

	// Layer_1
	this.stripebottom = new lib.stripebottom();
	this.stripebottom.name = "stripebottom";

	this.timeline.addTween(cjs.Tween.get(this.stripebottom).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stipe, new cjs.Rectangle(-9.5,-201,19,402), null);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cutout
	this.cutout = new lib.circleshapeCutout();
	this.cutout.name = "cutout";
	this.cutout.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.cutout).wait(1));

	// circlemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxjRkQnSnRAAqTQAAqSHSnRQHRnSKSAAQKTAAHRHSQHSHRAAKSQAAKTnSHRQnRHSqTAAQqSAAnRnSg");

	// stripes
	this.stripe1 = new lib.stipe();
	this.stripe1.name = "stripe1";
	this.stripe1.setTransform(-129.9,0);

	this.stripe2 = new lib.stipe();
	this.stripe2.name = "stripe2";
	this.stripe2.setTransform(-89.9,0);

	var maskedShapeInstanceList = [this.stripe1,this.stripe2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stripe2},{t:this.stripe1}]}).wait(1));

	// circle
	this.circle = new lib.circleshape();
	this.circle.name = "circle";
	this.circle.setTransform(0,0,0.99,0.99);

	var maskedShapeInstanceList = [this.circle];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape, new cjs.Rectangle(-159.5,-159.5,319,319), null);


(lib.promoMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApIBkIAAjHISRAAIAADHg");
	mask.setTransform(-2.5,-11);

	// copy1
	this.copy1 = new lib.promocopy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(-0.5,-10);

	var maskedShapeInstanceList = [this.copy1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApIBfIAAi9ISRAAIAAC9g");
	mask_1.setTransform(-2.5,8.5);

	// copy2
	this.copy2 = new lib.promocopy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(-1.5,8.15);

	var maskedShapeInstanceList = [this.copy2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD25C").s().p("AnLHMQi+i/AAkNQAAkMC+i/QC/i+EMAAQENAAC/C+QC+C/AAEMQAAENi+C/Qi/C+kNAAQkMAAi/i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promoMC, new cjs.Rectangle(-65,-65,130,130), null);


(lib.LogoWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.logoBlue = new lib.logoWhite2();
	this.logoBlue.name = "logoBlue";
	this.logoBlue.setTransform(0,0,0.85,0.8489);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,22.6);


(lib.logoW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.logoBlue = new lib.logoBlue();
	this.logoBlue.name = "logoBlue";
	this.logoBlue.setTransform(0,0,0.85,0.8489);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,22.6);


(lib.ctanew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApQCZIAAkxIShAAIAAExg");
	mask.setTransform(58.8,15.25);

	// Layer_2
	this.arrow2 = new lib.mc_cta_arrow();
	this.arrow2.name = "arrow2";
	this.arrow2.setTransform(-16.5,2.65);

	this.arrow1 = new lib.mc_cta_arrow();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(86,2.65);

	this.txt = new lib.nc_cta_txt();
	this.txt.name = "txt";
	this.txt.setTransform(12,2.65);

	var maskedShapeInstanceList = [this.arrow2,this.arrow1,this.txt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.arrow1},{t:this.arrow2}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("ApICZIAAkxISRAAIAAExg");
	this.shape.setTransform(58.05,15.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctanew, new cjs.Rectangle(-0.4,-85.4,117,188.5), null);


(lib.ctado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AspCgIAAk/IZTAAIAAE/g");
	mask.setTransform(81,16);

	// Layer_2
	this.arrow2 = new lib.mc_cta_arrowDo();
	this.arrow2.name = "arrow2";
	this.arrow2.setTransform(-16.5,3.85);

	this.arrow1 = new lib.mc_cta_arrowDo();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(132,3.85);

	this.txt = new lib.nc_ctaDo_txt();
	this.txt.name = "txt";
	this.txt.setTransform(12,3.75);

	var maskedShapeInstanceList = [this.arrow2,this.arrow1,this.txt];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.arrow1},{t:this.arrow2}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AspCgIAAk/IZTAAIAAE/g");
	this.shape.setTransform(81,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctado, new cjs.Rectangle(0,0,162,32), null);


(lib.copyDo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask.setTransform(0,-29);

	// line1
	this.copy_1 = new lib.copyDo_1();
	this.copy_1.name = "copy_1";
	this.copy_1.setTransform(0,40.5,1,1,0,0,0,0,0.5);

	var maskedShapeInstanceList = [this.copy_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo, new cjs.Rectangle(0,0,0,0), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0xCWIAAlnMApjAAAIAAFng");
	mask.setTransform(0,-21);

	// line1
	this.copy2_1 = new lib.copy2_1();
	this.copy2_1.name = "copy2_1";
	this.copy2_1.setTransform(20,7);

	var maskedShapeInstanceList = [this.copy2_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_1).wait(1));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask_1.setTransform(0,9);

	// line2
	this.copy2_2 = new lib.copy2_2();
	this.copy2_2.name = "copy2_2";
	this.copy2_2.setTransform(20.05,0,1,1,0,0,0,-0.1,-6.7);

	var maskedShapeInstanceList = [this.copy2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_2).wait(1));

	// mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwtCWIAAkrMAhbAAAIAAErg");
	mask_2.setTransform(-25,55);

	// Layer_4
	this.copy2_3 = new lib.copy2_3();
	this.copy2_3.name = "copy2_3";
	this.copy2_3.setTransform(19.65,21.45,1,1,0,0,0,0,15.1);

	var maskedShapeInstanceList = [this.copy2_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-113,-28.7,246,50.4), null);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask.setTransform(0,-16);

	// line1
	this.copy1_1 = new lib.copy1_1();
	this.copy1_1.name = "copy1_1";
	this.copy1_1.setTransform(0,39);
	this.copy1_1.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_1).wait(1));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask_1.setTransform(0,20);

	// line2
	this.copy1_2 = new lib.copy1_2();
	this.copy1_2.name = "copy1_2";
	this.copy1_2.setTransform(0,39);
	this.copy1_2.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_2).wait(1));

	// mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A0xFnIAAlnMApjAAAIAAFng");
	mask_2.setTransform(0,35.85);

	// line3
	this.copy1_3 = new lib.Symbol2();
	this.copy1_3.name = "copy1_3";
	this.copy1_3.setTransform(0,39.05,1,1,0,0,0,133,35.8);

	var maskedShapeInstanceList = [this.copy1_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-133,3.3,266,68.4), null);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// wheels
	this.wheelBack = new lib.wheelContainer();
	this.wheelBack.name = "wheelBack";
	this.wheelBack.setTransform(152.2,26.9,0.4302,0.6898,0,0,-28.0003,0,-1.1);

	this.wheelFront = new lib.wheelContainer();
	this.wheelFront.name = "wheelFront";
	this.wheelFront.setTransform(-10.25,69.3,0.6106,0.9,0,0,-23.8434,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wheelFront},{t:this.wheelBack}]}).wait(2));

	// Layer_2
	this.instance = new lib.carwomanclio();
	this.instance.setTransform(-218,-100,0.5,0.5);

	this.instance_1 = new lib.carman();
	this.instance_1.setTransform(-218,-107,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218,-107,400,231);


(lib.whiteLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(65));

	// circlemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");
	var mask_graphics_1 = new cjs.Graphics().p("AxsRuQnWnWAAqYQAAqXHWnWQHVnVKXABQKYgBHVHVQHWHWAAKXQAAKYnWHWQnVHVqYgBQqXABnVnVg");
	var mask_graphics_2 = new cjs.Graphics().p("Ax+SAQnendABqjQgBqiHendQHcncKigBQKjABHcHcQHeHdgBKiQABKjneHdQncHcqjABQqigBncncg");
	var mask_graphics_3 = new cjs.Graphics().p("AygSiQnrnsAAq2QAAq2HrnqQHrnrK1AAQK2AAHrHrQHrHqAAK2QAAK2nrHsQnrHqq2AAQq1AAnrnqg");
	var mask_graphics_4 = new cjs.Graphics().p("AzUTUQn/oAAArUQAArTH/oAQIAoALUAAQLVAAIAIAQH/IAAALTQAALUn/IAQoAIArVAAQrUAAoAoAg");
	var mask_graphics_5 = new cjs.Graphics().p("A0XUYQococAAr8QAAr7IcocQIcocL7AAQL8AAIcIcQIcIcAAL7QAAL8ocIcQocIcr8AAQr7AAococg");
	var mask_graphics_6 = new cjs.Graphics().p("A1nVoQo8o9gBsrQABsqI8o9QI9o9MqAAQMrAAI9I9QI8I9ABMqQgBMro8I9Qo9I9srAAQsqAAo9o9g");
	var mask_graphics_7 = new cjs.Graphics().p("A28W9QpgpgAAtdQAAtcJgpgQJgpgNcAAQNdAAJgJgQJgJgAANcQAANdpgJgQpgJgtdAAQtcAApgpgg");
	var mask_graphics_8 = new cjs.Graphics().p("A4QYRQqDqDABuOQgBuNKDqDQKDqCONAAQOOAAKDKCQKDKDgBONQABOOqDKDQqDKCuOAAQuNAAqDqCg");
	var mask_graphics_9 = new cjs.Graphics().p("A5fZfQqjqjAAu8QAAu7KjqkQKkqjO7AAQO8AAKkKjQKjKkAAO7QAAO8qjKjQqkKku8AAQu7AAqkqkg");
	var mask_graphics_10 = new cjs.Graphics().p("A6naoQrCrBABvnQgBvlLCrCQLBrCPmABQPngBLBLCQLCLCgBPlQABPnrCLBQrBLBvnAAQvmAArBrBg");
	var mask_graphics_11 = new cjs.Graphics().p("A7obpQrdrcgBwNQABwMLdrdQLcrdQMAAQQNAALcLdQLdLdABQMQgBQNrdLcQrcLdwNABQwMgBrcrdg");
	var mask_graphics_12 = new cjs.Graphics().p("A8kclQr1r1AAwwQAAwuL1r2QL1r1QvAAQQvAAL2L1QL1L2AAQuQAAQwr1L1Qr2L1wvAAQwvAAr1r1g");
	var mask_graphics_13 = new cjs.Graphics().p("A9adbQsLsMAAxPQAAxOMLsMQMMsLROAAQRPAAMMMLQMLMMAAROQAARPsLMMQsMMLxPAAQxOAAsMsLg");
	var mask_graphics_14 = new cjs.Graphics().p("A+KeLQsfsfAAxsQAAxqMfsgQMfsgRrAAQRrAAMgMgQMfMgAARqQAARssfMfQsgMfxrABQxrgBsfsfg");
	var mask_graphics_15 = new cjs.Graphics().p("A+2e2QsxsxAAyFQAAyEMxsyQMysxSEAAQSFAAMxMxQMyMyAASEQAASFsyMxQsxMyyFAAQyEAAsysyg");
	var mask_graphics_16 = new cjs.Graphics().p("A/dfeQtCtCAAycQAAybNCtCQNBtDScAAQScAANCNDQNCNCAASbQAASctCNCQtCNDycgBQycABtBtDg");
	var mask_graphics_17 = new cjs.Graphics().p("EggBAgCQtRtRAAyxQAAywNRtSQNQtQSxAAQSxAANRNQQNRNSAASwQAASxtRNRQtRNRyxAAQyxAAtQtRg");
	var mask_graphics_18 = new cjs.Graphics().p("EggiAgjQtetegBzFQABzENeteQNeteTEgBQTFABNeNeQNeNeABTEQgBTFteNeQteNezFABQzEgBteteg");
	var mask_graphics_19 = new cjs.Graphics().p("EghAAhAQtrtqAAzWQAAzVNrtrQNrtrTVABQTWgBNqNrQNsNrAATVQAATWtsNqQtqNrzWAAQzVAAtrtrg");
	var mask_graphics_20 = new cjs.Graphics().p("EghbAhbQt2t1AAzmQAAzkN2t3QN2t2TlAAQTmAAN2N2QN2N3AATkQAATmt2N1Qt2N3zmAAQzlAAt2t3g");
	var mask_graphics_21 = new cjs.Graphics().p("Egh0Ah0QuAt/AAz1QAAzzOAuBQOAuAT0AAQT0AAOAOAQOBOBAATzQAAT1uBN/QuAOBz0AAQz0AAuAuBg");
	var mask_graphics_22 = new cjs.Graphics().p("EgiKAiLQuKuJAA0CQAA0AOKuKQOJuKUBAAQUBAAOKOKQOKOKAAUAQAAUCuKOJQuKOK0BAAQ0BAAuJuKg");
	var mask_graphics_23 = new cjs.Graphics().p("EgifAifQuSuRAA0OQAA0MOSuTQOSuSUNAAQUNAAOSOSQOTOTAAUMQAAUOuTORQuSOT0NAAQ0NAAuSuTg");
	var mask_graphics_24 = new cjs.Graphics().p("EgixAiyQuauZAA0ZQAA0XOauaQOZuaUYAAQUZAAOZOaQOaOaAAUXQAAUZuaOZQuZOa0ZAAQ0YAAuZuag");
	var mask_graphics_25 = new cjs.Graphics().p("EgjCAjDQuhugAA0jQAA0hOhuhQOguhUiAAQUiAAOhOhQOhOhAAUhQAAUjuhOgQuhOh0iAAQ0iAAuguhg");
	var mask_graphics_26 = new cjs.Graphics().p("EgjSAjSQununAA0rQAA0qOnuoQOnunUrAAQUrAAOnOnQOoOoAAUqQAAUruoOnQunOo0rAAQ0rAAunuog");
	var mask_graphics_27 = new cjs.Graphics().p("EgjfAjgQutusAA00QAA0yOtutQOsutUzAAQUzAAOtOtQOtOtAAUyQAAU0utOsQutOt0zAAQ0zAAusutg");
	var mask_graphics_28 = new cjs.Graphics().p("EgjsAjsQuyuxAA07QAA06OyuyQOyuyU6AAQU6AAOyOyQOzOyAAU6QAAU7uzOxQuyOz06AAQ06AAuyuzg");
	var mask_graphics_29 = new cjs.Graphics().p("Egj3Aj4Qu3u2AA1CQAA1AO3u3QO2u3VBABQVBgBO3O3QO3O3AAVAQAAVCu3O2Qu3O31BgBQ1BABu2u3g");
	var mask_graphics_30 = new cjs.Graphics().p("EgkBAkBQu7u6AA1HQAA1GO7u7QO7u7VGAAQVHAAO6O7QO8O7AAVGQAAVHu8O6Qu6O81HAAQ1GAAu7u8g");
	var mask_graphics_31 = new cjs.Graphics().p("EgkKAkKQu+u+AA1MQAA1LO+u/QO+u+VMAAQVMAAO+O+QO/O/AAVLQAAVMu/O+Qu+O/1MAAQ1MAAu+u/g");
	var mask_graphics_32 = new cjs.Graphics().p("EgkSAkSQvBvBAA1RQAA1QPBvCQPCvBVQAAQVRAAPBPBQPCPCAAVQQAAVRvCPBQvBPC1RAAQ1QAAvCvCg");
	var mask_graphics_33 = new cjs.Graphics().p("EgkYAkZQvFvEAA1VQAA1UPFvEQPEvFVUAAQVVAAPEPFQPFPEAAVUQAAVVvFPEQvEPF1VAAQ1UAAvEvFg");
	var mask_graphics_34 = new cjs.Graphics().p("EgkeAkfQvHvHAA1YQAA1XPHvHQPHvHVXAAQVYAAPHPHQPHPHAAVXQAAVYvHPHQvHPH1YAAQ1XAAvHvHg");
	var mask_graphics_35 = new cjs.Graphics().p("EgkjAkjQvJvIAA1bQAA1aPJvJQPJvJVaAAQVbAAPIPJQPKPJAAVaQAAVbvKPIQvIPK1bAAQ1aAAvJvKg");
	var mask_graphics_36 = new cjs.Graphics().p("EgknAkoQvKvKAA1eQAA1cPKvLQPKvKVdAAQVdAAPLPKQPKPLAAVcQAAVevKPKQvLPK1dAAQ1dAAvKvKg");
	var mask_graphics_37 = new cjs.Graphics().p("EgkqAkrQvMvLAA1gQAA1ePMvMQPLvMVfAAQVfAAPMPMQPMPMAAVeQAAVgvMPLQvMPM1fAAQ1fAAvLvMg");
	var mask_graphics_38 = new cjs.Graphics().p("EgktAktQvMvMAA1hQAA1fPMvOQPNvMVgAAQVgAAPNPMQPNPOAAVfQAAVhvNPMQvNPN1gAAQ1gAAvNvNg");
	var mask_graphics_39 = new cjs.Graphics().p("EgkuAkvQvOvNAA1iQAA1gPOvOQPNvOVhAAQVhAAPOPOQPOPOAAVgQAAVivOPNQvOPO1hAAQ1hAAvNvOg");
	var mask_graphics_40 = new cjs.Graphics().p("EgkvAkwQvOvNAA1jQAA1hPOvOQPNvOViAAQViAAPOPOQPOPOAAVhQAAVjvOPNQvOPO1iAAQ1iAAvNvOg");
	var mask_graphics_41 = new cjs.Graphics().p("EgkwAkwQvOvNAA1jQAA1hPOvPQPOvOViAAQViAAPOPOQPPPPAAVhQAAVjvPPNQvOPP1iAAQ1iAAvOvPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_1,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_2,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_3,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_4,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_5,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_6,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_7,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_8,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_9,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_10,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_11,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_12,x:0.025,y:-58.525}).wait(1).to({graphics:mask_graphics_13,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_14,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_15,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_16,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_17,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_18,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_19,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_20,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_21,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_22,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_23,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_24,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_25,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_26,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_27,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_28,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_29,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_30,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_31,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_32,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_33,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_34,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_35,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_36,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_37,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_38,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_39,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_40,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_41,x:0.025,y:-58.475}).wait(65));

	// logoWhite
	this.logoWhite = new lib.LogoWhite();
	this.logoWhite.name = "logoWhite";
	this.logoWhite.setTransform(-27.3,195.9,0.6315,0.6305,0,0,0,1.4,0.8);

	var maskedShapeInstanceList = [this.logoWhite];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.logoWhite).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,0,95,209.7);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var COLOR = 2;
		var version = "do";
		//version = "do";
		var COLOR_VERSION = 0;
		var self= this;
		
		var WIDTH = 300;
		var HEIGHT = 250;
		
		var scaleFrom = 1;
		var cta = self.cta;
		var allianzEase = 'CustomEase.create("custom","M0,0 C0.4,0 0.2,1 1,1")';
		var animContDiv = document.getElementById("animation_container");
		
		function addBorder() {
			var brd_t = new cjs.Shape();
			brd_t.graphics.beginFill("#000000").drawRect(-10, 0, WIDTH + 20, 1);
			var brd_tr = new cjs.Shape();
			brd_tr.graphics.beginFill("#000000").drawRect(WIDTH - 1, -10, 1, HEIGHT + 20);
			var brd_b = new cjs.Shape();
			brd_b.graphics.beginFill("#000000").drawRect(-10, HEIGHT - 1, WIDTH + 20, 1);
			var brd_tl = new cjs.Shape();
			brd_tl.graphics.beginFill("#000000").drawRect(0, -10, 1, HEIGHT + 20);
			self.addChild(brd_t, brd_tr, brd_b, brd_tl);
		}
		
		if(version == "do") COLOR_VERSION = 4;
		
		this.shape.circle.gotoAndStop(COLOR+COLOR_VERSION);
		this.shape.stripe1.topStripe.gotoAndStop(COLOR+COLOR_VERSION);
		this.shape.stripe2.topStripe.gotoAndStop(COLOR+COLOR_VERSION);
		this.shape.cutout.gotoAndStop(COLOR+COLOR_VERSION);
		
		this.actor.gotoAndStop(COLOR);
		this.car.gotoAndStop(COLOR/2);
		this.car2.gotoAndStop(COLOR/2);
		this.largecircle.gotoAndStop(COLOR+COLOR_VERSION);
		
		if(version == "do"){
			this.copyDo.visible = true;
			this.copy1.visible = this.copy2.visible = false;
			cta = self.ctaDo;
		}
		
		function animateInFrame1(){
		 
			var car = self.car;
			var d = 0.1;
			gsap.to(self.logo, {duration:0.8, alpha:1, delay: d});
			
			
		
			if(version == "think"){
				gsap.set(self.shape,{scale:0, x:240, y:30});
				gsap.to(self.shape, {scale:1, delay:d,duration:0.6, ease:allianzEase});
		
		
				gsap.to(self.copy1.copy1_1, {y:0, alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {y:0, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {y:0, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				
					
				d += 0.5;
				gsap.to(car, {x:-192, y:388, delay:d,duration:2.5});
				gsap.to(car.wheelFront.wheel, {rotation:-900, delay:d,duration:2.6});
				gsap.to(car.wheelBack.wheel, {rotation:-900, delay:d,duration:2.6});
			
					
						
				gsap.to(self.logo, {duration:0, alpha:0, delay: 2.5});				
					
				
				}
				else{
					 gsap.to(self.logo, {duration:0, alpha:0, delay: 1.3});
					gsap.set(self.shape, {scale:0});
				}
				
			gsap.from(self.shape.stripe1, {scale:12, x:"+="+WIDTH*2, duration:0.75, ease:'power1.out', delay:d+0.1});
			gsap.from(self.shape.stripe2, {scale:12, x:"+="+WIDTH*2, duration:0.75, ease:'power1.out', delay:d+0.3});
			
			if(version=="do"){
				gsap.to(self.shape, {scale:0.5, delay:d,duration:0.3, ease:allianzEase});
				d+=1.0;
			}else{
					d += 1.7;
			}
			
			gsap.to(cta, {duration:0.4, x:35, alpha:1, ease: 'power3.out', delay: d});
			
		
			
			if(version == "think"){
				gsap.to(self.copy1.copy1_3, { alpha:0, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, { alpha:0, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_1, { alpha:0, delay:d+0.1, duration:0.6, ease:'power3.out'});
			}
		
				//gsap.to(self.shape.stripe1.topStripe, {alpha:1,  duration:0.25, ease:allianzEase, delay:d});
			//gsap.to(self.shape.stripe2.topStripe, {alpha:1,  duration:0.25, ease:allianzEase, delay:d});
			
		//	gsap.to(self.shape.stripe1.stripebottom, {alpha:0,  duration:0.25, ease:allianzEase, delay:d});	
		//	gsap.to(self.shape.stripe2.stripebottom, {alpha:0,  duration:0.25, ease:allianzEase, delay:d});
			
				if(version=="think"){
				gsap.to(self.shape, {scale:0.5, x:150, y:125,  delay:d,duration:0.3, ease:allianzEase});
			}
			
		
		
			gsap.delayedCall(d , function() {
				self.shape.cutout.visible= true;
			
				self.shape.circle.visible = self.shape.stripe1.visible = self.shape.stripe2.visible = false;
		
				self.largecircle.visible = true;
				gsap.set(self.largecircle,{scale:0});
				gsap.to(self.largecircle, {scale:2.25,duration:0.8, ease:allianzEase});
				self.whiteLogo.play();
				if(version=="do")
				self.whiteLogo.play();
				
				
				
			//		gsap.to(self.circleMask, {scale:2.25,duration:0.6, ease:allianzEase});
			
				
				
			});
		
			if(version=="do"){
				
				for(var i = 1; i <= 3; i++){
					gsap.to(self.copyDo['copy_'+i], {y:0, alpha:1, delay:d+(i-1)*0.1, duration:0.6, ease:'power3.out'});
					}
				
			}
			d+=0.3;
			gsap.to(self.actor, {y:125, delay:d,duration:0.6, ease:'power3.out'});
			d+=0.1;
			
			if(version == "think"){
				gsap.from(self.copy2.copy2_1, {y:"+=30", alpha:0, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.from(self.copy2.copy2_2, {y:"+=30", alpha:0, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.from(self.copy2.copy2_3, {y:"+=30", alpha:0, delay:d+0.2, duration:0.6, ease:'power3.out'});
				 
				d+=0.4;
				gsap.to(self.copy2.copy2_1, {x:"-=20", alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy2.copy2_2, {x:"-=20", alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy2.copy2_3, {x:"-=20", alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
			}
			
			gsap.from(self.promo, {scale:0, delay:d,duration:0.6, ease:allianzEase});
			gsap.from(self.promo.copy1 ,{y:"+=30", alpha:0, delay:d+0.3,duration:0.6, ease: 'power3.out'});
			gsap.from(self.promo.copy2,  {y:"+=30", alpha:0, delay:d+0.1,duration:0.6, ease: 'power3.out'});
		
			
			var smallCarDiffX = -self.car2.x + 232;
			var smallCarDiffY = -self.car2.y + 170;
			
			var car2D = 0.75;
		
			if(version=="do")
				car2D = 0.5;
			gsap.to(self.car2, {x:232, y:170, delay:d-car2D,duration:1.25});
			gsap.to(self.car2.wheelFront.wheel, {rotation:-500, delay:d-car2D,duration:1.26});
			gsap.to(self.car2.wheelBack.wheel, {rotation:-500, delay:d-car2D,duration:1.26});
			//gsap.from("#wheelFrontMini", {x:151-smallCarDiffX, y:391-smallCarDiffY, delay:d,duration:2.1});
			//gsap.to("#wheelFrontMiniImg", {rotation:-140, delay:d,duration:2.1});
			
			
					gsap.delayedCall(d + 0.5, function() {
				ctaAnimate();
			});
		
			gsap.delayedCall(d+2, activateCta);
			
		
		}
		
		function ctaAnimate() {
			var md = 0.0;
			var shift = 28;
			var shiftFrom = 0;
			gsap.to(cta.arrow1, {duration:0.3, alpha:0, x:arrowX + shift,  ease: 'power4.out', delay: md});
			gsap.to(cta.arrow2, {duration:0.3, alpha:1, x:arrow2X + shift,  ease: 'power4.out', delay: md});
			gsap.to(cta.txt, {duration:0.3, alpha:1, x:txtX+shift,  ease: 'power4.out', delay: md})
			md += 0.5;
				gsap.to(cta.arrow1, {duration:0.3, alpha:1, x:arrowX+shiftFrom,  ease: 'power4.out', delay: md});
			gsap.to(cta.arrow2, {duration:0.3, alpha:0, x:arrow2X+shiftFrom,  ease: 'power4.out', delay: md});
			gsap.to(cta.txt, {duration:0.3, alpha:1, x:txtX+ shiftFrom,  ease: 'power4.out', delay: md});
		
			}
			
		var mouseOn = false;
		function activateCta() {
			
			animContDiv.addEventListener("mouseover", doRollOver, false);
			animContDiv.addEventListener("mouseout", doRollOut, false);
		};
		
		var arrowX = cta.arrow1.x;
		var arrow2X= cta.arrow2.x;
		var txtX = cta.txt.x;
		
		function doRollOver(event) {
			var shift = 30-4;
		var md = 0.0;
				mouseOn = true;
			gsap.to(cta.arrow1, {duration:0.3, alpha:0, x:arrowX + shift,  ease: 'power4.out', delay: md});
			gsap.to(cta.arrow2, {duration:0.3, alpha:1, x:arrow2X + shift,  ease: 'power4.out', delay: md});
			gsap.to(cta.txt, {duration:0.3, alpha:1, x:txtX+shift,  ease: 'power4.out', delay: md})
		};
		function doRollOut(event) {
			if(mouseOn == false) return;
			mouseOn = false;
				var shiftFrom =0;
			var md = 0.0;
			gsap.to(cta.arrow1, {duration:0.3, alpha:1, x:arrowX+shiftFrom,  ease: 'power4.out', delay: md});
			gsap.to(cta.arrow2, {duration:0.3, alpha:0, x:arrow2X+shiftFrom,  ease: 'power4.out', delay: md});
			gsap.to(cta.txt, {duration:0.3, alpha:1, x:txtX+ shiftFrom,  ease: 'power4.out', delay: md});
		};
		
		addBorder();
		
		animateInFrame1();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// copy_do
	this.copyDo = new lib.copyDo();
	this.copyDo.name = "copyDo";
	this.copyDo.setTransform(163,79.3,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.copyDo).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(171,36);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// msk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6PTiMAAAgnDMA0fAAAMAAAAnDg");
	mask.setTransform(168,125);

	// Layer_4
	this.car = new lib.car();
	this.car.name = "car";
	this.car.setTransform(554,-3);

	var maskedShapeInstanceList = [this.car];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(112,192,0.5754,0.5755);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.whiteLogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(215.2,29.6);

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(187.9,225.5,0.6315,0.6305,0,0,0,1.4,0.8);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// smallcar
	this.car2 = new lib.car();
	this.car2.name = "car2";
	this.car2.setTransform(452,108,0.357,0.3571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.car2).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(75.05,140.05,0.6154,0.6154,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// cta_do
	this.ctaDo = new lib.ctado();
	this.ctaDo.name = "ctaDo";
	this.ctaDo.setTransform(-166.05,198.45,0.7185,0.7188);

	this.timeline.addTween(cjs.Tween.get(this.ctaDo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(-166,198.45,0.7538,0.7541);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// actormask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AouPZQjIjIgekOIjMAAIAAhvIlpAAIAA5YMAqTAAAIAAZYIlbAAIAABvIjEAAQgeEOjJDIQjrDslOAAQlNAAjsjsg");
	mask_1.setTransform(149.85,83.425);

	// actor
	this.actor = new lib.actorMC();
	this.actor.name = "actor";
	this.actor.setTransform(150.35,511.7,0.7072,0.7072);

	var maskedShapeInstanceList = [this.actor];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.actor).wait(1));

	// shape
	this.shape = new lib.shape();
	this.shape.name = "shape";
	this.shape.setTransform(150.45,125.15,1,1,0,0,0,0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// largeshape
	this.largecircle = new lib.largecircle();
	this.largecircle.name = "largecircle";
	this.largecircle.setTransform(156.7,122.4,1,1,0,0,0,5.2,5);
	this.largecircle.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largecircle).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-63.4,545.3,663.4);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./actor2.png", id:"actor2"},
		{src:"./carman.png", id:"carman"},
		{src:"./Bitmap16.png", id:"Bitmap16"},
		{src:"./actor3.png", id:"actor3"},
		{src:"./girl.png", id:"girl"},
		{src:"./actor4.png", id:"actor4"},
		{src:"./wheel.png", id:"wheel"},
		{src:"./carwomanclio.png", id:"carwomanclio"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5FE19E2B1B484BF89BA7A3ACD3406BF0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;