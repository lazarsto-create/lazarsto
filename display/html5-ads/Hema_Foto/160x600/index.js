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



(lib.cardA = function() {
	this.initialize(img.cardA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,165);


(lib.cardB = function() {
	this.initialize(img.cardB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,165);


(lib.cards = function() {
	this.initialize(img.cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,174);


(lib.cupA = function() {
	this.initialize(img.cupA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,152);


(lib.cupB = function() {
	this.initialize(img.cupB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,152);


(lib.f3p1 = function() {
	this.initialize(img.f3p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.f3p2 = function() {
	this.initialize(img.f3p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,197);


(lib.f3p3 = function() {
	this.initialize(img.f3p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,136);


(lib.f4p1 = function() {
	this.initialize(img.f4p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,145);


(lib.f4p2 = function() {
	this.initialize(img.f4p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,166);


(lib.f4p3 = function() {
	this.initialize(img.f4p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,45);


(lib.f4p4 = function() {
	this.initialize(img.f4p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.f4p5 = function() {
	this.initialize(img.f4p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,42);


(lib.f4p6 = function() {
	this.initialize(img.f4p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,43);


(lib.mback = function() {
	this.initialize(img.mback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,101);


(lib.mfront = function() {
	this.initialize(img.mfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,105);


(lib.puzzle = function() {
	this.initialize(img.puzzle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,259);// helper functions:

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


(lib.tb1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1A3562").s().p("AurOEIAA8HIdXAAIAAcHg");
	this.shape.setTransform(60.0006,59.9991,0.6383,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tb1, new cjs.Rectangle(0,0,120,120), null);


(lib.Symbol6copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8B840").s().p("AqxEYIAAovIVjAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(-69,-28,138,56), null);


(lib.q54 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgCgEQgEgEgHAAQgFAAgFAFQgFAEABAHIAAAwIgbAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape.setTransform(81.35,12.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_1.setTransform(71.5125,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgIAAIAAgXIAIAAIAAgWIAaAAIAAAWIANAAIAAAYIgNAAIAAA9g");
	this.shape_2.setTransform(64.25,11.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgDgEQgCgEgIAAQgGAAgEAFQgEAEgBAHIAAAwIgaAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape_3.setTransform(56.45,12.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_4.setTransform(46.6125,12.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnAsIAAgxQAAgIgDgDQgDgDgGAAQgHAAgDAFQgEAEAAAHIAAAuIgZAAIAAgxQgBgHgCgDQgCgDgGAAQgHAAgEAEQgDAFAAAHIAAAuIgbAAIAAhUIAaAAIAAAKIABAAIADgDIAFgFIAHgDIAIgBQAIAAAGADQAGAFADAFIAGgEIAEgFQAFgDADAAIAKgBQANAAAIAIQAHAJAAAMIAAA6g");
	this.shape_5.setTransform(34.45,12.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_6.setTransform(21.925,12.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmAsIAAgxQABgIgDgDQgCgDgHAAQgGAAgEAFQgEAEAAAHIAAAuIgaAAIAAgxQAAgHgCgDQgDgDgGAAQgGAAgEAEQgEAFABAHIAAAuIgbAAIAAhUIAaAAIAAAKIABAAIADgDIAFgFIAHgDIAIgBQAIAAAGADQAGAFADAFIAGgEIAEgFQAEgDAEAAIAKgBQANAAAHAIQAIAJAAAMIAAA6g");
	this.shape_7.setTransform(9.4,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q54, new cjs.Rectangle(0,0,88.5,22), null);


(lib.q53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape.setTransform(85.0125,12.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgIAAIAAgXIAIAAIAAgWIAaAAIAAAWIANAAIAAAYIgNAAIAAA9g");
	this.shape_1.setTransform(77.75,11.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_2.setTransform(70.1125,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA+IAAhVIAZAAIAABVgAgKgiQgFgEAAgHQAAgHAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(63.125,10.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAsIAAhVIAZAAIAAANQABgFAGgFQAFgFAIAAIAGAAIAAAbQgEgCgGAAQgPAAgBAWIAAAog");
	this.shape_4.setTransform(58.2,12.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_5.setTransform(49.575,12.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIgkhVIAdAAIARAyIASgyIAbAAIghBVg");
	this.shape_6.setTransform(39.65,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAhQgLgMAAgVQAAgRAMgNQAMgOASAAQAGAAAFADQAHACAFAGIAAgJIAaAAIAABVIgaAAIAAgJIgBACIgDACIgGADIgHADIgHABQgTAAgLgMgAgNgOQgFAGgBAIQABAJAFAGQAFAGAIAAQAJAAAGgFQAHgGAAgJQgBgJgFgGQgHgGgIAAQgIAAgGAGg");
	this.shape_7.setTransform(29.4,12.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA6IAAg+IgKAAIAAgWIAJAAIAAgFQAAgOAIgGQAIgHAMAAQAGAAAIADIAAAVIgJAAQgEgBgCACQgCACAAAFIAOAAIAAAWIgOAAIAAA+g");
	this.shape_8.setTransform(21.875,10.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_9.setTransform(11.2125,12.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBMIAAhxIAZAAIAABxgAgKgwQgFgEAAgHQAAgHAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_10.setTransform(4.225,11.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q53, new cjs.Rectangle(0,0,92,22), null);


(lib.q52 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgJAAIAAgXIAJAAIAAgWIAZAAIAAAWIAPAAIAAAYIgPAAIAAA9g");
	this.shape.setTransform(86.25,11.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_1.setTransform(78.6125,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmAsIAAgxQABgIgDgDQgCgDgHAAQgHAAgDAFQgEAEAAAHIAAAuIgaAAIAAgxQAAgHgCgDQgDgDgGAAQgGAAgEAEQgDAFAAAHIAAAuIgbAAIAAhUIAZAAIAAAKIACAAIADgDIAFgFIAHgDIAIgBQAIAAAGADQAGAFADAFIAFgEIAGgFQAEgDAEAAIAJgBQANAAAHAIQAIAJAAAMIAAA6g");
	this.shape_2.setTransform(66.45,12.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAqQgKgNAAgSQAAgSALgNQAMgOASAAQAGAAAGADIAJAEIADADIAAgeIAaAAIAABrIgZAAIAAgJQgMALgPAAQgRAAgMgNgAgNgEQgFAFgBAJQABAJAFAGQAGAHAHAAQAKAAAGgGQAGgGAAgKQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_3.setTransform(50.65,11.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA2IAAhrIAZAAIAABrg");
	this.shape_4.setTransform(43.35,11.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAiQgLgKABgSIAAgxIAaAAIAAAxQAAAGADAEQAEAEAGAAQAIAAADgEQAEgDAAgHIAAgxIAaAAIAAAyQgBASgKAJQgLAKgTAAQgSAAgLgKg");
	this.shape_5.setTransform(36.25,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIglhVIAeAAIASAyIASgyIAbAAIgiBVg");
	this.shape_6.setTransform(26.55,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_7.setTransform(17.0125,12.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAzQgLgIgDgOIAeAAQACAEADACIAHABQAIAAAFgDQAFgEAAgHIAAgGIgLAHQgHADgGAAQgQAAgLgMQgKgMAAgRQAAgSAKgMQALgNAQAAQAIAAAGADQAFACAGAGIAAgJIAZAAIAABKQAAAUgMAKQgNALgTAAQgQAAgMgIgAgNgeQgFAGAAAJQAAAJAFAFQAFAFAIAAQAJAAAFgFQAGgGgBgIQABgJgGgGQgFgGgJAAQgIAAgFAGg");
	this.shape_8.setTransform(6.9,13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q52, new cjs.Rectangle(0,0,90.9,22), null);


(lib.q51 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgCgEQgEgEgHAAQgFAAgFAFQgFAEABAHIAAAwIgbAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape.setTransform(87.65,12.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_1.setTransform(77.8125,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKA2IgZgjIAAAjIgaAAIAAhrIAaAAIAAA1IAXgfIAgAAIgiAmIAkAvg");
	this.shape_2.setTransform(68.975,11.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_3.setTransform(59.0625,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(49.125,12.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAsIAAAJIgZAAIAAhrIAaAAIAAAeIADgDIAJgEQAHgDAGAAQATAAAKANQALAOAAARQAAATgLANQgKANgSAAQgQAAgLgLgAgOgEQgGAFAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgHQAEgGAAgKQAAgIgFgFQgGgGgJAAQgIAAgGAGg");
	this.shape_5.setTransform(38.85,11.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_6.setTransform(28.175,12.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgJAAIAAgXIAJAAIAAgWIAaAAIAAAWIAOAAIAAAYIgOAAIAAA9g");
	this.shape_7.setTransform(20.55,11.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_8.setTransform(12.575,12.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA6IAAg+IgKAAIAAgWIAJAAIAAgFQAAgOAIgGQAIgHAMAAQAGAAAIADIAAAVIgJAAQgEgBgCACQgCACAAAFIAOAAIAAAWIgOAAIAAA+g");
	this.shape_9.setTransform(4.975,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q51, new cjs.Rectangle(0,0,94.8,22), null);


(lib.q49 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAUAqIgGgPIgcAAIgGAPIgXAAIAfhTIAZAAIAfBTgAAJAKIgJgZIgIAZIARAAg");
	this.shape.setTransform(33.625,9.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeAqIgHgvIgTAvIgJAAIgSgvIgHAvIgWAAIANhTIAWAAIARAtIARgtIAWAAIAOBTg");
	this.shape_1.setTransform(23.5,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAATIgaAAIAAAOIAZAAIAAARIgZAAIAAAPIAaAAIAAASg");
	this.shape_2.setTransform(14.75,9.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgWAAIAAhTIAWAAIAAAgIAdAAIAAggIAWAAIAABTg");
	this.shape_3.setTransform(6.675,9.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q49, new cjs.Rectangle(0,0,40.5,18.1), null);


(lib.q48 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKA8IAAhZIAUAAIAABZgAgIglQgEgEABgFQAAgFADgEQAEgDAEAAQAFAAAEADQAEAEAAAFQgBAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(58.2,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAwIAAhCIATAAIAABCgAgIgaQgEgEAAgFQABgFAEgEQADgDAEAAQAFAAAEADQAEAEgBAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(54.75,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAjIAAAGIgTAAIAAhTIAUAAIAAAYIADgDIAHgDQAFgCAFAAQAOAAAJAKQAIAKAAAOQAAAOgIALQgIAKgOAAQgMAAgKgIgAgLgDQgEAEgBAHQABAIAEAFQAFAEAHAAQAHAAAEgFQAEgFAAgHQAAgHgFgEQgEgFgHABQgGgBgFAFg");
	this.shape_2.setTransform(49,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAaQgKgJAAgRQAAgOAKgKQAKgKAOAAQAPAAAJAKQAJAJAAARIAAACIAAACIgvAAQACAGAEADQAEADAFAAQAIAAAHgKIAQAKQgFAIgIAFQgIAEgLAAQgPAAgJgJgAANgHQgCgFgDgDQgDgCgFAAQgIAAgEAKIAZAAIAAAAg");
	this.shape_3.setTransform(38.625,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA8IAAhZIATAAIAABZgAgIglQgEgEAAgFQABgFAEgEQADgDAEAAQAFAAAEADQAEAEgBAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_4.setTransform(33.15,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAhQgIgKAAgOQAAgOAJgKQAJgLAPAAQADAAAGACIAHADIACADIAAgYIAUAAIAABTIgUAAIAAgGQgIAIgNAAQgOAAgIgKgAgKgDQgFAEAAAHQAAAHAFAFQAFAFAFAAQAIAAAEgFQAFgEAAgIQAAgHgFgEQgEgEgHAAQgGAAgFAEg");
	this.shape_5.setTransform(24.8,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALAiIAAgmQAAgFgCgDQgCgDgGAAQgEAAgEADQgEAEAAAFIAAAlIgUAAIAAhCIAUAAIAAAJIABgBIACgDIAEgDIAFgCIAHgBQAKgBAHAHQAHAGAAAKIAAAtg");
	this.shape_6.setTransform(16.925,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAwIAAhCIAUAAIAABCgAgIgaQgDgEgBgFQAAgFAFgEQADgDAEAAQAFAAAEADQADAEABAFQAAAFgFAEQgDADgFAAQgEAAgEgDg");
	this.shape_7.setTransform(11.25,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAiIgdhDIAYAAIANAnIAOgnIAVAAIgaBDg");
	this.shape_8.setTransform(5.75,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q48, new cjs.Rectangle(0,0,62.1,18.1), null);


(lib.q47 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgZAZQgLgLAAgOQAAgOALgLQAKgKAQAAQAPAAAKAKQALAKAAAPQAAAPgLAKQgKALgQAAQgOAAgLgLgAgLgLQgEAFAAAGQAAAHAEAFQAFAEAGAAQAIAAAEgEQAFgFgBgHQABgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape.setTransform(63.45,10.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAaQgJgKAAgPQgBgOAKgLQAKgKAPAAQAIAAAIADIAAAVQgDgCgEgBQgFgCgDAAQgIAAgDAFQgEAFAAAGQAAAHAEAEQAFAEAGAAIAJgBIAGgDIAAAUQgKADgHAAQgOAAgKgJg");
	this.shape_1.setTransform(56.45,9.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAaQgKgJAAgRQAAgOAKgKQAKgKAOAAQAPAAAJAKQAJAJAAARIAAACIAAACIgvAAQACAGAEADQAEADAFAAQAIAAAHgKIAQAKQgFAIgIAFQgIAEgLAAQgPAAgJgJgAANgHQgCgFgDgDQgDgCgFAAQgIAAgEAKIAZAAIAAAAg");
	this.shape_2.setTransform(49.775,9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAhQgIgKAAgOQAAgOAJgKQAJgLAOAAQAEAAAGACIAGADIADADIAAgYIAUAAIAABTIgUAAIAAgGQgJAIgMAAQgNAAgJgKgAgKgDQgEAEgBAHQABAHAEAFQAEAFAHAAQAHAAAEgFQAFgEAAgIQAAgHgFgEQgEgEgHAAQgHAAgEAEg");
	this.shape_3.setTransform(41.7,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAhQgIgKAAgOQAAgOAJgKQAJgLAOAAQAFAAAEACIAHADIADADIAAgYIAUAAIAABTIgUAAIAAgGQgJAIgMAAQgNAAgJgKgAgKgDQgEAEAAAHQAAAHAEAFQAEAFAHAAQAHAAAEgFQAFgEAAgIQAAgHgFgEQgEgEgHAAQgGAAgFAEg");
	this.shape_4.setTransform(33.4,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAiIAAgmQAAgFgCgDQgCgDgGAAQgEAAgEADQgEAEAAAFIAAAlIgUAAIAAhCIAUAAIAAAJIABgBIACgDIAEgDIAFgCIAHgBQAKgBAHAHQAHAGAAAKIAAAtg");
	this.shape_5.setTransform(25.525,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAaQgIgKAAgQQAAgNAJgLQAKgKANAAQAFAAAFACQAEACAFAEIAAgHIAUAAIAABDIgUAAIAAgHIgBABIgDACIgEADIgGACIgGAAQgOAAgJgJgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAFgEAAgHQAAgHgFgFQgFgEgHAAQgGAAgEAEg");
	this.shape_6.setTransform(17.275,9.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAiIgNgkIgMAkIgRAAIgahDIAWAAIANAlIANglIAPAAIANAlIANglIAWAAIgaBDg");
	this.shape_7.setTransform(7.65,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q47, new cjs.Rectangle(0,0,69.7,18.1), null);


(lib.q42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AALAiIAAgmQAAgFgCgDQgCgDgGAAQgEAAgEADQgEAEAAAFIAAAlIgUAAIAAhCIAUAAIAAAJIABgBIACgDIAEgDIAFgCIAHgBQAKgBAHAHQAHAGAAAKIAAAtg");
	this.shape.setTransform(66.125,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAaQgKgJAAgRQAAgOAKgKQAKgKAOAAQAPAAAJAKQAJAJAAARIAAACIAAACIgvAAQACAGAEADQAEADAFAAQAIAAAHgKIAQAKQgFAIgIAFQgIAEgLAAQgPAAgJgJgAANgHQgCgFgDgDQgDgCgFAAQgIAAgEAKIAZAAIAAAAg");
	this.shape_1.setTransform(58.425,9.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAuIAAhZIAUAAIAAAIQAJgJAMAAQANAAAJAKQAIAKAAAPQAAANgJAKQgIALgPAAQgEAAgFgCQgFgBgCgCIgDgCIAAAcgAgLgWQgFAGAAAHQAAAHAFAEQAFAFAGgBQAHAAAEgEQAFgEAAgHQAAgHgFgGQgEgEgHAAQgHAAgEAEg");
	this.shape_2.setTransform(50.675,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAiIAAhCIATAAIAAALQABgFAFgEQAEgDAGAAIAEAAIAAAVQgCgCgFABQgMAAAAARIAAAeg");
	this.shape_3.setTransform(44.225,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAZQgLgLABgOQgBgOALgLQAKgKAQAAQAPAAALAKQAJAKABAPQgBAPgJAKQgLALgQAAQgOAAgLgLgAgLgLQgEAFAAAGQAAAHAEAFQAFAEAGAAQAIAAAEgEQAFgFgBgHQABgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_4.setTransform(37.45,10.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAiIgNgkIgMAkIgRAAIgahDIAWAAIANAlIAMglIAQAAIANAlIANglIAWAAIgaBDg");
	this.shape_5.setTransform(27.8,9.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAqIAAgwIgHAAIAAgSIAHAAIAAgRIATAAIAAARIALAAIAAASIgLAAIAAAwg");
	this.shape_6.setTransform(20.2,9.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAiIAAgmQAAgFgCgDQgCgDgGAAQgEAAgEADQgEAEAAAFIAAAlIgUAAIAAhCIAUAAIAAAJIABgBIACgDIAEgDIAFgCIAHgBQAKgBAHAHQAHAGAAAKIAAAtg");
	this.shape_7.setTransform(14.075,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAZQgKgLAAgOQAAgOAKgLQALgKAPAAQAPAAALAKQAJAKABAPQgBAPgJAKQgLALgQAAQgPAAgKgLgAgLgLQgEAFAAAGQAAAHAEAFQAFAEAGAAQAHAAAFgEQAFgFAAgHQAAgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_8.setTransform(6.05,10.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q42, new cjs.Rectangle(0,0,72.2,18.1), null);


(lib.q41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAuIAAgxIgHAAIAAgSIAGAAIAAgDQAAgLAHgFQAGgFAJAAIALABIAAASIgHgBQgDAAgCABQgBABAAAEIALAAIAAASIgLAAIAAAxg");
	this.shape.setTransform(60.875,8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_1.setTransform(56.775,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAaQgKgJAAgRQAAgOAKgKQAKgKAOAAQAPAAAJAKQAJAJAAARIAAACIAAACIgvAAQACAGAEADQAEADAFAAQAIAAAHgKIAQAKQgFAIgIAFQgIAEgLAAQgPAAgJgJgAANgHQgCgFgDgDQgDgCgFAAQgIAAgEAKIAZAAIAAAAg");
	this.shape_2.setTransform(51.325,9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAiIAdgxIgYAAIAAgSIA3AAIgbAxIAbAAIAAASg");
	this.shape_3.setTransform(44.3,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAaQgKgJAAgRQAAgOAKgKQAKgKAOAAQAPAAAJAKQAJAJAAARIAAACIAAACIgvAAQACAGAEADQAEADAFAAQAIAAAHgKIAQAKQgFAIgIAFQgIAEgLAAQgPAAgJgJgAANgHQgCgFgDgDQgDgCgFAAQgIAAgEAKIAZAAIAAAAg");
	this.shape_4.setTransform(34.925,9.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA8IAAhZIATAAIAABZgAgIglQgEgEAAgFQAAgFAFgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_5.setTransform(29.45,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHAqIgTgbIAAAbIgUAAIAAhTIAUAAIAAApIATgYIAYAAIgaAeIAcAkg");
	this.shape_6.setTransform(22.225,9.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAZQgKgLAAgOQAAgOAKgLQALgKAPAAQAPAAALAKQAJAKABAPQgBAPgJAKQgLALgQAAQgPAAgKgLgAgLgLQgEAFAAAGQAAAHAEAFQAFAEAGAAQAHAAAFgEQAFgFAAgHQAAgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_7.setTransform(14.15,10.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAZQgKgLAAgOQAAgOAKgLQALgKAPAAQAPAAALAKQAJAKABAPQgBAPgJAKQgLALgQAAQgPAAgKgLgAgLgLQgEAFAAAGQAAAHAEAFQAFAEAGAAQAHAAAFgEQAFgFAAgHQAAgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_8.setTransform(6.05,10.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q41, new cjs.Rectangle(0,0,65,18.1), null);


(lib.q28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgjAqQgKgNAAgSQAAgSALgNQAMgOASAAQAGAAAGADIAJAEIADADIAAgeIAaAAIAABrIgZAAIAAgJQgMALgPAAQgRAAgMgNgAgNgEQgFAFgBAJQABAJAFAGQAGAHAHAAQAKAAAGgGQAGgGAAgKQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape.setTransform(47.5,11.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgCgEQgDgEgIAAQgGAAgEAFQgEAEgBAHIAAAwIgaAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape_1.setTransform(37.45,12.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(27.275,12.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJArIglhVIAeAAIARAyIASgyIAbAAIghBVg");
	this.shape_3.setTransform(17.35,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAhQgLgMAAgVQAAgRAMgNQAMgOASAAQAGAAAFADQAGACAHAGIAAgJIAZAAIAABVIgaAAIAAgJIgBACIgEACIgEADIgIADIgHABQgTAAgLgMgAgNgOQgFAGgBAIQABAJAFAGQAFAGAIAAQAJAAAGgFQAGgGABgJQAAgJgHgGQgFgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(7.1,12.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q28, new cjs.Rectangle(0,0,55.2,22), null);


(lib.q27 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgZAMIAAgXIAzAAIAAAXg");
	this.shape.setTransform(77.625,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAbIAUgKIABACIAEADQAEACADAAQACAAADgBQADgCAAgDQAAgCgEgCIgIgEIgMgEQgFgDgEgFQgEgGAAgIQAAgMAJgIQAJgIAOAAQAJAAAHAFQAIAFAEAJIgUAJIgBgCIgEgDQgCgCgEAAQgGAAAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAHADIAJADIAKAFQAEADADAEQADAFAAAHQAAAOgKAHQgKAIgNAAQgXAAgJgSg");
	this.shape_1.setTransform(70.675,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_2.setTransform(62.3625,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBMIAAhxIAZAAIAABxgAgKgwQgFgEAAgHQAAgHAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(55.375,11.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgJAAIAAgXIAJAAIAAgWIAZAAIAAAWIAPAAIAAAYIgPAAIAAA9g");
	this.shape_4.setTransform(50.7,11.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_5.setTransform(43.0625,12.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA2IAAhrIAZAAIAABrg");
	this.shape_6.setTransform(36.05,11.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMA2IAAhrIAZAAIAABrg");
	this.shape_7.setTransform(31.65,11.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_8.setTransform(24.6625,12.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA6IAAhxIAZAAIAAAJQAMgLAPAAQASAAAKANQALANAAASQAAASgLANQgMAOgRAAQgHAAgFgDQgHgCgDgDIgDgCIAAAkgAgOgcQgHAHAAAJQAAAJAHAFQAGAGAIAAQAJAAAFgGQAGgGAAgIQAAgJgGgGQgFgHgJAAQgJAAgFAGg");
	this.shape_9.setTransform(14.75,13.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAbIAUgKIABACIAEADQAEACADAAQACAAADgBQADgCAAgDQAAgCgEgCIgIgEIgMgEQgFgDgEgFQgEgGAAgIQAAgMAJgIQAJgIAOAAQAJAAAHAFQAIAFAEAJIgUAJIgBgCIgEgDQgCgCgEAAQgGAAAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAHADIAJADIAKAFQAEADADAEQADAFAAAHQAAAOgKAHQgKAIgNAAQgXAAgJgSg");
	this.shape_10.setTransform(5.525,12.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q27, new cjs.Rectangle(0,0,83.1,22), null);


(lib.q22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgDgEQgCgEgIAAQgGAAgEAFQgEAEgBAHIAAAwIgaAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape.setTransform(65.45,12.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_1.setTransform(55.6125,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_2.setTransform(46.0125,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAsIAAhVIAZAAIAAANQABgFAGgFQAGgFAHAAIAGAAIAAAbQgEgCgFAAQgQAAgBAWIAAAog");
	this.shape_3.setTransform(35.6,12.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(26.975,12.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_5.setTransform(16.675,12.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIglhVIAeAAIASAyIASgyIAbAAIgiBVg");
	this.shape_6.setTransform(6.75,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q22, new cjs.Rectangle(0,0,72.6,22), null);


(lib.q21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgIAAIAAgXIAIAAIAAgWIAZAAIAAAWIAPAAIAAAYIgPAAIAAA9g");
	this.shape.setTransform(53.8,11.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAgQgMgMABgTQAAgSAMgOQANgNASAAQALAAAJAEIAAAbQgCgCgGgCQgFgDgGAAQgIAAgFAHQgGAHABAHQAAAJAFAFQAFAGAJAAQAFAAAFgCIAIgEIAAAZQgMAFgIAAQgTAAgNgNg");
	this.shape_1.setTransform(47.15,12.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_2.setTransform(38.6125,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA6IAAg+IgKAAIAAgWIAJAAIAAgFQAAgOAIgGQAIgHAMAAQAGAAAIADIAAAVIgJAAQgEgBgCACQgCACAAAFIAOAAIAAAWIgOAAIAAA+g");
	this.shape_3.setTransform(31.375,10.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAsIAAhVIAZAAIAAANQABgFAGgFQAGgFAHAAIAGAAIAAAbQgEgCgFAAQgQAAgBAWIAAAog");
	this.shape_4.setTransform(25.7,12.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_5.setTransform(17.4125,12.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA6IAAhxIAaAAIAAAJQALgLAPAAQASAAALANQAKANAAASQAAASgLANQgLAOgTAAQgGAAgGgDQgGgCgDgDIgDgCIAAAkgAgPgcQgFAHgBAJQABAJAFAFQAHAGAIAAQAIAAAGgGQAGgGAAgIQAAgJgGgGQgFgHgJAAQgJAAgGAGg");
	this.shape_6.setTransform(7.5,13.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q21, new cjs.Rectangle(0,0,58.5,22), null);


(lib.q13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgIAAIAAgXIAIAAIAAgWIAaAAIAAAWIANAAIAAAYIgNAAIAAA9g");
	this.shape.setTransform(65.7,11.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAsIAAgyQAAgGgDgEQgCgEgIAAQgFAAgFAFQgEAEgBAHIAAAwIgaAAIAAhVIAaAAIAAALIABgBIADgDIAFgEIAGgEIAJgBQANAAAJAIQAJAJAAAMIAAA6g");
	this.shape_1.setTransform(57.9,12.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA+IAAhVIAZAAIAABVgAgKgiQgFgEAAgHQAAgHAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_2.setTransform(50.675,10.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAbIAUgKIABACIAEADQAEACADAAQACAAADgBQADgCAAgDQAAgCgEgCIgIgEIgMgEQgFgDgEgFQgEgGAAgIQAAgMAJgIQAJgIAOAAQAJAAAHAFQAIAFAEAJIgUAJIgBgCIgEgDQgCgCgEAAQgGAAAAAFQAAACADACIAHADIAJADIAKAFQAEADADAEQADAFAAAHQAAAOgKAHQgKAIgNAAQgXAAgJgSg");
	this.shape_3.setTransform(44.725,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAsIAAhVIAZAAIAAANQABgFAGgFQAGgFAHAAIAGAAIAAAbQgEgCgFAAQgQAAgBAWIAAAog");
	this.shape_4.setTransform(35.6,12.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_5.setTransform(26.975,12.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_6.setTransform(16.675,12.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJArIglhVIAeAAIASAyIASgyIAbAAIgiBVg");
	this.shape_7.setTransform(6.75,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q13, new cjs.Rectangle(0,0,70.4,22), null);


(lib.q12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AggAbIAUgKIABACIAEADQAEACADAAQACAAADgBQADgCAAgDQAAgCgEgCIgIgEIgMgEQgFgDgEgFQgEgGAAgIQAAgMAJgIQAJgIAOAAQAJAAAHAFQAIAFAEAJIgUAJIgBgCIgEgDQgCgCgEAAQgGAAAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAHADIAJADIAKAFQAEADADAEQADAFAAAHQAAAOgKAHQgKAIgNAAQgXAAgJgSg");
	this.shape.setTransform(95.625,12.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAiQgLgKABgSIAAgxIAaAAIAAAxQAAAGADAEQAFAEAFAAQAIAAADgEQAEgDAAgHIAAgxIAaAAIAAAyQgBASgKAJQgLAKgTAAQgRAAgMgKg");
	this.shape_1.setTransform(87.2,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAhQgLgMAAgVQAAgRAMgNQAMgOASAAQAGAAAFADQAHACAGAGIAAgJIAZAAIAABVIgaAAIAAgJIgBACIgEACIgFADIgHADIgHABQgTAAgLgMgAgNgOQgFAGgBAIQABAJAFAGQAFAGAIAAQAJAAAGgFQAHgGAAgJQgBgJgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(76.75,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_3.setTransform(66.8625,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAqQgLgNAAgSQAAgSALgNQAMgOASAAQAGAAAGADIAKAEIACADIAAgeIAaAAIAABrIgaAAIAAgJQgLALgPAAQgSAAgKgNgAgNgEQgGAFABAJQgBAJAGAGQAFAHAJAAQAJAAAGgGQAGgGgBgKQABgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(56.55,11.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAhQgLgMAAgVQAAgRAMgNQAMgOASAAQAGAAAFADQAGACAGAGIAAgJIAaAAIAABVIgaAAIAAgJIgBACIgDACIgGADIgHADIgIABQgSAAgLgMgAgNgOQgFAGAAAIQAAAJAFAGQAFAGAIAAQAJAAAGgFQAHgGgBgJQAAgJgFgGQgHgGgIAAQgJAAgFAGg");
	this.shape_5.setTransform(45.95,12.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAgQgMgMAAgTQAAgSAMgOQANgNASAAQALAAAJAEIAAAbQgCgCgGgCQgFgDgGAAQgJAAgEAHQgGAHAAAHQABAJAFAFQAGAGAJAAQAEAAAGgCIAIgEIAAAZQgNAFgIAAQgTAAgMgNg");
	this.shape_6.setTransform(37.05,12.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_7.setTransform(28.175,12.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgJAAIAAgXIAJAAIAAgWIAaAAIAAAWIAOAAIAAAYIgOAAIAAA9g");
	this.shape_8.setTransform(20.55,11.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAgQgOgOAAgSQAAgTAOgNQANgMATAAQAUAAANAMQAOANAAATQAAATgOANQgNANgUAAQgTAAgNgNgAgOgOQgGAGAAAIQAAAJAGAGQAGAGAIAAQAKAAAFgGQAGgGAAgJQAAgJgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_9.setTransform(12.575,12.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA6IAAg+IgKAAIAAgWIAJAAIAAgFQAAgOAIgGQAIgHAMAAQAGAAAIADIAAAVIgJAAQgEgBgCACQgCACAAAFIAOAAIAAAWIgOAAIAAA+g");
	this.shape_10.setTransform(4.975,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q12, new cjs.Rectangle(0,0,101.6,22), null);


(lib.q11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape.setTransform(75.4625,12.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPA2IAAg+IgIAAIAAgXIAIAAIAAgWIAZAAIAAAWIAPAAIAAAYIgPAAIAAA9g");
	this.shape_1.setTransform(68.2,11.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAbIAUgKIABACIAEADQAEACADAAQACAAADgBQADgCAAgDQAAgCgEgCIgIgEIgMgEQgFgDgEgFQgEgGAAgIQAAgMAJgIQAJgIAOAAQAJAAAHAFQAIAFAEAJIgUAJIgBgCIgEgDQgCgCgEAAQgGAAAAAFQAAACADACIAHADIAJADIAKAFQAEADADAEQADAFAAAHQAAAOgKAHQgKAIgNAAQgXAAgJgSg");
	this.shape_2.setTransform(61.625,12.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKA2IgZgjIAAAjIgaAAIAAhrIAaAAIAAA1IAXgfIAgAAIgiAmIAkAvg");
	this.shape_3.setTransform(54.075,11.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAiQgMgKAAgSIAAgxIAaAAIAAAxQAAAGAFAEQADAEAGAAQAHAAAEgEQAEgDAAgHIAAgxIAZAAIAAAyQAAASgLAJQgKAKgTAAQgSAAgKgKg");
	this.shape_4.setTransform(44.05,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_5.setTransform(34.3125,12.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA2IAAhrIAZAAIAABrg");
	this.shape_6.setTransform(27.3,11.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgTAMgMQANgNASAAQATAAALAMQAMANAAAVIAAADIAAACIg8AAQACAIAFAEQAGADAHAAQAJAAAJgLIAVALQgGALgLAGQgKAGgOAAQgTAAgMgMgAAQgKQgCgGgEgDQgEgDgGAAQgLAAgFAMIAgAAIAAAAg");
	this.shape_7.setTransform(17.4125,12.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAqQgKgNAAgSQAAgSAMgNQALgOASAAQAGAAAGADIAJAEIADADIAAgeIAaAAIAABrIgZAAIAAgJQgMALgPAAQgRAAgMgNgAgNgEQgFAFgBAJQABAJAFAGQAGAHAHAAQAKAAAGgGQAFgGABgKQgBgJgFgFQgGgGgJAAQgIAAgGAGg");
	this.shape_8.setTransform(7.1,11.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q11, new cjs.Rectangle(0,0,82.5,22), null);


(lib.mv_f3p1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f3p1();
	this.instance.setTransform(-48,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mv_f3p1, new cjs.Rectangle(-48,-48,96,96), null);


(lib.mc_rect3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CADDF1").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape.setTransform(5.5,5.5,0.5789,0.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect3, new cjs.Rectangle(0,0,11,11), null);


(lib.mc_rect2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7B91AE").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape.setTransform(5.5,5.5,0.5789,0.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect2, new cjs.Rectangle(0,0,11,11), null);


(lib.mc_rect1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#57759F").s().p("AheBfIAAi9IC9AAIAAC9g");
	this.shape.setTransform(5.5,5.5,0.5789,0.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect1, new cjs.Rectangle(0,0,11,11), null);


(lib.mc_puzzle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.puzzle();
	this.instance.setTransform(-148.5,-129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_puzzle, new cjs.Rectangle(-148.5,-129.5,297,259), null);


(lib.mc_mfront = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mfront();
	this.instance.setTransform(-51.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_mfront, new cjs.Rectangle(-51.5,-52.5,103,105), null);


(lib.mc_mback = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mback();
	this.instance.setTransform(-49.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_mback, new cjs.Rectangle(-49.5,-50.5,99,101), null);


(lib.mc_flash = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAbQgagGg8AhQA7giAHgaQAHgagig8QAjA7AZAGQAZAHA7ggQg5AhgHAaQgHAaAiA8Qgjg7gZgHg");
	this.shape.setTransform(0.0105,-0.013,0.9986,0.9986,29.8602);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_flash, new cjs.Rectangle(-10.6,-10.7,21.299999999999997,21.6), null);


(lib.mc_f4p6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p6();
	this.instance.setTransform(-21,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p6, new cjs.Rectangle(-21,-21.5,42,43), null);


(lib.mc_f4p5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p5();
	this.instance.setTransform(-21.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p5, new cjs.Rectangle(-21.5,-21,43,42), null);


(lib.mc_f4p4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p4();
	this.instance.setTransform(-19.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p4, new cjs.Rectangle(-19.5,-20,39,40), null);


(lib.mc_f4p3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p3();
	this.instance.setTransform(-20,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p3, new cjs.Rectangle(-20,-22.5,40,45), null);


(lib.mc_f4p2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p2();
	this.instance.setTransform(-48,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p2, new cjs.Rectangle(-48,0,96,166), null);


(lib.mc_f4p1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f4p1();
	this.instance.setTransform(-110.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f4p1, new cjs.Rectangle(-110.5,-72.5,221,145), null);


(lib.mc_f3p3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f3p3();
	this.instance.setTransform(-76,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f3p3, new cjs.Rectangle(-76,-68,152,136), null);


(lib.mc_f3p2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f3p2();
	this.instance.setTransform(-110,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f3p2, new cjs.Rectangle(-110,-99,220,197), null);


(lib.mc_cupFront = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cupA();
	this.instance.setTransform(-68,-61,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cupFront, new cjs.Rectangle(-68,-61,136,121.6), null);


(lib.mc_circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.494,1],0,0,0,0,0,606.9).s().p("EhCSBCSUgbdgbdAAAgm1UAAAgm0AbdgbeUAbegbdAm0AAAUAm1AAAAbdAbdUAbeAbeAAAAm0UAAAAm1gbeAbdUgbdAbegm1AAAUgm0AAAgbegbeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_circle, new cjs.Rectangle(-600,-600,1200,1200), null);


(lib.mc_cards = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cards();
	this.instance.setTransform(-77,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cards, new cjs.Rectangle(-77,-87,154,174), null);


(lib.mc_cardFront = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cardA();
	this.instance.setTransform(-97,-64,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cardFront, new cjs.Rectangle(-97,-64,193.5,128.7), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA0916").s().p("AnzH0IAAvnIPnAAIAAPngAGABFQAEAAABAEIANAkQABAFAEAAIAjAAIACgBIAAgEIhMjcQgBgEgFAAIgnAAQgEAAgCAEIhMDcIAAAEIACABIAjAAQAFAAABgFIANgkQABgEAEAAgACuguIAACbQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIACABIAiAAIADgBIABgEIAAjcIgBgDIgDgBIgyAAQgDAAgDAEIg3CWIgBACIgBgCIg3iWQgBgEgFAAIgwAAIgEABIgBADIAADcIABAEIAEABIAhAAIACgBQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAicIABABIA5CYQABADAFAAIAVAAIAEgBIABgCIA5iYIABgCIAAACgAjOhyIgBADIAADcQAAAFADAAICTAAIADgBIAAgEIAAgdIAAgDIgDgBIhpAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgBgCIAAg5IABgDIACgBIBXAAIADgCIAAgCIAAgdIAAgDIgDgBIhXAAIgCgBIgBgDIAAgrIABgDIACgBIBpAAIADgBIAAgDIAAgeIAAgDIgDgBIiTAAIgCABgAkqALIADABIABADIAABeIABAEIADABIAiAAIADgBIABgEIAAjcIgBgDIgDgBIgiAAIgDABIgBADIAABRIgBADIgDABIhWAAIgDgBIgBgDIAAhRIgBgDIgDgBIgiAAIgDABIgBADIAADcIABAEIADABIAiAAIADgBIABgEIAAheIABgDIADgBgAE7AgIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIAdhVIABgCIABACIAeBVIAAADIgDABg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnKD2IAAnrIOVAAIAAHrg");
	this.shape_1.setTransform(51.125,53.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ct2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWAiQgIgHgBgOIAAg1IANAAIAAA1QAAAJAFAEQAGAEAIAAQAIAAAEgEQAGgFAAgIIAAg1IAMAAIAAA1QABAOgJAHQgKAHgNAAQgNAAgJgHg");
	this.shape.setTransform(56.25,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATApIAAg0QAAgRgQABQgKgBgFAIQgGAHAAALIAAArIgNAAIAAhPIAMAAIAAAMQAJgOAPAAQAMAAAHAHQAIAHAAALIAAA4g");
	this.shape_1.setTransform(48.05,10.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAyIgfgmIAAAmIgNAAIAAhjIANAAIAAA4IAegkIAQAAIghAmIAjApg");
	this.shape_2.setTransform(37.35,9.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFBFIAAhwIALAAIAABwgAgFg1QgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(31.725,11.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA0IAAhPIALAAIAABPgAgFglQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_4.setTransform(28.525,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAyIgegmIAAAmIgNAAIAAhjIANAAIAAA4IAegkIAQAAIghAmIAjApg");
	this.shape_5.setTransform(23.95,9.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAeQgLgNAAgRQAAgQALgNQALgMAQAAQARAAAKAMQAKANAAASIg+AAQAAAMAHAIQAHAJAMAAQAHAAAHgFQAGgFADgGIALAFQgEAJgKAHQgJAGgMAAQgQAAgLgMgAAZgHQgBgKgGgGQgHgHgKAAQgJAAgHAHQgHAHgBAJIAwAAIAAAAg");
	this.shape_6.setTransform(15.625,10.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAuQgIgEgDgFIAAAMIgMAAIAAhjIAMAAIAAAfQAHgIAGgCQAHgDAGAAQASAAAKAMQALAMAAAPQAAASgKANQgLANgRAAQgIAAgIgFgAgTgMQgHAJgBANQABAOAHAIQAHAHAMAAQAMAAAHgKQAHgJAAgMQAAgLgIgJQgGgJgMABQgMgBgHAJg");
	this.shape_7.setTransform(6.9,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ct2, new cjs.Rectangle(0,0,62.6,20.3), null);


(lib.ct1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgWAiQgIgHgBgOIAAg1IANAAIAAA1QAAAJAFAEQAGAEAIAAQAIAAAEgEQAGgFAAgIIAAg1IAMAAIAAA1QABAOgJAHQgKAHgNAAQgNAAgJgHg");
	this.shape.setTransform(56.25,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATApIAAg0QAAgRgQABQgKgBgFAIQgGAHAAALIAAArIgNAAIAAhPIAMAAIAAAMQAJgOAPAAQAMAAAHAHQAIAHAAALIAAA4g");
	this.shape_1.setTransform(48.05,10.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAyIgfgmIAAAmIgNAAIAAhjIANAAIAAA4IAegkIAQAAIghAmIAjApg");
	this.shape_2.setTransform(37.35,9.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFBFIAAhwIALAAIAABwgAgFg1QgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(31.725,11.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA0IAAhPIALAAIAABPgAgFglQgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_4.setTransform(28.525,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAyIgegmIAAAmIgNAAIAAhjIANAAIAAA4IAegkIAQAAIghAmIAjApg");
	this.shape_5.setTransform(23.95,9.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAeQgLgNAAgRQAAgQALgNQALgMAQAAQARAAAKAMQAKANAAASIg+AAQAAAMAHAIQAHAJAMAAQAHAAAHgFQAGgFADgGIALAFQgEAJgKAHQgJAGgMAAQgQAAgLgMgAAZgHQgBgKgGgGQgHgHgKAAQgJAAgHAHQgHAHgBAJIAwAAIAAAAg");
	this.shape_6.setTransform(15.625,10.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAuQgIgEgDgFIAAAMIgMAAIAAhjIAMAAIAAAfQAHgIAGgCQAHgDAGAAQASAAAKAMQALAMAAAPQAAASgKANQgLANgRAAQgIAAgIgFgAgTgMQgHAJgBANQABAOAHAIQAHAHAMAAQAMAAAHgKQAHgJAAgMQAAgLgIgJQgGgJgMABQgMgBgHAJg");
	this.shape_7.setTransform(6.9,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ct1, new cjs.Rectangle(0,0,62.6,20.3), null);


(lib.clickTagGeneric = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(80.0011,300,0.5333,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.bg2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B1C6E5").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(-70,0,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,160,600), null);


(lib.bg1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003C80").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(-70,0,0.5333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,160,600), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAzQgCgDAAgEQAAgDACgCIAngnIgmglQgCgDgBgDQABgEACgDQADgDAEAAQAEAAACADIAtAtQADABgBAEQABADgDADIgtAtQgDADgEAAQgDAAgEgDg");
	this.shape.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arr, new cjs.Rectangle(-2.9,-4.8,5.8,9.7), null);


(lib.t4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.q49();
	this.instance.setTransform(30,94,1,1,0,0,0,20,9);

	this.instance_1 = new lib.q48();
	this.instance_1.setTransform(41,81,1,1,0,0,0,31,9.5);

	this.instance_2 = new lib.q47();
	this.instance_2.setTransform(45,66,1,1,0,0,0,35,9);

	this.instance_3 = new lib.q42();
	this.instance_3.setTransform(46,53,1,1,0,0,0,36,9.5);

	this.instance_4 = new lib.q41();
	this.instance_4.setTransform(42,39,1,1,0,0,0,32,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(10,30,72.2,73.1), null);


(lib.t3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.q54();
	this.instance.setTransform(38,47.05,1,1,0,0,0,44,10.9);

	this.instance_1 = new lib.q53();
	this.instance_1.setTransform(40,29.7,1,1,0,0,0,46,10.6);

	this.instance_2 = new lib.q52();
	this.instance_2.setTransform(39,13.35,1,1,0,0,0,45,11.3);

	this.instance_3 = new lib.q51();
	this.instance_3.setTransform(41,-4,1,1,0,0,0,47,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-6,-15,94.8,73.1), null);


(lib.t2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.q28();
	this.instance.setTransform(34,61,1,1,0,0,0,28,11);

	this.instance_1 = new lib.q27();
	this.instance_1.setTransform(48,44,1,1,0,0,0,42,11);

	this.instance_2 = new lib.q22();
	this.instance_2.setTransform(42,27,1,1,0,0,0,36,11);

	this.instance_3 = new lib.q21();
	this.instance_3.setTransform(35,10,1,1,0,0,0,29,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(6,-1,83.1,73), null);


(lib.t1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.q13();
	this.instance.setTransform(46,69,1,1,0,0,0,36,11);

	this.instance_1 = new lib.q12();
	this.instance_1.setTransform(61,51.5,1,1,0,0,0,51,10.5);

	this.instance_2 = new lib.q11();
	this.instance_2.setTransform(51,35,1,1,0,0,0,41,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(10,24,101.6,56), null);


(lib.subCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arr
	this.arr = new lib.arr();
	this.arr.name = "arr";
	this.arr.setTransform(71,9.15);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// ct2
	this.ct2 = new lib.ct2();
	this.ct2.name = "ct2";
	this.ct2.setTransform(-1,-1);
	this.ct2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ct2).wait(1));

	// ct1
	this.ct1 = new lib.ct1();
	this.ct1.name = "ct1";
	this.ct1.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.ct1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subCTA, new cjs.Rectangle(-1,-1,74.9,20.3), null);


(lib.mc_rectangles1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rectangles
	this.instance = new lib.mc_rect3();
	this.instance.setTransform(138.5,14);

	this.instance_1 = new lib.mc_rect3();
	this.instance_1.setTransform(138.5,184.6);

	this.instance_2 = new lib.mc_rect3();
	this.instance_2.setTransform(138.5,99.3);

	this.instance_3 = new lib.mc_rect3();
	this.instance_3.setTransform(138.5,525.8);

	this.instance_4 = new lib.mc_rect3();
	this.instance_4.setTransform(138.5,440.5);

	this.instance_5 = new lib.mc_rect3();
	this.instance_5.setTransform(138.5,355.2);

	this.instance_6 = new lib.mc_rect3();
	this.instance_6.setTransform(138.5,269.9);

	this.instance_7 = new lib.mc_rect3();
	this.instance_7.setTransform(97.5,56);

	this.instance_8 = new lib.mc_rect3();
	this.instance_8.setTransform(97.5,226.6);

	this.instance_9 = new lib.mc_rect3();
	this.instance_9.setTransform(97.5,141.3);

	this.instance_10 = new lib.mc_rect3();
	this.instance_10.setTransform(97.5,567.8);

	this.instance_11 = new lib.mc_rect3();
	this.instance_11.setTransform(97.5,482.5);

	this.instance_12 = new lib.mc_rect3();
	this.instance_12.setTransform(97.5,397.2);

	this.instance_13 = new lib.mc_rect3();
	this.instance_13.setTransform(97.5,311.9);

	this.instance_14 = new lib.mc_rect3();
	this.instance_14.setTransform(54.5,14);

	this.instance_15 = new lib.mc_rect3();
	this.instance_15.setTransform(54.5,184.6);

	this.instance_16 = new lib.mc_rect3();
	this.instance_16.setTransform(54.5,99.3);

	this.instance_17 = new lib.mc_rect3();
	this.instance_17.setTransform(54.5,525.8);

	this.instance_18 = new lib.mc_rect3();
	this.instance_18.setTransform(54.5,440.5);

	this.instance_19 = new lib.mc_rect3();
	this.instance_19.setTransform(54.5,355.2);

	this.instance_20 = new lib.mc_rect3();
	this.instance_20.setTransform(54.5,269.9);

	this.instance_21 = new lib.mc_rect3();
	this.instance_21.setTransform(12,56);

	this.instance_22 = new lib.mc_rect3();
	this.instance_22.setTransform(12,226.6);

	this.instance_23 = new lib.mc_rect3();
	this.instance_23.setTransform(12,141.3);

	this.instance_24 = new lib.mc_rect3();
	this.instance_24.setTransform(12,567.8);

	this.instance_25 = new lib.mc_rect3();
	this.instance_25.setTransform(12,482.5);

	this.instance_26 = new lib.mc_rect3();
	this.instance_26.setTransform(12,397.2);

	this.instance_27 = new lib.mc_rect3();
	this.instance_27.setTransform(12,311.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rectangles1, new cjs.Rectangle(12,14,137.5,564.8), null);


(lib.mc_rectangles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rectangles
	this.instance = new lib.mc_rect2();
	this.instance.setTransform(138.5,14);

	this.instance_1 = new lib.mc_rect1();
	this.instance_1.setTransform(138.5,184.6);

	this.instance_2 = new lib.mc_rect1();
	this.instance_2.setTransform(138.5,99.3);

	this.instance_3 = new lib.mc_rect1();
	this.instance_3.setTransform(138.5,525.8);

	this.instance_4 = new lib.mc_rect1();
	this.instance_4.setTransform(138.5,440.5);

	this.instance_5 = new lib.mc_rect1();
	this.instance_5.setTransform(138.5,355.2);

	this.instance_6 = new lib.mc_rect2();
	this.instance_6.setTransform(138.5,269.9);

	this.instance_7 = new lib.mc_rect1();
	this.instance_7.setTransform(97.5,56);

	this.instance_8 = new lib.mc_rect1();
	this.instance_8.setTransform(97.5,226.6);

	this.instance_9 = new lib.mc_rect2();
	this.instance_9.setTransform(97.5,141.3);

	this.instance_10 = new lib.mc_rect2();
	this.instance_10.setTransform(97.5,567.8);

	this.instance_11 = new lib.mc_rect1();
	this.instance_11.setTransform(97.5,482.5);

	this.instance_12 = new lib.mc_rect2();
	this.instance_12.setTransform(97.5,397.2);

	this.instance_13 = new lib.mc_rect1();
	this.instance_13.setTransform(97.5,311.9);

	this.instance_14 = new lib.mc_rect1();
	this.instance_14.setTransform(54.5,14);

	this.instance_15 = new lib.mc_rect1();
	this.instance_15.setTransform(54.5,184.6);

	this.instance_16 = new lib.mc_rect1();
	this.instance_16.setTransform(54.5,99.3);

	this.instance_17 = new lib.mc_rect1();
	this.instance_17.setTransform(54.5,525.8);

	this.instance_18 = new lib.mc_rect1();
	this.instance_18.setTransform(54.5,440.5);

	this.instance_19 = new lib.mc_rect1();
	this.instance_19.setTransform(54.5,355.2);

	this.instance_20 = new lib.mc_rect1();
	this.instance_20.setTransform(54.5,269.9);

	this.instance_21 = new lib.mc_rect2();
	this.instance_21.setTransform(12,56);

	this.instance_22 = new lib.mc_rect2();
	this.instance_22.setTransform(12,226.6);

	this.instance_23 = new lib.mc_rect1();
	this.instance_23.setTransform(12,141.3);

	this.instance_24 = new lib.mc_rect1();
	this.instance_24.setTransform(12,567.8);

	this.instance_25 = new lib.mc_rect2();
	this.instance_25.setTransform(12,482.5);

	this.instance_26 = new lib.mc_rect1();
	this.instance_26.setTransform(12,397.2);

	this.instance_27 = new lib.mc_rect2();
	this.instance_27.setTransform(12,311.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rectangles, new cjs.Rectangle(12,14,137.5,564.8), null);


(lib.mc_cupA = function(mode,startPosition,loop,reversed) {
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
	this.front = new lib.mc_cupFront();
	this.front.name = "front";

	this.timeline.addTween(cjs.Tween.get(this.front).wait(1));

	// Layer_2
	this.instance = new lib.cupB();
	this.instance.setTransform(-68,-61,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cupA, new cjs.Rectangle(-68,-61,136,121.6), null);


(lib.mc_cardA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cardFront
	this.front = new lib.mc_cardFront();
	this.front.name = "front";

	this.timeline.addTween(cjs.Tween.get(this.front).wait(1));

	// Layer_2
	this.instance = new lib.cardB();
	this.instance.setTransform(-97,-65,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cardA, new cjs.Rectangle(-97,-65,193.5,129.7), null);


(lib.logo3d = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1 copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("AI6nqIAoB0IAAMCIgoBxg");
	var mask_graphics_14 = new cjs.Graphics().p("Ag2nzIBtBsIAAMRIhtBqg");
	var mask_graphics_15 = new cjs.Graphics().p("AhYnzICxBkIAAMgIixBjg");
	var mask_graphics_16 = new cjs.Graphics().p("Ah7nzID3BcIAAMwIj3Bbg");
	var mask_graphics_17 = new cjs.Graphics().p("AienzIE9BUIAAM/Ik9BUg");
	var mask_graphics_18 = new cjs.Graphics().p("AjAnzIGBBMIAANPImBBMg");
	var mask_graphics_19 = new cjs.Graphics().p("AjjnzIHHBFIAANdInHBFg");
	var mask_graphics_20 = new cjs.Graphics().p("AkGnzIINA9IAANtIoNA9g");
	var mask_graphics_21 = new cjs.Graphics().p("AkonzIJRA2IAAN8IpRA1g");
	var mask_graphics_22 = new cjs.Graphics().p("AlLnzIKXAuIAAOMIqXAtg");
	var mask_graphics_23 = new cjs.Graphics().p("AlunzILdAnIAAOaIrdAmg");
	var mask_graphics_24 = new cjs.Graphics().p("AmQnzIMhAeIAAOqIshAfg");
	var mask_graphics_25 = new cjs.Graphics().p("AmznzINnAXIAAO5ItnAXg");
	var mask_graphics_26 = new cjs.Graphics().p("AnWnzIOtAPIAAPJIutAPg");
	var mask_graphics_27 = new cjs.Graphics().p("An4nzIPxAHIAAPZIvxAHg");
	var mask_graphics_28 = new cjs.Graphics().p("AobH0IAAvnIQ3AAIAAPng");
	var mask_graphics_29 = new cjs.Graphics().p("AobIIIAAwPIQ3AAIAAQPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:61,y:50.95}).wait(1).to({graphics:mask_graphics_14,x:119.475,y:51.9}).wait(1).to({graphics:mask_graphics_15,x:118.925,y:51.9}).wait(1).to({graphics:mask_graphics_16,x:118.4,y:51.9}).wait(1).to({graphics:mask_graphics_17,x:117.875,y:51.9}).wait(1).to({graphics:mask_graphics_18,x:117.325,y:51.9}).wait(1).to({graphics:mask_graphics_19,x:116.8,y:51.9}).wait(1).to({graphics:mask_graphics_20,x:116.275,y:51.9}).wait(1).to({graphics:mask_graphics_21,x:115.725,y:51.9}).wait(1).to({graphics:mask_graphics_22,x:115.2,y:51.9}).wait(1).to({graphics:mask_graphics_23,x:114.675,y:51.9}).wait(1).to({graphics:mask_graphics_24,x:114.125,y:51.9}).wait(1).to({graphics:mask_graphics_25,x:113.6,y:51.9}).wait(1).to({graphics:mask_graphics_26,x:113.075,y:51.9}).wait(1).to({graphics:mask_graphics_27,x:112.525,y:51.9}).wait(1).to({graphics:mask_graphics_28,x:112,y:51.9}).wait(1).to({graphics:mask_graphics_29,x:112,y:52}).wait(1));

	// LOGO
	this.instance = new lib.logo("synched",0);
	this.instance.setTransform(120.3,51.35,0.0466,1,0,0,0,48.2,49.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1,x:108.2},15).wait(2));

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(100,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.169)").s().p("AnYH0IAAvnIOyAAIAAPng");
	this.shape_1.setTransform(97.35,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.333)").s().p("Am+H0IAAvnIN9AAIAAPng");
	this.shape_2.setTransform(94.75,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.502)").s().p("AmkH0IAAvnINJAAIAAPng");
	this.shape_3.setTransform(92.1,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.667)").s().p("AmJH0IAAvnIMTAAIAAPng");
	this.shape_4.setTransform(89.45,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.831)").s().p("AluH0IAAvnILdAAIAAPng");
	this.shape_5.setTransform(86.85,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AlUH0IAAvnIKpAAIAAPng");
	this.shape_6.setTransform(84.2,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ak+HtIAAvYIJ9gIIAAPng");
	this.shape_7.setTransform(82.525,51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AkoHlIAAvJIJRgPIAAPng");
	this.shape_8.setTransform(80.85,51.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AkSHdIAAu5IIlgXIAAPng");
	this.shape_9.setTransform(79.175,51.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Aj8HVIAAuqIH5geIAAPng");
	this.shape_10.setTransform(77.475,51.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AjmHOIAAubIHMgmIAAPng");
	this.shape_11.setTransform(75.8,51.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AjQHGIAAuLIGhguIAAPng");
	this.shape_12.setTransform(74.125,51.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ai5G/IAAt8IFzg2IAAPog");
	this.shape_13.setTransform(72.45,52);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AikG3IAAtsIFJg+IAAPog");
	this.shape_14.setTransform(70.75,52);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AiNGwIAAteIEbhGIAAPpg");
	this.shape_15.setTransform(69.075,52.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Ah4GoIAAtOIDxhOIAAPpg");
	this.shape_16.setTransform(67.4,52.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhhGhIAAs/IDDhWIAAPpg");
	this.shape_17.setTransform(65.725,52.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhLGZIAAswICXhdIAAPpg");
	this.shape_18.setTransform(64.025,52.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Ag1GRIAAsgIBrhlIAAPpg");
	this.shape_19.setTransform(62.35,52.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgfGJIAAsRIA/hsIAAPpg");
	this.shape_20.setTransform(60.675,52.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgJGCIAAsCIATh0IAAPpg");
	this.shape_21.setTransform(59,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,102.2);


(lib.i41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg1
	this.bg1 = new lib.bg1();
	this.bg1.name = "bg1";
	this.bg1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(1));

	// bg2
	this.bg2 = new lib.bg2();
	this.bg2.name = "bg2";
	this.bg2.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.i41, new cjs.Rectangle(0,0,160,600), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1QgOgLAAgVIAAhTIAUAAIAABSQAAAOAJAGQAIAGAMAAQAMAAAIgGQAIgHAAgMIAAhTIAUAAIAABSQAAAVgOALQgOALgVAAQgVAAgNgKg");
	this.shape.setTransform(108.875,28.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA/IAAhSQAAgYgYAAQgQAAgJALQgIALAAAQIAABEIgUAAIAAh6IATAAIAAASQANgVAXAAQATAAAMALQALAKAAARIAABXg");
	this.shape_1.setTransform(96.225,28.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBMIAAiYIATAAIAACYg");
	this.shape_2.setTransform(81.85,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAuQgSgTABgbQgBgaASgTQAQgTAZAAQAaAAAQATQAQATAAAdIhhAAQAAASALANQALAOATAAQALAAALgIQAJgHAFgKIAQAIQgHAOgOAKQgPAKgRAAQgaAAgQgTgAAmgLQgCgPgJgLQgKgKgQAAQgOAAgLALQgLAKgCAPIBLAAIAAAAg");
	this.shape_3.setTransform(72.7,28.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBMIAAhoIgPAAIAAgSIAPAAIAAgeIATAAIAAAeIAVAAIAAASIgVAAIAABog");
	this.shape_4.setTransform(63.025,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA6QgKgGgFgMIAQgJIAEAHIAIAGQAFADAGAAQAJAAAGgFQAGgFgBgIQAAgNgNgGIgTgJQgWgJAAgWQAAgOAKgKQALgKAPAAQAMAAAJAHQAJAGAEALIgQAIQgGgPgNAAQgFAAgFAFQgFAEAAAHIABAHIAEAFIAHAEIAGAEIAFACIAHADQALAFAHAIQAGAJAAALQAAARgMALQgMAKgQAAQgNAAgLgHg");
	this.shape_5.setTransform(54.95,28.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAuQgRgTAAgbQAAgaARgTQAQgTAaAAQAZAAAQATQAQATAAAdIhhAAQABASAKANQALAOATAAQAMAAAJgIQAKgHAFgKIAQAIQgGAOgPAKQgPAKgRAAQgaAAgQgTgAAmgLQgBgPgKgLQgKgKgQAAQgOAAgLALQgLAKgCAPIBLAAIAAAAg");
	this.shape_6.setTransform(44,28.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBIQgMgHgFgIIAAASIgTAAIAAiYIAUAAIAAAvQAJgLAKgEQAJgFAMAAQAaAAARASQAQASAAAZQAAAbgQAUQgPAUgcAAQgMAAgMgGgAgegTQgLANAAAVQAAAVALAMQAMAMASAAQATAAALgOQAKgPAAgUQAAgRgLgNQgLgNgSAAQgTAAgLANg");
	this.shape_7.setTransform(30.525,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.instance = new lib.Symbol6copy();
	this.instance.setTransform(69,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,138,56), null);


(lib.txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t4
	this.t4 = new lib.t4();
	this.t4.name = "t4";
	this.t4.setTransform(13,31,1,1,0,0,0,13,48);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.name = "t3";
	this.t3.setTransform(17.4,27.6,1,1,0,0,0,0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.name = "t2";
	this.t2.setTransform(4.9,12.9,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.name = "t1";
	this.t1.setTransform(58.6,19.2,1,1,0,0,0,56.6,26.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// tb1
	this.tb1 = new lib.tb1();
	this.tb1.name = "tb1";

	this.timeline.addTween(cjs.Tween.get(this.tb1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(0,0,120,120), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		//gsap.registerPlugin(CSSPlugin);
		
		var w = 160;
		var h = 600;
		
		var frequency=60;
		stage.enableMouseOver(frequency);
		var _overed = false;
		
		var arrX = self.subCTA.arr.x;
		var arrX10 = arrX + 10;
		
		var clickT = window.clickTag;
		var mc_array = [self.cardA, self.cupA, self.flash, self.cards, self.puzzle, self.mback, self.mfront, self.f3p1, self.f3p2, self.f3p3];
		
		function linkF() {	window.open(clickT, "_blank"); }
		
		this.click_btn.addEventListener('click', linkF);
		
		var tl = gsap.timeline();
		
		gsap.defaults({
		  ease: "elastic(1.1, 0.9)", 
		  duration: 0.6
		});
		
		
		var d = 0;
		tl.to(self.txt, {x:0, ease: "expo"}, d);
		
		/////frame_1
		d += 0.2;
		tl.from(self.txt.t1.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		
		d += 0.2;
		tl.from(self.rectangles.children, {alpha:0, stagger:{each:0.025, from:"random"}}, d);
		d += 0.3;
		tl.from(self.cardA, {duration:1, rotation:-320, scale:0, ease: "elastic(0.75, 1.0)"}, d);
		d += 0.5;
		tl.from(self.cupA, {duration:1, scale:0, ease: "elastic(1.1, 0.75)"}, d);
		d += 0.5;
		tl.to(self.subCTA, {x:"+=100"}, d);
		d += 0.5;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut"}, d+0.3);
		tl.to(self.flash, {duration:0.2, alpha:1, scale:1, ease: "power1.out"}, d);
		d += 0.2;
		tl.set([self.cardA.front, self.cupA.front], {alpha:0}, d);
		tl.to(self.flash, {duration:0.2, alpha:0, ease: "power1.in"}, d);
		d += 0.5;
		tl.to(self.cardA, {duration:1, x:"-=220", ease: "back.in"}, d);
		d += 0.25;
		tl.to(self.cupA, {duration:1, x:"-=220", ease: "back.in"}, d);
		tl.to(self.txt.t1.children, {scaleY:0, alpha:0, stagger:0.1, ease: "back.in"}, d);
		
		////////////////frame_2
		d += 0.5;
		tl.from(self.txt.t2.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		tl.to([self.background.bg1, self.rectangles], {duration:1, alpha:0, ease: "none"}, d-0.5);//, onStart: function () {clickT = window.clickTag2}
		tl.from(self.rectangles1, {duration:1, alpha:0, ease: "none"}, d-0.5);
		d += 0.5;
		tl.from(self.cards, {duration:1, x:"+=200"}, d);
		d += 0.2;
		tl.from(self.puzzle, {duration:1, x:"+=200"}, d);
		d += 0.2;
		tl.from(self.mback, {duration:1, x:"+=200"}, d);
		d += 0.2;
		tl.from(self.mfront, {duration:1, x:"+=200"}, d);
		
		d += 0.2;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut"}, d);
		
		d += 1.5;
		
		tl.to(self.cards, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.puzzle, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.mback, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.mfront, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		
		d += 0.5;
		tl.to(self.txt.t2.children, {scaleY:0, alpha:0, stagger:0.1, ease: "back.in"}, d-0.3);
		
		////////////////////////frame_3
		d += 0.5;
		tl.from(self.txt.t3.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		tl.to([self.background.bg1, self.rectangles], {duration:1, alpha:1, ease: "none"}, d-0.5);//, onStart: function () {clickT = window.clickTag3}
		
		tl.from(self.f3p1, {duration:1, x:"+=200"}, d);
		d += 0.2;
		tl.from(self.f3p2, {duration:1, x:"+=300"}, d);
		d += 0.2;
		tl.from(self.f3p3, {duration:1, x:"+=200"}, d);
		d += 0.4;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut" }, d);
		d += 1.5;
		
		tl.to(self.f3p1, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.f3p2, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.f3p3, {duration:1, x:"-=200", ease: "elastic.in(1.1, 0.9)"}, d);
		
		d += 0.5;
		tl.to(self.txt.t3.children, {scaleY:0, alpha:0, stagger:0.1, ease: "back.in"}, d-0.3);
		////////////////////////frame_4
		d += 0.5;
		tl.from(self.txt.t4.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		tl.to([self.background.bg1, self.rectangles], {duration:1, alpha:0, ease: "none"}, d-0.5);//, onStart: function () {clickT = window.clickTag4}
		tl.from(self.rectangles1, {duration:1, alpha:0, ease: "none"}, d-0.5);
		tl.from(self.f4p1, {duration:0.75, scale:0, ease: "elastic(0.75, 1.0)"}, d);
		d += 0.4;
		tl.from(self.f4p2, {duration:1.2, y:"-=180",  ease: "elastic(1.0, 0.75)"}, d);
		//d += 0.2;
		tl.from([self.f4p3, self.f4p4, self.f4p5, self.f4p6], {x:"+=200", duration: 0.75, stagger:0.1, ease: "power3.out"}, d);
		d += 0.4;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut" }, d);
		tl.from(self.cf, {duration:0.2, alpha:0, scale:0, rotation:"+=360",  ease: "power1.out", yoyo:true, repeat:5}, d);
		/*d += 0.4;
		tl.to(self.cta, {duration:1.5, y:"-=200", onComplete:ctaGo}, d);*/
		d += 2.5;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut" }, d);
		gsap.delayedCall(d, hide, [mc_array]);
		
		//////////////////////////////////////////frame_4
		console.log(d)
		//tl.time(11);
		//////CTA clickTag onMouseOver		
				
		this.click_btn.addEventListener("mouseover", onMouseOver.bind(this));
		
		this.click_btn.addEventListener("mouseout", onMouseOut.bind(this));
		
		var l1 = self.subCTA.ct1.children.length;
		var l2 = self.subCTA.ct2.children.length;
		
		function onMouseOver()
		{
			if (!_overed) {
				for (var i = 0; i<l1; i++) {
					gsap.to(self.subCTA.ct1.children[i], {duration:0.1, rotation:360, ease: "none", delay:i*0.05 });
					}
				gsap.to(self.cta, {scale:1.1 });
				gsap.to(self.subCTA.arr, {duration:0.3, x:arrX10, ease: "bounce", delay:0.2 });
			}
			_overed = true;
		}
		
		function onMouseOut() 
		{
			if (_overed) {
				for (var i = 0; i<l1; i++) {
					gsap.to(self.subCTA.ct1.children[i], {duration:0.1, rotation:0, ease: "none", delay:i*0.05 });
				}
				gsap.to(self.cta, {scale:1.0});
				gsap.to(self.subCTA.arr, {duration:0.3, x:arrX, ease: "bounce", delay:0.2 });
			}
			_overed = false;
		}
		
		
		function ctaGo() {
			
			var tlCTA = gsap.timeline({repeat: -1, repeatDelay: 4});
			
			tlCTA.to(self.cta, {duration:0.2, scale:1.1, ease: "expo.in"}, 0)
			.to(self.cta, {duration:0.2, scale:0.9, ease: "none"})
			.to(self.cta, {duration:0.2, scale:1.2, ease: "none"})
			.to(self.cta, {duration:0.5, scale:1, ease: "circ"});
			}
		
		function hide(mc_array) {
			//console.log(mc_array)
			for (i=0; i < mc_array.length; i++) {
				mc_array[i].visible = false;
			}
		}
		addBorder();
		
		function addBorder() {
			var ff = "#707070";
			var brd_t = new cjs.Shape();
			brd_t.graphics.beginFill(ff).drawRect(-10, 0, w + 20, 1);
			var brd_tr = new cjs.Shape();
			brd_tr.graphics.beginFill(ff).drawRect(w - 1, -10, 1, h + 20);
			var brd_b = new cjs.Shape();
			brd_b.graphics.beginFill(ff).drawRect(-10, h - 1, w + 20, 1);
			var brd_tl = new cjs.Shape();
			brd_tl.graphics.beginFill(ff).drawRect(0, -10, 1, h + 20);
			self.addChild(brd_t, brd_tr, brd_b, brd_tl);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// click_btn
	this.click_btn = new lib.clickTagGeneric();
	this.click_btn.name = "click_btn";
	this.click_btn.setTransform(300,250,1,1,0,0,0,300,250);
	this.click_btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.click_btn, 0, 1, 2, false, new lib.clickTagGeneric(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click_btn).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(150,665,1,1,0,0,0,71,27);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// subCta
	this.subCTA = new lib.subCTA();
	this.subCTA.name = "subCTA";
	this.subCTA.setTransform(-52,103,1,1,0,0,0,38,11);

	this.timeline.addTween(cjs.Tween.get(this.subCTA).wait(1));

	// logo3d
	this.logo3d = new lib.logo3d();
	this.logo3d.name = "logo3d";
	this.logo3d.setTransform(94.85,560.15,0.77,0.77,0,0,0,75.4,50.2);

	this.timeline.addTween(cjs.Tween.get(this.logo3d).wait(1));

	// camera flash
	this.cf = new lib.mc_flash();
	this.cf.name = "cf";
	this.cf.setTransform(84,338);

	this.timeline.addTween(cjs.Tween.get(this.cf).wait(1));

	// frame4
	this.f4p6 = new lib.mc_f4p6();
	this.f4p6.name = "f4p6";
	this.f4p6.setTransform(99.8,482.7,0.95,0.95);

	this.f4p5 = new lib.mc_f4p5();
	this.f4p5.name = "f4p5";
	this.f4p5.setTransform(55.1,484.65,0.95,0.95);

	this.f4p4 = new lib.mc_f4p4();
	this.f4p4.name = "f4p4";
	this.f4p4.setTransform(101.7,438,0.95,0.95);

	this.f4p3 = new lib.mc_f4p3();
	this.f4p3.name = "f4p3";
	this.f4p3.setTransform(53.15,434.2,0.95,0.95);

	this.f4p1 = new lib.mc_f4p1();
	this.f4p1.name = "f4p1";
	this.f4p1.setTransform(74.35,346,0.66,0.66,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f4p1},{t:this.f4p3},{t:this.f4p4},{t:this.f4p5},{t:this.f4p6}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3YZPIAE/ZMAuuAAAIgGfZg");
	mask.setTransform(85.75,161.5);

	// frame4 poster
	this.f4p2 = new lib.mc_f4p2();
	this.f4p2.name = "f4p2";
	this.f4p2.setTransform(77.1,127.4,0.9,0.9,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.f4p2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.f4p2).wait(1));

	// frame3
	this.f3p3 = new lib.mc_f3p3();
	this.f3p3.name = "f3p3";
	this.f3p3.setTransform(57,458,0.69,0.69,0,0,0,0.1,0.2);

	this.f3p2 = new lib.mc_f3p2();
	this.f3p2.name = "f3p2";
	this.f3p2.setTransform(73,321);

	this.f3p1 = new lib.mv_f3p1();
	this.f3p1.name = "f3p1";
	this.f3p1.setTransform(121.05,208,0.8,0.8,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f3p1},{t:this.f3p2},{t:this.f3p3}]}).wait(1));

	// frame2
	this.mfront = new lib.mc_mfront();
	this.mfront.name = "mfront";
	this.mfront.setTransform(113.95,453,0.69,0.69);

	this.mback = new lib.mc_mback();
	this.mback.name = "mback";
	this.mback.setTransform(45.95,472.95,0.69,0.69);

	this.puzzle = new lib.mc_puzzle();
	this.puzzle.name = "puzzle";
	this.puzzle.setTransform(80.5,337.5,0.69,0.69,0,0,0,0.3,0.3);

	this.cards = new lib.mc_cards();
	this.cards.name = "cards";
	this.cards.setTransform(99,193.95,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cards},{t:this.puzzle},{t:this.mback},{t:this.mfront}]}).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.setTransform(-130,0);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// flash
	this.flash = new lib.mc_circle();
	this.flash.name = "flash";
	this.flash.setTransform(80.1,300,0.1,0.1,0,0,0,1,1);
	this.flash.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(1));

	// cupA
	this.cupA = new lib.mc_cupA();
	this.cupA.name = "cupA";
	this.cupA.setTransform(105.05,394.85,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.cupA).wait(1));

	// cardA_B
	this.cardA = new lib.mc_cardA();
	this.cardA.name = "cardA";
	this.cardA.setTransform(82.9,274,0.9989,0.9989,-19.8339,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cardA).wait(1));

	// rectangles1
	this.rectangles1 = new lib.mc_rectangles1();
	this.rectangles1.name = "rectangles1";

	this.timeline.addTween(cjs.Tween.get(this.rectangles1).wait(1));

	// rectangles
	this.rectangles = new lib.mc_rectangles();
	this.rectangles.name = "rectangles";

	this.timeline.addTween(cjs.Tween.get(this.rectangles).wait(1));

	// background
	this.background = new lib.i41();
	this.background.name = "background";

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-457,292,674,402);
// library properties:
lib.properties = {
	id: '1F8CA2A4A0EA654EABBB3FBCA823831E',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cardA.png?1604579822636", id:"cardA"},
		{src:"images/cardB.png?1604579822636", id:"cardB"},
		{src:"images/cards.png?1604579822636", id:"cards"},
		{src:"images/cupA.png?1604579822636", id:"cupA"},
		{src:"images/cupB.png?1604579822636", id:"cupB"},
		{src:"images/f3p1.png?1604579822637", id:"f3p1"},
		{src:"images/f3p2.png?1604579822637", id:"f3p2"},
		{src:"images/f3p3.png?1604579822637", id:"f3p3"},
		{src:"images/f4p1.png?1604579822637", id:"f4p1"},
		{src:"images/f4p2.png?1604579822637", id:"f4p2"},
		{src:"images/f4p3.png?1604579822637", id:"f4p3"},
		{src:"images/f4p4.png?1604579822637", id:"f4p4"},
		{src:"images/f4p5.png?1604579822637", id:"f4p5"},
		{src:"images/f4p6.png?1604579822637", id:"f4p6"},
		{src:"images/mback.png?1604579822637", id:"mback"},
		{src:"images/mfront.png?1604579822637", id:"mfront"},
		{src:"images/puzzle.png?1604579822637", id:"puzzle"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;