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
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,99);


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
p.nominalBounds = new cjs.Rectangle(0,0,242,395);


(lib.over = function() {
	this.initialize(img.over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,90);// helper functions:

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
	this.shape.graphics.f("#009FDF").s().p("A1JDkIHAnHMAjTAAAInAHHg");
	this.shape.setTransform(135.375,22.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tb1, new cjs.Rectangle(0,0,270.8,45.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AArAxIAAg2IgBgNQgBgEgDgBQgDgCgFAAQgFAAgFACQgEACgCAEIAAALIAAA3IgaAAIAAg2IgBgOQgCgDgDgCQgDgCgFAAQgHAAgFADQgEADAAAFIAABAIgbAAIAAheIACAAIAHgBQAOAAADALQAJgNAUAAQAJAAAFAEQAHADADAHQALgOATAAQANAAAHAGQAIAFABAKQABAIAAAMIAAA4g");
	this.shape.setTransform(120.175,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_1.setTransform(106.825,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_2.setTransform(96.575,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOALAAQAEAAAEgCIAHgFIAFAIIABAGQAAAEgEADQgEADgGACQgHACgIAAQgVAAgHgSg");
	this.shape_3.setTransform(88.05,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAuQgJgEAAgGQAAgDACgEIAEgIQAFAEAHADQAIADAHAAQAOAAAAgKQAAgFgEgDQgDgDgKgCQgQgDgHgGQgHgHAAgMQAAgNALgIQALgIAPAAQAPAAALAEQAIAEABAGQAAAFgGAJQgFgEgIgDQgIgDgGAAQgMAAAAAJQAAAHANADQAMACAHAEQAHAEAEAFQADAGAAAIQAAAPgLAJQgLAJgRAAQgPAAgKgEg");
	this.shape_4.setTransform(79.525,17.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBEQgFgDAAgGQAAgFAFgJIAGADIAIABQAGAAAEgDQAEgEADgIIADgKIgMAAIgfhbQAGgCAJgBQAGABAEADQAFADABAGIARA8IAPg1QADgKAFgFQAEgEAIgBQAGABAGACIghBtQgJAdgdAAQgKAAgFgDg");
	this.shape_5.setTransform(70.325,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgJgEAAgGQAAgDACgEIAEgIQAFAEAHADQAIADAHAAQAOAAAAgKQAAgFgEgDQgDgDgKgCQgQgDgHgGQgHgHAAgMQAAgNALgIQALgIAPAAQAPAAALAEQAIAEABAGQAAAFgGAJQgFgEgIgDQgIgDgGAAQgMAAAAAJQAAAHANADQAMACAHAEQAHAEAEAFQADAGAAAIQAAAPgLAJQgLAJgRAAQgPAAgKgEg");
	this.shape_6.setTransform(61.075,17.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA3IAAh9IAEgBIAFAAQASAAgBAQIAAB+QgBABgJAAQgPAAgBgRg");
	this.shape_7.setTransform(54.2,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_8.setTransform(46.325,17.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_9.setTransform(36.025,17.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOALAAQAEAAAEgCIAHgFIAFAIIABAGQAAAEgEADQgEADgHACQgGACgIAAQgVAAgHgSg");
	this.shape_10.setTransform(27.65,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_11.setTransform(18.425,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBFQgHgDgEgFQAAAIgHAAIgRAAIAAiLIADgBIAGAAQASAAAAAPIAAAmQAJgJAOAAQATAAAKANQAKAMAAAWQAAAagKANQgLAOgTAAQgHAAgHgEgAgNgFQgEADAAAEIAAArQADADAEABQAEACAFAAQAIAAAFgIQAFgHAAgQQAAgbgTAAQgHAAgEACg");
	this.shape_12.setTransform(7.825,14.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t42, new cjs.Rectangle(0,0,130.7,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AggApQgPgPAAgcQAAgQAHgMQAGgMAMgGQAMgHANAAQAVAAAMANQAMAMAAAWIgBANIg/AAQAAAOAIAGQAHAIAMAAQAHAAAFgCQAGgCADgDIAGgFIAGAJQADAFAAADQAAAEgGAEQgFAEgJADQgJACgKAAQgaAAgOgOgAAVgLQAAgXgTgBQgIABgFAGQgGAGAAALIAmAAIAAAAg");
	this.shape.setTransform(176.925,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAzQgCgHAAgMIAAhlIADgBIAHAAQAUAAAAASIAAAQIAeAAIAAAVIgeAAIAAAvQAAAPALAAQAFAAAEgCQAFgCADgEIAGAJIABAGQAAAEgEAEQgFAEgHACQgHACgJABQgYAAgHgUg");
	this.shape_1.setTransform(167.575,17.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAyQgLgEAAgHQAAgDACgEIAFgJQAFAFAIADQAJADAHAAQAQAAAAgLQAAgGgEgDQgEgDgLgCQgRgEgIgGQgIgIAAgNQAAgPAMgIQANgJAQAAQARAAAMAEQAJAEABAHQAAAFgHALQgGgFgJgDQgHgDgHAAQgOAAAAAKQAAAHAPAEQANACAHAEQAJAFADAFQAEAHAAAJQAAAQgMAKQgMAKgTAAQgQAAgLgFg");
	this.shape_2.setTransform(158.2,18.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgCgHAAgMIAAhlIADgBIAHAAQAUAAAAASIAAAQIAeAAIAAAVIgeAAIAAAvQAAAPALAAQAFAAAEgCQAFgCADgEIAGAJIABAGQAAAEgEAEQgFAEgHACQgHACgJABQgYAAgHgUg");
	this.shape_3.setTransform(149.875,17.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAoQgNgOAAgaQAAgQAHgNQAHgMAMgHQALgGAPAAQAZAAANAOQANAOAAAaQAAARgGAMQgHANgLAHQgMAGgQAAQgYAAgOgPgAgPgXQgGAJAAAOQAAAPAGAJQAFAJAKAAQAWAAAAghQgBgfgUAAQgKAAgGAIg");
	this.shape_4.setTransform(139.15,18.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA9IAAiKIAEgBIAGAAQATAAAAARIAACMIgLAAQgSAAAAgSg");
	this.shape_5.setTransform(130.1,16.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPA1IgkhmQAHgDAJAAQAFAAAEACQAEABADAFQACADACAKIAPA3IARg4IAEgMQADgEAEgCQADgCAGAAQAIAAAHADIgkBmg");
	this.shape_6.setTransform(121.9,18.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAzQgCgHAAgMIAAhlIADgBIAHAAQAUAAAAASIAAAQIAeAAIAAAVIgeAAIAAAvQAAAPALAAQAFAAAEgCQAFgCADgEIAGAJIABAGQAAAEgEAEQgFAEgHACQgHACgJABQgYAAgHgUg");
	this.shape_7.setTransform(108.525,17.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggApQgPgPAAgcQAAgQAHgMQAGgMAMgGQAMgHANAAQAVAAAMANQAMAMAAAWIgBANIg/AAQAAAOAIAGQAHAIAMAAQAHAAAFgCQAGgCADgDIAGgFIAGAJQADAFAAADQAAAEgGAEQgFAEgJADQgJACgKAAQgaAAgOgOgAAVgLQAAgXgTgBQgIABgFAGQgGAGAAALIAmAAIAAAAg");
	this.shape_8.setTransform(98.325,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASBOIAAg8QAAgLgCgEQgBgDgEgDQgDgBgGAAQgHAAgGAEQgGABAAAGIAABHIgeAAIAAiaIAEgBIAGAAQAUAAAAARIAAAsQALgMATAAQAOAAAIAFQAIAGADALQACAHAAAPIAAA+g");
	this.shape_9.setTransform(86.475,16.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA2IAAhoIADAAIAHgBQAIAAAFAEQAFACABAGQAEgGAGgEQAGgDAHgBQAIABAEACQAFADAAAFIgBAGIgDAJIgDAHQgFgEgDgBQgEgBgFgBQgGAAgFAEQgEAEAAAFIAABEg");
	this.shape_10.setTransform(72.425,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAoQgNgOAAgaQAAgQAHgNQAGgMAMgHQAMgGAPAAQAZAAANAOQANAOAAAaQAAARgHAMQgFANgNAHQgLAGgQAAQgYAAgOgPgAgPgXQgGAJAAAOQAAAPAFAJQAHAJAJAAQAVAAABghQAAgfgWAAQgJAAgGAIg");
	this.shape_11.setTransform(61.45,18.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAoQgOgOAAgaQAAgQAHgNQAGgMAMgHQAMgGAPAAQAZAAAMAOQAOAOAAAaQAAARgHAMQgFANgNAHQgLAGgQAAQgYAAgNgPgAgPgXQgGAJAAAOQAAAPAFAJQAHAJAJAAQAVAAABghQAAgfgWAAQgKAAgFAIg");
	this.shape_12.setTransform(49.2,18.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPA1IgkhmQAHgDAJAAQAFAAAEACQAEABADAFQACADACAKIAPA3IARg4IAEgMQADgEAEgCQADgCAGAAQAIAAAHADIgkBmg");
	this.shape_13.setTransform(37.75,18.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnAvQgIgJgBgQQAAggA1gEIAKAAIAAgDQAAgIgEgFQgEgDgKAAQgHAAgHACQgGACgLAGIgFgIIgCgHQAAgEAHgEQAGgDAKgDQAJgCAKAAQAWAAAKAKQALAJAAAVIAAApQAAAQAEAJQgHACgHABQgHgBgFgCQgEgDgBgGQgFAFgJAEQgHADgKAAQgPAAgKgIgAgNAHQgGAEgBAJQABAHAEAEQADAEAIAAQAHAAAGgEQAHgEgBgEIAAgWIgDAAIgCAAQgPABgIAFg");
	this.shape_14.setTransform(22.25,18.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdBEQgPgJgIgSQgIgRAAgYQAAgXAJgSQAIgRAQgJQAQgJAVAAQAMAAALAEQALADAHAGQAGAFAAAFQAAAEgDAEQgDAFgFAEQgJgIgIgEQgJgDgJAAQgTAAgLANQgKANAAAZQAAAZAKAOQALAOATAAQAKAAAHgDIAFgDIAAgfIgZAAIAAgWIA1AAIAABBQgEAFgIAEQgJAFgKACQgKACgMAAQgVAAgQgJg");
	this.shape_15.setTransform(9.175,16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t41, new cjs.Rectangle(0,0,184.7,31.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape.setTransform(82.425,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgJIAAhPIADAAIAGgBQAQAAABAQIAABPQgCACgIAAQgIgBgFgEgAgKguQgDgEAAgGQAAgHADgEQAEgDAGAAQAGAAAEADQAFAEAAAHQAAAGgFAEQgEAEgGABQgGgBgEgEg");
	this.shape_1.setTransform(74.5,14.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOAKAAQAFAAAEgCIAHgFIAFAIIABAGQAAAEgEADQgEADgHACQgGACgIAAQgWAAgGgSg");
	this.shape_2.setTransform(68.65,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_3.setTransform(59.225,17.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAtQgLgHgFgLQgGgMAAgPQAAgQAGgKQAGgMALgFQAMgHAMAAQAIAAAHACQAHACAFADQAEACABADQACACAAADQAAADgCAEQgCAEgDADQgEgEgGgDQgGgDgHAAQgLAAgGAHQgGAIAAAOQAAAOAGAIQAGAIALAAQAHAAAGgDQAGgCADgFIAFAIQACAEAAADQAAAEgEAEQgKAHgTAAQgOAAgLgFg");
	this.shape_4.setTransform(49.725,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLAKgGQALgGANAAQAXAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgVAAgNgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAAAgeQAAgcgTAAQgJAAgFAHg");
	this.shape_5.setTransform(39.2,17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA3IAAh9IAEgBIAFAAQASAAgBAQIAAB+QgBABgJAAQgQAAAAgRg");
	this.shape_6.setTransform(31,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBHIAAiKIACAAIAHgBQAOAAADAKQAEgFAHgDQAHgDAIgBQASAAAJANQAKANAAAWQAAAZgKAOQgLANgSAAQgGAAgEgCIgIgDQgEgDgBgCIAAAzgAgNguQgEADAAAEIAAApQACADAFACIAIACQATgBAAgdQAAgcgTAAQgHAAgEADg");
	this.shape_7.setTransform(18.975,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLAKgGQAMgGANAAQAWAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgWAAgMgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQAUAAgBgeQABgcgUAAQgIAAgGAHg");
	this.shape_8.setTransform(7.6,17.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t32, new cjs.Rectangle(0,0,89.7,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape.setTransform(137.075,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAtQgLgHgFgLQgGgMAAgPQAAgQAGgKQAGgMALgFQAMgHAMAAQAIAAAHACQAHACAFADQAEACABADQACACAAADQAAADgCAEQgCAEgDADQgEgEgGgDQgGgDgHAAQgLAAgGAHQgGAIAAAOQAAAOAGAIQAGAIALAAQAHAAAGgDQAGgCADgFIAFAIQACAEAAADQAAAEgEAEQgKAHgTAAQgOAAgLgFg");
	this.shape_1.setTransform(127.425,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgJIAAhPIADAAIAGgBQARAAAAAQIAABPQgCACgIAAQgJgBgEgEgAgJguQgEgEgBgGQABgHAEgEQADgDAGAAQAGAAAEADQAFAEAAAHQAAAGgFAEQgEAEgGABQgGgBgDgEg");
	this.shape_2.setTransform(119.75,14.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAwIgghdQAGgCAIAAQAFAAADABQAEACADAEIAEAMIAOAyIAPgzQABgHADgEQACgEAEgBQACgCAGAAQAHAAAGACIghBdg");
	this.shape_3.setTransform(112.35,17.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAxIAAheIADAAIAGgBQAHAAAFADQAEADABAFQAEgGAFgDQAGgEAHAAQAGAAAEADQAEACAAAFIgBAGIgCAHIgDAHIgHgFQgDgBgFAAQgGAAgEAEQgEADAAAFIAAA9g");
	this.shape_4.setTransform(104.35,17.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_5.setTransform(94.875,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgJgEAAgGQAAgDACgEIAEgIQAFAEAHADQAIADAHAAQAOAAAAgKQAAgFgEgDQgDgDgKgCQgQgDgHgGQgHgHAAgMQAAgNALgIQALgIAPAAQAPAAALAEQAIAEABAGQAAAFgGAJQgFgEgIgDQgIgDgGAAQgMAAAAAJQAAAHANADQAMACAHAEQAHAEAEAFQADAGAAAIQAAAPgLAJQgLAJgRAAQgPAAgKgEg");
	this.shape_6.setTransform(85.325,17.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_7.setTransform(72.025,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOAKAAQAEAAAFgCIAHgFIAFAIIABAGQAAAEgEADQgEADgGACQgHACgIAAQgVAAgHgSg");
	this.shape_8.setTransform(63.5,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAuQgJgEAAgGQAAgDACgEIAEgIQAFAEAHADQAIADAHAAQAOAAAAgKQAAgFgEgDQgDgDgKgCQgQgDgHgGQgHgHAAgMQAAgNALgIQALgIAPAAQAPAAALAEQAIAEABAGQAAAFgGAJQgFgEgIgDQgIgDgGAAQgMAAAAAJQAAAHANADQAMACAHAEQAHAEAEAFQADAGAAAIQAAAPgLAJQgLAJgRAAQgPAAgKgEg");
	this.shape_9.setTransform(54.975,17.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_10.setTransform(45.675,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBFQgHgDgEgFQAAAIgHAAIgRAAIAAiLIADgBIAGAAQASAAAAAPIAAAmQAJgJAOAAQATAAAKANQAKAMAAAWQAAAagKANQgLAOgTAAQgHAAgHgEgAgNgFQgEADAAAEIAAArQADADAEABQAEACAFAAQAIAAAFgIQAFgHAAgQQAAgbgTAAQgHAAgEACg");
	this.shape_11.setTransform(35.075,14.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_12.setTransform(20.225,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BDIAAiDQASgDATAAQAhAAASARQARAQAAAiQAAATgIARQgHAPgOAIQgPAIgSAAgAgZgsIAABaIAMAAQATAAAKgLQAJgLAAgYQAAgXgJgLQgKgLgSAAg");
	this.shape_13.setTransform(8.7,15.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(0,0,144.3,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOALAAQADAAAFgCIAHgFIAFAIIABAGQAAAEgEADQgEADgGACQgHACgIAAQgVAAgHgSg");
	this.shape.setTransform(184.45,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_1.setTransform(175.025,17.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_2.setTransform(164.725,17.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArAxIAAg2IgBgNQgBgEgDgBQgDgCgFAAQgFAAgFACQgEACgCAEIAAALIAAA3IgaAAIAAg2IgBgOQgCgDgDgCQgDgCgFAAQgHAAgFADQgEADAAAFIAABAIgbAAIAAheIACAAIAHgBQAOAAADALQAJgNAUAAQAJAAAFAEQAHADADAHQALgOATAAQANAAAHAGQAIAFABAKQABAIAAAMIAAA4g");
	this.shape_3.setTransform(151.375,17.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLALgGQAKgGANAAQAXAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgWAAgMgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAAAgeQAAgcgTAAQgIAAgGAHg");
	this.shape_4.setTransform(137.5,17.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOAKAAQAEAAAFgCIAHgFIAFAIIABAGQAAAEgEADQgEADgHACQgGACgIAAQgWAAgGgSg");
	this.shape_5.setTransform(128.6,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAsQgIgFgCgLQgBgHAAgNIAAg3IADAAIAGgBQASAAAAAQIAAAmQAAAKABAEQABADADACQAEACAFAAQAHAAAFgDQAFgDAAgFIAAg/IAEAAIAFgBQAJAAAFAFQAEAEAAAIIAABOIgSAAQgEAAgCgCQgCgCAAgHQgJANgTAAQgNAAgHgFg");
	this.shape_6.setTransform(118.825,17.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_7.setTransform(107.975,17.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA3IAAh9IAEgBIAFAAQASAAgBAQIAAB+QgBABgJAAQgQAAAAgRg");
	this.shape_8.setTransform(100.3,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_9.setTransform(92.425,17.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_10.setTransform(82.125,17.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAuQgCgGAAgLIAAhcIADAAIAGAAQASAAAAAQIAAAOIAbAAIAAAUIgbAAIAAAqQAAAOALAAQADAAAFgCIAHgFIAFAIIABAGQAAAEgEADQgEADgGACQgHACgIAAQgVAAgHgSg");
	this.shape_11.setTransform(73.75,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_12.setTransform(64.525,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBFQgHgDgEgFQAAAIgHAAIgRAAIAAiLIADgBIAGAAQASAAAAAPIAAAmQAJgJAOAAQATAAAKANQAKAMAAAWQAAAagKANQgLAOgTAAQgHAAgHgEgAgNgFQgEADAAAEIAAArQADADAEABQAEACAFAAQAIAAAFgIQAFgHAAgQQAAgbgTAAQgHAAgEACg");
	this.shape_13.setTransform(53.925,14.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAwIgRgrIgRArIgTAAIgkhdQAJgCAGAAQANAAAEALIASA1IANgfIgJgfQAGgCAHAAQALAAACALIASAzIANgsQADgKADgEQAEgEAHAAQAHAAAIACIghBdg");
	this.shape_14.setTransform(36.85,17.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAsQgIgFgCgLQgBgHAAgNIAAg3IADAAIAGgBQASAAAAAQIAAAmQAAAKABAEQABADADACQAEACAFAAQAHAAAFgDQAFgDAAgFIAAg/IAEAAIAFgBQAJAAAFAFQAEAEAAAIIAABOIgSAAQgEAAgCgCQgCgCAAgHQgJANgTAAQgNAAgHgFg");
	this.shape_15.setTransform(24.025,17.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLALgGQAKgGANAAQAXAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgWAAgMgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAAAgeQAAgcgTAAQgIAAgGAHg");
	this.shape_16.setTransform(12.85,17.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBZQgEgEAAgKIAAgBQALgBAFgEQAFgFAAgMIAAhiIACAAIAGgBQASAAAAAQIAABMIAAALQgBAMgEAIQgFAJgHAEQgHAEgJAAQgHAAgDgEgAAAhEQgEgEAAgGQAAgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgHAAQgGAAgDgFg");
	this.shape_17.setTransform(3.625,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,242.1,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAxIAAheIACAAIAHgBQAGAAAFADQAEADACAFQADgGAFgDQAGgEAHAAQAHAAADADQAFACAAAFIgBAGIgDAHIgDAHIgIgFQgDgBgEAAQgGAAgEAEQgEADABAFIAAA9g");
	this.shape.setTransform(111.75,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAsQgIgFgCgLQgBgHAAgNIAAg3IADAAIAGgBQASAAAAAQIAAAmQAAAKABAEQABADADACQAEACAFAAQAHAAAFgDQAFgDAAgFIAAg/IAEAAIAFgBQAJAAAFAFQAEAEAAAIIAABOIgSAAQgEAAgCgCQgCgCAAgHQgJANgTAAQgNAAgHgFg");
	this.shape_1.setTransform(101.725,17.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAsQgIgFgCgLQgBgHAAgNIAAg3IADAAIAGgBQASAAAAAQIAAAmQAAAKABAEQABADADACQAEACAFAAQAHAAAFgDQAFgDAAgFIAAg/IAEAAIAFgBQAJAAAFAFQAEAEAAAIIAABOIgSAAQgEAAgCgCQgCgCAAgHQgJANgTAAQgNAAgHgFg");
	this.shape_2.setTransform(90.525,17.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBHIAAg3IgBgOQgCgCgDgCQgDgCgFAAQgHABgFADQgFACAAAEIAABBIgbAAIAAiMIADgBIAGAAQASAAAAAQIAAAoQAKgMARAAQANAAAHAGQAHAEADALQABAGAAAOIAAA4g");
	this.shape_3.setTransform(79.325,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBIIAAhnQAAgTAKgLQAKgKASAAQAHAAAIACQAHACAEADQAFADABAFQAAAFgIAJQgIgHgMAAQgPAAAAARIAAAKIAeAAIAAAUIgeAAIAABKg");
	this.shape_4.setTransform(67.15,14.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLAKgGQALgGANAAQAXAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgVAAgNgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAAAgeQAAgcgTAAQgJAAgFAHg");
	this.shape_5.setTransform(56.75,17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBHIAAiKIACAAIAHgBQAOAAADAKQAEgFAHgDQAHgDAIgBQASAAAJANQAKANAAAWQAAAZgKAOQgLANgSAAQgGAAgEgCIgIgDQgEgDgBgCIAAAzgAgNguQgEADAAAEIAAApQACADAFACIAIACQATgBAAgdQAAgcgTAAQgHAAgEADg");
	this.shape_6.setTransform(41.775,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLALgGQAKgGANAAQAXAAAMANQAMANAAAXQAAAPgFAMQgHALgKAGQgKAGgPAAQgWAAgMgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAAAgeQAAgcgTAAQgIAAgGAHg");
	this.shape_7.setTransform(30.4,17.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgOAGgMQAGgLALgGQAKgGANAAQAXAAAMANQAMANAAAXQAAAPgGAMQgGALgKAGQgKAGgPAAQgWAAgMgNgAgOgVQgFAIAAANQAAAOAFAIQAFAIAJAAQATAAABgeQgBgcgTAAQgIAAgGAHg");
	this.shape_8.setTransform(19.25,17.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA6IgdgmQgJgLgBgJIAABCIgbAAIAAiFIAKgBQARAAAAAQIAAAxIADgIIAGgJIAagkQAEgGAFgCQAEgEAGAAQAFAAAEADIAHADIgsA8IAyBCQgIAFgIAAQgNAAgIgLg");
	this.shape_9.setTransform(8.475,15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,117.1,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOBBQgDgDAAgIQAAgFADgFQAEgEAHAAQAGAAAEAEQAEAFAAAFQAAAIgEADQgEAFgGAAQgGAAgFgFgAgLAaQgEgFAAgHQAAgFACgGQADgEAHgGIAHgIIAGgHQADgEgBgGQAAgHgEgEQgGgEgHAAQgMgBgOALIgHgIQgCgDAAgDQABgFAHgFQAHgDAIgDQAHgCAKAAQASABALAIQALAKAAAPQABAGgCAGQgCAGgDAEQgEAFgIAIIgKAIIgEAHIgCAGIABAHIgGABQgHAAgFgDg");
	this.shape.setTransform(98.3,15.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBGQgGgDgEgFIgVgeQgEgEAAgGIAAAwIgbAAIAAiMIADgBIAGAAQASAAAAAQIAABHQABgFADgFIAVgXQAEgFADgCQAEgCAEAAQAJAAAIAHIggAkIAmAyQgIAFgIAAQgIAAgEgCg");
	this.shape_1.setTransform(89.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_2.setTransform(78.225,17.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_3.setTransform(67.925,17.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAvIAAgSIArg3IgrAAIgBgDQAAgSATABIAtAAQAHAAADABQADADAAAFIAAAHIgsA4IAeAAQAKABAEADQAEADAAAJIgBAFg");
	this.shape_4.setTransform(58.475,17.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAxIAAg2QAAgKgBgEQgBgDgEgCQgDgCgFAAQgHAAgFADQgFADAAAFIAABAIgbAAIAAheIACAAIAHgBQAOAAADALQAJgNATAAQANAAAHAFQAIAFACALQABAHAAANIAAA4g");
	this.shape_5.setTransform(44.425,17.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_6.setTransform(33.775,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBBQgGgDAAgGQAAgFAIgKQAEAEAIADQAHAEAJAAQAMgBAHgGQAFgHAAgRIAAgDQgDAEgHADQgGACgHAAQgTAAgJgMQgLgMAAgXQAAgQAFgLQAFgMAJgFQAJgHAMAAQAQAAAGALQAEgJAMAAIAHABIADAAIAABWQAAAcgLAMQgMANgYABQgWgBgLgGgAgPgWQgBARAFAGQAFAHAKAAQAGAAAEgDQAEgCAAgEIAAgrIgGgEQgFgCgDAAQgUAAABAcg");
	this.shape_7.setTransform(22.85,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgJIAAhPIADAAIAGgBQARAAAAAQIAABPQgCACgIAAQgJgBgEgEgAgJguQgFgEAAgGQAAgHAFgEQAEgDAFAAQAHAAADADQAEAEABAHQgBAGgEAEQgDAEgHABQgFgBgEgEg");
	this.shape_8.setTransform(14.8,14.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape_9.setTransform(7.225,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,105.3,29.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgZQAAgPAFgLQAGgLALgFQAKgHAMAAQAUAAALAMQAKALAAAUIAAALIg6AAQABANAGAGQAHAHALAAQAGAAAFgCQAFgCADgCIAGgFIAFAJQACAEAAACQAAAFgFADQgFAEgIACQgIACgJAAQgXAAgNgNgAATgKQAAgVgRAAQgIAAgEAGQgFAGAAAJIAiAAIAAAAg");
	this.shape.setTransform(130.125,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBZQgEgEAAgKIAAgBQALgBAFgEQAFgFAAgMIAAhiIACAAIAGgBQASAAAAAQIAABMIAAALQgBAMgEAIQgFAJgHAEQgHAEgJAAQgHAAgDgEgAAAhEQgEgEAAgGQAAgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgHAAQgGAAgDgFg");
	this.shape_1.setTransform(121.275,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAxIAAg2QAAgKgBgEQgBgDgEgCQgDgCgFAAQgHAAgFADQgFADAAAFIAABAIgbAAIAAheIACAAIAHgBQAOAAADALQAJgNATAAQANAAAHAFQAIAFACALQABAHAAANIAAA4g");
	this.shape_2.setTransform(110.075,17.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_3.setTransform(99.225,17.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAwIghhdQAHgCAIAAQAFAAADABQAEACADAEIAEAMIAOAyIAOgzQADgHACgEQACgEAEgBQADgCAEAAQAIAAAGACIghBdg");
	this.shape_4.setTransform(89.3,17.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAuQgJgEAAgGQAAgDACgEIAEgIQAFAEAHADQAIADAHAAQAOAAAAgKQAAgFgEgDQgDgDgKgCQgQgDgHgGQgHgHAAgMQAAgNALgIQALgIAPAAQAPAAALAEQAIAEABAGQAAAFgGAJQgFgEgIgDQgIgDgGAAQgMAAAAAJQAAAHANADQAMACAHAEQAHAEAEAFQADAGAAAIQAAAPgLAJQgLAJgRAAQgPAAgKgEg");
	this.shape_5.setTransform(76.125,17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_6.setTransform(66.625,17.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAvQgEgDgBgFQgFAFgIADQgGADgKAAQgNAAgJgHQgIgJAAgOQAAgeAwgCIAJAAIAAgEQAAgHgEgEQgEgCgJAAIgMABQgGACgKAGQgDgEgBgDIgCgHQAAgEAGgEQAGgDAIgCQAJgCAJAAQAUAAAKAIQAJAJAAAUIAAAlQAAAPAEAHQgHADgGAAQgHAAgDgDgAAJABQgOABgGAFQgHAEAAAHQAAAHAEADQAEAEAGAAQAGAAAGgEQAGgDAAgEIAAgUIgDAAg");
	this.shape_7.setTransform(56.325,17.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJBFQgHgDgEgFQAAAIgHAAIgRAAIAAiLIADgBIAGAAQASAAAAAPIAAAmQAJgJAOAAQATAAAKANQAKAMAAAWQAAAagKANQgLAOgTAAQgHAAgHgEgAgNgFQgEADAAAEIAAArQADADAEABQAEACAFAAQAIAAAFgIQAFgHAAgQQAAgbgTAAQgHAAgEACg");
	this.shape_8.setTransform(45.875,14.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA8QgKgNAAgXQAAgRAEgKQAFgMAKgGQAIgGANAAQAGAAAFADQAHACAEAFIAAg1IAEgBIAFAAQASAAAAAQIAAB9IgSAAQgDAAgCgCQgCgDAAgDQgEAEgHADQgIADgHAAQgSAAgKgMgAgQAWQAAARAFAHQAFAHAKAAQAGAAAEgCQAEgDAAgEIAAgsIgHgEQgEgCgEAAQgTAAAAAcg");
	this.shape_9.setTransform(34.3,14.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAxIAAg2QAAgKgBgEQgBgDgEgCQgDgCgFAAQgHAAgFADQgFADAAAFIAABAIgbAAIAAheIACAAIAHgBQAOAAADALQAJgNATAAQANAAAHAFQAIAFACALQABAHAAANIAAA4g");
	this.shape_10.setTransform(23.325,17.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgJIAAhPIADAAIAGgBQAQAAABAQIAABPQgCACgIAAQgIgBgFgEgAgKguQgDgEAAgGQAAgHADgEQAEgDAGAAQAGAAAEADQAFAEAAAHQAAAGgFAEQgEAEgGABQgGgBgEgEg");
	this.shape_11.setTransform(15,14.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBDIAAiFIBRAAIABAIQAAAHgDADQgFAEgJgBIgmAAIAAAhIAqAAIAAAVIgqAAIAAAlIAqAAQAHAAAFAEQAFADgBAHIAAADIAAAEg");
	this.shape_12.setTransform(7.75,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,176.1,29.3), null);


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
	this.shape.graphics.f("#009FDF").s().p("AyWByIDfjjMAhOAAAIjfDjg");
	this.shape.setTransform(117.5,11.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh10, new cjs.Rectangle(0,0,235,22.8), null);


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
	this.shape.graphics.f("#009FDF").s().p("AyWByIDfjjMAhOAAAIjfDjg");
	this.shape.setTransform(117.5,11.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh4, new cjs.Rectangle(0,0,235,22.8), null);


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
	this.shape.graphics.f("#77B800").s().p("AzDBYICsivMAjbAAAIisCvg");
	this.shape.setTransform(122,8.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh3, new cjs.Rectangle(0,0,244,17.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("A2QByIDfjjMApCAAAIjfDjg");
	this.shape.setTransform(142.5,11.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh2, new cjs.Rectangle(0,0,285,22.8), null);


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
	this.shape.graphics.f("#F48C00").s().p("AtnBHICLiNIZEAAIiaCNg");
	this.shape.setTransform(87.2,7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sh1, new cjs.Rectangle(0,0,174.4,14.3), null);


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
	this.shape.setTransform(33.0835,19.5431,0.8451,0.8448);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAuQgegJAXgZQAcgdBfgeQgKA1gqAaQgYAQgXAAQgJAAgIgCg");
	this.shape_1.setTransform(35.499,24.2509,0.8451,0.8448);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAhQgkgYAJg2QBbAZATAcQAQAYgjAKQgMAEgLAAQgWAAgTgNg");
	this.shape_2.setTransform(46.5396,24.0406,0.8451,0.8448);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaADQBGgbA3ADQAvACAHASQAIASgrAEIgVABQgvAAhMgTg");
	this.shape_3.setTransform(49.3926,19.1344,0.8451,0.8448);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXgnQAIgaAUALQAVALABAfQAAAkgjAjQgYhDAJgfg");
	this.shape_4.setTransform(41.9379,13.3265,0.8451,0.8448);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLgaQAUgSAUAHQATAIgNAVQgQAYg6AYQACgtAagVg");
	this.shape_5.setTransform(49.658,10.6682,0.8451,0.8448);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACQBMQgPgJgGgJQgGgHgGgVIgZhJQgDgSgNgQIAAgBIAkAAQALACAJgHIABAAIAgBhIAQg1QAEgIACgNQAAgLgHgGIAAgBIAqAAIg2CiQgKgCgIgGgAgsA7QgXgWAAggIAAgEQAAgnAYgXQAYgVAjAAQAMAAAXADIAAAnIgBAAQgOgLgRAAQgOAAgHALQgJAQACASQgBAVAMAUQAKANARgCQAWgBARgOIABAAIgJAkQgZANgaAAIgCAAQgdAAgWgVgAjBA7QgWgWAAggIAAgEQAAgnAZgXQAWgVAkAAQAMAAAXADIAAAnIgBAAQgNgLgRAAQgNAAgKALQgJARACARQAAAVANAUQAKANARgBQAWgCAQgOIABAAIgJAkQgXANgcAAIgBAAQgfAAgWgVg");
	this.shape_6.setTransform(18.3263,7.1078,0.8451,0.8448);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,57,28.3), null);


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

}).prototype = getMCSymbolPrototype(lib.im1_1, new cjs.Rectangle(0,0,242,395), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F48C00").s().p("AqED6QhoAAhJhJQhJhKAAhnQAAhnBJhIQBJhKBoAAIUJAAQBnAABKBKQBJBIAABnQAABnhJBKQhKBJhnAAg");
	this.shape.setTransform(73.0001,20.3999,0.8156,0.816);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBack, new cjs.Rectangle(0,0,146,40.8), null);


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
	this.shape.setTransform(53.4998,53.4998,0.4458,0.4458);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(0,0,107,107), null);


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
	this.shape.setTransform(53.4808,53.4808,0.3639,0.3639);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(-1,-1,109,109), null);


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

}).prototype = getMCSymbolPrototype(lib.b2, new cjs.Rectangle(0,0,801,99), null);


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

}).prototype = getMCSymbolPrototype(lib.b1, new cjs.Rectangle(0,0,728,90), null);


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
	this.t42.setTransform(75.4,42.2,1,1,0,0,0,53.4,17.2);

	this.t41 = new lib.t41();
	this.t41.name = "t41";
	this.t41.setTransform(108.1,18.2,1,1,0,0,0,86.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t41},{t:this.t42}]}).wait(1));

	// txt3
	this.t32 = new lib.t32();
	this.t32.name = "t32";
	this.t32.setTransform(108.5,42.2,1,1,0,0,0,86.5,17.2);

	this.t31 = new lib.t31();
	this.t31.name = "t31";
	this.t31.setTransform(65.8,18.2,1,1,0,0,0,43.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t31},{t:this.t32}]}).wait(1));

	// txt2
	this.t22 = new lib.t22();
	this.t22.name = "t22";
	this.t22.setTransform(108.5,42.2,1,1,0,0,0,86.5,17.2);

	this.t21 = new lib.t21();
	this.t21.name = "t21";
	this.t21.setTransform(65.8,18.2,1,1,0,0,0,43.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t21},{t:this.t22}]}).wait(1));

	// txt1
	this.t12 = new lib.t12();
	this.t12.name = "t12";
	this.t12.setTransform(108.5,42.2,1,1,0,0,0,86.5,17.2);

	this.t11 = new lib.t11();
	this.t11.name = "t11";
	this.t11.setTransform(65.8,18.2,1,1,0,0,0,43.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t11},{t:this.t12}]}).wait(1));

	// tb
	this.tb1 = new lib.tb1();
	this.tb1.name = "tb1";
	this.tb1.setTransform(-54,0);

	this.tb2 = new lib.tb1();
	this.tb2.name = "tb2";
	this.tb2.setTransform(-96,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tb2},{t:this.tb1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-96,0,360.1,62.7), null);


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
	this.ctaText.setTransform(73.1,20.2,1,1,0,0,0,36,10);

	this.timeline.addTween(cjs.Tween.get(this.ctaText).wait(1));

	// ctaBack
	this.ctaBack = new lib.ctaBack();
	this.ctaBack.name = "ctaBack";
	this.ctaBack.setTransform(73,20,1,1,0,0,0,73,20);

	this.timeline.addTween(cjs.Tween.get(this.ctaBack).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,146,40.8), null);


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
	this.instance.setTransform(352,424.95,1,1,0,0,0,3,3);

	this.instance_1 = new lib.whiteCircle();
	this.instance_1.setTransform(352,394.95,1,1,0,0,0,3,3);

	this.instance_2 = new lib.whiteCircle();
	this.instance_2.setTransform(352,365.95,1,1,0,0,0,3,3);

	this.instance_3 = new lib.whiteCircle();
	this.instance_3.setTransform(352,337.95,1,1,0,0,0,3,3);

	this.instance_4 = new lib.whiteCircle();
	this.instance_4.setTransform(322,424.95,1,1,0,0,0,3,3);

	this.instance_5 = new lib.whiteCircle();
	this.instance_5.setTransform(322,394.95,1,1,0,0,0,3,3);

	this.instance_6 = new lib.whiteCircle();
	this.instance_6.setTransform(322,365.95,1,1,0,0,0,3,3);

	this.instance_7 = new lib.whiteCircle();
	this.instance_7.setTransform(322,337.95,1,1,0,0,0,3,3);

	this.instance_8 = new lib.whiteCircle();
	this.instance_8.setTransform(293,424.95,1,1,0,0,0,3,3);

	this.instance_9 = new lib.whiteCircle();
	this.instance_9.setTransform(293,394.95,1,1,0,0,0,3,3);

	this.instance_10 = new lib.whiteCircle();
	this.instance_10.setTransform(293,365.95,1,1,0,0,0,3,3);

	this.instance_11 = new lib.whiteCircle();
	this.instance_11.setTransform(293,337.95,1,1,0,0,0,3,3);

	this.instance_12 = new lib.whiteCircle();
	this.instance_12.setTransform(264,424.95,1,1,0,0,0,3,3);

	this.instance_13 = new lib.whiteCircle();
	this.instance_13.setTransform(264,394.95,1,1,0,0,0,3,3);

	this.instance_14 = new lib.whiteCircle();
	this.instance_14.setTransform(264,365.95,1,1,0,0,0,3,3);

	this.instance_15 = new lib.whiteCircle();
	this.instance_15.setTransform(264,337.95,1,1,0,0,0,3,3);

	this.instance_16 = new lib.whiteCircle();
	this.instance_16.setTransform(235,424.95,1,1,0,0,0,3,3);

	this.instance_17 = new lib.whiteCircle();
	this.instance_17.setTransform(235,394.95,1,1,0,0,0,3,3);

	this.instance_18 = new lib.whiteCircle();
	this.instance_18.setTransform(235,365.95,1,1,0,0,0,3,3);

	this.instance_19 = new lib.whiteCircle();
	this.instance_19.setTransform(235,337.95,1,1,0,0,0,3,3);

	this.instance_20 = new lib.whiteCircle();
	this.instance_20.setTransform(206,424.95,1,1,0,0,0,3,3);

	this.instance_21 = new lib.whiteCircle();
	this.instance_21.setTransform(206,394.95,1,1,0,0,0,3,3);

	this.instance_22 = new lib.whiteCircle();
	this.instance_22.setTransform(206,365.95,1,1,0,0,0,3,3);

	this.instance_23 = new lib.whiteCircle();
	this.instance_23.setTransform(206,337.95,1,1,0,0,0,3,3);

	this.instance_24 = new lib.whiteCircle();
	this.instance_24.setTransform(177,424.95,1,1,0,0,0,3,3);

	this.instance_25 = new lib.whiteCircle();
	this.instance_25.setTransform(177,394.95,1,1,0,0,0,3,3);

	this.instance_26 = new lib.whiteCircle();
	this.instance_26.setTransform(177,365.95,1,1,0,0,0,3,3);

	this.instance_27 = new lib.whiteCircle();
	this.instance_27.setTransform(177,337.95,1,1,0,0,0,3,3);

	this.instance_28 = new lib.whiteCircle();
	this.instance_28.setTransform(148,424.95,1,1,0,0,0,3,3);

	this.instance_29 = new lib.whiteCircle();
	this.instance_29.setTransform(148,394.95,1,1,0,0,0,3,3);

	this.instance_30 = new lib.whiteCircle();
	this.instance_30.setTransform(148,365.95,1,1,0,0,0,3,3);

	this.instance_31 = new lib.whiteCircle();
	this.instance_31.setTransform(148,337.95,1,1,0,0,0,3,3);

	this.instance_32 = new lib.whiteCircle();
	this.instance_32.setTransform(119,424.95,1,1,0,0,0,3,3);

	this.instance_33 = new lib.whiteCircle();
	this.instance_33.setTransform(119,394.95,1,1,0,0,0,3,3);

	this.instance_34 = new lib.whiteCircle();
	this.instance_34.setTransform(119,365.95,1,1,0,0,0,3,3);

	this.instance_35 = new lib.whiteCircle();
	this.instance_35.setTransform(119,337.95,1,1,0,0,0,3,3);

	this.instance_36 = new lib.whiteCircle();
	this.instance_36.setTransform(91,424.95,1,1,0,0,0,3,3);

	this.instance_37 = new lib.whiteCircle();
	this.instance_37.setTransform(91,394.95,1,1,0,0,0,3,3);

	this.instance_38 = new lib.whiteCircle();
	this.instance_38.setTransform(91,365.95,1,1,0,0,0,3,3);

	this.instance_39 = new lib.whiteCircle();
	this.instance_39.setTransform(91,337.95,1,1,0,0,0,3,3);

	this.instance_40 = new lib.whiteCircle();
	this.instance_40.setTransform(61,424.95,1,1,0,0,0,3,3);

	this.instance_41 = new lib.whiteCircle();
	this.instance_41.setTransform(61,394.95,1,1,0,0,0,3,3);

	this.instance_42 = new lib.whiteCircle();
	this.instance_42.setTransform(61,365.95,1,1,0,0,0,3,3);

	this.instance_43 = new lib.whiteCircle();
	this.instance_43.setTransform(61,337.95,1,1,0,0,0,3,3);

	this.instance_44 = new lib.whiteCircle();
	this.instance_44.setTransform(32,424.95,1,1,0,0,0,3,3);

	this.instance_45 = new lib.whiteCircle();
	this.instance_45.setTransform(32,394.95,1,1,0,0,0,3,3);

	this.instance_46 = new lib.whiteCircle();
	this.instance_46.setTransform(32,365.95,1,1,0,0,0,3,3);

	this.instance_47 = new lib.whiteCircle();
	this.instance_47.setTransform(32,337.95,1,1,0,0,0,3,3);

	this.instance_48 = new lib.whiteCircle();
	this.instance_48.setTransform(3,424.95,1,1,0,0,0,3,3);

	this.instance_49 = new lib.whiteCircle();
	this.instance_49.setTransform(3,394.95,1,1,0,0,0,3,3);

	this.instance_50 = new lib.whiteCircle();
	this.instance_50.setTransform(3,365.95,1,1,0,0,0,3,3);

	this.instance_51 = new lib.whiteCircle();
	this.instance_51.setTransform(3,337.95,1,1,0,0,0,3,3);

	this.instance_52 = new lib.whiteCircle();
	this.instance_52.setTransform(352,313.3,1,1,0,0,0,3,3);

	this.instance_53 = new lib.whiteCircle();
	this.instance_53.setTransform(352,283.3,1,1,0,0,0,3,3);

	this.instance_54 = new lib.whiteCircle();
	this.instance_54.setTransform(352,254.3,1,1,0,0,0,3,3);

	this.instance_55 = new lib.whiteCircle();
	this.instance_55.setTransform(352,226.3,1,1,0,0,0,3,3);

	this.instance_56 = new lib.whiteCircle();
	this.instance_56.setTransform(322,313.3,1,1,0,0,0,3,3);

	this.instance_57 = new lib.whiteCircle();
	this.instance_57.setTransform(322,283.3,1,1,0,0,0,3,3);

	this.instance_58 = new lib.whiteCircle();
	this.instance_58.setTransform(322,254.3,1,1,0,0,0,3,3);

	this.instance_59 = new lib.whiteCircle();
	this.instance_59.setTransform(322,226.3,1,1,0,0,0,3,3);

	this.instance_60 = new lib.whiteCircle();
	this.instance_60.setTransform(293,313.3,1,1,0,0,0,3,3);

	this.instance_61 = new lib.whiteCircle();
	this.instance_61.setTransform(293,283.3,1,1,0,0,0,3,3);

	this.instance_62 = new lib.whiteCircle();
	this.instance_62.setTransform(293,254.3,1,1,0,0,0,3,3);

	this.instance_63 = new lib.whiteCircle();
	this.instance_63.setTransform(293,226.3,1,1,0,0,0,3,3);

	this.instance_64 = new lib.whiteCircle();
	this.instance_64.setTransform(264,313.3,1,1,0,0,0,3,3);

	this.instance_65 = new lib.whiteCircle();
	this.instance_65.setTransform(264,283.3,1,1,0,0,0,3,3);

	this.instance_66 = new lib.whiteCircle();
	this.instance_66.setTransform(264,254.3,1,1,0,0,0,3,3);

	this.instance_67 = new lib.whiteCircle();
	this.instance_67.setTransform(264,226.3,1,1,0,0,0,3,3);

	this.instance_68 = new lib.whiteCircle();
	this.instance_68.setTransform(235,313.3,1,1,0,0,0,3,3);

	this.instance_69 = new lib.whiteCircle();
	this.instance_69.setTransform(235,283.3,1,1,0,0,0,3,3);

	this.instance_70 = new lib.whiteCircle();
	this.instance_70.setTransform(235,254.3,1,1,0,0,0,3,3);

	this.instance_71 = new lib.whiteCircle();
	this.instance_71.setTransform(235,226.3,1,1,0,0,0,3,3);

	this.instance_72 = new lib.whiteCircle();
	this.instance_72.setTransform(206,313.3,1,1,0,0,0,3,3);

	this.instance_73 = new lib.whiteCircle();
	this.instance_73.setTransform(206,283.3,1,1,0,0,0,3,3);

	this.instance_74 = new lib.whiteCircle();
	this.instance_74.setTransform(206,254.3,1,1,0,0,0,3,3);

	this.instance_75 = new lib.whiteCircle();
	this.instance_75.setTransform(206,226.3,1,1,0,0,0,3,3);

	this.instance_76 = new lib.whiteCircle();
	this.instance_76.setTransform(177,313.3,1,1,0,0,0,3,3);

	this.instance_77 = new lib.whiteCircle();
	this.instance_77.setTransform(177,283.3,1,1,0,0,0,3,3);

	this.instance_78 = new lib.whiteCircle();
	this.instance_78.setTransform(177,254.3,1,1,0,0,0,3,3);

	this.instance_79 = new lib.whiteCircle();
	this.instance_79.setTransform(177,226.3,1,1,0,0,0,3,3);

	this.instance_80 = new lib.whiteCircle();
	this.instance_80.setTransform(148,313.3,1,1,0,0,0,3,3);

	this.instance_81 = new lib.whiteCircle();
	this.instance_81.setTransform(148,283.3,1,1,0,0,0,3,3);

	this.instance_82 = new lib.whiteCircle();
	this.instance_82.setTransform(148,254.3,1,1,0,0,0,3,3);

	this.instance_83 = new lib.whiteCircle();
	this.instance_83.setTransform(148,226.3,1,1,0,0,0,3,3);

	this.instance_84 = new lib.whiteCircle();
	this.instance_84.setTransform(119,313.3,1,1,0,0,0,3,3);

	this.instance_85 = new lib.whiteCircle();
	this.instance_85.setTransform(119,283.3,1,1,0,0,0,3,3);

	this.instance_86 = new lib.whiteCircle();
	this.instance_86.setTransform(119,254.3,1,1,0,0,0,3,3);

	this.instance_87 = new lib.whiteCircle();
	this.instance_87.setTransform(119,226.3,1,1,0,0,0,3,3);

	this.instance_88 = new lib.whiteCircle();
	this.instance_88.setTransform(91,313.3,1,1,0,0,0,3,3);

	this.instance_89 = new lib.whiteCircle();
	this.instance_89.setTransform(91,283.3,1,1,0,0,0,3,3);

	this.instance_90 = new lib.whiteCircle();
	this.instance_90.setTransform(91,254.3,1,1,0,0,0,3,3);

	this.instance_91 = new lib.whiteCircle();
	this.instance_91.setTransform(91,226.3,1,1,0,0,0,3,3);

	this.instance_92 = new lib.whiteCircle();
	this.instance_92.setTransform(61,313.3,1,1,0,0,0,3,3);

	this.instance_93 = new lib.whiteCircle();
	this.instance_93.setTransform(61,283.3,1,1,0,0,0,3,3);

	this.instance_94 = new lib.whiteCircle();
	this.instance_94.setTransform(61,254.3,1,1,0,0,0,3,3);

	this.instance_95 = new lib.whiteCircle();
	this.instance_95.setTransform(61,226.3,1,1,0,0,0,3,3);

	this.instance_96 = new lib.whiteCircle();
	this.instance_96.setTransform(32,313.3,1,1,0,0,0,3,3);

	this.instance_97 = new lib.whiteCircle();
	this.instance_97.setTransform(32,283.3,1,1,0,0,0,3,3);

	this.instance_98 = new lib.whiteCircle();
	this.instance_98.setTransform(32,254.3,1,1,0,0,0,3,3);

	this.instance_99 = new lib.whiteCircle();
	this.instance_99.setTransform(32,226.3,1,1,0,0,0,3,3);

	this.instance_100 = new lib.whiteCircle();
	this.instance_100.setTransform(3,313.3,1,1,0,0,0,3,3);

	this.instance_101 = new lib.whiteCircle();
	this.instance_101.setTransform(3,283.3,1,1,0,0,0,3,3);

	this.instance_102 = new lib.whiteCircle();
	this.instance_102.setTransform(3,254.3,1,1,0,0,0,3,3);

	this.instance_103 = new lib.whiteCircle();
	this.instance_103.setTransform(3,226.3,1,1,0,0,0,3,3);

	this.instance_104 = new lib.whiteCircle();
	this.instance_104.setTransform(352,201.65,1,1,0,0,0,3,3);

	this.instance_105 = new lib.whiteCircle();
	this.instance_105.setTransform(352,171.65,1,1,0,0,0,3,3);

	this.instance_106 = new lib.whiteCircle();
	this.instance_106.setTransform(352,142.65,1,1,0,0,0,3,3);

	this.instance_107 = new lib.whiteCircle();
	this.instance_107.setTransform(352,114.65,1,1,0,0,0,3,3);

	this.instance_108 = new lib.whiteCircle();
	this.instance_108.setTransform(322,201.65,1,1,0,0,0,3,3);

	this.instance_109 = new lib.whiteCircle();
	this.instance_109.setTransform(322,171.65,1,1,0,0,0,3,3);

	this.instance_110 = new lib.whiteCircle();
	this.instance_110.setTransform(322,142.65,1,1,0,0,0,3,3);

	this.instance_111 = new lib.whiteCircle();
	this.instance_111.setTransform(322,114.65,1,1,0,0,0,3,3);

	this.instance_112 = new lib.whiteCircle();
	this.instance_112.setTransform(293,201.65,1,1,0,0,0,3,3);

	this.instance_113 = new lib.whiteCircle();
	this.instance_113.setTransform(293,171.65,1,1,0,0,0,3,3);

	this.instance_114 = new lib.whiteCircle();
	this.instance_114.setTransform(293,142.65,1,1,0,0,0,3,3);

	this.instance_115 = new lib.whiteCircle();
	this.instance_115.setTransform(293,114.65,1,1,0,0,0,3,3);

	this.instance_116 = new lib.whiteCircle();
	this.instance_116.setTransform(264,201.65,1,1,0,0,0,3,3);

	this.instance_117 = new lib.whiteCircle();
	this.instance_117.setTransform(264,171.65,1,1,0,0,0,3,3);

	this.instance_118 = new lib.whiteCircle();
	this.instance_118.setTransform(264,142.65,1,1,0,0,0,3,3);

	this.instance_119 = new lib.whiteCircle();
	this.instance_119.setTransform(264,114.65,1,1,0,0,0,3,3);

	this.instance_120 = new lib.whiteCircle();
	this.instance_120.setTransform(235,201.65,1,1,0,0,0,3,3);

	this.instance_121 = new lib.whiteCircle();
	this.instance_121.setTransform(235,171.65,1,1,0,0,0,3,3);

	this.instance_122 = new lib.whiteCircle();
	this.instance_122.setTransform(235,142.65,1,1,0,0,0,3,3);

	this.instance_123 = new lib.whiteCircle();
	this.instance_123.setTransform(235,114.65,1,1,0,0,0,3,3);

	this.instance_124 = new lib.whiteCircle();
	this.instance_124.setTransform(206,201.65,1,1,0,0,0,3,3);

	this.instance_125 = new lib.whiteCircle();
	this.instance_125.setTransform(206,171.65,1,1,0,0,0,3,3);

	this.instance_126 = new lib.whiteCircle();
	this.instance_126.setTransform(206,142.65,1,1,0,0,0,3,3);

	this.instance_127 = new lib.whiteCircle();
	this.instance_127.setTransform(206,114.65,1,1,0,0,0,3,3);

	this.instance_128 = new lib.whiteCircle();
	this.instance_128.setTransform(177,201.65,1,1,0,0,0,3,3);

	this.instance_129 = new lib.whiteCircle();
	this.instance_129.setTransform(177,171.65,1,1,0,0,0,3,3);

	this.instance_130 = new lib.whiteCircle();
	this.instance_130.setTransform(177,142.65,1,1,0,0,0,3,3);

	this.instance_131 = new lib.whiteCircle();
	this.instance_131.setTransform(177,114.65,1,1,0,0,0,3,3);

	this.instance_132 = new lib.whiteCircle();
	this.instance_132.setTransform(148,201.65,1,1,0,0,0,3,3);

	this.instance_133 = new lib.whiteCircle();
	this.instance_133.setTransform(148,171.65,1,1,0,0,0,3,3);

	this.instance_134 = new lib.whiteCircle();
	this.instance_134.setTransform(148,142.65,1,1,0,0,0,3,3);

	this.instance_135 = new lib.whiteCircle();
	this.instance_135.setTransform(148,114.65,1,1,0,0,0,3,3);

	this.instance_136 = new lib.whiteCircle();
	this.instance_136.setTransform(119,201.65,1,1,0,0,0,3,3);

	this.instance_137 = new lib.whiteCircle();
	this.instance_137.setTransform(119,171.65,1,1,0,0,0,3,3);

	this.instance_138 = new lib.whiteCircle();
	this.instance_138.setTransform(119,142.65,1,1,0,0,0,3,3);

	this.instance_139 = new lib.whiteCircle();
	this.instance_139.setTransform(119,114.65,1,1,0,0,0,3,3);

	this.instance_140 = new lib.whiteCircle();
	this.instance_140.setTransform(91,201.65,1,1,0,0,0,3,3);

	this.instance_141 = new lib.whiteCircle();
	this.instance_141.setTransform(91,171.65,1,1,0,0,0,3,3);

	this.instance_142 = new lib.whiteCircle();
	this.instance_142.setTransform(91,142.65,1,1,0,0,0,3,3);

	this.instance_143 = new lib.whiteCircle();
	this.instance_143.setTransform(91,114.65,1,1,0,0,0,3,3);

	this.instance_144 = new lib.whiteCircle();
	this.instance_144.setTransform(61,201.65,1,1,0,0,0,3,3);

	this.instance_145 = new lib.whiteCircle();
	this.instance_145.setTransform(61,171.65,1,1,0,0,0,3,3);

	this.instance_146 = new lib.whiteCircle();
	this.instance_146.setTransform(61,142.65,1,1,0,0,0,3,3);

	this.instance_147 = new lib.whiteCircle();
	this.instance_147.setTransform(61,114.65,1,1,0,0,0,3,3);

	this.instance_148 = new lib.whiteCircle();
	this.instance_148.setTransform(32,201.65,1,1,0,0,0,3,3);

	this.instance_149 = new lib.whiteCircle();
	this.instance_149.setTransform(32,171.65,1,1,0,0,0,3,3);

	this.instance_150 = new lib.whiteCircle();
	this.instance_150.setTransform(32,142.65,1,1,0,0,0,3,3);

	this.instance_151 = new lib.whiteCircle();
	this.instance_151.setTransform(32,114.65,1,1,0,0,0,3,3);

	this.instance_152 = new lib.whiteCircle();
	this.instance_152.setTransform(3,201.65,1,1,0,0,0,3,3);

	this.instance_153 = new lib.whiteCircle();
	this.instance_153.setTransform(3,171.65,1,1,0,0,0,3,3);

	this.instance_154 = new lib.whiteCircle();
	this.instance_154.setTransform(3,142.65,1,1,0,0,0,3,3);

	this.instance_155 = new lib.whiteCircle();
	this.instance_155.setTransform(3,114.65,1,1,0,0,0,3,3);

	this.instance_156 = new lib.whiteCircle();
	this.instance_156.setTransform(352,90,1,1,0,0,0,3,3);

	this.instance_157 = new lib.whiteCircle();
	this.instance_157.setTransform(352,60,1,1,0,0,0,3,3);

	this.instance_158 = new lib.whiteCircle();
	this.instance_158.setTransform(352,31,1,1,0,0,0,3,3);

	this.instance_159 = new lib.whiteCircle();
	this.instance_159.setTransform(352,3,1,1,0,0,0,3,3);

	this.instance_160 = new lib.whiteCircle();
	this.instance_160.setTransform(322,90,1,1,0,0,0,3,3);

	this.instance_161 = new lib.whiteCircle();
	this.instance_161.setTransform(322,60,1,1,0,0,0,3,3);

	this.instance_162 = new lib.whiteCircle();
	this.instance_162.setTransform(322,31,1,1,0,0,0,3,3);

	this.instance_163 = new lib.whiteCircle();
	this.instance_163.setTransform(322,3,1,1,0,0,0,3,3);

	this.instance_164 = new lib.whiteCircle();
	this.instance_164.setTransform(293,90,1,1,0,0,0,3,3);

	this.instance_165 = new lib.whiteCircle();
	this.instance_165.setTransform(293,60,1,1,0,0,0,3,3);

	this.instance_166 = new lib.whiteCircle();
	this.instance_166.setTransform(293,31,1,1,0,0,0,3,3);

	this.instance_167 = new lib.whiteCircle();
	this.instance_167.setTransform(293,3,1,1,0,0,0,3,3);

	this.instance_168 = new lib.whiteCircle();
	this.instance_168.setTransform(264,90,1,1,0,0,0,3,3);

	this.instance_169 = new lib.whiteCircle();
	this.instance_169.setTransform(264,60,1,1,0,0,0,3,3);

	this.instance_170 = new lib.whiteCircle();
	this.instance_170.setTransform(264,31,1,1,0,0,0,3,3);

	this.instance_171 = new lib.whiteCircle();
	this.instance_171.setTransform(264,3,1,1,0,0,0,3,3);

	this.instance_172 = new lib.whiteCircle();
	this.instance_172.setTransform(235,90,1,1,0,0,0,3,3);

	this.instance_173 = new lib.whiteCircle();
	this.instance_173.setTransform(235,60,1,1,0,0,0,3,3);

	this.instance_174 = new lib.whiteCircle();
	this.instance_174.setTransform(235,31,1,1,0,0,0,3,3);

	this.instance_175 = new lib.whiteCircle();
	this.instance_175.setTransform(235,3,1,1,0,0,0,3,3);

	this.instance_176 = new lib.whiteCircle();
	this.instance_176.setTransform(206,90,1,1,0,0,0,3,3);

	this.instance_177 = new lib.whiteCircle();
	this.instance_177.setTransform(206,60,1,1,0,0,0,3,3);

	this.instance_178 = new lib.whiteCircle();
	this.instance_178.setTransform(206,31,1,1,0,0,0,3,3);

	this.instance_179 = new lib.whiteCircle();
	this.instance_179.setTransform(206,3,1,1,0,0,0,3,3);

	this.instance_180 = new lib.whiteCircle();
	this.instance_180.setTransform(177,90,1,1,0,0,0,3,3);

	this.instance_181 = new lib.whiteCircle();
	this.instance_181.setTransform(177,60,1,1,0,0,0,3,3);

	this.instance_182 = new lib.whiteCircle();
	this.instance_182.setTransform(177,31,1,1,0,0,0,3,3);

	this.instance_183 = new lib.whiteCircle();
	this.instance_183.setTransform(177,3,1,1,0,0,0,3,3);

	this.instance_184 = new lib.whiteCircle();
	this.instance_184.setTransform(148,90,1,1,0,0,0,3,3);

	this.instance_185 = new lib.whiteCircle();
	this.instance_185.setTransform(148,60,1,1,0,0,0,3,3);

	this.instance_186 = new lib.whiteCircle();
	this.instance_186.setTransform(148,31,1,1,0,0,0,3,3);

	this.instance_187 = new lib.whiteCircle();
	this.instance_187.setTransform(148,3,1,1,0,0,0,3,3);

	this.instance_188 = new lib.whiteCircle();
	this.instance_188.setTransform(119,90,1,1,0,0,0,3,3);

	this.instance_189 = new lib.whiteCircle();
	this.instance_189.setTransform(119,60,1,1,0,0,0,3,3);

	this.instance_190 = new lib.whiteCircle();
	this.instance_190.setTransform(119,31,1,1,0,0,0,3,3);

	this.instance_191 = new lib.whiteCircle();
	this.instance_191.setTransform(119,3,1,1,0,0,0,3,3);

	this.instance_192 = new lib.whiteCircle();
	this.instance_192.setTransform(91,90,1,1,0,0,0,3,3);

	this.instance_193 = new lib.whiteCircle();
	this.instance_193.setTransform(91,60,1,1,0,0,0,3,3);

	this.instance_194 = new lib.whiteCircle();
	this.instance_194.setTransform(91,31,1,1,0,0,0,3,3);

	this.instance_195 = new lib.whiteCircle();
	this.instance_195.setTransform(91,3,1,1,0,0,0,3,3);

	this.instance_196 = new lib.whiteCircle();
	this.instance_196.setTransform(61,90,1,1,0,0,0,3,3);

	this.instance_197 = new lib.whiteCircle();
	this.instance_197.setTransform(61,60,1,1,0,0,0,3,3);

	this.instance_198 = new lib.whiteCircle();
	this.instance_198.setTransform(61,31,1,1,0,0,0,3,3);

	this.instance_199 = new lib.whiteCircle();
	this.instance_199.setTransform(61,3,1,1,0,0,0,3,3);

	this.instance_200 = new lib.whiteCircle();
	this.instance_200.setTransform(32,90,1,1,0,0,0,3,3);

	this.instance_201 = new lib.whiteCircle();
	this.instance_201.setTransform(32,60,1,1,0,0,0,3,3);

	this.instance_202 = new lib.whiteCircle();
	this.instance_202.setTransform(32,31,1,1,0,0,0,3,3);

	this.instance_203 = new lib.whiteCircle();
	this.instance_203.setTransform(32,3,1,1,0,0,0,3,3);

	this.instance_204 = new lib.whiteCircle();
	this.instance_204.setTransform(3,90,1,1,0,0,0,3,3);

	this.instance_205 = new lib.whiteCircle();
	this.instance_205.setTransform(3,60,1,1,0,0,0,3,3);

	this.instance_206 = new lib.whiteCircle();
	this.instance_206.setTransform(3,31,1,1,0,0,0,3,3);

	this.instance_207 = new lib.whiteCircle();
	this.instance_207.setTransform(3,3,1,1,0,0,0,3,3);

	this.instance_208 = new lib.whiteCircle();
	this.instance_208.setTransform(352,425,1,1,0,0,0,3,3);

	this.instance_209 = new lib.whiteCircle();
	this.instance_209.setTransform(352,395,1,1,0,0,0,3,3);

	this.instance_210 = new lib.whiteCircle();
	this.instance_210.setTransform(352,366,1,1,0,0,0,3,3);

	this.instance_211 = new lib.whiteCircle();
	this.instance_211.setTransform(352,338,1,1,0,0,0,3,3);

	this.instance_212 = new lib.whiteCircle();
	this.instance_212.setTransform(322,425,1,1,0,0,0,3,3);

	this.instance_213 = new lib.whiteCircle();
	this.instance_213.setTransform(322,395,1,1,0,0,0,3,3);

	this.instance_214 = new lib.whiteCircle();
	this.instance_214.setTransform(322,366,1,1,0,0,0,3,3);

	this.instance_215 = new lib.whiteCircle();
	this.instance_215.setTransform(322,338,1,1,0,0,0,3,3);

	this.instance_216 = new lib.whiteCircle();
	this.instance_216.setTransform(293,425,1,1,0,0,0,3,3);

	this.instance_217 = new lib.whiteCircle();
	this.instance_217.setTransform(293,395,1,1,0,0,0,3,3);

	this.instance_218 = new lib.whiteCircle();
	this.instance_218.setTransform(293,366,1,1,0,0,0,3,3);

	this.instance_219 = new lib.whiteCircle();
	this.instance_219.setTransform(293,338,1,1,0,0,0,3,3);

	this.instance_220 = new lib.whiteCircle();
	this.instance_220.setTransform(264,425,1,1,0,0,0,3,3);

	this.instance_221 = new lib.whiteCircle();
	this.instance_221.setTransform(264,395,1,1,0,0,0,3,3);

	this.instance_222 = new lib.whiteCircle();
	this.instance_222.setTransform(264,366,1,1,0,0,0,3,3);

	this.instance_223 = new lib.whiteCircle();
	this.instance_223.setTransform(264,338,1,1,0,0,0,3,3);

	this.instance_224 = new lib.whiteCircle();
	this.instance_224.setTransform(235,425,1,1,0,0,0,3,3);

	this.instance_225 = new lib.whiteCircle();
	this.instance_225.setTransform(235,395,1,1,0,0,0,3,3);

	this.instance_226 = new lib.whiteCircle();
	this.instance_226.setTransform(235,366,1,1,0,0,0,3,3);

	this.instance_227 = new lib.whiteCircle();
	this.instance_227.setTransform(235,338,1,1,0,0,0,3,3);

	this.instance_228 = new lib.whiteCircle();
	this.instance_228.setTransform(206,425,1,1,0,0,0,3,3);

	this.instance_229 = new lib.whiteCircle();
	this.instance_229.setTransform(206,395,1,1,0,0,0,3,3);

	this.instance_230 = new lib.whiteCircle();
	this.instance_230.setTransform(206,366,1,1,0,0,0,3,3);

	this.instance_231 = new lib.whiteCircle();
	this.instance_231.setTransform(206,338,1,1,0,0,0,3,3);

	this.instance_232 = new lib.whiteCircle();
	this.instance_232.setTransform(177,425,1,1,0,0,0,3,3);

	this.instance_233 = new lib.whiteCircle();
	this.instance_233.setTransform(177,395,1,1,0,0,0,3,3);

	this.instance_234 = new lib.whiteCircle();
	this.instance_234.setTransform(177,366,1,1,0,0,0,3,3);

	this.instance_235 = new lib.whiteCircle();
	this.instance_235.setTransform(177,338,1,1,0,0,0,3,3);

	this.instance_236 = new lib.whiteCircle();
	this.instance_236.setTransform(148,425,1,1,0,0,0,3,3);

	this.instance_237 = new lib.whiteCircle();
	this.instance_237.setTransform(148,395,1,1,0,0,0,3,3);

	this.instance_238 = new lib.whiteCircle();
	this.instance_238.setTransform(148,366,1,1,0,0,0,3,3);

	this.instance_239 = new lib.whiteCircle();
	this.instance_239.setTransform(148,338,1,1,0,0,0,3,3);

	this.instance_240 = new lib.whiteCircle();
	this.instance_240.setTransform(119,425,1,1,0,0,0,3,3);

	this.instance_241 = new lib.whiteCircle();
	this.instance_241.setTransform(119,395,1,1,0,0,0,3,3);

	this.instance_242 = new lib.whiteCircle();
	this.instance_242.setTransform(119,366,1,1,0,0,0,3,3);

	this.instance_243 = new lib.whiteCircle();
	this.instance_243.setTransform(119,338,1,1,0,0,0,3,3);

	this.instance_244 = new lib.whiteCircle();
	this.instance_244.setTransform(91,425,1,1,0,0,0,3,3);

	this.instance_245 = new lib.whiteCircle();
	this.instance_245.setTransform(91,395,1,1,0,0,0,3,3);

	this.instance_246 = new lib.whiteCircle();
	this.instance_246.setTransform(91,366,1,1,0,0,0,3,3);

	this.instance_247 = new lib.whiteCircle();
	this.instance_247.setTransform(91,338,1,1,0,0,0,3,3);

	this.instance_248 = new lib.whiteCircle();
	this.instance_248.setTransform(61,425,1,1,0,0,0,3,3);

	this.instance_249 = new lib.whiteCircle();
	this.instance_249.setTransform(61,395,1,1,0,0,0,3,3);

	this.instance_250 = new lib.whiteCircle();
	this.instance_250.setTransform(61,366,1,1,0,0,0,3,3);

	this.instance_251 = new lib.whiteCircle();
	this.instance_251.setTransform(61,338,1,1,0,0,0,3,3);

	this.instance_252 = new lib.whiteCircle();
	this.instance_252.setTransform(32,425,1,1,0,0,0,3,3);

	this.instance_253 = new lib.whiteCircle();
	this.instance_253.setTransform(32,395,1,1,0,0,0,3,3);

	this.instance_254 = new lib.whiteCircle();
	this.instance_254.setTransform(32,366,1,1,0,0,0,3,3);

	this.instance_255 = new lib.whiteCircle();
	this.instance_255.setTransform(32,338,1,1,0,0,0,3,3);

	this.instance_256 = new lib.whiteCircle();
	this.instance_256.setTransform(3,425,1,1,0,0,0,3,3);

	this.instance_257 = new lib.whiteCircle();
	this.instance_257.setTransform(3,395,1,1,0,0,0,3,3);

	this.instance_258 = new lib.whiteCircle();
	this.instance_258.setTransform(3,366,1,1,0,0,0,3,3);

	this.instance_259 = new lib.whiteCircle();
	this.instance_259.setTransform(3,338,1,1,0,0,0,3,3);

	this.instance_260 = new lib.whiteCircle();
	this.instance_260.setTransform(352,311,1,1,0,0,0,3,3);

	this.instance_261 = new lib.whiteCircle();
	this.instance_261.setTransform(352,281,1,1,0,0,0,3,3);

	this.instance_262 = new lib.whiteCircle();
	this.instance_262.setTransform(352,252,1,1,0,0,0,3,3);

	this.instance_263 = new lib.whiteCircle();
	this.instance_263.setTransform(352,224,1,1,0,0,0,3,3);

	this.instance_264 = new lib.whiteCircle();
	this.instance_264.setTransform(322,311,1,1,0,0,0,3,3);

	this.instance_265 = new lib.whiteCircle();
	this.instance_265.setTransform(322,281,1,1,0,0,0,3,3);

	this.instance_266 = new lib.whiteCircle();
	this.instance_266.setTransform(322,252,1,1,0,0,0,3,3);

	this.instance_267 = new lib.whiteCircle();
	this.instance_267.setTransform(322,224,1,1,0,0,0,3,3);

	this.instance_268 = new lib.whiteCircle();
	this.instance_268.setTransform(293,311,1,1,0,0,0,3,3);

	this.instance_269 = new lib.whiteCircle();
	this.instance_269.setTransform(293,281,1,1,0,0,0,3,3);

	this.instance_270 = new lib.whiteCircle();
	this.instance_270.setTransform(293,252,1,1,0,0,0,3,3);

	this.instance_271 = new lib.whiteCircle();
	this.instance_271.setTransform(293,224,1,1,0,0,0,3,3);

	this.instance_272 = new lib.whiteCircle();
	this.instance_272.setTransform(264,311,1,1,0,0,0,3,3);

	this.instance_273 = new lib.whiteCircle();
	this.instance_273.setTransform(264,281,1,1,0,0,0,3,3);

	this.instance_274 = new lib.whiteCircle();
	this.instance_274.setTransform(264,252,1,1,0,0,0,3,3);

	this.instance_275 = new lib.whiteCircle();
	this.instance_275.setTransform(264,224,1,1,0,0,0,3,3);

	this.instance_276 = new lib.whiteCircle();
	this.instance_276.setTransform(235,311,1,1,0,0,0,3,3);

	this.instance_277 = new lib.whiteCircle();
	this.instance_277.setTransform(235,281,1,1,0,0,0,3,3);

	this.instance_278 = new lib.whiteCircle();
	this.instance_278.setTransform(235,252,1,1,0,0,0,3,3);

	this.instance_279 = new lib.whiteCircle();
	this.instance_279.setTransform(235,224,1,1,0,0,0,3,3);

	this.instance_280 = new lib.whiteCircle();
	this.instance_280.setTransform(206,311,1,1,0,0,0,3,3);

	this.instance_281 = new lib.whiteCircle();
	this.instance_281.setTransform(206,281,1,1,0,0,0,3,3);

	this.instance_282 = new lib.whiteCircle();
	this.instance_282.setTransform(206,252,1,1,0,0,0,3,3);

	this.instance_283 = new lib.whiteCircle();
	this.instance_283.setTransform(206,224,1,1,0,0,0,3,3);

	this.instance_284 = new lib.whiteCircle();
	this.instance_284.setTransform(177,311,1,1,0,0,0,3,3);

	this.instance_285 = new lib.whiteCircle();
	this.instance_285.setTransform(177,281,1,1,0,0,0,3,3);

	this.instance_286 = new lib.whiteCircle();
	this.instance_286.setTransform(177,252,1,1,0,0,0,3,3);

	this.instance_287 = new lib.whiteCircle();
	this.instance_287.setTransform(177,224,1,1,0,0,0,3,3);

	this.instance_288 = new lib.whiteCircle();
	this.instance_288.setTransform(148,311,1,1,0,0,0,3,3);

	this.instance_289 = new lib.whiteCircle();
	this.instance_289.setTransform(148,281,1,1,0,0,0,3,3);

	this.instance_290 = new lib.whiteCircle();
	this.instance_290.setTransform(148,252,1,1,0,0,0,3,3);

	this.instance_291 = new lib.whiteCircle();
	this.instance_291.setTransform(148,224,1,1,0,0,0,3,3);

	this.instance_292 = new lib.whiteCircle();
	this.instance_292.setTransform(119,311,1,1,0,0,0,3,3);

	this.instance_293 = new lib.whiteCircle();
	this.instance_293.setTransform(119,281,1,1,0,0,0,3,3);

	this.instance_294 = new lib.whiteCircle();
	this.instance_294.setTransform(119,252,1,1,0,0,0,3,3);

	this.instance_295 = new lib.whiteCircle();
	this.instance_295.setTransform(119,224,1,1,0,0,0,3,3);

	this.instance_296 = new lib.whiteCircle();
	this.instance_296.setTransform(91,311,1,1,0,0,0,3,3);

	this.instance_297 = new lib.whiteCircle();
	this.instance_297.setTransform(91,281,1,1,0,0,0,3,3);

	this.instance_298 = new lib.whiteCircle();
	this.instance_298.setTransform(91,252,1,1,0,0,0,3,3);

	this.instance_299 = new lib.whiteCircle();
	this.instance_299.setTransform(91,224,1,1,0,0,0,3,3);

	this.instance_300 = new lib.whiteCircle();
	this.instance_300.setTransform(61,311,1,1,0,0,0,3,3);

	this.instance_301 = new lib.whiteCircle();
	this.instance_301.setTransform(61,281,1,1,0,0,0,3,3);

	this.instance_302 = new lib.whiteCircle();
	this.instance_302.setTransform(61,252,1,1,0,0,0,3,3);

	this.instance_303 = new lib.whiteCircle();
	this.instance_303.setTransform(61,224,1,1,0,0,0,3,3);

	this.instance_304 = new lib.whiteCircle();
	this.instance_304.setTransform(32,311,1,1,0,0,0,3,3);

	this.instance_305 = new lib.whiteCircle();
	this.instance_305.setTransform(32,281,1,1,0,0,0,3,3);

	this.instance_306 = new lib.whiteCircle();
	this.instance_306.setTransform(32,252,1,1,0,0,0,3,3);

	this.instance_307 = new lib.whiteCircle();
	this.instance_307.setTransform(32,224,1,1,0,0,0,3,3);

	this.instance_308 = new lib.whiteCircle();
	this.instance_308.setTransform(3,311,1,1,0,0,0,3,3);

	this.instance_309 = new lib.whiteCircle();
	this.instance_309.setTransform(3,281,1,1,0,0,0,3,3);

	this.instance_310 = new lib.whiteCircle();
	this.instance_310.setTransform(3,252,1,1,0,0,0,3,3);

	this.instance_311 = new lib.whiteCircle();
	this.instance_311.setTransform(3,224,1,1,0,0,0,3,3);

	this.instance_312 = new lib.whiteCircle();
	this.instance_312.setTransform(352,204,1,1,0,0,0,3,3);

	this.instance_313 = new lib.whiteCircle();
	this.instance_313.setTransform(352,174,1,1,0,0,0,3,3);

	this.instance_314 = new lib.whiteCircle();
	this.instance_314.setTransform(352,145,1,1,0,0,0,3,3);

	this.instance_315 = new lib.whiteCircle();
	this.instance_315.setTransform(352,117,1,1,0,0,0,3,3);

	this.instance_316 = new lib.whiteCircle();
	this.instance_316.setTransform(322,204,1,1,0,0,0,3,3);

	this.instance_317 = new lib.whiteCircle();
	this.instance_317.setTransform(322,174,1,1,0,0,0,3,3);

	this.instance_318 = new lib.whiteCircle();
	this.instance_318.setTransform(322,145,1,1,0,0,0,3,3);

	this.instance_319 = new lib.whiteCircle();
	this.instance_319.setTransform(322,117,1,1,0,0,0,3,3);

	this.instance_320 = new lib.whiteCircle();
	this.instance_320.setTransform(293,204,1,1,0,0,0,3,3);

	this.instance_321 = new lib.whiteCircle();
	this.instance_321.setTransform(293,174,1,1,0,0,0,3,3);

	this.instance_322 = new lib.whiteCircle();
	this.instance_322.setTransform(293,145,1,1,0,0,0,3,3);

	this.instance_323 = new lib.whiteCircle();
	this.instance_323.setTransform(293,117,1,1,0,0,0,3,3);

	this.instance_324 = new lib.whiteCircle();
	this.instance_324.setTransform(264,204,1,1,0,0,0,3,3);

	this.instance_325 = new lib.whiteCircle();
	this.instance_325.setTransform(264,174,1,1,0,0,0,3,3);

	this.instance_326 = new lib.whiteCircle();
	this.instance_326.setTransform(264,145,1,1,0,0,0,3,3);

	this.instance_327 = new lib.whiteCircle();
	this.instance_327.setTransform(264,117,1,1,0,0,0,3,3);

	this.instance_328 = new lib.whiteCircle();
	this.instance_328.setTransform(235,204,1,1,0,0,0,3,3);

	this.instance_329 = new lib.whiteCircle();
	this.instance_329.setTransform(235,174,1,1,0,0,0,3,3);

	this.instance_330 = new lib.whiteCircle();
	this.instance_330.setTransform(235,145,1,1,0,0,0,3,3);

	this.instance_331 = new lib.whiteCircle();
	this.instance_331.setTransform(235,117,1,1,0,0,0,3,3);

	this.instance_332 = new lib.whiteCircle();
	this.instance_332.setTransform(206,204,1,1,0,0,0,3,3);

	this.instance_333 = new lib.whiteCircle();
	this.instance_333.setTransform(206,174,1,1,0,0,0,3,3);

	this.instance_334 = new lib.whiteCircle();
	this.instance_334.setTransform(206,145,1,1,0,0,0,3,3);

	this.instance_335 = new lib.whiteCircle();
	this.instance_335.setTransform(206,117,1,1,0,0,0,3,3);

	this.instance_336 = new lib.whiteCircle();
	this.instance_336.setTransform(177,204,1,1,0,0,0,3,3);

	this.instance_337 = new lib.whiteCircle();
	this.instance_337.setTransform(177,174,1,1,0,0,0,3,3);

	this.instance_338 = new lib.whiteCircle();
	this.instance_338.setTransform(177,145,1,1,0,0,0,3,3);

	this.instance_339 = new lib.whiteCircle();
	this.instance_339.setTransform(177,117,1,1,0,0,0,3,3);

	this.instance_340 = new lib.whiteCircle();
	this.instance_340.setTransform(148,204,1,1,0,0,0,3,3);

	this.instance_341 = new lib.whiteCircle();
	this.instance_341.setTransform(148,174,1,1,0,0,0,3,3);

	this.instance_342 = new lib.whiteCircle();
	this.instance_342.setTransform(148,145,1,1,0,0,0,3,3);

	this.instance_343 = new lib.whiteCircle();
	this.instance_343.setTransform(148,117,1,1,0,0,0,3,3);

	this.instance_344 = new lib.whiteCircle();
	this.instance_344.setTransform(119,204,1,1,0,0,0,3,3);

	this.instance_345 = new lib.whiteCircle();
	this.instance_345.setTransform(119,174,1,1,0,0,0,3,3);

	this.instance_346 = new lib.whiteCircle();
	this.instance_346.setTransform(119,145,1,1,0,0,0,3,3);

	this.instance_347 = new lib.whiteCircle();
	this.instance_347.setTransform(119,117,1,1,0,0,0,3,3);

	this.instance_348 = new lib.whiteCircle();
	this.instance_348.setTransform(91,204,1,1,0,0,0,3,3);

	this.instance_349 = new lib.whiteCircle();
	this.instance_349.setTransform(91,174,1,1,0,0,0,3,3);

	this.instance_350 = new lib.whiteCircle();
	this.instance_350.setTransform(91,145,1,1,0,0,0,3,3);

	this.instance_351 = new lib.whiteCircle();
	this.instance_351.setTransform(91,117,1,1,0,0,0,3,3);

	this.instance_352 = new lib.whiteCircle();
	this.instance_352.setTransform(61,204,1,1,0,0,0,3,3);

	this.instance_353 = new lib.whiteCircle();
	this.instance_353.setTransform(61,174,1,1,0,0,0,3,3);

	this.instance_354 = new lib.whiteCircle();
	this.instance_354.setTransform(61,145,1,1,0,0,0,3,3);

	this.instance_355 = new lib.whiteCircle();
	this.instance_355.setTransform(61,117,1,1,0,0,0,3,3);

	this.instance_356 = new lib.whiteCircle();
	this.instance_356.setTransform(32,204,1,1,0,0,0,3,3);

	this.instance_357 = new lib.whiteCircle();
	this.instance_357.setTransform(32,174,1,1,0,0,0,3,3);

	this.instance_358 = new lib.whiteCircle();
	this.instance_358.setTransform(32,145,1,1,0,0,0,3,3);

	this.instance_359 = new lib.whiteCircle();
	this.instance_359.setTransform(32,117,1,1,0,0,0,3,3);

	this.instance_360 = new lib.whiteCircle();
	this.instance_360.setTransform(3,204,1,1,0,0,0,3,3);

	this.instance_361 = new lib.whiteCircle();
	this.instance_361.setTransform(3,174,1,1,0,0,0,3,3);

	this.instance_362 = new lib.whiteCircle();
	this.instance_362.setTransform(3,145,1,1,0,0,0,3,3);

	this.instance_363 = new lib.whiteCircle();
	this.instance_363.setTransform(3,117,1,1,0,0,0,3,3);

	this.instance_364 = new lib.whiteCircle();
	this.instance_364.setTransform(352,90,1,1,0,0,0,3,3);

	this.instance_365 = new lib.whiteCircle();
	this.instance_365.setTransform(352,60,1,1,0,0,0,3,3);

	this.instance_366 = new lib.whiteCircle();
	this.instance_366.setTransform(352,31,1,1,0,0,0,3,3);

	this.instance_367 = new lib.whiteCircle();
	this.instance_367.setTransform(352,3,1,1,0,0,0,3,3);

	this.instance_368 = new lib.whiteCircle();
	this.instance_368.setTransform(322,90,1,1,0,0,0,3,3);

	this.instance_369 = new lib.whiteCircle();
	this.instance_369.setTransform(322,60,1,1,0,0,0,3,3);

	this.instance_370 = new lib.whiteCircle();
	this.instance_370.setTransform(322,31,1,1,0,0,0,3,3);

	this.instance_371 = new lib.whiteCircle();
	this.instance_371.setTransform(322,3,1,1,0,0,0,3,3);

	this.instance_372 = new lib.whiteCircle();
	this.instance_372.setTransform(293,90,1,1,0,0,0,3,3);

	this.instance_373 = new lib.whiteCircle();
	this.instance_373.setTransform(293,60,1,1,0,0,0,3,3);

	this.instance_374 = new lib.whiteCircle();
	this.instance_374.setTransform(293,31,1,1,0,0,0,3,3);

	this.instance_375 = new lib.whiteCircle();
	this.instance_375.setTransform(293,3,1,1,0,0,0,3,3);

	this.instance_376 = new lib.whiteCircle();
	this.instance_376.setTransform(264,90,1,1,0,0,0,3,3);

	this.instance_377 = new lib.whiteCircle();
	this.instance_377.setTransform(264,60,1,1,0,0,0,3,3);

	this.instance_378 = new lib.whiteCircle();
	this.instance_378.setTransform(264,31,1,1,0,0,0,3,3);

	this.instance_379 = new lib.whiteCircle();
	this.instance_379.setTransform(264,3,1,1,0,0,0,3,3);

	this.instance_380 = new lib.whiteCircle();
	this.instance_380.setTransform(235,90,1,1,0,0,0,3,3);

	this.instance_381 = new lib.whiteCircle();
	this.instance_381.setTransform(235,60,1,1,0,0,0,3,3);

	this.instance_382 = new lib.whiteCircle();
	this.instance_382.setTransform(235,31,1,1,0,0,0,3,3);

	this.instance_383 = new lib.whiteCircle();
	this.instance_383.setTransform(235,3,1,1,0,0,0,3,3);

	this.instance_384 = new lib.whiteCircle();
	this.instance_384.setTransform(206,90,1,1,0,0,0,3,3);

	this.instance_385 = new lib.whiteCircle();
	this.instance_385.setTransform(206,60,1,1,0,0,0,3,3);

	this.instance_386 = new lib.whiteCircle();
	this.instance_386.setTransform(206,31,1,1,0,0,0,3,3);

	this.instance_387 = new lib.whiteCircle();
	this.instance_387.setTransform(206,3,1,1,0,0,0,3,3);

	this.instance_388 = new lib.whiteCircle();
	this.instance_388.setTransform(177,90,1,1,0,0,0,3,3);

	this.instance_389 = new lib.whiteCircle();
	this.instance_389.setTransform(177,60,1,1,0,0,0,3,3);

	this.instance_390 = new lib.whiteCircle();
	this.instance_390.setTransform(177,31,1,1,0,0,0,3,3);

	this.instance_391 = new lib.whiteCircle();
	this.instance_391.setTransform(177,3,1,1,0,0,0,3,3);

	this.instance_392 = new lib.whiteCircle();
	this.instance_392.setTransform(148,90,1,1,0,0,0,3,3);

	this.instance_393 = new lib.whiteCircle();
	this.instance_393.setTransform(148,60,1,1,0,0,0,3,3);

	this.instance_394 = new lib.whiteCircle();
	this.instance_394.setTransform(148,31,1,1,0,0,0,3,3);

	this.instance_395 = new lib.whiteCircle();
	this.instance_395.setTransform(148,3,1,1,0,0,0,3,3);

	this.instance_396 = new lib.whiteCircle();
	this.instance_396.setTransform(119,90,1,1,0,0,0,3,3);

	this.instance_397 = new lib.whiteCircle();
	this.instance_397.setTransform(119,60,1,1,0,0,0,3,3);

	this.instance_398 = new lib.whiteCircle();
	this.instance_398.setTransform(119,31,1,1,0,0,0,3,3);

	this.instance_399 = new lib.whiteCircle();
	this.instance_399.setTransform(119,3,1,1,0,0,0,3,3);

	this.instance_400 = new lib.whiteCircle();
	this.instance_400.setTransform(91,90,1,1,0,0,0,3,3);

	this.instance_401 = new lib.whiteCircle();
	this.instance_401.setTransform(91,60,1,1,0,0,0,3,3);

	this.instance_402 = new lib.whiteCircle();
	this.instance_402.setTransform(91,31,1,1,0,0,0,3,3);

	this.instance_403 = new lib.whiteCircle();
	this.instance_403.setTransform(91,3,1,1,0,0,0,3,3);

	this.instance_404 = new lib.whiteCircle();
	this.instance_404.setTransform(61,90,1,1,0,0,0,3,3);

	this.instance_405 = new lib.whiteCircle();
	this.instance_405.setTransform(61,60,1,1,0,0,0,3,3);

	this.instance_406 = new lib.whiteCircle();
	this.instance_406.setTransform(61,31,1,1,0,0,0,3,3);

	this.instance_407 = new lib.whiteCircle();
	this.instance_407.setTransform(61,3,1,1,0,0,0,3,3);

	this.instance_408 = new lib.whiteCircle();
	this.instance_408.setTransform(32,90,1,1,0,0,0,3,3);

	this.instance_409 = new lib.whiteCircle();
	this.instance_409.setTransform(32,60,1,1,0,0,0,3,3);

	this.instance_410 = new lib.whiteCircle();
	this.instance_410.setTransform(32,31,1,1,0,0,0,3,3);

	this.instance_411 = new lib.whiteCircle();
	this.instance_411.setTransform(32,3,1,1,0,0,0,3,3);

	this.instance_412 = new lib.whiteCircle();
	this.instance_412.setTransform(3,90,1,1,0,0,0,3,3);

	this.instance_413 = new lib.whiteCircle();
	this.instance_413.setTransform(3,60,1,1,0,0,0,3,3);

	this.instance_414 = new lib.whiteCircle();
	this.instance_414.setTransform(3,31,1,1,0,0,0,3,3);

	this.instance_415 = new lib.whiteCircle();
	this.instance_415.setTransform(3,3,1,1,0,0,0,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_415},{t:this.instance_414},{t:this.instance_413},{t:this.instance_412},{t:this.instance_411},{t:this.instance_410},{t:this.instance_409},{t:this.instance_408},{t:this.instance_407},{t:this.instance_406},{t:this.instance_405},{t:this.instance_404},{t:this.instance_403},{t:this.instance_402},{t:this.instance_401},{t:this.instance_400},{t:this.instance_399},{t:this.instance_398},{t:this.instance_397},{t:this.instance_396},{t:this.instance_395},{t:this.instance_394},{t:this.instance_393},{t:this.instance_392},{t:this.instance_391},{t:this.instance_390},{t:this.instance_389},{t:this.instance_388},{t:this.instance_387},{t:this.instance_386},{t:this.instance_385},{t:this.instance_384},{t:this.instance_383},{t:this.instance_382},{t:this.instance_381},{t:this.instance_380},{t:this.instance_379},{t:this.instance_378},{t:this.instance_377},{t:this.instance_376},{t:this.instance_375},{t:this.instance_374},{t:this.instance_373},{t:this.instance_372},{t:this.instance_371},{t:this.instance_370},{t:this.instance_369},{t:this.instance_368},{t:this.instance_367},{t:this.instance_366},{t:this.instance_365},{t:this.instance_364},{t:this.instance_363},{t:this.instance_362},{t:this.instance_361},{t:this.instance_360},{t:this.instance_359},{t:this.instance_358},{t:this.instance_357},{t:this.instance_356},{t:this.instance_355},{t:this.instance_354},{t:this.instance_353},{t:this.instance_352},{t:this.instance_351},{t:this.instance_350},{t:this.instance_349},{t:this.instance_348},{t:this.instance_347},{t:this.instance_346},{t:this.instance_345},{t:this.instance_344},{t:this.instance_343},{t:this.instance_342},{t:this.instance_341},{t:this.instance_340},{t:this.instance_339},{t:this.instance_338},{t:this.instance_337},{t:this.instance_336},{t:this.instance_335},{t:this.instance_334},{t:this.instance_333},{t:this.instance_332},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circleBG, new cjs.Rectangle(-0.5,-0.5,356,429), null);


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
	this.b1.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// Layer_2
	this.b2 = new lib.b2();
	this.b2.name = "b2";
	this.b2.setTransform(364,45,1,1,0,0,0,400.4,49.5);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-36.4,-4.5,801,99), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
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
		tl.to(self.txt.tb1, {duration:2.0, x:"-=5", ease:"power2.inOut"}, d);
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
		
		
		tl.to(self.txt.tb1, {duration:0.5, x:"-=10", ease:"power2.inOut"}, d+0.4);
		tl.to(self.txt.tb2, {duration:0.5, x:"+=40", ease:"power2.inOut"}, d+0.5);
		
		
		//tl.to(self.txt, {duration:1.0, y:"-=10"}, d+0.6);
		//tl.to(self.txt.tb2, {duration:1.0, y:"-=10"}, d+0.6);
		
		tl.to(self.txt.tb1, {duration:0.5, x:"+=0", ease:"power2.inOut"}, d+0.3);
		tl.to(self.txt.tb2, {duration:0.5, x:"+=70", ease:"power2.inOut"}, d+0.3);
		
		tl.to(self.subCTA.subArr, {rotation:"-=360"}, d+0.2);
		
		d += 0.6;
		tl.to(self.txt.tb1, {duration:2.0, x:"-=15", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:2.0, x:"-=15", ease:"power2.inOut"}, d);
		
		tl.from(self.back.b2, {duration:7.5, scale:0.91, ease:"expo"}, d);
		
		tl.from(self.deviceA, {duration:0.7, scale:1, y:"+=300", ease:"expo"}, d);
		tl.from(self.deviceB, {duration:0.7, scale:1, y:"+=300", ease:"expo"}, d+0.1);
		
		tl.from([self.c1, self.c2], {duration:0.1, alpha:0, ease:"none"}, d);
		tl.from(self.c1, {duration:2.0, x:"-=40", y:"-=40", scale:0.66, ease:"power2"}, d);
		tl.from(self.c2, {duration:2.0, x:"-=30", y:"-=30", scale:0.66, ease:"power3"}, d);
		
		//tl.to(self.deviceA, {duration:2, scale:1, x:"-=40", ease:"expo"}, d+0.4);
		
		tl.from(self.whitecircles.children, {duration:0.5,scale:0, ease:"power2.inOut"}, d+0.4);
		
		tl.to(self.whitecircles, {duration:8,y:"-=180", ease:"linear"}, d+0.4);
				
		d+=2;
		
		//tl.to(self.c1, {duration:0.9, x:"-=80", y:"+=190", scale:0.0, ease: "power2.inOut"}, d);
		//tl.to(self.c2, {duration:0.9, x:"-=30", y:"+=190", scale:0.0, ease: "power2.inOut"}, d);
		
		//tl.set([self.c4, self.c5], {duration:0.1, alpha:0, ease:"none"}, d+0.5);
		//tl.from(self.c4, {duration:1.25, x:"+=40", scale:0.0, ease: "power2.inOut"}, d);
		//tl.from(self.c5, {duration:1.25, x:"+=40", scale:0.0, ease: "power2.inOut"}, d);
		
		
		//show text 3: de beste
		//tl.set([self.txt.t21, self.txt.t22], {alpha:0}, d);
		tl.set([self.txt.t31, self.txt.t32], {alpha:0,y:"-=10"}, d);
		 
		tl.to([self.txt.t21, self.txt.t22], {duration:1, y:"-=10", alpha:0, stagger:0.1}, d-0.2);
		tl.to([self.txt.t31, self.txt.t32], {duration:1, y:"+=10", alpha:1, stagger:0.1}, d+0.2);
		
		tl.to(self.txt.tb1, {duration:0.5, x:"-=30", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:0.5, x:"-=20", ease:"power2.inOut"}, d);
		
		
		//tl.to(self.txt, {duration:1.0, y:"-=10"}, d+0.6);
		//tl.to(self.txt.tb2, {duration:1.0, y:"-=10"}, d+0.6);
		
		
		//deviceA
		tl.to(self.deviceA, {duration:0.8, scale:0.35, x:"-=35", ease: "power2.inOut"}, d);
		tl.to(self.deviceB, {duration:0.8, scale:0.24, x:"+=18", y:"-=14", ease: "power2.inOut"}, d);
		
		
		
		/*
		tl.set([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {x:"+=1200"}, d);
		tl.set([self.sh3, self.sh4, self.sh2], {x:"+=1200"}, d);
		tl.set([self.sh7, self.sh6, self.sh9, self.sh8, self.sh10], {x:330}, d);
		*/
		
		/////frame_3
		
		d += 1.0;
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:1.0, x:"-=1800", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh14, self.sh12, self.sh15, self.sh11, self.sh13, self.sh1], {duration:0.7, x:"-=1800", ease: "expo.in", stagger:0.1}, d+1.1);
		
		tl.to([self.sh3, self.sh4, self.sh2], {duration:1.0, x:"-=1800", ease: "expo", stagger:0.1}, d);
		tl.to([self.sh3, self.sh4, self.sh2], {duration:0.7, x:"-=1800", ease: "expo.in", stagger:0.1}, d+1.1);
		
		
		
		
		//tl.to(self.back.b2, {duration:3.0, scale:1, ease:"expo.in"}, d);
		
		
		
		tl.to(self.subCTA.subArr, {rotation:"-=360"}, d+0.2);
		
		d += 1.5;
		//tl.from([self.c3], {duration:0.1, alpha:0, ease:"none"}, d);
		//tl.from(self.c3, {duration:5.0, x:"+=30", y:"-=30", scale:0.66, ease:"power4"}, d);
		
		
		
		
		//ga voor
		
		
		
		tl.to(self.txt.tb1, {duration:1.0, x:"+=40", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:1.0, x:"-=15", ease:"power2.inOut"}, d);
		
		//tl.set([self.txt.t31, self.txt.t32], {alpha:0}, d);
		//tl.set([self.txt.t41, self.txt.t42], {alpha:1}, d);
		
		tl.set([self.txt.t41, self.txt.t42], {alpha:0,y:"-=10"}, d);
		 
		tl.to([self.txt.t31, self.txt.t32], {duration:1, y:"-=10", alpha:0, stagger:0.1}, d-0.2);
		tl.to([self.txt.t41, self.txt.t42], {duration:1, y:"+=10", alpha:1, stagger:0.1}, d+0.2);
		
		d += 0.5;
		tl.to(self.txt.tb1, {duration:3.0, x:"+=40", ease:"power2.inOut"}, d);
		tl.to(self.txt.tb2, {duration:3.0, x:"-=35", ease:"power2.inOut"}, d);
		
		
		
		tl.to(self.deviceA, {duration:0.7, scale:0.29, x:"+=35", y:"-=3", ease: "power2.inOut"}, d);
		tl.to(self.deviceB, {duration:0.7, scale:0.25, x:"-=20", y:"+=18", ease: "power2.inOut"}, d);
		
		
		
		//tl.to(self.c1, {duration:1.5, x:"+=40", y:"-=120", scale:1.0, ease:"expo.inOut"}, d);
		//tl.to(self.c2, {duration:1.5, x:"+=30", y:"-=120", scale:1.0, ease:"expo.inOut"}, d);
		
		//tl.to([self.c4, self.c5], {duration:1.5, x:"+=70", y:"+=80", scale:0.0, ease:"expo.inOut"}, d);
		
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
		//tl.time(6);
		//////CTA clickTag onMouseOver	
		console.log(tl.duration());
				
			tl.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(692,29,1,1,0,0,0,29,14);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// subCTA
	this.subCTA = new lib.subCTA();
	this.subCTA.name = "subCTA";
	this.subCTA.setTransform(620.1,66,0.8443,0.8429,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.subCTA).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(577,46,1,1,0,0,0,73.5,20);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// above
	this.sh10 = new lib.sh10();
	this.sh10.name = "sh10";
	this.sh10.setTransform(1102,256.95);

	this.sh1 = new lib.sh1();
	this.sh1.name = "sh1";
	this.sh1.setTransform(1118,216);

	this.sh3 = new lib.sh3();
	this.sh3.name = "sh3";
	this.sh3.setTransform(1080,153);

	this.sh4 = new lib.sh4();
	this.sh4.name = "sh4";
	this.sh4.setTransform(1150,199);

	this.sh2 = new lib.sh2();
	this.sh2.name = "sh2";
	this.sh2.setTransform(1176,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh2},{t:this.sh4},{t:this.sh3},{t:this.sh1},{t:this.sh10}]}).wait(1));

	// im2
	this.deviceB = new lib.hand();
	this.deviceB.name = "deviceB";
	this.deviceB.setTransform(433,61,0.26,0.26,0,0,0,71,171.3);

	this.deviceA = new lib.handPhone();
	this.deviceA.name = "deviceA";
	this.deviceA.setTransform(383,44,0.28,0.28,0,0,0,112.5,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deviceA},{t:this.deviceB}]}).wait(1));

	// Layer_2
	this.sh8 = new lib.sh8();
	this.sh8.name = "sh8";
	this.sh8.setTransform(710,-178.55);

	this.sh9 = new lib.sh9();
	this.sh9.name = "sh9";
	this.sh9.setTransform(710,-78.55);

	this.sh7 = new lib.sh7();
	this.sh7.name = "sh7";
	this.sh7.setTransform(710,-461.55);

	this.sh6 = new lib.sh9();
	this.sh6.name = "sh6";
	this.sh6.setTransform(710,-378.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh6},{t:this.sh7},{t:this.sh9},{t:this.sh8}]}).wait(1));

	// im1
	this.im1 = new lib.im1_1();
	this.im1.name = "im1";
	this.im1.setTransform(368,154,1,1,0,0,0,121,198);

	this.timeline.addTween(cjs.Tween.get(this.im1).wait(1));

	// circles
	this.c4 = new lib.c1();
	this.c4.name = "c4";
	this.c4.setTransform(-254,299,1,1,0,0,0,143,156);

	this.c5 = new lib.c2();
	this.c5.name = "c5";
	this.c5.setTransform(-306,238,1,1,0,0,0,120,120);
	this.c5.alpha = 0.6484;

	this.c1 = new lib.c1();
	this.c1.name = "c1";
	this.c1.setTransform(393,24,1,1,0,0,0,54,54);

	this.c3 = new lib.c3();
	this.c3.name = "c3";
	this.c3.setTransform(782,-572,1,1,0,0,0,198,198);

	this.c2 = new lib.c2();
	this.c2.name = "c2";
	this.c2.setTransform(361,3,1,1,0,0,0,54,54);
	this.c2.alpha = 0.6484;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c2},{t:this.c3},{t:this.c1},{t:this.c5},{t:this.c4}]}).wait(1));

	// whitecircles
	this.whitecircles = new lib.circleBG();
	this.whitecircles.name = "whitecircles";
	this.whitecircles.setTransform(270.05,132.95,0.65,0.65,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.whitecircles).wait(1));

	// texts
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.setTransform(208.1,49.1,1,1,0,0,0,208.1,35.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// over
	this.instance = new lib.over();
	this.instance.setTransform(249,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// behind
	this.sh15 = new lib.sh3();
	this.sh15.name = "sh15";
	this.sh15.setTransform(794,46);

	this.sh13 = new lib.sh2();
	this.sh13.name = "sh13";
	this.sh13.setTransform(775.1,75.1,0.4,0.4,0,0,0,0.2,0.2);

	this.sh12 = new lib.sh2();
	this.sh12.name = "sh12";
	this.sh12.setTransform(878.15,58.15,0.83,0.83,0,0,0,0.2,0.2);

	this.sh11 = new lib.sh2();
	this.sh11.name = "sh11";
	this.sh11.setTransform(741,20);

	this.sh14 = new lib.sh10();
	this.sh14.name = "sh14";
	this.sh14.setTransform(840.05,0.05,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sh14},{t:this.sh11},{t:this.sh12},{t:this.sh13},{t:this.sh15}]}).wait(1));

	// back
	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-725,2072,1136.5);
// library properties:
lib.properties = {
	id: '1F8CA2A4A0EA654EABBB3FBCA823831E',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back1.jpg?1655223810299", id:"back1"},
		{src:"images/back2.jpg?1655223810299", id:"back2"},
		{src:"images/Bitmap21.png?1655223810299", id:"Bitmap21"},
		{src:"images/Bitmap22.png?1655223810299", id:"Bitmap22"},
		{src:"images/deviceA.png?1655223810299", id:"deviceA"},
		{src:"images/deviceB.png?1655223810299", id:"deviceB"},
		{src:"images/im1.png?1655223810299", id:"im1"},
		{src:"images/over.png?1655223810299", id:"over"}
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