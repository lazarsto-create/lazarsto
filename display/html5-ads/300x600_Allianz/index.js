(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[318,0,314,324],[0,0,316,326],[634,0,342,295],[634,297,220,137],[0,328,576,30]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bolt_drive1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bolt_drive2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boltend = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadow1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.t33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AJHBwIAJghQAVAMAaAAQAQAAAJgFQAJgFAAgIQAAgIgHgEQgIgEgQgEIgcgKQgLgFgIgKQgIgLAAgRQAAgXAQgNQAQgNAeAAQAPAAAOADQAOADALAFIgJAhQgUgLgYAAQgNAAgHAEQgHAFAAAHQAAAIAIAEQAIAFAQAEQARAFALAFQALAEAIAKQAHAKAAAQQAAAagSAOQgTAOghAAQggAAgYgNgAFqByQgUgKgLgUQgLgUAAgbQAAgZAKgTQAKgUASgLQASgLAXAAQAXAAASALQASAKAKATQAKASAAAZIgBAPIh5AAQAEAVAOAKQAOALAWAAQAOAAANgEQAOgEALgHIALAeQgNAJgQAFQgRAFgSAAQgbAAgUgLgAG6AVQgCgSgLgKQgLgKgSAAQgRAAgMAKQgLAJgDATIBVAAIAAAAgAp6ByQgUgKgLgUQgLgUAAgbQAAgZAKgTQAKgUASgLQASgLAXAAQAXAAASALQASAKAKATQAKASAAAZIgBAPIh5AAQAEAVAOAKQAOALAWAAQAOAAANgEQAOgEALgHIALAeQgNAJgQAFQgRAFgSAAQgbAAgUgLgAoqAVQgCgSgLgKQgLgKgSAAQgRAAgMAKQgLAJgDATIBVAAIAAAAgAsvB4IAGgkQALADAKAAQASAAAIgIQAJgJAAgRIAAilIAnAAIAACpQAAAhgSARQgSARggAAQgRAAgQgEgAi6BtQgNgOAAgZIAAhSIgXAAIAAgiIAXAAIAAgoIAkgHIAAAvIAtAAIAAAiIgtAAIAABNQAAAYAXAAQAJAAAKgEIAFAgQgOAGgSAAQgZAAgNgOgAnRBtQgNgOAAgZIAAhSIgXAAIAAgiIAXAAIAAgoIAkgHIAAAvIAtAAIAAAiIgtAAIAABNQAAAYAXAAQAJAAAKgEIAFAgQgOAGgSAAQgZAAgNgOgAIDB5IAAinIAkAAIAACngADOB5IAAinIAiAAIAAAdQANgfAeAAQALAAAKAEIgFAkQgIgDgJAAQgTAAgKALQgLAMAAAZIAABUgAgEB5IAAjpIBcAAQAaAAASAKQATAJAKARQAKAQAAAWQAAAWgKAQQgKARgTAJQgSAJgaAAIg2AAIAABWgAAigBIA2AAQAVAAALgKQALgKAAgRQAAgRgLgKQgLgKgVAAIg2AAgAl4B5IAAgdIBUhoIhQAAIAAgiICCAAIAAAdIhUBoIBXAAIAAAigALdAwIAAgkIBTAAIAAAkgAIEhUQgHgHAAgKQAAgKAHgGQAGgHALAAQAKAAAHAHQAGAGAAAKQAAAKgGAGQgHAHgKAAQgLAAgGgGg");
	this.shape.setTransform(83.825,23.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t33, new cjs.Rectangle(2.2,10.7,163.3,25.000000000000004), null);


(lib.t32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AFLCLIAJghQAMAHAPAFQAOADAOAAQAbAAAPgNQAOgNAAgaIAAgIQgVAaghAAQgWAAgRgLQgSgKgJgTQgKgTAAgZQAAgXAKgTQAJgTASgKQARgLAWAAQAjAAAVAdIAAgaIAiAAIAACUQABAngYAWQgYAWgrAAQgkAAgegQgAFyggQgMAOAAAVQAAAXAMANQAOAOAVAAQAVAAANgOQAMgMAAgYQAAgWgMgNQgNgOgVAAQgVAAgOAOgAIIBSIAJghQAUAMAbAAQAPAAAJgFQAKgFAAgJQAAgHgIgEQgIgEgQgFIgcgKQgLgEgIgKQgIgKAAgSQAAgYAQgNQARgMAdAAQAPAAAOADQAOADALAFIgJAhQgUgMgYAAQgNAAgHAFQgHAFAAAHQAAAJAIAEQAIAEARAFQAQAEAMAFQAKAEAIAKQAIAJAAARQgBAagSAOQgTAOgggBQghAAgXgMgAlMBSIAJghQAUAMAaAAQARAAAIgFQAKgFAAgJQgBgHgHgEQgHgEgRgFIgcgKQgLgEgIgKQgIgKAAgSQAAgYAQgNQARgMAdAAQAPAAAOADQAOADALAFIgJAhQgUgMgYAAQgNAAgHAFQgHAFAAAHQAAAJAIAEQAIAEARAFQAQAEAMAFQAKAEAIAKQAHAJABARQAAAagTAOQgTAOghgBQggAAgXgMgAoqBUQgTgKgMgUQgLgUAAgbQAAgYAKgVQAKgTASgLQASgLAXAAQAYAAARALQASAKAKATQALATgBAXIgBAQIh4AAQADAVAOAKQAOALAWAAQAOAAAOgEQAOgEAKgHIALAeQgNAJgQAFQgRAEgSAAQgaAAgVgKgAnagIQgCgTgLgKQgLgLgSAAQgRAAgMALQgLAKgDATIBVAAIAAAAgAgqBLQgRgUAAgiIAAhhIAkAAIAABaQABAXAJALQAKAMASgBQASAAALgLQALgMgBgVIAAhbIAkAAIAACnIgiAAIAAgaQgHAPgOAGQgOAIgSAAQgcAAgRgTgAibBOQgOgNAAgaIAAhRIgWAAIAAgiIAWAAIAAgoIAlgHIAAAvIAsAAIAAAiIgsAAIAABMQAAAYAXAAQAIAAALgDIAEAgQgNAFgSABQgZgBgNgOgAD8BbIAAhbQAAgXgJgKQgKgMgSAAQgTAAgKAMQgMAMAAAUIAABcIgkAAIAAinIAiAAIAAAaQAJgOANgIQAOgHARAAQAeAAARATQARAUAAAiIAABhgAmRBbIAAinIAkAAIAACngArwBbIAAjpIAoAAIAADEIBkAAIAAAlgAKdASIAAgjIBUAAIAAAjgAmQhyQgHgHABgKQgBgKAHgHQAGgGALAAQAKAAAHAGQAGAHABAKQgBAKgGAGQgHAHgKgBQgLAAgGgFg");
	this.shape.setTransform(80.05,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t32, new cjs.Rectangle(4.8,10.7,150.5,31.000000000000004), null);


(lib.t31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AISB2QgIgHAAgLQAAgLAIgHQAGgHALAAQALAAAHAHQAHAHAAALQAAALgHAHQgHAHgLAAQgLAAgGgHgAA2ByQgUgKgMgUQgKgUgBgaQABgaAJgTQALgTARgMQATgLAXAAQAXAAASALQASAKAKAUQAKARAAAZIgBAPIh5AAQADAVAOALQAPAKAVABQAOgBAOgEQAOgEALgHIAKAfQgMAIgRAFQgQAFgTAAQgaAAgUgLgAA/gGQgLAJgEASIBWAAQgCgSgMgJQgKgLgTAAQgQAAgMALgAkqByQgTgLgLgUQgLgUAAgZQAAgbALgSQALgUATgLQATgLAZAAQAOAAAOAFQAOADAKAIIgJAhQgJgHgLgEQgLgDgLAAQgXAAgNAOQgNANAAAZQAAAYANAOQANAOAXAAQALAAALgEQALgEAJgGIAJAhQgKAHgOAEQgOAFgOAAQgZAAgTgLgAo7BwIAJggQAVALAaABQAQAAAIgGQAKgEAAgJQAAgHgHgEQgIgFgQgEIgcgKQgMgEgHgLQgJgKABgSQgBgXARgNQAQgNAeAAQAOAAAPAEQAOADALAEIgJAhQgUgLgYAAQgOAAgGAEQgIAFABAHQgBAIAJAEQAHAFARAEQARAFALAFQALAEAIALQAHAJAAARQAAAZgTAOQgSAOghAAQggAAgYgNgAG/B5IAAhbQAAgXgKgKQgKgLgTAAQgSAAgLALQgLALABAVIAABcIgkAAIAAimIAiAAIAAAZQAHgOAOgIQAOgHASAAQAdABARASQARAUAAAhIAABigADPB5IAAimIAiAAIAAAdQANggAeAAQALAAAKAFIgGAjQgHgDgKAAQgSAAgLALQgLANABAYIAABUgAg4B5IAAhbQAAgXgJgKQgLgLgSAAQgTAAgKALQgLALAAAVIAABcIgkAAIAAj1IAkAAIAABkQAIgNANgFQAOgHAQAAQAeABARASQARAUAAAhIAABigAmaB5IAAimIAkAAIAACmgAITAxIgEihIAoAAIgEChgAmZhUQgHgHABgKQgBgKAHgGQAGgGALAAQAKAAAHAGQAGAHABAJQgBAKgGAGQgHAHgKAAQgLAAgGgGg");
	this.shape.setTransform(189.85,23.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AFXByQgUgKgMgUQgKgUgBgaQABgaAJgTQALgTARgMQATgLAXAAQAXAAASALQASAKAKAUQAKARAAAZIgBAPIh5AAQADAVAOALQAPAKAVABQAOgBAOgEQAOgEALgHIAKAfQgMAIgQAFQgRAFgTAAQgaAAgUgLgAFggGQgLAJgEASIBWAAQgCgSgMgJQgKgLgTAAQgQAAgMALgAgJByQgTgLgLgUQgLgUAAgZQAAgbALgSQALgUATgLQASgLAZAAQAOAAAOAFQAOADAKAIIgJAhQgJgHgLgEQgLgDgLAAQgXAAgMAOQgNANAAAZQAAAYANAOQAMAOAXAAQALAAALgEQALgEAJgGIAJAhQgKAHgOAEQgOAFgOAAQgZAAgSgLgAjWBxQgSgKgJgUQgKgUAAgZQAAgaAKgTQAKgTARgMQARgLAWAAQAjABAVAcIAAgZIAiAAIAACmIgiAAIAAgZQgVAdgjAAQgWAAgRgMgAjKAAQgNAOABAYQgBAXANAOQAOAPAVAAQAVAAANgOQAMgOAAgYQAAgZgMgNQgNgOgVAAQgVgBgOAPgAHwB5IAAimIAiAAIAAAdQANggAeAAQALAAAKAFIgGAjQgHgDgKAAQgSAAgLALQgLANABAYIAABUgADoB5IAAhbQAAgXgJgKQgLgLgSAAQgTAAgKALQgLALAAAVIAABcIgkAAIAAj1IAkAAIAABkQAIgNANgFQAOgHAQAAQAeABARASQARAUAAAhIAABigAltB5IAAimIAiAAIAAAdQANggAfAAQAKAAAKAFIgFAjQgIgDgJAAQgTAAgKALQgLANAAAYIAABUgAm6B5IhVhlIgbAbIAABKIgnAAIAAjpIAnAAIAABsIBphsIAzAAIhoBrIBtB+g");
	this.shape_1.setTransform(64.2,23.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(4.8,10.7,242.29999999999998,25.000000000000004), null);


(lib.t24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AlABlIAAicIAWAAIAAARQAPgTAZAAQAPAAALAIQAMAHAHANQAHAOgBARQABARgHAOQgHANgMAIQgLAIgPgBQgYAAgOgRIAAA5gAkfgYQgJAKAAAQQAAAQAJAKQAJAKAOAAQAPAAAJgKQAIgKABgQQgBgQgIgJQgJgKgPAAQgOAAgJAJgAEpA5QgEgGAAgHQAAgIAEgFQAFgFAJAAQAHAAAEAFQAGAFAAAIQAAAHgGAGQgEAEgHAAQgJAAgFgEgAA9A3QgNgIgIgOQgIgNAAgSQAAgRAHgOQAHgNANgHQAMgIAQAAQAPAAANAHQAMAIAHAMQAHANAAARIgBAKIhSAAQABAOAKAHQAKAIAPAAQAKgBAJgCQAKgDAHgFIAHAVQgJAGgLAEQgLACgNAAQgSAAgOgGgAB0gJQgCgMgHgHQgIgIgMAAQgMAAgHAIQgJAHgBAMIA6AAIAAAAgAilA2QgMgIgHgNQgHgOAAgRQAAgRAHgOQAHgNAMgHQAMgIAPAAQAYAAAOATIAAgRIAYAAIAAByIgYAAIAAgRQgOATgYAAQgPABgMgIgAidgXQgJAJAAAQQAAAQAJAKQAKAKAOAAQAOAAAJgKQAIgKAAgQQAAgQgIgKQgJgJgOAAQgOAAgKAKgAmvA1IAGgWQAPAIASAAQAKAAAHgEQAFgDAAgGQAAgFgEgDIgQgFIgUgIQgHgCgGgHQgGgHABgMQAAgQALgKQALgIAUAAQAKAAAKACQAJACAIAEIgGAWQgOgIgQABQgJAAgFADQgFACAAAGQAAAGAGADQAFADAMADIASAGQAIACAFAHQAGAHgBALQAAARgMAKQgNAJgWAAQgXAAgQgIgAD0A7IAAg9QAAgQgGgIQgHgIgNABQgNAAgHAIQgHAHAAAPIAAA+IgZAAIAAhyIAXAAIAAASQAFgKAKgFQAKgFALAAQAVAAALANQAMANAAAYIAABCgAgtA7IAAhyIAYAAIAAAUQAJgWATAAQAIAAAHADIgEAZQgFgCgHAAQgMAAgGAIQgIAIAAARIAAA5gAGDgrIgPAcIgTgOIAVgXIgfgHIAHgWIAdANIgDggIAXAAIgDAgIAdgNIAHAWIgfAHIAVAXIgTAOg");
	this.shape.setTransform(45.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t24, new cjs.Rectangle(2.6,8.8,86.4,20.2), null);


(lib.t23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AMLBgIAHgWQAIAFAKADQAKACAKAAQATAAAJgJQAKgJAAgRIAAgGQgOASgXAAQgPAAgMgHQgMgIgGgNQgHgNAAgRQAAgPAHgNQAGgNAMgIQAMgHAPAAQAYAAAPAUIAAgRIAXAAIAABkQAAAcgQAPQgQAOgeAAQgZAAgVgLgAMngUQgJAJAAAOQAAAQAJAJQAJAKAPAAQAOAAAJgKQAIgJAAgQQAAgOgIgKQgJgJgOAAQgPAAgJAKgAIMA0QgLgNAAgYIAAhBIAZAAIAAA9QAAAQAGAHQAHAIANAAQAMAAAIgIQAHgIAAgPIAAg9IAZAAIAABxIgYAAIAAgRQgFAKgKAFQgJAFgMAAQgUAAgMgOgAFFA7QgOgHgIgOQgIgOAAgSQAAgRAHgNQAHgOANgHQAMgIAQAAQAQAAAMAHQAMAIAHANQAHANAAAQIAAAKIhTAAQACAOAKAHQAJAIAPAAQAKAAAJgDQAKgDAHgFIAHAVQgIAGgLAEQgMADgNAAQgSAAgNgHgAF7gEQgBgNgIgHQgHgHgNAAQgLAAgIAHQgIAHgCANIA6AAIAAAAgABTA6QgNgHgIgOQgHgNAAgSQAAgRAHgNQAIgOANgHQANgIAQAAQALAAAJADQAJADAIAFIgHAXQgGgFgHgDQgIgCgIAAQgPAAgJAJQgJAKAAAQQAAARAJAJQAJAKAPAAQAIAAAIgDQAHgCAGgFIAHAXQgHAFgKADQgJADgLAAQgQAAgNgIgAhnA6IAGgXQAPAIARAAQALAAAGgDQAGgEAAgGQAAgFgFgDIgQgFIgTgHQgIgDgFgHQgGgHAAgMQAAgQALgJQAMgJAUAAQAKAAAKACQAJACAIAEIgGAWQgOgHgQAAQgJAAgFADQgFADAAAFQAAAGAGADQAFADALADIATAFQAIAEAFAGQAFAHAAALQAAASgMAJQgNAKgXAAQgWAAgQgIgAkbA7QgOgHgIgOQgIgOAAgSQAAgRAHgNQAHgOANgHQAMgIAQAAQAQAAAMAHQAMAIAHANQAHANAAAQIAAAKIhTAAQACAOAKAHQAJAIAPAAQAKAAAJgDQAKgDAHgFIAHAVQgIAGgLAEQgMADgNAAQgSAAgNgHgAjlgEQgBgNgIgHQgHgHgNAAQgLAAgIAHQgIAHgCANIA6AAIAAAAgALWA/IAAg+QAAgPgGgIQgHgHgNAAQgMAAgIAIQgHAIAAANIAAA/IgZAAIAAhxIAXAAIAAARQAGgKAJgFQAKgFAMAAQAUAAAMANQALAOAAAXIAABCgAGtA/IAAhxIAXAAIAAATQAJgVAVAAQAIAAAHADIgEAYQgGgCgGAAQgNAAgHAIQgHAJAAAQIAAA5gAD5A/IAAg+QAAgPgHgIQgGgHgNAAQgNAAgHAIQgHAIAAANIAAA/IgZAAIAAinIAZAAIAABEQAFgIAJgFQAJgEALAAQAUAAAMANQAMAOAAAXIAABCgAAGA/IAAhxIAZAAIAABxgAizA/IAAhxIAXAAIAAATQAJgVAVAAQAIAAAHADIgEAYQgGgCgGAAQgNAAgHAIQgHAJAAAQIAAA5gAmgA/IhCifIAdAAIAzCBIAziBIAdAAIhCCfgAqUA/IAAgTIA6hHIg3AAIAAgXIBZAAIAAATIg6BHIA8AAIAAAXgArYA/IAAhaIgPAAIAAgXIAPAAIAAgSQAAgSAKgKQAJgKASAAQAMAAAIAEIgEAVQgGgCgGAAQgIAAgEAEQgEAEAAAJIAAAQIAeAAIAAAXIgeAAIAABagAsPA/Ig6hEIgSASIAAAyIgbAAIAAifIAbAAIAABKIBHhKIAkAAIhHBJIBKBWgAolANIAAgYIA6AAIAAAYgAAHhNQgEgEAAgHQAAgHAEgFQAEgEAIAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAEgGAAQgIAAgEgEg");
	this.shape.setTransform(92.625,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t23, new cjs.Rectangle(3.9,7.8,177.5,21.4), null);


(lib.t22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AFSBPQgOgIgHgOQgIgNAAgSQAAgSAHgNQAHgNAMgHQANgIAPAAQAQAAANAHQAMAIAHAMQAHAMAAARIgBALIhTAAQACAOAKAHQAKAIAPAAQAJgBAKgCQAJgDAIgFIAHAVQgJAGgLAEQgLACgNAAQgSAAgOgGgAFYgEQgIAGgCAMIA7AAQgCgMgHgGQgIgIgMAAQgMAAgIAIgAAXBPQgOgIgIgOQgHgNAAgSQAAgSAGgNQAHgNANgHQAMgIAQAAQAQAAAMAHQAMAIAHAMQAHAMAAARIAAALIhTAAQACAOAKAHQAJAIAPAAQAKgBAJgCQAKgDAHgFIAHAVQgIAGgLAEQgMACgNAAQgSAAgNgGgAAdgEQgIAGgCAMIA6AAQgBgMgIgGQgHgIgNAAQgLAAgIAIgAh2BOQgMgIgHgNQgHgOAAgRQAAgSAHgNQAHgNAMgHQAMgIAPAAQAXAAAOARIAAhFIAZAAIAACoIgYAAIAAgRQgOATgYAAQgPABgMgIgAhuAAQgJAJAAARQAAAQAJAKQAKAKAOAAQAPAAAIgKQAJgKAAgQQAAgRgJgJQgIgJgPAAQgOAAgKAJgAleBPQgOgIgIgOQgIgNAAgSQAAgSAHgNQAHgNANgHQAMgIAQAAQAQAAAMAHQAMAIAHAMQAHAMAAARIAAALIhTAAQACAOAKAHQAJAIAPAAQAKgBAJgCQAKgDAHgFIAHAVQgIAGgLAEQgMACgNAAQgSAAgNgGgAlYgEQgIAGgCAMIA6AAQgBgMgIgGQgHgIgNAAQgLAAgIAIgAnmBCIAAARIgXAAIAAioIAZAAIAABFQAOgRAXAAQAPAAALAIQAMAHAHANQAHANAAASQAAARgHAOQgHANgMAIQgLAIgPgBQgZAAgOgTgAncAAQgIAJAAARQAAAQAIAKQAJAKAOAAQAPAAAJgKQAJgKAAgQQAAgRgJgJQgJgJgPAAQgOAAgJAJgAG7BTIAAhyIAXAAIAAAUQAJgWAVAAQAHAAAHADIgDAZQgGgCgGAAQgNAAgHAHQgHAIAAASIAAA5gAEGBTIAAg+QAAgQgGgHQgHgIgNABQgMAAgIAIQgHAGAAAPIAAA/IgZAAIAAhyIAXAAIAAASQAGgKAJgFQAKgFAMAAQAUAAAMANQALANAAAXIAABDgAB/BTIAAhyIAZAAIAABygAj2BTIAAhyIAZAAIAABygACAg6QgEgDAAgIQAAgGAEgFQAEgFAIAAQAGAAAFAFQAFAFAAAGQAAAHgFAEQgFAFgGAAQgIAAgEgFgAj1g6QgEgDAAgIQAAgGAEgFQAEgFAIAAQAGAAAFAFQAFAFAAAGQAAAHgFAEQgFAFgGAAQgIAAgEgFg");
	this.shape.setTransform(168.025,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86200").s().p("AEIBMQgMgKgHgTQgHgTAAgZQAAgYAHgTQAHgTAMgKQANgKASAAQARAAANAKQAMAKAIATQAGATAAAYQAAAZgGATQgIATgMAKQgNAKgRAAQgSAAgNgKgAEQgmQgHAPAAAaQAAAbAHAPQAIAPAPAAQAOAAAIgPQAIgPAAgbQAAgagIgPQgIgQgOAAQgPAAgIAQgABvBGIAKgYQAQAOAVAAQAQAAAJgIQAJgHAAgOQAAgNgJgHQgIgHgQAAQgPAAgMAGIgRgFIALhRIBRAAIAAAZIg5AAIgFAkQAIgDAKAAQARAAAMAGQANAGAHALQAGAMAAAPQAAAPgHANQgIAMgNAHQgNAGgSAAQgcAAgUgPgAg6BIQgMgOAAgXIAAhCIAZAAIAAA9QAAAQAHAIQAGAIANAAQANAAAGgJQAHgIAAgOIAAg+IAZAAIAAByIgXAAIAAgSQgGAKgIAFQgKAFgMAAQgUAAgLgNgAlXBNIAGgXQAPAJASAAQALAAAGgEQAGgDAAgGQAAgFgFgDIgQgGIgUgHQgHgDgGgHQgFgHAAgMQAAgQALgJQALgIAVAAQAKAAAJACQAKACAHAEIgGAWQgNgIgRAAQgJAAgFADQgEADAAAFQAAAGAFACQAFADAMAEIATAGQAHADAGAHQAFAHAAALQAAARgNAKQgNAJgWAAQgWAAgRgIgAn4BCIAAARIgXAAIAAioIAZAAIAABFQAOgRAXAAQAPAAALAHQAMAIAHANQAHANAAARQAAASgHAOQgHANgMAIQgLAHgPAAQgZAAgOgTgAnuAAQgIAJAAAQQAAARAIAKQAJAKAOAAQAPAAAJgKQAJgKAAgRQAAgQgJgJQgJgKgPAAQgOAAgJAKgAHSBLQgKgKAAgSQAAgRAKgKQAJgKARAAQARAAAKAKQAJAKAAARQAAASgKAKQgJAKgRAAQgRAAgJgKgAHhAiQgDAFAAAIQAAAJADAFQAEAEAHAAQAHAAAEgEQAEgFAAgJQAAgIgEgFQgEgEgHAAQgHAAgEAEgAFzBTIB8ifIAcAAIh8CfgAi6BTIAAgUIA5hHIg3AAIAAgXIBZAAIAAATIg5BIIA8AAIAAAXgAmFBTIAAhyIAZAAIAABygAF4gOQgKgKAAgRQAAgSAKgKQAJgKARAAQARAAAJAKQAKAKAAASQAAARgKAKQgJAKgRAAQgRAAgJgKgAGHg2QgDAEAAAJQAAAIADAFQAEAFAHAAQAHAAAEgFQAEgFAAgIQAAgJgEgEQgEgFgHAAQgHAAgEAFgAmFg6QgEgEAAgHQAAgHAEgEQAFgFAHAAQAHAAAFAFQAEAEAAAHQAAAHgEAEQgFAFgHAAQgHAAgFgFg");
	this.shape_1.setTransform(56.475,16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(3.7,8,215.4,17.1), null);


(lib.t21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("ADUBOQgMgIgHgNQgHgOAAgRQAAgSAHgNQAHgNAMgHQAMgIAPAAQAXAAAOARIAAhFIAZAAIAACoIgYAAIAAgRQgOATgYAAQgPABgMgIgADcAAQgJAJAAARQAAAQAJAKQAKAKAOAAQAPAAAIgKQAJgKAAgQQAAgRgJgJQgIgJgPAAQgOAAgKAJgAg9BIQgMgOAAgXIAAhCIAZAAIAAA9QAAAQAHAIQAGAIANAAQANAAAHgIQAGgJAAgOIAAg+IAZAAIAAByIgXAAIAAgSQgGAKgIAGQgKAEgMAAQgUAAgLgNgAh/BRQgEgGAAgHQAAgIAEgFQAFgFAIAAQAIAAAEAFQAFAFAAAIQAAAHgFAGQgEAEgIAAQgIAAgFgEgAi1BRQgFgGAAgHQAAgIAFgFQAEgFAIAAQAIAAAFAFQAEAFAAAIQAAAHgEAGQgFAEgIAAQgIAAgEgEgAjuBRQgFgGAAgHQAAgIAFgFQAFgFAHAAQAIAAAFAFQAEAFAAAIQAAAHgEAGQgFAEgIAAQgHAAgFgEgAknBRQgFgGAAgHQAAgIAFgFQAFgFAIAAQAHAAAFAFQAFAFAAAIQAAAHgFAGQgFAEgHAAQgIAAgFgEgACMBTIAAg+QAAgQgHgHQgGgIgNABQgNAAgHAIQgHAGAAAPIAAA/IgZAAIAAhyIAXAAIAAASQAFgKAKgFQAJgFAMAAQAUAAAMANQAMANAAAXIAABDg");
	this.shape.setTransform(33.125,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(3.1,8,60.1,17.1), null);


(lib.t13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgMANQgEgGAAgHQAAgHAEgFQAFgFAHAAQAIAAAEAFQAFAFAAAHQAAAHgFAGQgEAEgIAAQgHAAgFgEg");
	this.shape.setTransform(155.625,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AAsANQgEgGAAgHQAAgHAEgFQAFgFAIAAQAIAAAEAFQAFAFAAAHQAAAHgFAGQgEAEgIAAQgIAAgFgEgAgMANQgEgGAAgHQAAgHAEgFQAFgFAHAAQAIAAAFAFQAEAFAAAHQAAAHgEAGQgFAEgIAAQgHAAgFgEgAhEANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAIAAAFAFQAEAFAAAHQAAAHgEAGQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(144.45,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AAaA7IAAg9QABgRgHgIQgGgHgOAAQgLAAgIAIQgGAIgBAPIAAA+IgYAAIAAhyIAWAAIAAASQAGgLAKgFQAJgEALAAQAUAAAMAMQALAOAAAXIAABDg");
	this.shape_2.setTransform(129.5,18.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgYA1QgOgHgHgOQgJgOABgSQgBgRAIgNQAGgOANgHQAMgIAPAAQAQAAAMAHQANAIAGANQAIANAAARIgBAJIhSAAQACAOAKAHQAKAIAOAAQAJAAAKgDQAJgDAIgFIAGAVQgIAGgLAEQgLADgNAAQgSAAgNgHgAAdgKQgBgNgIgHQgHgHgMAAQgLAAgIAHQgIAHgCANIA5AAIAAAAg");
	this.shape_3.setTransform(116.4,19.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgLBBQgJgKAAgRIAAg4IgPAAIAAgXIAPAAIAAgcIAYgEIAAAgIAfAAIAAAXIgfAAIAAA0QAAARAQAAQAGAAAHgDIADAWQgKAEgLAAQgRAAgJgJg");
	this.shape_4.setTransform(106.075,17.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AghA6IAAhxIAXAAIAAATQAJgVAUAAQAIAAAHADIgEAYQgGgCgGAAQgNAAgGAIQgHAJAAAQIAAA5g");
	this.shape_5.setTransform(98.575,18.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgfA0QgMgIgGgNQgHgOAAgRQAAgRAHgNQAGgOAMgHQAMgIAPAAQAXAAAPAUIAAgRIAXAAIAABxIgXAAIAAgRQgPAUgXAAQgPAAgMgIgAgWgZQgJAKAAAPQAAAQAJAKQAJAKAOAAQAOAAAJgKQAIgJAAgRQAAgQgIgKQgJgJgOAAQgOAAgJAKg");
	this.shape_6.setTransform(86.275,19.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgLBBQgJgKAAgRIAAg4IgPAAIAAgXIAPAAIAAgcIAYgEIAAAgIAfAAIAAAXIgfAAIAAA0QAAARAQAAQAGAAAHgDIADAWQgKAEgLAAQgRAAgJgJg");
	this.shape_7.setTransform(75.675,17.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgqA0IAGgXQAPAIARAAQAKAAAGgDQAGgEAAgGQAAgFgFgDIgPgFIgTgHQgIgDgFgHQgGgHAAgMQAAgQALgJQAMgJATAAQAKAAAKACQAJACAIAEIgGAWQgOgHgQAAQgIAAgFADQgFADAAAFQAAAGAGADQAFADAKADIATAGQAIAEAFAFQAFAHAAALQAAASgMAJQgNAKgWAAQgWAAgQgIg");
	this.shape_8.setTransform(66.675,19.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AAaBUIAAg+QABgQgHgHQgGgHgOAAQgLAAgIAIQgGAHgBAOIAAA/IgYAAIAAinIAYAAIAABEQAGgIAJgFQAJgEAKAAQAUAAAMANQALAOAAAWIAABDg");
	this.shape_9.setTransform(55.25,16.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgSA0QgNgHgIgOQgHgNAAgSQAAgRAHgNQAIgOANgHQANgIAQAAQAKAAAJADQAKADAHAFIgHAXQgFgFgIgDQgIgCgHAAQgPAAgJAJQgJAKAAAQQAAARAJAJQAJAKAPAAQAHAAAIgDQAIgCAFgFIAHAXQgHAFgJADQgKADgKAAQgQAAgNgIg");
	this.shape_10.setTransform(43.2,19.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AghA6IAAhxIAXAAIAAATQAJgVAUAAQAIAAAHADIgEAYQgGgCgGAAQgNAAgGAIQgHAJAAAQIAAA5g");
	this.shape_11.setTransform(34.125,18.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgnAtQgMgOAAgXIAAhCIAaAAIAAA9QAAAQAGAIQAHAIAMAAQAMAAAHgIQAIgJAAgOIAAg+IAZAAIAAByIgYAAIAAgSQgGAKgJAGQgJAEgLAAQgVAAgLgNg");
	this.shape_12.setTransform(22.35,19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgfBOQgMgIgGgNQgHgOAAgRQAAgSAHgNQAGgNAMgHQAMgIAPAAQAWAAAOARIAAhFIAZAAIAACoIgXAAIAAgRQgPATgXAAQgPABgMgIgAgWAAQgJAJAAARQAAAQAJAKQAJAKAOAAQAOAAAJgKQAIgKAAgQQAAgRgIgJQgJgJgOAAQgOAAgJAJg");
	this.shape_13.setTransform(8.525,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t13, new cjs.Rectangle(0,0,160.6,33.8), null);


(lib.t12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AgLBBQgJgKAAgRIAAg4IgPAAIAAgXIAPAAIAAgcIAYgEIAAAgIAfAAIAAAXIgfAAIAAA0QAAARAQAAQAGAAAHgDIADAWQgKAEgLAAQgRAAgJgJg");
	this.shape.setTransform(147.075,17.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86200").s().p("AgPBOQgHgIAAgQIAAiKIAYAAIAACFQAAAHACADQADADAGAAQAFAAADgCIACAWQgGADgLAAQgPAAgGgHg");
	this.shape_1.setTransform(140.575,16.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F86200").s().p("AgdA0QgNgHgIgOQgHgOAAgRQAAgRAHgNQAIgOANgHQANgIAQAAQASAAAMAIQANAHAIAOQAHANAAARQAAARgHAOQgIAOgNAHQgMAIgSAAQgQAAgNgIgAgXgZQgJAKAAAPQAAAQAJAKQAJAKAOAAQAPAAAJgKQAJgKAAgQQAAgPgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_2.setTransform(130,19.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F86200").s().p("Ag+BQIAAifIBAAAQARAAAMAGQAMAEAGALQAGAJAAANQAAALgFAIQgFAJgJAGQANAEAHALQAHAJAAANQAAANgHALQgHAKgMAFQgMAGgRAAgAgjA3IArAAQANAAAHgGQAIgGAAgKQAAgKgIgHQgHgGgNAAIgrAAgAgjgMIAlAAQAMAAAHgGQAHgGAAgKQAAgIgHgGQgHgGgMAAIglAAg");
	this.shape_3.setTransform(116.275,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F86200").s().p("AAbA7IAAg9QgBgRgGgIQgHgHgNAAQgLAAgHAIQgIAIAAAPIAAA+IgZAAIAAhyIAYAAIAAASQAFgLAJgFQAKgEALAAQAUAAAMAMQAMAOAAAXIAABDg");
	this.shape_4.setTransform(96.25,18.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86200").s().p("AgLBUIAAhxIAYAAIAABxgAgLg4QgEgEAAgHQAAgHAEgFQAFgEAGAAQAGAAAGAEQAEAFAAAHQAAAGgEAFQgGAEgGAAQgGAAgFgEg");
	this.shape_5.setTransform(86.65,16.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F86200").s().p("AgfA0QgMgIgGgNQgHgOAAgRQAAgRAHgNQAGgOAMgHQAMgIAPAAQAXAAAPAUIAAgRIAXAAIAABxIgXAAIAAgRQgPAUgXAAQgPAAgMgIgAgWgZQgJAKAAAPQAAAQAJAKQAJAKAOAAQAOAAAJgKQAIgJAAgRQAAgQgIgKQgJgJgOAAQgOAAgJAKg");
	this.shape_6.setTransform(76.475,19.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F86200").s().p("AgqA0IAGgXQAPAIARAAQAKAAAGgDQAGgEAAgGQAAgFgFgDIgPgFIgTgHQgIgDgFgHQgGgHAAgMQAAgQALgJQAMgJATAAQAKAAAKACQAJACAIAEIgGAWQgOgHgQAAQgIAAgFADQgFADAAAFQAAAGAGADQAFADAKADIATAGQAIAEAFAFQAFAHAAALQAAASgMAJQgNAKgWAAQgWAAgQgIg");
	this.shape_7.setTransform(64.875,19.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F86200").s().p("AgvBAQgQgSAAggIAAheIAbAAIAABbQAAAXAJALQAJALASAAQATAAAJgLQAJgLAAgXIAAhbIAbAAIAABeQAAAggQASQgRARgfABQgdgBgSgRg");
	this.shape_8.setTransform(52,16.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F86200").s().p("AgYA1QgOgHgIgOQgHgOgBgSQABgRAGgNQAIgOAMgHQANgIAOAAQAQAAANAHQALAIAIANQAGANABARIgBAJIhSAAQACAOAKAHQAKAIANAAQAKAAAJgDQAKgDAHgFIAHAVQgIAGgLAEQgLADgOAAQgQAAgOgHgAAegKQgCgNgHgHQgIgHgMAAQgLAAgIAHQgIAHgCANIA6AAIAAAAg");
	this.shape_9.setTransform(32.4,19.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F86200").s().p("AgLBUIAAhxIAXAAIAABxgAgLg4QgEgEAAgHQAAgHAEgFQAEgEAHAAQAHAAAEAEQAFAFAAAHQAAAGgFAFQgEAEgHAAQgHAAgEgEg");
	this.shape_10.setTransform(23.35,16.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F86200").s().p("AAbA5IgbhRIgaBRIgdAAIghhxIAYAAIAYBTIAchTIAZAAIAcBTIAXhTIAZAAIghBxg");
	this.shape_11.setTransform(11.25,19.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,158.7,33.8), null);


(lib.t11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgPBOQgHgIAAgQIAAiKIAYAAIAACFQAAAHACADQADADAGAAQAFAAADgCIACAWQgGADgLAAQgPAAgGgHg");
	this.shape.setTransform(126.325,16.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgPBOQgHgIAAgQIAAiKIAYAAIAACFQAAAHACADQADADAGAAQAFAAADgCIACAWQgGADgLAAQgPAAgGgHg");
	this.shape_1.setTransform(119.775,16.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgYA1QgOgHgIgOQgIgOAAgSQAAgRAIgNQAGgOANgHQAMgIAPAAQAQAAAMAHQANAIAGANQAIANgBARIAAAJIhSAAQACAOAKAHQAJAIAPAAQAJAAAJgDQAKgDAHgFIAIAVQgJAGgLAEQgMADgMAAQgRAAgOgHgAAdgKQgBgNgIgHQgHgHgNAAQgKAAgIAHQgIAHgCANIA5AAIAAAAg");
	this.shape_2.setTransform(109.5,19.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AAaA7IAAg9QABgRgHgIQgGgHgNAAQgMAAgIAIQgGAIAAAPIAAA+IgZAAIAAhyIAWAAIAAASQAGgLAKgFQAJgEALAAQAUAAAMAMQALAOAAAXIAABDg");
	this.shape_3.setTransform(96.75,18.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AAbBUIAAg+QAAgQgHgHQgGgHgNAAQgMAAgHAIQgIAHABAOIAAA/IgaAAIAAinIAaAAIAABEQAFgIAJgFQAJgEAKAAQAUAAAMANQAMAOgBAWIAABDg");
	this.shape_4.setTransform(83.45,16.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgSA0QgNgHgIgOQgHgNAAgSQAAgRAHgNQAIgOANgHQANgIAPAAQALAAAJADQAJADAIAFIgHAXQgFgFgIgDQgHgCgJAAQgNAAgKAJQgJAKAAAQQAAARAJAJQAKAKANAAQAJAAAHgDQAIgCAFgFIAHAXQgHAFgKADQgJADgLAAQgPAAgNgIg");
	this.shape_5.setTransform(71.4,19.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgqA0IAGgXQAPAIARAAQAKAAAGgDQAGgEAAgGQAAgFgFgDIgPgFIgTgHQgIgDgFgHQgGgHAAgMQAAgQALgJQAMgJATAAQAKAAAKACQAJACAIAEIgGAWQgOgHgQAAQgIAAgFADQgFADAAAFQAAAGAGADQAFADAKADIATAGQAIAEAFAFQAFAHAAALQAAASgMAJQgNAKgWAAQgWAAgQgIg");
	this.shape_6.setTransform(60.825,19.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgLBBQgJgKAAgRIAAg4IgPAAIAAgXIAPAAIAAgcIAYgEIAAAgIAfAAIAAAXIgfAAIAAA0QAAARAQAAQAGAAAHgDIADAWQgKAEgLAAQgRAAgJgJg");
	this.shape_7.setTransform(46.475,17.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AguA5IAAgTIA5hHIg2AAIAAgXIBYAAIAAATIg5BHIA7AAIAAAXg");
	this.shape_8.setTransform(37,19.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgLBBQgJgKAAgRIAAg4IgPAAIAAgXIAPAAIAAgcIAYgEIAAAgIAfAAIAAAXIgfAAIAAA0QAAARAQAAQAGAAAHgDIADAWQgKAEgLAAQgRAAgJgJg");
	this.shape_9.setTransform(27.325,17.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgYA1QgOgHgIgOQgHgOgBgSQABgRAGgNQAIgOAMgHQANgIAOAAQAQAAANAHQALAIAIANQAGANABARIgBAJIhSAAQACAOAKAHQAKAIANAAQAKAAAJgDQAKgDAHgFIAHAVQgIAGgLAEQgLADgOAAQgQAAgOgHgAAegKQgCgNgHgHQgIgHgMAAQgLAAgIAHQgIAHgCANIA6AAIAAAAg");
	this.shape_10.setTransform(17.1,19.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AghBPIADgZQAIACAHAAQAMAAAFgGQAGgFAAgNIAAhwIAbAAIAABzQAAAXgNAMQgMALgVAAQgMAAgKgCg");
	this.shape_11.setTransform(5.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,131.1,33.8), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgYAeQgIgJAAgQIAAgrIANAAIAAApQAAAMAFAGQAGAGAIAAQAJAAAFgGQAGgGAAgLIAAgqIANAAIAABLIgMAAIAAgLQgEAGgGAEQgGADgHAAQgOAAgIgJg");
	this.shape.setTransform(80,12.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgeAmIAAgKIApg1IgnAAIAAgMIA5AAIAAAKIgpA1IArAAIAAAMg");
	this.shape_1.setTransform(72.025,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgbAiIAEgMQAJAGAMAAQAHAAAFgDQAEgDABgFQgBgFgDgCIgMgEIgMgFQgFgBgDgFQgEgFAAgHQAAgKAHgGQAHgGAMAAQAGAAAHACQAGABAEACIgCAMIgKgEIgLgBQgGAAgEADQgDACAAAFQAAAFADACIANAFIAMAEQAEABAEAFQADAEAAAHQAAALgHAGQgJAHgNAAQgPAAgKgGg");
	this.shape_2.setTransform(61.55,12.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgGA3IAAhKIANAAIAABKgAgGgoQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(56.55,10.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgZAsIAAALIgLAAIAAhvIAMAAIAAAwQALgNAOAAQALAAAIAFQAIAFAFAJQAFAIgBAMQABALgFAJQgFAJgIAFQgIAFgLAAQgPAAgLgNgAgRgBQgHAGAAANQAAAMAHAHQAGAIALAAQAKAAAIgIQAHgIAAgLQAAgNgHgGQgIgIgKAAQgLAAgGAIg");
	this.shape_4.setTransform(50.45,10.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgQAjQgJgFgFgJQgFgJAAgMQAAgLAFgJQAEgJAIgFQAIgFAKAAQAKAAAJAFQAIAFAEAIQAFAJAAALIgBAFIg5AAQABAMAIAGQAHAGAKAAQAHAAAGgDQAHgBAFgEIAEALQgGAEgHACQgIADgIAAQgLAAgJgFgAAXgGQgBgKgGgFQgGgGgKAAQgIAAgGAFQgGAGgCAKIAtAAIAAAAg");
	this.shape_5.setTransform(37.875,12.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgUAmIAAhKIAMAAIAAAMQAHgOANAAQAFAAAEACIgCAMIgHAAQgKAAgEAFQgEAGAAALIAAAog");
	this.shape_6.setTransform(31.4,12.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgTAiQgIgFgFgIQgEgJAAgMQAAgKAEgKQAFgJAIgFQAIgEAKAAQAHAAAHADQAHADAFAHIAAgMIAMAAIAABLIgMAAIAAgMQgFAHgHADQgHAEgHAAQgKgBgIgFgAgRgTQgGAIAAALQAAAMAGAIQAHAIAKgBQALABAHgIQAGgIAAgMQAAgMgGgHQgHgIgLAAQgKAAgHAIg");
	this.shape_7.setTransform(23.325,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgkA1IAAhnIALAAIAAAMQALgOAPAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAALgEAIQgFAJgIAFQgIAFgLAAQgOAAgLgMIAAAngAgRggQgGAHgBANQABAMAGAHQAHAHAKAAQALAAAHgHQAGgHABgMQgBgMgGgIQgHgIgLAAQgKAAgHAIg");
	this.shape_8.setTransform(14.7,13.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgjAwIADgNQANAHAPAAQAMAAAHgFQAIgFAAgHQAAgFgEgEQgDgDgFgCIgMgFIgRgGQgHgDgFgGQgEgGAAgKQAAgNAJgIQAKgIAQAAQAIAAAJACQAIABAGAEIgEANQgGgDgHgCQgHgCgHAAQgKAAgGAEQgGAFAAAHQAAAFAEAEIAIAGIANAFIARAFQAGAEAFAFQAEAGAAAJQAAAOgLAJQgLAIgRAAQgTAAgNgHg");
	this.shape_9.setTransform(5.475,10.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,85.4,21.9), null);


(lib.mc_shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shadow1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_shadow, new cjs.Rectangle(0,0,288,15), null);


(lib.mc_rect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AuDSwMAAAglfIcHAAMAAAAlfg");
	this.shape.setTransform(90,119.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect, new cjs.Rectangle(0,0,180,240), null);


(lib.mc_phone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D386F").s().p("ABhEZQgZgJgrgdQhIgyhGhNQhchjg1h7QgNggAFghQAFgiAWgbIArgtQALgNARAAQAQAAALANIBhBoQALAMAAARQgBAQgLAMIglAnICZCoIAjgoQALgNAQAAQARAAALANIBgBoQALANAAAQQAAAQgLANIgqAuQgfAggtAAQgYAAgSgKg");
	this.shape.setTransform(-0.0347,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_phone, new cjs.Rectangle(-13.4,-14.5,26.8,29.1), null);


(lib.mc_number = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AggAvQABgLAFgIQAEgJAFgFIANgKIAMgJQADgFAAgGQAAgFgEgEQgEgDgHAAQgFAAgGACQgEACgFADIgFgQQAGgFAGgCQAHgCAIAAQAIAAAIADQAIAEAEAHQAEAHAAAJQAAAIgDAGQgEAFgEAEIgMAJIgIAHIgGAGIAoAAIAAASg");
	this.shape.setTransform(47.2,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86200").s().p("AgfAvQABgLAEgIQAEgJAFgFIANgKIALgJQAEgFAAgGQAAgFgEgEQgEgDgHAAQgFAAgFACQgFACgEADIgGgQQAGgFAGgCQAHgCAHAAQAJAAAIADQAIAEAEAHQAEAHAAAJQAAAIgDAGQgDAFgFAEIgMAJIgJAHIgFAGIAnAAIAAASg");
	this.shape_1.setTransform(39.7,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F86200").s().p("AAGAvIAAgTIgoAAIAAgRIAeg5IAdAAIAAA5IAKAAIAAARIgKAAIAAATgAgPALIAVAAIAAgpg");
	this.shape_2.setTransform(32.425,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F86200").s().p("AgaAvIAghLIgnAAIAAgSIBEAAIgqBdg");
	this.shape_3.setTransform(21.8,-0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F86200").s().p("AgbAvIAhhLIgnAAIAAgSIBDAAIgpBdg");
	this.shape_4.setTransform(14.3,-0.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86200").s().p("AgbAvIAihLIgpAAIAAgSIBFAAIgqBdg");
	this.shape_5.setTransform(6.8,-0.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F86200").s().p("AgdAqIADgSQAIAHANAAQAHAAAFgDQAFgDAAgGQAAgFgFgDQgFgDgHAAIgHAAIAAgQIAHAAQAGAAAEgDQAEgDgBgFQABgFgEgCQgEgDgFAAQgGAAgEABQgGACgDADIgEgRQAGgDAFgCQAHgCAHAAQAIAAAHADQAHADAEAGQAEAGgBAIQAAAPgLAGQAIACADAFQAEAGAAAHQAAAJgFAGQgEAHgIADQgIADgKAAQgPAAgKgGg");
	this.shape_6.setTransform(-4.25,-0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F86200").s().p("AAGAvIAAgTIgoAAIAAgRIAeg5IAdAAIAAA5IAKAAIAAARIgKAAIAAATgAgPALIAVAAIAAgpg");
	this.shape_7.setTransform(-11.375,-0.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F86200").s().p("AgaAvIAAgSIAUAAIAAgyIgSAHIgFgRIAogPIABAAIAABLIARAAIAAASg");
	this.shape_8.setTransform(-18.7,-0.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F86200").s().p("AgdA7IAqh1IARAAIgqB1g");
	this.shape_9.setTransform(-25.775,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F86200").s().p("AgTAvIAWgfIgDABQgJAAgIgFQgHgDgEgIQgFgGAAgJQAAgKAFgHQAEgIAIgEQAHgDAJAAQAKAAAIADQAHAEAEAIQAEAHABAKQgBAIgEAJQgDAJgHAKQgGALgMAOgAgJgZQgFAEAAAHQAAAGAFAEQAEAEAFAAQAHAAADgEQAEgEAAgGQAAgHgEgEQgDgDgHAAQgFAAgEADg");
	this.shape_10.setTransform(-32.55,-0.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F86200").s().p("AgXApQgJgIAAgNQAAgIADgFQAEgGAHgCQgFgEgDgFQgCgFAAgGQAAgMAHgHQAIgHANAAQAOAAAHAHQAIAHAAAMQAAAGgDAFQgCAFgFAEQAHACADAGQAEAFAAAIQAAANgJAIQgJAHgPAAQgOAAgJgHgAgJAJQgEAEAAAFQAAAGAEADQADAEAGAAQAGAAAEgEQAEgDAAgGQAAgFgEgEQgEgDgGAAQgGAAgDADgAgHgbQgDADAAAFQAAAEADADQADADAEAAQAFAAADgDQADgDAAgEQAAgFgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_11.setTransform(-40.025,-0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F86200").s().p("AgRArQgIgGgDgLQgEgLgBgPQABgOAEgLQADgKAIgGQAHgGAKAAQAKAAAIAGQAHAGAEAKQAFALAAAOQAAAPgFALQgEALgHAGQgIAFgKAAQgKAAgHgFgAgKgVQgDAIAAANQAAAPADAIQAEAIAGAAQAHAAAEgIQADgIABgPQgBgNgDgIQgEgIgHAAQgGAAgEAIg");
	this.shape_12.setTransform(-47.55,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_number, new cjs.Rectangle(-53.3,-10.7,106.69999999999999,21.4), null);


(lib.mc_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D386F").s().p("AjAC+QhNhMAAhyQAAhxBNhMQBNhLBzgBQB0ABBNBLQBNBNAABwQAAByhNBMQhNBMh0gBQhzABhNhMgAigifQg/BAAABfQAABhA/A/QBAA/BgAAQBhAABAg/QA/g/AAhhQAAhgg/g+QhAhAhhAAQhgAAhAA/gABJCVIAAkDIAuAAQARAAAHAHQAIAIAAARIAADjgAgmCVIAAkMQAAgOgEgFQgDgDgMAAIgEAAIAAghIBEAAQASAAAHAHQAHAGAAASIAAEkgAiWCVIAAjjQAAgRAIgIQAHgHARAAIAuAAIAAEDg");
	this.shape.setTransform(190.575,26.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D386F").s().p("AhnCCIAAg2IBuiYIg6AAQgTAAAAASIAAAEIgfAAIAAgvQAAgcAcAAICsAAIAAA2IhtCWIBxAAIAAA3g");
	this.shape_1.setTransform(140.95,29.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D386F").s().p("AAtCDIAAijQAAgTgEgHQgEgHgNAAQgaABgSAVIAACuIhSAAIAAjRQABgTgUAAIgFAAIAAgeIBOAAQAZAAABAZIAAAKQAWgVASgIQAUgJAYAAQAdgCAUAUQAJALAEANQADANAAAfIAACvg");
	this.shape_2.setTransform(114.2,28.9864);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D386F").s().p("Ah6A8QAAg6AxgSQANgGASgEQAZgGAmgGIAAgFQgBgRgGgHQgHgHgPAAQgtACglASIgSgxQAbgOAdgHQAfgHAfgBQAyAAAUAUQAUAUAAAxIAAB7QAAAMAEAFQAFAFALAAIADAAIAAAcIhLAAQgDABgDgBQgJgBgFgHQgGgHABgJIAAgEQgPAOgTAJQgVAIgYAAQhCAAAAhJgAgYATQgMAEgEAHQgDAIAAAOQgBAPAFAGQAEAGAMAAQAagDASgUIAAgyQgVADgYAKg");
	this.shape_3.setTransform(87.85,29.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D386F").s().p("AgdCwIAAjRQAAgUgUAAIgEAAIAAgdIBTAAQAKABAGAHQAIAIgBAKIAADogAgbhuQgNgKAAgRQAAgSANgKQANgKAVAAQAWAAANAKQAMAKAAASQAAARgMAKQgNAKgWAAQgVAAgNgKg");
	this.shape_4.setTransform(66.55,24.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D386F").s().p("AgcCtIAAkoQAAgTgUAAIgFAAIAAgeIBQAAIAFAAQAKABAGAIQAHAIgBAKIAAE+g");
	this.shape_5.setTransform(52.1317,24.8125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D386F").s().p("AgcCtIAAkoQAAgKgFgEQgEgFgLAAIgFAAIAAgeIBQAAIAFAAQAKABAGAIQAHAIgBAKIAAE+g");
	this.shape_6.setTransform(38.0817,24.8125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D386F").s().p("ABHCtIgYhUIhjAAIgZBUIhWAAIBdkPQAFgMACgQQAAgQgWAAIgLAAIAAgeICDAAQANgBALAIQAKAIADANIBcE9gAAjAhIgjh+IgnB+IBKAAg");
	this.shape_7.setTransform(16.375,24.8132);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D386F").s().p("AIFCdQgSgWAAgsIAAh6IglAAIAAg1IApAAIAMhXIA/AAIAABXIA8AAIAAA3Ig8AAIAABuQAAAUAGAHQAHAIAPAAQALAAAPgCIAAA0IgOAFQgWAGgaABQgkAAgRgVgAEVCOQghgjABg9QAAg7AhglQAigmA3AAQArgBAhAcIgNAzQgTgVgeAAQg1AAAABOQAABLAzAAQAegBAXgSIALAwQgLAJgIAEQgcAOghAAQg2AAgggkgAAUCPQgfgjgBg8QAAg9AhgmQAigmA3AAQBsAAAACLIAAAPIiXAAQACAeAOAOQAPAOAfAAQAlAAAegVIAOAwIgVANQglAPgoAAQg7AAghgjgABEARIBIAAIAAgCQAAgzghAAQgmAAgBA1gAi7CuIAAkCIBLAAIAAAiIAEAAQAYgkAgAAQANAAALAEIAABIQgRgGgQAAQgbgBgTASIAACtgAlACuIAAkCIBQAAIAAECgAp9CuIAAlZIByAAQAjAAAWAFQAWAFASAMQAeAUASAoQAQAoAAAzQAABHgiArQgRAXgYANQgVAMgXAFQgWAFgkAAgAorBxIAaAAQAoAAAVgcQAUgcAAg2QAAg9gXgdQgQgXgmAAIgeAAgAk8hwQgNgKAAgRQAAgSANgKQANgKAWAAQAWAAAMAKQANAKAAARQAAASgMAKQgMAKgXAAQgWAAgNgKg");
	this.shape_8.setTransform(294.15,24.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(0,0,358,53.1), null);


(lib.mc_Hammer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96DCFA").s().p("AuDSwMAAAglfIcHAAMAAAAlfg");
	this.shape.setTransform(90,119.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_Hammer, new cjs.Rectangle(0,0,180,240), null);


(lib.mc_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.car();
	this.instance.setTransform(-110,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_car, new cjs.Rectangle(-110,-69,220,137), null);


(lib.mc_bolimg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.boltend();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bolimg, new cjs.Rectangle(0,0,342,295), null);


(lib.mc_bd2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bolt_drive2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bd2, new cjs.Rectangle(0,0,316,326), null);


(lib.mc_bd1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bolt_drive1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bd1, new cjs.Rectangle(0,0,314,324), null);


(lib.gr_line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzhCWIDIkrMAj7AAAIjIErg");
	this.shape.setTransform(62.5,7.5,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzhCWIDIkrMAj7AAAIjIErg");
	this.shape_1.setTransform(342.475,7.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AzhCWIDIkrMAj7AAAIjIErg");
	this.shape_2.setTransform(202.4875,7.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405,15);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AAAAoIgqBJIgxgjIA4hBIhTgRIATg5IBOAhIgIhUIA8AAIgJBUIBPghIASA5IhTARIA4BBIgxAjg");
	this.shape.setTransform(130.625,20.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AAyDBQgagbAAguQAAgvAagaQAZgbAuAAQAsAAAaAbQAaAbgBAuQAAAugaAbQgaAagrAAQguAAgZgagABbBVQgJAMgBAXQABAWAJANQAKAMAUAAQASAAAKgMQAKgNAAgWQAAgXgKgMQgKgNgSAAQgUAAgKANgAjKDWIFKmqIBMAAIlLGqgAi+guQgagbAAguQABguAZgaQAagbAtAAQAtAAAaAbQAaAaAAAuQAAAugaAbQgaAbgtAAQgsAAgbgbgAiTiaQgKANAAAWQAAAXAKAMQAJANATAAQATAAAJgNQALgMAAgXQAAgWgLgNQgJgMgTAAQgTAAgJAMg");
	this.shape_1.setTransform(93.75,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AhPDCQgigbgTgyQgTgyAAhDQAAhCATgyQATgzAigbQAigaAtAAQAuAAAjAaQAiAbASAzQATAyAABCQAABDgTAyQgSAygiAbQgjAbguAAQgtAAgigbgAg6hvQgVApAABGQAABIAVApQAWApAkAAQAmAAAVgpQAVgpAAhIQAAhGgVgpQgVgpgmgBQgkABgWApg");
	this.shape_2.setTransform(53.025,30.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AiOCwIAahBQArAnA5AAQAoAAAYgVQAYgVAAgkQAAgjgXgTQgWgSgqAAQgmAAggARIgugPIAejaIDWAAIAABEIiYAAIgOBeQAXgHAcAAQAqAAAiARQAhARASAdQASAgAAAoQAAAqgTAhQgUAggkASQgkASgtAAQhMAAg1gpg");
	this.shape_3.setTransform(18.375,30.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.4,-11,146.6,83.5), null);


(lib.ctaText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAwQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgDgDgAgFATIgDhFIAQAAIgCBFg");
	this.shape.setTransform(93.4,11.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAoQgGgFAAgMIAAgiIgKAAIAAgOIAKAAIAAgRIAOgEIAAAVIAUAAIAAAOIgUAAIAAAhQAAAKAKAAIAIgBIACANQgFADgIAAQgJgBgGgGg");
	this.shape_1.setTransform(88.95,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAhQgIgFgFgJQgEgIAAgLQAAgKAEgJQAFgIAIgFQAJgEAJAAQALAAAIAEQAIAFAFAIQAEAJAAAKQAAALgEAIQgFAJgIAFQgIAEgLAAQgJAAgJgEgAgOgPQgGAGAAAJQAAAKAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgKQAAgJgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_2.setTransform(82.375,12.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUApIAAALIgPAAIAAhpIAQAAIAAArQAJgKANAAQAKAAAHAEQAHAFAFAJQAEAHAAALQAAALgEAIQgFAJgHAFQgHAFgKgBQgOAAgJgMgAgOAAQgFAGAAAKQAAAKAFAHQAGAGAIAAQAJAAAFgGQAGgHAAgKQAAgKgGgGQgFgGgJABQgIAAgGAFg");
	this.shape_3.setTransform(74.175,11.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAhQgIgFgFgIQgFgJAAgLQAAgKAFgJQAEgIAIgFQAHgEAJAAQAKAAAIAEQAHAFAFAIQAEAIAAALIAAAFIgzAAQACAJAGAEQAFAFAJAAQAFAAAHgCQAGgBAFgEIADAOQgEADgIACQgHACgIAAQgKAAgJgEgAASgGQgBgIgEgEQgFgFgIAAQgGAAgFAFQgEAEgCAIIAjAAIAAAAg");
	this.shape_4.setTransform(65.65,12.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfArIAFgNQAFADAGABQAGACAGAAQALAAAGgGQAGgFAAgLIAAgEQgJALgNAAQgJAAgIgEQgHgFgEgIQgFgHAAgLQAAgKAFgIQAEgIAHgFQAIgEAJAAQAOAAAJAMIAAgLIAPAAIAAA/QAAARgKAJQgKAJgSAAQgQAAgNgHgAgNgdQgGAGAAAJQAAAKAGAFQAFAGAIAAQAJAAAGgGQAFgFAAgKQAAgJgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_5.setTransform(57.175,13.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAlIAAgnQAAgKgEgEQgEgFgIAAQgHAAgFAFQgEAFAAAJIAAAnIgQAAIAAhHIAPAAIAAALQADgGAGgDQAGgDAGgBQANABAHAHQAHAJAAAPIAAApg");
	this.shape_6.setTransform(49.025,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgAyIgKgaIgrAAIgJAaIgSAAIAnhjIASAAIAoBjgAAPAIIgPgnIgOAnIAdAAg");
	this.shape_7.setTransform(39.95,11.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlAlIAAgoQAAgSgOAAQgHAAgEAFQgEAEAAAIIAAApIgOAAIAAgoQAAgJgFgEQgDgFgHAAQgHAAgEAFQgEAEAAAIIAAApIgPAAIAAhHIAOAAIAAAKQAEgGAFgDQAFgDAHAAQAIABAEADQAFADADAGQAEgGAGgDQAFgDAIgBQAMABAHAHQAHAJgBAOIAAAqg");
	this.shape_8.setTransform(25.65,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAcQgHgIAAgPIAAgpIAQAAIAAAmQAAAKAEAFQAEAFAHAAQAIAAAEgGQAFgEAAgKIAAgmIAPAAIAABHIgOAAIAAgLQgEAHgGADQgGACgGAAQgNAAgHgIg");
	this.shape_9.setTransform(15.175,12.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAyIAAgNIA1hGIg0AAIAAgQIBKAAIAAANIg1BGIA4AAIAAAQg");
	this.shape_10.setTransform(6.55,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaText, new cjs.Rectangle(0,0,97.5,22.7), null);


(lib.ctaBackB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AiLCgQgUAAAAgUIAAkXQAAgUAUAAIEXAAQAUAAAAAUIAAEXQAAAUgUAAg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBackB, new cjs.Rectangle(0,0,32,32), null);


(lib.ctaBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("ArACgQgUAAAAgUIAAkXQAAgUAUAAIWBAAQAUAAAAAUIAAEXQAAAUgUAAg");
	this.shape.setTransform(72.5,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBack, new cjs.Rectangle(0,0,145,32), null);


(lib.circle_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86200").s().p("AtQNQQlflfAAnxQAAnwFflgQFglfHwAAQHxAAFfFfQFgFgAAHwQAAHxlgFfQlfFgnxAAQnwAAlglgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_yellow, new cjs.Rectangle(-120,-120,240,240), null);


(lib.circle_white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96DCFA").s().p("EgmrAmpQwAwAAA2pQAA2oQAwDQQDwAWoAAQWpAAQAQAQQDQDAAWoQAAWpwDQAQwAQD2pAAQ2oAAwDwDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_white, new cjs.Rectangle(-350,-350,700,700), null);


(lib.arr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABAIAqgqIipAAIAAgsICpAAIgqgpIAgggIBgBfIhgBfg");
	this.shape.setTransform(6.3875,4.775,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arr, new cjs.Rectangle(0,0,12.8,9.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(28.95,20.85,0.5,0.5,0,0,0,57.9,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.2,-0.8,73.3,41.8), null);


(lib.sticker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.st2 = new lib.Symbol1();
	this.st2.name = "st2";
	this.st2.setTransform(-6.05,13.05,1,1,0,0,0,29.9,20.6);

	this.st1 = new lib.Symbol2();
	this.st1.name = "st1";
	this.st1.setTransform(0.1,-13.9,1,1,0,0,0,42.7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.st1},{t:this.st2}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVH7QhjgqhMhMQhMhMgqhjQgrhmAAhwQAAhvArhmQAqhjBMhMQBMhMBjgqQBmgrBvAAQBwAABmArQBjAqBMBMQBMBMAqBjQArBmAABvQAABwgrBmQgqBjhMBMQhMBMhjAqQhmArhwAAQhvAAhmgrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticker, new cjs.Rectangle(-55,-55,110,110), null);


(lib.mc_txt3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.t31 = new lib.t31();
	this.t31.name = "t31";
	this.t31.setTransform(0,70);

	this.t32 = new lib.t32();
	this.t32.name = "t32";
	this.t32.setTransform(0,34,1,1,0,0,0,0,0.5);

	this.t33 = new lib.t33();
	this.t33.name = "t33";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t33},{t:this.t32},{t:this.t31}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_txt3, new cjs.Rectangle(2.2,10.7,244.9,95), null);


(lib.mc_txt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.t24 = new lib.t24();
	this.t24.name = "t24";
	this.t24.setTransform(0,70);

	this.t23 = new lib.t23();
	this.t23.name = "t23";
	this.t23.setTransform(0,47);

	this.t22 = new lib.t22();
	this.t22.name = "t22";
	this.t22.setTransform(0,24,1,1,0,0,0,0,0.5);

	this.t21 = new lib.t21();
	this.t21.name = "t21";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t21},{t:this.t22},{t:this.t23},{t:this.t24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_txt2, new cjs.Rectangle(2.6,8,216.5,91), null);


(lib.mc_txt1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.t13 = new lib.t13();
	this.t13.name = "t13";
	this.t13.setTransform(0,47);

	this.t12 = new lib.t12();
	this.t12.name = "t12";
	this.t12.setTransform(0,24,1,1,0,0,0,0,0.5);

	this.t11 = new lib.t11();
	this.t11.name = "t11";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t11},{t:this.t12},{t:this.t13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_txt1, new cjs.Rectangle(0,0,160.6,80.8), null);


(lib.mc_rects = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_rect();
	this.instance.setTransform(0.05,0,0.0833,1,0,0,0,0.6,0);

	this.instance_1 = new lib.mc_rect();
	this.instance_1.setTransform(30.05,0,0.0833,1,0,0,0,0.6,0);

	this.instance_2 = new lib.mc_rect();
	this.instance_2.setTransform(59.95,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rects, new cjs.Rectangle(0,0,240,240), null);


(lib.mc_line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gr_line("synched",0);
	this.instance.setTransform(1260,0);

	this.instance_1 = new lib.gr_line("synched",0);
	this.instance_1.setTransform(840,0);

	this.instance_2 = new lib.gr_line("synched",0);
	this.instance_2.setTransform(420,0);

	this.instance_3 = new lib.gr_line("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_line, new cjs.Rectangle(0,0,1665,15), null);


(lib.mc_boltend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.phone = new lib.mc_phone();
	this.phone.name = "phone";
	this.phone.setTransform(255.95,94);

	this.num = new lib.mc_number();
	this.num.name = "num";
	this.num.setTransform(254.5,119.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.num},{t:this.phone}]}).wait(1));

	// Layer_1
	this.bolimg = new lib.mc_bolimg();
	this.bolimg.name = "bolimg";
	this.bolimg.setTransform(171,147.2,1,1,0,0,0,171,147.2);

	this.timeline.addTween(cjs.Tween.get(this.bolimg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_boltend, new cjs.Rectangle(0,0,342,295), null);


(lib.mc_bolt_drive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// drive2
	this.drive2 = new lib.mc_bd2();
	this.drive2.name = "drive2";
	this.drive2.setTransform(162,165,1,1,0,0,0,158,163);
	this.drive2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.drive2).wait(1));

	// drive1
	this.drive1 = new lib.mc_bd1();
	this.drive1.name = "drive1";
	this.drive1.setTransform(157,162,1,1,0,0,0,157,162);

	this.timeline.addTween(cjs.Tween.get(this.drive1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bolt_drive, new cjs.Rectangle(0,0,330,328), null);


(lib.ctaB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ctaMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiLCgQgUAAAAgUIAAkXQAAgUAUAAIEXAAQAUAAAAAUIAAEXQAAAUgUAAg");
	mask.setTransform(16,16);

	// aLeft
	this.aLeft = new lib.arr();
	this.aLeft.name = "aLeft";
	this.aLeft.setTransform(-20,12);

	var maskedShapeInstanceList = [this.aLeft];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.aLeft).wait(1));

	// aRigth
	this.aRight = new lib.arr();
	this.aRight.name = "aRight";
	this.aRight.setTransform(9,12);

	var maskedShapeInstanceList = [this.aRight];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.aRight).wait(1));

	// ctaBack
	this.ctaBackB = new lib.ctaBackB();
	this.ctaBackB.name = "ctaBackB";

	var maskedShapeInstanceList = [this.ctaBackB];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaBackB).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaB, new cjs.Rectangle(0,0,32,32), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ctaMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArFCgQgPAAAAgUIAAkXQAAgUAPAAIWLAAQAPAAAAAUIAAEXQAAAUgPAAg");
	mask.setTransform(72.5,16);

	// aLeft
	this.aLeft = new lib.arr();
	this.aLeft.name = "aLeft";
	this.aLeft.setTransform(-20,12);

	var maskedShapeInstanceList = [this.aLeft];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.aLeft).wait(1));

	// aRigth
	this.aRight = new lib.arr();
	this.aRight.name = "aRight";
	this.aRight.setTransform(9,12);

	var maskedShapeInstanceList = [this.aRight];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.aRight).wait(1));

	// ctaText
	this.ctaText = new lib.ctaText();
	this.ctaText.name = "ctaText";
	this.ctaText.setTransform(-103.5,5);

	var maskedShapeInstanceList = [this.ctaText];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaText).wait(1));

	// ctaBack
	this.ctaBack = new lib.ctaBack();
	this.ctaBack.name = "ctaBack";
	this.ctaBack.setTransform(-112.5,0);

	var maskedShapeInstanceList = [this.ctaBack];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ctaBack).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,32.5,32), null);


(lib.mc_circleend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// msk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsHWlIrUAAMAAAgxhMAu3AAAMAAAAxhIrfAAQlHEYm6AAQm7AAlIkYg");
	mask.setTransform(8,-60.5);

	// bolt
	this.boltphone = new lib.mc_boltend();
	this.boltphone.name = "boltphone";
	this.boltphone.setTransform(-168,-182.5);

	var maskedShapeInstanceList = [this.boltphone];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.boltphone).wait(1));

	// lines
	this.l2 = new lib.mc_Hammer();
	this.l2.name = "l2";
	this.l2.setTransform(-66.95,-130.95,0.0833,1,0,0,0,0.6,0);

	this.l1 = new lib.mc_Hammer();
	this.l1.name = "l1";
	this.l1.setTransform(-96.95,-130.95,0.0833,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2}]}).wait(1));

	// circle_yellow
	this.circ = new lib.circle_yellow();
	this.circ.name = "circ";
	this.circ.setTransform(7.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.circ).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_circleend, new cjs.Rectangle(-259,-182.5,417,294.5), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
		var self = this,
			cacheScale = Math.max(window.devicePixelRatio, 1),
			WIDTH = lib.properties.width,
			HEIGHT = lib.properties.height,
			animContDiv = document.getElementById("animation_container"),
			tl = gsap.timeline( { onComplete: adFinished, paused: true } ),
			AD_FINISHED = false;
		
		cacheScale *= 1.5;
		animContDiv.addEventListener("mouseover", doRollOver, false);
		animContDiv.addEventListener("mouseout", doRollOut, false);
		//var click_btn = animContDiv.addEventListener("click", doClick, false);
		
		/*var frequency=60;
		stage.enableMouseOver(frequency);*/
		var _overed = false;
		
		var mc_array = [self.line, self.rects, self.shadow, self.bd, self.txt1, self.txt2];
		
		//var clickT = window.clickTag;
		
		
		function animateInCreative_GSAP_TIMELINE() {
		
			gsap.defaults({
			  ease: "elastic(1.1, 0.9)", 
			  duration: 0.6
			});
				
			//tl.set([self.txt.t2, self.txt.t3, self.txt.t4, self.txt.t5], {x:200, scaleX:0});
					
			var d = 0.3;
					
			/////frame_1
			tl.to(self.line, {duration:0.5, x:-1260, ease:"expo.out"}, d);
			tl.from([self.bd, self.shadow], {duration:1.0, x:"+=350", ease:"expo.out"}, d);
			tl.from(self.txt1.children, {duration:1.0, x:"-=350", ease:"expo.out", stagger:0.1}, d);
			tl.from(self.rects.children, {duration:1.0, x:"-=350", ease:"expo.out", stagger:0.1}, d);
			d += 0.25;
			tl.to(self.line, {duration:6.5, x:360, ease:"none"}, d);
			d += 0.25;
			//tl.to(self.cta, {duration:1.0, x:-125, ease:"expo.out"}, d);
			tl.to([self.cta, self.ctaB], {x:30}, d);
			tl.from(self.logo, {duration:0.5, x:310, ease:"expo.out"}, d);
			//d += 1.0;
			tl.to(self.bd, {duration:0.3, y:"-=10", ease:"sine.inOut", repeat:30, yoyo:true}, d);//repeatDelay:0.4,
			tl.to(self.shadow, {duration:0.2, scale:1.5, ease:"sine.inOut", repeat:30, yoyo:true}, d);
			d += 2.0;
			tl.to(self.txt1, {duration:0.5, x:"+=350", ease:"expo.in"}, d);
			d += 0.3;
			tl.from(self.award,1, {scale:0.75, alpha:0}, d);
			tl.from([self.award.st1, self.award.st2], 1,{scaleY:0, ease:"circ", stagger:0.2}, d+0.1);
			tl.from(self.txt2.children, {duration:1.0, x:"-=350", ease:"expo.out", stagger:0.1}, d);
		
			tl.to(self.bd.drive1, {duration:0.0, alpha:0}, d);
			tl.to(self.bd.drive2, {duration:0.0, alpha:1}, d);
			d += 2.0;
			tl.to(self.bd.drive1, {duration:0.0, alpha:1}, d);
			tl.to(self.bd.drive2, {duration:0.0, alpha:0}, d);
			d += 0.25;
			tl.to(self.txt2, {duration:1.0, x:"+=350", ease:"expo.in"}, d);
			tl.to([self.bd, self.shadow], {duration:1.0, x:"-=350", ease:"expo.in"}, d);
			tl.to(self.rects.children, {duration:1.0, x:"+=350", ease:"expo.in", stagger:0.1}, d);
		    tl.to(self.award, 1,{x:"+=350", ease:"expo.in"}, d);
			d += 1.0;
			tl.from(self.txt3.children, {duration:1.0, x:"-=350", ease:"expo.out", stagger:0.1}, d);
			d += 0.25;
		    
			tl.from(self.circleW, {duration:1.0, scale:0, ease:"sine.inOut"}, d);
			d += 0.25;
			tl.from(self.circleY.circ, {duration:0.75, scale:0, ease:"sine.inOut"}, d);
			d += 0.25;
			tl.from(self.circleY.l1, {duration:1.0, scaleX:1, x:"+=280", ease:"power4.out"}, d);
			tl.from(self.circleY.l2, {duration:1.0, scaleX:1, x:"+=280", ease:"power4.out"}, d+0.2);
			d += 0.25;
			tl.from(self.circleY.boltphone, {duration:1.0, y:"+=300", ease:"power4.out"}, d);
			d += 0.3;
			tl.from(self.car, {duration:1.0, x:90, y:365, scale:0, ease:"sine.inOut"}, d);
			tl.from([self.circleY.boltphone.phone, self.circleY.boltphone.num], {duration:0.5, alpha:0, scale:0, ease:"sine.inOut", stagger:0.1}, d);
			d += 0.6;
			//tl.from(self.award, {duration:1.0, x:310, ease:"expo.out"}, d);
			tl.set(self.cta, {y:480}, d);
			tl.set(self.ctaB, {y:680}, d);
			d += 0.5;
			//tl.to(self.cta, {duration:1.0, x:30, ease:"sine.inOut"}, d);
			tl.to(self.cta.ctaBack,  {duration:0.6, x:0, ease:"expo"}, d);
			tl.fromTo(self.cta.aRight,  {x:9}, {duration:0.7, x:120, ease:"expo"}, d);
			tl.fromTo(self.cta.ctaText, {x:-150}, {duration:0.8, x:10, ease:"expo"}, d);
			tl.fromTo(self.cta.aLeft, {x:-20}, {duration:0.3, x:-20, ease:"expo"}, d);
			d += 0.5;
			//tl.from(self.txt4.children, {duration:1.0, x:"-=350", ease:"expo.out", stagger:0.1}, d);
			d += 1.0;
			//tl.to(self.circleY.num, {duration:0.1, rotation:-5, ease:"sine.inOut"}, d);
			d += 0.1;
			tl.to(self.circleY.boltphone.phone, {duration:0.1, rotation:-10, ease:"sine.inOut", repeat:11, yoyo:true}, d);
			//d += 1.2;
			//tl.to(self.circleY.num, {duration:0.1, rotation:0, ease:"sine.inOut"}, d);
			//tl.to(self.circleY.num.children, {duration:0.5, scale:1.2, repeat:1, yoyo:true, ease:"sine.inOut", stagger:0.1}, d);
			//tl.to(self.line, {duration:1, x:360, ease:"expo.in"}, d);
		
			gsap.delayedCall(d, hide, [mc_array]);
		
			//console.log(d)
			//tl.time(6);
			//////CTA clickTag onMouseOver		
		
			function hide(mc_array) {
				//console.log(mc_array)
				for (i=0; i < mc_array.length; i++) {
					mc_array[i].visible = false;
				}
			}
		
			tl.play();
		}
		
		addBorder();
		
		function addBorder() {
			var ff = "#707070";
			var brd_t = new cjs.Shape();
			brd_t.graphics.beginFill(ff).drawRect(-10, 0, WIDTH + 20, 1);
			var brd_tr = new cjs.Shape();
			brd_tr.graphics.beginFill(ff).drawRect(WIDTH - 1, -10, 1, HEIGHT + 20);
			var brd_b = new cjs.Shape();
			brd_b.graphics.beginFill(ff).drawRect(-10, HEIGHT - 1, WIDTH + 20, 1);
			var brd_tl = new cjs.Shape();
			brd_tl.graphics.beginFill(ff).drawRect(0, -10, 1, HEIGHT + 20);
			self.addChild(brd_t, brd_tr, brd_b, brd_tl);
		}	
		
		/*var cacheScale = window.devicePixelRatio;
		if (cacheScale < 1) {
			cacheScale = 1.0;
		}*/
		self.cta.ctaText.cache(0, 0, 150, 23, cacheScale);
		self.cta.ctaBack.cache(0, 0, 190, 32, cacheScale);
		self.cta.aRight.cache(0, 0, 13, 10, cacheScale);
		self.cta.aLeft.cache(0, 0, 13, 10, cacheScale);
		
		self.ctaB.ctaBackB.cache(0, 0, 32, 32, cacheScale);
		self.ctaB.aRight.cache(0, 0, 13, 10, cacheScale);
		self.ctaB.aLeft.cache(0, 0, 13, 10, cacheScale);
		
		self.bd.drive1.cache(0, 0, 320, 328, cacheScale);
		self.bd.drive2.cache(0, 0, 320, 328, cacheScale);
		//self.award.cache(0, 0, 200, 342, cacheScale);
		self.car.cache(-110, -70, 220, 140, cacheScale);
		self.circleY.boltphone.bolimg.cache(0, 0, 350, 300, cacheScale);
		self.txt1.t11.cache(0, 0, 200, 40, cacheScale);
		self.txt1.t12.cache(0, 0, 200, 40, cacheScale);
		self.txt1.t13.cache(0, 0, 200, 40, cacheScale);
		self.txt2.t21.cache(0, 0, 300, 40, cacheScale);
		self.txt2.t22.cache(0, 0, 300, 40, cacheScale);
		self.txt2.t23.cache(0, 0, 300, 40, cacheScale);
		self.txt2.t24.cache(0, 0, 300, 40, cacheScale);
		self.txt3.t31.cache(0, 0, 250, 50, cacheScale);
		self.txt3.t32.cache(0, 0, 250, 50, cacheScale);
		self.txt3.t33.cache(0, 0, 250, 50, cacheScale);
		//self.txt4.t41.cache(0, 0, 200, 30, cacheScale);
		//self.txt4.t42.cache(0, 0, 200, 30, cacheScale);
		self.award.st1.cache(0, 0, 100, 30, cacheScale);
		self.award.st2.cache(0, 0, 100, 40, cacheScale);
		
		
		function doWake(anim_length) {
			gsap.killTweensOf(doSleep);
			doSleep();
			createjs.Ticker.addEventListener("tick", stage);
			gsap.delayedCall(anim_length, doSleep);
		}
		function doSleep() {
			createjs.Ticker.removeAllEventListeners("tick");
		}
		function doRollOver(t){AD_FINISHED&&doWake(.6),_overed||(0==self.cta.ctaBack.x?(gsap.to(self.cta.aRight,{x:150}),gsap.to(self.cta.ctaText,{x:37}),gsap.to(self.cta.aLeft,{x:12})):(gsap.to(self.ctaB.aLeft,{x:9}),gsap.to(self.ctaB.aRight,{x:39}))),_overed=!0}function doRollOut(t){AD_FINISHED&&doWake(.6),_overed&&(0==self.cta.ctaBack.x?(gsap.to(self.cta.aLeft,{x:-20}),gsap.to(self.cta.ctaText,{x:10}),gsap.to(self.cta.aRight,{x:120})):(gsap.to(self.ctaB.aLeft,{x:-20}),gsap.to(self.ctaB.aRight,{x:9}))),_overed=!1}
		function adFinished() {
			console.log("AD FINISHED!");
			AD_FINISHED = true;
			doRollOut(); 
		}
		
		function doClick() {
			window.open(clickT, "_blank");
		}
		
		animateInCreative_GSAP_TIMELINE();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(-50,680);

	this.ctaB = new lib.ctaB();
	this.ctaB.name = "ctaB";
	this.ctaB.setTransform(-50,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ctaB},{t:this.cta}]}).wait(1));

	// logo
	this.logo = new lib.mc_logo();
	this.logo.name = "logo";
	this.logo.setTransform(91,549,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// text3
	this.txt3 = new lib.mc_txt3();
	this.txt3.name = "txt3";
	this.txt3.setTransform(27.95,25,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// award
	this.award = new lib.sticker();
	this.award.name = "award";
	this.award.setTransform(213,364);

	this.timeline.addTween(cjs.Tween.get(this.award).wait(1));

	// car 
	this.car = new lib.mc_car();
	this.car.name = "car";
	this.car.setTransform(104,388,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// circleend
	this.circleY = new lib.mc_circleend();
	this.circleY.name = "circleY";
	this.circleY.setTransform(142.5,308);

	this.timeline.addTween(cjs.Tween.get(this.circleY).wait(1));

	// circle_white
	this.circleW = new lib.circle_white();
	this.circleW.name = "circleW";
	this.circleW.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.circleW).wait(1));

	// text2
	this.txt2 = new lib.mc_txt2();
	this.txt2.name = "txt2";
	this.txt2.setTransform(27.95,25,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// text1
	this.txt1 = new lib.mc_txt1();
	this.txt1.name = "txt1";
	this.txt1.setTransform(27.95,25,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// boltdrive
	this.bd = new lib.mc_bolt_drive();
	this.bd.name = "bd";
	this.bd.setTransform(123,364,1,1,0,0,0,157,162);

	this.timeline.addTween(cjs.Tween.get(this.bd).wait(1));

	// shadow
	this.shadow = new lib.mc_shadow();
	this.shadow.name = "shadow";
	this.shadow.setTransform(188,522.5,1,1,0,0,0,144,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1));

	// rect
	this.rects = new lib.mc_rects();
	this.rects.name = "rects";
	this.rects.setTransform(150,300,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.rects).wait(1));

	// line
	this.line = new lib.mc_line();
	this.line.name = "line";
	this.line.setTransform(-1680,517);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD25C").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1530,250,2519,462);
// library properties:
lib.properties = {
	id: '1F8CA2A4A0EA654EABBB3FBCA823831E',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1648723131796", id:"index_atlas_1"}
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
an.compositions['1F8CA2A4A0EA654EABBB3FBCA823831E'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;