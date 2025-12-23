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



(lib.bal = function() {
	this.initialize(img.bal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,131);


(lib.blur = function() {
	this.initialize(img.blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,139);


(lib.crowbar = function() {
	this.initialize(img.crowbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,98);


(lib.shatter = function() {
	this.initialize(img.shatter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,295);


(lib.star = function() {
	this.initialize(img.star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,252);// helper functions:

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


(lib.triangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#407D71").s().p("EhUahUXMCo1BUUMio1BUbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.3,-540,1080.6,1080);


(lib.star_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA+HEIhHAXIhLg+Ig4heIi9g0IgphnIg5ACIgYhkIg2gEIANhQIhIARIAFi9Ig7haIg/g2IAsgNIgTg3IA7gnIgBgqICCgmIQeIXIgBBJIhaAWIgeAcIAsAVIAaBJICTAIIAAA4Ig0AaIhQAAIhOgJIhnA8IAAAdIgaAuIguglIhwAhIhSBPg");
	var mask_graphics_1 = new cjs.Graphics().p("ABqMGIh6ApIiAhsIhhigIlDhaIhIiwIhhAEIgoisIhdgHIAWiKIh7AeIAJlFIhliZIhthdIBLgXIggheIBlhDIgBhIIDehAIcPOVIgCB+IiaAlIgyAvIBKAlIAsB9ID9AOIAABgIhZAsIiKAAIiGgPIiwBmIAAAxIgsBQIhQhAIi/A6IiMCGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-22.6135,y:-34.3628}).wait(1).to({graphics:mask_graphics_1,x:-20.847,y:-16.86}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_1
	this.instance = new lib.star();
	this.instance.setTransform(-131,-126);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-126,262,252);


(lib.square = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#407D71").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.shards = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shatter();
	this.instance.setTransform(-190,-147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shards, new cjs.Rectangle(-190,-147.5,380,295), null);


(lib.promocopy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#053781").s().p("AgEAeQgFgFAAgHIAAgZIgHAAIAAgLIAHAAIAAgNIALgCIAAAPIAOAAIAAALIgOAAIAAAXQAAAIAHgBIAGgBIACAKQgFACgFAAQgHAAgEgEg");
	this.shape.setTransform(24.45,-7.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053781").s().p("AgNAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAFgDAGAAQALAAAGAJIAAgIIALAAIAAAzIgLAAIAAgIQgGAJgLAAQgGAAgFgDgAgKgLQgEAFAAAGQAAAHAEAFQAFAFAFAAQAHAAAEgFQADgEAAgIQAAgHgDgEQgEgFgHAAQgFAAgFAFg");
	this.shape_1.setTransform(19.35,-6.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#053781").s().p("AgNAYQgGgEgDgGQgDgGAAgIQAAgHADgGQADgGAGgEQAFgDAGAAQALAAAGAJIAAgIIALAAIAAAzIgLAAIAAgIQgGAJgLAAQgGAAgFgDgAgKgLQgEAFAAAGQAAAHAEAFQAFAFAFAAQAHAAAEgFQADgEAAgIQAAgHgDgEQgEgFgHAAQgFAAgFAFg");
	this.shape_2.setTransform(13.05,-6.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#053781").s().p("AAbAbIAAgdQAAgNgKAAQgGAAgCADQgEAEAAAGIAAAdIgKAAIAAgdQAAgGgCgEQgDgDgFAAQgFAAgDADQgDAEAAAGIAAAdIgMAAIAAg0IALAAIAAAHQACgEAEgCQAFgCAEAAQAGAAADACQADADADAEQACgEAFgDQAEgCAGAAQAIAAAFAGQAGAGgBAKIAAAfg");
	this.shape_3.setTransform(5.6,-6.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#053781").s().p("AgZAkIAAhGIALAAIAAAIQAGgJALAAQAGAAAFADQAGAEADAGQADAGAAAIQAAAIgDAFQgDAGgGAEQgFADgGAAQgKAAgHgIIAAAagAgKgUQgEAEAAAIQAAAIAEADQAEAFAGAAQAGAAAFgFQAEgEAAgHQAAgHgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_4.setTransform(-4.4,-5.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#053781").s().p("AgNAYQgGgDgEgHQgDgGAAgIQAAgHADgGQAEgGAGgEQAGgDAHAAQAHAAAHADQAGAEADAGQADAGAAAHQAAAIgDAGQgDAHgGADQgHADgHAAQgHAAgGgDgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_5.setTransform(-10.75,-6.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy2, new cjs.Rectangle(-29,-16.4,70.6,17.599999999999998), null);


(lib.promocopy1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#053781").s().p("AAMAbIAAgcQAAgHgDgEQgDgDgGAAQgFAAgDAEQgDADAAAHIAAAcIgMAAIAAg0IALAAIAAAIQACgEAFgDQAEgCAFAAQAJAAAFAGQAGAGAAALIAAAeg");
	this.shape.setTransform(32.125,-2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053781").s().p("AgLAYQgGgDgDgGQgEgHAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAHAAAGADQAGADADAGQADAGAAAIIAAAEIglAAQABAGAEAEQAEADAGAAIAJgBIAIgEIADAKIgJAEQgFABgGAAQgHAAgHgDgAANgEQAAgGgEgDQgDgDgGAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_1.setTransform(26.125,-2.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#053781").s().p("AgWAgIADgKQAEACAEABIAJABQAHAAAFgEQAEgEABgIIAAgCQgHAIgJAAQgHAAgFgEQgGgDgDgGQgDgFAAgIQAAgHADgGQADgGAGgEQAFgDAHAAQAKAAAHAJIAAgIIAKAAIAAAuQAAAMgIAHQgGAHgNAAQgMAAgJgFgAgKgVQgEAEAAAHQAAAHAEAEQAEAEAGAAQAHAAAEgEQADgDABgIQgBgHgDgEQgEgEgHAAQgGAAgEAEg");
	this.shape_2.setTransform(19.95,-1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#053781").s().p("AAMAbIAAgcQAAgHgDgEQgDgDgGAAQgFAAgDAEQgDADAAAHIAAAcIgMAAIAAg0IALAAIAAAIQACgEAFgDQAEgCAFAAQAJAAAFAGQAGAGAAALIAAAeg");
	this.shape_3.setTransform(13.975,-2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#053781").s().p("AgFAnIAAg0IALAAIAAA0gAgEgaQgCgCAAgCQAAgDACgDQACgCACAAQADAAACACQACADAAADQAAACgCACQgCACgDABQgCgBgCgCg");
	this.shape_4.setTransform(9.575,-3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#053781").s().p("AgPAbIAAg0IALAAIAAAJQAEgKAJAAQAEAAADACIgCALIgFgBQgHAAgCAEQgDAEAAAGIAAAbg");
	this.shape_5.setTransform(6.6,-2.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#053781").s().p("AgLAYQgGgDgDgGQgEgHAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAHAAAGADQAGADADAGQADAGAAAIIAAAEIglAAQABAGAEAEQAEADAGAAIAJgBIAIgEIADAKIgJAEQgFABgGAAQgHAAgHgDgAANgEQAAgGgEgDQgDgDgGAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_6.setTransform(1.425,-2.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#053781").s().p("AAKAnIgRgWIgFAHIAAAPIgMAAIAAhNIAMAAIAAAvIAVgWIAOAAIgXAWIAZAeg");
	this.shape_7.setTransform(-3.925,-3.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#053781").s().p("AgLAYQgGgDgDgGQgEgHAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAHAAAGADQAGADADAGQADAGAAAIIAAAEIglAAQABAGAEAEQAEADAGAAIAJgBIAIgEIADAKIgJAEQgFABgGAAQgHAAgHgDgAANgEQAAgGgEgDQgDgDgGAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_8.setTransform(-10.025,-2.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#053781").s().p("AgVAaIAAgJIAaggIgYAAIAAgKIAnAAIAAAJIgZAgIAaAAIAAAKg");
	this.shape_9.setTransform(-15.45,-2.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#053781").s().p("AgPAbIAAg0IALAAIAAAJQAEgKAJAAQAEAAADACIgCALIgGgBQgFAAgDAEQgDAEAAAGIAAAbg");
	this.shape_10.setTransform(-19.65,-2.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#053781").s().p("AgLAYQgGgDgDgGQgEgHAAgIQAAgHADgGQADgGAGgEQAGgDAGAAQAHAAAGADQAGADADAGQADAGAAAIIAAAEIglAAQABAGAEAEQAEADAGAAIAJgBIAIgEIADAKIgJAEQgFABgGAAQgHAAgHgDgAANgEQAAgGgEgDQgDgDgGAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_11.setTransform(-24.825,-2.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#053781").s().p("AgFAlIgfhJIAOAAIAWA7IAXg7IAOAAIgeBJg");
	this.shape_12.setTransform(-31.425,-3.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy1, new cjs.Rectangle(-58.5,-11.9,117,17.6), null);


(lib.nc_cta_txt = function(mode,startPosition,loop,reversed) {
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


(lib.mc_cta_arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAbIARgRIhFAAIAAgSIBFAAIgRgRIANgOIAoAnIgoAog");
	this.shape.setTransform(10.675,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cta_arrow, new cjs.Rectangle(0,0,20.2,20), null);


(lib.logoWhite2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AARCAQgfgJgXgYQgmgmAAg5QAAg4AmgmQASgSAXgKQAZgKAcAAQA5AAAnAmQAmAmgBA4QABA5gmAmQgYAYgfAJQgTAFgWAAQgVAAgTgFgAgVhPQgfAfAAAwQAAAxAfAfQAfAgAvAAQAwAAAgggQAfgfAAgxQAAgvgfggQgggggwAAQgvAAgfAggAM5BFQgJgKABgXIAAg8IgTAAIAAgbIAUAAIAGgrIAgAAIAAArIAdAAIAAAcIgdAAIAAA2QAAAKACAEQADAEAIAAIANgBIAAAaIgHADIgLACIgNABQgRAAgJgLgALCA+QgPgSAAgeQAAgdAQgTQARgTAbAAQAWAAAPANIgGAaQgHgGgFgCQgFgCgHAAQgaAAgBAnQABASAGAJQAHAKAMAAQAHAAAFgCQAHgCAHgFIAFAYIgJAGQgNAHgRAAQgbAAgQgSgAJDA/QgQgSAAgeQABgeAQgTQARgTAbAAQA1AAAABFIAAAHIhKAAQAAAQAIAGQAHAHAPAAQAJAAAHgCQAIgCAJgGIAIAYIgMAGQgQAIgVAAQgdAAgRgRgAJggUQgEAHgBANIAkAAIAAgBQAAgagRAAQgJAAgFAHgAn2BGQgJgJAAgSQAAgPAHgKQAFgJANgFIAPgEIAggGIAAgDQgBgIgDgEQgDgDgJAAQgIAAgLADQgKACgKAFIgKgZIAPgGQAFgDAIgBQAPgEAQAAQAZAAAKAKQAJAKAAAZIAAA9QABAGACACQACADAFAAIACAAIAAAOIglAAQgNAAAAgMIAAgCIgJAHIgIAEQgLAEgKAAQgSAAgHgJgAnPAWQgFACgCAEQgCADAAAIQAAAHADADQABADAGAAQAFAAAHgDQAGgDAFgFIAAgZQgPACgJAEgAHdBOIAAiBIAlAAIAAARIABAAQAHgJAHgEQAGgFAIAAIAFABIAHABIAAAkIgJgCIgHgBQgHAAgGACIgKAHIAABWgAGaBOIAAiBIAoAAIAACBgAD+BOIAAisIA4AAQASAAAKACQALADAKAGQAOAKAJAUQAIAUAAAaQAAAigRAWQgIALgMAHQgKAGgLADQgMACgSAAgAEnAwIANAAQATAAAKgOQALgPgBgaQAAgfgLgPQgHgLgUAAIgOAAgAjuBOIAAgbIA2hLIgdAAQgJAAAAAIIAAADIgQAAIAAgYQAAgHAEgEQADgDAIAAIBUAAIAAAbIg2BLIA6AAIAAAbgAkpBOIAAhRQAAgKgCgEQgCgDgGAAQgMAAgLALIAABXIgoAAIAAhoQAAgFgDgDQgCgCgFAAIgCAAIAAgPIAnAAQAMAAAAAMIAAAFQALgKAJgEQAKgFAMAAQARAAAHAKQAFAFACAGQACAHgBAQIAABXgAo6BOIAAhoQAAgFgCgDQgDgCgFAAIgCAAIAAgPIAnAAQAHAAAEAEQADADAAAGIAAB0gAqABOIAAiUQAAgFgDgCQgCgCgGAAIgCAAIAAgPIAoAAQAGAAAEADQADAEAAAGIAACfgArGBOIAAiUQAAgFgCgCQgDgCgFAAIgDAAIAAgPIApAAQAFAAAEADQAEAEgBAGIAACfgAsABOIgMgqIgxAAIgNAqIgqAAIAuiIIADgIIAAgGQAAgHgKAAIgGAAIAAgPIBBAAQAHAAAFADQAFADABAHIAuCfgAsSAIIgRg/IgUA/IAlAAgABdBLIAAiBIAXAAQAJAAADADQAEAEAAAIIAABygAAmBLIAAiGQAAgHgBgCQgDgDgGAAIgBAAIAAgQIAiAAQAJAAADAEQAEADgBAJIAACSgAgQBLIAAhyQAAgIADgEQAEgDAJAAIAVAAIAACBgAGdhBQgGgFgBgJQABgIAGgFQAGgFALAAQALAAAGAFQAGAFAAAIQAAAJgGAFQgGAFgLAAQgLAAgGgFgAo5hBQgGgFAAgJQAAgIAGgFQAGgFALAAQALAAAGAFQAHAFgBAIQABAJgHAFQgGAFgLAAQgLAAgGgFg");
	this.shape.setTransform(88.5,13.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoWhite2, new cjs.Rectangle(0,0,177,26.7), null);


(lib.logoBlue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003781").s().p("AARCAQgfgJgXgYQgmgmAAg5QAAg4AmgmQASgSAXgKQAZgKAcAAQA5AAAnAmQAmAmgBA4QABA5gmAmQgYAYgfAJQgTAFgWAAQgVAAgTgFgAgVhPQgfAfAAAwQAAAxAfAfQAfAgAvAAQAwAAAgggQAfgfAAgxQAAgvgfggQgggggwAAQgvAAgfAggAM5BFQgJgKABgXIAAg8IgTAAIAAgbIAUAAIAGgrIAgAAIAAArIAdAAIAAAcIgdAAIAAA2QAAAKACAEQADAEAIAAIANgBIAAAaIgHADIgLACIgNABQgRAAgJgLgALCA+QgPgSAAgeQAAgdAQgTQARgTAbAAQAWAAAPANIgGAaQgHgGgFgCQgFgCgHAAQgaAAgBAnQABASAGAJQAHAKAMAAQAHAAAFgCQAHgCAHgFIAFAYIgJAGQgNAHgRAAQgbAAgQgSgAJDA/QgQgSAAgeQABgeAQgTQARgTAbAAQA1AAAABFIAAAHIhKAAQAAAQAIAGQAHAHAPAAQAJAAAHgCQAIgCAJgGIAIAYIgMAGQgQAIgVAAQgdAAgRgRgAJggUQgEAHgBANIAkAAIAAgBQAAgagRAAQgJAAgFAHgAn2BGQgJgJAAgSQAAgPAHgKQAFgJANgFIAPgEIAggGIAAgDQgBgIgDgEQgDgDgJAAQgIAAgLADQgKACgKAFIgKgZIAPgGQAFgDAIgBQAPgEAQAAQAZAAAKAKQAJAKAAAZIAAA9QABAGACACQACADAFAAIACAAIAAAOIglAAQgNAAAAgMIAAgCIgJAHIgIAEQgLAEgKAAQgSAAgHgJgAnPAWQgFACgCAEQgCADAAAIQAAAHADADQABADAGAAQAFAAAHgDQAGgDAFgFIAAgZQgPACgJAEgAHdBOIAAiBIAlAAIAAARIABAAQAHgJAHgEQAGgFAIAAIAFABIAHABIAAAkIgJgCIgHgBQgHAAgGACIgKAHIAABWgAGaBOIAAiBIAoAAIAACBgAD+BOIAAisIA4AAQASAAAKACQALADAKAGQAOAKAJAUQAIAUAAAaQAAAigRAWQgIALgMAHQgKAGgLADQgMACgSAAgAEnAwIANAAQATAAAKgOQALgPgBgaQAAgfgLgPQgHgLgUAAIgOAAgAjuBOIAAgbIA2hLIgdAAQgJAAAAAIIAAADIgQAAIAAgYQAAgHAEgEQADgDAIAAIBUAAIAAAbIg2BLIA6AAIAAAbgAkpBOIAAhRQAAgKgCgEQgCgDgGAAQgMAAgLALIAABXIgoAAIAAhoQAAgFgDgDQgCgCgFAAIgCAAIAAgPIAnAAQAMAAAAAMIAAAFQALgKAJgEQAKgFAMAAQARAAAHAKQAFAFACAGQACAHgBAQIAABXgAo6BOIAAhoQAAgFgCgDQgDgCgFAAIgCAAIAAgPIAnAAQAHAAAEAEQADADAAAGIAAB0gAqABOIAAiUQAAgFgDgCQgCgCgGAAIgCAAIAAgPIAoAAQAGAAAEADQADAEAAAGIAACfgArGBOIAAiUQAAgFgCgCQgDgCgFAAIgDAAIAAgPIApAAQAFAAAEADQAEAEgBAGIAACfgAsABOIgMgqIgxAAIgNAqIgqAAIAuiIIADgIIAAgGQAAgHgKAAIgGAAIAAgPIBBAAQAHAAAFADQAFADABAHIAuCfgAsSAIIgRg/IgUA/IAlAAgABdBLIAAiBIAXAAQAJAAADADQAEAEAAAIIAABygAAmBLIAAiGQAAgHgBgCQgDgDgGAAIgBAAIAAgQIAiAAQAJAAADAEQAEADgBAJIAACSgAgQBLIAAhyQAAgIADgEQAEgDAJAAIAVAAIAACBgAGdhBQgGgFgBgJQABgIAGgFQAGgFALAAQALAAAGAFQAGAFAAAIQAAAJgGAFQgGAFgLAAQgLAAgGgFgAo5hBQgGgFAAgJQAAgIAGgFQAGgFALAAQALAAAGAFQAHAFgBAIQABAJgHAFQgGAFgLAAQgLAAgGgFg");
	this.shape.setTransform(88.5,13.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoBlue, new cjs.Rectangle(0,0,177,26.7), null);


(lib.largeshape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.shape_2.graphics.f("#FCAE7F").s().p("A5NZPMAAAgydMAybAAAMAAAAydg");
	this.shape_2.setTransform(0.5,0.5);

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
p.nominalBounds = new cjs.Rectangle(-160.9,-161,322.8,323);


(lib.hole = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9DBDB8").s().p("ABuMjIh/AqIiEhvIhlinIlPhdIhKi2IhlADIgqiyIhhgHIAYiPIiAAfIAJlRIhpifIhwhgIBOgYIgihhIBphGIgBhLIDmhDIdSO4IgBCDIihAmIg0AxIBNAnIAuCAIEGAPIAABkIhcAuIiPgBIiLgPIi2BqIAAAzIguBTIhThDIjGA8IiSCLg");
	this.shape.setTransform(120.325,92.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.6,242.5,185.5);


(lib.copy2_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgqA6IAHgTQAGAEAIADQAJACAHAAQAPAAAJgIQAHgHABgPIAAgFQgMAPgSAAQgMAAgKgGQgLgGgFgLQgGgKABgOQgBgOAGgKQAFgLALgGQAKgGAMAAQATAAAMAQIAAgOIATAAIAABUQAAAWgNANQgNAMgYAAQgVAAgSgJgAgSgnQgIAIAAAMQAAANAIAHQAHAIAMAAQALAAAHgIQAIgGAAgOQAAgNgIgHQgHgIgLAAQgMAAgHAIg");
	this.shape.setTransform(14.25,11.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWAxIAAgzQABgNgGgHQgFgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQARAAAJALQAKALAAAUIAAA3g");
	this.shape_1.setTransform(3.35,9.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBGIAAheIATAAIAABegAgIgvQgFgEAAgFQAAgGAFgEQADgDAFAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_2.setTransform(-4.65,7.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAxIAAhfIATAAIAAAQQAIgRAQgBQAHABAFACIgDAVQgFgDgFAAQgKABgFAGQgGAIAAAMIAAAxg");
	this.shape_3.setTransform(-10.075,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_4.setTransform(-19.475,9.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBGIgegmIgLALIAAAbIgVAAIAAiLIAVAAIAABVIAngoIAbAAIgqAqIAsA0g");
	this.shape_5.setTransform(-29.275,7.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_6.setTransform(-40.325,9.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAwIAAgQIAvg7IgtAAIAAgUIBJAAIAAAQIgvA8IAxAAIAAATg");
	this.shape_7.setTransform(-50.2,9.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAxIAAhfIATAAIAAAQQAIgRAQgBQAHABAFACIgDAVQgFgDgFAAQgKABgFAGQgGAIAAAMIAAAxg");
	this.shape_8.setTransform(-57.875,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_9.setTransform(-67.275,9.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAwIgmhfIAWAAIAaBHIAbhHIAWAAIgmBfg");
	this.shape_10.setTransform(-77.5,9.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAxIAAgzQABgNgGgHQgFgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQARAAAJALQAKALAAAUIAAA3g");
	this.shape_11.setTransform(-88,9.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_12.setTransform(-99.125,9.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_13.setTransform(-110.125,9.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAwIgWhEIgWBEIgYAAIgchfIAWAAIATBGIAXhGIAVAAIAXBGIAThGIAWAAIgcBfg");
	this.shape_14.setTransform(-123.3,9.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_2, new cjs.Rectangle(-133,-41.7,266,94.4), null);


(lib.copy2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape.setTransform(93.275,-11.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgZBBQgKgGgGgMQgGgLAAgPQAAgOAGgKQAGgMAKgGQAJgGANAAQASAAAMAOIAAg5IAVAAIAACLIgUAAIAAgOQgMAQgTAAQgNAAgJgGgAgTAAQgHAIAAANQAAAOAHAIQAJAJALAAQALAAAIgIQAGgJABgOQgBgOgGgHQgIgIgLAAQgLAAgJAIg");
	this.shape_1.setTransform(82,-14.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AAWAxIAAgzQAAgNgFgHQgGgGgKAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIAUAAIAAAPQAEgIAIgFQAIgEAJAAQAQAAAKALQAKALAAAUIAAA3g");
	this.shape_2.setTransform(71.1,-12.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_3.setTransform(60.225,-11.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgjArIAFgTQAMAHAPAAQAIAAAGgDQAEgDAAgFQAAgEgEgCQgEgDgIgCIgRgGQgGgCgFgFQgEgGAAgKQAAgOAKgHQAJgIAQAAIAQACIAPAFIgGASQgLgGgOAAQgGAAgFACQgDADAAAEQAAAFAEADQAFACAIADIAQAFQAHADAEAFQAEAFAAAKQAAAOgLAIQgKAIgSAAQgSAAgOgHg");
	this.shape_4.setTransform(50.75,-11.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgjArIAFgTQANAHAOAAQAIAAAGgDQAEgDAAgFQABgEgFgCQgEgDgIgCIgQgGQgHgCgFgFQgEgGAAgKQAAgOAKgHQAJgIAQAAIAQACIAOAFIgFASQgLgGgOAAQgGAAgEACQgEADAAAEQAAAFAFADQAEACAIADIAQAFQAGADAFAFQAEAFAAAKQAAAOgLAIQgKAIgSAAQgTAAgNgHg");
	this.shape_5.setTransform(42.4,-11.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgZArQgLgGgFgLQgGgLABgPQgBgOAGgLQAFgLALgHQAKgGAMAAQATAAAMARIAAgPIATAAIAABfIgTAAIAAgPQgMARgTAAQgMAAgKgHgAgSgVQgIAJAAAMQAAAOAIAIQAHAIAMAAQALAAAIgIQAHgIAAgOQAAgNgHgIQgIgIgLAAQgMAAgHAIg");
	this.shape_6.setTransform(32.25,-11.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgvBCIAAiBIAUAAIAAAOQAMgQATAAQANAAAJAGQALAGAFAMQAGALAAAOQAAAPgGAKQgFAMgLAGQgJAGgNAAQgRAAgNgOIAAAvgAgTgmQgGAIgBAOQABAOAGAIQAIAIALAAQAMAAAHgJQAIgHAAgOQAAgNgIgIQgHgJgMAAQgLAAgIAIg");
	this.shape_7.setTransform(21.4,-10.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_8.setTransform(7.475,-13.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgjArIAFgTQANAHAOAAQAIAAAFgDQAFgDABgFQAAgEgFgCQgEgDgIgCIgQgGQgHgCgEgFQgFgGAAgKQAAgOAJgHQAKgIAQAAIAQACIAPAFIgGASQgLgGgOAAQgHAAgDACQgEADAAAEQAAAFAEADQAFACAJADIAPAFQAGADAFAFQAEAFAAAKQAAAOgKAIQgLAIgSAAQgSAAgOgHg");
	this.shape_9.setTransform(-0.05,-11.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_10.setTransform(-9.375,-11.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgbA3IAAAOIgUAAIAAiLIAVAAIAAA5QANgOARAAQANAAAJAGQALAGAFAMQAGAKAAAOQAAAPgGALQgFAMgLAGQgJAGgNAAQgTAAgMgQgAgTAAQgGAHgBAOQABAOAGAJQAIAIALAAQAMAAAHgJQAIgIAAgOQAAgNgIgIQgHgIgMAAQgLAAgIAIg");
	this.shape_11.setTransform(-20,-14.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_12.setTransform(-35.775,-11.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgZBBQgLgGgFgMQgGgLAAgPQAAgOAGgKQAFgMALgGQAKgGAMAAQASAAAMAOIAAg5IAUAAIAACLIgTAAIAAgOQgMAQgTAAQgMAAgKgGgAgSAAQgIAIAAANQAAAOAIAIQAHAJAMAAQALAAAIgIQAGgJABgOQgBgOgGgHQgIgIgLAAQgMAAgHAIg");
	this.shape_13.setTransform(-47.05,-14.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003781").s().p("AghAmQgJgLAAgUIAAg3IAVAAIAAAzQAAANAFAHQAGAGAKAAQAKAAAGgHQAHgGgBgMIAAg0IAVAAIAABfIgTAAIAAgPQgFAJgIAEQgIAEgJAAQgRAAgKgLg");
	this.shape_14.setTransform(-62.6,-11.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003781").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_15.setTransform(-73.525,-11.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003781").s().p("AgWBXIACgTIAFABQAIgBADgEQAEgEAAgLIAAhcIAUAAIAABeQAAASgIAJQgJAKgPAAQgGAAgEgBgAAAhBQgDgDAAgGQAAgGADgDQAEgEAGAAQAGAAADAEQAEADAAAGQAAAGgEADQgDAEgGAAQgGAAgEgEg");
	this.shape_16.setTransform(-82.375,-12.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003781").s().p("AgbAxIAAhfIATAAIAAARQAIgTAQABQAHgBAFADIgDAUQgFgCgFAAQgKAAgFAIQgGAGAAANIAAAxg");
	this.shape_17.setTransform(-91.275,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003781").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_18.setTransform(-100.925,-11.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003781").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_19.setTransform(-111.925,-11.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003781").s().p("AgLBDIg3iFIAZAAIApBsIArhsIAYAAIg3CFg");
	this.shape_20.setTransform(-124.225,-13.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_1, new cjs.Rectangle(-133,-35.7,266,94.4), null);


(lib.copy1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003781").s().p("AgSBBQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAADAEQAEAEAAAGQAAAGgEAEQgDAEgGAAQgGAAgEgEgAgSAaIAAgCQAAgIADgGQADgGAEgEIAKgIQAJgGADgEQAEgEAAgHQAAgIgGgFQgHgFgKAAQgIAAgIADQgHADgFAEIgHgTQAHgGAKgDQAJgDALAAQAMAAAKAFQAKAFAGAIQAGAJAAALQAAAJgEAGQgDAHgEAEIgMAIIgMAJQgEAFAAAGIAAACg");
	this.shape.setTransform(113.575,-21.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_1.setTransform(105.775,-20.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AASBGIgegmIgLALIAAAbIgVAAIAAiLIAVAAIAABVIAngoIAbAAIgqAqIAsA0g");
	this.shape_2.setTransform(97.925,-21.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgZArQgKgGgGgLQgGgLAAgPQAAgOAGgLQAGgLAKgHQAJgGANAAQATAAAMARIAAgPIAUAAIAABfIgUAAIAAgPQgMARgTAAQgNAAgJgHgAgTgVQgHAJAAAMQAAAOAHAIQAJAIALAAQALAAAIgIQAGgIABgOQgBgNgGgIQgIgIgLAAQgLAAgJAIg");
	this.shape_3.setTransform(86.05,-19.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgZArQgLgGgFgLQgGgLABgPQgBgOAGgLQAFgLALgHQAKgGAMAAQATAAAMARIAAgPIATAAIAABfIgTAAIAAgPQgMARgTAAQgMAAgKgHgAgSgVQgIAJAAAMQAAAOAIAIQAHAIAMAAQALAAAIgIQAHgIAAgOQAAgNgHgIQgIgIgLAAQgMAAgHAIg");
	this.shape_4.setTransform(74.55,-19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgbAwIAAheIATAAIAAAQQAIgSAQAAQAHAAAFADIgDAVQgFgCgFAAQgKAAgFAGQgGAIAAANIAAAvg");
	this.shape_5.setTransform(66.075,-19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_6.setTransform(56.675,-19.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgqA6IAHgTQAGAEAIADQAJACAHAAQAQAAAIgIQAIgHAAgPIAAgFQgMAPgSAAQgMAAgKgGQgLgGgFgLQgGgKABgOQgBgOAGgKQAFgLALgGQAKgGAMAAQATAAAMAQIAAgOIATAAIAABUQAAAWgNANQgNAMgYAAQgVAAgSgJgAgSgnQgIAIAAAMQAAANAIAHQAHAIAMAAQAMAAAGgIQAIgGAAgOQAAgNgIgHQgGgIgMAAQgMAAgHAIg");
	this.shape_7.setTransform(45.4,-17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgMBBQgHgHABgNIAAhzIATAAIAABvQAAAFACADQADADAFAAQAEAAACgCIACATQgFACgJAAQgMAAgFgGg");
	this.shape_8.setTransform(33.35,-21.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_9.setTransform(24.825,-19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_10.setTransform(14.125,-19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgZBBQgLgGgFgMQgGgLABgPQgBgOAGgKQAFgMALgGQAKgGAMAAQASAAAMAOIAAg5IAUAAIAACLIgTAAIAAgOQgMAQgTAAQgMAAgKgGgAgSAAQgIAIAAANQAAAOAIAIQAHAJAMAAQALAAAIgIQAHgJAAgOQAAgOgHgHQgIgIgLAAQgMAAgHAIg");
	this.shape_11.setTransform(2.55,-21.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_12.setTransform(-12.575,-19.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgZBBQgKgGgGgMQgFgLgBgPQABgOAFgKQAGgMAKgGQAJgGANAAQASAAALAOIAAg5IAWAAIAACLIgUAAIAAgOQgMAQgTAAQgNAAgJgGgAgTAAQgHAIAAANQAAAOAHAIQAJAJALAAQALAAAIgIQAGgJAAgOQAAgOgGgHQgIgIgLAAQgLAAgJAIg");
	this.shape_13.setTransform(-23.85,-21.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003781").s().p("AgbAwIAAheIATAAIAAAQQAIgSAQAAQAHAAAFADIgDAVQgFgCgFAAQgKAAgFAGQgGAIAAANIAAAvg");
	this.shape_14.setTransform(-32.325,-19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_15.setTransform(-41.725,-19.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_16.setTransform(-52.175,-19.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003781").s().p("AASBGIgegmIgLALIAAAbIgVAAIAAiLIAVAAIAABVIAngoIAbAAIgqAqIAsA0g");
	this.shape_17.setTransform(-61.975,-21.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003781").s().p("AgbAwIAAheIATAAIAAAQQAIgSAQAAQAHAAAFADIgDAVQgFgCgFAAQgKAAgFAGQgGAIAAANIAAAvg");
	this.shape_18.setTransform(-70.825,-19.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_19.setTransform(-80.225,-19.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003781").s().p("AgKAwIgmhfIAWAAIAaBHIAbhHIAWAAIgmBfg");
	this.shape_20.setTransform(-90.45,-19.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_21.setTransform(-103.325,-20.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_22.setTransform(-111.825,-19.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003781").s().p("AAfBDIAAg6Ig9AAIAAA6IgXAAIAAiFIAXAAIAAA3IA9AAIAAg3IAXAAIAACFg");
	this.shape_23.setTransform(-124.025,-21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(-133,-35.7,266,46.7), null);


(lib.blur_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blur();
	this.instance.setTransform(-72.1,-110.55,1,1,25.1073);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-110.5,262.79999999999995,221.3);


(lib.ball = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bal();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-65.5,135,131);


(lib.promoMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApIA+IAAh7ISRAAIAAB7g");
	mask.setTransform(-13,-4.55);

	// copy1
	this.copy1 = new lib.promocopy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(-13,-1.5);

	var maskedShapeInstanceList = [this.copy1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApIA8IAAh3ISRAAIAAB3g");
	mask_1.setTransform(-27,7.45);

	// copy2
	this.copy2 = new lib.promocopy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(-28.05,9.65,1,1,0,0,0,6.2,-4.5);

	var maskedShapeInstanceList = [this.copy2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// Layer_3
	this.instance = new lib.triangle("synched",0);
	this.instance.setTransform(0.9,0.9,0.11,0.11,0,0,0,4.5,4.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 253, 210, 92, 0)];
	this.instance.cache(-542,-542,1085,1084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promoMC, new cjs.Rectangle(-71.5,-62.4,136.5,122.19999999999999), null);


(lib.mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// red
	this.instance = new lib.square();
	this.instance.setTransform(1812.15,540.1,0.7389,1,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:0,regY:0,x:1811.8305,y:540},0).wait(1).to({x:1811.3102,y:539.9999},0).wait(1).to({x:1810.4208},0).wait(1).to({x:1809.1423,y:539.9997},0).wait(1).to({x:1807.4532,y:539.9996},0).wait(1).to({x:1805.3304,y:539.9994},0).wait(1).to({x:1802.7487,y:539.9992},0).wait(1).to({scaleX:0.7388,x:1799.6809,y:539.9989},0).wait(1).to({x:1796.0975,y:539.9986},0).wait(1).to({x:1791.9664,y:539.9982},0).wait(1).to({scaleX:0.7387,x:1787.2527,y:539.9978},0).wait(1).to({x:1781.9184,y:539.9973},0).wait(1).to({x:1775.9221,y:539.9968},0).wait(1).to({scaleX:0.7386,x:1769.2186,y:539.9962},0).wait(1).to({scaleX:0.7385,x:1761.759,y:539.9955},0).wait(1).to({x:1753.4894,y:539.9948},0).wait(1).to({scaleX:0.7384,x:1744.3518,y:539.994},0).wait(1).to({scaleX:0.7383,x:1734.2827,y:539.9931},0).wait(1).to({x:1723.2137,y:539.9921},0).wait(1).to({scaleX:0.7382,x:1711.0709,y:539.9911},0).wait(1).to({scaleX:0.7381,x:1697.7755,y:539.9899},0).wait(1).to({scaleX:0.738,x:1683.2438,y:539.9886},0).wait(1).to({scaleX:0.7378,x:1667.389,y:539.9872},0).wait(1).to({scaleX:0.7377,x:1650.1223,y:539.9856},0).wait(1).to({scaleX:0.7376,x:1631.3563,y:539.984},0).wait(1).to({scaleX:0.7374,x:1611.0088,y:539.9822},0).wait(1).to({scaleX:0.7373,x:1589.0097,y:539.9802},0).wait(1).to({scaleX:0.7371,x:1565.3085,y:539.9781},0).wait(1).to({scaleX:0.7369,x:1539.8849,y:539.9759},0).wait(1).to({scaleX:0.7367,x:1512.7611,y:539.9735},0).wait(1).to({scaleX:0.7365,x:1484.0137,y:539.9709},0).wait(1).to({scaleX:0.7363,x:1453.7847,y:539.9682},0).wait(1).to({scaleX:0.736,x:1422.2872,y:539.9655},0).wait(1).to({scaleX:0.7358,x:1389.8022,y:539.9626},0).wait(1).to({scaleX:0.7355,x:1356.6664,y:539.9596},0).wait(1).to({scaleX:0.7353,x:1323.2489,y:539.9567},0).wait(1).to({scaleX:0.735,x:1289.9235,y:539.9537},0).wait(1).to({scaleX:0.7348,x:1257.0399,y:539.9508},0).wait(1).to({scaleX:0.7345,x:1224.9008,y:539.948},0).wait(1).to({scaleX:0.7343,x:1193.7489,y:539.9452},0).wait(1).to({scaleX:0.7341,x:1163.7623,y:539.9425},0).wait(1).to({scaleX:0.7339,x:1135.0587,y:539.94},0).wait(1).to({scaleX:0.7337,x:1107.7034,y:539.9376},0).wait(1).to({scaleX:0.7335,x:1081.7198,y:539.9353},0).wait(1).to({scaleX:0.7333,x:1057.0995,y:539.9331},0).wait(1).to({scaleX:0.7331,x:1033.8119,y:539.931},0).wait(1).to({scaleX:0.733,x:1011.8113,y:539.9291},0).wait(1).to({scaleX:0.7328,x:991.0426,y:539.9272},0).wait(1).to({scaleX:0.7327,x:971.4459,y:539.9255},0).wait(1).to({scaleX:0.7325,x:952.9593,y:539.9238},0).wait(1).to({scaleX:0.7324,x:935.5213,y:539.9223},0).wait(1).to({scaleX:0.7323,x:919.0718,y:539.9208},0).wait(1).to({scaleX:0.7322,x:903.5531,y:539.9195},0).wait(1).to({scaleX:0.732,x:888.9107,y:539.9182},0).wait(1).to({scaleX:0.7319,x:875.0932,y:539.9169},0).wait(1).to({scaleX:0.7318,x:862.0523,y:539.9158},0).wait(1).to({x:849.7433,y:539.9147},0).wait(1).to({scaleX:0.7317,x:838.1241,y:539.9137},0).wait(1).to({scaleX:0.7316,x:827.1562,y:539.9127},0).wait(1).to({scaleX:0.7315,x:816.8033,y:539.9118},0).wait(1).to({scaleX:0.7314,x:807.0322,y:539.9109},0).wait(1).to({x:797.8117,y:539.9101},0).wait(1).to({scaleX:0.7313,x:789.1131,y:539.9093},0).wait(1).to({scaleX:0.7312,x:780.9096,y:539.9086},0).wait(1).to({x:773.1764,y:539.9079},0).wait(1).to({scaleX:0.7311,x:765.8905,y:539.9073},0).wait(1).to({x:759.0302,y:539.9067},0).wait(1).to({scaleX:0.731,x:752.5755,y:539.9061},0).wait(1).to({x:746.5078,y:539.9055},0).wait(1).to({scaleX:0.7309,x:740.8096,y:539.905},0).wait(1).to({x:735.4645,y:539.9046},0).wait(1).to({x:730.4573,y:539.9041},0).wait(1).to({scaleX:0.7308,x:725.7737,y:539.9037},0).wait(1).to({x:721.4002,y:539.9033},0).wait(1).to({x:717.3242,y:539.903},0).wait(1).to({scaleX:0.7307,x:713.5339,y:539.9026},0).wait(1).to({x:710.0181,y:539.9023},0).wait(1).to({x:706.7663,y:539.902},0).wait(1).to({x:703.7686,y:539.9018},0).wait(1).to({scaleX:0.7306,x:701.0156,y:539.9015},0).wait(1).to({x:698.4985,y:539.9013},0).wait(1).to({x:696.209,y:539.9011},0).wait(1).to({x:694.139,y:539.9009},0).wait(1).to({x:692.2811,y:539.9007},0).wait(1).to({x:690.6283,y:539.9006},0).wait(1).to({x:689.1736,y:539.9005},0).wait(1).to({scaleX:0.7305,x:687.9107,y:539.9003},0).wait(1).to({x:686.8336},0).wait(1).to({x:685.9363,y:539.9002},0).wait(1).to({x:685.2134,y:539.9001},0).wait(1).to({x:684.6596},0).wait(1).to({x:684.2698,y:539.9},0).wait(1).to({x:684.0393},0).wait(1).to({regX:0.1,x:684.05,y:540},0).wait(1));

	// green
	this.instance_1 = new lib.square();
	this.instance_1.setTransform(1660,540);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({scaleX:0.9998,x:1659.7213},0).wait(1).to({scaleX:0.9993,x:1658.8636},0).wait(1).to({scaleX:0.9984,x:1657.3925},0).wait(1).to({scaleX:0.997,x:1655.2707},0).wait(1).to({scaleX:0.9952,x:1652.4575},0).wait(1).to({scaleX:0.993,x:1648.9084},0).wait(1).to({scaleX:0.9902,x:1644.5748},0).wait(1).to({scaleX:0.987,x:1639.4034},0).wait(1).to({scaleX:0.9831,x:1633.3359},0).wait(1).to({scaleX:0.9787,x:1626.3081},0).wait(1).to({scaleX:0.9736,x:1618.2493},0).wait(1).to({scaleX:0.9678,x:1609.0821},0).wait(1).to({scaleX:0.9613,x:1598.7208},0).wait(1).to({scaleX:0.9539,x:1587.0712},0).wait(1).to({scaleX:0.9457,x:1574.0299},0).wait(1).to({scaleX:0.9365,x:1559.4831},0).wait(1).to({scaleX:0.9262,x:1543.3065},0).wait(1).to({scaleX:0.9149,x:1525.3649},0).wait(1).to({scaleX:0.9023,x:1505.5128},0).wait(1).to({scaleX:0.8885,x:1483.5953},0).wait(1).to({scaleX:0.8732,x:1459.4515},0).wait(1).to({scaleX:0.8565,x:1432.9187},0).wait(1).to({scaleX:0.8381,x:1403.8412},0).wait(1).to({scaleX:0.818,x:1372.082},0).wait(1).to({scaleX:0.7962,x:1337.5402},0).wait(1).to({scaleX:0.7725,x:1300.174},0).wait(1).to({scaleX:0.7472,x:1260.0277},0).wait(1).to({scaleX:0.7201,x:1217.2602},0).wait(1).to({scaleX:0.6916,x:1172.1678},0).wait(1).to({scaleX:0.6619,x:1125.1919},0).wait(1).to({scaleX:0.6314,x:1076.9038},0).wait(1).to({scaleX:0.6005,x:1027.9636},0).wait(1).to({scaleX:0.5696,x:979.0587},0).wait(1).to({scaleX:0.5391,x:930.8381},0).wait(1).to({scaleX:0.5094,x:883.8585},0).wait(1).to({scaleX:0.4807,x:838.5523},0).wait(1).to({scaleX:0.4534,x:795.221},0).wait(1).to({scaleX:0.4273,x:754.0459},0).wait(1).to({scaleX:0.4027,x:715.1092},0).wait(1).to({scaleX:0.3795,x:678.4186},0).wait(1).to({scaleX:0.3577,x:643.9286},0).wait(1).to({scaleX:0.3373,x:611.5597},0).wait(1).to({scaleX:0.3181,x:581.212},0).wait(1).to({scaleX:0.3001,x:552.7753},0).wait(1).to({scaleX:0.2833,x:526.1359},0).wait(1).to({scaleX:0.2675,x:501.1814},0).wait(1).to({scaleX:0.2527,x:477.8033},0).wait(1).to({scaleX:0.2389,x:455.8987},0).wait(1).to({scaleX:0.2259,x:435.3711},0).wait(1).to({scaleX:0.2137,x:416.1308},0).wait(1).to({scaleX:0.2023,x:398.0947},0).wait(1).to({scaleX:0.1916,x:381.1861},0).wait(1).to({scaleX:0.1816,x:365.3344},0).wait(1).to({scaleX:0.1722,x:350.4746},0).wait(1).to({scaleX:0.1634,x:336.547},0).wait(1).to({scaleX:0.1552,x:323.4967},0).wait(1).to({scaleX:0.1474,x:311.2731},0).wait(1).to({scaleX:0.1402,x:299.8298},0).wait(1).to({scaleX:0.1334,x:289.1237},0).wait(1).to({scaleX:0.1271,x:279.1153},0).wait(1).to({scaleX:0.1212,x:269.7681},0).wait(1).to({scaleX:0.1157,x:261.048},0).wait(1).to({scaleX:0.1106,x:252.9239},0).wait(1).to({scaleX:0.1058,x:245.3664},0).wait(1).to({scaleX:0.1013,x:238.3487},0).wait(1).to({scaleX:0.0972,x:231.8455},0).wait(1).to({scaleX:0.0934,x:225.8333},0).wait(1).to({scaleX:0.0899,x:220.2904},0).wait(1).to({scaleX:0.0867,x:215.1962},0).wait(1).to({scaleX:0.0838,x:210.5316},0).wait(1).to({scaleX:0.0811,x:206.2787},0).wait(1).to({scaleX:0.0786,x:202.4207},0).wait(1).to({scaleX:0.0764,x:198.9419},0).wait(1).to({scaleX:0.0745,x:195.8273},0).wait(1).to({scaleX:0.0727,x:193.063},0).wait(1).to({scaleX:0.0712,x:190.6359},0).wait(1).to({scaleX:0.0698,x:188.5335},0).wait(1).to({scaleX:0.0687,x:186.7441},0).wait(1).to({scaleX:0.0678,x:185.2567},0).wait(1).to({scaleX:0.067,x:184.0607},0).wait(1).to({scaleX:0.0664,x:183.1462},0).wait(1).to({scaleX:0.066,x:182.5039},0).wait(1).to({scaleX:0.0658,x:182.1246},0).wait(1).to({scaleX:0.0657,x:182},0).wait(7));

	// blue
	this.instance_2 = new lib.square();
	this.instance_2.setTransform(1660,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.9998,x:1659.6943},0).wait(1).to({scaleX:0.9993,x:1658.7536},0).wait(1).to({scaleX:0.9984,x:1657.1402},0).wait(1).to({scaleX:0.997,x:1654.8132},0).wait(1).to({scaleX:0.9952,x:1651.7278},0).wait(1).to({scaleX:0.993,x:1647.8353},0).wait(1).to({scaleX:0.9902,x:1643.0824},0).wait(1).to({scaleX:0.987,x:1637.4107},0).wait(1).to({scaleX:0.9831,x:1630.7561},0).wait(1).to({scaleX:0.9787,x:1623.0483},0).wait(1).to({scaleX:0.9736,x:1614.2099},0).wait(1).to({scaleX:0.9678,x:1604.1557},0).wait(1).to({scaleX:0.9613,x:1592.7919},0).wait(1).to({scaleX:0.9539,x:1580.0152},0).wait(1).to({scaleX:0.9457,x:1565.7121},0).wait(1).to({scaleX:0.9365,x:1549.7578},0).wait(1).to({scaleX:0.9262,x:1532.0161},0).wait(1).to({scaleX:0.9149,x:1512.3386},0).wait(1).to({scaleX:0.9023,x:1490.5658},0).wait(1).to({scaleX:0.8885,x:1466.5278},0).wait(1).to({scaleX:0.8732,x:1440.0479},0).wait(1).to({scaleX:0.8565,x:1410.9481},0).wait(1).to({scaleX:0.8381,x:1379.0573},0).wait(1).to({scaleX:0.818,x:1344.2253},0).wait(1).to({scaleX:0.7962,x:1306.3415},0).wait(1).to({scaleX:0.7725,x:1265.3599},0).wait(1).to({scaleX:0.7472,x:1221.3294},0).wait(1).to({scaleX:0.7201,x:1174.4241},0).wait(1).to({scaleX:0.6916,x:1124.9689},0).wait(1).to({scaleX:0.6619,x:1073.4479},0).wait(1).to({scaleX:0.6314,x:1020.4879},0).wait(1).to({scaleX:0.6005,x:966.8126},0).wait(1).to({scaleX:0.5696,x:913.176},0).wait(1).to({scaleX:0.5391,x:860.29},0).wait(1).to({scaleX:0.5094,x:808.7649},0).wait(1).to({scaleX:0.4807,x:759.0753},0).wait(1).to({scaleX:0.4534,x:711.5516},0).wait(1).to({scaleX:0.4273,x:666.3926},0).wait(1).to({scaleX:0.4027,x:623.6888},0).wait(1).to({scaleX:0.3795,x:583.4482},0).wait(1).to({scaleX:0.3577,x:545.6213},0).wait(1).to({scaleX:0.3373,x:510.1207},0).wait(1).to({scaleX:0.3181,x:476.8368},0).wait(1).to({scaleX:0.3001,x:445.6487},0).wait(1).to({scaleX:0.2833,x:416.4318},0).wait(1).to({scaleX:0.2675,x:389.0629},0).wait(1).to({scaleX:0.2527,x:363.4229},0).wait(1).to({scaleX:0.2389,x:339.399},0).wait(1).to({scaleX:0.2259,x:316.8854},0).wait(1).to({scaleX:0.2137,x:295.7836},0).wait(1).to({scaleX:0.2023,x:276.0024},0).wait(1).to({scaleX:0.1916,x:257.4578},0).wait(1).to({scaleX:0.1816,x:240.0724},0).wait(1).to({scaleX:0.1722,x:223.7749},0).wait(1).to({scaleX:0.1634,x:208.4998},0).wait(1).to({scaleX:0.1552,x:194.1868},0).wait(1).to({scaleX:0.1474,x:180.7806},0).wait(1).to({scaleX:0.1402,x:168.2301},0).wait(1).to({scaleX:0.1334,x:156.4882},0).wait(1).to({scaleX:0.1271,x:145.5115},0).wait(1).to({scaleX:0.1212,x:135.2598},0).wait(1).to({scaleX:0.1157,x:125.6961},0).wait(1).to({scaleX:0.1106,x:116.7859},0).wait(1).to({scaleX:0.1058,x:108.4973},0).wait(1).to({scaleX:0.1013,x:100.8006},0).wait(1).to({scaleX:0.0972,x:93.6681},0).wait(1).to({scaleX:0.0934,x:87.0743},0).wait(1).to({scaleX:0.0899,x:80.9951},0).wait(1).to({scaleX:0.0867,x:75.408},0).wait(1).to({scaleX:0.0838,x:70.2921},0).wait(1).to({scaleX:0.0811,x:65.6277},0).wait(1).to({scaleX:0.0786,x:61.3965},0).wait(1).to({scaleX:0.0764,x:57.581},0).wait(1).to({scaleX:0.0745,x:54.1651},0).wait(1).to({scaleX:0.0727,x:51.1334},0).wait(1).to({scaleX:0.0712,x:48.4714},0).wait(1).to({scaleX:0.0698,x:46.1656},0).wait(1).to({scaleX:0.0687,x:44.2032},0).wait(1).to({scaleX:0.0678,x:42.5718},0).wait(1).to({scaleX:0.067,x:41.2601},0).wait(1).to({scaleX:0.0664,x:40.2572},0).wait(1).to({scaleX:0.066,x:39.5526},0).wait(1).to({scaleX:0.0658,x:39.1367},0).wait(1).to({scaleX:0.0657,x:39},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-0.1,2207.5,1080.1);


(lib.LogoWhite = function(mode,startPosition,loop,reversed) {
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
	this.logoBlue = new lib.logoWhite2();
	this.logoBlue.name = "logoBlue";
	this.logoBlue.setTransform(0,0,0.85,0.8489);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,22.6);


(lib.logoW = function(mode,startPosition,loop,reversed) {
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
	this.logoBlue = new lib.logoBlue();
	this.logoBlue.name = "logoBlue";
	this.logoBlue.setTransform(0,0,0.5262,0.5259);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.2,14);


(lib.ctanew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask.setTransform(0,-8);

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
	mask_1.setTransform(0,22);

	// line2
	this.copy2_2 = new lib.copy2_2();
	this.copy2_2.name = "copy2_2";
	this.copy2_2.setTransform(20.05,0,1,1,0,0,0,-0.1,-6.7);

	var maskedShapeInstanceList = [this.copy2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-113,-26,246,66), null);


(lib.copy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(0,0,0,0), null);


(lib._break = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_218 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(218).call(this.frame_218).wait(1));

	// temp
	this.instance = new lib.triangle("single",0);
	this.instance.setTransform(108.4,-40.25,0.5649,0.5649,0,0,0,0.1,0);
	this.instance.alpha = 0.9492;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({x:121.5,y:-55.1,alpha:0.5},17,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// ball
	this.instance_1 = new lib.ball("synched",0);
	this.instance_1.setTransform(-136.25,-131.45,0.9,0.9,-119.9991,0,0,0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1.9863,scaleY:1.9863,rotation:0,x:278.75,y:-360.7},144,cjs.Ease.quartOut).wait(1));

	// shardz
	this.instance_2 = new lib.shards();
	this.instance_2.setTransform(7.15,-173.8,0.4567,0.4567,0,0,0,-40.4,54.6);
	this.instance_2.compositeOperation = "hard-light";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.8306,scaleY:0.8306,x:40.732,y:-214.3191,alpha:0.9925},0).wait(1).to({scaleX:1.0621,scaleY:1.0621,x:50.0984,y:-223.9562,alpha:0.9878},0).wait(1).to({scaleX:1.2365,scaleY:1.2365,x:57.1572,y:-231.2188,alpha:0.9843},0).wait(1).to({scaleX:1.378,scaleY:1.378,x:62.8836,y:-237.1106,alpha:0.9815},0).wait(1).to({scaleX:1.4975,scaleY:1.4975,x:67.7184,y:-242.0852,alpha:0.9791},0).wait(1).to({scaleX:1.6009,scaleY:1.6009,x:71.9054,y:-246.3931,alpha:0.977},0).wait(1).to({scaleX:1.6921,scaleY:1.6921,x:75.5956,y:-250.1899,alpha:0.9751},0).wait(1).to({scaleX:1.7736,scaleY:1.7736,x:78.8904,y:-253.5799,alpha:0.9735},0).wait(1).to({scaleX:1.847,scaleY:1.847,x:81.8617,y:-256.637,alpha:0.972},0).wait(1).to({scaleX:1.9137,scaleY:1.9137,x:84.5625,y:-259.4158,alpha:0.9707},0).wait(1).to({scaleX:1.9748,scaleY:1.9748,x:87.0332,y:-261.958,alpha:0.9695},0).wait(1).to({scaleX:2.0309,scaleY:2.0309,x:89.3056,y:-264.296,alpha:0.9683},0).wait(1).to({scaleX:2.0828,scaleY:2.0828,x:91.405,y:-266.456,alpha:0.9673},0).wait(1).to({scaleX:2.1309,scaleY:2.1309,x:93.3519,y:-268.4591,alpha:0.9663},0).wait(1).to({scaleX:2.1757,scaleY:2.1757,x:95.1634,y:-270.323,alpha:0.9654},0).wait(1).to({scaleX:2.2175,scaleY:2.2175,x:96.8538,y:-272.0622,alpha:0.9646},0).wait(1).to({scaleX:2.2565,scaleY:2.2565,x:98.4352,y:-273.6893,alpha:0.9638},0).wait(1).to({scaleX:2.2932,scaleY:2.2932,x:99.9179,y:-275.2148,alpha:0.9631},0).wait(1).to({scaleX:2.3276,scaleY:2.3276,x:101.3108,y:-276.6479,alpha:0.9624},0).wait(1).to({scaleX:2.36,scaleY:2.36,x:102.6216,y:-277.9967,alpha:0.9617},0).wait(1).to({scaleX:2.3905,scaleY:2.3905,x:103.8573,y:-279.268,alpha:0.9611},0).wait(1).to({scaleX:2.4194,scaleY:2.4194,x:105.0237,y:-280.4681,alpha:0.9605},0).wait(1).to({scaleX:2.4466,scaleY:2.4466,x:106.1261,y:-281.6024,alpha:0.96},0).wait(1).to({scaleX:2.4724,scaleY:2.4724,x:107.1693,y:-282.6758,alpha:0.9594},0).wait(1).to({scaleX:2.4968,scaleY:2.4968,x:108.1576,y:-283.6926,alpha:0.959},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:109.0947,y:-284.6567,alpha:0.9585},0).wait(1).to({scaleX:2.5419,scaleY:2.5419,x:109.984,y:-285.5717,alpha:0.9581},0).wait(1).to({scaleX:2.5628,scaleY:2.5628,x:110.8287,y:-286.4408,alpha:0.9576},0).wait(1).to({scaleX:2.5826,scaleY:2.5826,x:111.6315,y:-287.2669,alpha:0.9572},0).wait(1).to({scaleX:2.6015,scaleY:2.6015,x:112.3952,y:-288.0526,alpha:0.9569},0).wait(1).to({scaleX:2.6195,scaleY:2.6195,x:113.122,y:-288.8004,alpha:0.9565},0).wait(1).to({scaleX:2.6366,scaleY:2.6366,x:113.8141,y:-289.5124,alpha:0.9561},0).wait(1).to({scaleX:2.6529,scaleY:2.6529,x:114.4734,y:-290.1909,alpha:0.9558},0).wait(1).to({scaleX:2.6684,scaleY:2.6684,x:115.1019,y:-290.8375,alpha:0.9555},0).wait(1).to({scaleX:2.6832,scaleY:2.6832,x:115.7013,y:-291.4542,alpha:0.9552},0).wait(1).to({scaleX:2.6973,scaleY:2.6973,x:116.273,y:-292.0424,alpha:0.9549},0).wait(1).to({scaleX:2.7108,scaleY:2.7108,x:116.8186,y:-292.6037,alpha:0.9547},0).wait(1).to({scaleX:2.7237,scaleY:2.7237,x:117.3394,y:-293.1396,alpha:0.9544},0).wait(1).to({scaleX:2.736,scaleY:2.736,x:117.8367,y:-293.6512,alpha:0.9541},0).wait(1).to({scaleX:2.7477,scaleY:2.7477,x:118.3116,y:-294.1399,alpha:0.9539},0).wait(1).to({scaleX:2.7589,scaleY:2.7589,x:118.7653,y:-294.6067,alpha:0.9537},0).wait(1).to({scaleX:2.7696,scaleY:2.7696,x:119.1988,y:-295.0527,alpha:0.9535},0).wait(1).to({scaleX:2.7799,scaleY:2.7799,x:119.613,y:-295.4789,alpha:0.9533},0).wait(1).to({scaleX:2.7897,scaleY:2.7897,x:120.0089,y:-295.8862,alpha:0.9531},0).wait(1).to({scaleX:2.799,scaleY:2.799,x:120.3873,y:-296.2756,alpha:0.9529},0).wait(1).to({scaleX:2.808,scaleY:2.808,x:120.749,y:-296.6477,alpha:0.9527},0).wait(1).to({scaleX:2.8165,scaleY:2.8165,x:121.0949,y:-297.0036,alpha:0.9525},0).wait(1).to({scaleX:2.8247,scaleY:2.8247,x:121.4255,y:-297.3437,alpha:0.9524},0).wait(1).to({scaleX:2.8325,scaleY:2.8325,x:121.7416,y:-297.6689,alpha:0.9522},0).wait(1).to({scaleX:2.8399,scaleY:2.8399,x:122.0437,y:-297.9799,alpha:0.9521},0).wait(1).to({scaleX:2.8471,scaleY:2.8471,x:122.3326,y:-298.2771,alpha:0.9519},0).wait(1).to({scaleX:2.8539,scaleY:2.8539,x:122.6088,y:-298.5613,alpha:0.9518},0).wait(1).to({scaleX:2.8604,scaleY:2.8604,x:122.8728,y:-298.8329,alpha:0.9516},0).wait(1).to({scaleX:2.8667,scaleY:2.8667,x:123.1252,y:-299.0925,alpha:0.9515},0).wait(1).to({scaleX:2.8726,scaleY:2.8726,x:123.3664,y:-299.3407,alpha:0.9514},0).wait(1).to({scaleX:2.8783,scaleY:2.8783,x:123.5969,y:-299.5779,alpha:0.9513},0).wait(1).to({scaleX:2.8838,scaleY:2.8838,x:123.8171,y:-299.8044,alpha:0.9512},0).wait(1).to({scaleX:2.889,scaleY:2.889,x:124.0275,y:-300.0209,alpha:0.9511},0).wait(1).to({scaleX:2.8939,scaleY:2.8939,x:124.2285,y:-300.2277,alpha:0.951},0).wait(1).to({scaleX:2.8987,scaleY:2.8987,x:124.4204,y:-300.4251,alpha:0.9509},0).wait(1).to({scaleX:2.9032,scaleY:2.9032,x:124.6036,y:-300.6136,alpha:0.9508},0).wait(1).to({scaleX:2.9075,scaleY:2.9075,x:124.7785,y:-300.7936,alpha:0.9507},0).wait(1).to({scaleX:2.9117,scaleY:2.9117,x:124.9454,y:-300.9653,alpha:0.9506},0).wait(1).to({scaleX:2.9156,scaleY:2.9156,x:125.1046,y:-301.1291,alpha:0.9505},0).wait(1).to({scaleX:2.9193,scaleY:2.9193,x:125.2564,y:-301.2854},0).wait(1).to({scaleX:2.9229,scaleY:2.9229,x:125.4012,y:-301.4343,alpha:0.9504},0).wait(1).to({scaleX:2.9263,scaleY:2.9263,x:125.5392,y:-301.5763,alpha:0.9503},0).wait(1).to({scaleX:2.9296,scaleY:2.9296,x:125.6706,y:-301.7115},0).wait(1).to({scaleX:2.9327,scaleY:2.9327,x:125.7958,y:-301.8403,alpha:0.9502},0).wait(1).to({scaleX:2.9356,scaleY:2.9356,x:125.9149,y:-301.9629,alpha:0.9501},0).wait(1).to({scaleX:2.9384,scaleY:2.9384,x:126.0283,y:-302.0795},0).wait(1).to({scaleX:2.9411,scaleY:2.9411,x:126.1361,y:-302.1904,alpha:0.95},0).wait(1).to({scaleX:2.9436,scaleY:2.9436,x:126.2386,y:-302.2959},0).wait(1).to({scaleX:2.946,scaleY:2.946,x:126.3359,y:-302.396,alpha:0.9499},0).wait(1).to({scaleX:2.9483,scaleY:2.9483,x:126.4283,y:-302.4911},0).wait(1).to({scaleX:2.9505,scaleY:2.9505,x:126.516,y:-302.5813,alpha:0.9498},0).wait(1).to({scaleX:2.9525,scaleY:2.9525,x:126.5992,y:-302.6669},0).wait(1).to({scaleX:2.9545,scaleY:2.9545,x:126.678,y:-302.748},0).wait(1).to({scaleX:2.9563,scaleY:2.9563,x:126.7527,y:-302.8248,alpha:0.9497},0).wait(1).to({scaleX:2.9581,scaleY:2.9581,x:126.8233,y:-302.8975},0).wait(1).to({scaleX:2.9597,scaleY:2.9597,x:126.89,y:-302.9662,alpha:0.9496},0).wait(1).to({scaleX:2.9613,scaleY:2.9613,x:126.9531,y:-303.0311},0).wait(1).to({scaleX:2.9627,scaleY:2.9627,x:127.0127,y:-303.0923},0).wait(1).to({scaleX:2.9641,scaleY:2.9641,x:127.0688,y:-303.1501},0).wait(1).to({scaleX:2.9654,scaleY:2.9654,x:127.1217,y:-303.2045,alpha:0.9495},0).wait(1).to({scaleX:2.9667,scaleY:2.9667,x:127.1715,y:-303.2557},0).wait(1).to({scaleX:2.9678,scaleY:2.9678,x:127.2183,y:-303.3039},0).wait(1).to({scaleX:2.9689,scaleY:2.9689,x:127.2622,y:-303.3491},0).wait(1).to({scaleX:2.9699,scaleY:2.9699,x:127.3035,y:-303.3915,alpha:0.9494},0).wait(1).to({scaleX:2.9709,scaleY:2.9709,x:127.3421,y:-303.4312},0).wait(1).to({scaleX:2.9718,scaleY:2.9718,x:127.3782,y:-303.4684},0).wait(1).to({scaleX:2.9726,scaleY:2.9726,x:127.4119,y:-303.5031},0).wait(1).to({scaleX:2.9734,scaleY:2.9734,x:127.4433,y:-303.5354},0).wait(1).to({scaleX:2.9741,scaleY:2.9741,x:127.4726,y:-303.5655},0).wait(1).to({scaleX:2.9748,scaleY:2.9748,x:127.4997,y:-303.5935,alpha:0.9493},0).wait(1).to({scaleX:2.9754,scaleY:2.9754,x:127.525,y:-303.6194},0).wait(1).to({scaleX:2.976,scaleY:2.976,x:127.5483,y:-303.6434},0).wait(1).to({scaleX:2.9765,scaleY:2.9765,x:127.5698,y:-303.6656},0).wait(1).to({scaleX:2.977,scaleY:2.977,x:127.5897,y:-303.686},0).wait(1).to({scaleX:2.9774,scaleY:2.9774,x:127.6079,y:-303.7048},0).wait(1).to({scaleX:2.9779,scaleY:2.9779,x:127.6247,y:-303.722},0).wait(1).to({scaleX:2.9782,scaleY:2.9782,x:127.6399,y:-303.7377},0).wait(1).to({scaleX:2.9786,scaleY:2.9786,x:127.6538,y:-303.752},0).wait(1).to({scaleX:2.9789,scaleY:2.9789,x:127.6665,y:-303.765},0).wait(1).to({scaleX:2.9792,scaleY:2.9792,x:127.6779,y:-303.7768},0).wait(1).to({scaleX:2.9794,scaleY:2.9794,x:127.6882,y:-303.7873,alpha:0.9492},0).wait(1).to({scaleX:2.9797,scaleY:2.9797,x:127.6974,y:-303.7968},0).wait(1).to({scaleX:2.9799,scaleY:2.9799,x:127.7056,y:-303.8052},0).wait(1).to({scaleX:2.98,scaleY:2.98,x:127.7128,y:-303.8127},0).wait(1).to({scaleX:2.9802,scaleY:2.9802,x:127.7192,y:-303.8193},0).wait(1).to({scaleX:2.9803,scaleY:2.9803,x:127.7248,y:-303.825},0).wait(1).to({scaleX:2.9805,scaleY:2.9805,x:127.7297,y:-303.83},0).wait(1).to({scaleX:2.9806,scaleY:2.9806,x:127.7338,y:-303.8343},0).wait(1).to({x:127.7374,y:-303.838},0).wait(1).to({scaleX:2.9807,scaleY:2.9807,x:127.7403,y:-303.841},0).wait(1).to({scaleX:2.9808,scaleY:2.9808,x:127.7428,y:-303.8435},0).wait(1).to({x:127.7448,y:-303.8456},0).wait(1).to({scaleX:2.9809,scaleY:2.9809,x:127.7464,y:-303.8472},0).wait(1).to({x:127.7476,y:-303.8485},0).wait(1).to({x:127.7485,y:-303.8494},0).wait(1).to({x:127.7491,y:-303.8501},0).wait(1).to({x:127.7496,y:-303.8505},0).wait(1).to({scaleX:2.981,scaleY:2.981,x:127.7498,y:-303.8508},0).wait(1).to({x:127.7499,y:-303.8509},0).wait(1).to({x:127.75},0).wait(1).to({regX:-40.4,regY:54.7,x:7.3,y:-140.95},0).wait(1));

	// blur
	this.instance_3 = new lib.blur_1();
	this.instance_3.setTransform(19.55,-226.45,0.6394,1.8579,-33.7461,0,0,-56.6,-0.5);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "overlay";
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(10, 20, 0, 0))];
	this.instance_3.cache(-133,-112,267,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({regX:-56.8,regY:-0.4,scaleX:2.2713,scaleY:2.2714,rotation:-29.9998,x:19.7,y:-226.3},126,cjs.Ease.get(1)).wait(1));

	// star
	this.instance_4 = new lib.star_1();
	this.instance_4.setTransform(69.75,-120.8,1.904,1.904,0,0,0,0.2,-0.2);
	this.instance_4.compositeOperation = "hard-light";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({_off:false},0).wait(127));

	// hole
	this.instance_5 = new lib.hole();
	this.instance_5.setTransform(32.85,-212.05,0.9732,0.9732,0,0,0,121,91.2);
	this.instance_5._off = true;
	this.instance_5.cache(-3,-3,247,190);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92).to({_off:false},0).wait(127));

	// triangle_fg (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AABAAIAAAAIAAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("Ag3g3IBvA3IhvA4g");
	var mask_graphics_23 = new cjs.Graphics().p("Ag8g8IB5A8Ih5A9g");
	var mask_graphics_24 = new cjs.Graphics().p("AhJhJICTBJIiTBKg");
	var mask_graphics_25 = new cjs.Graphics().p("AheheIC9BeIi9Bfg");
	var mask_graphics_26 = new cjs.Graphics().p("Ah7h7ID3B7Ij3B8g");
	var mask_graphics_27 = new cjs.Graphics().p("AigigIFBCgIlBChg");
	var mask_graphics_28 = new cjs.Graphics().p("AjMjMIGZDMImZDNg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj/j/IH/D/In/EAg");
	var mask_graphics_30 = new cjs.Graphics().p("Ak5k5IJzE5IpzE6g");
	var mask_graphics_31 = new cjs.Graphics().p("Al5l5ILzF5IrzF6g");
	var mask_graphics_32 = new cjs.Graphics().p("Am/m/IN/G/It/HAg");
	var mask_graphics_33 = new cjs.Graphics().p("AoKoKIQVIKIwVILg");
	var mask_graphics_34 = new cjs.Graphics().p("ApbpbIS3JbIy3Jcg");
	var mask_graphics_35 = new cjs.Graphics().p("AqyqxIVlKxI1lKyg");
	var mask_graphics_36 = new cjs.Graphics().p("AsMsMIYZMMI4ZMNg");
	var mask_graphics_37 = new cjs.Graphics().p("AtstrIbZNrI7ZNsg");
	var mask_graphics_38 = new cjs.Graphics().p("AvPvPIefPPI+fPQg");
	var mask_graphics_39 = new cjs.Graphics().p("Aw3w2MAhvAQ2MghvAQ3g");
	var mask_graphics_40 = new cjs.Graphics().p("AyiyhMAlFAShMglFASig");
	var mask_graphics_41 = new cjs.Graphics().p("A0Q0QMAohAUQMgohAURg");
	var mask_graphics_42 = new cjs.Graphics().p("A2C2BMAsFAWBMgsFAWCg");
	var mask_graphics_43 = new cjs.Graphics().p("A3231MAvtAX1MgvtAX2g");
	var mask_graphics_44 = new cjs.Graphics().p("A5t5sMAzbAZsMgzbAZtg");
	var mask_graphics_45 = new cjs.Graphics().p("A7m7lMA3NAblMg3NAbmg");
	var mask_graphics_46 = new cjs.Graphics().p("A9g9fMA7BAdfMg7BAdgg");
	var mask_graphics_47 = new cjs.Graphics().p("A/d/cMA+7AfcMg+7Afdg");
	var mask_graphics_48 = new cjs.Graphics().p("EghbghaMBC3AhaMhC3Ahbg");
	var mask_graphics_49 = new cjs.Graphics().p("EgjagjZMBG1AjZMhG1Ajag");
	var mask_graphics_50 = new cjs.Graphics().p("EglaglYMBK1AlXMhK1Alag");
	var mask_graphics_51 = new cjs.Graphics().p("EgnagnZMBO1AnYMhO1Anbg");
	var mask_graphics_52 = new cjs.Graphics().p("EgpbgpZMBS3ApYMhS3Apbg");
	var mask_graphics_53 = new cjs.Graphics().p("EgrcgraMBW5ArZMhW5Arcg");
	var mask_graphics_54 = new cjs.Graphics().p("EgtcgtbMBa5AtaMha5Atdg");
	var mask_graphics_55 = new cjs.Graphics().p("EgvcgvbMBe5AvaMhe5Avdg");
	var mask_graphics_56 = new cjs.Graphics().p("EgxcgxaMBi5AxZMhi5Axcg");
	var mask_graphics_57 = new cjs.Graphics().p("EgzagzYMBm1AzXMhm1Azag");
	var mask_graphics_58 = new cjs.Graphics().p("Eg1Xg1VMBqvA1UMhqvA1Xg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg3Tg3RMBunA3QMhunA3Tg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg5Ng5LMBybA5KMhybA5Ng");
	var mask_graphics_61 = new cjs.Graphics().p("Eg7Fg7DMB2LA7CMh2LA7Fg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg86g84MB51A82Mh51A87g");
	var mask_graphics_63 = new cjs.Graphics().p("Eg+tg+rMB9bA+pMh9bA+ug");
	var mask_graphics_64 = new cjs.Graphics().p("EhAehAbMCA9BAZMiA9BAeg");
	var mask_graphics_65 = new cjs.Graphics().p("EhCLhCJMCEXBCHMiEXBCMg");
	var mask_graphics_66 = new cjs.Graphics().p("EhD1hDzMCHrBDxMiHrBD2g");
	var mask_graphics_67 = new cjs.Graphics().p("EhFchFZMCK5BFXMiK5BFcg");
	var mask_graphics_68 = new cjs.Graphics().p("EhG+hG8MCN9BG6MiN9BG/g");
	var mask_graphics_69 = new cjs.Graphics().p("EhIdhIaMCQ7BIYMiQ7BIdg");
	var mask_graphics_70 = new cjs.Graphics().p("EhJ3hJ1MCTvBJzMiTvBJ4g");
	var mask_graphics_71 = new cjs.Graphics().p("EhLNhLKMCWbBLIMiWbBLNg");
	var mask_graphics_72 = new cjs.Graphics().p("EhMehMbMCY9BMZMiY9BMeg");
	var mask_graphics_73 = new cjs.Graphics().p("EhNqhNnMCbVBNlMibVBNqg");
	var mask_graphics_74 = new cjs.Graphics().p("EhOxhOuMCdjBOsMidjBOxg");
	var mask_graphics_75 = new cjs.Graphics().p("EhPyhPvMCflBPtMiflBPyg");
	var mask_graphics_76 = new cjs.Graphics().p("EhQuhQrMChdBQpMihdBQug");
	var mask_graphics_77 = new cjs.Graphics().p("EhRjhRgMCjHBReMijHBRjg");
	var mask_graphics_78 = new cjs.Graphics().p("EhSShSPMCklBSNMiklBSSg");
	var mask_graphics_79 = new cjs.Graphics().p("EhS6hS4MCl1BS2Mil1BS7g");
	var mask_graphics_80 = new cjs.Graphics().p("EhTchTZMCm5BTXMim5BTcg");
	var mask_graphics_81 = new cjs.Graphics().p("EhT3hT0MCnvBTyMinvBT3g");
	var mask_graphics_82 = new cjs.Graphics().p("EhUKhUHMCoVBUFMioVBUKg");
	var mask_graphics_83 = new cjs.Graphics().p("EhUWhUTMCotBURMiotBUWg");
	var mask_graphics_84 = new cjs.Graphics().p("EhUahUXMCo1BUUMio1BUbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.1456,y:0}).wait(22).to({graphics:mask_graphics_22,x:0.3,y:-0.05}).wait(1).to({graphics:mask_graphics_23,x:0.3,y:-0.0539}).wait(1).to({graphics:mask_graphics_24,x:0.3,y:-0.0655}).wait(1).to({graphics:mask_graphics_25,x:0.3,y:-0.0844}).wait(1).to({graphics:mask_graphics_26,x:0.3,y:-0.1103}).wait(1).to({graphics:mask_graphics_27,x:0.3,y:-0.143}).wait(1).to({graphics:mask_graphics_28,x:0.3,y:-0.1822}).wait(1).to({graphics:mask_graphics_29,x:0.3,y:-0.2275}).wait(1).to({graphics:mask_graphics_30,x:0.3,y:-0.2787}).wait(1).to({graphics:mask_graphics_31,x:0.3,y:-0.3355}).wait(1).to({graphics:mask_graphics_32,x:0.3,y:-0.3976}).wait(1).to({graphics:mask_graphics_33,x:0.3,y:-0.4648}).wait(1).to({graphics:mask_graphics_34,x:0.3,y:-0.5368}).wait(1).to({graphics:mask_graphics_35,x:0.3,y:-0.6133}).wait(1).to({graphics:mask_graphics_36,x:0.3,y:-0.6941}).wait(1).to({graphics:mask_graphics_37,x:0.3,y:-0.7788}).wait(1).to({graphics:mask_graphics_38,x:0.3,y:-0.8672}).wait(1).to({graphics:mask_graphics_39,x:0.3,y:-0.9592}).wait(1).to({graphics:mask_graphics_40,x:0.3,y:-1.0543}).wait(1).to({graphics:mask_graphics_41,x:0.3,y:-1.1524}).wait(1).to({graphics:mask_graphics_42,x:0.3,y:-1.2532}).wait(1).to({graphics:mask_graphics_43,x:0.3,y:-1.3564}).wait(1).to({graphics:mask_graphics_44,x:0.3,y:-1.4619}).wait(1).to({graphics:mask_graphics_45,x:0.3,y:-1.5693}).wait(1).to({graphics:mask_graphics_46,x:0.3,y:-1.6784}).wait(1).to({graphics:mask_graphics_47,x:0.3,y:-1.789}).wait(1).to({graphics:mask_graphics_48,x:0.3,y:-1.9009}).wait(1).to({graphics:mask_graphics_49,x:0.3,y:-2.0137}).wait(1).to({graphics:mask_graphics_50,x:0.3,y:-2.1273}).wait(1).to({graphics:mask_graphics_51,x:0.3,y:-2.2414}).wait(1).to({graphics:mask_graphics_52,x:0.3,y:-2.3558}).wait(1).to({graphics:mask_graphics_53,x:0.3,y:-2.4702}).wait(1).to({graphics:mask_graphics_54,x:0.3,y:-2.5845}).wait(1).to({graphics:mask_graphics_55,x:0.3,y:-2.6983}).wait(1).to({graphics:mask_graphics_56,x:0.3,y:-2.8115}).wait(1).to({graphics:mask_graphics_57,x:0.3,y:-2.9238}).wait(1).to({graphics:mask_graphics_58,x:0.3,y:-3.035}).wait(1).to({graphics:mask_graphics_59,x:0.3,y:-3.1448}).wait(1).to({graphics:mask_graphics_60,x:0.3,y:-3.2531}).wait(1).to({graphics:mask_graphics_61,x:0.3,y:-3.3596}).wait(1).to({graphics:mask_graphics_62,x:0.3,y:-3.4641}).wait(1).to({graphics:mask_graphics_63,x:0.3,y:-3.5664}).wait(1).to({graphics:mask_graphics_64,x:0.3,y:-3.6662}).wait(1).to({graphics:mask_graphics_65,x:0.3,y:-3.7633}).wait(1).to({graphics:mask_graphics_66,x:0.3,y:-3.8575}).wait(1).to({graphics:mask_graphics_67,x:0.3,y:-3.9485}).wait(1).to({graphics:mask_graphics_68,x:0.3,y:-4.0362}).wait(1).to({graphics:mask_graphics_69,x:0.3,y:-4.1203}).wait(1).to({graphics:mask_graphics_70,x:0.3,y:-4.2006}).wait(1).to({graphics:mask_graphics_71,x:0.3,y:-4.2768}).wait(1).to({graphics:mask_graphics_72,x:0.3,y:-4.3489}).wait(1).to({graphics:mask_graphics_73,x:0.3,y:-4.4164}).wait(1).to({graphics:mask_graphics_74,x:0.3,y:-4.4792}).wait(1).to({graphics:mask_graphics_75,x:0.3,y:-4.5371}).wait(1).to({graphics:mask_graphics_76,x:0.3,y:-4.5899}).wait(1).to({graphics:mask_graphics_77,x:0.3,y:-4.6373}).wait(1).to({graphics:mask_graphics_78,x:0.3,y:-4.6791}).wait(1).to({graphics:mask_graphics_79,x:0.3,y:-4.7151}).wait(1).to({graphics:mask_graphics_80,x:0.3,y:-4.7451}).wait(1).to({graphics:mask_graphics_81,x:0.3,y:-4.7688}).wait(1).to({graphics:mask_graphics_82,x:0.3,y:-4.786}).wait(1).to({graphics:mask_graphics_83,x:0.3,y:-4.7965}).wait(1).to({graphics:mask_graphics_84,x:0.3,y:0}).wait(135));

	// triangle_mask
	this.instance_6 = new lib.mask("synched",0,false);
	this.instance_6.setTransform(1120,0,1,1,0,0,0,1660,540);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219));

	// triangle_bg
	this.instance_7 = new lib.triangle("synched",0);
	this.instance_7.setTransform(0,0,0.0002,0.0002);
	this.instance_7.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_7.cache(-542,-542,1085,1084);

	this.instance_8 = new lib.square("synched",0);
	this.instance_8.setTransform(0,0,4.64,4.64);
	this.instance_8.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_8.cache(-542,-542,1084,1084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},84).to({state:[{t:this.instance_8}]},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:0.1,scaleX:10.2198,scaleY:10.2198,x:0.35,y:0.35},84,cjs.Ease.quadInOut).to({_off:true},1).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5522.4,-5519.3,11043.5,11037.400000000001);


(lib.whiteLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	var mask_graphics_0 = new cjs.Graphics().p("AhjhjIDHBjIjHBkg");
	var mask_graphics_1 = new cjs.Graphics().p("A7E7FMA2JAbFMg2JAbFg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg0mg0lMBpNA0lMhpNA0ng");
	var mask_graphics_3 = new cjs.Graphics().p("EhOHhOHMCcPBOHMicPBOIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-311.1,y:121.05}).wait(1).to({graphics:mask_graphics_1,x:-200.125,y:110}).wait(1).to({graphics:mask_graphics_2,x:-89.125,y:98.95}).wait(1).to({graphics:mask_graphics_3,x:21.85,y:87.9}).wait(103));

	// logoWhite
	this.logoWhite = new lib.LogoWhite();
	this.logoWhite.name = "logoWhite";
	this.logoWhite.setTransform(-27.35,195.95,0.6192,0.6195,0,0,0,1.4,0.9);

	var maskedShapeInstanceList = [this.logoWhite];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.logoWhite).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,0,93.2,209.4);


(lib.crowbarMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// break_idn
	this.instance = new lib._break();
	this.instance.setTransform(965,434.45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(965,56.4,1162,756);


(lib.master_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var COLOR = 0;
		var version = "think";
		//version = "do";
		var COLOR_VERSION = 2;
		var self= this;
		
		var WIDTH = 300;
		var HEIGHT = 250;
		
		var scaleFrom = 1;
		var cta = self.cta;
		var allianzEase = 'CustomEase.create("custom","M0,0 C0.4,0 0.2,1 1,1")';
		var animContDiv = document.getElementById("animation_container");
		
		 
		if(version == "do") COLOR_VERSION = 4; 
		 
		this.largeshape.gotoAndStop(COLOR+COLOR_VERSION);
		
		if(version == "do"){
			this.copyDo.visible = true;
			this.copy1.visible = this.copy2.visible = false;
			cta = self.ctaDo;
		}
		 /*
		var particleSystem = new ParticleSystem(this.particles,
		{
			texture:'smoke.png',
			spawnRate:0.1,
			lifetime:10,
			acceleration:new Vector2(0.001,-0.002),
			initalVelocity:{min: new Vector2(-0.1, -0.02), max: new Vector2(0.1,-0.01)},
			set:{alpha:0, scale:random(0,1)},
			to:[{alpha:0.5, duration:5},{alpha:0, duration:5, delay:5},{scale:0.75,duration:10}],
			count:100
		}); 
		*/
		function animateInFrame1(){
		
			gsap.set(self.crowbarMC,{scale:0.15});
			var d = 0.1;
			gsap.to(self.logo, {duration:0.8, alpha:1, delay: d});
		
		 
			
			d+=0.5;
				gsap.from(cta, {scale:0, alpha:1, ease: 'power3.out', delay: d+1, duration:0.75});
			
				gsap.delayedCall(d , function() {
			
				self.largeshape.visible = true;
				gsap.set(self.largeshape,{scale:0});
				gsap.to(self.largeshape, {scale:2.25,duration:0.6, ease:allianzEase});
				
				self.whiteLogo.play();
			 
				
			});
			
			if(version == "think"){
			//	gsap.from(self.shape, {scale:0, delay:d,duration:0.6, ease:allianzEase});
		
				 
				gsap.to(self.copy1.copy1_1, {y:0, alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {y:0, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {y:0, alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
				
			
				
				}
				else{
					 
				//	gsap.set(self.shape, {scale:0});
				}
				
				
					
		
		
		
			
			
		//	gsap.from(self.shape.stripe1, {scale:12, x:"+="+WIDTH*2, duration:0.75, ease:'power1.out', delay:d+0.1});
		//	gsap.from(self.shape.stripe2, {scale:12, x:"+="+WIDTH*2, duration:0.75, ease:'power1.out', delay:d+0.3});
			
			if(version=="do"){
		//		gsap.to(self.shape, {scale:0.76, delay:d,duration:0.3, ease:allianzEase});
				d+=1.0;
			}else{
					d += 1.7;
			}
			
		
		
			
			if(version == "think"){
				gsap.to(self.copy1.copy1_3, { alpha:0, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, { alpha:0, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_1, { alpha:0, delay:d+0.2, duration:0.6, ease:'power3.out'});
		
				}
		
		
				if(version=="think"){
			//	gsap.to(self.shape, {scale:0.76, delay:d,duration:0.3, ease:allianzEase});
			}
		
		
			if(version=="do"){
				
				for(var i = 1; i <= 3; i++){
					gsap.to(self.copyDo['copy_'+i], {y:0, alpha:1, delay:d+(i-1)*0.1, duration:0.6, ease:'power3.out'});
					}
				
			}
			d+=0.3;
		 
			
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
		
			
			 
			
					gsap.delayedCall(d + 0.5, function() {
						  
				ctaAnimate();
			});
				gsap.delayedCall(d -1, function() {
						    //    particleGroup.addEmitter(smokeEmitter);
						   //scene.add(particleGroup.mesh);
		 
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
		
		
		animateInFrame1();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(148,27.75);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(150,43);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.whiteLogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(209.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(182.4,214.8,1.0001,1,0,0,0,1.4,0.8);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(63.75,213.5,0.7538,0.7541,0,0,0,58.1,15.3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(99.05,189.35,0.4722,0.4718,0,0,0,-58.9,58.6);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// crowbar
	this.crowbarMC = new lib.crowbarMC();
	this.crowbarMC.name = "crowbarMC";
	this.crowbarMC.setTransform(146.05,148.9,0.225,0.225,0,0,0,903,540.8);

	this.timeline.addTween(cjs.Tween.get(this.crowbarMC).wait(1));

	// bgshape
	this.largeshape = new lib.largeshape();
	this.largeshape.name = "largeshape";
	this.largeshape.setTransform(724,125.1,0.0174,0.0174,0,0,0,5.8,5.8);
	this.largeshape.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largeshape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.master_mc, new cjs.Rectangle(-111.9,-7.3,838.6,607.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
		var self= this;
		var WIDTH = 336;
		var HEIGHT = 280;
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
		addBorder();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// master
	this.instance = new lib.master_mc();
	this.instance.setTransform(168.1,140,1.12,1.12,0,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A7z3bMA3nAAAMAAAAu3Mg3nAAAg");
	this.shape.setTransform(168,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7zXcMAAAgu3MA3nAAAMAAAAu3g");
	this.shape_1.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(42.7,131.8,771.1999999999999,123.6);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 336,
	height: 280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bal.png?1610612856608", id:"bal"},
		{src:"./blur.jpg?1610612856608", id:"blur"},
		{src:"./crowbar.png?1610612856608", id:"crowbar"},
		{src:"./shatter.png?1610612856608", id:"shatter"},
		{src:"./star.png?1610612856608", id:"star"}
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;