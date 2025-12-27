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



(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,308);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,177);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,145);


(lib.deviceA = function() {
	this.initialize(img.deviceA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,290);


(lib.deviceB = function() {
	this.initialize(img.deviceB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,296);


(lib.im1 = function() {
	this.initialize(img.im1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,218);// helper functions:

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


(lib.whiteCircle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAAMgJAJQgJAJgMAAQgMAAgJgJQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMg");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AgVAVQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJg");
	this.shape_1.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteCircle, new cjs.Rectangle(-1,-1,8,8), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0095D1").s().p("A1DDjIG+nFMAjJAAAIm+HFg");
	this.shape.setTransform(134.825,22.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tb1, new cjs.Rectangle(0,0,269.7,45.5), null);


(lib.t42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAmAsIAAgxIAAgLQgBgDgDgCQgCgCgFAAQgFAAgEACQgEACgCADIAAALIAAAxIgXAAIAAgxIgBgMQgBgDgDgCQgDgBgFAAQgGAAgEADQgEACAAAEIAAA6IgYAAIAAhUIABgBIAHAAQANAAACAJQAIgLASAAQAJAAAEADQAGADADAGQAKgMARAAQAMAAAGAFQAHAFABAIQABAIAAALIAAAyg");
	this.shape.setTransform(108.4,15.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAFgKQAGgKAJgFQAJgFALAAQASAAAJAKQAKAKAAASIgBAKIg0AAQACALAFAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgEAFgBAJIAfAAIAAAAg");
	this.shape_1.setTransform(96.35,15.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAGgKQAEgKAKgFQAJgFALAAQASAAAKAKQAJAKAAASIAAAKIg0AAQAAALAGAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgHACgIAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgFAFQgDAFAAAJIAeAAIAAAAg");
	this.shape_2.setTransform(87.1,15.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAqQgBgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAZAAIAAASIgZAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgFACQgHABgGABQgUAAgGgQg");
	this.shape_3.setTransform(79.45,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYApQgJgEABgFIABgGIAEgHQAFAEAGACQAHADAGAAQANAAAAgJQAAgFgEgCQgDgDgIgCQgPgDgGgFQgHgHABgKQAAgMAKgHQAJgHAOAAQAOAAAJAEQAIADABAGQgBAEgFAIIgMgGQgHgCgFgBQgLABgBAHQAAAHANACQALACAGAEQAGADAEAFQACAFABAHQAAAOgKAIQgLAIgPAAQgNAAgJgEg");
	this.shape_4.setTransform(71.8,15.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiA8QgFgCAAgFQAAgEAFgJIAFADIAHACQAGAAADgEQAEgDADgHIACgJIgKAAIgchSQAFgCAIAAQAGAAADADQAEACACAGIAPA2IANgvQADgLAEgEQAEgDAHAAQAFAAAGACIgeBiQgHAagbAAQgIAAgFgEg");
	this.shape_5.setTransform(63.55,17.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYApQgJgEABgFIABgGIAEgHQAFAEAHACQAGADAGAAQANAAAAgJQAAgFgEgCQgDgDgIgCQgPgDgGgFQgHgHABgKQAAgMAKgHQAJgHAPAAQANAAAJAEQAIADABAGQgBAEgFAIIgMgGQgGgCgGgBQgMABAAAHQAAAHANACQALACAGAEQAGADAEAFQACAFAAAHQABAOgLAIQgKAIgPAAQgNAAgJgEg");
	this.shape_6.setTransform(55.25,15.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAyIAAhxIADgBIAFAAQAPAAAAAOIAAByQgBABgIAAQgOAAAAgPg");
	this.shape_7.setTransform(49.025,13.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_8.setTransform(41.925,15.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_9.setTransform(32.625,15.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAqQgCgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAZAAIAAASIgZAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgFACQgHABgGABQgUAAgFgQg");
	this.shape_10.setTransform(25.1,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAGgKQAEgKAKgFQAJgFALAAQASAAAKAKQAJAKAAASIAAAKIg0AAQABALAFAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgHACgJAAQgVAAgLgMgAARgJQAAgTgPAAQgHAAgFAFQgEAFABAJIAeAAIAAAAg");
	this.shape_11.setTransform(16.75,15.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA+QgHgDgCgEQAAAIgHgBIgQAAIAAh+IADAAIAGAAQAQAAAAAPIAAAhQAIgIAMAAQARAAAKALQAJALAAATQAAAYgKAMQgJAMgRAAQgHAAgGgDgAgMgEQgDACAAADIAAAoQACACAEABQAEACAEAAQAIAAAEgGQAEgIAAgOQAAgZgRAAQgGAAgEADg");
	this.shape_12.setTransform(7.225,13.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t42, new cjs.Rectangle(0,0,118.1,26.8), null);


(lib.t41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAGgKQAEgKAKgFQAJgFALAAQASAAAKAKQAJAKAAASIAAAKIg0AAQAAALAGAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgHACgIAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgFAFQgDAFAAAJIAeAAIAAAAg");
	this.shape.setTransform(145.15,15.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAqQgBgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAZAAIAAASIgZAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgFACQgHABgGABQgUAAgGgQg");
	this.shape_1.setTransform(137.5,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYApQgJgEABgFIABgGIAEgHQAFAEAGACQAHADAGAAQANAAAAgJQAAgFgDgCQgEgDgIgCQgPgDgGgFQgHgHABgKQAAgMAKgHQAJgHAOAAQAOAAAJAEQAIADABAGQgBAEgFAIIgMgGQgHgCgFgBQgLABgBAHQAAAHANACQALACAGAEQAGADAEAFQACAFAAAHQABAOgKAIQgLAIgPAAQgNAAgJgEg");
	this.shape_2.setTransform(129.85,15.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAqQgCgGAAgKIAAhSIACgBIAGAAQAQABAAAOIAAAMIAYAAIAAASIgYAAIAAAmQAAANAKAAQADAAAEgCIAGgFIAFAIIABAEQAAAEgEADQgDADgHACQgFABgHABQgUAAgFgQg");
	this.shape_3.setTransform(123.05,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_4.setTransform(114.225,15.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAyIAAhxIADgBIAFAAQAPAAAAAOIAAByQgBABgIAAQgOAAAAgPg");
	this.shape_5.setTransform(106.825,13.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMArIgehTQAGgCAHAAQAFAAADABQAEACACADQABADACAHIANAuIANguIAEgKQACgDADgBQADgCAEAAQAIAAAEACIgdBTg");
	this.shape_6.setTransform(100.1,15.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAqQgCgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAYAAIAAASIgYAAIAAAmQAAANAJAAQAEAAAEgCIAGgFIAFAIIABAEQAAAEgEADQgEADgGACQgFABgHABQgTAAgGgQg");
	this.shape_7.setTransform(89.2,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAGgKAJgFQAKgFAKAAQASAAAJAKQAKAKAAASIgBAKIg0AAQABALAGAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgVAAgMgMgAARgJQAAgTgPAAQgHAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape_8.setTransform(80.85,15.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPBAIAAgyIgBgMQgCgCgDgCQgCgBgGAAQgFAAgFADQgFABAAAEIAAA7IgYAAIAAh+IADgBIAGAAQAPAAAAAOIAAAkQAKgKAOAAQAMAAAHAFQAGAEACAJQACAGAAAMIAAAzg");
	this.shape_9.setTransform(71.15,13.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAsIAAhUIACgBIAGAAQAGAAAEACQAEADABAEQAEgFADgDQAGgDAGAAQAGAAAEACQAEADgBAEIAAAFIgCAHIgEAGIgGgEQgDgCgEAAQgFAAgEAEQgDADAAAEIAAA3g");
	this.shape_10.setTransform(59.7,15.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_11.setTransform(50.675,15.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_12.setTransform(40.625,15.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMArIgehTQAGgCAHAAQAFAAADABQAEACACADQABADACAHIANAuIANguIAEgKQACgDADgBQADgCAEAAQAIAAAEACIgdBTg");
	this.shape_13.setTransform(31.25,15.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_14.setTransform(18.575,15.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXA3QgNgHgGgOQgHgOAAgUQAAgSAHgPQAHgOANgHQANgIARAAQAKAAAJADQAJADAFAEQAGAEAAAFQAAADgDAEIgGAHQgHgHgHgDQgHgCgIgBQgQABgIAKQgJALAAAUQAAAVAJALQAJAMAPAAQAIgBAGgCIAEgDIAAgZIgVAAIAAgSIAsAAIAAA1QgDAEgHAEQgHADgJACQgIACgJAAQgSAAgMgIg");
	this.shape_15.setTransform(7.875,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t41, new cjs.Rectangle(0,0,151.9,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAFgKAKgFQAKgFAKAAQASAAAKAKQAJAKAAASIgBAKIg0AAQACALAFAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgIACgIAAQgUAAgMgMgAARgJQAAgTgPAAQgHAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape.setTransform(74.45,15.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA9QgDgEAAgHIAAhHIADgBIAFAAQAPAAAAAOIAABHQgCABgGAAQgIAAgEgDgAgJgpQgDgEAAgGQAAgFADgEQAFgDAEgBQAFABAEADQAEAEAAAFQAAAGgEAEQgEADgFABQgEgBgFgDg");
	this.shape_1.setTransform(67.3,13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAqQgBgGAAgKIAAhSIACgBIAGAAQAQABAAAOIAAAMIAYAAIAAASIgYAAIAAAmQAAANAKAAQADAAAEgCIAGgFIAFAIIABAEQAAAEgEADQgDADgHACQgGABgGABQgTAAgHgQg");
	this.shape_2.setTransform(62.05,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_3.setTransform(53.525,15.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAoQgKgGgFgKQgFgKAAgOQAAgOAGgKQAFgKAKgFQAKgFALAAQAIAAAGABQAGACAEADIAFAEQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgCAHIgEAGQgEgEgFgCQgGgDgGAAQgKAAgFAHQgGAGAAANQAAANAFAHQAGAHAKAAQAGAAAFgDQAGgCADgEIAEAHIACAGQAAAFgEACQgJAHgRAAQgMAAgKgFg");
	this.shape_4.setTransform(44.975,15.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_5.setTransform(35.475,15.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAyIAAhxIADgBIAFAAQAPAAAAAOIAAByQgBABgIAAQgOAAAAgPg");
	this.shape_6.setTransform(28.075,13.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IACAAIAGgBQAOAAACAJQAEgFAGgDQAGgCAHAAQAQAAAJALQAJALAAAVQAAAWgKAMQgJAMgRAAIgIgBIgIgEQgDgCgBgCIAAAtgAgMgqQgDADAAAEIAAAlIAGAEIAHACQARAAAAgbQAAgZgRAAQgGAAgEACg");
	this.shape_7.setTransform(17.275,17.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_8.setTransform(7.025,15.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t32, new cjs.Rectangle(0,0,81.2,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAFgKQAGgKAJgFQAJgFALAAQASAAAJAKQAKAKAAASIgBAKIgzAAQAAALAGAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgEAFAAAJIAeAAIAAAAg");
	this.shape.setTransform(123.45,15.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAoQgKgGgFgKQgFgKAAgOQAAgOAGgKQAFgKAKgFQAKgFALAAQAIAAAGABQAGACAEADIAFAEQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgCAHIgEAGQgEgEgFgCQgGgDgGAAQgKAAgFAHQgGAGAAANQAAANAFAHQAGAHAKAAQAGAAAFgDQAGgCADgEIAEAHIACAGQAAAFgEACQgJAHgRAAQgMAAgKgFg");
	this.shape_1.setTransform(114.775,15.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA9QgDgEAAgHIAAhHIADgBIAFAAQAPAAAAAOIAABHQgBABgIAAQgHAAgEgDgAgIgpQgEgEAAgGQAAgFAEgEQAEgDAEgBQAGABAEADQADAEAAAFQAAAGgDAEQgEADgGABQgEgBgEgDg");
	this.shape_2.setTransform(107.85,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLArIgfhTQAHgCAHAAQAEAAADABQADACACADQACADADAHIALAuIAOguIAEgKQACgDADgBQADgCAEAAQAHAAAGACIgeBTg");
	this.shape_3.setTransform(101.2,15.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAsIAAhUIADgBIAFAAQAHAAAEACQAEADABAEQAEgFAEgDQAFgDAGAAQAGAAADACQAFADAAAEIgBAFIgDAHIgDAGIgGgEQgDgCgEAAQgFAAgEAEQgDADAAAEIAAA3g");
	this.shape_4.setTransform(94.05,15.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAGgKQAEgKAKgFQAKgFAKAAQASAAAKAKQAJAKAAASIAAAKIg0AAQABALAFAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgHACgJAAQgUAAgNgMgAARgJQAAgTgPAAQgHAAgFAFQgDAFAAAJIAeAAIAAAAg");
	this.shape_5.setTransform(85.5,15.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYApQgIgEAAgFIABgGIAEgHQAFAEAHACQAGADAGAAQANAAAAgJQAAgFgEgCQgDgDgIgCQgPgDgGgFQgGgHAAgKQgBgMALgHQAKgHAOAAQANAAAJAEQAIADAAAGQAAAEgFAIIgMgGQgGgCgGgBQgMABAAAHQAAAHANACQALACAGAEQAGADAEAFQACAFAAAHQABAOgLAIQgKAIgPAAQgNAAgJgEg");
	this.shape_6.setTransform(76.95,15.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAFgKQAGgKAJgFQAJgFALAAQASAAAJAKQAKAKAAASIgBAKIgzAAQAAALAGAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgEAFAAAJIAeAAIAAAAg");
	this.shape_7.setTransform(64.95,15.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAqQgBgGAAgKIAAhSIACgBIAGAAQAQABAAAOIAAAMIAZAAIAAASIgZAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgFACQgHABgGABQgTAAgHgQg");
	this.shape_8.setTransform(57.3,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYApQgJgEAAgFIACgGIAEgHQAEAEAHACQAHADAGAAQANAAAAgJQAAgFgDgCQgEgDgJgCQgOgDgGgFQgHgHAAgKQAAgMALgHQAJgHAOAAQAOAAAJAEQAIADABAGQgBAEgFAIIgLgGQgIgCgGgBQgKABgBAHQAAAHANACQALACAGAEQAGADAEAFQADAFAAAHQAAAOgKAIQgLAIgOAAQgOAAgJgEg");
	this.shape_9.setTransform(49.65,15.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAGgKAJgFQAKgFAKAAQASAAAJAKQAKAKAAASIgBAKIg0AAQABALAGAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgVAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape_10.setTransform(41.25,15.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA+QgHgDgCgEQAAAIgHgBIgQAAIAAh+IADAAIAGAAQAQAAAAAPIAAAhQAIgIAMAAQARAAAKALQAJALAAATQAAAYgKAMQgJAMgRAAQgHAAgGgDgAgMgEQgDACAAADIAAAoQACACAEABQAEACAEAAQAIAAAEgGQAEgIAAgOQAAgZgRAAQgGAAgEADg");
	this.shape_11.setTransform(31.725,13.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAGgKQAEgKAKgFQAJgFALAAQASAAAKAKQAJAKAAASIAAAKIg0AAQABALAFAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgHACgJAAQgVAAgMgMgAARgJQAAgTgPAAQgHAAgFAFQgDAFAAAJIAeAAIAAAAg");
	this.shape_12.setTransform(18.35,15.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA9IAAh3QARgCARAAQAeAAAPAPQAQAPAAAdQAAATgHAOQgHAOgNAHQgNAIgQAAgAgWgoIAABSIAKAAQARAAAJgKQAJgLAAgVQAAgVgJgKQgJgKgQAAg");
	this.shape_13.setTransform(8.025,13.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(0,0,130.2,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYAqQgCgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAZAAIAAASIgZAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgFACQgHABgGABQgUAAgFgQg");
	this.shape.setTransform(166.4,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_1.setTransform(157.875,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_2.setTransform(148.575,15.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmAsIAAgxIAAgLQgBgDgDgCQgCgCgFAAQgEAAgEACQgFACgCADIAAALIAAAxIgXAAIAAgxIgBgMQgBgDgDgCQgDgBgFAAQgFAAgEADQgFACAAAEIAAA6IgYAAIAAhUIACgBIAGAAQANAAACAJQAIgLASAAQAJAAAFADQAFADADAGQAJgMASAAQAMAAAGAFQAHAFABAIQABAIABALIAAAyg");
	this.shape_3.setTransform(136.55,15.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_4.setTransform(124.025,15.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAqQgBgGAAgKIAAhSIACgBIAGAAQAQABAAAOIAAAMIAYAAIAAASIgYAAIAAAmQAAANAKAAQADAAAEgCIAGgFIAFAIIABAEQAAAEgEADQgDADgHACQgGABgGABQgTAAgHgQg");
	this.shape_5.setTransform(116.05,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAnQgGgEgDgJQgBgHAAgMIAAgxIADAAIAGgBQAQAAAAAPIAAAiIABAMQABADACACQAEABAEAAQAGAAAFgDQAEgCABgEIAAg5IACAAIAGgBQAHAAAFAEQAEAEAAAHIAABGIgQAAQgEAAgCgCQgBgCAAgFQgJALgRAAQgLAAgHgFg");
	this.shape_6.setTransform(107.25,15.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_7.setTransform(97.475,15.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAyIAAhxIADgBIAFAAQAPAAAAAOIAAByQgBABgIAAQgOAAAAgPg");
	this.shape_8.setTransform(90.525,13.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_9.setTransform(83.425,15.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_10.setTransform(74.125,15.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAqQgCgGAAgKIAAhSIADgBIAFAAQAQABAAAOIAAAMIAYAAIAAASIgYAAIAAAmQAAANAJAAQAEAAAEgCIAHgFIAEAIIABAEQAAAEgEADQgEADgGACQgFABgHABQgTAAgGgQg");
	this.shape_11.setTransform(66.6,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAFgKAKgFQAKgFAKAAQASAAAKAKQAJAKAAASIgBAKIg0AAQACALAFAGQAGAGAKAAQAGAAAEgCIAHgEIAFgEIAFAIIACAGQAAAEgFADQgEAEgHABQgIACgIAAQgUAAgMgMgAARgJQAAgTgPAAQgHAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape_12.setTransform(58.25,15.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA+QgHgDgCgEQAAAIgHgBIgQAAIAAh+IADAAIAGAAQAQAAAAAPIAAAhQAIgIAMAAQARAAAKALQAJALAAATQAAAYgKAMQgJAMgRAAQgHAAgGgDgAgMgEQgDACAAADIAAAoQACACAEABQAEACAEAAQAIAAAEgGQAEgIAAgOQAAgZgRAAQgGAAgEADg");
	this.shape_13.setTransform(48.725,13.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQArIgPgmIgPAmIgSAAIgfhTQAHgCAGAAQALgBAEALIAQAvIAMgcIgIgbQAGgCAGAAQAJAAADAKIAPAuIAMgoQACgJAEgEQAEgDAGAAQAGAAAGACIgdBTg");
	this.shape_14.setTransform(33.375,15.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAnQgHgEgCgJQgBgHAAgMIAAgxIADAAIAGgBQAQAAAAAPIAAAiIABAMQABADACACQADABAFAAQAGAAAFgDQAEgCABgEIAAg5IACAAIAGgBQAHAAAFAEQAEAEAAAHIAABGIgQAAQgEAAgCgCQgBgCAAgFQgJALgRAAQgLAAgHgFg");
	this.shape_15.setTransform(21.85,15.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_16.setTransform(11.775,15.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBRQgDgEAAgKIAAgBQAKAAAEgEQAEgEAAgLIAAhYIACgBIAFAAQAQAAAAAPIAABDIAAAKQgBALgDAHQgEAIgHAEQgGAEgIAAQgGAAgDgDgAAAg9QgEgDAAgGQAAgGAEgDQADgEAFAAQAGAAAEAEQADADAAAGQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_17.setTransform(3.475,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,242.1,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgbAsIAAhUIACgBIAGAAQAGAAAEACQAEADABAEQAEgFADgDQAGgDAGAAQAGAAAEACQADADAAAEIAAAFIgCAHIgEAGIgGgEQgDgCgEAAQgFAAgEAEQgDADAAAEIAAA3g");
	this.shape.setTransform(100.65,15.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAnQgGgEgCgJQgCgHAAgMIAAgxIAEAAIAEgBQARAAgBAPIAAAiIABAMQACADADACQACABAGAAQAFAAAFgDQAFgCgBgEIAAg5IAEAAIAFgBQAHAAAFAEQAEAEAAAHIAABGIgRAAQgDAAgBgCQgCgCAAgFQgJALgQAAQgMAAgHgFg");
	this.shape_1.setTransform(91.65,15.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAnQgGgEgDgJQgBgHAAgMIAAgxIADAAIAGgBQAQAAAAAPIAAAiIABAMQABADACACQAEABAEAAQAGAAAFgDQAEgCABgEIAAg5IACAAIAGgBQAHAAAFAEQAEAEAAAHIAABGIgQAAQgEAAgCgCQgBgCAAgFQgJALgRAAQgLAAgHgFg");
	this.shape_2.setTransform(81.6,15.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOBAIAAgyIAAgMQgCgCgCgCQgEgBgEAAQgGAAgFADQgEABAAAEIAAA7IgZAAIAAh+IAEgBIAEAAQAQAAABAOIAAAkQAIgKAQAAQALAAAHAFQAHAEACAJQABAGAAAMIAAAzg");
	this.shape_3.setTransform(71.55,13.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBAIAAhcQAAgSAJgIQAJgKAQABQAIgBAGACQAHACAEACQAEADAAAEQAAAFgHAJQgHgIgKABQgOgBgBARIAAAIIAcAAIAAATIgcAAIAABBg");
	this.shape_4.setTransform(60.6,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_5.setTransform(51.225,15.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IACAAIAGgBQAOAAACAJQAEgFAGgDQAGgCAHAAQAQAAAJALQAJALAAAVQAAAWgKAMQgJAMgRAAIgIgBIgIgEQgDgCgBgCIAAAtgAgMgqQgDADAAAEIAAAlIAGAEIAHACQARAAAAgbQAAgZgRAAQgGAAgEACg");
	this.shape_6.setTransform(37.775,17.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_7.setTransform(27.525,15.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgMAFgLQAGgLAJgFQAKgFAMAAQAUAAALAMQAKAMAAAUQAAANgFALQgFAKgJAGQgKAFgNAAQgTAAgLgMgAgMgTQgFAIAAALQAAANAFAHQAEAHAIAAQASAAAAgbQAAgagSAAQgIABgEAGg");
	this.shape_8.setTransform(17.475,15.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANA0IgZgiQgIgKgBgIIAAA8IgZAAIAAh4IAJgBQAQAAAAAOIAAAsIACgHIAFgIIAYghQAEgFAEgCQAEgDAFAAIAIACQAEABADADIgoA1IAtA8QgHAEgIAAQgMAAgHgKg");
	this.shape_9.setTransform(7.825,13.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,105.7,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMA7QgEgDAAgHQAAgGAEgDQAEgDAGgBQAEABAEADQAEADAAAGQAAAHgEADQgDADgFABQgGgBgEgDgAgKAXQgEgDAAgIQAAgEADgFQACgDAGgGIAGgHQAEgDACgEQACgDAAgFQAAgHgEgEQgFgDgHgBQgLAAgMAKIgGgIIgBgEQAAgFAHgEQAFgEAHgCQAIgCAHABQARgBAKAJQAKAIAAAOQAAAFgBAGQgCAFgDAEIgKALIgJAHIgEAGQgCADAAADIABAHIgGABQgGgBgEgDg");
	this.shape.setTransform(88.825,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA+QgFgCgEgFIgSgbQgDgDgCgFIAAArIgYAAIAAh+IADgBIAGAAQAPAAAAAPIAAA/QABgFAEgEIASgVIAHgGQADgBAEAAQAIAAAHAGIgdAhIAiAsQgGAFgJAAQgGAAgEgDg");
	this.shape_1.setTransform(80.7,13.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_2.setTransform(70.725,15.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_3.setTransform(61.425,15.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjArIAAgRIAmgxIgmAAIAAgDQAAgQAQAAIApAAQAFAAADACQADACAAAFIAAAGIgnAzIAbAAQAIAAAEADQADADABAHIgBAGg");
	this.shape_4.setTransform(52.95,15.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAsIAAgxIgBgMQgBgDgCgCQgDgBgFAAQgGAAgEADQgGACAAAEIAAA6IgYAAIAAhUIACgBIAGAAQAOAAACAJQAIgLARAAQAMAAAGAFQAHAEACAJQABAHAAAMIAAAyg");
	this.shape_5.setTransform(40.25,15.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgWQAAgNAFgKQAGgKAJgFQAKgFAKAAQASAAAJAKQAKAKAAASIgBAKIg0AAQACALAFAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgWAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgEAFgBAJIAfAAIAAAAg");
	this.shape_6.setTransform(30.65,15.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA6QgGgCAAgGQABgEAGgJQAEAEAHACQAHADAIAAQALAAAGgGQAEgGAAgPIAAgDQgCAEgHACQgFACgHAAQgQAAgJgLQgJgLAAgUQAAgPAEgKQAEgKAIgFQAJgFAKAAQAPAAAGAJQACgIAMAAIAHABIACAAIAABOQAAAYgKAMQgMALgVAAQgTAAgKgGgAgOgTQAAAOAEAFQAFAHAIAAQAGAAAEgDQADgCAAgDIAAgmQgCgDgDgBIgIgCQgRAAAAAag");
	this.shape_7.setTransform(20.8,17.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHA9QgEgEABgHIAAhHIADgBIAFAAQAPAAAAAOIAABHQgCABgGAAQgIAAgEgDgAgJgpQgDgEAAgGQAAgFADgEQAEgDAFgBQAGABADADQAEAEAAAFQAAAGgEAEQgDADgGABQgFgBgEgDg");
	this.shape_8.setTransform(13.55,13.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAGgKAJgFQAKgFAKAAQASAAAJAKQAKAKAAASIgBAKIg0AAQABALAGAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgVAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape_9.setTransform(6.7,15.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,95.3,26.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgaAhQgMgMAAgWQAAgNAFgKQAGgKAJgFQAKgFAKAAQASAAAJAKQAKAKAAASIgBAKIg0AAQABALAGAGQAGAGAKAAQAFAAAFgCIAHgEIAFgEIAFAIIACAGQAAAEgEADQgFAEgHABQgIACgHAAQgVAAgMgMgAARgJQAAgTgQAAQgGAAgEAFQgFAFAAAJIAfAAIAAAAg");
	this.shape.setTransform(117.4,15.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBRQgDgEAAgKIAAgBQAKAAAEgEQAEgEAAgLIAAhYIACgBIAFAAQAQAAAAAPIAABDIAAAKQgBALgDAHQgEAIgHAEQgGAEgIAAQgGAAgDgDgAAAg9QgEgDAAgGQAAgGAEgDQADgEAFAAQAGAAAEAEQADADAAAGQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_1.setTransform(109.425,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAsIAAgxIgBgMQgBgDgCgCQgDgBgFAAQgGAAgEADQgGACAAAEIAAA6IgYAAIAAhUIACgBIAGAAQAOAAABAJQAIgLASAAQALAAAHAFQAGAEACAJQACAHAAAMIAAAyg");
	this.shape_2.setTransform(99.3,15.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_3.setTransform(89.525,15.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLArIgfhTQAGgCAIAAQAEAAADABQADACACADQADADACAHIALAuIAOguIAEgKQACgDADgBQADgCAEAAQAHAAAGACIgdBTg");
	this.shape_4.setTransform(80.6,15.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYApQgJgEAAgFIACgGIAFgHQAEAEAGACQAHADAGAAQANAAAAgJQAAgFgDgCQgEgDgJgCQgNgDgHgFQgGgHgBgKQABgMAJgHQALgHANAAQANAAAKAEQAIADABAGQAAAEgGAIIgLgGQgHgCgHgBQgLABABAHQAAAHAMACQALACAGAEQAGADADAFQAEAFAAAHQgBAOgJAIQgKAIgPAAQgOAAgJgEg");
	this.shape_5.setTransform(68.8,15.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_6.setTransform(60.225,15.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAmQgIgHAAgNQAAgbArgCIAIAAIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgGACgJAEIgEgGIgBgGQAAgEAFgDQAFgCAIgCQAIgCAHAAQATAAAJAHQAIAJAAAQIAAAiQAAAOAEAGQgGACgGAAQgGAAgEgCQgDgCgBgFQgEAFgHACQgGADgIAAQgMAAgIgHgAgKAFQgGAFAAAGQAAAHAEACQADADAGABQAFgBAFgDQAGgDAAgDIAAgSIgDAAIgCAAQgMABgGADg");
	this.shape_7.setTransform(50.925,15.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA+QgHgDgCgEQAAAIgHgBIgQAAIAAh+IADAAIAGAAQAQAAAAAPIAAAhQAIgIAMAAQARAAAKALQAJALAAATQAAAYgKAMQgJAMgRAAQgHAAgGgDgAgMgEQgDACAAADIAAAoQACACAEABQAEACAEAAQAIAAAEgGQAEgIAAgOQAAgZgRAAQgGAAgEADg");
	this.shape_8.setTransform(41.525,13.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA2QgJgLAAgWQgBgOAFgKQAEgKAIgGQAIgFALAAQAFAAAGACQAGACADAEIAAgvIADgBIAGAAQAQAAAAAPIAABwIgQAAQgDAAgDgCQgBgCAAgEQgEAFgGACQgHADgGAAQgRAAgIgLgAgPAUQAAAPAFAGQAFAHAIAAQAGAAADgCQAEgDAAgDIAAgoQgCgCgEgCIgHgBQgRAAgBAZg");
	this.shape_9.setTransform(31.1,13.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAsIAAgxIgBgMQgCgDgDgCQgDgBgEAAQgGAAgFADQgEACgBAEIAAA6IgYAAIAAhUIACgBIAGAAQANAAACAJQAIgLASAAQALAAAHAFQAGAEACAJQACAHAAAMIAAAyg");
	this.shape_10.setTransform(21.2,15.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHA9QgEgEAAgHIAAhHIAEgBIAFAAQAPAAAAAOIAABHQgBABgIAAQgHAAgEgDgAgIgpQgEgEAAgGQAAgFAEgEQAEgDAEgBQAFABAFADQADAEAAAFQAAAGgDAEQgFADgFABQgEgBgEgDg");
	this.shape_11.setTransform(13.7,13.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmA8IAAh3IBKAAIABAGQgBAHgDADQgEADgIAAIgiAAIAAAeIAlAAIAAASIglAAIAAAhIAmAAQAHAAAEAEQADADAAAGIAAADIAAADg");
	this.shape_12.setTransform(7.15,13.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,124.2,26.8), null);


(lib.subText = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKAvIgfhcIAEgBIAGAAQAFAAADACQADADACAFIASA/IAUg/QACgFADgDQADgCAFAAIAJABIggBcg");
	this.shape.setTransform(97.975,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAkQgMgMAAgYQABgOAFgLQAFgMAKgFQAKgGAMAAQAIAAAHACQAIACADAEQADADABAEQAAAEgHAGQgFgFgFgCQgGgDgGABQgLgBgHAKQgGAIAAAPQAAAQAGAIQAIAJALAAQAFAAAFgCIAGgDIAFgEQAGAIAAADIgBADIgCADQgCADgEABIgJADIgLABQgUAAgLgNg");
	this.shape_1.setTransform(89.55,11.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAkQgLgMAAgYQAAgOAEgLQAGgMAKgFQAKgGAMAAQAJAAAGACQAIACADAEQAEADAAAEQAAAEgHAGQgGgFgEgCQgGgDgGABQgLgBgHAKQgGAIAAAPQAAAQAGAIQAIAJALAAQAGAAAEgCIAGgDIAFgEQAGAIAAADIAAADIgDADQgCADgEABIgJADIgLABQgUAAgLgNg");
	this.shape_2.setTransform(81.1,11.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAiIAAhBIABAAIAFgBQAFAAADACQAEACAAAEQADgEADgDQAEgCAFAAQAEAAAEACQACACAAACIgBAFIgBAEIgCAGQgDgDgDAAIgFgCQgEAAgDADQgCACAAAEIAAAqg");
	this.shape_3.setTransform(71.75,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAaQgJgKAAgQQAAgKAFgIQADgHAIgFQAHgEAJAAQAQAAAJAJQAIAJAAAQQAAAKgEAJQgEAIgHAEQgIAEgKAAQgPAAgIgJgAgJgOQgEAGAAAIQAAAKAEAFQAEAGAFAAQAOAAAAgVQAAgTgOgBQgFABgEAFg");
	this.shape_4.setTransform(64.75,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAaQgJgKAAgQQAAgKAEgIQAEgHAIgFQAIgEAIAAQARAAAHAJQAJAJAAAQQAAAKgEAJQgEAIgIAEQgGAEgLAAQgOAAgJgJgAgJgOQgEAGAAAIQAAAKAEAFQADAGAGAAQAOAAAAgVQAAgTgOgBQgFABgEAFg");
	this.shape_5.setTransform(56.95,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAiIgXhBQAEgCAGAAQADAAADACQADABABACIADAJIAKAjIAKgkIADgHQACgDACgBQACgCADAAQAGAAAEACIgXBBg");
	this.shape_6.setTransform(49.7,12.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgKQAAgVAigBIAGgBIAAgCQAAgFgDgDQgDgCgGAAQgEAAgEABIgLAGIgEgGIgBgEQAAgCAFgDQADgDAHgBIALgBQAPAAAHAGQAGAGAAANIAAAZQAAALADAGIgJABQgFAAgCgBQgDgCgBgEQgEAEgFACQgEACgHAAQgJAAgGgFgAgIAFQgEACAAAGQAAAFACACQADACAFAAQAEAAAEgCQAEgCAAgDIAAgOIgCAAIgCAAQgJABgFADg");
	this.shape_7.setTransform(39.85,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSArQgKgGgFgLQgFgLAAgPQAAgPAGgKQAFgMAKgFQAKgGANAAQAIAAAHACQAHACAEAEQAEADAAAEQAAACgCACIgFAGQgFgFgGgCQgFgDgGABQgMAAgHAIQgGAJAAAPQAAAQAGAJQAHAIAMAAQAGABAFgCIADgCIAAgUIgQAAIAAgNIAiAAIAAApQgDADgFACIgMAFQgHABgHAAQgNAAgKgGg");
	this.shape_8.setTransform(31.575,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subText, new cjs.Rectangle(25,0,79.5,21.7), null);


(lib.subArr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKAzIArgrIhgAAIAAgOIBgAAIgrgsIAKgMIBAA+IhAA/g");
	this.shape.setTransform(6.375,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subArr, new cjs.Rectangle(0,0,12.8,12.6), null);


(lib.sh10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#009FDF").s().p("A1FDkIG+nHMAjNAAAIm+HHg");
	this.shape.setTransform(135,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh10, new cjs.Rectangle(0,0,270,45.5), null);


(lib.sh9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31C6F4").s().p("EhljARHMAhlgiNMCpiAAAMghmAiNg");
	this.shape.setTransform(650,109.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh9, new cjs.Rectangle(0,0,1300,219.1), null);


(lib.sh8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31C6F4").s().p("Eg2PAJJIR9yRMBahAAAIx7SRg");
	this.shape.setTransform(347.15,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh8, new cjs.Rectangle(0,0,694.3,117), null);


(lib.sh7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31C6F4").s().p("Eg2PAJJIR9yRMBahAAAIx7SRg");
	this.shape.setTransform(347.15,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh7, new cjs.Rectangle(0,0,694.3,117), null);


(lib.sh4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31C6F4").s().p("A1FDkIG+nHMAjNAAAIm+HHg");
	this.shape.setTransform(135,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh4, new cjs.Rectangle(0,0,270,45.5), null);


(lib.sh3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#77B800").s().p("AwPCvIFYldIbHAAIlYFdg");
	this.shape.setTransform(104,17.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh3, new cjs.Rectangle(0,0,208,35.1), null);


(lib.sh2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A1FDkIG+nHMAjNAAAIm+HHg");
	this.shape.setTransform(135,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh2, new cjs.Rectangle(0,0,270,45.5), null);


(lib.sh1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F48C00").s().p("AtLCOIEXkbIWAAAIkXEbg");
	this.shape.setTransform(84.375,14.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh1, new cjs.Rectangle(0,0,168.8,28.5), null);


(lib.screenWatch = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(-79,-92,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenWatch, new cjs.Rectangle(-79,-92,153,217.5), null);


(lib.screenPhone = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-31,-85,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenPhone, new cjs.Rectangle(-31,-85,163.8,230.1), null);


(lib.ok2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah8AZIAAgxID5AAIAAAxg");
	this.shape.setTransform(12.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ok2, new cjs.Rectangle(0,0,25,5), null);


(lib.ok1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhjAZIAAgxIDHAAIAAAxg");
	this.shape.setTransform(10,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ok1, new cjs.Rectangle(0,0,20,5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4AYQgogDAMgTQAMgTAugFQA1gFA9AaQhWAZgvAAIgLAAg");
	this.shape.setTransform(34.8396,20.5886,0.8895,0.8895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAuQgegJAXgZQAcgdBfgeQgKA1gqAaQgYAQgXAAQgJAAgIgCg");
	this.shape_1.setTransform(37.3822,25.5457,0.8895,0.8895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAhQgkgYAJg2QBbAZATAcQAQAYgjAKQgMAEgLAAQgWAAgTgNg");
	this.shape_2.setTransform(49.0034,25.3243,0.8895,0.8895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaADQBGgbA3ADQAvACAHASQAIASgrAEIgVABQgvAAhMgTg");
	this.shape_3.setTransform(52.0066,20.1583,0.8895,0.8895);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXgnQAIgaAUALQAVALABAfQAAAkgjAjQgYhDAJgfg");
	this.shape_4.setTransform(44.1598,14.0426,0.8895,0.8895);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLgaQAUgSAUAHQATAIgNAVQgQAYg6AYQACgtAagVg");
	this.shape_5.setTransform(52.2859,11.2435,0.8895,0.8895);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACQBMQgPgJgGgJQgGgHgGgVIgZhJQgDgSgNgQIAAgBIAkAAQALACAJgHIABAAIAgBhIAQg1QAEgIACgNQAAgLgHgGIAAgBIAqAAIg2CiQgKgCgIgGgAgsA7QgXgWAAggIAAgEQAAgnAYgXQAYgVAjAAQAMAAAXADIAAAnIgBAAQgOgLgRAAQgOAAgHALQgJAQACASQgBAVAMAUQAKANARgCQAWgBARgOIABAAIgJAkQgZANgaAAIgCAAQgdAAgWgVgAjBA7QgWgWAAggIAAgEQAAgnAZgXQAWgVAkAAQAMAAAXADIAAAnIgBAAQgNgLgRAAQgNAAgKALQgJARACARQAAAVANAUQAKANARgBQAWgCAQgOIABAAIgJAkQgXANgcAAIgBAAQgfAAgWgVg");
	this.shape_6.setTransform(19.3062,7.4945,0.8895,0.8895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,60,29.8), null);


(lib.im1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.im1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.im1_1, new cjs.Rectangle(0,0,133,218), null);


(lib.deviceB_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.deviceB();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.deviceB_1, new cjs.Rectangle(0,0,219,296), null);


(lib.deviceA_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.deviceA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.deviceA_1, new cjs.Rectangle(0,0,200,290), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAsIgfhWIAGgBQAHAAACAIIAVBDIAXhDQACgIAHAAIAFABIgfBWg");
	this.shape.setTransform(65.875,10.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAhQgKgLAAgWQAAgUAKgMQAKgMARAAQAHAAAGACQAGACADACQAEADAAADQAAADgDAEIgDAAQgEgFgFgCQgFgCgGAAQgMAAgHAJQgHAJAAAQQAAARAIAJQAHAJAMAAQAGAAAFgCQAGgDAEgEIADADIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDAEgHACQgGACgIAAQgSAAgJgMg");
	this.shape_1.setTransform(58.425,10.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAhQgKgLAAgWQAAgUAKgMQAKgMARAAQAHAAAGACQAGACADACQAEADAAADQAAADgDAEIgDAAQgEgFgFgCQgFgCgGAAQgMAAgHAJQgHAJAAAQQAAARAIAJQAHAJAMAAQAGAAAFgCQAGgDAEgEIADADIABAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgDAEgHACQgGACgIAAQgSAAgJgMg");
	this.shape_2.setTransform(50.725,10.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAfIAAg8IACAAQAEAAACABQADACgBADQADgDADgCQADgCAFAAQAEAAADABQAAABABAAQAAABAAAAQABAAAAABQAAABAAAAIgBAEIgCAFIgEgDIgEgBQgFAAgCADQgEADAAADIAAAqg");
	this.shape_3.setTransform(42.25,11.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgJAEgHQAEgIAGgDQAHgEAHAAQAOAAAHAIQAIAJAAAOQAAAJgEAIQgDAHgHAEQgGAEgJAAQgNAAgHgIgAgMgQQgEAGAAAKQAAALAEAGQAFAGAHAAQAIAAAFgGQAEgGAAgLQAAgWgRAAQgHAAgFAGg");
	this.shape_4.setTransform(36.125,11.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgJAEgHQAEgIAGgDQAHgEAHAAQAOAAAHAIQAIAJAAAOQAAAJgEAIQgDAHgHAEQgGAEgJAAQgNAAgHgIgAgMgQQgEAGAAAKQAAALAEAGQAFAGAHAAQAIAAAFgGQAEgGAAgLQAAgWgRAAQgHAAgFAGg");
	this.shape_5.setTransform(29.175,11.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAfIgXg8IAGgBQADAAACACQACACACAGIANAnIAOgnIADgGIADgDIAEgBIAFABIgYA8g");
	this.shape_6.setTransform(22.675,11.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAYQgEAEgFACQgEACgFAAQgKAAgFgFQgFgEAAgJQAAgLAJgEQAIgGAPAAIAGAAIAAgCQAAgHgDgDQgEgCgFAAIgKABIgIAEIgCAAIgCgDIAAgDQAAgDAEgCIAIgDIALgBQALAAAGAFQAEAGAAAMIAAAZIABAFIABADIAFAAIAAAGIgHABQgJAAgBgIgAgKADQgGAEAAAGQAAAFADACQACADAGAAQAFAAACgCQAEgBADgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgNIgEAAQgKAAgHADg");
	this.shape_7.setTransform(13.8,11.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAhQgKgMAAgVQAAgVAKgMQAKgLASAAQAGAAAGACQAGACAEACQADADAAADQAAACgDAFIgCAAQgEgEgFgDQgGgCgGAAQgMAAgHAJQgHAJAAAQQAAARAIAJQAHAKAMAAQAGAAAFgCQAFgCADgCIAAgXIgTAAIAAgIIAdAAIAAAkIgFAEIgHADIgJACIgJABQgRAAgKgMg");
	this.shape_8.setTransform(6.225,10.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaText, new cjs.Rectangle(0,0,71.9,20.4), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F48C00").s().p("AmyDNQhUAAg9g8Qg8g8AAhVQAAhUA8g8QA8g8BVAAINlAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAg");
	this.shape.setTransform(64,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBack, new cjs.Rectangle(0,0,128,41), null);


(lib.c33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhTD1Qg6gTgtgkQgugigfgwQgggvgJg2QgIg2APgxQARgyAjgkQAlgnA0gVQA4gXA+AAQBAAAA7AVQA7AUAwAmQAwAmAeAxQAeAzAGA1QAHAzgTA0QgSAvgmAkQglAjg0AUQg1AUg9AAQg7AAg7gVgAhBj1QgOABgOADIgbAHQgMADgOAGIgtAYQgMAIgIAGQgJAIgJAJQgHAHgJALIgNAUIgLAVQgFAMgDAKIgGAYIgDAXQgCALABAOIAIAxIAIAXQAEAKAHAOQAHAOAGAJQAHAMAIAJIARAUIATATIAVARIAuAdQAMAHANAGIAaAKIAbAIIAcAFIAbAEIAdACIA3gFIAagGIAxgSIAqgaIASgQIAfgkIAMgUIAQgtIAEgYQACgMAAgNIgCgYQgBgMgDgMQgCgMgFgOQgHgRgDgHIgNgXIgPgXQgJgMgIgIQgJgLgKgJQgJgJgMgJIgwggIgagMIgagKIgdgJIgdgHIg6gEQgOAAgPACg");
	this.shape.setTransform(30.7954,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c33, new cjs.Rectangle(0,0,61.6,53.2), null);


(lib.c22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhTD1Qg6gTgtgkQgugigfgwQgggvgJg2QgIg2APgxQARgyAjgkQAlgnA0gVQA4gXA+AAQBAAAA7AVQA7AUAwAmQAwAmAeAxQAeAzAGA1QAHAzgTA0QgSAvgmAkQglAjg0AUQg1AUg9AAQg7AAg7gVgAhBj1QgOABgOADIgbAHQgMADgOAGIgtAYQgMAIgIAGQgJAIgJAJQgHAHgJALIgNAUIgLAVQgFAMgDAKIgGAYIgDAXQgCALABAOIAIAxIAIAXQAEAKAHAOQAHAOAGAJQAHAMAIAJIARAUIATATIAVARIAuAdQAMAHANAGIAaAKIAbAIIAcAFIAbAEIAdACIA3gFIAagGIAxgSIAqgaIASgQIAfgkIAMgUIAQgtIAEgYQACgMAAgNIgCgYQgBgMgDgMQgCgMgFgOQgHgRgDgHIgNgXIgPgXQgJgMgIgIQgJgLgKgJQgJgJgMgJIgwggIgagMIgagKIgdgJIgdgHIg6gEQgOAAgPACg");
	this.shape.setTransform(30.7954,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c22, new cjs.Rectangle(0,0,61.6,53.2), null);


(lib.c11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhTD1Qg6gTgtgkQgugigfgwQgggvgJg2QgIg2APgxQARgyAjgkQAlgnA0gVQA4gXA+AAQBAAAA7AVQA7AUAwAmQAwAmAeAxQAeAzAGA1QAHAzgTA0QgSAvgmAkQglAjg0AUQg1AUg9AAQg7AAg7gVgAhBj1QgOABgOADIgbAHQgMADgOAGIgtAYQgMAIgIAGQgJAIgJAJQgHAHgJALIgNAUIgLAVQgFAMgDAKIgGAYIgDAXQgCALABAOIAIAxIAIAXQAEAKAHAOQAHAOAGAJQAHAMAIAJIARAUIATATIAVARIAuAdQAMAHANAGIAaAKIAbAIIAcAFIAbAEIAdACIA3gFIAagGIAxgSIAqgaIASgQIAfgkIAMgUIAQgtIAEgYQACgMAAgNIgCgYQgBgMgDgMQgCgMgFgOQgHgRgDgHIgNgXIgPgXQgJgMgIgIQgJgLgKgJQgJgJgMgJIgwggIgagMIgagKIgdgJIgdgHIg6gEQgOAAgPACg");
	this.shape.setTransform(30.7954,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c11, new cjs.Rectangle(0,0,61.6,53.2), null);


(lib.c3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#31C6F4").s().p("AsCcgQljiWkSkSQkSkSiWlkQiclvAAmTQAAmSCclvQCWlkESkSQESkSFjiWQFwicGSAAQGTAAFvCcQFkCWESESQESESCWFkQCcFvAAGSQAAGTicFvQiWFkkSESQkSESlkCWQlvCcmTAAQmSAAlwicg");
	this.shape.setTransform(198,198);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c3, new cjs.Rectangle(0,0,396,396), null);


(lib.c2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#77B800").s().p("AnSRSQjYhcilimQinilhbjYQhejfAAj0QAAjzBejfQBbjYCnilQClinDYhbQDfheDzAAQD0AADfBeQDYBbClCnQCmClBcDYQBeDfAADzQAAD0heDfQhcDYimClQilCmjYBcQjfBej0AAQjzAAjfheg");
	this.shape.setTransform(79.0009,79.0009,0.6583,0.6583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(0,0,158,158), null);


(lib.c1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAA29QErAAERBzQEIBwDMDLQDLDMBwEIQBzERAAEqQAAErhzESQhwEHjLDMQjMDLkIBwQkRBzkrAAQkqAAkRhzQkIhwjMjLQjLjMhwkHQhzkSAAkrQAAkqBzkRQBwkIDLjMQDMjLEIhwQERhzEqAAg");
	this.shape.setTransform(95.9742,95.9742,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(-1,-1,194,194), null);


(lib.b2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.back2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b2, new cjs.Rectangle(0,0,370,308), null);


(lib.b1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.back1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b1, new cjs.Rectangle(0,0,336,280), null);


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

	// txt4
	this.t42 = new lib.t42();
	this.t42.name = "t42";
	this.t42.setTransform(71.3,45.05,1,1,0,0,0,53.4,17.2);

	this.t41 = new lib.t41();
	this.t41.name = "t41";
	this.t41.setTransform(104,25.05,1,1,0,0,0,86.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t41},{t:this.t42}]}).wait(1));

	// txt3
	this.t32 = new lib.t32();
	this.t32.name = "t32";
	this.t32.setTransform(103.7,44.05,1,1,0,0,0,86.5,17.2);

	this.t31 = new lib.t31();
	this.t31.name = "t31";
	this.t31.setTransform(61,24.05,1,1,0,0,0,43.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t31},{t:this.t32}]}).wait(1));

	// txt2
	this.t22 = new lib.t22();
	this.t22.name = "t22";
	this.t22.setTransform(103.7,44.05,1,1,0,0,0,86.5,17.2);

	this.t21 = new lib.t21();
	this.t21.name = "t21";
	this.t21.setTransform(61,24.05,1,1,0,0,0,43.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t21},{t:this.t22}]}).wait(1));

	// txt1
	this.t12 = new lib.t12();
	this.t12.name = "t12";
	this.t12.setTransform(66,40,1,1,0,0,0,48,13);

	this.t11 = new lib.t11();
	this.t11.name = "t11";
	this.t11.setTransform(79,20,1,1,0,0,0,62,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t11},{t:this.t12}]}).wait(1));

	// tb
	this.tb1 = new lib.tb1();
	this.tb1.name = "tb1";
	this.tb1.setTransform(-74,0);

	this.tb2 = new lib.tb1();
	this.tb2.name = "tb2";
	this.tb2.setTransform(-102,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tb2},{t:this.tb1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-102,0,361.3,62.5), null);


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
	this.subArr = new lib.subArr();
	this.subArr.name = "subArr";
	this.subArr.setTransform(113.4,11.2,1,1,0,0,0,6.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.subArr).wait(1));

	// text
	this.instance = new lib.subText();
	this.instance.setTransform(52.1,10.8,1,1,0,0,0,52.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subCTA, new cjs.Rectangle(25,0,94.8,21.7), null);


(lib.ok = function(mode,startPosition,loop,reversed) {
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
	this.ok2 = new lib.ok2();
	this.ok2.name = "ok2";
	this.ok2.setTransform(17.35,25.55,1,1,-75.001,0,0,-0.6,3.1);

	this.ok1 = new lib.ok1();
	this.ok1.name = "ok1";
	this.ok1.setTransform(0.25,17.4,1,1,14.999,0,0,-0.5,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ok1},{t:this.ok2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ok, new cjs.Rectangle(0,0,25.8,25.5), null);


(lib.handPhone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// c11
	this.c11 = new lib.c11();
	this.c11.name = "c11";
	this.c11.setTransform(122.55,38.15,1,1,0,0,0,30.8,26.6);
	this.c11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.c11).wait(1));

	// c33
	this.c33 = new lib.c33();
	this.c33.name = "c33";
	this.c33.setTransform(122.55,38.15,1,1,0,0,0,30.8,26.6);
	this.c33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.c33).wait(1));

	// c22
	this.c22 = new lib.c22();
	this.c22.name = "c22";
	this.c22.setTransform(122.55,38.15,1,1,0,0,0,30.8,26.6);
	this.c22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.c22).wait(1));

	// ok
	this.ok = new lib.ok();
	this.ok.name = "ok";
	this.ok.setTransform(121.65,38.3,1,1,7.0001,0,0,13,12.7);

	this.timeline.addTween(cjs.Tween.get(this.ok).wait(1));

	// Layer_4
	this.screen = new lib.screenPhone();
	this.screen.name = "screen";
	this.screen.setTransform(84.55,42.65,1,1,0,0,0,14.5,25);
	this.screen.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

	// screenPhone
	this.screen_1 = new lib.screenPhone();
	this.screen_1.name = "screen_1";
	this.screen_1.setTransform(152,104,1,1,0,0,0,81.5,84);
	this.screen_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.screen_1).wait(1));

	// back
	this.back = new lib.deviceA_1();
	this.back.name = "back";
	this.back.setTransform(112.05,47.05,1,1,0,0,0,100,145);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handPhone, new cjs.Rectangle(12.1,-97.9,200,290), null);


(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// c11
	this.c22 = new lib.c22();
	this.c22.name = "c22";
	this.c22.setTransform(45.7,170.15,0.8487,0.8487,132.1251,0,0,30.8,26.4);

	this.c11 = new lib.c11();
	this.c11.name = "c11";
	this.c11.setTransform(45.7,170.15,0.8487,0.8487,132.1251,0,0,30.8,26.4);

	this.c33 = new lib.c33();
	this.c33.name = "c33";
	this.c33.setTransform(45.7,170.15,0.8487,0.8487,132.1251,0,0,30.8,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c33},{t:this.c11},{t:this.c22}]}).wait(1));

	// ok
	this.ok = new lib.ok();
	this.ok.name = "ok";
	this.ok.setTransform(44.8,169.6,0.74,0.74,32.999,0,0,13.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.ok).wait(1));

	// Layer_2
	this.c33_1 = new lib.c33();
	this.c33_1.name = "c33_1";
	this.c33_1.setTransform(60.85,187.1,0.26,0.5,0,0,0,37.9,30.2);
	this.c33_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.c33_1).wait(1));

	// screenWatch
	this.screen = new lib.screenWatch();
	this.screen.name = "screen";
	this.screen.setTransform(60.5,184,1,1,0,0,0,14.5,25);
	this.screen.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

	// Layer_3
	this.back = new lib.deviceB_1();
	this.back.name = "back";
	this.back.setTransform(70,172.05,1,1,0,0,0,109.5,148);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-39.5,24.1,219,296), null);


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

	// ctaText
	this.ctaText = new lib.ctaText();
	this.ctaText.name = "ctaText";
	this.ctaText.setTransform(64.1,20.3,1,1,0,0,0,36,10);

	this.timeline.addTween(cjs.Tween.get(this.ctaText).wait(1));

	// ctaBack
	this.ctaBack = new lib.ctaBack();
	this.ctaBack.name = "ctaBack";
	this.ctaBack.setTransform(64,21,1,1,0,0,0,64,21);

	this.timeline.addTween(cjs.Tween.get(this.ctaBack).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,128,41), null);


(lib.circleBG = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.whiteCircle();
	this.instance.setTransform(525,90,1,1,0,0,0,3,3);

	this.instance_1 = new lib.whiteCircle();
	this.instance_1.setTransform(525,60,1,1,0,0,0,3,3);

	this.instance_2 = new lib.whiteCircle();
	this.instance_2.setTransform(525,31,1,1,0,0,0,3,3);

	this.instance_3 = new lib.whiteCircle();
	this.instance_3.setTransform(525,3,1,1,0,0,0,3,3);

	this.instance_4 = new lib.whiteCircle();
	this.instance_4.setTransform(496,90,1,1,0,0,0,3,3);

	this.instance_5 = new lib.whiteCircle();
	this.instance_5.setTransform(496,60,1,1,0,0,0,3,3);

	this.instance_6 = new lib.whiteCircle();
	this.instance_6.setTransform(496,31,1,1,0,0,0,3,3);

	this.instance_7 = new lib.whiteCircle();
	this.instance_7.setTransform(496,3,1,1,0,0,0,3,3);

	this.instance_8 = new lib.whiteCircle();
	this.instance_8.setTransform(467,90,1,1,0,0,0,3,3);

	this.instance_9 = new lib.whiteCircle();
	this.instance_9.setTransform(467,60,1,1,0,0,0,3,3);

	this.instance_10 = new lib.whiteCircle();
	this.instance_10.setTransform(467,31,1,1,0,0,0,3,3);

	this.instance_11 = new lib.whiteCircle();
	this.instance_11.setTransform(467,3,1,1,0,0,0,3,3);

	this.instance_12 = new lib.whiteCircle();
	this.instance_12.setTransform(438,90,1,1,0,0,0,3,3);

	this.instance_13 = new lib.whiteCircle();
	this.instance_13.setTransform(438,60,1,1,0,0,0,3,3);

	this.instance_14 = new lib.whiteCircle();
	this.instance_14.setTransform(438,31,1,1,0,0,0,3,3);

	this.instance_15 = new lib.whiteCircle();
	this.instance_15.setTransform(438,3,1,1,0,0,0,3,3);

	this.instance_16 = new lib.whiteCircle();
	this.instance_16.setTransform(409,90,1,1,0,0,0,3,3);

	this.instance_17 = new lib.whiteCircle();
	this.instance_17.setTransform(409,60,1,1,0,0,0,3,3);

	this.instance_18 = new lib.whiteCircle();
	this.instance_18.setTransform(409,31,1,1,0,0,0,3,3);

	this.instance_19 = new lib.whiteCircle();
	this.instance_19.setTransform(409,3,1,1,0,0,0,3,3);

	this.instance_20 = new lib.whiteCircle();
	this.instance_20.setTransform(380,90,1,1,0,0,0,3,3);

	this.instance_21 = new lib.whiteCircle();
	this.instance_21.setTransform(380,60,1,1,0,0,0,3,3);

	this.instance_22 = new lib.whiteCircle();
	this.instance_22.setTransform(380,31,1,1,0,0,0,3,3);

	this.instance_23 = new lib.whiteCircle();
	this.instance_23.setTransform(380,3,1,1,0,0,0,3,3);

	this.instance_24 = new lib.whiteCircle();
	this.instance_24.setTransform(352,90,1,1,0,0,0,3,3);

	this.instance_25 = new lib.whiteCircle();
	this.instance_25.setTransform(352,60,1,1,0,0,0,3,3);

	this.instance_26 = new lib.whiteCircle();
	this.instance_26.setTransform(352,31,1,1,0,0,0,3,3);

	this.instance_27 = new lib.whiteCircle();
	this.instance_27.setTransform(352,3,1,1,0,0,0,3,3);

	this.instance_28 = new lib.whiteCircle();
	this.instance_28.setTransform(322,90,1,1,0,0,0,3,3);

	this.instance_29 = new lib.whiteCircle();
	this.instance_29.setTransform(322,60,1,1,0,0,0,3,3);

	this.instance_30 = new lib.whiteCircle();
	this.instance_30.setTransform(322,31,1,1,0,0,0,3,3);

	this.instance_31 = new lib.whiteCircle();
	this.instance_31.setTransform(322,3,1,1,0,0,0,3,3);

	this.instance_32 = new lib.whiteCircle();
	this.instance_32.setTransform(293,90,1,1,0,0,0,3,3);

	this.instance_33 = new lib.whiteCircle();
	this.instance_33.setTransform(293,60,1,1,0,0,0,3,3);

	this.instance_34 = new lib.whiteCircle();
	this.instance_34.setTransform(293,31,1,1,0,0,0,3,3);

	this.instance_35 = new lib.whiteCircle();
	this.instance_35.setTransform(293,3,1,1,0,0,0,3,3);

	this.instance_36 = new lib.whiteCircle();
	this.instance_36.setTransform(264,90,1,1,0,0,0,3,3);

	this.instance_37 = new lib.whiteCircle();
	this.instance_37.setTransform(264,60,1,1,0,0,0,3,3);

	this.instance_38 = new lib.whiteCircle();
	this.instance_38.setTransform(264,31,1,1,0,0,0,3,3);

	this.instance_39 = new lib.whiteCircle();
	this.instance_39.setTransform(264,3,1,1,0,0,0,3,3);

	this.instance_40 = new lib.whiteCircle();
	this.instance_40.setTransform(235,90,1,1,0,0,0,3,3);

	this.instance_41 = new lib.whiteCircle();
	this.instance_41.setTransform(235,60,1,1,0,0,0,3,3);

	this.instance_42 = new lib.whiteCircle();
	this.instance_42.setTransform(235,31,1,1,0,0,0,3,3);

	this.instance_43 = new lib.whiteCircle();
	this.instance_43.setTransform(235,3,1,1,0,0,0,3,3);

	this.instance_44 = new lib.whiteCircle();
	this.instance_44.setTransform(206,90,1,1,0,0,0,3,3);

	this.instance_45 = new lib.whiteCircle();
	this.instance_45.setTransform(206,60,1,1,0,0,0,3,3);

	this.instance_46 = new lib.whiteCircle();
	this.instance_46.setTransform(206,31,1,1,0,0,0,3,3);

	this.instance_47 = new lib.whiteCircle();
	this.instance_47.setTransform(206,3,1,1,0,0,0,3,3);

	this.instance_48 = new lib.whiteCircle();
	this.instance_48.setTransform(177,90,1,1,0,0,0,3,3);

	this.instance_49 = new lib.whiteCircle();
	this.instance_49.setTransform(177,60,1,1,0,0,0,3,3);

	this.instance_50 = new lib.whiteCircle();
	this.instance_50.setTransform(177,31,1,1,0,0,0,3,3);

	this.instance_51 = new lib.whiteCircle();
	this.instance_51.setTransform(177,3,1,1,0,0,0,3,3);

	this.instance_52 = new lib.whiteCircle();
	this.instance_52.setTransform(148,90,1,1,0,0,0,3,3);

	this.instance_53 = new lib.whiteCircle();
	this.instance_53.setTransform(148,60,1,1,0,0,0,3,3);

	this.instance_54 = new lib.whiteCircle();
	this.instance_54.setTransform(148,31,1,1,0,0,0,3,3);

	this.instance_55 = new lib.whiteCircle();
	this.instance_55.setTransform(148,3,1,1,0,0,0,3,3);

	this.instance_56 = new lib.whiteCircle();
	this.instance_56.setTransform(119,90,1,1,0,0,0,3,3);

	this.instance_57 = new lib.whiteCircle();
	this.instance_57.setTransform(119,60,1,1,0,0,0,3,3);

	this.instance_58 = new lib.whiteCircle();
	this.instance_58.setTransform(119,31,1,1,0,0,0,3,3);

	this.instance_59 = new lib.whiteCircle();
	this.instance_59.setTransform(119,3,1,1,0,0,0,3,3);

	this.instance_60 = new lib.whiteCircle();
	this.instance_60.setTransform(91,90,1,1,0,0,0,3,3);

	this.instance_61 = new lib.whiteCircle();
	this.instance_61.setTransform(91,60,1,1,0,0,0,3,3);

	this.instance_62 = new lib.whiteCircle();
	this.instance_62.setTransform(91,31,1,1,0,0,0,3,3);

	this.instance_63 = new lib.whiteCircle();
	this.instance_63.setTransform(91,3,1,1,0,0,0,3,3);

	this.instance_64 = new lib.whiteCircle();
	this.instance_64.setTransform(61,90,1,1,0,0,0,3,3);

	this.instance_65 = new lib.whiteCircle();
	this.instance_65.setTransform(61,60,1,1,0,0,0,3,3);

	this.instance_66 = new lib.whiteCircle();
	this.instance_66.setTransform(61,31,1,1,0,0,0,3,3);

	this.instance_67 = new lib.whiteCircle();
	this.instance_67.setTransform(61,3,1,1,0,0,0,3,3);

	this.instance_68 = new lib.whiteCircle();
	this.instance_68.setTransform(32,90,1,1,0,0,0,3,3);

	this.instance_69 = new lib.whiteCircle();
	this.instance_69.setTransform(32,60,1,1,0,0,0,3,3);

	this.instance_70 = new lib.whiteCircle();
	this.instance_70.setTransform(32,31,1,1,0,0,0,3,3);

	this.instance_71 = new lib.whiteCircle();
	this.instance_71.setTransform(32,3,1,1,0,0,0,3,3);

	this.instance_72 = new lib.whiteCircle();
	this.instance_72.setTransform(3,90,1,1,0,0,0,3,3);

	this.instance_73 = new lib.whiteCircle();
	this.instance_73.setTransform(3,60,1,1,0,0,0,3,3);

	this.instance_74 = new lib.whiteCircle();
	this.instance_74.setTransform(3,31,1,1,0,0,0,3,3);

	this.instance_75 = new lib.whiteCircle();
	this.instance_75.setTransform(3,3,1,1,0,0,0,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circleBG, new cjs.Rectangle(-0.5,-0.5,529,94), null);


(lib.back = function(mode,startPosition,loop,reversed) {
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
	this.b1 = new lib.b1();
	this.b1.name = "b1";
	this.b1.setTransform(168,140,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// Layer_2
	this.b2 = new lib.b2();
	this.b2.name = "b2";
	this.b2.setTransform(169,140,1,1,0,0,0,185,154);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-16,-14,370,308), null);


// stage content:
(lib._336x280 = function(mode,startPosition,loop,reversed) {
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
			AD_FINISHED = false,
			_overed = false,
			clickT = window.clickTag;
		
		animContDiv.addEventListener("mouseover", doRollOver, false);
		animContDiv.addEventListener("mouseout", doRollOut, false);
		var click_btn = animContDiv.addEventListener("click", doClick, false);
		
		
		function ctaGo() {
			var tlCTA = gsap.timeline({repeat: 1, repeatDelay: 3});
			tlCTA.to(self.cta, {duration:0.2, scale:1.05, ease: "expo.in"}, 0)
			.to(self.cta, {duration:0.2, scale:0.95, ease: "none"})
			.to(self.cta, {duration:0.2, scale:1.1, ease: "none"})
			.to(self.cta, {duration:0.5, scale:1, ease: "circ"});
			}
		
		function hide(mc_array) {
			for (i=0; i < mc_array.length; i++) {
				mc_array[i].visible = false;
			}
		}
		
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
		
		function doWake(anim_length) {
			gsap.killTweensOf(doSleep);
			doSleep();
			createjs.Ticker.addEventListener("tick", stage);
			gsap.delayedCall(anim_length, doSleep);
		}
		function doSleep() {
			createjs.Ticker.removeAllEventListeners("tick");
		}
		function doRollOver(event) {
			if (AD_FINISHED) {
				doWake(0.6); // 0.6 because of gsap.to(self.cta's duration is 0.6, makes sense? 
			}
			if (!_overed) {
				gsap.to(self.cta, {scale:1.05 });
				gsap.to(self.subCTA.subArr, {rotation:"-=360"});
			}
			_overed = true;
		}
		function doRollOut(event) {
			if (AD_FINISHED) {
				doWake(0.6);
			}
				if (_overed) {
				gsap.to(self.cta, {scale:1.0});
			}
			_overed = false;
		}
		function adFinished() {
			console.log("AD FINISHED!");
			AD_FINISHED = true;
			doRollOut(); 
		}
		
		function doClick() {
			window.open(clickT, "_blank");
		}
		
		/////////////////settings
		self.txt.t21.alpha = self.txt.t22.alpha = 0;
		self.txt.t31.alpha = self.txt.t32.alpha = 0;
		self.txt.t41.alpha = self.txt.t42.alpha = 0;
		/////////////////cache
		var allImages = [self.im1, self.back.b1, self.back.b2, self.deviceA.back, self.deviceB.back, self.deviceA.screen, self.deviceB.screen];
		
		for (i = 0; i < allImages.length; i++) {
			if(i>=(allImages.length-2))
				allImages[i].cache(-90, -90, allImages[i].getBounds().width*1.6+20, allImages[i].getBounds().height*1.6+20, cacheScale);
			else
			allImages[i].cache(-10, -10, allImages[i].getBounds().width+20, allImages[i].getBounds().height+20, cacheScale);
		}
		
		var allText = [self.logo, self.txt.t11, self.txt.t12, self.txt.t21, self.txt.t22, self.txt.t31, self.txt.t32, self.txt.t41, self.txt.t42];
		
		for (i = 0; i < allText.length; i++) {
			allText[i].cache(-5, -5, 300, 150, cacheScale);
		}
		
		
		////////////////
		animateInCreative_GSAP_TIMELINE();
		
		function animateInCreative_GSAP_TIMELINE() {
			
		addBorder();
		
		gsap.defaults({
		  ease: "elastic(0.9, 1.1)", 
		  duration: 0.6
		});
		
		/////frame_1
		var d = 0;
		
		tl.set([self.deviceA.c11,self.deviceB.c11,self.deviceA.c22,self.deviceB.c22,self.deviceA.c33,self.deviceB.c33], {alpha:0});
		
		tl.from([self.im1, self.back.b1], {duration:2, scale:1.05, ease:"sine"}, d);
		
		tl.from([self.txt.tb1, self.txt.tb2], {duration:0.8, x:"-=300", stagger:0.1, ease:"expo"}, d);
		tl.from([self.txt.t11, self.txt.t12], {duration:1, y:"+=10", alpha:0, stagger:0.1}, d+0.2);
		tl.from(self.subCTA, {x:"+=150"}, d+0.5);
		
		/////frame_2
		d += 1.0;
		tl.to(self.txt.tb1, {duration:2.0, x:"+=30", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:2.0, x:"+=20", ease:"power2.inOut"}, d);
		
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:1.0, x:"-=600", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:0.7, x:"-=600", ease: "expo.in", stagger:0.1}, d+1.1);
		
		d += 0.5;
		tl.to([self.sh3, self.sh4, self.sh2], {duration:1.0, x:"-=600", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh3, self.sh4, self.sh2], {duration:0.7, x:"-=600", ease: "expo.in", stagger:0.1}, d+1.1);
		
		d += 0.8;
		tl.to(self.sh7, {duration:1.8, x:-750, ease: "expo.inOut"}, d);
		tl.to(self.sh10, {duration:1.4, x:-400, ease: "expo.inOut"}, d+0.05);
		tl.to(self.sh6, {duration:1.7, x:-1400, ease: "expo.inOut"}, d+0.10);
		tl.to(self.sh9, {duration:1.6, x:-1450, ease: "expo.inOut"}, d+0.15);
		tl.to(self.sh8, {duration:1.5, x:-800, ease: "expo.inOut"}, d+0.20);
		
		
		d += 0.35;
		tl.to([self.im1, self.back.b1], {duration:0.6, scale:2.0, ease:"expo.in"}, d);
		tl.to([self.im1, self.back.b1], {duration:0.01, alpha:0, ease:"none"}, d+0.5);
		
		
		// show text 2 koop of huur
		tl.set([self.txt.t11, self.txt.t12], {alpha:0}, d+0.5);
		tl.set([self.txt.t21, self.txt.t22], {alpha:1}, d+0.5);
		
		
		tl.to(self.txt.tb1, {duration:0.5, x:"-=65", ease:"power2.inOut"}, d+0.4);
		tl.to(self.txt.tb2, {duration:0.5, x:"+=45", ease:"power2.inOut"}, d+0.5);
		
		
		//tl.to(self.txt, {duration:1.0, y:"-=10"}, d+0.6);
		//tl.to(self.txt.tb2, {duration:1.0, y:"-=10"}, d+0.6);
		
		//tl.to(self.txt.tb1, {duration:0.5, x:"+=120", ease:"power2.inOut"}, d+0.3);
		//tl.to(self.txt.tb2, {duration:0.5, x:"+=140", ease:"power2.inOut"}, d+0.3);
		
		tl.to(self.subCTA.subArr, {rotation:"-=360"}, d+0.2);
		
		d += 0.6;
		//tl.to(self.txt.tb1, {duration:2.0, x:"-=15", ease:"power2.inOut"}, d);
		//tl.to(self.txt.tb2, {duration:2.0, x:"-=15", ease:"power2.inOut"}, d);
		
		tl.from(self.back.b2, {duration:7.5, scale:0.91, ease:"expo"}, d);
		
		tl.from(self.deviceA, {duration:0.7, x:"+=300", ease:"expo"}, d);
		tl.from(self.deviceB, {duration:0.7, x:"+=300", ease:"expo"}, d+0.1);
		
		tl.from([self.c1, self.c2], {duration:0.1, alpha:0, ease:"none"}, d);
		tl.from(self.c1, {duration:2.0, x:"-=40", y:"-=40", scale:0.66, ease:"power2"}, d);
		tl.from(self.c2, {duration:2.0, x:"-=30", y:"-=30", scale:0.66, ease:"power3"}, d);
		
		//tl.to(self.deviceA, {duration:2, scale:1, x:"-=40", ease:"expo"}, d+0.4);
		
		tl.from(self.whitecircles.children, {duration:0.5,scale:0, ease:"power2.inOut"}, d+0.4);
		
		tl.to(self.whitecircles, {duration:8,x:"-=120", ease:"linear"}, d+0.4);
				
		d+=2;
		
		tl.to(self.c1, {duration:0.9, x:"-=80", y:"+=100", scale:0.0, ease: "power2.inOut"}, d);
		tl.to(self.c2, {duration:0.9, x:"-=30", y:"+=100", scale:0.0, ease: "power2.inOut"}, d);
		
		//tl.set([self.c4, self.c5], {duration:0.1, alpha:0, ease:"none"}, d+0.5);
		tl.from(self.c4, {duration:1.25, x:"+=40", scale:0.0, ease: "power2.inOut"}, d);
		tl.from(self.c5, {duration:1.25, x:"+=40", scale:0.0, ease: "power2.inOut"}, d);
		
		
		//show text 3: de beste
		//tl.set([self.txt.t21, self.txt.t22], {alpha:0}, d);
		tl.set([self.txt.t31, self.txt.t32], {alpha:0,y:"-=10"}, d);
		 
		tl.to([self.txt.t21, self.txt.t22], {duration:1, y:"-=10", alpha:0, stagger:0.1}, d-0.2);
		tl.to([self.txt.t31, self.txt.t32], {duration:1, y:"+=10", alpha:1, stagger:0.1}, d+0.2);
		
		tl.to(self.txt.tb1, {duration:0.5, x:"+=40", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:0.5, x:"-=70", ease:"power2.inOut"}, d);
		
		
		//tl.to(self.txt, {duration:1.0, y:"-=10"}, d+0.6);
		//tl.to(self.txt.tb2, {duration:1.0, y:"-=10"}, d+0.6);
		
		
		//deviceA
		tl.to(self.deviceA, {duration:0.8, scale:0.7, x:"+=12", y:"+=31", ease: "power2.inOut"}, d);
		tl.to(self.deviceB, {duration:0.8, x:"+=40", y:"+=10", ease: "power2.inOut"}, d);
		
		
		
		
		//tl.set([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {x:"+=1200"}, d);
		//tl.set([self.sh3, self.sh4, self.sh2], {x:"+=1200"}, d);
		//tl.set([self.sh7, self.sh6, self.sh9, self.sh8, self.sh10], {x:330}, d);
		
		
		/////frame_3
		
		d += 1.0;
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:1.0, x:"-=600", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:0.7, x:"-=600", ease: "expo.in", stagger:0.1}, d+1.1);
		
		tl.to([self.sh3, self.sh4, self.sh2], {duration:1.0, x:"-=600", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh3, self.sh4, self.sh2], {duration:0.7, x:"-=600", ease: "expo.in", stagger:0.1}, d+1.1);
		
		
		
		
		//tl.to(self.back.b2, {duration:3.0, scale:1, ease:"expo.in"}, d);
		
		
		
		tl.to(self.subCTA.subArr, {rotation:"-=360"}, d+0.2);
		
		d += 1.5;
		tl.from([self.c3], {duration:0.1, alpha:0, ease:"none"}, d);
		tl.from(self.c3, {duration:5.0, x:"+=30", y:"-=30", scale:0.66, ease:"power4"}, d);
		
		
		
		
		//ga voor
		
		
		
		tl.to(self.txt.tb1, {duration:1.0, x:"+=30", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:1.0, x:"+=50", ease:"power2.inOut"}, d);
		
		//tl.set([self.txt.t31, self.txt.t32], {alpha:0}, d);
		//tl.set([self.txt.t41, self.txt.t42], {alpha:1}, d);
		
		tl.set([self.txt.t41, self.txt.t42], {alpha:0,y:"-=10"}, d);
		 
		tl.to([self.txt.t31, self.txt.t32], {duration:1, y:"-=10", alpha:0, stagger:0.1}, d-0.2);
		tl.to([self.txt.t41, self.txt.t42], {duration:1, y:"+=10", alpha:1, stagger:0.1}, d+0.2);
		
		d += 0.5;
		tl.to(self.txt.tb1, {duration:3.0, x:"+=15", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:3.0, x:"-=5", ease:"power2.inOut"}, d);
		
		
		
		tl.to(self.deviceA, {duration:0.7, scale:0.6, x:"-=5", y:"-=25", ease: "power2.inOut"}, d);
		tl.to(self.deviceB, {duration:0.7, scale:0.51, x:"-=10", y:"+=5", ease: "power2.inOut"}, d);
		
		
		
		tl.to(self.c1, {duration:1.5, x:"+=45", y:"-=75", scale:1.0, ease:"expo.inOut"}, d);
		tl.to(self.c2, {duration:1.5, x:"+=0", y:"-=102", scale:1.0, ease:"expo.inOut"}, d);
		
		tl.to([self.c4, self.c5], {duration:1.5, x:"+=70", y:"+=80", scale:0.0, ease:"expo.inOut"}, d);
		
		//green screeens
		tl.to([self.deviceA.screen, self.deviceB.screen], {duration:0.03, alpha:1, ease:"none"}, d);
		tl.to([self.deviceB.c33, self.deviceA.c33], {duration:0.1, alpha:1, ease:"none"}, d+0.1);
		
		d += 0.1;
		tl.from(self.deviceB.ok.ok1, {duration:0.3, scaleX:0, ease:"expo.in"}, d);
		tl.from(self.deviceB.ok.ok2, {duration:0.2, scaleX:0, ease:"none"}, d+0.3);
		
		tl.from(self.deviceA.ok.ok1, {duration:0.3, scaleX:0, ease:"expo.in"}, d);
		tl.from(self.deviceA.ok.ok2, {duration:0.2, scaleX:0, ease:"none"}, d+0.3);
		
		d += 0.5;
		tl.set([self.deviceA.c11,self.deviceB.c11], {alpha:1, scale:1}, d);
		tl.to([self.deviceA.c11,self.deviceB.c11], {duration:0.8, scale:2.5, alpha:0, ease:"none"}, d);
		tl.set([self.deviceA.c22,self.deviceB.c22], {alpha:1.1, scale:1}, d+0.5);
		tl.to([self.deviceA.c22,self.deviceB.c22], {duration:0.9, scale:2.5, alpha:0, ease:"none"}, d+0.5);
		
		tl.set([self.deviceA.c11,self.deviceB.c11], {alpha:1.2, scale:1}, d+1.1);
		tl.to([self.deviceA.c11, self.deviceB.c11], {duration:1.0, scale:2.5, alpha:0, ease:"none"}, d+1.1);
		///
		
		
		tl.to(self.subCTA, {x:"+=150", ease: "elastic.in(0.9, 1.1)"}, d-0.5);
		tl.from(self.cta, {duration:1, x:"+="+WIDTH, onComplete:ctaGo}, d);
		
		d += 6.0;
		
		var mc_array = [self.txt.t11, self.txt.t12, self.txt.t21, self.txt.t22, self.deviceA.deviceABack, self.deviceA.screen, self.deviceB.deviceAPhBack, self.deviceB.finger, self.deviceB.screen];
		tl.call(hide, [mc_array], d);
		
		
		//tl.timeScale(0.1);
		//tl.time(5);
		//////CTA clickTag onMouseOver	
		console.log(tl.duration());
				
			tl.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// subCTA
	this.subCTA = new lib.subCTA();
	this.subCTA.name = "subCTA";
	this.subCTA.setTransform(224,255,0.8443,0.843);

	this.timeline.addTween(cjs.Tween.get(this.subCTA).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(262,251.05,1.0001,1,0,0,0,63.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// blue
	this.sh8 = new lib.sh8();
	this.sh8.name = "sh8";
	this.sh8.setTransform(330,212.25,0.75,0.75);

	this.sh9 = new lib.sh9();
	this.sh9.name = "sh9";
	this.sh9.setTransform(330,287.25,0.75,0.75);

	this.sh7 = new lib.sh7();
	this.sh7.name = "sh7";
	this.sh7.setTransform(330,0,0.75,0.75);

	this.sh6 = new lib.sh9();
	this.sh6.name = "sh6";
	this.sh6.setTransform(330,62.25,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh6},{t:this.sh7},{t:this.sh9},{t:this.sh8}]}).wait(1));

	// above
	this.sh10 = new lib.sh10();
	this.sh10.name = "sh10";
	this.sh10.setTransform(430,42.75,0.75,0.75);

	this.sh1 = new lib.sh1();
	this.sh1.name = "sh1";
	this.sh1.setTransform(815,12,0.75,0.75);

	this.sh3 = new lib.sh3();
	this.sh3.name = "sh3";
	this.sh3.setTransform(786.5,109.75,0.75,0.75);

	this.sh4 = new lib.sh4();
	this.sh4.name = "sh4";
	this.sh4.setTransform(739,152.75,0.75,0.75);

	this.sh2 = new lib.sh2();
	this.sh2.name = "sh2";
	this.sh2.setTransform(718.5,133.25,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh2},{t:this.sh4},{t:this.sh3},{t:this.sh1},{t:this.sh10}]}).wait(1));

	// texts
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.setTransform(208.1,226.1,1,1,0,0,0,208.1,35.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// im2
	this.deviceB = new lib.hand();
	this.deviceB.name = "deviceB";
	this.deviceB.setTransform(215,124,0.45,0.45,0,0,0,41.1,172);

	this.deviceA = new lib.handPhone();
	this.deviceA.name = "deviceA";
	this.deviceA.setTransform(127,96,0.5,0.5,0,0,0,112.4,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deviceA},{t:this.deviceB}]}).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(299,34,1,1,0,0,0,30,15);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// im1
	this.im1 = new lib.im1_1();
	this.im1.name = "im1";
	this.im1.setTransform(211,121,1,1,0,0,0,67,109);

	this.timeline.addTween(cjs.Tween.get(this.im1).wait(1));

	// circles
	this.c4 = new lib.c1();
	this.c4.name = "c4";
	this.c4.setTransform(163,47,1,1,0,0,0,96,96);

	this.c5 = new lib.c2();
	this.c5.name = "c5";
	this.c5.setTransform(59,70.5,1.1835,1.1835,0,0,0,79,79);
	this.c5.alpha = 0.6484;

	this.c1 = new lib.c1();
	this.c1.name = "c1";
	this.c1.setTransform(121,54,1,1,0,0,0,96.4,95.6);

	this.c3 = new lib.c3();
	this.c3.name = "c3";
	this.c3.setTransform(1217,-274,1,1,0,0,0,198,198);

	this.c2 = new lib.c2();
	this.c2.name = "c2";
	this.c2.setTransform(65,16,1,1,0,0,0,79,79);
	this.c2.alpha = 0.6484;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c2},{t:this.c3},{t:this.c1},{t:this.c5},{t:this.c4}]}).wait(1));

	// whitecircles
	this.whitecircles = new lib.circleBG();
	this.whitecircles.name = "whitecircles";
	this.whitecircles.setTransform(26.05,148.55,0.8,0.8,0,0,0,3.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.whitecircles).wait(1));

	// behind
	this.sh13 = new lib.sh2();
	this.sh13.name = "sh13";
	this.sh13.setTransform(544.1,28.2,0.3,0.3,0,0,0,0.4,0.4);

	this.sh12 = new lib.sh2();
	this.sh12.name = "sh12";
	this.sh12.setTransform(613.8,75.95,0.6225,0.6225,0,0,0,0.1,0.2);

	this.sh11 = new lib.sh2();
	this.sh11.name = "sh11";
	this.sh11.setTransform(511,157.1,0.75,0.75);

	this.sh15 = new lib.sh3();
	this.sh15.name = "sh15";
	this.sh15.setTransform(550.75,123.35,0.75,0.75);

	this.sh14 = new lib.sh10();
	this.sh14.name = "sh14";
	this.sh14.setTransform(585.35,36.4,0.45,0.45,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh14},{t:this.sh15},{t:this.sh11},{t:this.sh12},{t:this.sh13}]}).wait(1));

	// back
	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(169,143,1,1,0,0,0,169,143);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-593,-332,2008,783.6);
// library properties:
lib.properties = {
	id: '1F8CA2A4A0EA654EABBB3FBCA823831E',
	width: 336,
	height: 280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back1.jpg?1655208376279", id:"back1"},
		{src:"images/back2.jpg?1655208376279", id:"back2"},
		{src:"images/Bitmap21.png?1655208376279", id:"Bitmap21"},
		{src:"images/Bitmap22.png?1655208376279", id:"Bitmap22"},
		{src:"images/deviceA.png?1655208376279", id:"deviceA"},
		{src:"images/deviceB.png?1655208376279", id:"deviceB"},
		{src:"images/im1.png?1655208376279", id:"im1"}
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