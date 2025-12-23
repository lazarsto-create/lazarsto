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



(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,64);


(lib.Breaking = function() {
	this.initialize(img.Breaking);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,519);


(lib.crowbar = function() {
	this.initialize(img.crowbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,98);


(lib.schadow = function() {
	this.initialize(img.schadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,62);// helper functions:

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


(lib.wlogo = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.wlogo, new cjs.Rectangle(0,0,177,26.7), null);


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
	this.shape.graphics.f("#F86200").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.shadow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.schadow();
	this.instance.setTransform(-420.45,-68.6,2.2129,2.2129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.4,-68.6,840.9,137.2);


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
	this.shape.graphics.f("#053781").s().p("AgHArQgGgGAAgLIAAglIgKAAIAAgQIAKAAIAAgSIAQgEIAAAWIAUAAIAAAQIgUAAIAAAiQAAALAKAAIAJgBIACAOQgGACgIAAQgLABgGgHg");
	this.shape.setTransform(32.825,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053781").s().p("AgUAjQgIgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQAPAAAKANIAAgLIAPAAIAABLIgPAAIAAgLQgKANgPAAQgKAAgIgFgAgPgQQgFAGAAAKQAAALAFAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgGgKAAQgJAAgGAHg");
	this.shape_1.setTransform(25.35,-3.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#053781").s().p("AgUAjQgIgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAIgFQAIgFAKAAQAPAAAJANIAAgLIAQAAIAABLIgQAAIAAgLQgJANgPAAQgKAAgIgFgAgPgQQgFAGAAAKQAAALAFAHQAHAGAIAAQAKAAAGgGQAGgHgBgLQABgKgGgHQgGgGgKAAQgIAAgHAHg");
	this.shape_2.setTransform(16.15,-3.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#053781").s().p("AAoAnIAAgqQAAgTgQAAQgIAAgDAEQgFAGAAAIIAAArIgQAAIAAgqQAAgKgEgFQgDgEgIAAQgHAAgFAEQgEAGABAIIAAArIgRAAIAAhMIAQAAIAAALQADgGAGgDQAFgDAHAAQAJAAAFAEQAFADADAGQAEgGAGgDQAHgEAIAAQAMAAAIAIQAHAJAAAPIAAAtg");
	this.shape_3.setTransform(5.3,-3.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#053781").s().p("AglA1IAAhoIAPAAIAAAMQAKgNAPAAQAKAAAIAFQAIAFAEAJQAFAJAAAMQAAALgFAJQgEAJgIAEQgIAGgKgBQgOAAgKgLIAAAmgAgPgeQgGAHAAALQAAALAGAGQAGAGAJAAQAJAAAGgHQAGgFAAgLQAAgLgGgGQgGgIgJABQgJAAgGAGg");
	this.shape_4.setTransform(-9.25,-1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#053781").s().p("AgTAiQgJgEgEgJQgGgKAAgLQAAgLAGgJQAEgJAJgFQAJgFAKAAQALAAAJAFQAJAFAFAJQAFAJAAALQAAALgFAKQgFAJgJAEQgJAGgLAAQgKAAgJgGgAgPgQQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgKgGgGQgGgIgKABQgIgBgHAIg");
	this.shape_5.setTransform(-18.55,-3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy2, new cjs.Rectangle(-29,-16.4,70.6,23.799999999999997), null);


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


(lib.particleSystem = function(mode,startPosition,loop,reversed) {
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


(lib.nc_ctaDo_txt = function(mode,startPosition,loop,reversed) {
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


(lib.mc_cta_arrowDo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F86200").s().p("AAAAbIARgRIhFAAIAAgSIBFAAIgRgRIANgOIAoAnIgoAog");
	this.shape.setTransform(10.675,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cta_arrowDo, new cjs.Rectangle(0,0,20.2,20), null);


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


(lib.crowbar_front = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.bf(img.crowbar, null, new cjs.Matrix2D(1,0,0,1,-136,-49)).s().p("A1PHqIApjCQA/gwB5BJIbfsqILfAAIAAPTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-49,272,98);


(lib.crowbar_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.crowbar();
	this.instance.setTransform(-136,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-49,272,98);


(lib.copyDo_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDD25C").s().p("Ag+BXIAIgbQAKAGAMADQAMADANAAQAXAAAMgLQAMgLAAgXIAAgGQgSAWgbAAQgTAAgPgJQgPgJgIgRQgIgPAAgVQAAgVAIgQQAIgQAPgKQAPgJATAAQAdAAASAZIAAgWIAdAAIAAB/QAAAigUASQgUATgkAAQgfAAgagOgAgcg7QgLAMAAATQAAATALALQALAMASAAQASAAAKgMQALgKAAgUQAAgUgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape.setTransform(-43.575,35.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_1.setTransform(-59.625,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD25C").s().p("AAhBIIghhmIghBmIgkAAIgqiPIAfAAIAeBpIAjhpIAfAAIAjBpIAdhpIAgAAIgrCPg");
	this.shape_2.setTransform(-78.95,32.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD25C").s().p("AhGBjIAAjCIAdAAIAAAVQASgZAdAAQATAAAPAKQAPAKAIAQQAIASAAAWQAAAVgIAQQgIARgPAKQgPAJgTAAQgbAAgSgWIAABHgAgcg5QgLAMAAAWQAAAUALALQAKANASAAQARAAAMgNQALgMAAgTQAAgVgLgNQgMgMgRAAQgSAAgKAMg");
	this.shape_3.setTransform(-105.275,35.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD25C").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLAMAAAUQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgUgLgMQgMgNgSAAQgRAAgMANg");
	this.shape_4.setTransform(-122.725,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_3, new cjs.Rectangle(-133,-50.8,266,101.69999999999999), null);


(lib.copyDo_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDD25C").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape.setTransform(-9.475,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD25C").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_1.setTransform(-22.175,2.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_2.setTransform(-36.325,2.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD25C").s().p("AAbBpIgvg5IgPAQIAAApIgfAAIAAjRIAfAAIAACBIA7g+IAnAAIg/A/IBDBPg");
	this.shape_3.setTransform(-50.975,-0.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_4.setTransform(-67.625,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDD25C").s().p("Ag6BIIAAgZIBHhZIhEAAIAAgdIBvAAIAAAZIhHBZIBKAAIAAAdg");
	this.shape_5.setTransform(-82.425,2.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDD25C").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_6.setTransform(-93.925,2.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_7.setTransform(-108.075,2.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDD25C").s().p("AgPBIIg6iPIAiAAIAnBrIAohrIAiAAIg6CPg");
	this.shape_8.setTransform(-123.425,2.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_2, new cjs.Rectangle(-133,-50.8,266,101.69999999999999), null);


(lib.copyDo_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAhBJIAAhMQAAgUgIgKQgJgKgPAAQgPAAgJAKQgJAKAAATIAABNIggAAIAAiOIAeAAIAAAWQAGgMANgHQALgGAOAAQAZAAAPAQQAPARAAAeIAABSg");
	this.shape.setTransform(46.35,-27.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgJgPAAQgOgBgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_1.setTransform(29.975,-27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BXIAIgbQAKAGAMADQAMADANAAQAXAAAMgLQAMgLAAgXIAAgGQgSAWgbAAQgTAAgPgJQgPgJgIgRQgIgPAAgVQAAgVAIgQQAIgQAPgKQAPgJATAAQAdAAASAZIAAgWIAdAAIAAB/QAAAigUASQgUATgkAAQgfAAgagOgAgcg7QgLAMAAATQAAATALALQALAMASAAQASAAAKgMQALgKAAgUQAAgUgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_2.setTransform(6.375,-24.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBpIAAiOIAfAAIAACOgAgOhGQgFgGAAgJQAAgIAFgGQAGgFAIAAQAIAAAHAFQAFAGAAAIQAAAJgFAFQgHAGgIAAQgIAAgGgFg");
	this.shape_3.setTransform(-5.35,-30.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBgQgIgJAAgUIAAisIAeAAIAACmQAAAIADAEQAEAFAHAAQAGAAAEgCIADAbQgIADgOAAQgSAAgJgKg");
	this.shape_4.setTransform(-12.125,-30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBpIAAiOIAfAAIAACOgAgOhGQgFgGAAgJQAAgIAFgGQAGgFAIAAQAIAAAHAFQAFAGAAAIQAAAJgFAFQgHAGgIAAQgIAAgGgFg");
	this.shape_5.setTransform(-20.65,-30.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAKAIAPQAJARAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgJgPAAQgOgBgKAJQgKAJgCAPIBIAAIAAAAg");
	this.shape_6.setTransform(-32.125,-27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBIIg6iPIAiAAIAnBrIAohrIAiAAIg6CPg");
	this.shape_7.setTransform(-47.475,-27.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_8.setTransform(-70.825,-30.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiCCIADgcIAIABQALAAAGgHQAGgHAAgQIAAiJIAeAAIAACMQAAAbgNAPQgMAOgYAAQgJAAgGgCgAAAhhQgFgGABgJQgBgIAFgGQAFgFAKAAQAIAAAGAFQAFAGAAAIQAAAJgFAFQgGAGgIAAQgKAAgFgFg");
	this.shape_9.setTransform(-84,-28.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBpIAAiOIAfAAIAACOgAgOhGQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgFg");
	this.shape_10.setTransform(-89.7,-30.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBRQgLgMAAgVIAAhGIgTAAIAAgeIATAAIAAgiIAegGIAAAoIAmAAIAAAeIgmAAIAABBQAAAVATAAQAIAAAJgEIAEAcQgMAFgPAAQgUAAgMgMg");
	this.shape_11.setTransform(-98.375,-29.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBgQgIgJAAgUIAAisIAeAAIAACmQAAAIADAEQAEAFAHAAQAGAAAEgCIADAbQgIADgOAAQgSAAgJgKg");
	this.shape_12.setTransform(-106.475,-30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/BkIgUgzIhVAAIgUAzIgjAAIBPjHIAlAAIBPDHgAAfARIgfhPIgeBPIA9AAg");
	this.shape_13.setTransform(-121.225,-30.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_1, new cjs.Rectangle(-133,-50.8,266,101.69999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgqA6IAGgTQAHAEAIADQAJACAIAAQAPAAAHgIQAJgHgBgPIAAgFQgLAPgSAAQgNAAgKgGQgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgLAKgGQAKgGANAAQATAAAMAQIAAgOIATAAIAABUQAAAWgNANQgOAMgXAAQgVAAgSgJgAgTgnQgHAIAAAMQAAANAHAHQAJAIAKAAQANAAAGgIQAIgGgBgOQABgNgIgHQgGgIgNAAQgKAAgJAIg");
	this.shape.setTransform(42,17.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAxIAAgzQAAgNgGgHQgFgGgMAAQgJAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQARAAAKALQAJALAAAUIAAA3g");
	this.shape_1.setTransform(31.1,15.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBGIAAhfIAUAAIAABfgAgJgvQgDgDAAgGQAAgGADgDQAEgEAFAAQAGAAADAEQAFADAAAGQAAAGgFADQgDAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(23.1,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAwIAAheIATAAIAAARQAIgTAQABQAHAAAFACIgDAUQgFgBgFAAQgKgBgFAIQgGAGAAANIAAAwg");
	this.shape_3.setTransform(17.675,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_4.setTransform(8.275,15.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBGIgegmIgLALIAAAbIgVAAIAAiLIAVAAIAABVIAngoIAbAAIgqAqIAsA0g");
	this.shape_5.setTransform(-1.525,13.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_6.setTransform(-12.575,15.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAwIAAgQIAvg7IgtAAIAAgUIBJAAIAAAQIgvA8IAxAAIAAATg");
	this.shape_7.setTransform(-22.45,15.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAwIAAheIATAAIAAARQAIgTAQABQAHAAAFACIgDAUQgFgBgFAAQgKgBgFAIQgGAGAAANIAAAwg");
	this.shape_8.setTransform(-30.125,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_9.setTransform(-39.525,15.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAwIgnhfIAWAAIAaBHIAbhHIAWAAIgmBfg");
	this.shape_10.setTransform(-49.75,15.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNBBQgFgHAAgNIAAhzIAUAAIAABvQAAAFABADQADADAFAAQAEAAADgCIACATQgGACgJAAQgMAAgGgGg");
	this.shape_11.setTransform(-56.95,13.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_12.setTransform(-65.475,15.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBBQgLgGgFgMQgGgLAAgPQAAgOAGgKQAFgMALgGQAKgGAMAAQASAAAMAOIAAg5IAUAAIAACLIgTAAIAAgOQgMAQgTAAQgMAAgKgGgAgSAAQgIAIAAANQAAAOAIAIQAHAJAMAAQALAAAIgIQAGgJABgOQgBgOgGgHQgIgIgLAAQgMAAgHAIg");
	this.shape_13.setTransform(-76.75,13.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_14.setTransform(-87.425,15.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_15.setTransform(-98.125,15.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbA3IAAAOIgTAAIAAiLIAVAAIAAA5QALgOASAAQANAAAKAGQAKAGAFAMQAFAKAAAOQAAAPgFALQgFAMgKAGQgKAGgNAAQgTAAgMgQgAgSAAQgIAHABAOQgBAOAIAJQAGAIAMAAQAMAAAHgJQAIgIAAgOQAAgNgIgIQgHgIgMAAQgMAAgGAIg");
	this.shape_16.setTransform(-109.05,13.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWAxIAAgzQAAgNgFgHQgGgGgKAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIAUAAIAAAPQAEgIAIgFQAIgEAJAAQAQAAAKALQAKALAAAUIAAA3g");
	this.shape_17.setTransform(-120.6,15.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBGIAAhfIAVAAIAABfgAgIgvQgFgDAAgGQAAgGAFgDQADgEAFAAQAGAAAEAEQADADAAAGQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_18.setTransform(-128.6,13.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_2, new cjs.Rectangle(-133,-35.7,266,94.4), null);


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


(lib.copy1_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(43.825,7.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AAWAxIAAgzQABgNgGgHQgFgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQARAAAJALQAKALAAAUIAAA3g");
	this.shape_1.setTransform(33.95,9.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_2.setTransform(23.075,9.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_3.setTransform(14.475,8.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgjArIAFgTQANAHAOAAQAIAAAGgDQAEgDAAgFQABgEgFgCQgEgDgIgCIgQgGQgHgCgFgFQgEgGAAgKQAAgOAJgHQAKgIAQAAIAQACIAOAFIgFASQgLgGgOAAQgGAAgEACQgEADAAAEQAAAFAFADQAEACAIADIAQAFQAGADAFAFQAEAFAAAKQAAAOgKAIQgLAIgSAAQgTAAgNgHg");
	this.shape_4.setTransform(6.95,9.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgaArQgKgGgFgLQgGgLABgPQgBgOAGgLQAFgLAKgHQALgGAMAAQATAAAMARIAAgPIATAAIAABfIgTAAIAAgPQgMARgTAAQgMAAgLgHgAgSgVQgIAJAAAMQAAAOAIAIQAHAIALAAQANAAAGgIQAIgIAAgOQAAgNgIgIQgGgIgNAAQgLAAgHAIg");
	this.shape_5.setTransform(-3.2,9.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgqA6IAGgTQAHAEAIADQAJACAIAAQAPAAAHgIQAJgHgBgPIAAgFQgLAPgSAAQgNAAgKgGQgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgLAKgGQAKgGANAAQATAAAMAQIAAgOIATAAIAABUQAAAWgNANQgOAMgXAAQgVAAgSgJgAgTgnQgHAIAAAMQAAANAHAHQAJAIAKAAQANAAAGgIQAIgGgBgOQABgNgIgHQgGgIgNAAQgKAAgJAIg");
	this.shape_6.setTransform(-14.7,11.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_7.setTransform(-29.825,9.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_8.setTransform(-38.425,8.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgjArIAFgTQANAHAOAAQAIAAAFgDQAFgDABgFQAAgEgFgCQgEgDgIgCIgQgGQgHgCgEgFQgFgGAAgKQAAgOAJgHQAKgIAQAAIAQACIAPAFIgGASQgLgGgOAAQgHAAgDACQgEADAAAEQAAAFAEADQAFACAJADIAPAFQAGADAFAFQAEAFAAAKQAAAOgKAIQgLAIgSAAQgSAAgOgHg");
	this.shape_9.setTransform(-45.95,9.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AAWAxIAAgzQABgNgGgHQgFgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQAQAAALALQAJALAAAUIAAA3g");
	this.shape_10.setTransform(-55.5,9.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_11.setTransform(-66.375,9.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AAWAwIgWhEIgWBEIgXAAIgchfIAUAAIAUBGIAXhGIAVAAIAXBGIAUhGIAUAAIgcBfg");
	this.shape_12.setTransform(-79.25,9.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_13.setTransform(-92.175,9.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003781").s().p("AgqA6IAGgTQAHAEAIADQAJACAHAAQAQAAAHgIQAJgHgBgPIAAgFQgLAPgSAAQgMAAgLgGQgKgGgFgLQgGgKABgOQgBgOAGgKQAFgLAKgGQALgGAMAAQATAAAMAQIAAgOIATAAIAABUQAAAWgNANQgOAMgXAAQgVAAgSgJgAgSgnQgIAIAAAMQAAANAIAHQAHAIALAAQANAAAGgIQAIgGgBgOQABgNgIgHQgGgIgNAAQgLAAgHAIg");
	this.shape_14.setTransform(-103.45,11.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003781").s().p("AAWAxIAAgzQABgNgGgHQgFgGgMAAQgJAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIATAAIAAAPQAFgIAIgFQAIgEAJAAQAQAAALALQAJALAAAUIAAA3g");
	this.shape_15.setTransform(-114.35,9.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003781").s().p("AgYAsQgLgHgGgLQgGgLAAgPQAAgOAGgLQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGALAAAOQAAAPgGALQgGALgLAHQgLAGgOAAQgNAAgLgGgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQAMAAAIgIQAHgJAAgNQAAgMgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_16.setTransform(-125.475,9.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_2, new cjs.Rectangle(-133,-34.2,266,56.6), null);


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
	this.shape.graphics.f("#003781").s().p("AAXAxIAAgzQAAgNgGgHQgGgGgLAAQgJAAgGAGQgGAHAAAMIAAA0IgVAAIAAhfIAUAAIAAAPQAEgIAIgFQAIgEAJAAQARAAAKALQAJALAAAUIAAA3g");
	this.shape.setTransform(-2.55,-19.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgaArQgKgGgFgLQgFgLAAgPQAAgOAFgLQAFgLAKgHQAKgGANAAQATAAAMARIAAgPIATAAIAABfIgTAAIAAgPQgMARgTAAQgNAAgKgHgAgTgVQgHAJAAAMQAAAOAHAIQAJAIAKAAQANAAAGgIQAIgIgBgOQABgNgIgIQgGgIgNAAQgKAAgJAIg");
	this.shape_1.setTransform(-14.25,-19.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgJAwIgnhfIAWAAIAaBHIAbhHIAWAAIgnBfg");
	this.shape_2.setTransform(-24.7,-19.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgaBBQgJgGgGgMQgFgLgBgPQABgOAFgKQAGgMAJgGQAKgGANAAQASAAALAOIAAg5IAWAAIAACLIgUAAIAAgOQgMAQgTAAQgNAAgKgGgAgTAAQgHAIAAANQAAAOAHAIQAIAJALAAQANAAAGgIQAIgJgBgOQABgOgIgHQgGgIgNAAQgLAAgIAIg");
	this.shape_3.setTransform(-40.25,-21.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgZArQgKgGgGgLQgFgLgBgPQABgOAFgLQAGgLAKgHQAJgGANAAQATAAAMARIAAgPIAUAAIAABfIgUAAIAAgPQgMARgTAAQgNAAgJgHgAgTgVQgHAJAAAMQAAAOAHAIQAJAIALAAQALAAAIgIQAGgIAAgOQAAgNgGgIQgIgIgLAAQgLAAgJAIg");
	this.shape_4.setTransform(-51.75,-19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AAXBGIAAg0QgBgNgFgFQgGgHgLAAQgJAAgGAHQgGAGAAAMIAAA0IgVAAIAAiLIAVAAIAAA5QAFgHAHgEQAHgDAJAAQAQAAAKALQAKALAAASIAAA4g");
	this.shape_5.setTransform(-62.65,-21.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgUAsQgMgGgGgLQgGgMAAgPQAAgOAFgLQAGgLAKgHQALgGAMAAQANAAAKAGQALAGAFALQAGALAAAOIAAAIIhEAAQACAMAIAGQAIAGALAAQAIAAAIgDQAIgCAGgEIAGASQgHAFgKACQgJADgLAAQgOAAgLgGgAAZgIQgCgLgGgGQgGgGgLAAQgIAAgHAGQgGAGgCALIAwAAIAAAAg");
	this.shape_6.setTransform(-73.525,-19.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgpA6IAFgTQAHAEAIADQAIACAJAAQAPAAAHgIQAJgHgBgPIAAgFQgLAPgSAAQgNAAgKgGQgJgGgGgLQgFgKgBgOQABgOAFgKQAGgLAJgGQAKgGANAAQATAAAMAQIAAgOIAUAAIAABUQAAAWgOANQgNAMgYAAQgVAAgRgJgAgTgnQgHAIAAAMQAAANAHAHQAIAIALAAQANAAAGgIQAIgGgBgOQABgNgIgHQgGgIgNAAQgLAAgIAIg");
	this.shape_7.setTransform(-84.8,-17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgJA2QgHgIAAgOIAAguIgNAAIAAgUIANAAIAAgXIATgEIAAAbIAaAAIAAAUIgaAAIAAArQAAAOANAAQAGAAAFgCIADASQgIADgKAAQgNAAgIgIg");
	this.shape_8.setTransform(-98.075,-20.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgjArIAFgTQAMAHAPAAQAIAAAFgDQAGgDAAgFQgBgEgEgCQgEgDgIgCIgRgGQgGgCgEgFQgFgGAAgKQAAgOAJgHQAKgIAQAAIAQACIAPAFIgGASQgLgGgOAAQgHAAgEACQgDADAAAEQAAAFAEADQAFACAJADIAPAFQAGADAFAFQAEAFAAAKQAAAOgLAIQgKAIgSAAQgSAAgOgHg");
	this.shape_9.setTransform(-105.6,-19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgaArQgJgGgGgLQgFgLgBgPQABgOAFgLQAGgLAJgHQALgGAMAAQATAAAMARIAAgPIAUAAIAABfIgUAAIAAgPQgMARgTAAQgMAAgLgHgAgTgVQgHAJAAAMQAAAOAHAIQAJAIAKAAQAMAAAIgIQAGgIAAgOQAAgNgGgIQgIgIgMAAQgKAAgJAIg");
	this.shape_10.setTransform(-115.75,-19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgnBDIAAiFIAXAAIAABwIA4AAIAAAVg");
	this.shape_11.setTransform(-125.425,-21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(-133,-35.7,266,46.7), null);


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

	// Layer_1
	this.instance = new lib.Breaking();
	this.instance.setTransform(-157.5,-259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-259.5,315,519);


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
	mask.graphics.p("ApIBkIAAjHISRAAIAADHg");
	mask.setTransform(0,-13);

	// copy1
	this.copy1 = new lib.promocopy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(0,-12.5);

	var maskedShapeInstanceList = [this.copy1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApIBfIAAi9ISRAAIAAC9g");
	mask_1.setTransform(0,8.5);

	// copy2
	this.copy2 = new lib.promocopy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(-0.05,3.65,1,1,0,0,0,6.2,-4.5);

	var maskedShapeInstanceList = [this.copy2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD25C").s().p("ApUJXIAAytISqAAIAAStg");
	this.shape.setTransform(0.25,-2.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promoMC, new cjs.Rectangle(-59.5,-62.4,124.5,122), null);


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
	this.instance.setTransform(1723.35,540.1,0.7383,1,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.7382,x:1711.0574,y:539.9988},0).wait(1).to({scaleX:0.7381,x:1697.7621,y:539.9976},0).wait(1).to({scaleX:0.738,x:1683.2307,y:539.9962},0).wait(1).to({scaleX:0.7378,x:1667.3761,y:539.9946},0).wait(1).to({scaleX:0.7377,x:1650.1096,y:539.993},0).wait(1).to({scaleX:0.7376,x:1631.3438,y:539.9912},0).wait(1).to({scaleX:0.7374,x:1610.9966,y:539.9892},0).wait(1).to({scaleX:0.7373,x:1588.9978,y:539.9871},0).wait(1).to({scaleX:0.7371,x:1565.2969,y:539.9848},0).wait(1).to({scaleX:0.7369,x:1539.8737,y:539.9824},0).wait(1).to({scaleX:0.7367,x:1512.7502,y:539.9797},0).wait(1).to({scaleX:0.7365,x:1484.0031,y:539.977},0).wait(1).to({scaleX:0.7362,x:1453.7746,y:539.9741},0).wait(1).to({scaleX:0.736,x:1422.2774,y:539.971},0).wait(1).to({scaleX:0.7358,x:1389.7929,y:539.9679},0).wait(1).to({scaleX:0.7355,x:1356.6575,y:539.9647},0).wait(1).to({scaleX:0.7353,x:1323.2405,y:539.9615},0).wait(1).to({scaleX:0.735,x:1289.9155,y:539.9583},0).wait(1).to({scaleX:0.7348,x:1257.0323,y:539.9551},0).wait(1).to({scaleX:0.7345,x:1224.8937,y:539.9521},0).wait(1).to({scaleX:0.7343,x:1193.7421,y:539.9491},0).wait(1).to({scaleX:0.7341,x:1163.756,y:539.9462},0).wait(1).to({scaleX:0.7339,x:1135.0528,y:539.9434},0).wait(1).to({scaleX:0.7337,x:1107.6979,y:539.9408},0).wait(1).to({scaleX:0.7335,x:1081.7145,y:539.9383},0).wait(1).to({scaleX:0.7333,x:1057.0946,y:539.9359},0).wait(1).to({scaleX:0.7331,x:1033.8073,y:539.9337},0).wait(1).to({scaleX:0.733,x:1011.807,y:539.9315},0).wait(1).to({scaleX:0.7328,x:991.0385,y:539.9295},0).wait(1).to({scaleX:0.7327,x:971.4421,y:539.9277},0).wait(1).to({scaleX:0.7325,x:952.9558,y:539.9259},0).wait(1).to({scaleX:0.7324,x:935.518,y:539.9242},0).wait(1).to({scaleX:0.7323,x:919.0687,y:539.9226},0).wait(1).to({scaleX:0.7321,x:903.5502,y:539.9211},0).wait(1).to({scaleX:0.732,x:888.908,y:539.9197},0).wait(1).to({scaleX:0.7319,x:875.0907,y:539.9184},0).wait(1).to({scaleX:0.7318,x:862.05,y:539.9171},0).wait(1).to({scaleX:0.7317,x:849.7411,y:539.916},0).wait(1).to({x:838.1221,y:539.9148},0).wait(1).to({scaleX:0.7316,x:827.1543,y:539.9138},0).wait(1).to({scaleX:0.7315,x:816.8016,y:539.9128},0).wait(1).to({scaleX:0.7314,x:807.0306,y:539.9118},0).wait(1).to({x:797.8102,y:539.911},0).wait(1).to({scaleX:0.7313,x:789.1117,y:539.9101},0).wait(1).to({scaleX:0.7312,x:780.9083,y:539.9093},0).wait(1).to({x:773.1753,y:539.9086},0).wait(1).to({scaleX:0.7311,x:765.8894,y:539.9079},0).wait(1).to({x:759.0292,y:539.9072},0).wait(1).to({scaleX:0.731,x:752.5746,y:539.9066},0).wait(1).to({x:746.507,y:539.906},0).wait(1).to({scaleX:0.7309,x:740.8088,y:539.9055},0).wait(1).to({x:735.4638,y:539.905},0).wait(1).to({x:730.4567,y:539.9045},0).wait(1).to({scaleX:0.7308,x:725.7731,y:539.904},0).wait(1).to({x:721.3997,y:539.9036},0).wait(1).to({x:717.3238,y:539.9032},0).wait(1).to({scaleX:0.7307,x:713.5335,y:539.9028},0).wait(1).to({x:710.0178,y:539.9025},0).wait(1).to({x:706.766,y:539.9022},0).wait(1).to({x:703.7683,y:539.9019},0).wait(1).to({scaleX:0.7306,x:701.0154,y:539.9016},0).wait(1).to({x:698.4983,y:539.9014},0).wait(1).to({x:696.2088,y:539.9012},0).wait(1).to({x:694.1389,y:539.901},0).wait(1).to({x:692.281,y:539.9008},0).wait(1).to({x:690.6282,y:539.9006},0).wait(1).to({x:689.1735,y:539.9005},0).wait(1).to({scaleX:0.7305,x:687.9107,y:539.9004},0).wait(1).to({x:686.8336,y:539.9003},0).wait(1).to({x:685.9363,y:539.9002},0).wait(1).to({x:685.2134,y:539.9001},0).wait(1).to({x:684.6596},0).wait(1).to({x:684.2698,y:539.9},0).wait(1).to({x:684.0393},0).wait(1).to({regX:0.1,x:684.05,y:540},0).wait(1));

	// green
	this.instance_1 = new lib.square();
	this.instance_1.setTransform(1574,540,0.9457,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({scaleX:0.9365,x:1559.4535},0).wait(1).to({scaleX:0.9262,x:1543.2772},0).wait(1).to({scaleX:0.9149,x:1525.3361},0).wait(1).to({scaleX:0.9024,x:1505.4843},0).wait(1).to({scaleX:0.8885,x:1483.5674},0).wait(1).to({scaleX:0.8732,x:1459.424},0).wait(1).to({scaleX:0.8565,x:1432.8919},0).wait(1).to({scaleX:0.8381,x:1403.815},0).wait(1).to({scaleX:0.818,x:1372.0565},0).wait(1).to({scaleX:0.7962,x:1337.5154},0).wait(1).to({scaleX:0.7726,x:1300.15},0).wait(1).to({scaleX:0.7472,x:1260.0045},0).wait(1).to({scaleX:0.7201,x:1217.238},0).wait(1).to({scaleX:0.6916,x:1172.1466},0).wait(1).to({scaleX:0.6619,x:1125.1716},0).wait(1).to({scaleX:0.6314,x:1076.8846},0).wait(1).to({scaleX:0.6005,x:1027.9454},0).wait(1).to({scaleX:0.5696,x:979.0416},0).wait(1).to({scaleX:0.5391,x:930.8221},0).wait(1).to({scaleX:0.5094,x:883.8434},0).wait(1).to({scaleX:0.4807,x:838.5382},0).wait(1).to({scaleX:0.4534,x:795.2078},0).wait(1).to({scaleX:0.4273,x:754.0336},0).wait(1).to({scaleX:0.4027,x:715.0978},0).wait(1).to({scaleX:0.3795,x:678.4079},0).wait(1).to({scaleX:0.3577,x:643.9187},0).wait(1).to({scaleX:0.3373,x:611.5505},0).wait(1).to({scaleX:0.3181,x:581.2035},0).wait(1).to({scaleX:0.3001,x:552.7673},0).wait(1).to({scaleX:0.2833,x:526.1285},0).wait(1).to({scaleX:0.2675,x:501.1745},0).wait(1).to({scaleX:0.2527,x:477.7969},0).wait(1).to({scaleX:0.2389,x:455.8928},0).wait(1).to({scaleX:0.2259,x:435.3657},0).wait(1).to({scaleX:0.2137,x:416.1258},0).wait(1).to({scaleX:0.2023,x:398.0901},0).wait(1).to({scaleX:0.1916,x:381.1818},0).wait(1).to({scaleX:0.1816,x:365.3304},0).wait(1).to({scaleX:0.1722,x:350.471},0).wait(1).to({scaleX:0.1634,x:336.5437},0).wait(1).to({scaleX:0.1552,x:323.4936},0).wait(1).to({scaleX:0.1474,x:311.2704},0).wait(1).to({scaleX:0.1402,x:299.8272},0).wait(1).to({scaleX:0.1334,x:289.1214},0).wait(1).to({scaleX:0.1271,x:279.1133},0).wait(1).to({scaleX:0.1212,x:269.7662},0).wait(1).to({scaleX:0.1157,x:261.0463},0).wait(1).to({scaleX:0.1106,x:252.9223},0).wait(1).to({scaleX:0.1058,x:245.3651},0).wait(1).to({scaleX:0.1013,x:238.3475},0).wait(1).to({scaleX:0.0972,x:231.8444},0).wait(1).to({scaleX:0.0934,x:225.8324},0).wait(1).to({scaleX:0.0899,x:220.2896},0).wait(1).to({scaleX:0.0867,x:215.1955},0).wait(1).to({scaleX:0.0838,x:210.531},0).wait(1).to({scaleX:0.0811,x:206.2782},0).wait(1).to({scaleX:0.0786,x:202.4203},0).wait(1).to({scaleX:0.0764,x:198.9415},0).wait(1).to({scaleX:0.0745,x:195.827},0).wait(1).to({scaleX:0.0727,x:193.0628},0).wait(1).to({scaleX:0.0712,x:190.6357},0).wait(1).to({scaleX:0.0698,x:188.5334},0).wait(1).to({scaleX:0.0687,x:186.744},0).wait(1).to({scaleX:0.0678,x:185.2566},0).wait(1).to({scaleX:0.067,x:184.0607},0).wait(1).to({scaleX:0.0664,x:183.1462},0).wait(1).to({scaleX:0.066,x:182.5038},0).wait(1).to({scaleX:0.0658,x:182.1246},0).wait(1).to({scaleX:0.0657,x:182},0).wait(7));

	// blue
	this.instance_2 = new lib.square();
	this.instance_2.setTransform(1410.95,540,0.8565,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(1).to({scaleX:0.8381,x:1379.0591},0).wait(1).to({scaleX:0.818,x:1344.2271},0).wait(1).to({scaleX:0.7962,x:1306.3432},0).wait(1).to({scaleX:0.7725,x:1265.3617},0).wait(1).to({scaleX:0.7472,x:1221.3311},0).wait(1).to({scaleX:0.7201,x:1174.4257},0).wait(1).to({scaleX:0.6916,x:1124.9704},0).wait(1).to({scaleX:0.6619,x:1073.4494},0).wait(1).to({scaleX:0.6314,x:1020.4893},0).wait(1).to({scaleX:0.6005,x:966.8139},0).wait(1).to({scaleX:0.5696,x:913.1772},0).wait(1).to({scaleX:0.5391,x:860.2911},0).wait(1).to({scaleX:0.5094,x:808.766},0).wait(1).to({scaleX:0.4807,x:759.0763},0).wait(1).to({scaleX:0.4534,x:711.5525},0).wait(1).to({scaleX:0.4273,x:666.3935},0).wait(1).to({scaleX:0.4027,x:623.6896},0).wait(1).to({scaleX:0.3795,x:583.449},0).wait(1).to({scaleX:0.3577,x:545.622},0).wait(1).to({scaleX:0.3373,x:510.1213},0).wait(1).to({scaleX:0.3181,x:476.8374},0).wait(1).to({scaleX:0.3001,x:445.6493},0).wait(1).to({scaleX:0.2833,x:416.4324},0).wait(1).to({scaleX:0.2675,x:389.0634},0).wait(1).to({scaleX:0.2527,x:363.4234},0).wait(1).to({scaleX:0.2389,x:339.3994},0).wait(1).to({scaleX:0.2259,x:316.8858},0).wait(1).to({scaleX:0.2137,x:295.7839},0).wait(1).to({scaleX:0.2023,x:276.0027},0).wait(1).to({scaleX:0.1916,x:257.4581},0).wait(1).to({scaleX:0.1816,x:240.0727},0).wait(1).to({scaleX:0.1722,x:223.7752},0).wait(1).to({scaleX:0.1634,x:208.5},0).wait(1).to({scaleX:0.1552,x:194.187},0).wait(1).to({scaleX:0.1474,x:180.7808},0).wait(1).to({scaleX:0.1402,x:168.2303},0).wait(1).to({scaleX:0.1334,x:156.4884},0).wait(1).to({scaleX:0.1271,x:145.5116},0).wait(1).to({scaleX:0.1212,x:135.26},0).wait(1).to({scaleX:0.1157,x:125.6962},0).wait(1).to({scaleX:0.1106,x:116.786},0).wait(1).to({scaleX:0.1058,x:108.4974},0).wait(1).to({scaleX:0.1013,x:100.8006},0).wait(1).to({scaleX:0.0972,x:93.6682},0).wait(1).to({scaleX:0.0934,x:87.0744},0).wait(1).to({scaleX:0.0899,x:80.9951},0).wait(1).to({scaleX:0.0867,x:75.408},0).wait(1).to({scaleX:0.0838,x:70.2921},0).wait(1).to({scaleX:0.0811,x:65.6278},0).wait(1).to({scaleX:0.0786,x:61.3965},0).wait(1).to({scaleX:0.0764,x:57.5811},0).wait(1).to({scaleX:0.0745,x:54.1651},0).wait(1).to({scaleX:0.0727,x:51.1334},0).wait(1).to({scaleX:0.0712,x:48.4714},0).wait(1).to({scaleX:0.0698,x:46.1657},0).wait(1).to({scaleX:0.0687,x:44.2032},0).wait(1).to({scaleX:0.0678,x:42.5718},0).wait(1).to({scaleX:0.067,x:41.2601},0).wait(1).to({scaleX:0.0664,x:40.2572},0).wait(1).to({scaleX:0.066,x:39.5526},0).wait(1).to({scaleX:0.0658,x:39.1367},0).wait(1).to({scaleX:0.0657,x:39},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-0.1,2207.5,1080.1);


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
	this.logoBlue.setTransform(0,0,0.85,0.8489);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,22.6);


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


(lib.ctado = function(mode,startPosition,loop,reversed) {
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


(lib.copyDo = function(mode,startPosition,loop,reversed) {
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

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask_1.setTransform(0,4);

	// line2
	this.copy_2 = new lib.copyDo_2();
	this.copy_2.name = "copy_2";
	this.copy_2.setTransform(0,40);

	var maskedShapeInstanceList = [this.copy_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy_2).wait(1));

	// mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwtCWIAAkrMAhbAAAIAAErg");
	mask_2.setTransform(-25,34);

	// Layer_4
	this.copy_3 = new lib.copyDo_3();
	this.copy_3.name = "copy_3";
	this.copy_3.setTransform(0,40.5,1,1,0,0,0,0,0.5);

	var maskedShapeInstanceList = [this.copy_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo, new cjs.Rectangle(-133,-10.8,266,59.8), null);


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
	mask_1.setTransform(0,16);

	// line2
	this.copy2_2 = new lib.copy2_2();
	this.copy2_2.name = "copy2_2";
	this.copy2_2.setTransform(20.05,-7,1,1,0,0,0,-0.1,-6.7);

	var maskedShapeInstanceList = [this.copy2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-113,-26,246,60), null);


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

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask_1.setTransform(0,8.5);

	// line2
	this.copy1_2 = new lib.copy1_2();
	this.copy1_2.name = "copy1_2";
	this.copy1_2.setTransform(0,29.5);
	this.copy1_2.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-133,-4.7,266,31.2), null);


(lib.morph = function(mode,startPosition,loop,reversed) {
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
	this.frame_217 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(217).call(this.frame_217).wait(1));

	// Layer_11_copy
	this.instance = new lib.crowbar_1("synched",0);
	this.instance.setTransform(-2319.65,463.5,2.9999,2.9999,19.2486,0,0,-114.3,37.3);

	this.instance_1 = new lib.crowbar_front("synched",0);
	this.instance_1.setTransform(-358.8,114.9,2.9999,2.9999,-2.9509,0,0,-114,32.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:3,rotation:18.4717,x:-1879.7391,y:452.3996},0).wait(1).to({scaleY:2.9999,rotation:17.71,x:-1802.0985,y:434.2692},0).wait(1).to({rotation:16.9645,x:-1726.1613,y:416.5226},0).wait(1).to({scaleY:3,rotation:16.235,x:-1651.9236,y:399.1604},0).wait(1).to({scaleY:2.9999,rotation:15.5216,x:-1579.3815,y:382.1834},0).wait(1).to({rotation:14.824,x:-1508.4912,y:365.5828},0).wait(1).to({rotation:14.1428,x:-1439.329,y:349.3776},0).wait(1).to({scaleY:3,rotation:13.4774,x:-1371.8112,y:333.5497},0).wait(1).to({rotation:12.828,x:-1305.9744,y:318.1085},0).wait(1).to({scaleY:2.9999,rotation:12.1944,x:-1241.7752,y:303.0452},0).wait(1).to({rotation:11.5773,x:-1179.2898,y:288.3783},0).wait(1).to({rotation:10.9759,x:-1118.4353,y:274.0895},0).wait(1).to({rotation:10.3906,x:-1059.2484,y:260.188},0).wait(1).to({rotation:9.8218,x:-1001.7656,y:246.6832},0).wait(1).to({scaleY:3,rotation:9.2683,x:-945.8648,y:233.5471},0).wait(1).to({scaleY:2.9999,rotation:8.7313,x:-891.6621,y:220.8074},0).wait(1).to({rotation:8.21,x:-839.0754,y:208.4454},0).wait(1).to({rotation:7.7053,x:-788.181,y:196.4795},0).wait(1).to({rotation:7.2162,x:-738.8972,y:184.891},0).wait(1).to({scaleY:3,rotation:6.7432,x:-691.261,y:173.6887},0).wait(1).to({scaleY:2.9999,rotation:6.286,x:-645.2302,y:162.8632},0).wait(1).to({scaleY:3,rotation:5.8453,x:-600.8816,y:152.4328},0).wait(1).to({scaleY:2.9999,rotation:5.4202,x:-558.1339,y:142.3785},0).wait(1).to({scaleY:3,rotation:5.0117,x:-517.0637,y:132.7186},0).wait(1).to({scaleY:2.9999,rotation:4.6189,x:-477.59,y:123.4341},0).wait(1).to({scaleY:3,rotation:4.2418,x:-439.7108,y:114.5247},0).wait(1).to({rotation:3.8812,x:-403.5029,y:106.0086},0).wait(1).to({scaleY:2.9999,rotation:3.5363,x:-368.8858,y:97.8668},0).wait(1).to({scaleY:3,rotation:3.2079,x:-335.9363,y:90.1176},0).wait(1).to({rotation:2.8952,x:-304.574,y:82.7419},0).wait(1).to({scaleY:2.9999,rotation:2.5986,x:-274.8366,y:75.7488},0).wait(1).to({scaleY:3,rotation:2.3177,x:-246.6834,y:69.1285},0).wait(1).to({rotation:2.0534,x:-220.1915,y:62.8993},0).wait(1).to({scaleY:2.9999,rotation:1.8047,x:-195.2809,y:57.0422},0).wait(1).to({scaleY:3,rotation:1.5722,x:-171.9897,y:51.5662},0).wait(1).to({scaleX:3,rotation:1.3557,x:-150.3167,y:46.471},0).wait(1).to({scaleX:2.9999,scaleY:2.9999,rotation:1.1554,x:-130.2608,y:41.7562},0).wait(1).to({rotation:0.9711,x:-111.8209,y:37.4216},0).wait(1).to({rotation:0.8026,x:-94.9569,y:33.4577},0).wait(1).to({rotation:0.6506,x:-79.7464,y:29.8826},0).wait(1).to({scaleY:3,rotation:0.5143,x:-66.1101,y:26.6777},0).wait(1).to({rotation:0.3941,x:-54.0867,y:23.852},0).wait(1).to({rotation:0.2896,x:-43.6362,y:21.396},0).wait(1).to({scaleY:2.9999,rotation:0.2016,x:-34.8366,y:19.3281},0).wait(1).to({rotation:0.1293,x:-27.609,y:17.6297},0).wait(1).to({rotation:0.0731,x:-21.9923,y:16.3098},0).wait(1).to({rotation:0.0331,x:-17.9861,y:15.3685},0).wait(1).to({rotation:0.0091,x:-15.5904,y:14.8055},0).wait(1).to({rotation:0.0009,x:-14.7656,y:14.6117},0).wait(1).to({regX:-113.9,regY:37.7,scaleX:2.9998,rotation:-0.0828,x:-358.15,y:125.8},0).wait(1).to({regX:0,regY:0,scaleX:2.9999,rotation:-0.203,x:-16.834,y:11.482},0).wait(1).to({scaleY:3,rotation:-0.3225,x:-17.0731,y:10.7704},0).wait(1).to({rotation:-0.442,x:-17.3138,y:10.0594},0).wait(1).to({scaleX:3,rotation:-0.5615,x:-17.5559,y:9.3488},0).wait(1).to({scaleX:2.9999,rotation:-0.681,x:-17.7995,y:8.6388},0).wait(1).to({scaleY:2.9999,rotation:-0.8005,x:-18.0446,y:7.9292},0).wait(1).to({rotation:-0.92,x:-18.2911,y:7.2202},0).wait(1).to({rotation:-1.0395,x:-18.5392,y:6.5117},0).wait(1).to({scaleX:3,scaleY:3,rotation:-1.159,x:-18.7887,y:5.8037},0).wait(1).to({rotation:-1.2785,x:-19.0397,y:5.0962},0).wait(1).to({scaleX:2.9999,rotation:-1.398,x:-19.2921,y:4.3892},0).wait(1).to({rotation:-1.5175,x:-19.5461,y:3.6828},0).wait(1).to({scaleY:2.9999,rotation:-1.637,x:-19.8015,y:2.9769},0).wait(1).to({rotation:-1.7565,x:-20.0584,y:2.2716},0).wait(1).to({rotation:-1.876,x:-20.3167,y:1.5668},0).wait(1).to({scaleY:3,rotation:-1.9955,x:-20.5765,y:0.8625},0).wait(1).to({rotation:-2.115,x:-20.8378,y:0.1587},0).wait(1).to({rotation:-2.2345,x:-21.1006,y:-0.5445},0).wait(1).to({scaleX:3,rotation:-2.354,x:-21.3648,y:-1.2471},0).wait(1).to({scaleX:2.9999,rotation:-2.4735,x:-21.6305,y:-1.9492},0).wait(1).to({scaleY:2.9999,rotation:-2.593,x:-21.8977,y:-2.6507},0).wait(1).to({rotation:-2.7125,x:-22.1663,y:-3.3517},0).wait(1).to({rotation:-2.832,x:-22.4364,y:-4.0521},0).to({_off:true},1).wait(86).to({_off:false,regX:-104,regY:40.2,scaleX:2.8913,scaleY:2.8914,rotation:30.7473,x:-310.2,y:160.1},0).wait(1).to({regX:0,regY:0,scaleX:2.8914,scaleY:2.8915,rotation:30.4754,x:11.4839,y:213.0639},0).wait(1).to({scaleX:2.8913,rotation:30.2032,x:15.3064,y:213.4154},0).wait(1).to({rotation:29.9309,x:19.1217,y:215.0163},0).wait(1).to({scaleX:2.8914,rotation:29.6587,x:22.9299,y:217.8665},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:29.3865,x:26.7308,y:221.9502},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:29.1143,x:30.5245,y:227.2834},0).wait(1).to({scaleX:2.8913,rotation:28.8421,x:34.311,y:233.866},0).wait(1).to({scaleY:2.8914,rotation:28.5699,x:38.0903,y:241.6902},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:28.2976,x:41.8623,y:250.756},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:28.0254,x:45.6272,y:261.0634},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:27.7532,x:49.3848,y:272.6204},0).wait(1).to({rotation:27.481,x:53.1352,y:285.4271},0).wait(1).to({scaleX:2.8913,rotation:27.2088,x:56.8784,y:299.4676},0).wait(1).to({scaleX:2.8914,rotation:26.9366,x:60.6143,y:314.7657},0).wait(1).to({scaleX:2.8913,rotation:26.6643,x:64.343,y:331.2977},0).wait(1).to({scaleX:2.8914,rotation:26.3921,x:68.0644,y:349.0794},0).wait(1).to({rotation:26.1199,x:71.7786,y:368.103},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:25.8477,x:75.4855,y:388.3765},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:25.5755,x:79.1852,y:409.8919},0).wait(1).to({scaleX:2.8913,rotation:25.3032,x:82.8777,y:432.6493},0).wait(1).to({scaleY:2.8914,rotation:25.031,x:86.5628,y:456.6567},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:24.7588,x:90.2407,y:481.906},0).wait(1).to({scaleX:2.8913,rotation:24.4866,x:93.9114,y:508.4054},0).wait(1).to({scaleX:2.8914,rotation:24.2144,x:97.5747,y:536.147},0).wait(1).to({rotation:23.9422,x:101.2309,y:565.1306},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:23.6699,x:104.8797,y:595.3564},0).wait(1).to({scaleY:2.8915,rotation:23.3977,x:108.5213,y:626.8404},0).wait(1).to({scaleX:2.8914,rotation:23.1255,x:112.1556,y:580.9927},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:22.8533,x:115.7826,y:541.9708},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:22.5811,x:119.4023,y:509.7586},0).wait(1).to({rotation:22.3089,x:123.0148,y:484.3721},0).wait(1).to({scaleX:2.8913,rotation:22.0366,x:126.62,y:465.7955},0).wait(1).to({scaleX:2.8914,rotation:21.7644,x:130.2179,y:454.0368},0).wait(1).to({rotation:21.4922,x:133.8085,y:449.096},0).wait(1).to({scaleX:2.8913,rotation:21.22,x:137.3919,y:450.973},0).wait(1).to({scaleX:2.8914,rotation:20.9478,x:140.968,y:459.6681},0).wait(1).to({rotation:20.6756,x:144.5368,y:475.1811},0).wait(1).to({scaleX:2.8913,rotation:20.4033,x:148.0983,y:497.5042},0).wait(1).to({scaleX:2.8914,rotation:20.1311,x:151.6526,y:526.6533},0).wait(1).to({scaleX:2.8913,rotation:19.8589,x:155.1995,y:562.6125},0).wait(1).to({scaleX:2.8914,rotation:19.5867,x:158.7392,y:605.3979},0).wait(1).to({rotation:19.3145,x:162.2716,y:579.5896},0).wait(1).to({scaleX:2.8913,rotation:19.0422,x:165.7968,y:559.8508},0).wait(1).to({scaleX:2.8914,rotation:18.77,x:169.3147,y:546.1895},0).wait(1).to({rotation:18.4978,x:172.8253,y:538.5898},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:18.2256,x:176.3286,y:537.0597},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:17.9534,x:179.8246,y:541.5993},0).wait(1).to({rotation:17.6812,x:183.3134,y:552.2005},0).wait(1).to({scaleX:2.8913,rotation:17.4089,x:186.795,y:568.8794},0).wait(1).to({rotation:17.1367,x:190.2692,y:591.6281},0).wait(1).to({scaleX:2.8914,rotation:16.8645,x:193.7362,y:579.029},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:16.5923,x:197.196,y:570.1182},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:16.3201,x:200.6485,y:564.9037},0).wait(1).to({rotation:16.0479,x:204.0937,y:563.3775},0).wait(1).to({scaleX:2.8913,rotation:15.7756,x:207.5317,y:565.5398},0).wait(1).to({rotation:15.5034,x:210.9624,y:571.3984},0).wait(1).to({scaleX:2.8914,rotation:15.2312,x:214.3859,y:580.9456},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.9762,scaleY:2.9762,rotation:-2.8777,x:-24.607,y:0.0204},0).wait(1).to({scaleX:2.9535,scaleY:2.9535,rotation:-2.6503,x:-25.9275,y:1.9861},0).wait(1).to({scaleX:2.9319,scaleY:2.932,rotation:-2.256,x:-26.3302,y:4.7126},0).wait(1).to({scaleX:2.9113,scaleY:2.9113,rotation:-1.6875,x:-25.8519,y:8.2368},0).wait(1).to({scaleX:2.8916,scaleY:2.8917,rotation:-0.9329,x:-24.5243,y:12.623},0).wait(1).to({scaleX:2.8729,scaleY:2.873,rotation:0.0196,x:-22.4037,y:17.9417},0).wait(1).to({scaleX:2.8552,scaleY:2.8552,rotation:1.1773,x:-19.5723,y:24.2427},0).wait(1).to({scaleX:2.8382,scaleY:2.8382,rotation:2.5506,x:-16.1227,y:31.5952},0).wait(1).to({scaleX:2.8221,scaleY:2.8222,rotation:4.1425,x:-12.1748,y:40.0275},0).wait(1).to({scaleX:2.8068,scaleY:2.8069,rotation:5.9529,x:-7.8723,y:49.5527},0).wait(1).to({scaleX:2.7922,scaleY:2.7923,rotation:7.9789,x:-3.3755,y:60.1649},0).wait(1).to({scaleX:2.7785,scaleY:2.7786,rotation:10.2072,x:1.1415,y:71.7945},0).wait(1).to({scaleX:2.7654,scaleY:2.7655,rotation:12.6157,x:5.4901,y:84.3168},0).wait(1).to({scaleX:2.753,scaleY:2.7531,rotation:15.1748,x:9.5009,y:97.5562},0).wait(1).to({scaleX:2.7412,scaleY:2.7413,rotation:17.8432,x:13.0233,y:111.2651},0).wait(1).to({scaleX:2.7299,scaleY:2.73,rotation:20.5736,x:15.9583,y:125.1572},0).wait(1).to({scaleX:2.7194,scaleY:2.7194,rotation:23.3143,x:18.2493,y:138.9263},0).wait(1).to({scaleX:2.7092,scaleY:2.7093,rotation:26.0137,x:19.9055,y:152.271},0).wait(1).to({scaleX:2.6997,scaleY:2.6997,rotation:28.6215,x:20.9781,y:164.915},0).wait(1).to({scaleX:2.6906,scaleY:2.6907,rotation:31.0964,x:21.5632,y:176.645},0).wait(1).to({scaleX:2.6819,scaleY:2.682,rotation:33.406,x:21.7662,y:187.3143},0).wait(1).to({scaleX:2.6736,scaleY:2.6737,rotation:35.5265,x:21.7004,y:196.8363},0).wait(1).to({scaleX:2.6656,scaleY:2.6657,rotation:37.4417,x:21.4661,y:205.1751},0).wait(1).to({scaleX:2.6581,scaleY:2.6582,rotation:39.1473,x:21.1417,y:212.3601},0).wait(1).to({scaleX:2.6508,scaleY:2.6509,rotation:40.6388,x:20.7954,y:218.4236},0).wait(1).to({scaleX:2.6438,scaleY:2.6439,rotation:41.9235,x:20.4534,y:223.4525},0).wait(1).to({scaleX:2.637,scaleY:2.6371,rotation:43.0059,x:20.134,y:227.5178},0).wait(1).to({scaleX:2.6305,scaleY:2.6306,rotation:43.8948,x:19.84,y:230.7019},0).wait(1).to({scaleX:2.624,scaleY:2.6241,rotation:44.5992,x:19.5569,y:233.0838},0).wait(1).to({scaleX:2.6178,scaleY:2.6179,rotation:45.1294,x:19.2599,y:234.7416},0).wait(1).to({scaleX:2.6116,scaleY:2.6117,rotation:45.4956,x:18.9148,y:235.7473},0).wait(1).to({scaleX:2.6055,scaleY:2.6056,rotation:45.7097,x:18.486,y:236.1727},0).wait(1).to({scaleX:2.5994,scaleY:2.5995,rotation:45.7791,x:17.9342,y:236.065},0).wait(1).to({regX:-111.7,regY:38.2,scaleX:2.5827,scaleY:2.5828,rotation:45.2621,x:-254.1,y:93.05},0).wait(1).to({regX:0,regY:0,rotation:44.8868,x:20.102,y:226.7113},0).wait(1).to({rotation:44.512,x:21.136,y:224.916},0).wait(1).to({rotation:44.1373,x:22.1583,y:223.1151},0).wait(1).to({rotation:43.7625,x:23.1689,y:221.3086},0).wait(1).to({rotation:43.3877,x:24.1675,y:219.4966},0).wait(1).to({rotation:43.0129,x:25.1543,y:217.6793},0).wait(1).to({rotation:42.6381,x:26.1292,y:215.8566},0).wait(1).to({rotation:42.2633,x:27.0922,y:214.0286},0).wait(1).to({rotation:41.8886,x:28.0432,y:212.1955},0).wait(1).to({rotation:41.5138,x:28.9822,y:210.3573},0).wait(1).to({rotation:41.139,x:29.9091,y:208.5141},0).wait(1).to({regX:-109.7,regY:41.2,scaleX:2.5826,rotation:41.7128,x:-252.9,y:101.25},0).wait(1).to({regX:0,regY:0,scaleX:2.5827,rotation:43.2097,x:33.3174,y:218.6065},0).wait(1).to({rotation:44.5765,x:39.364,y:226.4926},0).wait(1).to({rotation:45.8146,x:47.2579,y:233.9358},0).wait(1).to({rotation:46.9225,x:56.5456,y:240.8739},0).wait(1).to({rotation:47.9017,x:66.6742,y:247.2471},0).wait(1).to({rotation:48.7515,x:76.9952,y:252.9699},0).wait(1).to({rotation:49.471,x:86.8647,y:257.9568},0).wait(1).to({rotation:50.0618,x:95.6806,y:262.1393},0).wait(1).to({rotation:50.5224,x:102.9497,y:265.4476},0).wait(1).to({rotation:50.8543,x:108.3324,y:267.8473},0).wait(1).to({scaleY:2.5829,rotation:51.0559,x:111.6158,y:269.3053},0).wait(1).to({scaleY:2.5828,rotation:51.1289,x:112.7058,y:269.8187},0).wait(1).to({regX:-109.9,regY:41,scaleX:2.5825,scaleY:2.5826,x:-147.85,y:116.15},0).wait(5).to({regX:-106.2,regY:43,scaleX:2.5827,scaleY:2.5828,rotation:50.9673,x:-145.05,y:127.85},0).wait(1).to({regX:0,regY:0,scaleX:2.5836,scaleY:2.5837,rotation:50.9038,x:113.6218,y:270.848},0).wait(1).to({scaleX:2.5865,scaleY:2.5866,rotation:50.7059,x:112.5653,y:270.5245},0).wait(1).to({scaleX:2.5914,scaleY:2.5915,rotation:50.3615,x:110.6898,y:269.9601},0).wait(1).to({scaleX:2.5987,scaleY:2.5988,rotation:49.8571,x:107.9188,y:269.1162},0).wait(1).to({scaleX:2.6084,scaleY:2.6085,rotation:49.1819,x:104.1429,y:267.96},0).wait(1).to({scaleX:2.6207,scaleY:2.6209,rotation:48.3233,x:99.2855,y:266.4332},0).wait(1).to({scaleX:2.6359,scaleY:2.636,rotation:47.2746,x:93.3039,y:264.4745},0).wait(1).to({scaleX:2.6537,scaleY:2.6538,rotation:46.0338,x:86.2086,y:262.0127},0).wait(1).to({scaleX:2.6742,scaleY:2.6743,rotation:44.6087,x:78.1353,y:258.9702},0).wait(1).to({scaleX:2.697,scaleY:2.6971,rotation:43.0236,x:69.3322,y:255.2991},0).wait(1).to({scaleX:2.7215,scaleY:2.7217,rotation:41.32,x:60.1754,y:250.9976},0).wait(1).to({scaleX:2.7469,scaleY:2.747,rotation:39.5573,x:51.1095,y:246.1433},0).wait(1).to({scaleX:2.7721,scaleY:2.7722,rotation:37.8101,x:42.5735,y:240.9216},0).wait(1).to({scaleX:2.7959,scaleY:2.796,rotation:36.1571,x:34.8725,y:235.6171},0).wait(1).to({scaleX:2.8173,scaleY:2.8174,rotation:34.666,x:28.2137,y:230.5378},0).wait(1).to({scaleX:2.8357,scaleY:2.8358,rotation:33.3864,x:22.6772,y:225.9674},0).wait(1).to({scaleX:2.8507,scaleY:2.8508,rotation:32.3464,x:18.2855,y:222.1133},0).wait(1).to({scaleX:2.8621,scaleY:2.8622,rotation:31.5558,x:14.9955,y:219.1039},0).wait(1).to({scaleX:2.8699,scaleY:2.87,rotation:31.0096,x:12.7494,y:216.9848},0).wait(1).to({scaleX:2.8744,scaleY:2.8745,rotation:30.6953,x:11.4605,y:215.7518},0).wait(1).to({scaleX:2.8759,scaleY:2.876,rotation:30.5944,x:11.0489,y:215.3537},0).to({_off:true},1).wait(58));

	// left
	this.instance_2 = new lib.square();
	this.instance_2.setTransform(144.75,3.4,0.7305,1,0,0,0,0.1,0);

	this.instance_3 = new lib.square();
	this.instance_3.setTransform(-503.3,3.4,0.0657,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{regX:0,scaleX:0.0657,x:-503.3,y:3.4,mode:"independent",startPosition:undefined}},{t:this.instance_2,p:{regX:0.1,scaleX:0.7305,x:144.75,y:3.4,mode:"independent",startPosition:undefined}}]},76).to({state:[{t:this.instance_3,p:{regX:-1.4,scaleX:0.07,x:-503.2,y:0,mode:"synched",startPosition:0}},{t:this.instance_2,p:{regX:-1.4,scaleX:0.3252,x:364.05,y:0,mode:"synched",startPosition:0}}]},44).wait(98));

	// right (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_120 = new cjs.Graphics().p("Eg9sBUYMAAAiovMB7ZAAAMAAACovg");
	var mask_graphics_121 = new cjs.Graphics().p("Eg9bBUYIgNhmIgDs9QgFs+AAsgQAAlaATlRQANkgAdknQASiKAEh9QAMh/AHh+QASkHgCkLQgClEgTlLQgGitgMi0QgGi4gOjEQgamdgNmWQgQnwAAn0QAAuuACuuIACrpIALheMBxEAAAIANAAIJ9A+MAAACmzIqIA+MhxEAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("Eg9LBUYIgYhbIgItEQgJtTAAsZQAAleAmlPQAZkXA6kjQAkiMAHh0QAYh+ANh7QAkkGgEkNQgElCgklNQgNipgXi2QgOixgbjJQgzmggYmRQghnwAAn6QAAu1AEu1IAFrxIAWhTMBx9AAAIALAAII6B6MAAACk5IpDB8Mhx9AAAg");
	var mask_graphics_123 = new cjs.Graphics().p("Eg87BUYIgkhRIgMtIQgNtoAAsTQABlkA4lLQAkkOBWkgQA1iPALhrQAih9AVh4QA0kDgFkQQgGk/g2lRQgTilgji4QgTipgpjMQhLmkgjmNQgynxAAn/QAAu8AHu8IAHr3IAhhKMByzAAAIAMAAIH4C0MAAACjFIoBC2MhyzAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("Eg8rBUYIgvhGIgRtPQgQt7AAsMQAAlpBKlJQAwkFBxkdQBFiSAPhiQAth8Abh1QBEkBgGkSQgIk+hHlUQgZiggui6QgZiig1jRQhjmmgvmJQhBnzAAoCQAAvDAJvDIAKr9IArhBMBznAAAIAMAAIG4DsMAAAChTIm/DwMhzoAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("Eg8cBUYIg6g8QgKmIgKnMQgUuPgBsGQAAltBblGQA7j9CLkaQBViVAThaQA4h5AhhzQBVj/gKkVQgJk7hXlXQgficg4i9QgfiahCjUQh5mrg6mEQhQnzAAoIQAAvJAMvKQAFmxAGlSIA1g4MB0bAAAIAMAAIF6EjMAAACflImBEnMh0bAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("Eg8OBUYIhEgzQgMmEgMnUQgYuiAAsAQAAlxBrlEQBHj1CjkXQBliXAWhSQBCh4AnhwQBkj+gKkXQgLk4hnlbQgliYhCi+QgliUhOjYQiPmthEmAQhfn1AAoLQAAvQAOvRQAGm8AHlNIA+gvMB1OAAAIALAAIAAABIE+FXMAAACd6IlEFdMh1NAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("Eg7/BUYIhPgqQgOmAgNndQgcu0AAr5QAAl3B7lBQBRjtC8kVQB0iZAZhKQBMh4AthsQBzj9gMkYQgNk2h2lfQgriThLjBQgriNhZjcQilmvhOl9Qhtn1AAoPQAAvXAPvXQAInIAIlHIBIgmMB19AAAIALAAIEEGLMAAACcTIkIGRMh19AAAg");
	var mask_graphics_128 = new cjs.Graphics().p("Eg7yBUYIhYggQgPl+gQnlQgfvFAAr0QAAl6CLk/QBbjmDTkSQCDicAchCQBVh2AzhqQCBj7gOkbQgOk0iFlhQgwiQhVjCQgwiHhkjfQi5myhZl5Qh6n2AAoUQAAvdARvcQAJnTAJlCIBRgeMB2rAAAIALAAIAAAAIDMG9MAAACavIjPHDMh2sAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("Eg7lBUYIhhgYQgSl6gRnsQgivXAAruQAAl/CZk8QBljeDqkQQCRieAfg6QBeh2A4hnQCQj6gPkdQgQkxiTllQg1iMhfjDQg1iBhvjjQjNm1hil2QiIn1AAoZQAAviAUviQAKndAKk+IBZgWMB3YAAAIALAAIAAAAICWHtMAAACZOIiZH0Mh3YAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("Eg7YBUYIhrgQQgTl1gSn2QgmvnAAroQAAmDCok5QBujYEAkNQCeigAig0QBnhzA9hmQCdj4gQkfQgRkwihlnQg7iJhmjEQg7h8h5jlQjgm4hslyQiUn3AAocQAAvoAVvoQALnnALk4IBhgPMB4EAAAIALAAIAAAAIBiIbMAAACXxIhkIjMh4DAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("Eg7MBUYIh0gIQgUlzgUn8Qgpv2AArkQAAmGC2k4QB3jREVkMQCsiiAkgsQBwhyBChjQCqj3gSkhQgTkuiulqQg/iFhvjHQg/h1iEjpQjym6h0luQihn4AAogQAAvtAYvtQALnxALk0IBqgHMB4tAAAIALAAIAAABIAwJGMAAACWYIgxJQMh4tAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("Eg88BUYQgWlwgWoDQgswGAAreQAAmLDDk1QCAjKEqkKQC3ijAognQB4hxBHhgQC2j2gTkjQgUksi7lsQhEiDh3jIIjRlbQkEm9h9lrQisn4AAokQAAvyAZvyQAMn7ANkvMB7GAAAIALAAIAAABMAAACoug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_graphics_120,x:145.2,y:0}).wait(1).to({graphics:mask_graphics_121,x:144.8,y:0}).wait(1).to({graphics:mask_graphics_122,x:144.375,y:0.05}).wait(1).to({graphics:mask_graphics_123,x:144,y:0.05}).wait(1).to({graphics:mask_graphics_124,x:143.6,y:0.1}).wait(1).to({graphics:mask_graphics_125,x:143.25,y:0.1}).wait(1).to({graphics:mask_graphics_126,x:142.875,y:0.1}).wait(1).to({graphics:mask_graphics_127,x:142.525,y:0.15}).wait(1).to({graphics:mask_graphics_128,x:142.175,y:0.15}).wait(1).to({graphics:mask_graphics_129,x:141.875,y:0.15}).wait(1).to({graphics:mask_graphics_130,x:141.575,y:0.15}).wait(1).to({graphics:mask_graphics_131,x:141.25,y:0.2}).wait(1).to({graphics:mask_graphics_132,x:140.975,y:0.2}).wait(86));

	// Layer_5
	this.instance_4 = new lib._break();
	this.instance_4.setTransform(-178.8,133.55,0.8357,0.734,18.9182,0,0,-0.1,0.2);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "multiply";
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({regX:0,regY:0,scaleX:1.3632,scaleY:1.3632,rotation:0,x:-87.75,y:120.8,alpha:1},14,cjs.Ease.sineInOut).wait(84));

	// Layer_8
	this.instance_5 = new lib.square("synched",0);
	this.instance_5.setTransform(118.75,0,0.8138,1,0,0,0,0.1,0);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120).to({_off:false},0).wait(98));

	// Layer_11_copy_copy
	this.instance_6 = new lib.crowbar_1("synched",0);
	this.instance_6.setTransform(-358.7,114.85,2.9999,2.9999,-2.9509,0,0,-114,32.9);
	this.instance_6._off = true;

	this.instance_7 = new lib.shadow();
	this.instance_7.setTransform(119.15,655.6,1,1,6.4816);
	this.instance_7.alpha = 0.1602;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.9762,scaleY:2.9762,rotation:-2.8777,x:-24.507,y:-0.0296},0).wait(1).to({scaleX:2.9535,scaleY:2.9535,rotation:-2.6503,x:-25.8275,y:1.9361},0).wait(1).to({scaleX:2.9319,scaleY:2.932,rotation:-2.256,x:-26.2302,y:4.6626},0).wait(1).to({scaleX:2.9113,scaleY:2.9113,rotation:-1.6875,x:-25.7519,y:8.1868},0).wait(1).to({scaleX:2.8916,scaleY:2.8917,rotation:-0.9329,x:-24.4243,y:12.573},0).wait(1).to({scaleX:2.8729,scaleY:2.873,rotation:0.0196,x:-22.3037,y:17.8917},0).wait(1).to({scaleX:2.8552,scaleY:2.8552,rotation:1.1773,x:-19.4723,y:24.1927},0).wait(1).to({scaleX:2.8382,scaleY:2.8382,rotation:2.5506,x:-16.0227,y:31.5452},0).wait(1).to({scaleX:2.8221,scaleY:2.8222,rotation:4.1425,x:-12.0748,y:39.9775},0).wait(1).to({scaleX:2.8068,scaleY:2.8069,rotation:5.9529,x:-7.7723,y:49.5027},0).wait(1).to({scaleX:2.7922,scaleY:2.7923,rotation:7.9789,x:-3.2755,y:60.1149},0).wait(1).to({scaleX:2.7785,scaleY:2.7786,rotation:10.2072,x:1.2415,y:71.7445},0).wait(1).to({scaleX:2.7654,scaleY:2.7655,rotation:12.6157,x:5.5901,y:84.2668},0).wait(1).to({scaleX:2.753,scaleY:2.7531,rotation:15.1748,x:9.6009,y:97.5062},0).wait(1).to({scaleX:2.7412,scaleY:2.7413,rotation:17.8432,x:13.1233,y:111.2151},0).wait(1).to({scaleX:2.7299,scaleY:2.73,rotation:20.5736,x:16.0583,y:125.1072},0).wait(1).to({scaleX:2.7194,scaleY:2.7194,rotation:23.3143,x:18.3493,y:138.8763},0).wait(1).to({scaleX:2.7092,scaleY:2.7093,rotation:26.0137,x:20.0055,y:152.221},0).wait(1).to({scaleX:2.6997,scaleY:2.6997,rotation:28.6215,x:21.0781,y:164.865},0).wait(1).to({scaleX:2.6906,scaleY:2.6907,rotation:31.0964,x:21.6632,y:176.595},0).wait(1).to({scaleX:2.6819,scaleY:2.682,rotation:33.406,x:21.8662,y:187.2643},0).wait(1).to({scaleX:2.6736,scaleY:2.6737,rotation:35.5265,x:21.8004,y:196.7863},0).wait(1).to({scaleX:2.6656,scaleY:2.6657,rotation:37.4417,x:21.5661,y:205.1251},0).wait(1).to({scaleX:2.6581,scaleY:2.6582,rotation:39.1473,x:21.2417,y:212.3101},0).wait(1).to({scaleX:2.6508,scaleY:2.6509,rotation:40.6388,x:20.8954,y:218.3736},0).wait(1).to({scaleX:2.6438,scaleY:2.6439,rotation:41.9235,x:20.5534,y:223.4025},0).wait(1).to({scaleX:2.637,scaleY:2.6371,rotation:43.0059,x:20.234,y:227.4678},0).wait(1).to({scaleX:2.6305,scaleY:2.6306,rotation:43.8948,x:19.94,y:230.6519},0).wait(1).to({scaleX:2.624,scaleY:2.6241,rotation:44.5992,x:19.6569,y:233.0338},0).wait(1).to({scaleX:2.6178,scaleY:2.6179,rotation:45.1294,x:19.3599,y:234.6916},0).wait(1).to({scaleX:2.6116,scaleY:2.6117,rotation:45.4956,x:19.0148,y:235.6973},0).wait(1).to({scaleX:2.6055,scaleY:2.6056,rotation:45.7097,x:18.586,y:236.1227},0).wait(1).to({scaleX:2.5994,scaleY:2.5995,rotation:45.7791,x:18.0342,y:236.015},0).wait(1).to({regX:-111.6,regY:38.3,scaleX:2.5827,scaleY:2.5828,rotation:45.2621,x:-254.1,y:93.2},0).wait(1).to({regX:0,regY:0,rotation:44.8868,x:20.0508,y:226.5113},0).wait(1).to({rotation:44.512,x:21.0836,y:224.716},0).wait(1).to({rotation:44.1373,x:22.1048,y:222.9151},0).wait(1).to({rotation:43.7625,x:23.1141,y:221.1086},0).wait(1).to({rotation:43.3877,x:24.1116,y:219.2967},0).wait(1).to({rotation:43.0129,x:25.0972,y:217.4794},0).wait(1).to({rotation:42.6381,x:26.0709,y:215.6567},0).wait(1).to({rotation:42.2633,x:27.0326,y:213.8289},0).wait(1).to({rotation:41.8886,x:27.9824,y:211.9958},0).wait(1).to({rotation:41.5138,x:28.9202,y:210.1577},0).wait(1).to({rotation:41.139,x:29.846,y:208.3145},0).wait(1).to({regX:-109.7,regY:41.2,scaleX:2.5826,rotation:41.7128,x:-252.95,y:101.2},0).wait(1).to({regX:0,regY:0,scaleX:2.5827,rotation:43.2097,x:33.2674,y:218.5565},0).wait(1).to({rotation:44.5765,x:39.314,y:226.4426},0).wait(1).to({rotation:45.8146,x:47.2079,y:233.8858},0).wait(1).to({rotation:46.9225,x:56.4956,y:240.8239},0).wait(1).to({rotation:47.9017,x:66.6242,y:247.1971},0).wait(1).to({rotation:48.7515,x:76.9452,y:252.9199},0).wait(1).to({rotation:49.471,x:86.8147,y:257.9068},0).wait(1).to({rotation:50.0618,x:95.6306,y:262.0893},0).wait(1).to({rotation:50.5224,x:102.8997,y:265.3976},0).wait(1).to({rotation:50.8543,x:108.2824,y:267.7973},0).wait(1).to({scaleY:2.5829,rotation:51.0559,x:111.5658,y:269.2553},0).wait(1).to({scaleY:2.5828,rotation:51.1289,x:112.6558,y:269.7687},0).wait(1).to({regX:-109.9,regY:41,scaleX:2.5825,scaleY:2.5826,x:-147.85,y:116.15},0).wait(5).to({regX:-106,regY:43.1,scaleX:2.5827,scaleY:2.5828,rotation:50.9673,x:-144.95,y:128.2},0).wait(1).to({regX:0,regY:0,scaleX:2.5836,scaleY:2.5837,rotation:50.9038,x:113.5715,y:270.648},0).wait(1).to({scaleX:2.5865,scaleY:2.5866,rotation:50.7059,x:112.5139,y:270.3244},0).wait(1).to({scaleX:2.5914,scaleY:2.5915,rotation:50.3615,x:110.6366,y:269.7599},0).wait(1).to({scaleX:2.5987,scaleY:2.5988,rotation:49.8571,x:107.8629,y:268.9157},0).wait(1).to({scaleX:2.6084,scaleY:2.6085,rotation:49.1819,x:104.0834,y:267.7592},0).wait(1).to({scaleX:2.6207,scaleY:2.6209,rotation:48.3233,x:99.2214,y:266.2323},0).wait(1).to({scaleX:2.6359,scaleY:2.636,rotation:47.2746,x:93.2342,y:264.2734},0).wait(1).to({scaleX:2.6537,scaleY:2.6538,rotation:46.0338,x:86.1322,y:261.8115},0).wait(1).to({scaleX:2.6742,scaleY:2.6743,rotation:44.6087,x:78.0511,y:258.7692},0).wait(1).to({scaleX:2.697,scaleY:2.6971,rotation:43.0236,x:69.2394,y:255.0985},0).wait(1).to({scaleX:2.7215,scaleY:2.7217,rotation:41.32,x:60.0732,y:250.7977},0).wait(1).to({scaleX:2.7469,scaleY:2.747,rotation:39.5573,x:50.9975,y:245.9445},0).wait(1).to({scaleX:2.7721,scaleY:2.7722,rotation:37.8101,x:42.4518,y:240.7241},0).wait(1).to({scaleX:2.7959,scaleY:2.796,rotation:36.1571,x:34.7415,y:235.4212},0).wait(1).to({scaleX:2.8173,scaleY:2.8174,rotation:34.666,x:28.0745,y:230.3436},0).wait(1).to({scaleX:2.8357,scaleY:2.8358,rotation:33.3864,x:22.5308,y:225.7749},0).wait(1).to({scaleX:2.8507,scaleY:2.8508,rotation:32.3464,x:18.1332,y:221.9223},0).wait(1).to({scaleX:2.8621,scaleY:2.8622,rotation:31.5558,x:14.8388,y:218.9141},0).wait(1).to({scaleX:2.8699,scaleY:2.87,rotation:31.0096,x:12.5897,y:216.7959},0).wait(1).to({scaleX:2.8744,scaleY:2.8745,rotation:30.6953,x:11.2991,y:215.5634},0).wait(1).to({scaleX:2.8759,scaleY:2.876,rotation:30.5944,x:10.8869,y:215.1654},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(160).to({_off:false},0).wait(1).to({rotation:6.5424,x:119.4035,y:655.4988,alpha:0},0).wait(1).to({rotation:6.6028,x:119.6569,y:655.3977,alpha:0.0071},0).wait(1).to({rotation:6.6633,x:119.9104,y:655.2965,alpha:0.0142},0).wait(1).to({rotation:6.7237,x:120.1639,y:655.1953,alpha:0.0213},0).wait(1).to({rotation:6.7841,x:120.4173,y:655.0942,alpha:0.0284},0).wait(1).to({rotation:6.8446,x:120.6708,y:654.993,alpha:0.0356},0).wait(1).to({rotation:6.905,x:120.9242,y:654.8919,alpha:0.0427},0).wait(1).to({rotation:6.9654,x:121.1777,y:654.7907,alpha:0.0498},0).wait(1).to({rotation:7.0258,x:121.4312,y:654.6895,alpha:0.0569},0).wait(1).to({rotation:7.0863,x:121.6846,y:654.5884,alpha:0.064},0).wait(1).to({rotation:7.1467,x:121.9381,y:654.4872,alpha:0.0711},0).wait(1).to({rotation:7.2071,x:122.1916,y:654.386,alpha:0.0782},0).wait(1).to({rotation:7.2676,x:122.445,y:654.2849,alpha:0.0853},0).wait(1).to({rotation:7.328,x:122.6985,y:654.1837,alpha:0.0924},0).wait(1).to({rotation:7.3884,x:122.952,y:654.0826,alpha:0.0996},0).wait(1).to({rotation:7.4488,x:123.2054,y:653.9814,alpha:0.1067},0).wait(1).to({rotation:7.5093,x:123.4589,y:653.8802,alpha:0.1138},0).wait(1).to({rotation:7.5697,x:123.7123,y:653.7791,alpha:0.1209},0).wait(1).to({rotation:7.6301,x:123.9658,y:653.6779,alpha:0.128},0).wait(1).to({rotation:7.6906,x:124.2193,y:653.5767,alpha:0.1351},0).wait(1).to({rotation:7.751,x:124.4727,y:653.4756,alpha:0.1422},0).wait(1).to({rotation:7.8114,x:124.7262,y:653.3744,alpha:0.1493},0).wait(1).to({rotation:7.8719,x:124.9797,y:653.2732,alpha:0.1564},0).wait(1).to({rotation:7.9323,x:125.2331,y:653.1721,alpha:0.1636},0).wait(1).to({rotation:7.9927,x:125.4866,y:653.0709,alpha:0.1707},0).wait(1).to({rotation:8.0531,x:125.7401,y:652.9698,alpha:0.1778},0).wait(1).to({rotation:8.1136,x:125.9935,y:652.8686,alpha:0.1849},0).wait(1).to({rotation:7.8594,x:129.6069,y:651.353,alpha:0.192},0).wait(1).to({rotation:7.6053,x:133.2203,y:649.8373,alpha:0.1991},0).wait(1).to({rotation:7.3512,x:136.8337,y:648.3217,alpha:0.2062},0).wait(1).to({rotation:7.097,x:140.447,y:646.806,alpha:0.2133},0).wait(1).to({rotation:6.8429,x:144.0604,y:645.2904,alpha:0.2204},0).wait(1).to({rotation:6.5888,x:147.6738,y:643.7747,alpha:0.2276},0).wait(1).to({rotation:6.3346,x:151.2872,y:642.2591,alpha:0.2347},0).wait(1).to({rotation:6.0805,x:154.9005,y:640.7435,alpha:0.2418},0).wait(1).to({rotation:5.8264,x:158.5139,y:639.2278,alpha:0.2489},0).wait(1).to({rotation:5.5722,x:162.1273,y:637.7122,alpha:0.256},0).wait(1).to({rotation:5.3181,x:165.7407,y:636.1966,alpha:0.2631},0).wait(1).to({rotation:5.064,x:169.354,y:634.6809,alpha:0.2702},0).wait(1).to({rotation:4.8098,x:172.9674,y:633.1653,alpha:0.2773},0).wait(1).to({rotation:4.5557,x:176.5808,y:631.6497,alpha:0.2844},0).wait(1).to({rotation:4.3016,x:180.1942,y:630.134,alpha:0.2916},0).wait(1).to({rotation:4.0474,x:183.8075,y:628.6184,alpha:0.2987},0).wait(1).to({rotation:3.7933,x:187.4209,y:627.1028,alpha:0.3058},0).wait(1).to({rotation:3.5392,x:191.0343,y:625.5871,alpha:0.3129},0).wait(1).to({rotation:3.285,x:194.6477,y:624.0715,alpha:0.32},0).wait(1).to({rotation:3.0309,x:198.261,y:622.5559},0).wait(1).to({rotation:2.7768,x:201.8744,y:621.0403},0).wait(1).to({rotation:2.5226,x:205.4878,y:619.5246},0).wait(1).to({rotation:2.2685,x:209.1012,y:618.009},0).wait(1).to({rotation:2.0144,x:212.7145,y:616.4934},0).wait(1).to({rotation:1.7602,x:216.3279,y:614.9778},0).wait(1).to({rotation:1.5061,x:219.9413,y:613.4622},0).wait(1).to({rotation:1.252,x:223.5547,y:611.9465},0).wait(1).to({rotation:0.9978,x:227.168,y:610.4309},0).wait(1).to({rotation:0.7437,x:230.7814,y:608.9153},0).wait(1).to({rotation:0.4896,x:234.3948,y:607.3997},0).wait(1));

	// mid (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjlDmIAAnLIHLAAIAAHLg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjpDqIAAnTIHTAAIAAHTg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Aj2D3IAAntIHtAAIAAHtg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AkLEMIAAoXIIXAAIAAIXg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AknEoIAApPIJPAAIAAJPg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlKFLIAAqVIKVAAIAAKVg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Al1F2IAArrILrAAIAALrg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmmGnIAAtNINNAAIAANNg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AneHfIAAu9IO9AAIAAO9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AocIdIAAw5IQ5AAIAAQ5g");
	var mask_1_graphics_10 = new cjs.Graphics().p("ApgJhIAAzBITBAAIAATBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AqpKqIAA1TIVTAAIAAVTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ar3L4IAA3vIXvAAIAAXvg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AtKNLIAA6VIaVAAIAAaVg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AuiOjIAA9FIdFAAIAAdFg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Av+P/IAA/9If9AAIAAf9g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AxfRgMAAAgi/MAi/AAAMAAAAi/g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AzDTEMAAAgmHMAmHAAAMAAAAmHg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A0qUrMAAAgpVMApVAAAMAAAApVg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A2VWWMAAAgsrMAsrAAAMAAAAsrg");
	var mask_1_graphics_20 = new cjs.Graphics().p("A4DYEMAAAgwHMAwHAAAMAAAAwHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A5zZ0MAAAgznMAznAAAMAAAAzng");
	var mask_1_graphics_22 = new cjs.Graphics().p("A7mbnMAAAg3NMA3NAAAMAAAA3Ng");
	var mask_1_graphics_23 = new cjs.Graphics().p("A9bdcMAAAg63MA63AAAMAAAA63g");
	var mask_1_graphics_24 = new cjs.Graphics().p("A/SfTMAAAg+lMA+lAAAMAAAA+lg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EghKAhLMAAAhCVMBCVAAAMAAABCVg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgjEAjFMAAAhGJMBGJAAAMAAABGJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Egk+Ak/MAAAhJ9MBJ9AAAMAAABJ9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("Egm6Am7MAAAhN1MBN1AAAMAAABN1g");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ego2Ao3MAAAhRtMBRtAAAMAAABRtg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgqzAq0MAAAhVnMBVnAAAMAAABVng");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgsvAswMAAAhZfMBZfAAAMAAABZfg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgusAutMAAAhdZMBdZAAAMAAABdZg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgwoAwpMAAAhhRMBhRAAAMAAABhRg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgyjAykMAAAhlHMBlHAAAMAAABlHg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Eg0dA0eMAAAho7MBo7AAAMAAABo7g");
	var mask_1_graphics_36 = new cjs.Graphics().p("Eg2WA2XMAAAhstMBstAAAMAAABstg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Eg4OA4PMAAAhwdMBwdAAAMAAABwdg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Eg6DA6EMAAAh0HMB0HAAAMAAAB0Hg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Eg73A74MAAAh3vMB3vAAAMAAAB3vg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg9pA9qMAAAh7TMB7TAAAMAAAB7Tg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Eg/YA/ZMAAAh+xMB+xAAAMAAAB+xg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EhBFBBGMAAAiCLMCCLAAAMAAACCLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EhCvBCwMAAAiFfMCFfAAAMAAACFfg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EhEVBEWMAAAiIrMCIrAAAMAAACIrg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EhF4BF5MAAAiLxMCLxAAAMAAACLxg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EhHYBHZMAAAiOxMCOxAAAMAAACOxg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EhIzBI0MAAAiRnMCRnAAAMAAACRng");
	var mask_1_graphics_48 = new cjs.Graphics().p("EhKLBKMMAAAiUXMCUXAAAMAAACUXg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EhLeBLfMAAAiW9MCW9AAAMAAACW9g");
	var mask_1_graphics_50 = new cjs.Graphics().p("EhMsBMtMAAAiZZMCZZAAAMAAACZZg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EhN1BN2MAAAibrMCbrAAAMAAACbrg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EhO6BO7MAAAid1MCd1AAAMAAACd1g");
	var mask_1_graphics_53 = new cjs.Graphics().p("EhP5BP6MAAAifzMCfzAAAMAAACfzg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EhQyBQzMAAAihlMChlAAAMAAAChlg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EhRmBRnMAAAijNMCjNAAAMAAACjNg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EhSTBSUMAAAiknMCknAAAMAAACkng");
	var mask_1_graphics_57 = new cjs.Graphics().p("EhS7BS8MAAAil3MCl3AAAMAAACl3g");
	var mask_1_graphics_58 = new cjs.Graphics().p("EhTbBTcMAAAim3MCm3AAAMAAACm3g");
	var mask_1_graphics_59 = new cjs.Graphics().p("EhT1BT2MAAAinrMCnrAAAMAAACnrg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EhUIBUJMAAAioRMCoRAAAMAAACoRg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EhUTBUUMAAAionMConAAAMAAACong");
	var mask_1_graphics_62 = new cjs.Graphics().p("EhUXBUYMAAAiovMCovAAAMAAACovg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgF5BUYMAAAiovILzAAMAAACovg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EgEnBUYIgUgIQACm+AAnXQACtFgIqXQgHncgfnxQgQjUgGipQgLiogEiSQgDiAAFiCQADhpAJh5QALh/ADhlQAGh8gCh5QgCh0gHhzQgEhdgMh3Qgak+gKk+QgHjeAMjZQAEioAcj4QAZkxANkuQATnVACn4QAEviAIzRIAUgIILFAAIAMAFQgIPmgDNzQgEN9g0MNQgYDggJCxQgPCtACCmQACD5ALDkQAHCVAPCZQASCaAEBrQAKCbADCjQADCFgDB0QgBBCgHBMQgQD2gCEcQgBDrAMD+QADDFAWEgQAQEKAFDoQAGD5gJDpQgLIFAMLyQAGH2AIHoIgMAFIrFAAg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EgD+BUYIgOgPQADm1ABngQACuDgNpSQgNnTg1n5QgcjhgLiYQgUiugGiJQgGiAAIiCQAGhkARh+QASiJAFhaQALh9gDh3QgEh0gNhzQgGhSgWiBQgsk8gSk9QgNjeAVjYQAHiLAxkWQAskxAXkqQAhnHAFoIQAHuMAN0wIAOgPILFAAIAIAIQgOQRgFNFQgIOjhaLgQgrDwgQCbQgZCwACCkQAFD+ASDdQANCTAZCZQAhCrAGBWQATCYAFCmQAFCLgFBsQgDA/gMBPQgdDqgDEqQgCDkAVEHQAHCkAmFEQAcEVAIDbQAMD+gRDkQgTGyAVNRQAKH8APHjIgIAJIrFAAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EgDhBUYIgJgUQAEmvACnnQACuwgQoeQgRnMhHoAQgkjrgPiKQgai0gIiDQgIh/ALiDQAHhfAWiEQAYiOAHhTQAOh9gEh2QgFh0gQhzQgJhKgdiJQg6k5gXk9QgRjfAbjXQAKh0BAksQA6kxAekpQArm9AHoSQAJtOAR11IAJgUILFAAIAGAMQgTQugGMkQgKO/h3K/Qg5D7gVCMQghCxADCiQAGEEAYDWQARCSAhCaQAsC2AHBHQAZCWAHCoQAHCQgHBnQgEA7gQBTQglDggFE1QgCDfAcEMQAICNAyFeQAlEeALDRQAPECgWDfQgZF2AcOWQANIAATHgIgFAMIrFAAg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EgDMBUYIgGgXQAGmrABnrQADvRgTn6QgUnHhToEQgrjygRiCQgei3gJh+QgKh/ANiDQAIhcAaiHQAciTAJhMQAQh/gFh0QgFh1gUhzQgKhEgiiOQhEk5gck7QgTjgAgjWQALhkBMk8QBDkxAjknQAzm3AIoZMAAegjJIAGgXILFAAIAEANQgWRGgIMLQgMPUiLKmQhDEDgYCBQgnCzAECfQAHEJAcDSQAUCQAnCbQAzC9AJA+QAdCUAICpQAICUgIBiQgFA6gTBVQgrDYgFE+QgDDbAgERQALB7A6FxQArElANDJQASEFgaDcQgeFJAhPKQAQIDAWHdIgDAOIrFAAg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EgC9BUYIgEgZQAHmoABnvQAEvngWnhQgWnEhboGQgvj4gUh7Qggi5gLh7QgLh/APiEQAJhZAdiJQAfiXAJhIQASh/gGh0QgGh0gVhzQgMhAgkiSQhMk4gek7QgVjhAjjUQAMhaBTlGQBLkyAmkmQA4mxAJoeMAAhgjOIAEgZILFAAIACAPQgXRUgJL7QgNPhiZKWQhKEJgbB6QgrCzAFCfQAIEKAeDPQAWCQArCbQA4DDAKA2QAgCUAJCpQAJCXgKBgQgFA4gUBXQgwDSgGFEQgDDZAkETQALBvBAF/QAwEoAODEQAUEIgdDaQghErAlPrQARIGAZHcIgCAPIrFAAg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EgCzBUYIgDgaQAHmnACnxQADv2gXnPQgXnDhhoIQgyj6gUh3Qgji8gLh5QgMh+AQiEQAJhYAfiLQAhiYAKhGQASh/gGh0QgGh0gXhyQgMg/gniUQhQk3ggk6QgWjhAljVQANhTBYlNQBPkyApkkQA8muAJojMAAjgjQIADgaILFAAIABAPQgZRfgKLwQgNPrijKLQhPEMgcB1QgtCzAECeQAJENAgDNQAXCPAuCbQA8DHAKAxQAiCTAKCrQAJCXgKBeQgFA5gWBXQgzDPgGFHQgEDXAnEVQAMBoBDGHQA0ErAODCQAVEIgeDYQgjEXAnQDQASIHAaHbIAAAQIrFAAg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EgCtBUYIgBgcQAHmkACnzQADwBgXnDQgZnBhkoKQg0j8gWh0Qgji9gMh4QgMh+AQiDQAKhYAgiMQAiiZAKhEQAUiAgHhzQgGh1gYhyQgMg8gpiVQhTk4ghk7QgYjgAnjUQAOhPBblSQBSkxArkkQA+msAJolMAAlgjRIABgcILFAAIABAQQgaRlgKLpQgOPxipKEQhREOgeByQgvCzAFCfQAIENAiDLQAYCPAwCcQA9DJALAuQAjCSAKCrQAKCZgKBdQgGA4gWBXQg1DOgGFJQgEDVAoEYQAMBiBGGNQA2EtAPC/QAVEJgfDYQgkEJAoQSQATIJAbHZIAAARIrFAAg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EgCpBUYIAAgdQAGmjACn0QAEwGgYm9QgZnAhnoKQg1j/gWhxQgki+gMh3QgMh/AQiCQAKhYAhiMQAjibAKhCQAUiAgGhzQgHh1gYhyQgNg7gpiWQhVk4gik6QgYjhAnjTQAOhMBelWQBUkxArkkQA/mqAKomMAAmgjSIAAgdILFAAIABAQQgbRqgKLkQgPP1isJ/QhTEQgeBwQgxCzAFCfQAJEOAjDKQAYCOAxCcQA/DLAKAsQAlCTAKCqQAKCagLBbQgFA4gXBYQg2DNgHFKQgEDVApEYQANBeBIGSQA2EuAQC9QAWEKghDXQgkECApQbQATIJAcHZIAAARIrFAAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EgCnBUYIAAgdQAHmjACn0QAEwKgZm5QgZm/hooLQg2kAgWhwQgli+gMh3QgMh+AQiDQALhXAgiNQAkibAKhCQAVh/gHh0QgGh0gZhzQgNg6gqiXQhWk3gik6QgZjhApjTQANhLBflWQBVkyAskkQBAmqAKomQANrUAZ3/IAAgdILFAAIAAARQgbRsgKLhQgPP3iuJ9QhUEQgfBvQgxC0AFCeQAJEPAjDJQAZCPAxCbQBADMALArQAlCSAKCrQAKCagLBbQgGA3gXBZQg2DMgHFLQgEDUApEZQANBdBJGTQA3EuAQC9QAWEKghDXQglD9AqQgQAUIKAbHYIABASIrFAAg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgCmBUYIAAgdQAHmjACn1QAEwLgZm3QgZm/hpoLQg2kAgWhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicAKhBQAViAgHhzQgGh1gZhyQgNg7gqiWQhXk4gik6QgZjgApjUQAOhKBflXQBVkyAtkkQBAmpAKonMAAmgjTIAAgdILFAAIAAARQgbRsgKLhQgPP4iwJ8QhUERgfBtQgxC0AFCeQAJEPAjDKQAZCOAxCcQBBDNALAqQAkCSALCrQAKCZgLBcQgGA3gXBYQg3DLgGFNQgEDUApEYQANBdBJGUQA4EuAPC9QAXEKghDXQglD7AqQiQATIKAcHYIABASIrFAAg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgClBUYIAAgdQAHmjACn1QAEwMgZm2Qgam/hpoLQg2kAgWhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicAKhBQAViAgHhzQgGh1gZhyQgNg6gqiXQhXk3gjk7QgYjgAojUQAOhJBglYQBVkyAtkjQBAmqAKomMAAngjUIAAgdILFAAIAAARQgcRtgKLgQgPP5iwJ7QhVERgeBtQgyC0AFCeQAJEPAkDJQAZCPAxCbQBBDNALAqQAkCSALCsQAKCZgLBbQgGA3gXBZQg3DLgGFMQgEDVApEYQANBcBJGUQA4EvAQC8QAWELghDWQglD6AqQkQAUIKAcHYIABASIrFAAg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgClBUYIAAgdQAHmjACn1QAEwMgZm2QgZm/hpoLQg2kAgXhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicALhBQAUiAgGhzQgHh1gZhyQgNg6gqiXQhXk3gjk7QgYjgAojUQAOhIBglZQBWkyAskjQBBmqAKomMAAmgjUIAAgdILFAAIAAARQgbRtgKLgQgPP5ixJ7QhVERgeBtQgyC0AFCeQAJEPAkDJQAZCPAxCbQBBDNALAqQAlCSAKCsQAKCZgKBbQgGA3gYBZQg3DLgGFMQgEDVApEYQANBcBKGUQA3EvAQC8QAXELghDWQgmD6AqQkQAUIKAcHYIABASIrFAAg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EgClBUYIAAgdQAHmjACn1QAEwMgZm2QgZm/hpoLQg2kAgXhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicALhBQAUiAgGhzQgHh1gZhyQgNg6gqiXQhXk3gjk7QgYjgAojUQAOhIBglZQBWkyAskjQBBmqAKomMAAmgjUIAAgdILFAAIAAARQgbRtgKLgQgPP5ixJ7QhVERgeBtQgyC0AFCeQAJEPAkDJQAZCPAxCbQBBDNALAqQAlCSAKCsQAKCZgKBbQgGA3gYBZQg3DLgGFMQgEDVApEYQANBcBKGUQA3EvAQC8QAXELghDWQgmD6AqQkQAUIKAcHYIABASIrFAAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgClBUYIAAgdQAHmjACn1QAEwMgZm2QgZm/hpoLQg2kAgXhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicALhBQAUiAgGhzQgHh1gZhyQgNg6gqiXQhXk3gjk7QgYjgAojUQAOhIBglZQBWkyAskjQBBmqAKomMAAmgjUIAAgdILFAAIAAARQgbRtgKLgQgPP5ixJ7QhVERgeBtQgyC0AFCeQAJEPAkDJQAZCPAxCbQBBDNALAqQAlCSAKCsQAKCZgKBbQgGA3gYBZQg3DLgGFMQgEDVApEYQANBcBKGUQA3EvAQC8QAXELghDWQgmD6AqQkQAUIKAcHYIABASIrFAAg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgClBUYQAHmvACoGQAEwMgZm2QgZm/hpoLQg2kAgXhwQgli+gMh2QgNh+ARiEQAKhXAhiMQAkicALhBQAUiAgGhzQgHh1gZhyQgNg6gqiXQhXk3gjk7QgYjgAojUQAOhIBglZQBWkyAskjQBBmqAKomQANrXAZ4aILFAAQgbR5gKLlQgPP5ixJ7QhVERgeBtQgyC0AFCeQAJEPAkDJQAZCPAxCbQBBDNALAqQAlCSAKCsQAKCZgKBbQgGA3gYBZQg3DLgGFMQgEDVApEYQANBcBKGUQA3EvAQC8QAXELghDWQgmD6AqQkQAVITAcHhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-0.0019,y:0.0014}).wait(1).to({graphics:mask_1_graphics_2,x:-0.0077,y:0.0054}).wait(1).to({graphics:mask_1_graphics_3,x:-0.017,y:0.0119}).wait(1).to({graphics:mask_1_graphics_4,x:-0.0298,y:0.021}).wait(1).to({graphics:mask_1_graphics_5,x:-0.046,y:0.0323}).wait(1).to({graphics:mask_1_graphics_6,x:-0.0654,y:0.0459}).wait(1).to({graphics:mask_1_graphics_7,x:-0.0878,y:0.0617}).wait(1).to({graphics:mask_1_graphics_8,x:-0.1131,y:0.0794}).wait(1).to({graphics:mask_1_graphics_9,x:-0.1412,y:0.0992}).wait(1).to({graphics:mask_1_graphics_10,x:-0.172,y:0.1208}).wait(1).to({graphics:mask_1_graphics_11,x:-0.2052,y:0.1441}).wait(1).to({graphics:mask_1_graphics_12,x:-0.2408,y:0.1691}).wait(1).to({graphics:mask_1_graphics_13,x:-0.2787,y:0.1957}).wait(1).to({graphics:mask_1_graphics_14,x:-0.3186,y:0.2237}).wait(1).to({graphics:mask_1_graphics_15,x:-0.3606,y:0.2532}).wait(1).to({graphics:mask_1_graphics_16,x:-0.4043,y:0.2839}).wait(1).to({graphics:mask_1_graphics_17,x:-0.4498,y:0.3158}).wait(1).to({graphics:mask_1_graphics_18,x:-0.4969,y:0.3489}).wait(1).to({graphics:mask_1_graphics_19,x:-0.5454,y:0.3829}).wait(1).to({graphics:mask_1_graphics_20,x:-0.5953,y:0.4179}).wait(1).to({graphics:mask_1_graphics_21,x:-0.6463,y:0.4538}).wait(1).to({graphics:mask_1_graphics_22,x:-0.6985,y:0.4904}).wait(1).to({graphics:mask_1_graphics_23,x:-0.7517,y:0.5278}).wait(1).to({graphics:mask_1_graphics_24,x:-0.8057,y:0.5657}).wait(1).to({graphics:mask_1_graphics_25,x:-0.8604,y:0.6041}).wait(1).to({graphics:mask_1_graphics_26,x:-0.9157,y:0.6429}).wait(1).to({graphics:mask_1_graphics_27,x:-0.9715,y:0.6821}).wait(1).to({graphics:mask_1_graphics_28,x:-1.0277,y:0.7216}).wait(1).to({graphics:mask_1_graphics_29,x:-1.0842,y:0.7612}).wait(1).to({graphics:mask_1_graphics_30,x:-1.1408,y:0.801}).wait(1).to({graphics:mask_1_graphics_31,x:-1.1974,y:0.8407}).wait(1).to({graphics:mask_1_graphics_32,x:-1.2539,y:0.8804}).wait(1).to({graphics:mask_1_graphics_33,x:-1.3102,y:0.9199}).wait(1).to({graphics:mask_1_graphics_34,x:-1.3662,y:0.9593}).wait(1).to({graphics:mask_1_graphics_35,x:-1.4218,y:0.9983}).wait(1).to({graphics:mask_1_graphics_36,x:-1.4768,y:1.0369}).wait(1).to({graphics:mask_1_graphics_37,x:-1.5311,y:1.075}).wait(1).to({graphics:mask_1_graphics_38,x:-1.5847,y:1.1127}).wait(1).to({graphics:mask_1_graphics_39,x:-1.6374,y:1.1497}).wait(1).to({graphics:mask_1_graphics_40,x:-1.6891,y:1.186}).wait(1).to({graphics:mask_1_graphics_41,x:-1.7397,y:1.2215}).wait(1).to({graphics:mask_1_graphics_42,x:-1.7891,y:1.2561}).wait(1).to({graphics:mask_1_graphics_43,x:-1.8371,y:1.2899}).wait(1).to({graphics:mask_1_graphics_44,x:-1.8837,y:1.3226}).wait(1).to({graphics:mask_1_graphics_45,x:-1.9287,y:1.3542}).wait(1).to({graphics:mask_1_graphics_46,x:-1.9721,y:1.3847}).wait(1).to({graphics:mask_1_graphics_47,x:-2.0137,y:1.4139}).wait(1).to({graphics:mask_1_graphics_48,x:-2.0534,y:1.4418}).wait(1).to({graphics:mask_1_graphics_49,x:-2.0912,y:1.4683}).wait(1).to({graphics:mask_1_graphics_50,x:-2.1268,y:1.4933}).wait(1).to({graphics:mask_1_graphics_51,x:-2.1602,y:1.5167}).wait(1).to({graphics:mask_1_graphics_52,x:-2.1913,y:1.5386}).wait(1).to({graphics:mask_1_graphics_53,x:-2.22,y:1.5587}).wait(1).to({graphics:mask_1_graphics_54,x:-2.2461,y:1.577}).wait(1).to({graphics:mask_1_graphics_55,x:-2.2695,y:1.5935}).wait(1).to({graphics:mask_1_graphics_56,x:-2.2902,y:1.608}).wait(1).to({graphics:mask_1_graphics_57,x:-2.308,y:1.6205}).wait(1).to({graphics:mask_1_graphics_58,x:-2.3228,y:1.6309}).wait(1).to({graphics:mask_1_graphics_59,x:-2.3345,y:1.6391}).wait(1).to({graphics:mask_1_graphics_60,x:-2.3431,y:1.6451}).wait(1).to({graphics:mask_1_graphics_61,x:-2.3482,y:1.6488}).wait(1).to({graphics:mask_1_graphics_62,x:0,y:4}).wait(14).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_120,x:-358.6,y:0}).wait(1).to({graphics:mask_1_graphics_121,x:-363.9442,y:0}).wait(1).to({graphics:mask_1_graphics_122,x:-367.9582,y:0}).wait(1).to({graphics:mask_1_graphics_123,x:-370.9129,y:0}).wait(1).to({graphics:mask_1_graphics_124,x:-373.0324,y:0}).wait(1).to({graphics:mask_1_graphics_125,x:-374.5091,y:0}).wait(1).to({graphics:mask_1_graphics_126,x:-375.4754,y:0}).wait(1).to({graphics:mask_1_graphics_127,x:-376.1418,y:0}).wait(1).to({graphics:mask_1_graphics_128,x:-376.5035,y:0}).wait(1).to({graphics:mask_1_graphics_129,x:-376.7367,y:0}).wait(1).to({graphics:mask_1_graphics_130,x:-376.8367,y:0}).wait(1).to({graphics:mask_1_graphics_131,x:-376.8867,y:0}).wait(1).to({graphics:mask_1_graphics_132,x:-376.9117,y:0}).wait(1).to({graphics:mask_1_graphics_133,x:-376.9117,y:0}).wait(1).to({graphics:mask_1_graphics_134,x:-376.9117,y:0}).wait(1).to({graphics:mask_1_graphics_135,x:-376.9117,y:0}).wait(83));

	// Layer_7
	this.instance_8 = new lib._break();
	this.instance_8.setTransform(-263.3,10.8,1.8758,1.8758,-156.5269,0,0,-0.2,-0.1);
	this.instance_8.alpha = 0;
	this.instance_8.compositeOperation = "multiply";
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).to({rotation:-163.5086,x:-319.9,y:11.1,alpha:1},14,cjs.Ease.sineInOut).wait(84));

	// Layer_8_copy
	this.instance_9 = new lib.mask("synched",22,false);
	this.instance_9.setTransform(1120,4,1,1,0,0,0,1660,540);

	this.instance_10 = new lib.square();
	this.instance_10.setTransform(-358.3,3.4,0.0657,1);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10,p:{scaleX:0.0657,x:-358.3,y:3.4,mode:"independent",startPosition:undefined}}]},76).to({state:[{t:this.instance_10,p:{scaleX:0.1328,x:-374.9,y:0,mode:"synched",startPosition:0}}]},44).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2392.6,-540,3048.1,1453);


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
	this.frame_19 = function() {
		this.morph.play();
	}
	this.frame_97 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(78).call(this.frame_97).wait(1));

	// Layer_10
	this.morph = new lib.morph();
	this.morph.name = "morph";
	this.morph.setTransform(1255.75,305.2);

	this.timeline.addTween(cjs.Tween.get(this.morph).wait(98));

	// square (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAo7AqnIAAhsIBsAAIAABsg");
	var mask_graphics_22 = new cjs.Graphics().p("EAkzAr/IAAnMIHMAAIAAHMg");
	var mask_graphics_23 = new cjs.Graphics().p("EAksAsBIAAnVIHVAAIAAHVg");
	var mask_graphics_24 = new cjs.Graphics().p("EAkZAsHIAAnuIHuAAIAAHug");
	var mask_graphics_25 = new cjs.Graphics().p("EAj6AsSIAAoYIIYAAIAAIYg");
	var mask_graphics_26 = new cjs.Graphics().p("EAjQAsgIAApQIJQAAIAAJQg");
	var mask_graphics_27 = new cjs.Graphics().p("EAibAsxIAAqWIKWAAIAAKWg");
	var mask_graphics_28 = new cjs.Graphics().p("EAhbAtHIAArsILsAAIAALsg");
	var mask_graphics_29 = new cjs.Graphics().p("EAgQAtfIAAtPINPAAIAANPg");
	var mask_graphics_30 = new cjs.Graphics().p("EAe9At7IAAu+IO+AAIAAO+g");
	var mask_graphics_31 = new cjs.Graphics().p("EAdgAuaIAAw6IQ6AAIAAQ6g");
	var mask_graphics_32 = new cjs.Graphics().p("EAb6Au7IAAzBITBAAIAATBg");
	var mask_graphics_33 = new cjs.Graphics().p("EAaMAvgIAA1UIVUAAIAAVUg");
	var mask_graphics_34 = new cjs.Graphics().p("EAYXAwHIAA3wIXwAAIAAXwg");
	var mask_graphics_35 = new cjs.Graphics().p("EAWaAwwIAA6WIaWAAIAAaWg");
	var mask_graphics_36 = new cjs.Graphics().p("EAUWAxcIAA9GIdGAAIAAdGg");
	var mask_graphics_37 = new cjs.Graphics().p("EASLAyKIAA//If/AAIAAf/g");
	var mask_graphics_38 = new cjs.Graphics().p("EAP6Ay6MAAAgjAMAjAAAAMAAAAjAg");
	var mask_graphics_39 = new cjs.Graphics().p("EANkAzsMAAAgmIMAmIAAAMAAAAmIg");
	var mask_graphics_40 = new cjs.Graphics().p("EALJA0fMAAAgpWMApWAAAMAAAApWg");
	var mask_graphics_41 = new cjs.Graphics().p("EAIoA1UMAAAgssMAssAAAMAAAAssg");
	var mask_graphics_42 = new cjs.Graphics().p("EAGDA2LMAAAgwIMAwIAAAMAAAAwIg");
	var mask_graphics_43 = new cjs.Graphics().p("EADbA3DMAAAgzoMAzoAAAMAAAAzog");
	var mask_graphics_44 = new cjs.Graphics().p("EAAuA38MAAAg3OMA3OAAAMAAAA3Og");
	var mask_graphics_45 = new cjs.Graphics().p("EgCAA42MAAAg62MA62AAAMAAAA62g");
	var mask_graphics_46 = new cjs.Graphics().p("EgEzA5xMAAAg+kMA+kAAAMAAAA+kg");
	var mask_graphics_47 = new cjs.Graphics().p("EgHoA6tMAAAhCVMBCVAAAMAAABCVg");
	var mask_graphics_48 = new cjs.Graphics().p("EgKfA7qMAAAhGJMBGJAAAMAAABGJg");
	var mask_graphics_49 = new cjs.Graphics().p("EgNXA8nMAAAhJ+MBJ+AAAMAAABJ+g");
	var mask_graphics_50 = new cjs.Graphics().p("EgQRA9kMAAAhN1MBN1AAAMAAABN1g");
	var mask_graphics_51 = new cjs.Graphics().p("EgTLA+iMAAAhRtMBRtAAAMAAABRtg");
	var mask_graphics_52 = new cjs.Graphics().p("EgWGA/gMAAAhVmMBVmAAAMAAABVmg");
	var mask_graphics_53 = new cjs.Graphics().p("EgZBBAeMAAAhZfMBZfAAAMAAABZfg");
	var mask_graphics_54 = new cjs.Graphics().p("Egb8BBcMAAAhdYMBdYAAAMAAABdYg");
	var mask_graphics_55 = new cjs.Graphics().p("Ege2BCaMAAAhhQMBhQAAAMAAABhQg");
	var mask_graphics_56 = new cjs.Graphics().p("EghvBDXMAAAhlGMBlGAAAMAAABlGg");
	var mask_graphics_57 = new cjs.Graphics().p("EgknBEUMAAAho7MBo7AAAMAAABo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EgndBFQMAAAhstMBstAAAMAAABstg");
	var mask_graphics_59 = new cjs.Graphics().p("EgqRBGMMAAAhwdMBwdAAAMAAABwdg");
	var mask_graphics_60 = new cjs.Graphics().p("EgtCBHGMAAAh0IMB0IAAAMAAAB0Ig");
	var mask_graphics_61 = new cjs.Graphics().p("EgvwBIAMAAAh3wMB3wAAAMAAAB3wg");
	var mask_graphics_62 = new cjs.Graphics().p("EgybBI5MAAAh7UMB7UAAAMAAAB7Ug");
	var mask_graphics_63 = new cjs.Graphics().p("Eg1CBJwMAAAh+yMB+yAAAMAAAB+yg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg3lBKmMAAAiCLMCCLAAAMAAACCLg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg6EBLbMAAAiFfMCFfAAAMAAACFfg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg8eBMOMAAAiIsMCIsAAAMAAACIsg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg+zBM/MAAAiLyMCLyAAAMAAACLyg");
	var mask_graphics_68 = new cjs.Graphics().p("EhBCBNuMAAAiOwMCOwAAAMAAACOwg");
	var mask_graphics_69 = new cjs.Graphics().p("EhDLBOcMAAAiRnMCRnAAAMAAACRng");
	var mask_graphics_70 = new cjs.Graphics().p("EhFPBPIMAAAiUXMCUXAAAMAAACUXg");
	var mask_graphics_71 = new cjs.Graphics().p("EhHLBPxMAAAiW8MCW8AAAMAAACW8g");
	var mask_graphics_72 = new cjs.Graphics().p("EhJBBQYMAAAiZZMCZZAAAMAAACZZg");
	var mask_graphics_73 = new cjs.Graphics().p("EhKwBQ8MAAAibsMCbsAAAMAAACbsg");
	var mask_graphics_74 = new cjs.Graphics().p("EhMWBReMAAAid0MCd0AAAMAAACd0g");
	var mask_graphics_75 = new cjs.Graphics().p("EhN1BR+MAAAifzMCfzAAAMAAACfzg");
	var mask_graphics_76 = new cjs.Graphics().p("EhPLBSaMAAAihlMChlAAAMAAAChlg");
	var mask_graphics_77 = new cjs.Graphics().p("EhQZBS0MAAAijNMCjNAAAMAAACjNg");
	var mask_graphics_78 = new cjs.Graphics().p("EhRdBTLMAAAikoMCkoAAAMAAACkog");
	var mask_graphics_79 = new cjs.Graphics().p("EhSYBTeMAAAil2MCl2AAAMAAACl2g");
	var mask_graphics_80 = new cjs.Graphics().p("EhTJBTuMAAAim3MCm3AAAMAAACm3g");
	var mask_graphics_81 = new cjs.Graphics().p("EhTwBT7MAAAinrMCnrAAAMAAACnrg");
	var mask_graphics_82 = new cjs.Graphics().p("EhUIBUJMAAAioRMCoRAAAMAAACoRg");
	var mask_graphics_83 = new cjs.Graphics().p("EhUTBUUMAAAionMConAAAMAAACong");
	var mask_graphics_84 = new cjs.Graphics().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:272.6735,y:272.6735}).wait(22).to({graphics:mask_graphics_22,x:281.5109,y:281.5109}).wait(1).to({graphics:mask_graphics_23,x:281.7234,y:281.7234}).wait(1).to({graphics:mask_graphics_24,x:282.3497,y:282.3497}).wait(1).to({graphics:mask_graphics_25,x:283.3736,y:283.3736}).wait(1).to({graphics:mask_graphics_26,x:284.7789,y:284.7789}).wait(1).to({graphics:mask_graphics_27,x:286.5497,y:286.5497}).wait(1).to({graphics:mask_graphics_28,x:288.6704,y:288.6704}).wait(1).to({graphics:mask_graphics_29,x:291.1253,y:291.1253}).wait(1).to({graphics:mask_graphics_30,x:293.8991,y:293.8991}).wait(1).to({graphics:mask_graphics_31,x:296.9767,y:296.9767}).wait(1).to({graphics:mask_graphics_32,x:300.3429,y:300.3429}).wait(1).to({graphics:mask_graphics_33,x:303.9831,y:303.9831}).wait(1).to({graphics:mask_graphics_34,x:307.8823,y:307.8823}).wait(1).to({graphics:mask_graphics_35,x:312.0262,y:312.0262}).wait(1).to({graphics:mask_graphics_36,x:316.4003,y:316.4003}).wait(1).to({graphics:mask_graphics_37,x:320.9904,y:320.9904}).wait(1).to({graphics:mask_graphics_38,x:325.7822,y:325.7822}).wait(1).to({graphics:mask_graphics_39,x:330.7618,y:330.7618}).wait(1).to({graphics:mask_graphics_40,x:335.9154,y:335.9154}).wait(1).to({graphics:mask_graphics_41,x:341.2291,y:341.2291}).wait(1).to({graphics:mask_graphics_42,x:346.6893,y:346.6893}).wait(1).to({graphics:mask_graphics_43,x:352.2825,y:352.2825}).wait(1).to({graphics:mask_graphics_44,x:357.9952,y:357.9952}).wait(1).to({graphics:mask_graphics_45,x:363.8141,y:363.8141}).wait(1).to({graphics:mask_graphics_46,x:369.726,y:369.726}).wait(1).to({graphics:mask_graphics_47,x:375.7177,y:375.7177}).wait(1).to({graphics:mask_graphics_48,x:381.7761,y:381.7761}).wait(1).to({graphics:mask_graphics_49,x:387.8882,y:387.8882}).wait(1).to({graphics:mask_graphics_50,x:394.0413,y:394.0413}).wait(1).to({graphics:mask_graphics_51,x:400.2223,y:400.2223}).wait(1).to({graphics:mask_graphics_52,x:406.4187,y:406.4187}).wait(1).to({graphics:mask_graphics_53,x:412.6176,y:412.6176}).wait(1).to({graphics:mask_graphics_54,x:418.8065,y:418.8065}).wait(1).to({graphics:mask_graphics_55,x:424.9728,y:424.9728}).wait(1).to({graphics:mask_graphics_56,x:431.104,y:431.104}).wait(1).to({graphics:mask_graphics_57,x:437.1876,y:437.1876}).wait(1).to({graphics:mask_graphics_58,x:443.2113,y:443.2113}).wait(1).to({graphics:mask_graphics_59,x:449.1626,y:449.1626}).wait(1).to({graphics:mask_graphics_60,x:455.0293,y:455.0293}).wait(1).to({graphics:mask_graphics_61,x:460.799,y:460.799}).wait(1).to({graphics:mask_graphics_62,x:466.4596,y:466.4596}).wait(1).to({graphics:mask_graphics_63,x:471.9988,y:471.9988}).wait(1).to({graphics:mask_graphics_64,x:477.4044,y:477.4044}).wait(1).to({graphics:mask_graphics_65,x:482.6643,y:482.6643}).wait(1).to({graphics:mask_graphics_66,x:487.7664,y:487.7664}).wait(1).to({graphics:mask_graphics_67,x:492.6984,y:492.6984}).wait(1).to({graphics:mask_graphics_68,x:497.4484,y:497.4484}).wait(1).to({graphics:mask_graphics_69,x:502.0042,y:502.0042}).wait(1).to({graphics:mask_graphics_70,x:506.3537,y:506.3537}).wait(1).to({graphics:mask_graphics_71,x:510.485,y:510.485}).wait(1).to({graphics:mask_graphics_72,x:514.3858,y:514.3858}).wait(1).to({graphics:mask_graphics_73,x:518.0442,y:518.0442}).wait(1).to({graphics:mask_graphics_74,x:521.4481,y:521.4481}).wait(1).to({graphics:mask_graphics_75,x:524.5854,y:524.5854}).wait(1).to({graphics:mask_graphics_76,x:527.444,y:527.444}).wait(1).to({graphics:mask_graphics_77,x:530.0118,y:530.0118}).wait(1).to({graphics:mask_graphics_78,x:532.2767,y:532.2767}).wait(1).to({graphics:mask_graphics_79,x:534.2267,y:534.2267}).wait(1).to({graphics:mask_graphics_80,x:535.8494,y:535.8494}).wait(1).to({graphics:mask_graphics_81,x:537.1329,y:537.1329}).wait(1).to({graphics:mask_graphics_82,x:537.6569,y:537.6569}).wait(1).to({graphics:mask_graphics_83,x:537.6518,y:537.6518}).wait(1).to({graphics:mask_graphics_84,x:540,y:540}).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1136.9,-230.8,4063.7000000000003,1310.8);


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
		var COLOR = 0;
		var version = "think";
		//version = "do";
		var COLOR_VERSION = 2;
		var self= this;
		
		var WIDTH = 336;
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
		this.crowbar.stop();
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
		 
		 
			var d = 0.1;
			gsap.to(self.logo, {duration:0.8, alpha:1, delay: d});
		
			
		
			self.crowbar.play();
			
			d+=0.5;
			
				gsap.delayedCall(d , function() {
			
				self.largeshape.visible = true;
				gsap.set(self.largeshape,{scale:0});
				gsap.to(self.largeshape, {scale:2.25,duration:0.6, ease:allianzEase});
				gsap.to(self.logo, {duration:0.1, alpha:0, delay:0.01});
				gsap.to(self.whiteLogo, {duration:0.1, alpha:1, delay:0.01});
			 
				
			});
			
			if(version == "think"){
			//	gsap.from(self.shape, {scale:0, delay:d,duration:0.6, ease:allianzEase});
		
				 
				gsap.to(self.copy1.copy1_1, {y:0, alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {y:-10, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				
			
				
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
			
			
			gsap.from(cta, {duration:1, scale:0, ease: "elastic.out(0.7, 0.75)", delay: d});
			
		
			
			if(version == "think"){
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
				
				d+=0.4;
				gsap.to(self.copy2.copy2_1, {x:"-=20", alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy2.copy2_2, {x:"-=20", alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
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
		
		addBorder();
		
		animateInFrame1();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// particles
	this.particles = new lib.particleSystem();
	this.particles.name = "particles";
	this.particles.setTransform(186.7,373.7);

	this.timeline.addTween(cjs.Tween.get(this.particles).wait(1));

	// copy_do
	this.copyDo = new lib.copyDo();
	this.copyDo.name = "copyDo";
	this.copyDo.setTransform(163,109.85,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.copyDo).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(168,37.75);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(167,51);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.wlogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(242.85,232.5,0.5627,0.5628,0,0,0,88.6,13.3);
	this.whiteLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(193.95,225.6,0.6638,0.6637,0,0,0,1.4,0.9);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(208.35,99,0.4686,0.4683,0,0,0,5.1,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// crowbar
	this.crowbar = new lib.crowbarMC();
	this.crowbar.name = "crowbar";
	this.crowbar.setTransform(131,160.45,0.1153,0.1151,0,0,0,902.2,544.9);

	this.timeline.addTween(cjs.Tween.get(this.crowbar).wait(1));

	// cta_do
	this.ctaDo = new lib.ctado();
	this.ctaDo.name = "ctaDo";
	this.ctaDo.setTransform(-166.05,473);

	this.timeline.addTween(cjs.Tween.get(this.ctaDo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(81.7,214.55,0.7538,0.7541,0,0,0,58,15.4);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// largeshape
	this.largecircle = new lib.largeshape();
	this.largecircle.name = "largecircle";
	this.largecircle.setTransform(155.05,304.95,1,1,0,0,0,5.2,5);
	this.largecircle.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largecircle).wait(1));

	// bgshape
	this.largeshape = new lib.largeshape();
	this.largeshape.name = "largeshape";
	this.largeshape.setTransform(168.1,125.1,0.0174,0.0174,0,0,0,5.8,5.8);
	this.largeshape.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largeshape).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A7z1FMA3nAAAMAAAAqLMg3nAAAg");
	this.shape.setTransform(168,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7zVGMAAAgqLMA3nAAAMAAAAqLg");
	this.shape_1.setTransform(168,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,125,379,475);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 336,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./Bitmap16.png", id:"Bitmap16"},
		{src:"./Breaking.jpg", id:"Breaking"},
		{src:"./crowbar.png", id:"crowbar"},
		{src:"./schadow.png", id:"schadow"}
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