(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.rabo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(70,6.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rabo, new cjs.Rectangle(0,0,140,13.7), null);


(lib.pause_circle2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Al4DrQgJgCgFgJQgGgIADgKQACgKAJgFQAJgFAJACQDsA7DPh9QDRh7A7jsQACgJAJgFQAIgFAKACQAKACAFAJQAFAJgCAJQhAD+jiCHQiYBcinAAQhPAAhSgVg");
	this.shape.setTransform(85.7526,101.6256);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_circle2, new cjs.Rectangle(46.3,76.1,79,51.10000000000001), null);


(lib.pause_circle1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ak8JPQi6hshSjGQhTjHA3jPQAwi1CLh+QCKh+C5geQECgrDWCZQDWCZArEDQAIAngBAXQAAATgGANQgFAIgKADQgJADgJgFQgGgOAAgIIgFgnQgPiMhNh2QhMh2h6hGQjTh6jpA/QjrA/h6DTQh5DSA/DqQA/DqDSB6IABAAQAIAFADAKQACAKgFAIIAAACQgGAIgJACIgFABQgHAAgGgEg");
	this.shape.setTransform(63.4516,59.4569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_circle1, new cjs.Rectangle(0,0,126.9,118.9), null);


(lib.fishes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5AhQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQADgJADgHIABAAIgBgCIgXgIQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgCAFgBQASgDARAGIABgBQA4gfA/AAIABABQgBANgNAMQgMAMgSAGQgOAFgXgEQgagFgEABQgGAAgBACQgGALgIAIQgDADgCAAIgBAAg");
	this.shape.setTransform(8.0423,20.9282);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqArQgdgFgcgRIgUgPQgMgJgJgDQgEgBgHAFQgIAGgJAAQgKABACgFQABgCAFgEQALgHABgDQgEgLgCgMQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACAAAEADQAJALAFALIACABQAuADAuAPQAlANAVANQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgOAPgYAAIgNgBg");
	this.shape_1.setTransform(10.7236,10.4751);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJASQgTgDgSgKIgOgDQgEgCgEADQgIAHgKAEQgFABgCgBQgCgCADgEQAKgHABgDQABgEgIgJQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQACgBADABIAQAMQA7gIA5AJIAJACQAAAAABABQAAAAAAAAQAAAAAAAAQAAABgBAAQgHAHgLAFQgSAIgSAAIgNgBg");
	this.shape_2.setTransform(24.3208,19.2083);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQATQAAgCAFgHIAHgGQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIgJgHQgGgEADgDQAEgDAWAMQArgOAmgCQAhgCARAFQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgJAQgkAKQgfAHgbgMQgMgEgKgBQgGABgGAHQgHAIgMADIgDABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_3.setTransform(28.9125,13.6817);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFAWQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAHgGACgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgWgGgCgFQgBgEAHAAQASADAQAFIAwgOQArgKAhAEQAGABABABQAAABAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQgLAQgSAHQgiAOgugOQgJgDgKAFQgIAJgMAEIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_4.setTransform(34.5784,23.8123);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+AbQgBgJAEgGQAAgBABgBQAAAAAAgBQgBgBAAAAQgBAAgBAAIgMgEQgLgDABgBQACgDAPABQAOABAJABQAfgOAkgJQAkgIAUADIAEAAIAAADQgIAOgPAKQgXANgfgBQgegEgKAAQgFAAgCACQgDACgDAGQgFAKgFACIgDABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_5.setTransform(33.4083,7.2399);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/AdQgBgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQAFgFABgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgMgBgNgEQgEgCAEgCQAHgDAOAAIAXADQAcgOAggKQAigJAZAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQgDAJgHAIQgQAQgVAFQgPADgZgCQgQgCgNABQgFABgCADQgIALgMADIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_6.setTransform(40.1411,16.6404);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3AoIADgJQABgEgBgDQgBgEgLgEQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIASACQAMgKAYgOQAkgWAcgKIAIgCQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAMgHAIQgNAUgWAIQgQAGgTABIgNACQgMAFgBADQgDALgGAHQgDAEgDAAQgDgBABgEg");
	this.shape_7.setTransform(51.2607,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBAdQACgIAFgKIgBgCIgQgHQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIAEgBQANgCAQADQAmgSAhgIQAcgGAUABIADABIAAACQgGANgLAIQgNALgRAFQgRAEgQgEQgNgDgOgBQgJAAgEAFQgIAMgKAJIgEABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_8.setTransform(45.825,9.7951);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA3QgCgCABgDQADgFgBgFQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgRABQgFAAADgEQAEgFAJgDIARgFQARgYAWgVQAYgWAVgJQABAAAAAAQABgBAAABQABAAAAAAQAAAAAAABQACAJgCALQgFAVgQAMQgLAIgXAIQgNAFgLAGQgDADAAAEQgCALgJAJIgCABIgCAAg");
	this.shape_9.setTransform(56.3688,9.2655);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKAZQgCAAACgGIADgJIgBgBIgVgIQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFAAQASgBAVAFQANgBAogNQAtgMAxABQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABIgEAGQggAkgmAAQgLAAgOgEIgagGQgOgCgMAFQgFAHgHAEQgFACgDAAIgBAAg");
	this.shape_10.setTransform(51.3977,2.5323);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fishes, new cjs.Rectangle(0,0,62.4,26.1), null);


(lib.check = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00334E").s().p("AgRAmIgegeQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAIALgKIABAAQAAgBAAAAQABgBAAAAQAAAAABABQAAAAAAABIAQAPIABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAgBAAAAIAwgvIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIALALIAAAAIABACIgBABIg+A9IAAABIgBAAIgCgBg");
	this.shape.setTransform(4.875,3.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(0,0,9.8,7.9), null);


(lib.pause = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAzDFQgNgOAAgTIAAlHQAAgTANgOQAOgNATAAQATAAANANQAOAOAAATIAAFHQAAATgOAOQgNANgTAAQgTAAgOgNgAhzDFQgOgOAAgTIAAlHQAAgTAOgOQANgNATAAQATAAAOANQANAOAAATIAAFHQAAATgNAOQgOANgTAAQgTAAgNgNg");
	this.shape.setTransform(63.525,63.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.circ2 = new lib.pause_circle2();
	this.circ2.name = "circ2";

	this.timeline.addTween(cjs.Tween.get(this.circ2).wait(1));

	// Layer_3
	this.circ1 = new lib.pause_circle1();
	this.circ1.name = "circ1";

	this.timeline.addTween(cjs.Tween.get(this.circ1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause, new cjs.Rectangle(0,0,126.9,127.2), null);


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

	// fish
	this.fishes = new lib.fishes();
	this.fishes.name = "fishes";
	this.fishes.setTransform(62.4,3.2,1,1,0,0,0,62.4,0);

	this.timeline.addTween(cjs.Tween.get(this.fishes).wait(1));

	// glas
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGA3QgJgGgCgMIAAAAIAPgEQABAGAFAEQAFADAGAAQANAAAAgLQAAgIgMgEIgJgEQgJgCgGgHQgFgHgBgIQAAgKAJgHQAIgGAMAAQAKgBAIAGQAIAGADAJIgPAEQgCgKgLAAQgFAAgDADQgEADAAAEQAAAGALAEIAJADQAXAJAAARQAAAMgKAHQgJAHgNAAIgEAAQgJAAgIgGgADJA9QgTgBgMgOQgNgPACgSQABgQAMgMQAMgMARgBQATgCALARIAAAAIAAguIATAAIAAB2IgTAAIAAgOIAAAAQgKAQgRAAIgDAAgAC6gEQgJAHAAAMIAAABQgBALAIAIQAHAJALAAIACAAQAMABAJgIQAIgIABgMQAAgMgIgIQgIgIgMgBIgBAAQgLAAgIAIgAjPA9QgSAAgMgNQgNgMAAgRIAAgDIABAAQgCgRAMgNQALgNASgBIADAAQATgCALARIAAAAIAAgOIATAAIAABWIgTAAIAAgOIAAAAQgKAQgRAAIgDAAgAjegEQgJAHAAAMIAAABQgBALAHAIQAIAJALAAIACAAQAMABAJgIQAIgJABgLQAAgMgIgIQgIgIgMgBIgBAAQgLAAgIAIgAEWAxQgNgMgBgSQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgRAMgNQAMgNASgBIADAAQASAAANAMQAOAOgDAZIhFAAQACAKAJAHQAIAHALgBQAPAAAJgJIAJAJQgOAQgVgBIgDAAQgQAAgMgMgAEigGQgIAGgBAJIA0AAQAAgJgIgGQgHgHgKAAIgCAAQgJAAgHAHgAAnAxQgNgMAAgSIAAgDQgBgRAMgNQAMgNARgBIADAAQATAAAMAMQAOAOgDAZIhEAAQACAKAIAHQAJAHALgBQAOAAAKgJIAIAJQgNAQgVgBIgDAAQgQAAgNgMgAA0gGQgIAGgBAJIA0AAQgBgJgHgGQgIgHgKAAIgBAAQgJAAgHAHgAmMAsQgSgRAAgYIAAgDQgBgYARgSQARgRAZgBIADAAQAOgBANAHQAMAGAIAMIgOAKQgMgRgVABQgRgBgMAMQgMALgBARIAAADQgBARAMANQALANARAAIADAAQAOABAKgJQAKgJACgNIgfAAIAAgPIAxAAQADAcgRASQgPARgaAAIgDAAQgWAAgRgRgAFsA7IAAhWIATAAIAAAXQABgLAIgGQAIgHAKAAIAGAAIAAASIgFgBQgMAAgIAIQgIAHAAALIAAAsgAB+A7IAAh2IASAAIAAB2gAgGA7IAAgwQABgIgFgGQgFgHgJgCIgDAAQgJAAgHAGQgGAGAAAIIAAADIAAAwIgSAAIAAh2IASAAIAAAtQAKgQASACQAPAAAHAJQAKAKAAARIAAAzgAkaA7IAAh2IASAAIAAB2g");
	this.shape.setTransform(111.8993,23.3614);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// inter
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBMIAAh2IAZAAIAAAKIAAAAQAKgNAQABQASAAAMANQAMAMAAARIAAACQABARgMAOQgLANgRABIgDAAQgQABgKgNIAAAAIAAArgAAYgPQgGAGgBAIIAAABQAAAJAFAGQAGAGAJABIACAAQAIAAAHgGQAGgGAAgIIAAgCQAAgIgGgGQgGgHgJAAIgBAAQgIAAgGAGgAijAiQgNgNgBgRIAAgEQgBgRAMgNQAMgNASgBIADAAQAUAAAMANQAPAPgEAaIg+AAQADAHAHAEQAGAEAIgBQALABAKgIIALANQgNAQgWgBIgDAAQgQAAgNgLgAiRgTQgGAFgCAGIAoAAQgBgGgGgFQgFgEgHABIgCgBQgGAAgFAEgAFhApQgEgEgBgGIAAAAQAAgHAFgEQAEgEAGgBQAGABAFAEQAEAEAAAHQAAAFgEAFQgFAEgGAAIgBAAQgFAAgEgEgACLAtQgSAAgNgNQgNgOgBgSQABgSANgNQAOgOATABQATABANANQANANABARQgBATgOAOQgNAMgSAAIgCAAgAB/gPQgHAFAAAJIAAABQgBAJAGAGQAFAGAJABIABAAQAJAAAGgGQAGgGAAgIIAAgCQABgHgGgHQgGgGgIAAIgCgBQgHAAgGAGgAETAVIAVgGQABAKALAAQAJAAAAgIQAAgEgHgCIgMgFQgJgCgFgHQgGgHAAgJQAAgLAJgHQAJgHANAAQALgBAJAGQAJAHACALIgUAFQgCgIgIAAQgHAAAAAGQAAAFAHACIALAEQAJACAGAGQAGAHABAJQAAAOgKAHQgJAHgPAAQgeAAgEgYgAjJAsQgKABgIgFQgIgHgBgKIAAgHIAAgmIgNAAIAAgUIANAAIAAgXIAZAAIAAAXIATAAIAAAUIgTAAIAAAjQAAAIALABIAIgCIAAAUQgGAFgIAAIgDgBgADuArIAAhVIAaAAIAABVgADFArIAAh2IAaAAIAAB2gAhOArIAAhVIAaAAIAAAXQABgKAIgIQAHgHALAAIAGAAIAAAZIgGgBQgKAAgIAHQgIAIgBAJIAAAngAkUArIAAgtQAAgTgRAAQgQAAAAATIAAAtIgaAAIAAhVIAaAAIAAALQAKgOAQABQAPAAAIAIQAKAKAAAUIAAAxgAl5ArIAAh2IAbAAIAAB2gADugzIAAgYIAaAAIAAAYg");
	this.shape_1.setTransform(108.875,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,153.5,29.5), null);


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
			AD_FINISHED = false,
			ft1 = "black",
			ft1_reg = "reg",
			MRG = 8,
			RD = 10,
			WS = 6,
			BLUE = "#00334E",
			TURK = "#00CAC6",
			special_char = "^",
			CO = { fs: 18, widt: 105, xx: 12, yy: 13 },
			LAB = { siz: 80, xx: W - MRG * 1, yy: MRG * 1 },
			CTA = { fs: 12, hei: 32, toY: 490, xx: 12, yy: 13, rd: 6 },
			USP = { fs: 10, marg: 10, hei: 42, widt: 92, cy: 17, ty: 10 },
			COUNT = { fs_big: 44, fs_small: 10 },
			leng = 1.5,
			raboH = 10 + 8 - 5,
			raboW = 104,
			CONT = new cjs.MovieClip(),
			LE = 3.5,
			S = grid8.shots;
		
		// DEFAULTS END
		gsap.registerPlugin(MotionPathPlugin);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		self.stop();
		self.test.visible = false;
		self.logo.y -= 100;
		self.addChildAt(CONT, 0);
		self.cont = CONT;
		animContDiv.addEventListener("mouseover", doRollOver, false);
		animContDiv.addEventListener("mouseout", doRollOut, false);
		animContDiv.addEventListener("click", doClick, false);
		// DEFAULTS BEGIN
		
		function doClick(e) {
			var url = addSuffix(grid8.adColumns["Exit Url"]);
			Enabler.exitOverride("ExitEvent", url);
		}
		function doRollOver(e) {
			wake(0.5);
			for (var i = 0; i < self.cont.numChildren; i++) {
				var c = self.cont.children[i];
				if (c.cta) {
					gsap.to(c.cta.children[1], {duration: 0.5, alpha: 1});
				}
			}
		}
		function doRollOut(e) {
			wake(0.5);
			for (var i = 0; i < self.cont.numChildren; i++) {
				var c = self.cont.children[i];
				if (c.cta) {
					gsap.to(c.cta.children[1], {duration: 0.5, alpha: 0});
				}
			}
		}
		function wake(le) {
			if (AD_FINISHED) {
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
			createjs.Ticker.removeAllEventListeners("tick");
		}
		function adFinished() {
			if (!AD_FINISHED) {
				console.log("AD FINISHED!");
				AD_FINISHED = true;
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
		function f(c, fs, ft, toW, ml) {
			if (toW == undefined) toW = CO.widt;
			if (ml == undefined) ml = 10;
			var tf = self.test;
			tf.font = fs + "px '" + ft + "'";
			tf.lineWidth = toW;
			tf.lineHeight = fs;
			if (c != undefined) {
				c = c.replace(/<br\s*[\/]?>/gi, "\n");
				c = c.replace(/<\/n>/gi, "");
			} else {
				c = "";
			}
			tf.text = c.replace(/\^/gi, "");
			while (tf.getBounds() && (tf.getBounds().height / fs > ml || tf.getBounds().width > toW)) {
				fs *= 0.97;
				tf.lineHeight = fs;
				tf.font = fs + "px '" + ft + "'";
			}
			fs = Math.round(fs);
			var s = c.split(" ");
			tf.text = "";
			var h = tf.getMeasuredHeight(),
				ls = [""],
				w = [],
				li = 0;
			for (var i = 0; i < s.length; i++) {
				var t = s[i];
				if (t != "") {
					if (t == "\n") {
						w.push("\n");
					} else if (t.indexOf("\n") > -1) {
						var k = t.split("\n");
						for (var j = 0; j < k.length; j++) {
							var l = k[j];
							if (l.length > 0) {
								w.push(l);
								if (j < k.length - 1) {
									w.push("\n");
								}
							}
						}
					} else {
						w.push(t);
					}
				}
			}
			if (w[w.length - 1] == "\n") {
				w.pop();
			}
			for (i = 0; i < w.length; i++) {
				var st = w[i],
					sp = false;
				if (i > 0) {
					st = " " + st;
				}
				if (st.indexOf(special_char) > -1) {
					sp = true;
					st = st.replace(special_char, "");
				}
				tf.text += st;
				//tf.font = fs + "px '" + (sp && ft2 ? ft2 : ft) + "'";
				if (sp) st = " " + special_char + st.replace(" ", "");
				var nh = tf.getMeasuredHeight();
				if (nh > h) {
					ls[li] = ls[li].trim();
					h = nh;
					li++;
					ls[li] = st.trim();
				} else {
					ls[li] += st;
					ls[li] = ls[li].trim();
				}
			}
			if (ls.length == 1 && ls[0].length == 0) ls.pop();
			var w = tf.getBounds() ? tf.getBounds().width : 0;
			tf.text = "";
			return { "lines": ls, "widt": w, "fs": fs };
		}
		function getImg(n) {
			var imgs = comp.getImages();
			return imgs[n];
		}
		function setImg(m, n, rX, rY) {
			if (rX == undefined) rX = 0.5;
			if (rY == undefined) rY = 0.5;
			var im = getImg(n);
			var bmp = new cjs.Bitmap(im);
			if (bmp == undefined || bmp.image == undefined) {
				return false;
			} else {
				bmp.regX = bmp.image.width * rX;
				bmp.regY = bmp.image.height * rY;
				m.addChild(bmp);
				return { "w": bmp.image.width, "h": bmp.image.height }
			}
		}
		function isImg(n) {
			var im = getImg(n);
			if (im == undefined || im.width == 1 && im.height == 1) {
				return false;
			}
			return true;
		}
		function rohero(txt) {
			while(1) {
				var a = txt.indexOf("<n>"),
					b = txt.indexOf("</n>");
				if (a < 0) break;
				if (b < 0) b = txt.length;
				txt = txt.slice(0, a) + txt.substring(a + 3, b).split(' ').map(s => s != '' ? special_char + s : s).join(' ') + txt.substring(b + 4);
			}
			return txt;
		}
		function copy(co, fon, fs, ls, m, col, toW, d, toX, toY, ml) {
			co = rohero(co);
			if (toW == undefined) toW = CO.widt;
			var c = f(co, fs, fon, toW, ml ? ml : 6),
				nfs = c.fs,
				spac = ls == undefined ? 2 : ls,
				lh = nfs + spac,
				le = 0.9,
				sp = false,
				ca = CS;
			if (d == undefined) {
				d = 0;
			} else if (d == "none") {
				le = 0;
				d = 0;
			}
			if (toY == undefined) toY = 0;
			if (toX == undefined) toX = 0;
			for (var i = 0; i < c.lines.length; i++) {
				if (c.lines[i].indexOf(special_char) > -1) {
					sp = true;
					var ws = Math.round(WS * (nfs / 26));
					break;
				}
			}
			m.widt = 0;
			for (i = 0; i < c.lines.length; i++) {
				var l = c.lines[i];
				var w = 0,
					cx = -5;
				if (sp) {
					txt = l.split(" ");
					var px = 0;
					var t = new cjs.MovieClip();
					for (var j = 0; j < txt.length; j++) {
						var tx = txt[j],
							ft = fon;
						if (tx.indexOf(special_char) > -1) {
							tx = tx.replace(special_char, "");
							ft = fon == ft1 ? ft1_reg : ft1;
						}
						var tf = new cjs.Text(tx, nfs + "px '" + ft + "'", col);
						tf.textBaseline = "alphabetic";
						var iw = tf.getBounds().width;
						if (j > 0) {
							tf.x = px;
						}
						px += Math.floor(iw) + ws;
						t.addChild(tf);
						if (j == txt.length - 1) {
							w = px - ws;
						}
					}
				} else {
					t = new cjs.Text(l, nfs + "px '" + fon + "'", col);
					t.textBaseline = "alphabetic";
					w = t.w = Math.round(t.getBounds().width);
				}
				t.x = toX;
				t.cache(cx, -nfs - 5, w + 10, nfs + 12, ca);
				m.addChild(t);
				t.y = t.toY = toY + nfs - 5 + i * lh;
				if (d != 0 && le != 0) {
					t.y = t.toY + 15;
					t.alpha = 0;
					tl.to(t, {duration: le, y: t.toY, ease: "expo"}, d + i * 0.1);
					tl.to(t, {duration: le * 0.5, alpha: 1.0}, d + i * 0.1);
				}
				if (w > m.widt) m.widt = w;
			}
			m.hei = Math.max(c.lines.length * lh - spac, 0);
		}
		function drawShape(m, w, h, left, rou, col, del) {
			var sh = new cjs.Shape(),
				oriX = left == true ? 0 : -w;
			sh.graphics.beginFill(col).drawRoundRectComplex(oriX, 0, w, h, left == true ? 0 : rou, left == true ? rou : 0, rou, rou);
			if (oriX != 0) sh.x = w;
			m.addChild(sh);
			if (del != undefined) {
				tl.from(sh, {duration: 1.0, scale: 0, ease: "expo"}, del);
			}
		}
		function getStr(str, start, end) {
		    return str.slice(str.indexOf(start) + 1, str.lastIndexOf(end));
		}
		function countUp() {
			var c = self.numb.msg,
				num = getStr(c, "[", "]");
			c = c.replace(num, Math.round(self.numb.nu))
			c = c.replace("[", "");
			c = c.replace("]", "");
			if (c != self.numb.current) {
				self.numb.field.text = c;
				self.numb.current = c;
				self.numb.field.updateCache();
			}
		}
		function fra(id, d) {
			var m = new cjs.MovieClip(),
				msk = new cjs.Shape(),
				img = new cjs.MovieClip(),
				copies = new cjs.MovieClip(),
				bgr = new cjs.MovieClip(),
				cta = new cjs.MovieClip(),
				sh = S[id],
				st = sh.shottype.toLowerCase(),
				mr = MRG,
				ct = sh.CTA,
				eaz = "expo.inOut",
				eaz2 = "power3",
				im,
				intr2 = st == "intro_pause",
				intr = st == "intro" || intr2 ? true : false,
				counter = st == "counter",
				trans = st == "transparent" ? true : false,
				usps = sh.USP,
				isUsp = usps.length > 0 && !trans,
				bgrColor = isUsp && !intr ? TURK : "#ffffff",
				isRabo = sh.rabobank == "on" ? true : false,
				copy_delay = id == 0 ? d : d + 0.6,
				bgrHei = 0,
				widt = W,
				hei = H,
				bgid = (id * 2 + 1),
				labid = bgid - 1,
				lab = "image" + labid,
				image = "image" + bgid,
				col = !trans ? BLUE : "#ffffff",
				cop = S[id].maincopy.split("|"),
				sub = cop[1] && cop[1].length > 0 ? cop[1] : false,
				fs = CO.fs,
				copy_w = CO.widt;
		
			copy_delay += 0.25;
			self.cont.addChild(m);
			m.addChild(img, msk, copies, cta);
			copies.addChild(bgr);
			copies.x = mr;
			if (!intr) copies.x = mr * 2;
			if (counter) {
				var ch = 0,
					cw = 0,
					delc = 0,
					cou = 0;
				for (var i = 0; i < cop.length; i++) {
					var c = cop[i],
						fsc = fs,
						ftc = ft1,
						typ = "reg",
						xtr_y = 0;
					if (c.indexOf("_") > -1) {
						if (c.toLowerCase().indexOf("big_") > -1) {
							fsc = COUNT.fs_big;
							typ = "big";
							xtr_y = -4;
							if (i == 0) xtr_y = -10;
						} else if (c.toLowerCase().indexOf("small_") > -1) {
							fsc = COUNT.fs_small;
							ftc = ft1_reg;
							typ = "small";
							xtr_y = 2;
						}
						var k = c.indexOf("_") + 1;
						c = c.substring(k, c.length);
					}
					cou = copies.numChildren;
					copy(c, ftc, fsc, null, copies, col, copy_w, copy_delay + 0.3 + delc * 0.1, CO.xx, CO.yy + ch + xtr_y);
					if (typ == "big") {
						var num = getStr(c, "[", "]");
						if (num.length > 0) num = Number(num);
						//c = c.replace("[", "");
						//c = c.replace("]", "");
						self.numb = { nu: 0, msg: c, field: copies.children[copies.numChildren - 1] };
						self.numb.field.text = c;
						self.numb.field.updateCache();
						tl.to(self.numb, {duration: 2.5, nu: num, ease: "expo", onUpdateParams: [], onUpdate: countUp}, copy_delay + delc * 0.1 + 0.3);
					}
					delc += (copies.numChildren - cou);
					ch += copies.hei + 2;
					if (i == 0 && typ == "big") ch += xtr_y;
					cw = Math.max(cw, copies.widt)
				}
				ch -= 2;
				copies.hei = ch;
				copies.widt = cw;
			} else {
				cop = cop[0];
				copy(cop, ft1, fs, 2, copies, col, copy_w, copy_delay + 0.3, trans ? -1 : CO.xx, CO.yy);
			}
			if (trans) {
				copies.y = 58 - CO.yy;
				if (copies.hei > 0) {
					var gra = new cjs.Shape(),
						gh = 60 + copies.hei + 50;
					gra.compositeOperation = "multiply";
					gra.graphics.beginLinearGradientFill(["#000","rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 0, gh).drawRect(0, 0, W, gh + 1);
					m.addChildAt(gra, 1);
					gra.mask = msk;
					gra.alpha = 0.5;
				}
			} else {
				if (copies.hei > 0) {
					bgrHei = copies.hei + CO.yy * 2 - 2;
					if (isUsp && isRabo) {
						bgrHei += raboH;
						copies.widt = Math.max(raboW, copies.widt);
					}
					drawShape(bgr, copies.widt + CO.xx * 2, bgrHei, true, RD, bgrColor, copy_delay);
				}
				copies.y = CTA.toY - mr - bgrHei;
			}
			img.x = widt / 2;
			msk.x = widt;
			img.mask = msk;
			if (intr) {
				widt = W - mr * 2;
				hei = copies.y - mr * 2;
				if (bgrHei == 0) hei += mr;
				msk.y = mr;
				msk.x = W - mr;
				if (intr2) {
					var gra2 = new cjs.Shape(),
						gh2 = hei + mr,
						pauz = new lib.pause();
					m.addChild(pauz);
					pauz.regX = pauz.regY = pauz.circ1.regX = pauz.circ1.regY = pauz.circ2.regX = pauz.circ2.regY = 127 / 2;
					pauz.circ1.x = pauz.circ1.y = pauz.circ2.x = pauz.circ2.y = pauz.circ1.regX;
					pauz.scale = 88 / 127;
					pauz.x = W  /2;
					pauz.y = (hei + mr * 2) / 2
					gra2.compositeOperation = "multiply";
					gra2.graphics.beginLinearGradientFill(["#00334E","rgba(0, 0, 0, 0)"], [1, 0], 0, 0, 0, gh2).drawRect(0, 0, W, gh2 + 1);
					m.addChildAt(gra2, 1);
					gra2.mask = msk;
					gra2.alpha = 0.6;
					tl.from(gra2, {duration: 1.5, alpha: 0}, d + 0.5);
					tl.from(pauz, {duration: 2.0, scale: pauz.scale * 0.7, ease: "expo"}, d + 0.5);
					tl.from(pauz, {duration: 1.0, alpha: 0}, d + 0.5);
					tl.from(pauz.circ1, {duration: 1.5, rotation: Math.random() * 360, ease: "expo"}, d + 0.5);
					tl.from(pauz.circ2, {duration: 2.5, rotation: Math.random() * 360, ease: "expo"}, d + 0.6);
				}
			} else {
				copies.mask = msk;
				// USP BEGIN
				if (isUsp) {
					var msk2 = new cjs.Shape(),
						d3 = copy_delay,
						rabo = new lib.rabo();
					if (isRabo) {
						copies.addChild(rabo);
						rabo.x = copies.children[copies.numChildren - 2].x + 2;
						rabo.y = bgrHei - raboH - 9;
						rabo.scale = raboW / 140;
					}
					msk2.x = copies.x;
					msk2.y = CTA.toY - mr;
					copies.y = msk2.y;
					//self.addChild(msk2); msk2.alpha = 0.3
					msk2.graphics.beginFill("#ff00ff").drawRoundRectComplex(0, -300, copies.widt + CO.xx * 2, 300, 0, 0, RD, RD);
					copies.mask = msk2;
					
					d3 += 0.0;
					tl.to(copies, {duration: 0.7, y: msk2.y - bgrHei + raboH, ease: "none"}, d3);
					tl.to(copies, {duration: 0.8, y: msk2.y - bgrHei, ease: "expo"}, d3 + 0.7);
					tl.from(rabo, {duration: 0.8, y: "+=20", ease: "expo", onComplete: function() {
						copies.mask = null;
					} }, d3 + 0.8);
		
					d3 += 1.1;
					tl.to(copies, {duration: 1.0, y: msk2.y - bgrHei - mr + 0 - USP.hei, ease: eaz}, d3);
				
					d3 += 0.5;
					copies.hei = bgrHei;
					usp(copies, d3, id);
				}
				// USP END
			}
			// gradient behind logo begin
			var bl = new cjs.Shape();
			bl.graphics.beginLinearGradientFill(["rgba(0, 51, 78, 1)","rgba(0, 51, 78, 0)"], [1, 0], 0, 0, 0, 130).drawRect(0, 0, W, 130);
			bl.y = H - 130;
			bl.alpha = 0.8;
			bl.compositeOperation = "multiply";
			m.addChildAt(bl, 1);
			bl.mask = msk;
			// gradient behind logo end
			img.y = hei / 2 + msk.y;
			// CTA BEGIN
			if (ct.length > 0) {
				var bgr1 = new cjs.Shape(),
					bgr2 = new cjs.Shape(),
					ch = CTA.hei,
					cToY = CTA.toY;
				m.cta = cta;
				if (!intr) cta.mask = msk;
				cta.addChild(bgr1, bgr2);
				copy(ct, ft1_reg, CTA.fs, null, cta, "#ffffff", CO.widt + 5, "none", CTA.xx, CTA.yy);
				var cw = cta.widt + CTA.xx * 2;
				bgr1.graphics.beginFill("#A5006C").drawRoundRect(0, 0, cw, ch, CTA.rd);
				bgr2.graphics.beginFill("#8B006C").drawRoundRect(0, 0, cw, ch, CTA.rd);
				bgr2.alpha = 0;
				cta.x = copies.x;
				cta.y = cToY;
				
				var d2 = copy_delay + copies.numChildren * 0.1 + 0.2;
				if (isUsp) d2 += 1.1;
				tl.from(cta, {duration: 0.9, rotation: 30, ease: "expo"}, d2);
				tl.from(cta, {duration: 0.8, y: "+=120", ease: "expo"}, d2);
		
				d2 += 1.0;
				tl.to(cta, {duration: 0.1, y: cToY - 10, ease: "none"}, d2);
				tl.to(cta, {duration: 0.6, y: cToY, ease: "bounce"}, d2 + 0.15);
		
				d2 += 1.4;
				tl.to(cta, {duration: 0.1, y: cToY - 10, ease: "none"}, d2);
				tl.to(cta, {duration: 0.6, y: cToY, ease: "bounce"}, d2 + 0.15);
			}
			// CTA END
			// STICKER BEGIN
			if (isImg(lab)) {
				if (S[(id - 1)] && getImg(lab).src == getImg("image" + (labid - 2)).src) {
					
				} else {
					var pri = new cjs.MovieClip();
					setImg(pri, lab);
					self.addChild(pri);
					var ww = pri.children[0].image.width,
						hh = pri.children[0].image.height,
						sc = Math.min(LAB.siz / ww, LAB.siz / hh),
						po = sh.label_position.split(","),
						px = po[0] && !isNaN(po[0]) ? Number(po[0]) : 0,
						py = po[1] && !isNaN(po[1]) ? Number(po[1]) : 0;
					pri.scale = sc;
					pri.x = LAB.xx - LAB.siz / 2 + px + 0 // (ww % 2 == 0 ? 0 : -0.5);
					pri.y = LAB.yy + Math.round((hh * sc) / 2) + py + 0 // (hh % 2 == 0 ? 0 : -0.5);
					tl.from(pri, {duration: 0.8, scale: 0, ease: "elastic.out(1.0, 0.8)"}, copy_delay + 0.8);
					for (var j = id; j < S.length; j++) {
						if (isImg("image" + (j * 2 + 0)) && getImg(lab).src != getImg("image" + (j * 2 + 0)).src) {
							tl.to(pri, {duration: 0.3, scale: 0, ease: "expo.in"}, d + LE * (j - id) - 0.1);
							break;
						}
					}
				}
			}
			// STICKER END
			msk.visible = false;
			msk.graphics.beginFill("#ff0000").drawRoundRectComplex(-widt, 0, widt, hei, RD, RD, RD, RD);
			if (isImg(image)) {
				im = setImg(img, image);
			} else {
				var hi = false;
				for (var j = 0; j < S.length; j++) {
					var ij = "image" + ((j * 2) + 1);
					if (isImg(ij)) {
						hi = ij;
						break;
					}
				}
				if (hi) {
					im = setImg(img, hi);
				} else {
					var bg = new cjs.Shape();
					bg.graphics.beginFill(BLUE).drawRect(-W / 2, -H / 2, W, H);
					img.addChild(bg);
				}
			}
			if (im) {
				var toW = intr ? W - mr : W,
					toH = intr ? hei : H,	
					w = im.w,
					h = im.h;
				tl.to(img.children[0], {duration: LE, scale: 1.05, ease: "sine"}, d);
				img.scale = Math.max(toW / w, toH / h);
			}
			if (id == 0) {
				tl.from(msk, {duration: 0.8, scale: 0, ease: "expo"}, d);
				if (!intr) tl.to(msk, {duration: 0.8, y: -25, scaleY: (H + 50) / hei, ease: eaz2}, d);
			} else {
				if (!intr) {
					msk.scaleX = (W - mr * 2) / widt;
					var inc = mr * 2;
					if (S[(id - 1)] && (S[(id - 1)].shottype == "intro" || S[(id - 1)].shottype == "intro_pause")) {
						inc /= 2;
					}
					msk.y = inc;
					msk.scaleY = (H - inc * 2) / hei;
				}
				m.x = W;
				tl.to(m, {duration: leng, x: 0, ease: eaz}, d);
				tl.from(img, {duration: leng, x: "-=" + (W / 2), ease: eaz}, d);
				tl.from([copies, msk2], {duration: leng, x: "+=" + (W / 2), ease: eaz}, d + 0.2);
				if (!intr) tl.to(msk, {duration: leng * 0.75, y: -25, scaleX: 1.0, scaleY: (H + 50) / hei, ease: eaz2, overwrite: "auto"}, d + leng * 0.6);
			}
			if (id < S.length - 1) {
				d += LE;
				if (!intr) {
					var inc = mr * 2;
					if (S[(id + 1)].shottype == "intro" || S[(id + 1)].shottype == "intro_pause") {
						inc /= 2;
					}
					tl.to(msk, {duration: leng * 0.6, scaleY: (H - inc * 2) / hei, y: inc, x: W - mr, ease: "none"}, d - leng * 0.25);
					tl.to(msk, {duration: leng * 0.75, y: -25, scaleX: (W + 0) / (W - inc), scaleY: (H + 50) / hei, ease: eaz2, overwrite: "auto"}, d + leng * 0.6);
					tl.to([copies, cta], {duration: leng, x: "+=" + (W / 2), ease: eaz}, d);
				}
				tl.to(img, {duration: leng, x: "+=" + (W / 2), ease: eaz}, d);
				tl.to(m, {duration: leng, x: "-=" + (W), ease: eaz}, d);
			}
		}
		function usp(m, d, id) {
			var usps = S[id].USP.split("|"),
				hei = USP.hei,
				mr = MRG - 0;
			for (var i = 0; i < usps.length; i++) {
				var usp = new cjs.MovieClip(),
					bgr = new cjs.Shape(),
					ch = new lib.check(),
					con = new cjs.MovieClip(),
					c = usps[i],
					no = false,
					toW = USP.widt;
				m.addChild(usp);
				usp.addChild(bgr);
				if (c.indexOf("_") > -1) {
					if (c.toLowerCase().indexOf("no_") > -1) {
						no = true;		
					}
					var k = c.indexOf("_") + 1;
					c = c.substring(k, c.length);
				}
				if (!no) {
					usp.addChild(ch);
					ch.x = USP.marg;
					ch.y = USP.cy;
					con.x = ch.x + 10 + ch.x / 2;
				} else {
					con.x = USP.marg;
					toW = CO.widt;
				}
				usp.addChild(con);
				copy(c, ft1_reg, USP.fs, null, con, BLUE, toW, "none", 0, 0);
				var widt = con.x + con.widt + USP.marg; //+ USP.marg * 2.5 + 10;
				con.y = Math.round(((hei + 5) - con.hei) / 2);
				bgr.graphics.beginFill("#ffffff").drawRoundRect(0, 0, widt, hei, hei / 2);
				usp.y = m.hei + mr;
				usp.regX = widt / 2;
				usp.regY = hei / 2;
				usp.x += usp.regX;
				usp.y += usp.regY;
				tl.from(usp, {duration: 0.8, scale: 0, ease: "expo"}, d + i * 2.5);
				if (i < usps.length - 1) {
					tl.to(usp, {duration: 0.3, scale: 0, ease: "expo.in"}, d + (i + 1) * 2.5 - 0.3);
				}
			}
			m.hei += hei + mr;
		}
		function an() {
			var bgr = new cjs.Shape(),
				d = 0.05;
			bgr.graphics.beginFill(TURK).drawRect(0, 0, W, H);
			self.addChildAt(bgr, 0);
			brd();
			
			tl.from(self.logo.children[0], {duration: 0.6, alpha: 0, ease: "power1"}, d);
			tl.from(self.logo.children[1], {duration: 0.6, alpha: 0, ease: "power1"}, d + 0.4);
			for (var i = 0; i < self.logo.fishes.numChildren; i++) {
				var f = self.logo.fishes.children[i],
					toX = f.x,
					toY = f.y,
					del = d + i * 0.04;
				tl.from(f, {duration: 0.7, alpha: 0, ease: "sine"}, del);
				f.x = toX - 40;
				f.y = toY;
				tl.to(f, {duration: 1.0, motionPath: {path: [{x: toX - 40, y: toY}, {x: toX - 20, y: toY + 2}, {x: toX, y: toY}], autoRotate: true, curviness: 2.0}, ease: "expo"}, del + 0.05);
			}
		
			d += 0.05;
			for (i = 0; i < S.length; i++) {
				fra(i, d + i * LE);
			}
		
			tl.play(0)
			//tl.pause(2)
			console.log(tl.duration())
			//tl.timeScale(0.4)
		}
		an();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// content
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(87,671.55,0.8472,0.8458,0,0,0,76.7,14.8);

	this.test = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.test.name = "test";
	this.test.lineHeight = 36;
	this.test.lineWidth = 256;
	this.test.parent = this;
	this.test.setTransform(-298,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.test},{t:this.logo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-220,450,372,234);
// library properties:
lib.properties = {
	id: '94FC801EFE404A178604C1D480D60EBE',
	width: 160,
	height: 600,
	fps: 30,
	color: "#66CC00",
	opacity: 1.00,
	manifest: [],
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
an.compositions['94FC801EFE404A178604C1D480D60EBE'] = {
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