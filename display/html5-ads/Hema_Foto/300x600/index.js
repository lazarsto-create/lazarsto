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
p.nominalBounds = new cjs.Rectangle(0,0,406,290);


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
	this.shape.setTransform(99.985,99.9989,1.0638,1.1111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tb1, new cjs.Rectangle(0,0,200,200), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgFgFQgEgGgMAAQgJAAgHAHQgHAHAAAKIAABMIgqAAIAAiGIAqAAIAAARIABgCIAFgFIAHgGQAFgDAGgCQAGgCAIAAQAUAAAOANQAPANAAATIAABcg");
	this.shape.setTransform(126.9,17.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAdAAQAeABASASQATAUgBAiIABAFIgBADIhdAAQACAMAJAGQAIAGALAAQAPAAAPgSIAfASQgJARgQAJQgRAKgVAAQgegBgUgSgAAagQQgEgKgGgFQgFgEgKgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_1.setTransform(111.45,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_2.setTransform(99.975,16.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgEgFQgFgGgMAAQgJAAgHAHQgHAHAAAKIAABMIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAJgGQAEgDAFgCQAIgCAHAAQAUAAAOANQAOANAAATIAABcg");
	this.shape_3.setTransform(87.7,17.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQARAUABAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAANgSIAhASQgKARgQAJQgRAKgUAAQgggBgSgSgAAZgQQgDgKgGgFQgFgEgKgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_4.setTransform(72.25,18.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA8BFIAAhOQAAgLgDgGQgFgEgKAAQgKgBgGAIQgGAGAAANIAABJIgpAAIAAhPQAAgLgDgFQgFgEgJAAQgKgBgGAIQgGAGAAANIAABJIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAJgGQAEgDAGgCQAHgCAGAAQANAAAKAFQAJAHAFAJIAIgIIAJgHQAFgEAHgBIAQgBQATAAAMAMQAMAOAAATIAABcg");
	this.shape_5.setTransform(53.1,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzAxQgWgUABgdQgBgeAWgUQAVgUAeAAQAfAAAWAUQAUATAAAfQABAegVAUQgUAVghAAQgeAAgVgWgAgWgXQgKALAAANQAAANAKAJQAKAJAMAAQAQABAIgKQAJgJAAgPQAAgNgJgJQgKgJgOAAQgNAAgJAJg");
	this.shape_6.setTransform(33.35,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA9BFIAAhOQAAgLgFgGQgEgEgKAAQgKgBgGAIQgGAGAAANIAABJIgoAAIAAhPQAAgLgFgFQgDgEgKAAQgKgBgGAIQgGAGAAANIAABJIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAJgGQAEgDAGgCQAHgCAGAAQANAAAKAFQAJAHAFAJIAJgIIAIgHQAGgEAGgBIAQgBQATAAAMAMQAMAOAAATIAABcg");
	this.shape_7.setTransform(13.65,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q54, new cjs.Rectangle(0,0,136.9,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAeAAQAdABASASQATAUgBAiIABAFIgBADIhdAAQACAMAJAGQAIAGALAAQAPAAAPgSIAfASQgJARgQAJQgRAKgVAAQgegBgUgSgAAagQQgEgKgGgFQgFgEgKgBQgSAAgIAUIAzAAIAAAAg");
	this.shape.setTransform(132.6,18.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_1.setTransform(121.125,16.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQARAUABAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAANgSIAhASQgKARgQAJQgRAKgUAAQgggBgSgSgAAZgQQgDgKgGgFQgFgEgKgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_2.setTransform(109.15,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBhIAAiGIAoAAIAACGgAgRg2QgHgHAAgKQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAHAAAKQAAALgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(98.175,15.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBFIAAiGIAnAAIAAAVQACgJAJgHQAJgIALAAIAJAAIAAAqQgEgCgKAAQgZAAAAAiIAAA/g");
	this.shape_4.setTransform(90.45,17.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_5.setTransform(76.85,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBEIg4iHIAtAAIAdBPIAchPIArAAIg1CHg");
	this.shape_6.setTransform(61.25,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2A0QgRgUAAggQgBgcAUgUQASgWAdAAQAKAAAJAFQAIADAKAJIAAgOIApAAIAACGIgqAAIAAgNIgBABIgGAFIgIAEIgLAFQgFACgIAAQgdgBgRgSgAgVgXQgJAKAAANQAAAOAJAKQAIAKANAAQAOgBAKgIQAJgKAAgPQAAgNgJgKQgJgJgNAAQgOAAgJAJg");
	this.shape_7.setTransform(45.1,18.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBcIAAhjIgOAAIAAgjIAOAAIAAgHQAAgWAMgKQAMgKAUAAQAJAAAMADIAAAjIgNgCQgIAAgCACQgDADAAAIIAWAAIAAAjIgWAAIAABjg");
	this.shape_8.setTransform(33.3,15.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAdAAQAeABASASQATAUgBAiIABAFIgBADIhdAAQACAMAJAGQAIAGALAAQAPAAAPgSIAfASQgJARgQAJQgRAKgVAAQgegBgUgSgAAagQQgEgKgGgFQgFgEgKgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_9.setTransform(16.5,18.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUB3IAAiyIAoAAIAACygAgRhMQgHgHAAgKQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAHAAAKQAAALgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_10.setTransform(5.525,17.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q53, new cjs.Rectangle(0,0,142.3,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape.setTransform(134.625,16.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQARAUABAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAAOgSIAgASQgKARgQAJQgRAKgUAAQgggBgSgSgAAZgQQgDgKgGgFQgFgEgKgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_1.setTransform(122.65,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA8BFIAAhOQAAgLgDgGQgFgEgKAAQgKgBgGAIQgGAGAAANIAABJIgpAAIAAhPQAAgLgDgFQgFgEgJAAQgKgBgGAIQgGAGAAANIAABJIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAJgGQAEgDAGgCQAHgCAGAAQANAAAKAFQAJAHAFAJIAJgIIAIgHQAFgEAHgBIAPgBQAUAAAMAMQAMAOAAATIAABcg");
	this.shape_2.setTransform(103.5,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BBQgSgTABgeQAAgcASgVQASgVAcAAQAKAAAKADQAJAEAGAEIADAEIAAguIAqAAIAACoIgpAAIAAgPQgRASgZAAQgcAAgQgVgAgVgHQgJAJAAAOQAAAOAJAJQAJAKANAAQAPAAAJgJQAJgKAAgOQAAgPgJgIQgJgJgOAAQgOAAgJAJg");
	this.shape_3.setTransform(78.6,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_4.setTransform(67.125,16.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguA1QgQgQAAgcIAAhNIAoAAIAABMQAAALAHAGQAGAGAKAAQAKAAAHgGQAFgFAAgLIAAhNIApAAIAABPQAAAcgRAPQgRAPgeAAQgcAAgSgQg");
	this.shape_5.setTransform(55.9,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBEIg5iHIAuAAIAcBPIAchPIArAAIg1CHg");
	this.shape_6.setTransform(40.6,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABASASQATAUgBAiIABAFIgBADIhdAAQACAMAJAGQAJAGAKAAQAQAAAOgSIAfASQgIARgRAJQgRAKgVAAQgegBgTgSgAAagQQgFgKgFgFQgGgEgJgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_7.setTransform(25.6,18.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBQQgSgNgDgVIAuAAQADAGAFACQAFACAHABQAMgBAIgFQAHgGAAgKIAAgKQgHAGgKAFQgLAEgKAAQgaAAgQgSQgQgTAAgbQAAgdAQgTQAQgUAaAAQAMAAAKAFQAJADAJAKIAAgPIAnAAIAAB2QAAAegTARQgUARgeAAQgZAAgTgNgAgVgvQgHAJAAAOQAAAOAHAIQAIAJANgBQAOABAIgKQAJgJAAgMQgBgOgHgKQgJgJgOAAQgNAAgIAKg");
	this.shape_8.setTransform(9.7,20.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q52, new cjs.Rectangle(0,0,140.8,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgEgFQgFgGgMAAQgJAAgHAHQgHAHAAAKIAABMIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAJgGQAEgDAFgCQAIgCAHAAQAUAAAOANQAOANAAATIAABcg");
	this.shape.setTransform(136.75,17.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQARAUABAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAAOgSIAgASQgKARgQAJQgRAKgUAAQgggBgSgSgAAZgQQgDgKgGgFQgFgEgKgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_1.setTransform(121.3,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBUIgog2IAAA2IgoAAIAAinIAoAAIAABSIAmgxIAxAAIg1A9IA5BJg");
	this.shape_2.setTransform(107.375,16.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAeAAQAdABATASQARAUAAAiIABAFIgBADIheAAQAEAMAIAGQAJAGALAAQAOAAAOgSIAhASQgJARgRAJQgRAKgUAAQgfgBgUgSgAAZgQQgEgKgFgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_3.setTransform(91.8,18.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAVgUAfAAQAfAAAUAUQAWATAAAfQAAAegVAUQgUAVghAAQgeAAgVgWgAgWgXQgKALABANQgBANAKAJQAJAJANAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgIgJgOAAQgOAAgJAJg");
	this.shape_4.setTransform(76.15,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBEIAAAPIgoAAIAAioIApAAIAAAuIAFgEIAPgHQALgEAJAAQAdAAARAVQASAVAAAbQAAAdgRAVQgSAVgbAAQgZAAgSgSgAgXgHQgJAIAAAOQAAAQAJAJQAKAJAPAAQAOAAAIgKQAIgJAAgQQAAgNgJgIQgJgJgOAAQgNgBgKAKg");
	this.shape_5.setTransform(60.025,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAVgUAfAAQAfAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAJAJANAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgNAAQgOAAgJAJg");
	this.shape_6.setTransform(43.2,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_7.setTransform(31.175,16.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAxQgWgUAAgdQAAgeAWgUQAVgUAeAAQAgAAAVAUQAVATgBAfQAAAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgKALABANQgBANAKAJQAKAJAMAAQAQABAIgKQAJgJAAgPQAAgNgJgJQgKgJgOAAQgNAAgJAJg");
	this.shape_8.setTransform(18.6,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBcIAAhjIgPAAIAAgjIAOAAIAAgHQAAgWAMgKQAMgKAVAAQAKAAALADIAAAjIgNgCQgHAAgDACQgDADAAAIIAWAAIAAAjIgWAAIAABjg");
	this.shape_9.setTransform(6.7,15.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q51, new cjs.Rectangle(0,0,146.8,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAlBMIgLgcIg0AAIgKAcIgrAAIA5iYIAtAAIA5CYgAAQASIgQgvIgQAvIAgAAg");
	this.shape.setTransform(59.475,15.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BMIgMhXIgjBXIgSAAIgihXIgLBXIgoAAIAYiYIAnAAIAgBTIAfhTIAoAAIAZCYg");
	this.shape_1.setTransform(41.1,15.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBMIAAiYIBYAAIAAAjIgwAAIAAAZIAtAAIAAAhIgtAAIAAAZIAxAAIAAAig");
	this.shape_2.setTransform(25.175,15.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBMIAAg+Ig3AAIAAA+IgoAAIAAiYIAoAAIAAA6IA3AAIAAg6IAoAAIAACYg");
	this.shape_3.setTransform(10.5,15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q49, new cjs.Rectangle(0,0,70.1,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSBsIAAiiIAkAAIAACigAgPhFQgHgGABgKQgBgJAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAJQgBAJgGAHQgHAHgJAAQgJAAgGgHg");
	this.shape.setTransform(104.45,15.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBYIAAh6IAkAAIAAB6gAgPgxQgHgGABgKQgBgJAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAJQgBAJgGAHQgHAHgJAAQgJAAgGgHg");
	this.shape_1.setTransform(98.15,13.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA+IAAANIgkAAIAAiYIAlAAIAAAqIAFgEIANgHQAKgDAJAAQAaAAAPATQAQASAAAaQAAAagPATQgQATgZAAQgXAAgQgQgAgVgGQgIAGAAAOQAAAOAIAIQAJAJAOAAQANAAAHgJQAHgJAAgOQAAgMgIgHQgIgJgNAAQgMAAgJAJg");
	this.shape_2.setTransform(87.675,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAvQgSgRAAgeQAAgbASgSQASgSAaAAQAbAAARASQAQARAAAfIABAEIgBADIhVAAQACALAIAGQAIAFAKAAQANAAANgRIAdARQgIAPgPAIQgPAJgTAAQgcAAgRgRgAAXgPQgDgIgGgFQgFgEgIAAQgRAAgHARIAuAAIAAAAg");
	this.shape_3.setTransform(68.725,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBsIAAiiIAkAAIAACigAgPhFQgGgGAAgKQAAgJAGgHQAGgGAJAAQAJAAAHAGQAGAHABAJQAAAJgIAHQgGAHgJAAQgJAAgGgHg");
	this.shape_4.setTransform(58.75,15.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxA7QgQgSAAgbQAAgYARgUQAQgTAaAAQAJAAAJADQAJAEAEADIAEAEIAAgqIAlAAIAACYIglAAIAAgNQgQAQgWAAQgZAAgPgTgAgTgGQgIAIAAAMQAAANAIAJQAIAJALAAQAPAAAIgJQAIgJAAgNQAAgMgIgIQgIgJgNABQgNgBgIAJg");
	this.shape_5.setTransform(43.475,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA+IAAhHQAAgIgEgGQgEgFgLAAQgIAAgHAGQgGAHAAAIIAABFIgmAAIAAh5IAmAAIAAAPIABgCIAEgDIAHgGIAJgEQAHgDAGAAQATAAANAMQANAMAAARIAABTg");
	this.shape_6.setTransform(29.125,16.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBYIAAh6IAkAAIAAB6gAgPgxQgGgGAAgKQAAgJAGgHQAHgGAIAAQAJAAAHAGQAGAHABAJQAAAJgIAHQgGAHgJAAQgJAAgGgHg");
	this.shape_7.setTransform(18.8,13.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA9Igzh5IApAAIAaBHIAZhHIAnAAIgwB5g");
	this.shape_8.setTransform(8.825,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q48, new cjs.Rectangle(0,0,109.8,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AguAuQgUgUAAgaQAAgbAUgTQATgSAbAAQAdAAATASQATATAAAbQAAAcgTASQgTASgdABQgbAAgTgTgAgUgUQgJAIAAANQAAALAJAJQAIAJAMAAQAOAAAIgJQAIgIAAgOQAAgLgJgJQgIgHgNgBQgMAAgIAJg");
	this.shape.setTransform(114.125,16.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAuQgRgSAAgbQAAgbASgSQARgTAbAAQAQAAANAGIAAAnQgEgEgHgEQgJgCgHAAQgMAAgHAJQgIAJgBAMQAAAMAJAIQAIAHAMAAQAHABAIgDQAJgDACgDIAAAkQgRAHgMAAQgbAAgSgSg");
	this.shape_1.setTransform(101.3,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAvQgSgRAAgeQAAgbASgSQASgSAaAAQAbAAARASQAQARAAAfIABAEIgBADIhVAAQACALAIAGQAIAFAKAAQANAAANgRIAdARQgIAPgPAIQgPAJgTAAQgcAAgRgRgAAXgPQgDgIgGgFQgFgEgIAAQgRAAgHARIAuAAIAAAAg");
	this.shape_2.setTransform(89.125,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA7QgQgSAAgbQAAgYARgUQAQgTAaAAQAJAAAJADQAJAEAEADIAEAEIAAgqIAlAAIAACYIglAAIAAgNQgQAQgWAAQgZAAgPgTgAgTgGQgIAIAAAMQAAANAIAJQAIAJALAAQAPAAAIgJQAIgJAAgNQAAgMgIgIQgIgJgNABQgNgBgIAJg");
	this.shape_3.setTransform(74.375,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA7QgQgSAAgbQAAgYARgUQAQgTAaAAQAJAAAJADQAJAEAEADIAEAEIAAgqIAlAAIAACYIglAAIAAgNQgQAQgWAAQgZAAgPgTgAgTgGQgIAIAAAMQAAANAIAJQAIAJALAAQAPAAAIgJQAIgJAAgNQAAgMgIgIQgIgJgNABQgNgBgIAJg");
	this.shape_4.setTransform(59.225,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA+IAAhHQAAgIgEgGQgEgFgLAAQgIAAgHAGQgGAHAAAIIAABFIgmAAIAAh5IAmAAIAAAPIABgCIAEgDIAHgGIAJgEQAHgDAGAAQATAAANAMQANAMAAARIAABTg");
	this.shape_5.setTransform(44.875,16.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxAuQgQgQAAgeQAAgZARgTQARgTAaAAQAJAAAIADQAJAEAIAIIAAgNIAlAAIAAB6IglAAIAAgMIgCACIgFADIgIAFIgKAEIgLABQgaAAgQgSgAgTgUQgIAIAAAMQAAANAHAIQAIAJAMAAQAMABAKgJQAIgIAAgOQAAgMgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_6.setTransform(29.8,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWA9IgWhAIgVBAIggAAIgvh5IAnAAIAYBCIAXhCIAcAAIAZBDIAYhDIAmAAIguB5g");
	this.shape_7.setTransform(12.25,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q47, new cjs.Rectangle(0,0,123.7,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUA+IAAhHQAAgIgEgGQgEgFgLAAQgIAAgHAGQgGAHAAAIIAABFIgmAAIAAh5IAmAAIAAAPIABgCIAEgDIAHgGIAJgEQAHgDAGAAQATAAANAMQANAMAAARIAABTg");
	this.shape.setTransform(118.725,16.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAvQgSgRAAgeQAAgbASgSQASgSAaAAQAbAAARASQAQARAAAfIABAEIgBADIhVAAQACALAIAGQAIAFAKAAQANAAANgRIAdARQgIAPgPAIQgPAJgTAAQgcAAgRgRgAAXgPQgDgIgGgFQgFgEgIAAQgRAAgHARIAuAAIAAAAg");
	this.shape_1.setTransform(104.675,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBTIAAiiIAlAAIAAANQAQgQAWAAQAZAAAQASQAPATAAAaQAAAagQATQgQATgbABQgIAAgJgEQgJgEgEgDIgFgDIAAAzgAgVgoQgJAJAAANQAAAOAJAHQAJAJAMAAQAMgBAIgIQAIgJAAgMQAAgNgIgJQgIgJgMABQgNAAgIAIg");
	this.shape_2.setTransform(90.525,18.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA+IAAh5IAkAAIAAATQACgIAIgHQAIgHAKAAIAJAAIAAAnQgFgDgIAAQgYAAAAAgIAAA4g");
	this.shape_3.setTransform(78.8,16.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguAuQgUgUAAgaQAAgbAUgTQATgSAbAAQAdAAATASQATATAAAbQAAAcgTASQgTASgdABQgbAAgTgTgAgUgUQgJAIAAANQAAALAJAJQAIAJAMAAQAOAAAIgJQAIgIAAgOQAAgLgJgJQgIgHgNgBQgMAAgIAJg");
	this.shape_4.setTransform(66.475,16.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA9IgXhAIgVBAIghAAIguh5IAnAAIAYBCIAXhCIAdAAIAYBDIAXhDIAnAAIguB5g");
	this.shape_5.setTransform(48.85,16.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBMIAAhYIgMAAIAAghIAMAAIAAgfIAlAAIAAAfIAUAAIAAAhIgUAAIAABYg");
	this.shape_6.setTransform(35.075,15.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA+IAAhHQAAgIgEgGQgEgFgLAAQgIAAgHAGQgGAHAAAIIAABFIgmAAIAAh5IAmAAIAAAPIABgCIAEgDIAHgGIAJgEQAHgDAGAAQATAAANAMQANAMAAARIAABTg");
	this.shape_7.setTransform(23.925,16.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAuQgUgUAAgaQAAgbAUgTQATgSAbAAQAdAAATASQATATAAAbQAAAcgTASQgTASgdABQgbAAgTgTgAgUgUQgJAIAAANQAAALAJAJQAIAJAMAAQAOAAAIgJQAIgIAAgOQAAgLgJgJQgIgHgNgBQgMAAgIAJg");
	this.shape_8.setTransform(9.375,16.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q42, new cjs.Rectangle(0,0,128,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgXBTIAAhZIgNAAIAAggIANAAIAAgGQAAgUALgJQALgJASAAQAJAAALACIAAAfIgNgBQgGAAgDADQgCACAAAHIAUAAIAAAgIgUAAIAABZg");
	this.shape.setTransform(109.175,14.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBMIAAiYIAjAAIAACYg");
	this.shape_1.setTransform(101.75,15.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAvQgSgRAAgeQAAgbASgSQASgSAaAAQAbAAARASQAQARAAAfIABAEIgBADIhVAAQACALAIAGQAIAFAKAAQANAAANgRIAdARQgIAPgPAIQgPAJgTAAQgcAAgRgRgAAXgPQgDgIgGgFQgFgEgIAAQgRAAgHARIAuAAIAAAAg");
	this.shape_2.setTransform(91.775,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2A9IAyhZIgrAAIAAggIBmAAIgzBZIAxAAIAAAgg");
	this.shape_3.setTransform(79.05,16.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrAvQgSgRAAgeQAAgbASgSQASgSAaAAQAbAAARASQAQARAAAfIABAEIgBADIhVAAQACALAIAGQAIAFAKAAQANAAANgRIAdARQgIAPgPAIQgPAJgTAAQgcAAgRgRgAAXgPQgDgIgGgFQgFgEgIAAQgRAAgHARIAuAAIAAAAg");
	this.shape_4.setTransform(61.875,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBsIAAiiIAkAAIAACigAgPhFQgHgGABgKQgBgJAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAJQgBAJgGAHQgHAHgJAAQgJAAgGgHg");
	this.shape_5.setTransform(51.9,15.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBMIglgxIAAAxIglAAIAAiYIAlAAIAABLIAigsIAtAAIgwA4IA1BBg");
	this.shape_6.setTransform(38.75,15.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAuQgUgUAAgaQAAgbAUgTQATgSAbAAQAdAAATASQATATAAAbQAAAcgTASQgTASgdABQgbAAgTgTgAgUgUQgJAIAAANQAAALAJAJQAIAJAMAAQAOAAAIgJQAIgIAAgOQAAgLgJgJQgIgHgNgBQgMAAgIAJg");
	this.shape_7.setTransform(24.075,16.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAuQgUgUAAgaQAAgbAUgTQATgSAbAAQAdAAATASQATATAAAbQAAAcgTASQgTASgdABQgbAAgTgTgAgUgUQgJAIAAANQAAALAJAJQAIAJAMAAQAOAAAIgJQAIgIAAgOQAAgLgJgJQgIgHgNgBQgMAAgIAJg");
	this.shape_8.setTransform(9.375,16.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q41, new cjs.Rectangle(0,0,114.8,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BBQgQgTgBgeQAAgcATgVQASgVAcAAQAKAAAKADQAKAEAEAEIAFAEIAAguIAoAAIAACoIgnAAIAAgPQgSASgZAAQgbAAgSgVgAgVgHQgIAJAAAOQAAAOAIAJQAIAKANAAQAQAAAJgJQAJgKAAgOQAAgPgJgIQgJgJgOAAQgOAAgJAJg");
	this.shape.setTransform(73.6,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgEgFQgFgGgMAAQgJAAgHAHQgHAHAAAKIAABMIgpAAIAAiGIAoAAIAAARIACgCIAFgFIAIgGQADgDAHgCQAGgCAIAAQAUAAAOANQAPANAAATIAABcg");
	this.shape_1.setTransform(57.8,17.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_2.setTransform(41.75,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBEIg4iHIAtAAIAdBPIAchPIArAAIg1CHg");
	this.shape_3.setTransform(26.15,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A0QgRgUAAggQgBgcAUgUQASgWAdAAQAKAAAJAFQAIADAKAJIAAgOIApAAIAACGIgqAAIAAgNIgBABIgGAFIgIAEIgLAFQgFACgIAAQgdgBgRgSgAgVgXQgJAKAAANQAAAOAJAKQAIAKANAAQAOgBAKgIQAJgKAAgPQAAgNgJgKQgJgJgNAAQgOAAgJAJg");
	this.shape_4.setTransform(10,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q28, new cjs.Rectangle(0,0,84.5,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoATIAAglIBRAAIAAAlg");
	this.shape.setTransform(120.925,17.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAqIAfgQIADADIAGAGQAFADAFAAQAEAAAFgCQAEgDAAgEQABgFgHgDIgNgFQgKgDgIgFQgJgEgHgHQgGgKAAgNQAAgUAPgLQAOgMAWgBQAPAAALAIQAMAIAGAOIgfAOIgCgDIgFgFQgFgDgEAAQgKAAAAAIQgBAEAFACIAKAFIAQAFIAPAIQAGAEAFAIQAFAHAAAMQAAAUgQANQgPALgWABQgjgBgPgcg");
	this.shape_1.setTransform(110,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAeAAQAdABASASQATAUgBAiIABAFIgBADIhdAAQADAMAIAGQAIAGALAAQAPAAAOgSIAgASQgJARgQAJQgRAKgVAAQgegBgUgSgAAagQQgFgKgFgFQgFgEgKgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_2.setTransform(96.95,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUB3IAAiyIAoAAIAACygAgRhMQgHgHAAgKQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAHAAAKQAAALgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(85.975,17.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_4.setTransform(78.525,16.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABASASQATAUgBAiIABAFIgBADIhdAAQACAMAJAGQAJAGAKAAQAQAAAOgSIAfASQgIARgRAJQgRAKgVAAQgegBgTgSgAAagQQgFgKgFgFQgGgEgJgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_5.setTransform(66.55,18.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_6.setTransform(55.525,16.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_7.setTransform(48.575,16.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQARAUABAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAAOgSIAgASQgKARgQAJQgRAKgUAAQgggBgSgSgAAZgQQgDgKgGgFQgFgEgKgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_8.setTransform(37.6,18.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHBbIAAiyIAoAAIAAAOQARgRAZAAQAcAAAQAUQARAVAAAdQAAAcgRAVQgSAVgdAAQgKAAgJgEQgKgEgFgEIgFgDIAAA4gAgYgsQgJAKAAAPQAAAOAKAIQAJAJAOAAQANAAAJgJQAJgJAAgOQAAgOgJgKQgIgJgOAAQgPAAgJAJg");
	this.shape_9.setTransform(22.075,20.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzAqIAfgQIACADIAHAGQAFADAFAAQAEAAAFgCQAEgDABgEQAAgFgHgDIgOgFQgIgDgKgFQgIgEgGgHQgHgKAAgNQAAgUAPgLQAOgMAWgBQAOAAAMAIQAMAIAGAOIgfAOIgCgDIgFgFQgEgDgGAAQgJAAgBAIQABAEAEACIAKAFIAQAFIAOAIQAIAEAEAIQAFAHAAAMQAAAUgQANQgQALgVABQgjgBgPgcg");
	this.shape_10.setTransform(7.55,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q27, new cjs.Rectangle(0,0,128.3,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgEgFQgEgGgNAAQgJAAgHAHQgHAHAAAKIAABMIgpAAIAAiGIAoAAIAAARIACgCIAEgFIAIgGQAFgDAFgCQAIgCAHAAQAUAAAOANQAOANAAATIAABcg");
	this.shape.setTransform(101.75,17.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAeAAQAdABATASQARAUABAiIAAAFIAAADIhfAAQAEAMAIAGQAJAGALAAQAOAAAOgSIAhASQgJARgRAJQgRAKgUAAQgggBgTgSgAAZgQQgEgKgFgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_1.setTransform(86.3,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQASAUAAAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAAOgSIAfASQgIARgRAJQgRAKgVAAQgfgBgSgSgAAZgQQgDgKgGgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_2.setTransform(71.25,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBFIAAiGIAoAAIAAAVQACgJAJgHQAJgIALAAIAKAAIAAAqQgFgCgKAAQgZAAAAAiIAAA/g");
	this.shape_3.setTransform(54.9,17.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_4.setTransform(41.3,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_5.setTransform(25.1,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBEIg4iHIAtAAIAdBPIAchPIArAAIg1CHg");
	this.shape_6.setTransform(9.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q22, new cjs.Rectangle(0,0,111.8,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape.setTransform(83.275,16.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAzQgTgUAAgeQAAgdAUgVQAUgVAdAAQARABAPAGIAAArQgEgEgJgEQgJgEgIAAQgNAAgIALQgJAKAAANQAAAOAJAIQAJAJAOAAQAHAAAJgEQAJgCADgDIAAAmQgTAJgNAAQgegBgUgTg");
	this.shape_1.setTransform(72.825,18.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQASAUAAAiIAAAFIAAADIheAAQACAMAJAGQAIAGAMAAQAPAAAOgSIAfASQgIARgRAJQgRAKgVAAQgfgBgSgSgAAagQQgEgKgGgFQgGgEgJgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_2.setTransform(59.45,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBcIAAhjIgPAAIAAgjIAPAAIAAgHQgBgWAMgKQAMgKAVAAQAKAAALADIAAAjIgNgCQgHAAgDACQgDADAAAIIAWAAIAAAjIgWAAIAABjg");
	this.shape_3.setTransform(48.1,15.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBFIAAiGIAnAAIAAAVQACgJAJgHQAJgIAMAAIAJAAIAAAqQgGgCgJAAQgZAAgBAiIAAA/g");
	this.shape_4.setTransform(39.2,17.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQAUgUAdAAQAdABASASQASAUAAAiIABAFIgBADIhdAAQADAMAIAGQAIAGALAAQAPAAAOgSIAhASQgKARgQAJQgRAKgUAAQgfgBgUgSgAAZgQQgEgKgFgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_5.setTransform(26.2,18.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBbIAAiyIAoAAIAAAOQARgRAZAAQAcAAAQAUQARAVAAAdQAAAcgRAVQgSAVgdAAQgKAAgJgEQgKgEgFgEIgFgDIAAA4gAgYgsQgJAKAAAPQAAAOAKAIQAJAJAOAAQANAAAJgJQAJgJAAgOQAAgOgJgKQgIgJgOAAQgPAAgJAJg");
	this.shape_6.setTransform(10.675,20.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q21, new cjs.Rectangle(0,0,89.4,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape.setTransform(102.275,16.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBFIAAhOQAAgLgFgFQgEgGgMAAQgJAAgHAHQgHAHAAAKIAABMIgqAAIAAiGIAqAAIAAARIABgCIAFgFIAHgGQAFgDAGgCQAGgCAIAAQAUAAAOANQAPANAAATIAABcg");
	this.shape_1.setTransform(90,17.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBhIAAiGIAoAAIAACGgAgRg2QgHgHAAgKQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAHAAAKQAAALgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(78.625,15.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzAqIAggQIACADIAGAGQAFADAFAAQAFAAAEgCQAFgDgBgEQAAgFgFgDIgOgFQgKgDgJgFQgJgEgGgHQgGgKAAgNQAAgUAOgLQAPgMAWgBQAOAAAMAIQAMAIAGAOIgfAOIgBgDIgGgFQgFgDgFAAQgKAAABAIQgBAEAFACIALAFIAPAFIAPAIQAGAEAFAIQAFAHAAAMQAAAUgQANQgPALgWABQgjgBgPgcg");
	this.shape_3.setTransform(69.25,18.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBFIAAiGIAoAAIAAAVQACgJAJgHQAJgIALAAIAKAAIAAAqQgFgCgKAAQgZAAAAAiIAAA/g");
	this.shape_4.setTransform(54.9,17.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_5.setTransform(41.3,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAWgUAdAAQAgAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAKAJAMAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgOAAQgNAAgJAJg");
	this.shape_6.setTransform(25.1,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBEIg4iHIAtAAIAdBPIAchPIArAAIg1CHg");
	this.shape_7.setTransform(9.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q13, new cjs.Rectangle(0,0,108.4,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgzAqIAggQIACADIAGAGQAFADAFAAQAFAAAEgCQAFgDgBgEQAAgFgFgDIgOgFQgJgDgJgFQgJgEgHgHQgGgKAAgNQAAgUAOgLQAPgMAWgBQAPAAALAIQAMAIAGAOIgfAOIgBgDIgGgFQgFgDgEAAQgKAAAAAIQgBAEAFACIAKAFIAQAFIAPAIQAGAEAFAIQAFAHAAAMQAAAUgQANQgPALgWABQgjgBgPgcg");
	this.shape.setTransform(149.25,18.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA1QgRgQgBgcIAAhNIApAAIAABMQAAALAGAGQAHAGAJAAQAMAAAFgGQAGgFAAgLIAAhNIAoAAIAABPQAAAcgRAPQgQAPgeAAQgdAAgQgQg");
	this.shape_1.setTransform(135.95,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2A0QgSgUAAggQABgcASgUQATgWAdAAQAKAAAJAFQAJADAJAJIAAgOIAoAAIAACGIgoAAIAAgNIgCABIgGAFIgIAEIgLAFQgGACgHAAQgcgBgSgSgAgVgXQgIAKAAANQAAAOAIAKQAIAKANAAQAOgBAKgIQAJgKAAgPQABgNgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_2.setTransform(119.5,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQASAUAAAiIAAAFIAAADIhfAAQADAMAJAGQAIAGAMAAQAPAAAOgSIAfASQgIARgRAJQgRAKgVAAQgfgBgSgSgAAagQQgEgKgGgFQgGgEgJgBQgSAAgIAUIAzAAIAAAAg");
	this.shape_3.setTransform(104,18.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BBQgRgTgBgeQAAgcATgVQASgVAcAAQAKAAAKADQAKAEAEAEIAFAEIAAguIAoAAIAACoIgnAAIAAgPQgSASgZAAQgcAAgQgVgAgVgHQgJAJABAOQgBAOAJAJQAJAKAMAAQAQAAAJgJQAJgKAAgOQAAgPgJgIQgJgJgOAAQgOAAgJAJg");
	this.shape_4.setTransform(87.8,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2A0QgRgUAAggQAAgcASgUQAUgWAbAAQALAAAJAFQAIADAKAJIAAgOIAoAAIAACGIgoAAIAAgNIgCABIgFAFIgIAEIgMAFQgFACgIAAQgdgBgRgSgAgVgXQgJAKABANQgBAOAJAKQAIAKANAAQAOgBAKgIQAKgKAAgPQgBgNgIgKQgKgJgOAAQgNAAgJAJg");
	this.shape_5.setTransform(71.15,18.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAzQgTgUAAgeQAAgdAUgVQAUgVAdAAQARABAPAGIAAArQgEgEgJgEQgJgEgIAAQgNAAgIALQgJAKAAANQAAAOAJAIQAJAJAOAAQAHAAAJgEQAJgCADgDIAAAmQgTAJgNAAQgegBgUgTg");
	this.shape_6.setTransform(57.175,18.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzAxQgVgUgBgdQABgeAVgUQAVgUAfAAQAfAAAUAUQAWATAAAfQgBAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgJALAAANQAAANAJAJQAJAJANAAQAPABAJgKQAJgJAAgPQAAgNgKgJQgJgJgNAAQgOAAgJAJg");
	this.shape_7.setTransform(43.2,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_8.setTransform(31.175,16.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzAxQgWgUAAgdQAAgeAWgUQAVgUAeAAQAgAAAVAUQAVATgBAfQAAAegUAUQgVAVggAAQgeAAgVgWgAgWgXQgKALABANQgBANAKAJQAKAJAMAAQAQABAIgKQAJgJAAgPQAAgNgJgJQgKgJgOAAQgNAAgJAJg");
	this.shape_9.setTransform(18.6,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZBcIAAhjIgPAAIAAgjIAOAAIAAgHQAAgWAMgKQAMgKAVAAQAKAAALADIAAAjIgNgCQgHAAgDACQgDADAAAIIAWAAIAAAjIgWAAIAABjg");
	this.shape_10.setTransform(6.7,15.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q12, new cjs.Rectangle(0,0,157.3,32.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQATgUAeAAQAdABASASQATAUgBAiIABAFIgBADIhdAAQADAMAIAGQAIAGALAAQAPAAAOgSIAgASQgJARgQAJQgRAKgUAAQgfgBgUgSgAAagQQgFgKgFgFQgFgEgKgBQgSAAgIAUIAzAAIAAAAg");
	this.shape.setTransform(117.65,18.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBUIAAhhIgNAAIAAglIANAAIAAghIAoAAIAAAhIAWAAIAAAmIgWAAIAABgg");
	this.shape_1.setTransform(106.175,16.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAqIAfgQIACADIAHAGQAFADAFAAQAFAAAEgCQAEgDABgEQAAgFgHgDIgNgFQgKgDgIgFQgKgEgFgHQgHgKAAgNQAAgUAPgLQAOgMAWgBQAPAAALAIQAMAIAGAOIgfAOIgCgDIgFgFQgEgDgFAAQgLAAAAAIQAAAEAFACIAKAFIAQAFIAOAIQAIAEAEAIQAFAHAAAMQAAAUgQANQgQALgVABQgjgBgPgcg");
	this.shape_2.setTransform(95.85,18.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBUIgog2IAAA2IgoAAIAAinIAoAAIAABSIAmgxIAxAAIg1A9IA5BJg");
	this.shape_3.setTransform(83.925,16.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtA1QgRgQgBgcIAAhNIApAAIAABMQAAALAGAGQAHAGAJAAQAMAAAFgGQAGgFAAgLIAAhNIAoAAIAABPQABAcgSAPQgQAPgeAAQgdAAgQgQg");
	this.shape_4.setTransform(68.1,18.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA0QgUgTAAghQAAgeAUgUQAUgUAcAAQAeABATASQASAUAAAiIAAAFIAAADIhfAAQADAMAJAGQAJAGALAAQAPAAAOgSIAfASQgIARgRAJQgRAKgVAAQgfgBgSgSgAAZgQQgDgKgGgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_5.setTransform(52.8,18.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_6.setTransform(41.775,16.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwA0QgTgTAAghQAAgeAUgUQAUgUAdAAQAdABASASQASAUAAAiIABAFIgBADIhdAAQADAMAIAGQAIAGALAAQAPAAAOgSIAhASQgKARgQAJQgRAKgUAAQgfgBgUgSgAAZgQQgEgKgFgFQgGgEgJgBQgSAAgIAUIAyAAIAAAAg");
	this.shape_7.setTransform(26.2,18.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BBQgQgTAAgeQAAgcASgVQASgVAdAAQAJAAAKADQAJAEAGAEIADAEIAAguIAqAAIAACoIgpAAIAAgPQgRASgZAAQgbAAgSgVgAgVgHQgJAJAAAOQAAAOAJAJQAIAKAOAAQAPAAAJgJQAJgKAAgOQAAgPgJgIQgJgJgOAAQgOAAgJAJg");
	this.shape_8.setTransform(10,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.q11, new cjs.Rectangle(0,0,127.4,32.2), null);


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
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect3, new cjs.Rectangle(0,0,19,19), null);


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
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect2, new cjs.Rectangle(0,0,19,19), null);


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
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rect1, new cjs.Rectangle(0,0,19,19), null);


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
	this.shape.setTransform(-0.0338,-0.0201,1.63,1.63,29.999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_flash, new cjs.Rectangle(-17.4,-17.4,34.7,35.099999999999994), null);


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
	this.instance.setTransform(-203,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_f3p2, new cjs.Rectangle(-203,-145,406,290), null);


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
	this.instance.setTransform(-85,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cupFront, new cjs.Rectangle(-85,-76,170,152), null);


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
	this.instance.setTransform(-124,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cardFront, new cjs.Rectangle(-124,-82.5,248,165), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1QgOgLAAgVIAAhTIAUAAIAABSQAAAOAJAGQAIAGAMAAQAMAAAIgGQAIgHAAgMIAAhTIAUAAIAABSQAAAVgOALQgOALgVAAQgVAAgNgKg");
	this.shape.setTransform(85.725,15.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA/IAAhRQAAgZgYAAQgQAAgJALQgIALAAARIAABDIgUAAIAAh6IATAAIAAARQANgUAXAAQATAAAMAKQALALAAARIAABXg");
	this.shape_1.setTransform(73.075,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVBNIgvg7IAAA7IgUAAIAAiYIAUAAIAABVIAug4IAYAAIgyA8IA1A/g");
	this.shape_2.setTransform(56.575,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBqIAAitIATAAIAACtgAgIhSQgFgEAAgGQAAgFAFgEQAEgEAEAAQAFAAAFAEQADAEAAAFQAAAGgDAEQgFAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(47.9,16.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBRIAAh6IATAAIAAB6gAgIg5QgFgEAAgFQAAgGAFgEQAEgEAEAAQAFAAAFAEQADAEAAAGQAAAFgDAEQgFAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(42.95,13.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBNIgvg7IAAA7IgUAAIAAiYIAUAAIAABVIAug4IAYAAIgyA8IA1A/g");
	this.shape_5.setTransform(35.875,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAuQgQgTAAgbQAAgaAQgTQARgTAZAAQAaAAAQATQAPATABAdIhgAAQgBASALANQAMAOARAAQAMAAALgIQAKgHADgKIARAIQgHAOgOAKQgPAKgRAAQgaAAgRgTgAAmgLQgCgPgJgLQgKgKgQAAQgOAAgLALQgLAKgBAPIBKAAIAAAAg");
	this.shape_6.setTransform(23,15.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBIQgMgHgFgIIAAASIgTAAIAAiYIAUAAIAAAvQAJgLAKgEQAJgFAMAAQAaAAARASQAQASAAAZQAAAbgQAUQgPAUgcAAQgMAAgMgGgAgegTQgLANAAAVQAAAVALAMQAMAMASAAQATAAALgOQAKgPAAgUQAAgRgLgNQgLgNgSAAQgTAAgLANg");
	this.shape_7.setTransform(9.525,14.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ct2, new cjs.Rectangle(0,0,94.3,29.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1QgOgLAAgVIAAhTIAUAAIAABSQAAAOAJAGQAIAGAMAAQAMAAAIgGQAIgHAAgMIAAhTIAUAAIAABSQAAAVgOALQgOALgVAAQgVAAgNgKg");
	this.shape.setTransform(85.725,15.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA/IAAhRQAAgZgYAAQgQAAgJALQgIALAAARIAABDIgUAAIAAh6IATAAIAAARQANgUAXAAQATAAAMAKQALALAAARIAABXg");
	this.shape_1.setTransform(73.075,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVBNIgvg7IAAA7IgUAAIAAiYIAUAAIAABVIAug4IAYAAIgyA8IA1A/g");
	this.shape_2.setTransform(56.575,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBqIAAitIATAAIAACtgAgIhSQgFgEAAgGQAAgFAFgEQAEgEAEAAQAFAAAFAEQADAEAAAFQAAAGgDAEQgFAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(47.9,16.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBRIAAh6IATAAIAAB6gAgIg5QgFgEAAgFQAAgGAFgEQAEgEAEAAQAFAAAFAEQADAEAAAGQAAAFgDAEQgFAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(42.95,13.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBNIgvg7IAAA7IgUAAIAAiYIAUAAIAABVIAug4IAYAAIgyA8IA1A/g");
	this.shape_5.setTransform(35.875,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAuQgQgTAAgbQAAgaAQgTQARgTAZAAQAaAAAQATQAPATABAdIhgAAQgBASALANQAMAOARAAQAMAAALgIQAKgHADgKIARAIQgHAOgOAKQgPAKgRAAQgaAAgRgTgAAmgLQgCgPgJgLQgKgKgQAAQgOAAgLALQgLAKgBAPIBKAAIAAAAg");
	this.shape_6.setTransform(23,15.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBIQgMgHgFgIIAAASIgTAAIAAiYIAUAAIAAAvQAJgLAKgEQAJgFAMAAQAaAAARASQAQASAAAZQAAAbgQAUQgPAUgcAAQgMAAgMgGgAgegTQgLANAAAVQAAAVALAMQAMAMASAAQATAAALgOQAKgPAAgUQAAgRgLgNQgLgNgSAAQgTAAgLANg");
	this.shape_7.setTransform(9.525,14.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ct1, new cjs.Rectangle(0,0,94.3,29.1), null);


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
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,300,600), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoBIQgEgEAAgHQAAgEAEgEIA2g1Ig2g0QgCgEAAgFQAAgFACgEQAEgEAHAAQAFAAACAEIBAA+QADACAAAGQAAAFgDAEIhAA/QgDADgGAAQgEAAgFgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arr, new cjs.Rectangle(-4.5,-7.5,9,15), null);


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
	this.instance.setTransform(64,150,1,1,0,0,0,47,16);

	this.instance_1 = new lib.q48();
	this.instance_1.setTransform(64,125.5,1,1,0,0,0,47,16);

	this.instance_2 = new lib.q47();
	this.instance_2.setTransform(64,101,1,1,0,0,0,47,16);

	this.instance_3 = new lib.q42();
	this.instance_3.setTransform(55,77.5,1,1,0,0,0,38,17);

	this.instance_4 = new lib.q41();
	this.instance_4.setTransform(45,54,1,1,0,0,0,28,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(17,36,128,127.6), null);


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
	this.instance.setTransform(30,99.6,1,1,0,0,0,30,16.5);

	this.instance_1 = new lib.q53();
	this.instance_1.setTransform(30,71.9,1,1,0,0,0,30,16.5);

	this.instance_2 = new lib.q52();
	this.instance_2.setTransform(57,44.7,1,1,0,0,0,57,17);

	this.instance_3 = new lib.q51();
	this.instance_3.setTransform(54,19,1,1,0,0,0,54,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,146.8,115.3), null);


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
	this.instance.setTransform(90,111,1,1,0,0,0,78,14);

	this.instance_1 = new lib.q27();
	this.instance_1.setTransform(90,83,1,1,0,0,0,78,14);

	this.instance_2 = new lib.q22();
	this.instance_2.setTransform(42,57,1,1,0,0,0,30,15);

	this.instance_3 = new lib.q21();
	this.instance_3.setTransform(45,32,1,1,0,0,0,33,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(12,14,128.3,115.19999999999999), null);


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
	this.instance.setTransform(69.6,117.7,1,1,0,0,0,53.6,18.7);

	this.instance_1 = new lib.q12();
	this.instance_1.setTransform(86,89.5,1,1,0,0,0,70,18);

	this.instance_2 = new lib.q11();
	this.instance_2.setTransform(122,62,1,1,0,0,0,106,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(16,44,157.3,87.19999999999999), null);


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
	this.arr.setTransform(102,15);

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

}).prototype = getMCSymbolPrototype(lib.subCTA, new cjs.Rectangle(-1,-1,107.5,29.1), null);


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
	this.instance.setTransform(252,175);

	this.instance_1 = new lib.mc_rect3();
	this.instance_1.setTransform(177,252);

	this.instance_2 = new lib.mc_rect3();
	this.instance_2.setTransform(252,328);

	this.instance_3 = new lib.mc_rect3();
	this.instance_3.setTransform(252,481);

	this.instance_4 = new lib.mc_rect3();
	this.instance_4.setTransform(252,22);

	this.instance_5 = new lib.mc_rect3();
	this.instance_5.setTransform(25,250);

	this.instance_6 = new lib.mc_rect3();
	this.instance_6.setTransform(25,404);

	this.instance_7 = new lib.mc_rect3();
	this.instance_7.setTransform(25,557);

	this.instance_8 = new lib.mc_rect3();
	this.instance_8.setTransform(103,328);

	this.instance_9 = new lib.mc_rect3();
	this.instance_9.setTransform(103,482);

	this.instance_10 = new lib.mc_rect3();
	this.instance_10.setTransform(178,405);

	this.instance_11 = new lib.mc_rect3();
	this.instance_11.setTransform(178,558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rectangles1, new cjs.Rectangle(25,22,246,555), null);


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
	this.instance.setTransform(252,175);

	this.instance_1 = new lib.mc_rect1();
	this.instance_1.setTransform(177,252);

	this.instance_2 = new lib.mc_rect1();
	this.instance_2.setTransform(252,328);

	this.instance_3 = new lib.mc_rect1();
	this.instance_3.setTransform(252,481);

	this.instance_4 = new lib.mc_rect1();
	this.instance_4.setTransform(252,22);

	this.instance_5 = new lib.mc_rect2();
	this.instance_5.setTransform(25,250);

	this.instance_6 = new lib.mc_rect1();
	this.instance_6.setTransform(25,404);

	this.instance_7 = new lib.mc_rect2();
	this.instance_7.setTransform(25,557);

	this.instance_8 = new lib.mc_rect1();
	this.instance_8.setTransform(103,328);

	this.instance_9 = new lib.mc_rect1();
	this.instance_9.setTransform(103,482);

	this.instance_10 = new lib.mc_rect2();
	this.instance_10.setTransform(178,405);

	this.instance_11 = new lib.mc_rect1();
	this.instance_11.setTransform(178,558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_rectangles, new cjs.Rectangle(25,22,246,555), null);


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
	this.instance.setTransform(-85,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cupA, new cjs.Rectangle(-85,-76,170,152), null);


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
	this.instance.setTransform(-124,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cardA, new cjs.Rectangle(-124,-83,248,165.5), null);


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

}).prototype = getMCSymbolPrototype(lib.i41, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-8,0,208,200), null);


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
		var self = this;
		//gsap.registerPlugin(CSSPlugin);
		
		var w = 300;
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
		tl.to(self.subCTA, {x:"+=150"}, d);
		d += 0.5;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut"}, d+0.3);
		tl.to(self.flash, {duration:0.2, alpha:1, scale:1, ease: "power1.out"}, d);
		d += 0.2;
		tl.set([self.cardA.front, self.cupA.front], {alpha:0}, d);
		tl.to(self.flash, {duration:0.2, alpha:0, ease: "power1.in"}, d);
		d += 0.5;
		tl.to(self.cardA, {duration:1, x:"-=320", ease: "back.in"}, d);
		d += 0.25;
		tl.to(self.cupA, {duration:1, x:"-=320", ease: "back.in"}, d);
		tl.to(self.txt.t1.children, {scaleY:0, alpha:0, stagger:0.1, ease: "back.in"}, d);
		
		////////////////frame_2
		d += 0.5;
		tl.from(self.txt.t2.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		tl.to([self.background.bg1, self.rectangles], {duration:1, alpha:0, ease: "none"}, d-0.5);//, onStart: function () {clickT = window.clickTag2}
		tl.from(self.rectangles1, {duration:1, alpha:0, ease: "none"}, d-0.5);
		d += 0.5;
		tl.from(self.cards, {duration:1, x:"+=300"}, d);
		d += 0.2;
		tl.from(self.puzzle, {duration:1, x:"+=300"}, d);
		d += 0.2;
		tl.from(self.mback, {duration:1, x:"+=300"}, d);
		d += 0.2;
		tl.from(self.mfront, {duration:1, x:"+=300"}, d);
		
		d += 0.2;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut"}, d);
		
		d += 1.5;
		
		tl.to(self.cards, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.puzzle, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.mback, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.mfront, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		
		d += 0.5;
		tl.to(self.txt.t2.children, {scaleY:0, alpha:0, stagger:0.1, ease: "back.in"}, d-0.3);
		
		////////////////////////frame_3
		d += 0.5;
		tl.from(self.txt.t3.children, {scaleY:0, alpha:0, stagger:0.1}, d);
		tl.to([self.background.bg1, self.rectangles], {duration:1, alpha:1, ease: "none"}, d-0.5);//, onStart: function () {clickT = window.clickTag3}
		
		tl.from(self.f3p1, {duration:1, x:"+=300"}, d);
		d += 0.2;
		tl.from(self.f3p2, {duration:1, x:"+=400"}, d);
		d += 0.2;
		tl.from(self.f3p3, {duration:1, x:"+=300"}, d);
		d += 0.4;
		tl.to(self.subCTA.arr, {duration:1, rotation:"+=360", ease: "back.inOut" }, d);
		d += 1.5;
		
		tl.to(self.f3p1, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.f3p2, {duration:1, x:"-=400", ease: "elastic.in(1.1, 0.9)"}, d);
		d += 0.2;
		tl.to(self.f3p3, {duration:1, x:"-=300", ease: "elastic.in(1.1, 0.9)"}, d);
		
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
	this.subCTA.setTransform(-94,168,1,1,0,0,0,38,11);

	this.timeline.addTween(cjs.Tween.get(this.subCTA).wait(1));

	// logo3d
	this.logo3d = new lib.logo3d();
	this.logo3d.name = "logo3d";
	this.logo3d.setTransform(229.75,557.1,0.82,0.82,0,0,0,75.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.logo3d).wait(1));

	// camera flash
	this.cf = new lib.mc_flash();
	this.cf.name = "cf";
	this.cf.setTransform(162,299);

	this.timeline.addTween(cjs.Tween.get(this.cf).wait(1));

	// frame4
	this.f4p6 = new lib.mc_f4p6();
	this.f4p6.name = "f4p6";
	this.f4p6.setTransform(234,473);

	this.f4p5 = new lib.mc_f4p5();
	this.f4p5.name = "f4p5";
	this.f4p5.setTransform(188,474);

	this.f4p4 = new lib.mc_f4p4();
	this.f4p4.name = "f4p4";
	this.f4p4.setTransform(236,427);

	this.f4p3 = new lib.mc_f4p3();
	this.f4p3.name = "f4p3";
	this.f4p3.setTransform(187,423);

	this.f4p1 = new lib.mc_f4p1();
	this.f4p1.name = "f4p1";
	this.f4p1.setTransform(145.6,312.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f4p1},{t:this.f4p3},{t:this.f4p4},{t:this.f4p5},{t:this.f4p6}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3ZPtIAG/ZMAutAAAIgGfZg");
	mask.setTransform(149.75,482.5);

	// frame4 poster
	this.f4p2 = new lib.mc_f4p2();
	this.f4p2.name = "f4p2";
	this.f4p2.setTransform(94,386);

	var maskedShapeInstanceList = [this.f4p2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.f4p2).wait(1));

	// frame3
	this.f3p3 = new lib.mc_f3p3();
	this.f3p3.name = "f3p3";
	this.f3p3.setTransform(99,510);

	this.f3p2 = new lib.mc_f3p2();
	this.f3p2.name = "f3p2";
	this.f3p2.setTransform(152,340);

	this.f3p1 = new lib.mv_f3p1();
	this.f3p1.name = "f3p1";
	this.f3p1.setTransform(238,178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f3p1},{t:this.f3p2},{t:this.f3p3}]}).wait(1));

	// frame2
	this.mfront = new lib.mc_mfront();
	this.mfront.name = "mfront";
	this.mfront.setTransform(160,504);

	this.mback = new lib.mc_mback();
	this.mback.name = "mback";
	this.mback.setTransform(62,535);

	this.puzzle = new lib.mc_puzzle();
	this.puzzle.name = "puzzle";
	this.puzzle.setTransform(150.5,347.5);

	this.cards = new lib.mc_cards();
	this.cards.name = "cards";
	this.cards.setTransform(218,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cards},{t:this.puzzle},{t:this.mback},{t:this.mfront}]}).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.setTransform(-220,0);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// flash
	this.flash = new lib.mc_circle();
	this.flash.name = "flash";
	this.flash.setTransform(150,300,0.1,0.1,0,0,0,1,1);
	this.flash.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(1));

	// cardA_B
	this.cardA = new lib.mc_cardA();
	this.cardA.name = "cardA";
	this.cardA.setTransform(152.95,305.45,1,1,-20.0002);

	this.timeline.addTween(cjs.Tween.get(this.cardA).wait(1));

	// cupA
	this.cupA = new lib.mc_cupA();
	this.cupA.name = "cupA";
	this.cupA.setTransform(120,464);

	this.timeline.addTween(cjs.Tween.get(this.cupA).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-797,290,1152,404);
// library properties:
lib.properties = {
	id: '1F8CA2A4A0EA654EABBB3FBCA823831E',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cardA.png?1604579958640", id:"cardA"},
		{src:"images/cardB.png?1604579958640", id:"cardB"},
		{src:"images/cards.png?1604579958640", id:"cards"},
		{src:"images/cupA.png?1604579958640", id:"cupA"},
		{src:"images/cupB.png?1604579958640", id:"cupB"},
		{src:"images/f3p1.png?1604579958640", id:"f3p1"},
		{src:"images/f3p2.png?1604579958640", id:"f3p2"},
		{src:"images/f3p3.png?1604579958640", id:"f3p3"},
		{src:"images/f4p1.png?1604579958640", id:"f4p1"},
		{src:"images/f4p2.png?1604579958640", id:"f4p2"},
		{src:"images/f4p3.png?1604579958640", id:"f4p3"},
		{src:"images/f4p4.png?1604579958640", id:"f4p4"},
		{src:"images/f4p5.png?1604579958640", id:"f4p5"},
		{src:"images/f4p6.png?1604579958640", id:"f4p6"},
		{src:"images/mback.png?1604579958640", id:"mback"},
		{src:"images/mfront.png?1604579958640", id:"mfront"},
		{src:"images/puzzle.png?1604579958640", id:"puzzle"}
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