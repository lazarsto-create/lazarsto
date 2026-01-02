(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[716,698,260,40],[0,0,400,472],[402,0,292,260],[506,262,240,240],[696,0,242,260],[748,262,208,216],[748,480,208,216],[506,504,208,216],[0,474,504,360]]},
		{name:"index_atlas_NP_1", frames: [[0,0,320,480]]}
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



(lib.bgr_320x480 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_320x480 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dish3 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.food2_300x250 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.food3_300x250 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.food5_300x250 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.guy_arm = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.guy_body = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.guy_head = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.package_320x480 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
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


(lib.note = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titel
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/ByQgRgCgLgJQgRgPADgWQACgMALgKQAMgJAPgEQASgEAOAFQAOAEAJAPQADADAAgGIABgDIAhibQADgEAEABIAGACIAdALQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQgBAFABAMQAAAIAQAaQARAZABAOQABAIgCAIQgCAFgDAEQgDADgHAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAEgCADgLQADgLgDgFQgDgJgRgYIgJgMQgJgKAAADIgzCCQgHAQgIAJQgOAPgXABIgGAAIgJAAg");
	this.shape.setTransform(270.3225,84.0741);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AhZBwIAOAAQAXgBAPgPQAIgJAIgQIAxiCQABgDAIAKQgsB2gEAHQgIARgIAIQgPAPgWABIgGAAQgKAAgJgCgAgkAxQgJgPgPgEQARABALAMIgBADQAAABAAABQAAABgBAAQAAABAAAAQAAAAgBAAIgBgBgABGAbQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAEgCADgLIABgDQADgIgCgIQgBgOgQgZQgQgagBgIQgBgMABgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgcgLIADAAIAkANQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQgBAIAAAJQABAIAQAaQAQAZACAOQABAPgHAKIgKAIIgCABIgCgBg");
	this.shape_1.setTransform(272.9632,84.273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.note, new cjs.Rectangle(259.7,72.7,22.30000000000001,23), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#011C48").s().p("AFhAeIglgsIABBEIgUAAIAAhsIAbAAIA6BEIgChEIAUAAIAABwQgdgFgSgXgADeAeIgngsIADBEIgVAAIAAhsIAbAAIA6BEIgDhEIAWAAIAABwQgegFgRgXgAjXA5IgOgCIgKgEIgHgEIgKgHIgEgGIgHgJIgEgPIgBgOIADgPIAIgNIAEgGIAKgIIAIgEIAMgEIANgDIAKAAIAOADIAQAGIAOAKIAFAGIAFAKIADAHIACAHIAAALIAAAHIgHASIgJAMIgRALIgKAEIgOACgAjWgmIgFABIgFADIgGAFIgHANIgCAKIAAAJIACANIAHANIAGAGIAFACIAFACIACAAIAGAAIADAAIAFgCIAFgCIACgCIAFgGIAGgLIACgKIAAgMIgDgNIgFgHIgDgFIgEgDIgFgDIgIgCIgGAAgAhJAtQgGgGgFgMIgRgqIgGBFIgXAAIAPhsIAeAAIAbBBIAXhBIAjAAIANBsIgkAAIgGhFIgZBHQgNgEgGgHgABvA2IgLgeIglAAIgKAeIgZAAIArhsIAgAAIAtBsgABEAJIAbAAIgOgmgAlGA2IAAgxIgoAAIAAAxIgiAAIAAhsIAiAAIAAArIAoAAIAAgrIAiAAIAABsg");
	this.shape.setTransform(48.1,18.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Am7B4IAAi+QBzAABxgYIBHgRQAigHAOgBQAfABAVAHQAXAIAVATQAWgTAWgIQAWgHAfgBQAOABAhAHIBHARQByAYBzAAIAAC+g");
	this.shape_1.setTransform(48.05,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF231D").s().p("AnfClIAAkWIAaAAQBPAABZgLQAhgEAsgLIBMgUQAUgFAXAAQAbAAAZAHQAYAIANAOQAOgOAZgIQAXgHAcAAQAXAAAVAFIBMAUQArALAiAEQBXALBQAAIAaAAIAAEWgAiPhrIhHARQhxAYhzAAIAAC9IN2AAIAAi9QhyAAhygYIhHgRQghgIgOAAQggAAgVAIQgWAIgWATQgWgTgWgIQgVgIggAAQgOAAghAIg");
	this.shape_2.setTransform(48,16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,96,33.1), null);


(lib.guy_head_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.guy_head();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guy_head_1, new cjs.Rectangle(0,0,104,108), null);


(lib.food = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.package_320x480();
	this.instance.setTransform(0,0,0.5001,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food, new cjs.Rectangle(0,0,252.1,180), null);


(lib.emp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.dish4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.food5_300x250();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dish4, new cjs.Rectangle(0,0,121,130), null);


(lib.dish3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.dish3();
	this.instance.setTransform(1,1,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dish3_1, new cjs.Rectangle(1,1,100,118), null);


(lib.dish2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.food3_300x250();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dish2, new cjs.Rectangle(0,0,120,120), null);


(lib.dish1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.food2_300x250();
	this.instance.setTransform(145,93,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dish1, new cjs.Rectangle(145,93,146,130), null);


(lib.copyright = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.copyright_320x480();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyright, new cjs.Rectangle(0,0,130,20), null);


(lib.copy22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4GOIAsj4QAHgmgCgXQgBgXgMgMQgTgUghAAQgrAAgcAaQgcAagJAxIgvEHIiuAAICNsbICtAAIhAFuQAqgrAogPQAngPAxAAQBdAAAnA0QAnAzgQBWIg3E5g");
	this.shape.setTransform(131.3475,134.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("ABGGUIgVgMIA7jsQAHgmgCgWQgBgXgMgNQgTgUghAAQgsAAgbAaQgdAbgIAxIgvEGIitAAIgRgMICdsOICdgNIAPAUIg/FnQAqgrAogPQAngPAxAAQBdAAAnAzQAnAzgQBXIg3E4g");
	this.shape_1.setTransform(132.1475,135.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy22, new cjs.Rectangle(102.3,95.1,59.7,80.9), null);


(lib.copy21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgFhQhEgegtg0QgrgzgShGQgRhFAOhRQAOhQAqhFQArhFA+g0QA+g0BPgdQBPgeBXAAQBXAABGAeQBEAdAtA0QAsA0ASBFQARBGgOBPQgPBRgqBFQgqBGg+AzQg/A0hPAeQhQAdhWAAQhZAAhEgdgAgti4QgoAPggAbQgiAbgWAlQgXAkgIAqQgHArAJAlQAKAkAXAbQAYAbAiAPQAjAOApAAQApAAAogOQAngPAhgbQAigbAWgkQAXglAIgrQAHgqgKgkQgJglgYgbQgYgbgjgPQgigOgpAAQgoAAgoAOg");
	this.shape.setTransform(65.1,138.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// titel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AjgFgQhFgdgsg0QgrgzgShGQgShFAPhRQAPhQAphFQAqhFA/g0QA+g0BOgdQBPgeBYAAQBXAABFAeQBGAdAsA0QAsA0ASBFQASBGgPBPQgOBQgqBGQgqBGhAAzQg9A0hQAdQhQAehWAAQhZAAhEgegAgui4QgoAPggAbQggAbgYAkQgWAlgIAqQgHArAJAlQALAkAXAbQAWAaAjAPQAjAPApAAQApAAAogPQAngOAhgbQAhgbAXgkQAXglAHgrQAIgqgKglQgKgkgXgbQgYgbgigPQgjgPgpAAQgpAAgoAPg");
	this.shape_1.setTransform(66.7,139.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy21, new cjs.Rectangle(24.3,100,83.3,77.6), null);


(lib.copy13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVCNQgcgLgBgcQAAgOAPgOQAPgOAXgJQA3gVAfAcQAEACgBgGIASjCQACgFAGgBIA0AEQAHAAABAEIgHAbIgKAkQgpCQgEAKQgIAVgKAMQgTAWghAIQgTAFgQAAQgRAAgPgGg");
	this.shape.setTransform(35.7508,59.4756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AhVCNQgcgLgBgcQAAgOAQgOQAOgOAXgJQA3gVAgAcQADACAAgGIASjCQABgGAHAAIAsABQAPADABAEQAAABgIAcIgLAnIgrCVQgJAWgKALQgSAWgiAIQgSAFgQAAQgSAAgPgGg");
	this.shape_1.setTransform(36.9264,59.8701);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy13, new cjs.Rectangle(24.3,44.8,24.099999999999998,29.799999999999997), null);


(lib.copy12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijCBQgWgKgPgTQgPgUgFgZQgGgaAGgdQAFgcAOgZQANgYAWgUQAUgTAagLQAagMAeAAQAxAAAZAjIAEgaIBeAAIgvEGIhcAAIAFgeQgjAlgzAAQgdABgWgLgAhPg2QgLAFgKAIQgJAIgGALQgHAKgCAMQgCANACAKQADALAGAJQAHAHAKAFQALAFAMAAQAMAAAMgFQAMgFAJgHQAKgJAHgKQAGgLACgNQADgKgDgMQgDgMgHgHQgGgIgLgFQgJgFgNAAQgNAAgMAFgAJECEIAYiEQADgTAAgNQgBgMgGgHQgFgGgHgDQgHgCgJAAQgXAAgQAOQgPAOgEAaIgZCMIhdAAIAvkGIBcAAIgGAhQAYgXAUgHQAVgJAaAAQAcAAASAJQASAJALARQAJAOABAQQABAPgDAWIgeCmgAlhCEIAXiCQAEgUgBgMQAAgNgEgHQgFgHgGgDQgHgCgIAAQgtAAgLBAIgXCCIhdAAIAXiCQAEgUgBgMQAAgNgDgIQgDgIgIgCQgHgDgKAAQgIAAgJACQgIADgHAHQgIAIgFANQgGANgEAUIgWCCIhdAAIAukGIBdAAIgGAgQAsgkAvAAQA7AAAWAxQAogyA6ABQATAAAOAEQAQAHAKAKQAJALAEAUQAEASgFAaIgeCqgAETCCIAXiDQAEgUgBgMQAAgMgHgHQgEgHgIgCQgHgDgJABQgXgBgPAOQgPAOgFAbIgZCLIhcAAIAukGIBcAAIgFAiQAXgXAVgIQAVgIAZAAQAcAAASAJQATAKAKAPQAJAOABAQQACAQgEAWIgeClg");
	this.shape.setTransform(187.0975,77.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AicCCQgWgLgPgTQgOgSgGgaQgFgZAFgfQAFgbAOgZQAPgaAUgTQAVgTAagKQAagMAdAAQAxAAAZAjIAFgaIBNgJIAQAJIguEFIhbAAIgRgIIAQgQQgjAggvAAQgdAAgWgKgAhHg1QgMAFgJAIQgJAHgHALQgGALgDALQgCAMADAMQACALAHAIQAHAJAJAEQALAEAMAAQAMAAANgEQALgEAKgJQAJgIAHgLQAGgLACgMQACgLgDgLQgCgLgGgIQgHgIgKgFQgKgFgMAAQgOAAgLAFgAJTCIIgWgIIAnh8QADgUAAgLQgBgMgGgHQgGgGgGgDQgIgCgIAAQgXAAgQAOQgOAOgFAaIgZCLIhfAAIgNgIIA+j9IBMgIIAQAIIgGAhQAYgXAUgIQAVgIAaAAQAcAAASAJQASAJALARQAJANABAQQABARgDAVIgeClgAlWCEIgTgIIAnh5QADgSAAgOQgBgNgEgHQgEgHgHgDQgGgCgJAAQgsAAgMBAIgWCBIhbAAIgSgIIAnh5QADgRAAgPQgBgOgDgHQgDgIgIgCQgGgDgLAAQgJAAgIACQgIADgHAHQgHAHgGAOQgGANgDAUIgXCBIhcAAIgQgIIA+j9IBMgJIAQAJIgGAgQAtgkAvAAQA6AAAWAxQAogyA6AAQARAAARAFQAQAGAJALQAKAMADASQAEATgFAaIgeCpgAEgCDIgWgJIAoh7QADgTgBgMQgBgMgFgIQgGgGgHgCQgHgDgJAAQgXAAgPAOQgPAPgFAaIgYCLIhgAAIgNgJIA+j9IBNgIIAQAIIgGAiQAXgYAVgHQAUgIAbAAQAcAAARAJQASAIALARQAKANABARQABAQgEAVIgdCmg");
	this.shape_1.setTransform(187.9361,78.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy12, new cjs.Rectangle(116.6,63.9,142.70000000000002,28.699999999999996), null);


(lib.copy11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsC7QgagJgSgUQgRgSgHgbQgIgbAGgfQAFgeARgZQAQgYAYgTQAZgTAegLQAfgKAiAAQAiAAAbAKQAbALASATQASASAHAZQAIAagGAfQgFAfgRAaQgRAagYASQgZAUgfAJQggALghAAQghAAgcgLgAC2ABQgLAEgKAIQgKAJgGAKQgHALgCANQgDAOADAJQADAMAHAIQAGAIAKAFQALAEAMABQAMgBAMgEQALgFAKgIQAJgIAHgMQAHgKACgNQADgNgEgLQgCgKgHgJQgHgIgKgEQgJgEgNAAQgMAAgMAEgAhuC8IAcifIiQAAIgcCfIhlAAIBEmAIBlAAIgbCUICRAAIAaiUIBkAAIhDGAg");
	this.shape.setTransform(82.0583,72.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// titel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AB1DAQgbgLgSgTQgRgSgHgbQgHgbAFgfQAFgdARgaQAQgYAYgTQAZgTAegKQAggLAiAAQAiAAAaAKQAbALASATQASASAHAZQAIAagGAfQgGAggQAZQgQAagZATQgZATgeAKQgfAKgjAAQgiAAgagKgAC+AFQgLAEgKAJQgKAIgGALQgHALgCAMQgCANADALQADALAGAIQAHAJAKAEQAKAEAMAAQAMAAAMgEQALgEAKgJQAKgIAHgLQAHgLABgNQADgMgDgLQgDgLgHgIQgGgIgKgFQgLgFgMAAQgMAAgMAFgAhnDAIgOgIIAsiXIiRAAIgcCfIhnAAIgNgIIBUl5IBUgIIAQAIIgbCVICRAAIAbiVIBTgIIAQAIIhDGBg");
	this.shape_1.setTransform(82.8413,72.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy11, new cjs.Rectangle(46.5,52.4,72.7,40.300000000000004), null);


(lib.guy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.guy_head_1();
	this.instance.setTransform(52,28,1,1,0,0,0,52,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// arm
	this.instance_1 = new lib.guy_arm();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.guy_body();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guy, new cjs.Rectangle(0,0,104,108), null);


(lib.copy31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titel
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKBxIgDgBQgTgKgNgQQgNgQgEgXQgEgOABgQIADgRIADgQQAFgPAIgPQAMgWASgQQASgQAXgKQAWgJAZAAQAcAAATAMQAJAHAIAKIABgGIADgQIBRAAIgoDiIhPAAIAAgEIAEgWQgfAggsABQgXAAgSgIgAhEguQgKAEgIAGQgIAHgGAKQgFAJgCAKQgCAKACAKQACAJAGAHQAGAIAIADIAFADQAHACAIAAQALAAAKgFQAKgDAIgIQAIgGAGgKQAGgKACgKQACgJgDgKQgCgJgGgIIgFgFIgJgFQgJgEgLgBQgKABgLAEgAH1ByIAVhyQADgRgBgKQgBgLgFgGIgBgCQgEgDgFgDQgHgCgHAAQgUABgNALQgNANgEAWIgWB5IhQAAIAojiIBQAAIgFAdQAJgKAJgGQAKgIAKgDQASgHAXAAQAYAAAPAIIAKAFQAJAHAGAJQAIAMABAOQABAOgDASIgaCQgAkxByIAUhxQADgPAAgMQgBgLgDgGIgCgDQgEgEgEgCQgGgCgHAAQgmAAgKA3IgUBxIhQAAIAUhxQADgQAAgLQAAgMgDgGIgCgDQgDgFgFgBQgGgDgJABQgIAAgGABQgHADgGAGQgHAHgFALQgFANgDAPIgTBxIhQAAIAojiIBQAAIgFAcIARgNQAegTAgAAQAcAAASAOQAPAKAIATIAGgHQAhglAuAAQAPAAAOAGQAIACAGAEIAIAIQAIAJADAQQADARgEAWIgaCTgADtBxIAUhyQAEgRgBgKQgBgLgFgGIgBgCQgEgEgGgCQgGgCgHAAQgVAAgNAMQgMAMgEAXIgWB5IhQAAIAojjIBQAAIgFAdQAJgJAJgGQAKgIAKgDQASgIAWABQAZAAAPAHIAIAFQAKAHAHAKQAIALABAPQABANgDATIgaCQg");
	this.shape.setTransform(198.2786,107.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00917").s().p("AiGBwIgKgGQASAIAWAAQAsAAAfggIgEAVQgZASghAAQgYAAgTgJgAIBByIgTgHIBQAAIAaiQQADgRgBgOQgBgPgIgLQgGgKgJgHIAEACQAQAIAJAOQAHAMACAOQABAPgEARIgZCPgAFbByIgMgHIBQAAIAWh4QAEgXANgMQANgMAUAAQAHAAAHACQAFACAEAEIgJgBQgVAAgNANQgMALgFAXIgVB4gAgTByIgOgHIBPAAIAojiIAOAIIgpDhgAknByIgRgHIBQAAIAaiSQAEgXgDgQQgDgQgIgJIgIgIQAMAFAJAKQAJAJADAQQADARgEAWIgBAJIgEARIgCARIgTBngAnBByIgPgHIBQAAIAUhvQAKg4AmAAQAHAAAGACQAFACADADIgHAAQgmAAgKA4IgUBvgApZByIgOgHIBQAAIAThvQADgQAFgNQAFgMAHgGQAGgGAHgDQAGgCAIAAQAJAAAGADQAFABADAEIgJgBQgHAAgIACQgGADgHAGQgGAHgFALQgEAKgEATIgUBvgAD5BxIgTgHIBQAAIAaiQQADgSgBgNQgBgPgIgLQgGgKgKgHIAFACQAPAHAKAPQAHALACAOQAAAOgDATIgZCPgABTBxIgMgHIBQAAIAWh4QAEgXAMgMQANgNAVAAQAHAAAGADQAGACAEAEIgKgBQgUAAgNAMQgNAMgEAXIgVB4gAhcApQgIgEgGgHQgGgHgCgJQgCgKACgKQACgLAFgJQAGgJAIgHQAIgHAKgEQALgEAKAAQALAAAJAEIAJAFQgHgBgIAAQgLgBgKAEQgKAEgJAHQgIAIgFAIQgGAKgCAJQgCALADAKQACAJAGAIIAFAFIgFgCgAl2htQARAHALAQIgGAGQgIgTgOgKgAHHh3IAOAIIgBAGQgJAGgJAJgAnvh3IANAIIgBAIIgRAMgAC/h4IAOAHIgBAGQgJAHgJAIgAgQhxQALAEAHAHIgBAGQgGgLgLgGg");
	this.shape_1.setTransform(198.9611,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.ns = new lib.emp();
	this.ns.name = "ns";
	this.ns.setTransform(251,110.2);

	this.note = new lib.note();
	this.note.name = "note";
	this.note.setTransform(271.1,85.2,1,1,0,0,0,271.1,85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.note},{t:this.ns}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy31, new cjs.Rectangle(137.4,72.7,144.6,47.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
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
			W = lib.properties.width,
			H = lib.properties.height,
			CS = Math.max(window.devicePixelRatio, 1),
			animContDiv = document.getElementById("animation_container"),
			tl = gsap.timeline( { onComplete: adFinished, paused: true } ),
			FIN = false;
		
		self.stop();
		cjs.Ticker.timingMode = cjs.Ticker.RAF_SYNCHED;
		/*
		animContDiv.addEventListener("mouseover", doRollOver, false);
		animContDiv.addEventListener("mouseout", doRollOut, false);
		animContDiv.addEventListener("click", doClick, false);
		*/
		// DEFAULTS END
		
		function doClick(e) {
			var url = addSuffix(grid8.adColumns["Exit Url"]);
			Enabler.exitOverride("ExitEvent", url);
		}
		function doRollOver(e) {
			wake(0.6);
			for (var i = 0; i < cont.numChildren; i++) {
				var c = cont.children[i];
				if (c.cta && c.cta.scale > 0 && c.cta.children[1].alpha > 0) {
					//gsap.to(c.cta, {duration: 0.4, scale: 1.1, ease: "expo"});
					gsap.to(c.cta.children[1], {duration: 0.5, y: c.ctaY - c.cta.hei, ease: "expo"});
					gsap.to(c.cta.children[2], {duration: 0.6, y: c.ctaY, ease: "expo"});
				}
			}
		}
		function doRollOut(e) {
			wake(0.6);
			for (var i = 0; i < cont.numChildren; i++) {
				var c = cont.children[i];
				if (c.cta && c.cta.scale > 0 && c.cta.children[1].alpha > 0) {
					gsap.killTweensOf([c.cta.children[1], c.cta.children[2]], "y");
					//gsap.to(c.cta, {duration: 0.4, scale: 1.0, ease: "expo"});
					gsap.to(c.cta.children[1], {duration: 0.6, y: c.ctaY, ease: "expo"});
					gsap.to(c.cta.children[2], {duration: 0.5, y: c.ctaY + c.cta.hei, ease: "expo"});
				}
			}
		}
		function wake(le) {
			if (FIN) {
				if (le == undefined) le = 0;
				if (self.sl_mo == undefined) self.sl_mo = new Date();
				var nw_sl_mo = new Date();
				nw_sl_mo = new Date(nw_sl_mo.getTime() + (le * 1000));
				if (nw_sl_mo >= self.sl_mo) {
					gsap.killTweensOf(adFinished);
					gsap.killTweensOf(sleep);
					sleep();
					cjs.Ticker.addEventListener("tick", stage);
					gsap.delayedCall(le, sleep);
					self.sl_mo = nw_sl_mo;
				}
			}
		}
		function sleep() {
			cjs.Ticker.removeAllEventListeners("tick");
		}
		function adFinished() {
			if (!FIN) {
				console.log("AD FINISHED!");
				FIN = true;
				wake();
			}
		}
		function brd(th, col) {
			if (th == undefined) th = 1;
			if (col == undefined) col = "#000000";
			var brd_t = new cjs.Shape();
			brd_t.graphics.beginFill(col).drawRect(-10, 0, W + 20, th);
			var brd_tr = new cjs.Shape();
			brd_tr.graphics.beginFill(col).drawRect(W - th, -10, th, H + 20);
			var brd_b = new cjs.Shape();
			brd_b.graphics.beginFill(col).drawRect(-10, H - th, W + 20, th);
			var brd_tl = new cjs.Shape();
			brd_tl.graphics.beginFill(col).drawRect(0, -10, th, H + 20);
			brd_t.cache(-10, 0, W + 20, th, CS);
			brd_tr.cache(W - th, -10, th, H + 20, CS)
			brd_b.cache(-10, H - th, W + 20, th, CS);
			brd_tl.cache(0, -10, th, H + 20, CS);
			brd_t.name = "bordertop";
			brd_tr.name = "bordertopright";
			brd_b.name = "borderbottom";
			brd_tl.name = "bordertopleft";
			self.addChild(brd_t, brd_tr, brd_b, brd_tl);
		}
		function an() {
			brd();
			
			animContDiv.style.display = "block";
			var d2 = 0.9,
				diff = 5.5,
				fx = self.food.x,
				arm = self.over ? self.over.children[1] : false,
				head = self.over ? self.over.children[2] : false;
			
			tl.add("copyr", 0.4 + d2);
			tl.add("product", 0.8 + d2);
			tl.add("dish1", tl.labels.product + diff - 1.5);
			tl.add("dish2", tl.labels.dish1 + diff * 1);
			tl.add("dish3", tl.labels.dish1 + diff * 2);
			tl.add("dish4", tl.labels.dish1 + diff * 3);
			
			var d = 0.05;
			//tl.from(self.logo, {duration: 0.7, alpha: 0, ease: "sine"}, d);
			//tl.from(self.logo, {duration: 1.0, y: "-=100", ease: "elastic.out(1.0, 1.0)"}, d);
			
			d += 0.5
			tl.from(self.logo, {duration: 1.0, scale: 2.1, ease: "expo.inOut"}, d);
			var ly = self.logo.y;
			self.logo.y = H / 2;
			tl.to(self.logo, {duration: 1.0, y: ly, ease: "expo.inOut"}, d + 0.15);
		
			d += 0.7;
			tl.from(self.copy1_1, {duration: 0.9, scale: 0, ease: "elastic.out(1.2, 0.8)"}, d);
			tl.from(self.note2, {duration: 0.8, x: "+=20", y: "+=30", alpha: 0, ease: "elastic.out(1.0, 0.8)"}, d + 0.1);
			tl.from(self.copy1_2, {duration: 0.9, scale: 0, ease: "elastic.out(1.2, 0.8)"}, d + 0.25);
		
			d += 0.6;
			tl.from(self.copy2_1, {duration: 0.9, scale: 0, ease: "elastic.out(1.0, 0.6)"}, d);
			tl.from(self.copy2_2, {duration: 0.9, scale: 0, ease: "elastic.out(1.0, 0.6)"}, d + 0.25);
			if (self.over)  tl.from([/*self.behind,*/ self.over], {duration: 0.9, scale: 0.0, rotation: 45, alpha: 1, ease: "elastic.out(1.0, 1.1)"}, d + 0.6);
			if (arm) {
				var rep = 4,
					rep_del = diff / 2;
				if (H == 600) {
					diff = 4.0;
					rep = 2;
					rep_del = 1.4;
				}
				var ar = gsap.timeline( { repeat: rep, repeatDelay: rep_del } );
				ar.to(arm, {duration: 1.2, y: "-=7", ease: "sine.inOut"}, 0);
				ar.to(arm, {duration: 1.2, y: "+=7", ease: "sine.inOut"}, 1.5);
				head.rotation = -3;
				head.y -= 2;
				ar.to(head, {duration: 1.2, rotation: 0, y: "+=2", ease: "sine.inOut"}, 0);
				ar.to(head, {duration: 1.2, rotation: -3, y: "-=2", ease: "sine.inOut"}, 1.5);
		
				tl.add(ar, d + 2.5);
			}
		
			d += 0.5;
			tl.from(self.copy3_1, {duration: 0.9, x: "+=75", ease: "expo"}, d);
			tl.from(self.copy3_1, {duration: 0.5, alpha: 0}, d);
		
			tl.from(self.food, {duration: 1.8, x: fx + W, ease: "expo"}, "product");
		
			tl.add("bump", tl.labels.product + 1.4);
			tl.to(self.food, {duration: 0.3, scale: 1.11, ease: "quint"}, "bump+=0.0");
			tl.to(self.food, {duration: 0.3, scale: 1.0, ease: "back"}, "bump+=0.4");
			tl.to(self.food, {duration: 0.3, scale: 1.11, ease: "quint"},"bump+=1.0");
			tl.to(self.food, {duration: 0.3, scale: 1.0, ease: "back"}, "bump+=1.4");
		
			var c = self.copy3_1,
				n = c.note,
				p = H == 600 ? 12 : 24,
				st = 1/*,
				n2 = self.copy3_1.note2,
				n3 = self.copy3_1.note3;
			tl.from(n, {duration: 2.8, x: "-=45", y: "+=50", alpha: 1.0, scale: 0, ease: "sine"}, d + 0.15);
			tl.from(n3, {duration: 2.6, x: "-=65", y: "+=75", alpha: 1.0, scale: 0, ease: "sine"}, d + 0.5);
			//tl.from(n, {duration: 0.8, rotation: -30, repeat: 1, yoyo: true, ease: "sine.inOut"}, d);
			tl.from(n2, {duration: 3.0, x: "-=20", y: "+=25", alpha: 1.0, scale: 0, ease: "sine"}, d + 1.3);
			//tl.from(n2, {duration: 0.5, rotation: -25, repeat: 2, yoyo: true, ease: "sine.inOut"}, d + 0.4);
			tl.to(n, {duration: 0.5, alpha: 0}, d + 2.5);
			tl.to(n3, {duration: 0.5, alpha: 0}, d + 2.7);*/
			for (var i = 0; i < p; i++) {
				var nn = new lib.note();
				c.ns.addChild(nn);
				//nn.x = n.x - 20 // + i * 1;
				//nn.y = n.y + 25 //- i * 1;
				nn.regX = n.regX;
				nn.regY = n.regY;
				tl.to(nn, {duration: 2.0, x: "+=40", y: "-=50", ease: "sine"}, d + i * st)
				tl.from(nn, {duration: 1.0, alpha: 0}, d + i * st)
				tl.from(nn, {duration: 1.0, scale: 0, ease: "sine"}, d + i * st)
				tl.to(nn, {duration: 0.6, alpha: 0}, d + i * st + 1.2)
			}
			tl.from(n, {duration: 2.0, x: "-=20", y: "+=25", ease: "sine"}, d + p * st - 0.0);
			tl.from(n, {duration: 1.0, scale: 0, ease: "sine"}, d + p * st - 0.0);
		
			d += 0.3;
			tl.from(self.copyr, {duration: 0.8, alpha: 0}, "copyr");
		
			var d1_x = self.dish1.x,
				d2_x = self.dish2.x,
				d3_x = self.dish3.x,
				d4_x = self.dish4.x;
		
			if (H == 600) {
				tl.labels.dish1 = tl.labels.product + 0.5;
				tl.labels.dish2 = tl.labels.dish1 + diff * 1;
				tl.labels.dish3 = tl.labels.dish1 + diff * 2;
				tl.labels.dish4 = tl.labels.dish1 + diff * 3;
				tl.to(self.dish1, {duration: 1.2, x: d1_x - W, ease: "expo"}, "dish1");
				tl.to(self.dish1, {duration: 0.7, x: d1_x - W * 2, ease: "expo.in"}, tl.labels.dish1 + diff - 0.6);
			
				tl.to(self.dish2, {duration: 1.2, x: d2_x - W, ease: "expo"}, "dish2");
				tl.to(self.dish2, {duration: 0.7, x: d2_x - W * 2, ease: "expo.in"}, tl.labels.dish2 + diff - 0.6);
			
				tl.to(self.dish3, {duration: 1.2, x: d3_x - W, ease: "expo"}, "dish3");
				tl.to(self.dish3, {duration: 0.7, x: d3_x - W * 2, ease: "expo.in"}, tl.labels.dish3 + diff - 0.6);
			
				tl.to(self.dish4, {duration: 1.2, x: d4_x - W, ease: "expo"}, "dish4");
			} else {
				tl.to(self.food, {duration: 0.7, x: fx - W, ease: "expo.in"}, "dish1");
				tl.to(self.dish1, {duration: 1.2, x: d1_x - W, ease: "expo"}, tl.labels.dish1 + 0.5);
				tl.to(self.dish1, {duration: 0.7, x: d1_x - W * 2, ease: "expo.in"}, tl.labels.dish1 + diff - 2.5);
				tl.fromTo(self.food, {x: fx + W}, {duration: 1.2, x: fx, ease: "expo"}, tl.labels.dish1 + diff - 2.0);
		
				tl.to(self.food, {duration: 0.7, x: fx - W, ease: "expo.in"}, "dish2");
				tl.to(self.dish2, {duration: 1.2, x: d2_x - W, ease: "expo"}, tl.labels.dish2 + 0.5);
				tl.to(self.dish2, {duration: 0.7, x: d2_x - W * 2, ease: "expo.in"}, tl.labels.dish2 + diff - 2.5);
				tl.fromTo(self.food, {x: fx + W}, {duration: 1.2, x: fx, ease: "expo"}, tl.labels.dish2 + diff - 2.0);
		
				tl.to(self.food, {duration: 0.7, x: fx - W, ease: "expo.in"}, "dish3");
				tl.to(self.dish3, {duration: 1.2, x: d3_x - W, ease: "expo"}, tl.labels.dish3 + 0.5);
				tl.to(self.dish3, {duration: 0.7, x: d3_x - W * 2, ease: "expo.in"}, tl.labels.dish3 + diff - 2.5);
				tl.fromTo(self.food, {x: fx + W}, {duration: 1.2, x: fx, ease: "expo"}, tl.labels.dish3 + diff - 2.0);
		
				tl.to(self.food, {duration: 0.7, x: fx - W, ease: "expo.in"}, "dish4");
				tl.to(self.dish4, {duration: 1.2, x: d4_x - W, ease: "expo"}, tl.labels.dish4 + 0.5);
				tl.to(self.dish4, {duration: 0.7, x: d4_x - W * 2, ease: "expo.in"}, tl.labels.dish4 + diff - 2.5);
				tl.fromTo(self.food, {x: fx + W}, {duration: 1.2, x: fx, ease: "expo"}, tl.labels.dish4 + diff - 2.0);
			}
		
			tl.play(0)
			//tl.pause(24)
			
			//tl.pause(LE + 0.42)
			console.log(tl.duration())
			//tl.timeScale(2)
		}
		document.addEventListener("visibilitychange", () => { stage.update(); });
		an();
		var clickArea = document.getElementById('animation_container');
		clickArea.style.cursor = "pointer";
		clickTAGvalue = dhtml.getVar('clickTAG', 'https://www.homann.de');
		landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');
		clickArea.onclick = function() {
			window.open(clickTAGvalue,landingpagetarget);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(160.1,33.3,1.1042,1.1029,0,0,0,48.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// copy1
	this.copy1_1 = new lib.copy11();
	this.copy1_1.name = "copy1_1";
	this.copy1_1.setTransform(161.95,142.4,1.0898,1.0898,0,0,0,150,125);

	this.copy1_2 = new lib.copy12();
	this.copy1_2.name = "copy1_2";
	this.copy1_2.setTransform(161.95,142.4,1.0898,1.0898,0,0,0,150,125);

	this.note2 = new lib.copy13();
	this.note2.name = "note2";
	this.note2.setTransform(41.2,70.8,1.0898,1.0898,0,0,0,39.2,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.note2},{t:this.copy1_2},{t:this.copy1_1}]}).wait(1));

	// copy3
	this.copy3_1 = new lib.copy31();
	this.copy3_1.name = "copy3_1";
	this.copy3_1.setTransform(59.6,356.8,1.5486,1.547,0,0,0,137.1,72.7);

	this.timeline.addTween(cjs.Tween.get(this.copy3_1).wait(1));

	// girl_over
	this.over = new lib.guy();
	this.over.name = "over";
	this.over.setTransform(120,206,1,1,0,0,0,67,77);

	this.timeline.addTween(cjs.Tween.get(this.over).wait(1));

	// copy2
	this.copy2_2 = new lib.copy22();
	this.copy2_2.name = "copy2_2";
	this.copy2_2.setTransform(239.25,189.5,1.8149,1.8151,0,0,0,136.8,137.8);

	this.copy2_1 = new lib.copy21();
	this.copy2_1.name = "copy2_1";
	this.copy2_1.setTransform(107.5,189.5,1.8149,1.8151,0,0,0,64.2,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.copy2_1},{t:this.copy2_2}]}).wait(1));

	// product
	this.food = new lib.food();
	this.food.name = "food";
	this.food.setTransform(164,324,0.9998,1,0,0,0,126,90);

	this.dish3 = new lib.dish3_1();
	this.dish3.name = "dish3";
	this.dish3.setTransform(484.35,318.5,1.5099,1.5,0,0,0,50.6,59);

	this.dish2 = new lib.dish2();
	this.dish2.name = "dish2";
	this.dish2.setTransform(483.5,324.5,1.5,1.5,0,0,0,63,63);

	this.dish1 = new lib.dish1();
	this.dish1.name = "dish1";
	this.dish1.setTransform(484.05,311.05,1.5,1.5,0,0,0,218.7,158.7);

	this.dish4 = new lib.dish4();
	this.dish4.name = "dish4";
	this.dish4.setTransform(479,330.9,1.5041,1.5077,0,0,0,60.5,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dish4},{t:this.dish1},{t:this.dish2},{t:this.dish3},{t:this.food}]}).wait(1));

	// copyright
	this.copyr = new lib.copyright();
	this.copyr.name = "copyr";
	this.copyr.setTransform(96,450);

	this.timeline.addTween(cjs.Tween.get(this.copyr).wait(1));

	// bgr
	this.instance = new lib.bgr_320x480();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,432.5,240);
// library properties:
lib.properties = {
	id: '5AD7F48910C4468DA81059C6EA985829',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./index_atlas_P_1.png", id:"index_atlas_P_1"},
		{src:"./index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
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
an.compositions['5AD7F48910C4468DA81059C6EA985829'] = {
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