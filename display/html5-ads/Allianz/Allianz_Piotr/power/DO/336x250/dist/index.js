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



(lib.burnok = function() {
	this.initialize(img.burnok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,310);


(lib.crowbar = function() {
	this.initialize(img.crowbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,98);


(lib.noise = function() {
	this.initialize(img.noise);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.plug = function() {
	this.initialize(img.plug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,140);// helper functions:

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
	this.shape.graphics.beginFill("#C1EBFB").beginStroke().moveTo(-540,540).lineTo(-540,-540).lineTo(540,-540).lineTo(540,540).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginLinearGradientFill(["#EBFF4F","#D14A00"],[0.012,1],106.4,138,40.4,23.5).beginStroke().moveTo(-151.5,124).lineTo(-151.5,-124).lineTo(151.5,-124).lineTo(151.5,124).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-124,303,248);


(lib.rad = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#C1EBFB").beginStroke().moveTo(-392.6,351.8).lineTo(-394.1,-351.8).lineTo(394.2,-351.8).lineTo(394.2,148.3).lineTo(394.1,148.3).lineTo(217.2,255.8).curveTo(215.6,254.5,213.8,253.4).curveTo(208.5,250.2,199.6,249.1).curveTo(190.8,248,183.5,249.7).curveTo(174.9,251.7,169.8,257.1).lineTo(168.5,255.8).curveTo(163.8,250.8,160.9,247.3).curveTo(157,242.5,154.5,238).lineTo(151.4,231.8).curveTo(149.7,228.1,147.9,225.9).curveTo(142.6,219.1,132.7,216.9).curveTo(124.1,215.1,114.2,217.1).curveTo(107.8,218.4,103.1,221).curveTo(97.6,224.2,95.2,229).curveTo(93,233.4,93.3,239.5).curveTo(93.6,243.6,95.2,250.5).curveTo(101.1,275.2,106,291.7).lineTo(106.9,294.7).curveTo(104.3,297.5,102.1,300.7).curveTo(99.2,305.1,95,314.2).curveTo(91.8,321.4,89.3,327.8).curveTo(84.9,328.4,80.4,329.7).curveTo(71.3,332.5,66.5,337.4).curveTo(63.6,340.4,62.3,344.3).curveTo(61.1,348.2,62,351.8).closePath();
	this.shape.setTransform(2,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392.1,-351.7,788.3,703.5);


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
	this.shape.graphics.beginFill("#053781").beginStroke().moveTo(-0.8,4.3).curveTo(-1.4,3.7,-1.4,2.6).lineTo(-1.4,-1.2).lineTo(-2.4,-1.2).lineTo(-2.4,-2.8).lineTo(-1.4,-2.8).lineTo(-1.4,-4.6).lineTo(0.3,-5).lineTo(0.3,-2.8).lineTo(2.3,-2.8).lineTo(2.3,-1.2).lineTo(0.3,-1.2).lineTo(0.3,2.3).curveTo(0.3,3.4,1.3,3.4).lineTo(2.2,3.3).lineTo(2.4,4.7).curveTo(1.8,4.9,1,4.9).curveTo(-0.2,5,-0.8,4.3).closePath();
	this.shape.setTransform(32.825,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#053781").beginStroke().moveTo(-2.1,3.5).curveTo(-2.9,3,-3.4,2.1).curveTo(-3.8,1.2,-3.8,0).curveTo(-3.8,-1.2,-3.4,-2.1).curveTo(-2.9,-3,-2.1,-3.5).curveTo(-1.3,-4,-0.3,-4).curveTo(1.3,-4,2.3,-2.7).lineTo(2.3,-3.8).lineTo(3.8,-3.8).lineTo(3.8,3.8).lineTo(2.3,3.8).lineTo(2.3,2.7).curveTo(1.3,4,-0.3,4).curveTo(-1.3,4,-2.1,3.5).closePath().moveTo(-1.6,-1.7).curveTo(-2.1,-1.1,-2.1,0).curveTo(-2.1,1.1,-1.6,1.8).curveTo(-1,2.4,0,2.4).curveTo(1,2.4,1.6,1.8).curveTo(2.2,1.1,2.2,0).curveTo(2.2,-1.1,1.6,-1.8).curveTo(1,-2.4,0,-2.4).curveTo(-1,-2.4,-1.6,-1.7).closePath();
	this.shape_1.setTransform(25.35,-3.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#053781").beginStroke().moveTo(-2.1,3.5).curveTo(-2.9,3,-3.4,2.1).curveTo(-3.8,1.2,-3.8,0).curveTo(-3.8,-1.2,-3.4,-2.1).curveTo(-2.9,-3,-2.1,-3.5).curveTo(-1.3,-4,-0.3,-4).curveTo(1.3,-4,2.2,-2.7).lineTo(2.2,-3.8).lineTo(3.8,-3.8).lineTo(3.8,3.8).lineTo(2.2,3.8).lineTo(2.2,2.7).curveTo(1.3,4,-0.3,4).curveTo(-1.3,4,-2.1,3.5).closePath().moveTo(-1.6,-1.7).curveTo(-2.1,-1.1,-2.1,0).curveTo(-2.1,1.1,-1.6,1.8).curveTo(-0.9,2.4,0,2.4).curveTo(1,2.4,1.6,1.8).curveTo(2.2,1.1,2.1,0).curveTo(2.2,-1.1,1.6,-1.8).curveTo(1,-2.4,0,-2.4).curveTo(-0.9,-2.4,-1.6,-1.7).closePath();
	this.shape_2.setTransform(16.15,-3.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#053781").beginStroke().moveTo(4,3.9).lineTo(4,-0.4).curveTo(4,-2.3,2.4,-2.3).curveTo(1.6,-2.3,1.3,-1.9).curveTo(0.8,-1.3,0.8,-0.5).lineTo(0.8,3.9).lineTo(-0.9,3.9).lineTo(-0.9,-0.4).curveTo(-0.9,-1.4,-1.3,-1.9).curveTo(-1.6,-2.3,-2.4,-2.3).curveTo(-3.1,-2.3,-3.6,-1.9).curveTo(-4,-1.3,-3.9,-0.5).lineTo(-3.9,3.9).lineTo(-5.6,3.9).lineTo(-5.6,-3.8).lineTo(-4,-3.8).lineTo(-4,-2.7).curveTo(-3.7,-3.3,-3.1,-3.6).curveTo(-2.6,-3.9,-1.9,-3.9).curveTo(-1,-3.9,-0.5,-3.5).curveTo(0.1,-3.2,0.4,-2.6).curveTo(0.8,-3.2,1.4,-3.5).curveTo(2.1,-3.9,2.9,-3.9).curveTo(4.1,-3.9,4.9,-3.1).curveTo(5.6,-2.2,5.6,-0.7).lineTo(5.6,3.9).closePath();
	this.shape_3.setTransform(5.3,-3.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#053781").beginStroke().moveTo(-3.8,5.3).lineTo(-3.8,-5.2).lineTo(-2.3,-5.2).lineTo(-2.3,-4).curveTo(-1.3,-5.3,0.3,-5.3).curveTo(1.3,-5.3,2.1,-4.8).curveTo(2.9,-4.3,3.3,-3.4).curveTo(3.8,-2.5,3.8,-1.3).curveTo(3.8,-0.2,3.3,0.8).curveTo(2.9,1.7,2.1,2.1).curveTo(1.3,2.7,0.3,2.6).curveTo(-1.2,2.6,-2.2,1.5).lineTo(-2.2,5.3).closePath().moveTo(-1.6,-3.1).curveTo(-2.2,-2.4,-2.2,-1.3).curveTo(-2.2,-0.2,-1.6,0.5).curveTo(-1,1.1,-0,1.1).curveTo(0.9,1.1,1.5,0.4).curveTo(2.1,-0.2,2.1,-1.3).curveTo(2.1,-2.4,1.5,-3).curveTo(0.9,-3.8,-0,-3.7).curveTo(-1,-3.7,-1.6,-3.1).closePath();
	this.shape_4.setTransform(-9.25,-1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#053781").beginStroke().moveTo(-2,3.4).curveTo(-2.9,3,-3.3,2.1).curveTo(-3.9,1.1,-3.9,-0).curveTo(-3.9,-1.2,-3.3,-2.1).curveTo(-2.9,-3,-2,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,2,-3.5).curveTo(2.9,-3,3.4,-2.1).curveTo(3.9,-1.2,3.9,-0).curveTo(3.9,1.1,3.4,2.1).curveTo(2.9,3,2,3.4).curveTo(1.1,4,0,4).curveTo(-1.1,4,-2,3.4).closePath().moveTo(-1.6,-1.7).curveTo(-2.2,-1.1,-2.2,-0).curveTo(-2.2,1.1,-1.6,1.7).curveTo(-1,2.4,0,2.4).curveTo(1,2.4,1.6,1.7).curveTo(2.2,1.1,2.2,-0).curveTo(2.2,-1.1,1.6,-1.7).curveTo(1,-2.5,0,-2.4).curveTo(-0.9,-2.5,-1.6,-1.7).closePath();
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
	this.shape.graphics.beginFill("#053781").beginStroke().moveTo(1.8,3.9).lineTo(1.8,-0.3).curveTo(1.8,-1.3,1.3,-1.8).curveTo(0.9,-2.3,0.1,-2.3).curveTo(-0.8,-2.3,-1.3,-1.8).curveTo(-1.8,-1.3,-1.8,-0.3).lineTo(-1.8,3.9).lineTo(-3.4,3.9).lineTo(-3.4,-3.8).lineTo(-1.9,-3.8).lineTo(-1.9,-2.5).curveTo(-1.5,-3.3,-0.9,-3.5).curveTo(-0.3,-3.9,0.5,-3.9).curveTo(1.9,-3.9,2.7,-3).curveTo(3.4,-2.2,3.4,-0.5).lineTo(3.4,3.9).closePath();
	this.shape.setTransform(46.725,1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#053781").beginStroke().moveTo(-1.7,3.5).curveTo(-2.6,3,-3.1,2.1).curveTo(-3.6,1.2,-3.6,-0).curveTo(-3.6,-1.2,-3.2,-2.1).curveTo(-2.7,-3,-1.9,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,1.9,-3.5).curveTo(2.7,-3,3.2,-2.2).curveTo(3.6,-1.3,3.6,-0.2).lineTo(3.6,0.5).lineTo(-1.9,0.5).curveTo(-1.8,1.4,-1.2,2).curveTo(-0.5,2.4,0.5,2.4).curveTo(1.1,2.4,1.8,2.2).lineTo(2.9,1.8).lineTo(3.4,3.1).curveTo(2.8,3.5,2,3.8).curveTo(1.3,4,0.4,4).curveTo(-0.8,4,-1.7,3.5).closePath().moveTo(2,-0.8).curveTo(1.9,-1.6,1.4,-2.1).curveTo(0.8,-2.5,0,-2.5).curveTo(-0.8,-2.6,-1.3,-2.1).curveTo(-1.8,-1.6,-1.9,-0.8).lineTo(2,-0.8).lineTo(2,-0.8).closePath();
	this.shape_1.setTransform(38.025,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#053781").beginStroke().moveTo(-3.4,4.6).lineTo(-3,3.2).lineTo(-1.7,3.7).lineTo(-0.5,3.8).curveTo(0.8,3.8,1.5,3.2).curveTo(2.1,2.6,2.1,1.4).lineTo(2.1,1.1).curveTo(1.2,2.3,-0.3,2.3).curveTo(-1.4,2.3,-2.1,1.8).curveTo(-2.9,1.3,-3.4,0.4).curveTo(-3.8,-0.4,-3.8,-1.6).curveTo(-3.8,-2.7,-3.4,-3.5).curveTo(-2.9,-4.4,-2.1,-4.9).curveTo(-1.4,-5.4,-0.3,-5.4).curveTo(1.3,-5.4,2.2,-4.1).lineTo(2.2,-5.2).lineTo(3.8,-5.2).lineTo(3.8,1.6).curveTo(3.8,3.4,2.8,4.4).curveTo(1.6,5.4,-0.3,5.4).curveTo(-2,5.4,-3.4,4.6).closePath().moveTo(-1.6,-3.2).curveTo(-2.1,-2.6,-2.2,-1.6).curveTo(-2.1,-0.6,-1.6,0.1).curveTo(-1,0.7,0.1,0.7).curveTo(1,0.7,1.6,0.1).curveTo(2.1,-0.5,2.1,-1.6).curveTo(2.1,-2.6,1.6,-3.2).curveTo(1,-3.8,0.1,-3.8).curveTo(-1,-3.8,-1.6,-3.2).closePath();
	this.shape_2.setTransform(29,2.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#053781").beginStroke().moveTo(1.8,3.9).lineTo(1.8,-0.3).curveTo(1.8,-1.3,1.3,-1.8).curveTo(0.9,-2.3,0.1,-2.3).curveTo(-0.8,-2.3,-1.3,-1.8).curveTo(-1.8,-1.3,-1.8,-0.3).lineTo(-1.8,3.9).lineTo(-3.4,3.9).lineTo(-3.4,-3.8).lineTo(-1.9,-3.8).lineTo(-1.9,-2.5).curveTo(-1.5,-3.3,-0.9,-3.5).curveTo(-0.3,-3.9,0.5,-3.9).curveTo(1.9,-3.9,2.7,-3).curveTo(3.4,-2.2,3.4,-0.5).lineTo(3.4,3.9).closePath();
	this.shape_3.setTransform(20.325,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#053781").beginStroke().moveTo(-0.8,5.6).lineTo(-0.8,-2.1).lineTo(0.8,-2.1).lineTo(0.8,5.6).closePath().moveTo(-0.8,-3.8).curveTo(-1.1,-4.1,-1.1,-4.6).curveTo(-1.1,-5,-0.8,-5.3).curveTo(-0.5,-5.6,-0,-5.6).curveTo(0.5,-5.6,0.8,-5.3).curveTo(1.1,-5,1.1,-4.6).curveTo(1.1,-4.2,0.8,-3.9).curveTo(0.5,-3.5,-0,-3.5).curveTo(-0.5,-3.5,-0.8,-3.8).closePath();
	this.shape_4.setTransform(13.925,-0.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#053781").beginStroke().moveTo(-2.2,3.9).lineTo(-2.2,-3.8).lineTo(-0.7,-3.8).lineTo(-0.7,-2.4).curveTo(-0.1,-3.9,1.3,-3.9).curveTo(1.8,-3.9,2.3,-3.7).lineTo(2,-2.1).curveTo(1.6,-2.2,1.2,-2.2).curveTo(0.3,-2.2,-0.1,-1.6).curveTo(-0.6,-1.1,-0.6,0).lineTo(-0.6,3.9).closePath();
	this.shape_5.setTransform(9.6,1.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#053781").beginStroke().moveTo(-1.7,3.5).curveTo(-2.6,3,-3.1,2.1).curveTo(-3.6,1.2,-3.6,-0).curveTo(-3.6,-1.2,-3.2,-2.1).curveTo(-2.7,-3,-1.9,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,1.9,-3.5).curveTo(2.7,-3,3.2,-2.2).curveTo(3.6,-1.3,3.6,-0.2).lineTo(3.6,0.5).lineTo(-1.9,0.5).curveTo(-1.8,1.4,-1.2,2).curveTo(-0.5,2.4,0.5,2.4).curveTo(1.1,2.4,1.8,2.2).lineTo(2.9,1.8).lineTo(3.4,3.1).curveTo(2.8,3.5,2,3.8).curveTo(1.3,4,0.4,4).curveTo(-0.8,4,-1.7,3.5).closePath().moveTo(2,-0.8).curveTo(1.9,-1.6,1.4,-2.1).curveTo(0.8,-2.5,0,-2.5).curveTo(-0.8,-2.6,-1.3,-2.1).curveTo(-1.8,-1.6,-1.9,-0.8).lineTo(2,-0.8).lineTo(2,-0.8).closePath();
	this.shape_6.setTransform(2.075,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#053781").beginStroke().moveTo(1.5,5.6).lineTo(-1.1,2.6).lineTo(-1.9,3.4).lineTo(-1.9,5.6).lineTo(-3.6,5.6).lineTo(-3.6,-5.6).lineTo(-1.9,-5.6).lineTo(-1.9,1.3).lineTo(1.3,-2).lineTo(3.4,-2).lineTo(0,1.4).lineTo(3.6,5.6).closePath();
	this.shape_7.setTransform(-5.725,-0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#053781").beginStroke().moveTo(-1.7,3.5).curveTo(-2.6,3,-3.1,2.1).curveTo(-3.6,1.2,-3.6,-0).curveTo(-3.6,-1.2,-3.2,-2.1).curveTo(-2.7,-3,-1.9,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,1.9,-3.5).curveTo(2.7,-3,3.2,-2.2).curveTo(3.6,-1.3,3.6,-0.2).lineTo(3.6,0.5).lineTo(-1.9,0.5).curveTo(-1.8,1.4,-1.2,2).curveTo(-0.5,2.4,0.5,2.4).curveTo(1.1,2.4,1.8,2.2).lineTo(2.9,1.8).lineTo(3.4,3.1).curveTo(2.8,3.5,2,3.8).curveTo(1.3,4,0.4,4).curveTo(-0.8,4,-1.7,3.5).closePath().moveTo(2,-0.8).curveTo(1.9,-1.6,1.4,-2.1).curveTo(0.8,-2.5,0,-2.5).curveTo(-0.8,-2.6,-1.3,-2.1).curveTo(-1.8,-1.6,-1.9,-0.8).lineTo(2,-0.8).lineTo(2,-0.8).closePath();
	this.shape_8.setTransform(-14.575,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#053781").beginStroke().moveTo(-3.1,3.8).lineTo(-3.1,2.5).lineTo(0.7,-2.3).lineTo(-3,-2.3).lineTo(-3,-3.8).lineTo(3,-3.8).lineTo(3,-2.5).lineTo(-0.9,2.3).lineTo(3.1,2.3).lineTo(3.1,3.8).closePath();
	this.shape_9.setTransform(-22.425,1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#053781").beginStroke().moveTo(-2.2,3.9).lineTo(-2.2,-3.8).lineTo(-0.7,-3.8).lineTo(-0.7,-2.4).curveTo(-0.1,-3.9,1.3,-3.9).curveTo(1.8,-3.9,2.3,-3.7).lineTo(2,-2.1).curveTo(1.6,-2.2,1.2,-2.2).curveTo(0.3,-2.2,-0.1,-1.6).curveTo(-0.6,-1.1,-0.6,0).lineTo(-0.6,3.9).closePath();
	this.shape_10.setTransform(-28.55,1.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#053781").beginStroke().moveTo(-1.7,3.5).curveTo(-2.6,3,-3.1,2.1).curveTo(-3.6,1.2,-3.6,-0).curveTo(-3.6,-1.2,-3.2,-2.1).curveTo(-2.7,-3,-1.9,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,1.9,-3.5).curveTo(2.7,-3,3.2,-2.2).curveTo(3.6,-1.3,3.6,-0.2).lineTo(3.6,0.5).lineTo(-1.9,0.5).curveTo(-1.8,1.4,-1.2,2).curveTo(-0.5,2.4,0.5,2.4).curveTo(1.1,2.4,1.8,2.2).lineTo(2.9,1.8).lineTo(3.4,3.1).curveTo(2.8,3.5,2,3.8).curveTo(1.3,4,0.4,4).curveTo(-0.8,4,-1.7,3.5).closePath().moveTo(2,-0.8).curveTo(1.9,-1.6,1.4,-2.1).curveTo(0.8,-2.5,0,-2.5).curveTo(-0.8,-2.6,-1.3,-2.1).curveTo(-1.8,-1.6,-1.9,-0.8).lineTo(2,-0.8).lineTo(2,-0.8).closePath();
	this.shape_11.setTransform(-36.075,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#053781").beginStroke().moveTo(-0.9,5.3).lineTo(-5.3,-5.3).lineTo(-3.4,-5.3).lineTo(0,3.3).lineTo(3.4,-5.3).lineTo(5.3,-5.3).lineTo(0.9,5.3).closePath();
	this.shape_12.setTransform(-45.675,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promocopy1, new cjs.Rectangle(-58.5,-11.9,117,23.8), null);


(lib.plug_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.plug();
	this.instance.setTransform(-77,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-45,45).lineTo(-45,-45).lineTo(45,-45).lineTo(45,45).closePath();
	mask.setTransform(-37,-34.9);

	// Layer_4
	this.instance_1 = new lib.plug();
	this.instance_1.setTransform(-77,-106);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-105.5,313,140);


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


(lib.noise_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.noise();
	this.instance.setTransform(-256,256);

	this.instance_1 = new lib.noise();
	this.instance_1.setTransform(-256,-256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-256,512,1024);


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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,5.7).lineTo(-1.4,-0.4).lineTo(-2.4,-0.4).lineTo(-2.4,-2).lineTo(-1.4,-2).lineTo(-1.4,-3.1).curveTo(-1.4,-4.4,-0.8,-5).curveTo(-0.1,-5.7,1,-5.7).curveTo(1.9,-5.7,2.4,-5.4).lineTo(2.1,-4).curveTo(1.8,-4.1,1.3,-4.1).curveTo(0.8,-4.1,0.5,-3.9).curveTo(0.3,-3.6,0.3,-3).lineTo(0.3,-2).lineTo(2.2,-2).lineTo(2.2,-0.4).lineTo(0.3,-0.4).lineTo(0.3,5.7).closePath();
	this.shape.setTransform(48.675,11.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,3.5).curveTo(-2.9,3,-3.3,2.1).curveTo(-3.8,1.2,-3.8,0).curveTo(-3.8,-1.2,-3.3,-2.1).curveTo(-2.9,-3,-2.1,-3.5).curveTo(-1.3,-4,-0.3,-4).curveTo(1.3,-4,2.3,-2.7).lineTo(2.3,-3.8).lineTo(3.8,-3.8).lineTo(3.8,3.8).lineTo(2.3,3.8).lineTo(2.3,2.7).curveTo(1.3,4,-0.3,4).curveTo(-1.3,4,-2.1,3.5).closePath().moveTo(-1.5,-1.7).curveTo(-2.2,-1.1,-2.1,0).curveTo(-2.2,1.1,-1.5,1.8).curveTo(-0.9,2.4,0,2.4).curveTo(1,2.4,1.6,1.8).curveTo(2.2,1.1,2.2,0).curveTo(2.2,-1.1,1.6,-1.8).curveTo(1,-2.4,0,-2.4).curveTo(-0.9,-2.4,-1.5,-1.7).closePath();
	this.shape_1.setTransform(41.2,13.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,4.3).curveTo(-1.4,3.7,-1.4,2.6).lineTo(-1.4,-1.3).lineTo(-2.4,-1.3).lineTo(-2.4,-2.8).lineTo(-1.4,-2.8).lineTo(-1.4,-4.6).lineTo(0.3,-5).lineTo(0.3,-2.8).lineTo(2.3,-2.8).lineTo(2.3,-1.3).lineTo(0.3,-1.3).lineTo(0.3,2.3).curveTo(0.3,3.4,1.3,3.4).lineTo(2.2,3.2).lineTo(2.4,4.7).curveTo(1.8,5,1,4.9).curveTo(-0.2,4.9,-0.8,4.3).closePath();
	this.shape_2.setTransform(30.625,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,5.6).lineTo(-0.8,-2.1).lineTo(0.8,-2.1).lineTo(0.8,5.6).closePath().moveTo(-0.8,-3.8).curveTo(-1.1,-4.1,-1.1,-4.6).curveTo(-1.1,-5.1,-0.8,-5.4).curveTo(-0.5,-5.6,-0,-5.6).curveTo(0.5,-5.6,0.8,-5.3).curveTo(1.1,-5,1.1,-4.6).curveTo(1.1,-4.2,0.8,-3.9).curveTo(0.5,-3.6,-0,-3.6).curveTo(-0.5,-3.6,-0.8,-3.8).closePath();
	this.shape_3.setTransform(26.125,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,3).curveTo(-3.4,2.1,-3.4,0.6).lineTo(-3.4,-3.9).lineTo(-1.8,-3.9).lineTo(-1.8,0.2).curveTo(-1.8,1.3,-1.3,1.8).curveTo(-0.9,2.4,-0.1,2.4).curveTo(0.8,2.4,1.3,1.8).curveTo(1.8,1.2,1.8,0.3).lineTo(1.8,-3.9).lineTo(3.4,-3.9).lineTo(3.4,3.7).lineTo(1.9,3.7).lineTo(1.9,2.6).curveTo(1.5,3.3,0.9,3.6).curveTo(0.2,3.9,-0.6,3.9).curveTo(-1.9,3.9,-2.7,3).closePath();
	this.shape_4.setTransform(19.725,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,5.2).curveTo(-1.6,4.7,-1.6,3.6).lineTo(-1.6,-5.7).lineTo(0.1,-5.7).lineTo(0.1,3.3).curveTo(0.1,3.7,0.3,3.9).curveTo(0.5,4.1,0.8,4.1).lineTo(1.4,4).lineTo(1.6,5.5).curveTo(1.1,5.7,0.4,5.7).curveTo(-0.6,5.7,-1.1,5.2).closePath();
	this.shape_5.setTransform(13.65,11.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,4.8).lineTo(-3.4,3.1).curveTo(-2.1,3.9,-0.5,3.9).curveTo(0.6,3.9,1.3,3.4).curveTo(1.9,3,2,2.4).curveTo(2,2,1.7,1.7).curveTo(1.4,1.4,1,1.2).lineTo(-0.2,0.8).curveTo(-1.3,0.4,-2,0.1).curveTo(-2.7,-0.2,-3.2,-0.9).curveTo(-3.7,-1.5,-3.7,-2.5).curveTo(-3.7,-3.9,-2.7,-4.7).curveTo(-1.7,-5.5,0.1,-5.5).curveTo(1,-5.5,1.9,-5.3).curveTo(2.7,-5.1,3.3,-4.8).lineTo(2.8,-3.1).curveTo(2.3,-3.5,1.6,-3.7).curveTo(0.9,-3.9,0.2,-3.9).curveTo(-0.9,-3.9,-1.4,-3.5).curveTo(-1.9,-3.1,-1.9,-2.5).curveTo(-1.9,-2.1,-1.6,-1.8).curveTo(-1.3,-1.4,-0.8,-1.3).lineTo(0.4,-0.8).lineTo(2.1,-0.1).curveTo(2.8,0.2,3.3,0.8).curveTo(3.7,1.4,3.7,2.3).curveTo(3.7,3.8,2.6,4.7).curveTo(1.5,5.5,-0.5,5.5).curveTo(-2.4,5.5,-3.7,4.8).closePath();
	this.shape_6.setTransform(6.6,11.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,3).curveTo(-3.4,2.1,-3.4,0.6).lineTo(-3.4,-3.9).lineTo(-1.8,-3.9).lineTo(-1.8,0.2).curveTo(-1.8,1.3,-1.3,1.8).curveTo(-0.9,2.4,-0.1,2.4).curveTo(0.8,2.4,1.3,1.8).curveTo(1.8,1.2,1.8,0.3).lineTo(1.8,-3.9).lineTo(3.4,-3.9).lineTo(3.4,3.7).lineTo(1.9,3.7).lineTo(1.9,2.6).curveTo(1.5,3.3,0.9,3.6).curveTo(0.2,3.9,-0.6,3.9).curveTo(-1.9,3.9,-2.7,3).closePath();
	this.shape.setTransform(61.525,13.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8,3.9).lineTo(1.8,-0.2).curveTo(1.8,-1.3,1.3,-1.8).curveTo(0.9,-2.4,0.1,-2.3).curveTo(-0.8,-2.4,-1.3,-1.8).curveTo(-1.8,-1.2,-1.8,-0.3).lineTo(-1.8,3.9).lineTo(-3.4,3.9).lineTo(-3.4,-3.8).lineTo(-1.9,-3.8).lineTo(-1.9,-2.6).curveTo(-1.5,-3.2,-0.9,-3.6).curveTo(-0.3,-3.9,0.5,-3.9).curveTo(1.9,-3.9,2.7,-3).curveTo(3.4,-2.2,3.4,-0.5).lineTo(3.4,3.9).closePath();
	this.shape_1.setTransform(52.825,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,5.6).lineTo(-1.1,2.6).lineTo(-1.9,3.4).lineTo(-1.9,5.6).lineTo(-3.6,5.6).lineTo(-3.6,-5.6).lineTo(-1.9,-5.6).lineTo(-1.9,1.3).lineTo(1.3,-2).lineTo(3.4,-2).lineTo(0,1.4).lineTo(3.6,5.6).closePath();
	this.shape_2.setTransform(41.125,11.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,6.9).lineTo(-1.7,5.5).lineTo(-1.3,5.5).curveTo(-0.7,5.5,-0.4,5.1).curveTo(-0.1,4.8,-0,3.9).lineTo(-0,-3.5).lineTo(1.6,-3.5).lineTo(1.6,4.1).curveTo(1.6,5.5,0.9,6.3).curveTo(0.2,7,-1,7).lineTo(-1.8,6.9).closePath().moveTo(0,-5.2).curveTo(-0.3,-5.5,-0.3,-6).curveTo(-0.3,-6.5,0,-6.8).curveTo(0.3,-7,0.8,-7).curveTo(1.3,-7,1.6,-6.7).curveTo(1.8,-6.4,1.8,-6).curveTo(1.8,-5.6,1.6,-5.3).curveTo(1.3,-5,0.8,-5).curveTo(0.3,-5,0,-5.2).closePath();
	this.shape_3.setTransform(33.8,13.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,5.6).lineTo(-0.8,-2.1).lineTo(0.8,-2.1).lineTo(0.8,5.6).closePath().moveTo(-0.8,-3.8).curveTo(-1.1,-4.1,-1.1,-4.6).curveTo(-1.1,-5.1,-0.8,-5.4).curveTo(-0.5,-5.6,-0,-5.6).curveTo(0.5,-5.6,0.8,-5.3).curveTo(1.1,-5,1.1,-4.6).curveTo(1.1,-4.2,0.8,-3.9).curveTo(0.5,-3.6,-0,-3.6).curveTo(-0.5,-3.6,-0.8,-3.8).closePath();
	this.shape_4.setTransform(30.775,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,5.6).lineTo(-1.1,2.6).lineTo(-1.9,3.4).lineTo(-1.9,5.6).lineTo(-3.6,5.6).lineTo(-3.6,-5.6).lineTo(-1.9,-5.6).lineTo(-1.9,1.3).lineTo(1.3,-2).lineTo(3.4,-2).lineTo(0,1.4).lineTo(3.6,5.6).closePath();
	this.shape_5.setTransform(25.225,11.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,3.5).curveTo(-2.6,3,-3.1,2.1).curveTo(-3.6,1.2,-3.6,0).curveTo(-3.6,-1.2,-3.2,-2.1).curveTo(-2.7,-3,-1.9,-3.5).curveTo(-1.1,-4,0,-4).curveTo(1.1,-4,1.9,-3.5).curveTo(2.7,-3.1,3.2,-2.1).curveTo(3.6,-1.3,3.6,-0.2).lineTo(3.6,0.5).lineTo(-1.9,0.5).curveTo(-1.8,1.4,-1.2,2).curveTo(-0.5,2.4,0.5,2.4).curveTo(1.1,2.4,1.8,2.3).lineTo(2.9,1.7).lineTo(3.4,3.2).curveTo(2.8,3.5,2,3.8).curveTo(1.3,4,0.4,4).curveTo(-0.8,4,-1.7,3.5).closePath().moveTo(2,-0.8).curveTo(1.9,-1.6,1.4,-2.1).curveTo(0.8,-2.5,0,-2.5).curveTo(-0.8,-2.6,-1.3,-2.1).curveTo(-1.8,-1.6,-1.9,-0.8).lineTo(2,-0.8).lineTo(2,-0.8).closePath();
	this.shape_6.setTransform(16.375,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,5.3).lineTo(-4.1,-5.3).lineTo(0.1,-5.3).curveTo(1.2,-5.3,2.1,-5).curveTo(2.9,-4.6,3.3,-4).curveTo(3.7,-3.3,3.7,-2.5).curveTo(3.7,-1.8,3.4,-1.2).curveTo(3,-0.6,2.4,-0.2).curveTo(3.3,0.1,3.7,0.8).curveTo(4.1,1.5,4.2,2.3).curveTo(4.2,3.2,3.7,3.9).curveTo(3.3,4.6,2.4,5).curveTo(1.6,5.3,0.5,5.3).closePath().moveTo(-2.4,3.7).lineTo(0.5,3.7).curveTo(1.4,3.7,1.9,3.3).curveTo(2.3,2.8,2.4,2.2).curveTo(2.3,1.5,1.9,1.1).curveTo(1.4,0.7,0.5,0.7).lineTo(-2.4,0.7).closePath().moveTo(-2.4,-0.9).lineTo(0.1,-0.9).curveTo(1,-0.9,1.5,-1.3).curveTo(1.9,-1.7,1.9,-2.3).curveTo(1.9,-2.9,1.5,-3.3).curveTo(1,-3.7,0.1,-3.7).lineTo(-2.4,-3.7).closePath();
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,2.7).lineTo(1.7,1).lineTo(-5.3,1).lineTo(-5.3,-0.9).lineTo(1.7,-0.9).lineTo(-0,-2.6).lineTo(1.3,-4).lineTo(5.3,-0).lineTo(1.3,4).closePath();
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,2.7).lineTo(1.7,1).lineTo(-5.3,1).lineTo(-5.3,-0.9).lineTo(1.7,-0.9).lineTo(-0,-2.6).lineTo(1.3,-4).lineTo(5.3,-0).lineTo(1.3,4).closePath();
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.7,12.8).curveTo(-1.5,11.9,-3.8,9.5).curveTo(-7.6,5.7,-7.6,0).curveTo(-7.6,-5.7,-3.8,-9.5).curveTo(-2,-11.3,0.4,-12.3).curveTo(2.9,-13.3,5.7,-13.3).curveTo(11.4,-13.3,15.3,-9.5).curveTo(19.1,-5.7,19,0).curveTo(19.1,5.7,15.3,9.5).curveTo(12.9,11.9,9.8,12.8).curveTo(7.9,13.3,5.7,13.3).curveTo(3.6,13.3,1.7,12.8).closePath().moveTo(-2.2,-8).curveTo(-5.3,-4.9,-5.3,0).curveTo(-5.3,4.9,-2.2,8).curveTo(1,11.2,5.7,11.2).curveTo(10.5,11.2,13.7,8).curveTo(16.8,4.9,16.8,0).curveTo(16.8,-4.8,13.7,-8).curveTo(10.5,-11.2,5.7,-11.2).curveTo(1,-11.2,-2.2,-8).closePath().moveTo(82.5,6.9).curveTo(81.6,5.9,81.7,3.6).lineTo(81.7,-2.5).lineTo(79.8,-2.5).lineTo(79.8,-5.2).lineTo(81.8,-5.2).lineTo(82.4,-9.5).lineTo(85.6,-9.5).lineTo(85.6,-5.2).lineTo(88.5,-5.2).lineTo(88.5,-2.4).lineTo(85.6,-2.4).lineTo(85.6,3.1).curveTo(85.6,4.1,85.8,4.5).curveTo(86.1,4.9,86.9,4.9).lineTo(88.2,4.8).lineTo(88.2,7.4).lineTo(87.5,7.7).lineTo(86.4,7.9).lineTo(85.1,8).curveTo(83.4,8,82.5,6.9).closePath().moveTo(70.6,6.2).curveTo(69.1,4.4,69.1,1.4).curveTo(69.1,-1.6,70.7,-3.5).curveTo(72.4,-5.4,75.1,-5.4).curveTo(77.3,-5.4,78.8,-4.1).lineTo(78.2,-1.5).curveTo(77.5,-2.1,77,-2.3).curveTo(76.5,-2.5,75.8,-2.5).curveTo(73.2,-2.5,73.1,1.5).curveTo(73.2,3.3,73.8,4.2).curveTo(74.5,5.2,75.7,5.2).curveTo(76.4,5.2,76.9,5).curveTo(77.6,4.8,78.3,4.3).lineTo(78.8,6.7).lineTo(77.9,7.3).curveTo(76.6,8,74.9,8).curveTo(72.2,8,70.6,6.2).closePath().moveTo(57.9,6.3).curveTo(56.3,4.5,56.3,1.5).curveTo(56.4,-1.6,58,-3.5).curveTo(59.7,-5.4,62.4,-5.4).curveTo(67.7,-5.4,67.7,1.6).lineTo(67.7,2.3).lineTo(60.3,2.3).curveTo(60.3,3.9,61.1,4.5).curveTo(61.8,5.2,63.3,5.2).curveTo(64.2,5.2,64.9,5).curveTo(65.7,4.8,66.6,4.2).lineTo(67.4,6.6).lineTo(66.2,7.2).curveTo(64.6,8,62.5,8).curveTo(59.6,8,57.9,6.3).closePath().moveTo(60.8,-2.1).curveTo(60.4,-1.4,60.3,-0.1).lineTo(63.9,-0.1).lineTo(63.9,-0.2).curveTo(63.9,-2.8,62.2,-2.8).curveTo(61.3,-2.8,60.8,-2.1).closePath().moveTo(-50.3,7).curveTo(-51.2,6.1,-51.2,4.3).curveTo(-51.2,2.8,-50.5,1.8).curveTo(-50,0.9,-48.7,0.4).lineTo(-47.2,-0.1).lineTo(-44,-0.7).lineTo(-44,-1).curveTo(-44.1,-1.8,-44.4,-2.2).curveTo(-44.7,-2.5,-45.6,-2.5).curveTo(-46.4,-2.5,-47.5,-2.2).curveTo(-48.5,-2,-49.5,-1.5).lineTo(-50.5,-4).lineTo(-49,-4.6).curveTo(-48.5,-4.9,-47.7,-5).curveTo(-46.2,-5.4,-44.6,-5.4).curveTo(-42.1,-5.4,-41.1,-4.4).curveTo(-40.2,-3.4,-40.2,-0.9).lineTo(-40.2,5.3).curveTo(-40.1,5.9,-39.9,6.1).curveTo(-39.7,6.4,-39.2,6.4).lineTo(-39,6.4).lineTo(-39,7.8).lineTo(-42.7,7.8).curveTo(-44,7.8,-44,6.6).lineTo(-44,6.4).lineTo(-44.9,7.1).lineTo(-45.7,7.5).curveTo(-46.8,7.9,-47.8,7.9).curveTo(-49.6,7.9,-50.3,7).closePath().moveTo(-46.4,2.2).curveTo(-46.9,2.4,-47.1,2.8).curveTo(-47.3,3.1,-47.3,3.9).curveTo(-47.3,4.6,-47,4.9).curveTo(-46.9,5.2,-46.3,5.2).curveTo(-45.8,5.2,-45.1,4.9).curveTo(-44.5,4.6,-44,4.1).lineTo(-44,1.6).curveTo(-45.5,1.8,-46.4,2.2).closePath().moveTo(47.7,7.8).lineTo(47.7,-5.2).lineTo(51.4,-5.2).lineTo(51.4,-3.5).lineTo(51.5,-3.5).curveTo(52.2,-4.4,52.9,-4.8).curveTo(53.5,-5.3,54.3,-5.3).lineTo(54.8,-5.2).lineTo(55.5,-5.1).lineTo(55.5,-1.5).lineTo(54.6,-1.7).lineTo(53.9,-1.8).curveTo(53.2,-1.8,52.6,-1.6).lineTo(51.6,-0.9).lineTo(51.6,7.8).closePath().moveTo(41,7.8).lineTo(41,-5.2).lineTo(45,-5.2).lineTo(45,7.8).closePath().moveTo(25.4,7.8).lineTo(25.4,-9.5).lineTo(31,-9.5).curveTo(32.8,-9.5,33.8,-9.3).curveTo(34.9,-9,35.9,-8.4).curveTo(37.3,-7.4,38.2,-5.4).curveTo(39,-3.4,39,-0.8).curveTo(39,2.7,37.3,4.9).curveTo(36.5,6,35.3,6.7).curveTo(34.3,7.3,33.2,7.6).curveTo(32,7.8,30.2,7.8).closePath().moveTo(29.5,4.8).lineTo(30.8,4.8).curveTo(32.7,4.8,33.7,3.4).curveTo(34.8,1.9,34.7,-0.8).curveTo(34.7,-3.9,33.6,-5.4).curveTo(32.9,-6.5,30.9,-6.5).lineTo(29.5,-6.5).closePath().moveTo(-23.9,7.8).lineTo(-23.9,5.1).lineTo(-18.5,-2.5).lineTo(-21.4,-2.5).curveTo(-22.3,-2.5,-22.3,-1.7).lineTo(-22.3,-1.4).lineTo(-23.9,-1.4).lineTo(-23.9,-3.8).curveTo(-23.9,-4.5,-23.5,-4.9).curveTo(-23.2,-5.2,-22.4,-5.2).lineTo(-14,-5.2).lineTo(-14,-2.5).lineTo(-19.4,5.1).lineTo(-13.6,5.1).lineTo(-13.6,7.8).closePath().moveTo(-29.8,7.8).lineTo(-29.8,-0.4).curveTo(-29.8,-1.4,-30,-1.8).curveTo(-30.2,-2.1,-30.8,-2.1).curveTo(-32,-2.1,-33.1,-1).lineTo(-33.1,7.8).lineTo(-37.1,7.8).lineTo(-37.1,-2.7).curveTo(-37.1,-3.2,-37.4,-3.5).curveTo(-37.6,-3.7,-38.1,-3.7).lineTo(-38.3,-3.7).lineTo(-38.3,-5.2).lineTo(-34.4,-5.2).curveTo(-33.2,-5.2,-33.2,-4).lineTo(-33.2,-3.5).curveTo(-32.1,-4.5,-31.2,-4.9).curveTo(-30.2,-5.4,-29,-5.4).curveTo(-27.3,-5.4,-26.6,-4.4).curveTo(-26.1,-3.9,-25.9,-3.3).curveTo(-25.7,-2.6,-25.8,-1).lineTo(-25.8,7.8).closePath().moveTo(-57.1,7.8).lineTo(-57.1,-2.7).curveTo(-57.1,-3.2,-57.3,-3.5).curveTo(-57.6,-3.7,-58.1,-3.7).lineTo(-58.3,-3.7).lineTo(-58.3,-5.2).lineTo(-54.4,-5.2).curveTo(-53.7,-5.2,-53.3,-4.8).curveTo(-53,-4.5,-53,-3.9).lineTo(-53,7.8).closePath().moveTo(-64.1,7.8).lineTo(-64.1,-7.1).curveTo(-64.1,-7.6,-64.4,-7.8).curveTo(-64.6,-8,-65.2,-8).lineTo(-65.4,-8).lineTo(-65.4,-9.5).lineTo(-61.4,-9.5).curveTo(-60.8,-9.5,-60.4,-9.2).curveTo(-60.1,-8.8,-60.1,-8.2).lineTo(-60.1,7.8).closePath().moveTo(-71.1,7.8).lineTo(-71.1,-7.1).curveTo(-71.1,-7.6,-71.3,-7.8).curveTo(-71.6,-8,-72.1,-8).lineTo(-72.4,-8).lineTo(-72.4,-9.5).lineTo(-68.3,-9.5).curveTo(-67.8,-9.5,-67.4,-9.2).curveTo(-67,-8.8,-67.1,-8.2).lineTo(-67.1,7.8).closePath().moveTo(-76.9,7.8).lineTo(-78.1,3.6).lineTo(-83,3.6).lineTo(-84.3,7.8).lineTo(-88.5,7.8).lineTo(-83.9,-5.9).lineTo(-83.6,-6.7).lineTo(-83.6,-7.3).curveTo(-83.6,-8,-84.6,-8).lineTo(-85.2,-8).lineTo(-85.2,-9.5).lineTo(-78.7,-9.5).curveTo(-78,-9.5,-77.5,-9.2).curveTo(-77,-8.9,-76.9,-8.2).lineTo(-72.3,7.8).closePath().moveTo(-78.7,0.8).lineTo(-80.4,-5.6).lineTo(-82.4,0.8).lineTo(-78.7,0.8).closePath().moveTo(9.3,7.5).lineTo(9.3,-5.5).lineTo(11.6,-5.5).curveTo(12.5,-5.5,12.8,-5.2).curveTo(13.2,-4.8,13.2,-4).lineTo(13.2,7.5).closePath().moveTo(3.8,7.5).lineTo(3.8,-6).curveTo(3.8,-6.7,3.7,-6.9).curveTo(3.4,-7.2,2.8,-7.2).lineTo(2.7,-7.2).lineTo(2.7,-8.8).lineTo(6.1,-8.8).curveTo(7,-8.8,7.3,-8.4).curveTo(7.7,-8.1,7.6,-7.2).lineTo(7.6,7.5).closePath().moveTo(-1.7,7.5).lineTo(-1.7,-4).curveTo(-1.7,-4.8,-1.4,-5.2).curveTo(-1,-5.5,-0.1,-5.5).lineTo(2.1,-5.5).lineTo(2.1,7.5).closePath().moveTo(41.3,-6.6).curveTo(40.7,-7.1,40.6,-8).curveTo(40.7,-8.8,41.3,-9.3).curveTo(41.9,-9.8,43,-9.8).curveTo(44.1,-9.8,44.7,-9.3).curveTo(45.3,-8.8,45.3,-8).curveTo(45.3,-7.1,44.7,-6.6).curveTo(44.1,-6.1,43,-6.1).curveTo(41.9,-6.1,41.3,-6.6).closePath().moveTo(-57,-6.6).curveTo(-57.6,-7.1,-57.6,-8).curveTo(-57.6,-8.8,-57,-9.3).curveTo(-56.4,-9.8,-55.3,-9.8).curveTo(-54.2,-9.8,-53.6,-9.3).curveTo(-52.9,-8.8,-53,-8).curveTo(-52.9,-7.1,-53.6,-6.6).curveTo(-54.2,-6.1,-55.3,-6.1).curveTo(-56.4,-6.1,-57,-6.6).closePath();
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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(1.7,12.8).curveTo(-1.5,11.9,-3.8,9.5).curveTo(-7.6,5.7,-7.6,0).curveTo(-7.6,-5.7,-3.8,-9.5).curveTo(-2,-11.3,0.4,-12.3).curveTo(2.9,-13.3,5.7,-13.3).curveTo(11.4,-13.3,15.3,-9.5).curveTo(19.1,-5.7,19,0).curveTo(19.1,5.7,15.3,9.5).curveTo(12.9,11.9,9.8,12.8).curveTo(7.9,13.3,5.7,13.3).curveTo(3.6,13.3,1.7,12.8).closePath().moveTo(-2.2,-8).curveTo(-5.3,-4.9,-5.3,0).curveTo(-5.3,4.9,-2.2,8).curveTo(1,11.2,5.7,11.2).curveTo(10.5,11.2,13.7,8).curveTo(16.8,4.9,16.8,0).curveTo(16.8,-4.8,13.7,-8).curveTo(10.5,-11.2,5.7,-11.2).curveTo(1,-11.2,-2.2,-8).closePath().moveTo(82.5,6.9).curveTo(81.6,5.9,81.7,3.6).lineTo(81.7,-2.5).lineTo(79.8,-2.5).lineTo(79.8,-5.2).lineTo(81.8,-5.2).lineTo(82.4,-9.5).lineTo(85.6,-9.5).lineTo(85.6,-5.2).lineTo(88.5,-5.2).lineTo(88.5,-2.4).lineTo(85.6,-2.4).lineTo(85.6,3.1).curveTo(85.6,4.1,85.8,4.5).curveTo(86.1,4.9,86.9,4.9).lineTo(88.2,4.8).lineTo(88.2,7.4).lineTo(87.5,7.7).lineTo(86.4,7.9).lineTo(85.1,8).curveTo(83.4,8,82.5,6.9).closePath().moveTo(70.6,6.2).curveTo(69.1,4.4,69.1,1.4).curveTo(69.1,-1.6,70.7,-3.5).curveTo(72.4,-5.4,75.1,-5.4).curveTo(77.3,-5.4,78.8,-4.1).lineTo(78.2,-1.5).curveTo(77.5,-2.1,77,-2.3).curveTo(76.5,-2.5,75.8,-2.5).curveTo(73.2,-2.5,73.1,1.5).curveTo(73.2,3.3,73.8,4.2).curveTo(74.5,5.2,75.7,5.2).curveTo(76.4,5.2,76.9,5).curveTo(77.6,4.8,78.3,4.3).lineTo(78.8,6.7).lineTo(77.9,7.3).curveTo(76.6,8,74.9,8).curveTo(72.2,8,70.6,6.2).closePath().moveTo(57.9,6.3).curveTo(56.3,4.5,56.3,1.5).curveTo(56.4,-1.6,58,-3.5).curveTo(59.7,-5.4,62.4,-5.4).curveTo(67.7,-5.4,67.7,1.6).lineTo(67.7,2.3).lineTo(60.3,2.3).curveTo(60.3,3.9,61.1,4.5).curveTo(61.8,5.2,63.3,5.2).curveTo(64.2,5.2,64.9,5).curveTo(65.7,4.8,66.6,4.2).lineTo(67.4,6.6).lineTo(66.2,7.2).curveTo(64.6,8,62.5,8).curveTo(59.6,8,57.9,6.3).closePath().moveTo(60.8,-2.1).curveTo(60.4,-1.4,60.3,-0.1).lineTo(63.9,-0.1).lineTo(63.9,-0.2).curveTo(63.9,-2.8,62.2,-2.8).curveTo(61.3,-2.8,60.8,-2.1).closePath().moveTo(-50.3,7).curveTo(-51.2,6.1,-51.2,4.3).curveTo(-51.2,2.8,-50.5,1.8).curveTo(-50,0.9,-48.7,0.4).lineTo(-47.2,-0.1).lineTo(-44,-0.7).lineTo(-44,-1).curveTo(-44.1,-1.8,-44.4,-2.2).curveTo(-44.7,-2.5,-45.6,-2.5).curveTo(-46.4,-2.5,-47.5,-2.2).curveTo(-48.5,-2,-49.5,-1.5).lineTo(-50.5,-4).lineTo(-49,-4.6).curveTo(-48.5,-4.9,-47.7,-5).curveTo(-46.2,-5.4,-44.6,-5.4).curveTo(-42.1,-5.4,-41.1,-4.4).curveTo(-40.2,-3.4,-40.2,-0.9).lineTo(-40.2,5.3).curveTo(-40.1,5.9,-39.9,6.1).curveTo(-39.7,6.4,-39.2,6.4).lineTo(-39,6.4).lineTo(-39,7.8).lineTo(-42.7,7.8).curveTo(-44,7.8,-44,6.6).lineTo(-44,6.4).lineTo(-44.9,7.1).lineTo(-45.7,7.5).curveTo(-46.8,7.9,-47.8,7.9).curveTo(-49.6,7.9,-50.3,7).closePath().moveTo(-46.4,2.2).curveTo(-46.9,2.4,-47.1,2.8).curveTo(-47.3,3.1,-47.3,3.9).curveTo(-47.3,4.6,-47,4.9).curveTo(-46.9,5.2,-46.3,5.2).curveTo(-45.8,5.2,-45.1,4.9).curveTo(-44.5,4.6,-44,4.1).lineTo(-44,1.6).curveTo(-45.5,1.8,-46.4,2.2).closePath().moveTo(47.7,7.8).lineTo(47.7,-5.2).lineTo(51.4,-5.2).lineTo(51.4,-3.5).lineTo(51.5,-3.5).curveTo(52.2,-4.4,52.9,-4.8).curveTo(53.5,-5.3,54.3,-5.3).lineTo(54.8,-5.2).lineTo(55.5,-5.1).lineTo(55.5,-1.5).lineTo(54.6,-1.7).lineTo(53.9,-1.8).curveTo(53.2,-1.8,52.6,-1.6).lineTo(51.6,-0.9).lineTo(51.6,7.8).closePath().moveTo(41,7.8).lineTo(41,-5.2).lineTo(45,-5.2).lineTo(45,7.8).closePath().moveTo(25.4,7.8).lineTo(25.4,-9.5).lineTo(31,-9.5).curveTo(32.8,-9.5,33.8,-9.3).curveTo(34.9,-9,35.9,-8.4).curveTo(37.3,-7.4,38.2,-5.4).curveTo(39,-3.4,39,-0.8).curveTo(39,2.7,37.3,4.9).curveTo(36.5,6,35.3,6.7).curveTo(34.3,7.3,33.2,7.6).curveTo(32,7.8,30.2,7.8).closePath().moveTo(29.5,4.8).lineTo(30.8,4.8).curveTo(32.7,4.8,33.7,3.4).curveTo(34.8,1.9,34.7,-0.8).curveTo(34.7,-3.9,33.6,-5.4).curveTo(32.9,-6.5,30.9,-6.5).lineTo(29.5,-6.5).closePath().moveTo(-23.9,7.8).lineTo(-23.9,5.1).lineTo(-18.5,-2.5).lineTo(-21.4,-2.5).curveTo(-22.3,-2.5,-22.3,-1.7).lineTo(-22.3,-1.4).lineTo(-23.9,-1.4).lineTo(-23.9,-3.8).curveTo(-23.9,-4.5,-23.5,-4.9).curveTo(-23.2,-5.2,-22.4,-5.2).lineTo(-14,-5.2).lineTo(-14,-2.5).lineTo(-19.4,5.1).lineTo(-13.6,5.1).lineTo(-13.6,7.8).closePath().moveTo(-29.8,7.8).lineTo(-29.8,-0.4).curveTo(-29.8,-1.4,-30,-1.8).curveTo(-30.2,-2.1,-30.8,-2.1).curveTo(-32,-2.1,-33.1,-1).lineTo(-33.1,7.8).lineTo(-37.1,7.8).lineTo(-37.1,-2.7).curveTo(-37.1,-3.2,-37.4,-3.5).curveTo(-37.6,-3.7,-38.1,-3.7).lineTo(-38.3,-3.7).lineTo(-38.3,-5.2).lineTo(-34.4,-5.2).curveTo(-33.2,-5.2,-33.2,-4).lineTo(-33.2,-3.5).curveTo(-32.1,-4.5,-31.2,-4.9).curveTo(-30.2,-5.4,-29,-5.4).curveTo(-27.3,-5.4,-26.6,-4.4).curveTo(-26.1,-3.9,-25.9,-3.3).curveTo(-25.7,-2.6,-25.8,-1).lineTo(-25.8,7.8).closePath().moveTo(-57.1,7.8).lineTo(-57.1,-2.7).curveTo(-57.1,-3.2,-57.3,-3.5).curveTo(-57.6,-3.7,-58.1,-3.7).lineTo(-58.3,-3.7).lineTo(-58.3,-5.2).lineTo(-54.4,-5.2).curveTo(-53.7,-5.2,-53.3,-4.8).curveTo(-53,-4.5,-53,-3.9).lineTo(-53,7.8).closePath().moveTo(-64.1,7.8).lineTo(-64.1,-7.1).curveTo(-64.1,-7.6,-64.4,-7.8).curveTo(-64.6,-8,-65.2,-8).lineTo(-65.4,-8).lineTo(-65.4,-9.5).lineTo(-61.4,-9.5).curveTo(-60.8,-9.5,-60.4,-9.2).curveTo(-60.1,-8.8,-60.1,-8.2).lineTo(-60.1,7.8).closePath().moveTo(-71.1,7.8).lineTo(-71.1,-7.1).curveTo(-71.1,-7.6,-71.3,-7.8).curveTo(-71.6,-8,-72.1,-8).lineTo(-72.4,-8).lineTo(-72.4,-9.5).lineTo(-68.3,-9.5).curveTo(-67.8,-9.5,-67.4,-9.2).curveTo(-67,-8.8,-67.1,-8.2).lineTo(-67.1,7.8).closePath().moveTo(-76.9,7.8).lineTo(-78.1,3.6).lineTo(-83,3.6).lineTo(-84.3,7.8).lineTo(-88.5,7.8).lineTo(-83.9,-5.9).lineTo(-83.6,-6.7).lineTo(-83.6,-7.3).curveTo(-83.6,-8,-84.6,-8).lineTo(-85.2,-8).lineTo(-85.2,-9.5).lineTo(-78.7,-9.5).curveTo(-78,-9.5,-77.5,-9.2).curveTo(-77,-8.9,-76.9,-8.2).lineTo(-72.3,7.8).closePath().moveTo(-78.7,0.8).lineTo(-80.4,-5.6).lineTo(-82.4,0.8).lineTo(-78.7,0.8).closePath().moveTo(9.3,7.5).lineTo(9.3,-5.5).lineTo(11.6,-5.5).curveTo(12.5,-5.5,12.8,-5.2).curveTo(13.2,-4.8,13.2,-4).lineTo(13.2,7.5).closePath().moveTo(3.8,7.5).lineTo(3.8,-6).curveTo(3.8,-6.7,3.7,-6.9).curveTo(3.4,-7.2,2.8,-7.2).lineTo(2.7,-7.2).lineTo(2.7,-8.8).lineTo(6.1,-8.8).curveTo(7,-8.8,7.3,-8.4).curveTo(7.7,-8.1,7.6,-7.2).lineTo(7.6,7.5).closePath().moveTo(-1.7,7.5).lineTo(-1.7,-4).curveTo(-1.7,-4.8,-1.4,-5.2).curveTo(-1,-5.5,-0.1,-5.5).lineTo(2.1,-5.5).lineTo(2.1,7.5).closePath().moveTo(41.3,-6.6).curveTo(40.7,-7.1,40.6,-8).curveTo(40.7,-8.8,41.3,-9.3).curveTo(41.9,-9.8,43,-9.8).curveTo(44.1,-9.8,44.7,-9.3).curveTo(45.3,-8.8,45.3,-8).curveTo(45.3,-7.1,44.7,-6.6).curveTo(44.1,-6.1,43,-6.1).curveTo(41.9,-6.1,41.3,-6.6).closePath().moveTo(-57,-6.6).curveTo(-57.6,-7.1,-57.6,-8).curveTo(-57.6,-8.8,-57,-9.3).curveTo(-56.4,-9.8,-55.3,-9.8).curveTo(-54.2,-9.8,-53.6,-9.3).curveTo(-52.9,-8.8,-53,-8).curveTo(-52.9,-7.1,-53.6,-6.6).curveTo(-54.2,-6.1,-55.3,-6.1).curveTo(-56.4,-6.1,-57,-6.6).closePath();
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
	this.shape.graphics.beginFill("#C4B2CD").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#A0BEB8").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FCAE7F").beginStroke().moveTo(-161.4,161.5).lineTo(-161.4,-161.5).lineTo(161.4,-161.5).lineTo(161.4,161.5).closePath();
	this.shape_2.setTransform(0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#C1EBFB").beginStroke().moveTo(-174.5,174.5).lineTo(-174.5,-174.5).lineTo(174.5,-174.5).lineTo(174.5,174.5).closePath();
	this.shape_3.setTransform(-1.475,7.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#96DCFA").beginStroke().moveTo(-174.5,174.5).lineTo(-174.5,-174.5).lineTo(174.5,-174.5).lineTo(174.5,174.5).closePath();
	this.shape_4.setTransform(-0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#407D71").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F76200").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#96DCFA").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-174.5,350.5,356.5);


(lib.grad = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#000000"],[0.294,1],73.6,85.2,0,73.6,85.2,102.2).beginStroke().moveTo(-124.7,127).lineTo(-124.7,-127).lineTo(124.6,-127).lineTo(124.6,127).closePath();
	this.shape.setTransform(-28.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-153.1,-127,249.3,254), null);


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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.7,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.1,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.1,-4.8,-2,-4).closePath();
	this.shape.setTransform(42,-3.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F86200").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_1.setTransform(31.1,-4.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F86200").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.5).lineTo(1,-2.5).lineTo(1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.1,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.7).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.7).curveTo(1.4,-6.3,1.4,-5.7).curveTo(1.4,-5.1,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_2.setTransform(23.1,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_3.setTransform(17.675,-4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_4.setTransform(8.275,-4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F86200").beginStroke().moveTo(1.8,7).lineTo(-1.3,3.2).lineTo(-2.4,4.3).lineTo(-2.4,7).lineTo(-4.5,7).lineTo(-4.5,-7).lineTo(-2.4,-7).lineTo(-2.4,1.6).lineTo(1.6,-2.5).lineTo(4.3,-2.5).lineTo(0.1,1.8).lineTo(4.5,7).closePath();
	this.shape_5.setTransform(-1.525,-7.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_6.setTransform(-12.575,-4.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F86200").beginStroke().moveTo(-3.9,4.8).lineTo(-3.9,3.2).lineTo(0.9,-2.8).lineTo(-3.7,-2.8).lineTo(-3.7,-4.8).lineTo(3.7,-4.8).lineTo(3.7,-3.2).lineTo(-1.1,2.9).lineTo(3.9,2.9).lineTo(3.9,4.8).closePath();
	this.shape_7.setTransform(-22.45,-4.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_8.setTransform(-30.125,-4.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_9.setTransform(-39.525,-4.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#F86200").beginStroke().moveTo(-1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(-0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1.1,4.8).closePath();
	this.shape_10.setTransform(-49.75,-4.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F86200").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.2,-7.1).lineTo(0.2,4.1).curveTo(0.2,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(2,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_11.setTransform(-56.95,-7.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-65.475,-4.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#F86200").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-76.75,-7.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_14.setTransform(-87.425,-4.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#F86200").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-98.125,-4.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.7,6.9).lineTo(-4.7,-7.1).lineTo(-2.6,-7.1).lineTo(-2.6,-1.4).curveTo(-1.5,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.7,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.7,0.7,4.7,2.1).curveTo(4.7,3.6,4.2,4.7).curveTo(3.7,5.9,2.7,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-1.9,-0.1).curveTo(-2.7,0.7,-2.6,2.1).curveTo(-2.7,3.5,-1.9,4.4).curveTo(-1.3,5.2,-0,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0,-0.9).curveTo(-1.3,-0.9,-1.9,-0.1).closePath();
	this.shape_16.setTransform(-109.05,-7.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#F86200").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_17.setTransform(-120.6,-4.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#F86200").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.5).lineTo(1.1,-2.5).lineTo(1.1,7).closePath().moveTo(-0.9,-4.8).curveTo(-1.4,-5.1,-1.4,-5.7).curveTo(-1.4,-6.3,-0.9,-6.7).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.7).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.1,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-0.9,-4.8).closePath();
	this.shape_18.setTransform(-128.6,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_2, new cjs.Rectangle(-133,-60.8,266,101.69999999999999), null);


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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape.setTransform(93.275,-25.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.6,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.6,-1.6,-2.6,-2.2).curveTo(-1.7,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.8,-7.1).lineTo(4.8,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.7,7.1,-2.6,6.5).closePath().moveTo(-2,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-2,4.3).curveTo(-1.1,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.1,-0.9,-2,-0).closePath();
	this.shape_1.setTransform(82,-27.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_2.setTransform(71.1,-25.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_3.setTransform(60.225,-25.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_4.setTransform(50.75,-25.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_5.setTransform(42.4,-25.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.7,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.6,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.6,4.3).closePath().moveTo(-1.9,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-1.9,2.2).curveTo(-1.2,3,0.1,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.4,2.7,-0).curveTo(2.7,-1.4,2,-2.2).curveTo(1.2,-3,0.1,-3).curveTo(-1.2,-3,-1.9,-2.2).closePath();
	this.shape_6.setTransform(32.25,-25.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-4.8,6.6).lineTo(-4.8,-6.4).lineTo(-2.8,-6.4).lineTo(-2.8,-5).curveTo(-1.6,-6.6,0.4,-6.6).curveTo(1.7,-6.6,2.6,-6).curveTo(3.7,-5.4,4.2,-4.2).curveTo(4.8,-3.1,4.8,-1.7).curveTo(4.8,-0.2,4.2,0.9).curveTo(3.7,2.1,2.6,2.7).curveTo(1.7,3.3,0.4,3.3).curveTo(-1.4,3.3,-2.7,1.9).lineTo(-2.7,6.6).closePath().moveTo(-2,-3.9).curveTo(-2.6,-3.1,-2.7,-1.7).curveTo(-2.6,-0.3,-2,0.6).curveTo(-1.2,1.4,-0.1,1.4).curveTo(1.2,1.4,1.9,0.5).curveTo(2.7,-0.3,2.7,-1.7).curveTo(2.7,-3,1.9,-3.8).curveTo(1.2,-4.7,-0.1,-4.7).curveTo(-1.2,-4.7,-2,-3.9).closePath();
	this.shape_7.setTransform(21.4,-23.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(7.475,-26.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-0.05,-25.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_10.setTransform(-9.375,-25.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.8,6.9).lineTo(-4.8,-7.1).lineTo(-2.7,-7.1).lineTo(-2.7,-1.4).curveTo(-1.4,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.6,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.8,0.7,4.8,2.1).curveTo(4.8,3.6,4.2,4.7).curveTo(3.7,5.9,2.6,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-2,-0.1).curveTo(-2.6,0.7,-2.7,2.1).curveTo(-2.6,3.5,-2,4.4).curveTo(-1.2,5.2,-0.1,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0.1,-0.9).curveTo(-1.2,-0.9,-2,-0.1).closePath();
	this.shape_11.setTransform(-20,-27.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-35.775,-25.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-47.05,-27.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#003781").beginStroke().moveTo(-3.4,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.3,1.6,2.2,0.4).lineTo(2.2,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.4,3.8).closePath();
	this.shape_14.setTransform(-62.6,-25.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-73.525,-25.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#003781").beginStroke().moveTo(-2.3,8.6).lineTo(-2.1,6.8).lineTo(-1.6,6.8).curveTo(-0.8,6.9,-0.5,6.4).curveTo(-0.1,5.9,-0.1,4.9).lineTo(-0.1,-4.3).lineTo(2,-4.3).lineTo(2,5.1).curveTo(2,6.8,1.2,7.8).curveTo(0.3,8.8,-1.3,8.8).curveTo(-1.9,8.8,-2.3,8.6).closePath().moveTo(0,-6.6).curveTo(-0.4,-6.9,-0.4,-7.5).curveTo(-0.4,-8.1,0,-8.5).curveTo(0.4,-8.8,1,-8.8).curveTo(1.6,-8.8,1.9,-8.5).curveTo(2.3,-8.1,2.3,-7.5).curveTo(2.3,-6.9,1.9,-6.6).curveTo(1.6,-6.2,1,-6.2).curveTo(0.4,-6.2,0,-6.6).closePath();
	this.shape_16.setTransform(-82.375,-25.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_17.setTransform(-91.275,-25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_18.setTransform(-100.925,-25.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_19.setTransform(-111.925,-25.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#003781").beginStroke().moveTo(-1.2,6.7).lineTo(-6.7,-6.7).lineTo(-4.2,-6.7).lineTo(0,4.2).lineTo(4.3,-6.7).lineTo(6.7,-6.7).lineTo(1.2,6.7).closePath();
	this.shape_20.setTransform(-124.225,-27.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_1, new cjs.Rectangle(-133,-50.8,266,101.69999999999999), null);


(lib.copy2_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.7,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.1,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.1,-4.8,-2,-4).closePath();
	this.shape.setTransform(42,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F86200").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_1.setTransform(31.1,-0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F86200").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1,-2.6).lineTo(1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.1,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.6).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.6).curveTo(1.4,-6.3,1.4,-5.7).curveTo(1.4,-5.1,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_2.setTransform(23.1,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3).curveTo(-0.1,-4.9,1.6,-4.8).curveTo(2.3,-4.9,2.8,-4.6).lineTo(2.5,-2.6).curveTo(2,-2.8,1.5,-2.8).curveTo(0.5,-2.8,-0.1,-2).curveTo(-0.7,-1.4,-0.7,0).lineTo(-0.7,4.9).closePath();
	this.shape_3.setTransform(17.675,-0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_4.setTransform(8.275,-0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F86200").beginStroke().moveTo(1.8,7).lineTo(-1.3,3.2).lineTo(-2.4,4.3).lineTo(-2.4,7).lineTo(-4.5,7).lineTo(-4.5,-7).lineTo(-2.4,-7).lineTo(-2.4,1.6).lineTo(1.6,-2.5).lineTo(4.3,-2.5).lineTo(0.1,1.8).lineTo(4.5,7).closePath();
	this.shape_5.setTransform(-1.525,-2.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_6.setTransform(-12.575,-0.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F86200").beginStroke().moveTo(-3.9,4.8).lineTo(-3.9,3.2).lineTo(0.9,-2.8).lineTo(-3.7,-2.8).lineTo(-3.7,-4.8).lineTo(3.7,-4.8).lineTo(3.7,-3.2).lineTo(-1.1,2.9).lineTo(3.9,2.9).lineTo(3.9,4.8).closePath();
	this.shape_7.setTransform(-22.45,-0.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3).curveTo(-0.1,-4.9,1.6,-4.8).curveTo(2.3,-4.9,2.8,-4.6).lineTo(2.5,-2.6).curveTo(2,-2.8,1.5,-2.8).curveTo(0.5,-2.8,-0.1,-2).curveTo(-0.7,-1.4,-0.7,0).lineTo(-0.7,4.9).closePath();
	this.shape_8.setTransform(-30.125,-0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_9.setTransform(-39.525,-0.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#F86200").beginStroke().moveTo(-1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(-0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1.1,4.8).closePath();
	this.shape_10.setTransform(-49.75,-0.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F86200").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.2,-7.1).lineTo(0.2,4.1).curveTo(0.2,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(2,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_11.setTransform(-56.95,-2.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-65.475,-0.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#F86200").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-76.75,-2.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_14.setTransform(-87.425,-0.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#F86200").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-98.125,-0.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#F86200").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.7,6.9).lineTo(-4.7,-7.1).lineTo(-2.6,-7.1).lineTo(-2.6,-1.4).curveTo(-1.5,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.7,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.7,0.7,4.7,2.1).curveTo(4.7,3.6,4.2,4.7).curveTo(3.7,5.9,2.7,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-1.9,-0.1).curveTo(-2.7,0.7,-2.6,2.1).curveTo(-2.7,3.5,-1.9,4.4).curveTo(-1.3,5.2,-0,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0,-0.9).curveTo(-1.3,-0.9,-1.9,-0.1).closePath();
	this.shape_16.setTransform(-109.05,-2.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#F86200").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_17.setTransform(-120.6,-0.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#F86200").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1.1,-2.6).lineTo(1.1,7).closePath().moveTo(-0.9,-4.8).curveTo(-1.4,-5.1,-1.4,-5.7).curveTo(-1.4,-6.3,-0.9,-6.6).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.6).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.1,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-0.9,-4.8).closePath();
	this.shape_18.setTransform(-128.6,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_3, new cjs.Rectangle(-133,-34.7,279,46.7), null);


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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape.setTransform(93.275,-19.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.6,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.6,-1.6,-2.6,-2.2).curveTo(-1.7,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.8,-7.1).lineTo(4.8,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.7,7.1,-2.6,6.5).closePath().moveTo(-2,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-2,4.3).curveTo(-1.1,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.1,-0.9,-2,-0).closePath();
	this.shape_1.setTransform(82,-21.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_2.setTransform(71.1,-19.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_3.setTransform(60.225,-19.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_4.setTransform(50.75,-19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_5.setTransform(42.4,-19.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.7,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.6,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.6,4.3).closePath().moveTo(-1.9,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-1.9,2.2).curveTo(-1.2,3,0.1,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.4,2.7,-0).curveTo(2.7,-1.4,2,-2.2).curveTo(1.2,-3,0.1,-3).curveTo(-1.2,-3,-1.9,-2.2).closePath();
	this.shape_6.setTransform(32.25,-19.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-4.8,6.6).lineTo(-4.8,-6.4).lineTo(-2.8,-6.4).lineTo(-2.8,-5).curveTo(-1.6,-6.6,0.4,-6.6).curveTo(1.7,-6.6,2.6,-6).curveTo(3.7,-5.4,4.2,-4.2).curveTo(4.8,-3.1,4.8,-1.7).curveTo(4.8,-0.2,4.2,0.9).curveTo(3.7,2.1,2.6,2.7).curveTo(1.7,3.3,0.4,3.3).curveTo(-1.4,3.3,-2.7,1.9).lineTo(-2.7,6.6).closePath().moveTo(-2,-3.9).curveTo(-2.6,-3.1,-2.7,-1.7).curveTo(-2.6,-0.3,-2,0.6).curveTo(-1.2,1.4,-0.1,1.4).curveTo(1.2,1.4,1.9,0.5).curveTo(2.7,-0.3,2.7,-1.7).curveTo(2.7,-3,1.9,-3.8).curveTo(1.2,-4.7,-0.1,-4.7).curveTo(-1.2,-4.7,-2,-3.9).closePath();
	this.shape_7.setTransform(21.4,-17.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(7.475,-20.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-0.05,-19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_10.setTransform(-9.375,-19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.8,6.9).lineTo(-4.8,-7.1).lineTo(-2.7,-7.1).lineTo(-2.7,-1.4).curveTo(-1.4,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.6,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.8,0.7,4.8,2.1).curveTo(4.8,3.6,4.2,4.7).curveTo(3.7,5.9,2.6,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-2,-0.1).curveTo(-2.6,0.7,-2.7,2.1).curveTo(-2.6,3.5,-2,4.4).curveTo(-1.2,5.2,-0.1,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0.1,-0.9).curveTo(-1.2,-0.9,-2,-0.1).closePath();
	this.shape_11.setTransform(-20,-21.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-35.775,-19.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-47.05,-21.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#003781").beginStroke().moveTo(-3.4,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.3,1.6,2.2,0.4).lineTo(2.2,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.4,3.8).closePath();
	this.shape_14.setTransform(-62.6,-19.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-73.525,-19.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#003781").beginStroke().moveTo(-2.3,8.6).lineTo(-2.1,6.8).lineTo(-1.6,6.8).curveTo(-0.8,6.9,-0.5,6.4).curveTo(-0.1,6,-0.1,4.9).lineTo(-0.1,-4.4).lineTo(2,-4.4).lineTo(2,5.1).curveTo(2,6.8,1.2,7.8).curveTo(0.3,8.8,-1.3,8.8).curveTo(-1.9,8.8,-2.3,8.6).closePath().moveTo(0,-6.6).curveTo(-0.4,-7,-0.4,-7.5).curveTo(-0.4,-8.1,0,-8.5).curveTo(0.4,-8.8,1,-8.8).curveTo(1.6,-8.8,1.9,-8.5).curveTo(2.3,-8.1,2.3,-7.5).curveTo(2.3,-7,1.9,-6.6).curveTo(1.6,-6.2,1,-6.2).curveTo(0.4,-6.2,0,-6.6).closePath();
	this.shape_16.setTransform(-82.375,-19.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,4.8).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.9,1.6,-4.9).curveTo(2.3,-4.9,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.7).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.8).closePath();
	this.shape_17.setTransform(-91.275,-19.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_18.setTransform(-100.925,-19.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_19.setTransform(-111.925,-19.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#003781").beginStroke().moveTo(-1.2,6.7).lineTo(-6.7,-6.7).lineTo(-4.2,-6.7).lineTo(0,4.2).lineTo(4.3,-6.7).lineTo(6.7,-6.7).lineTo(1.2,6.7).closePath();
	this.shape_20.setTransform(-124.225,-21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_1, new cjs.Rectangle(-133,-35.7,266,64.5), null);


(lib.copy1_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-1.9,6.5).curveTo(-2.3,6.1,-2.3,5.5).curveTo(-2.3,4.9,-1.9,4.5).curveTo(-1.5,4.1,-0.9,4.1).curveTo(-0.3,4.1,0.1,4.5).curveTo(0.5,4.9,0.5,5.5).curveTo(0.5,6.1,0.1,6.5).curveTo(-0.3,6.9,-0.9,6.9).curveTo(-1.5,6.9,-1.9,6.5).closePath().moveTo(-1.9,2.6).lineTo(-1.9,2.4).curveTo(-1.9,1.6,-1.6,1).curveTo(-1.3,0.4,-0.9,0).lineTo(0.2,-0.9).curveTo(1.1,-1.5,1.4,-1.9).curveTo(1.8,-2.3,1.8,-3).curveTo(1.8,-3.8,1.2,-4.3).curveTo(0.5,-4.8,-0.6,-4.8).curveTo(-1.4,-4.8,-2.2,-4.5).curveTo(-2.9,-4.2,-3.4,-3.8).lineTo(-4.1,-5.7).curveTo(-3.4,-6.3,-2.4,-6.6).curveTo(-1.5,-6.9,-0.4,-6.9).curveTo(0.9,-6.9,1.9,-6.4).curveTo(2.9,-5.9,3.5,-5.1).curveTo(4.1,-4.2,4.1,-3.1).curveTo(4.1,-2.2,3.7,-1.6).curveTo(3.4,-0.9,3,-0.5).lineTo(1.8,0.4).lineTo(0.6,1.3).curveTo(0.2,1.8,0.2,2.4).lineTo(0.2,2.6).closePath();
	this.shape.setTransform(-7.625,-2.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_1.setTransform(-16.3,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(-1,7).lineTo(-1,-2.6).lineTo(1.1,-2.6).lineTo(1.1,7).closePath().moveTo(-0.9,-4.8).curveTo(-1.4,-5.2,-1.4,-5.7).curveTo(-1.4,-6.3,-0.9,-6.7).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.7).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.2,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-0.9,-4.8).closePath();
	this.shape_2.setTransform(-22.75,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-3.3,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0.1,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.2,1.6,2.3,0.4).lineTo(2.3,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.3,3.8).closePath();
	this.shape_3.setTransform(-30.8,-0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(2.3,7).lineTo(2.3,1.8).curveTo(2.3,0.5,1.7,-0.1).curveTo(1.1,-0.8,0,-0.8).curveTo(-1,-0.8,-1.6,-0.1).curveTo(-2.2,0.6,-2.2,1.8).lineTo(-2.2,7).lineTo(-4.3,7).lineTo(-4.3,-7).lineTo(-2.2,-7).lineTo(-2.2,-1.3).curveTo(-1.7,-2,-1,-2.4).curveTo(-0.2,-2.7,0.7,-2.7).curveTo(2.4,-2.7,3.4,-1.6).curveTo(4.3,-0.5,4.3,1.4).lineTo(4.3,7).closePath();
	this.shape_4.setTransform(-41.7,-2.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_5.setTransform(-50.725,-1.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_6.setTransform(-62.7,-0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_7.setTransform(-72.025,-0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,7).lineTo(-1,-2.6).lineTo(1,-2.6).lineTo(1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.2,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.7).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.7).curveTo(1.3,-6.3,1.4,-5.7).curveTo(1.3,-5.2,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_8.setTransform(-79.6,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_9.setTransform(-85.375,-1.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.8,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.7,-4.4).curveTo(-1.7,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.8,-4.8).lineTo(4.8,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.7,5,-2.7,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.2,3,0,3).curveTo(1.3,3,1.9,2.2).curveTo(2.7,1.4,2.6,-0).curveTo(2.7,-1.4,1.9,-2.2).curveTo(1.3,-3,0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_10.setTransform(-94.7,-0.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-3.4,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.3,1.6,2.2,0.4).lineTo(2.2,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.4,3.8).closePath();
	this.shape_11.setTransform(-105.8,-0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_12.setTransform(-114.625,-1.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1.1,-2.6).lineTo(1.1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.2,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.7).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.7).curveTo(1.4,-6.3,1.4,-5.7).curveTo(1.4,-5.2,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_13.setTransform(-120.25,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_14.setTransform(-126.9,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_2, new cjs.Rectangle(-133,-34.2,266,46.7), null);


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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape.setTransform(7.825,-19.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,4.8).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.9,1.6,-4.9).curveTo(2.3,-4.9,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.7).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.8).closePath();
	this.shape_1.setTransform(-0.425,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.7,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.7,-4.4).curveTo(-1.7,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.7,5,-2.7,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.1,3,0,3).curveTo(1.3,3,1.9,2.2).curveTo(2.7,1.4,2.6,-0).curveTo(2.7,-1.4,1.9,-2.2).curveTo(1.3,-3,0,-3).curveTo(-1.1,-3,-2,-2.2).closePath();
	this.shape_2.setTransform(-10.65,-19.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.8,6.9).lineTo(-4.8,-7.1).lineTo(-2.6,-7.1).lineTo(-2.6,-1.4).curveTo(-1.5,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.7,-2.2).curveTo(3.6,-1.6,4.2,-0.4).curveTo(4.7,0.7,4.8,2.1).curveTo(4.7,3.6,4.2,4.7).curveTo(3.6,5.9,2.7,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-2,-0.1).curveTo(-2.6,0.7,-2.6,2.1).curveTo(-2.6,3.5,-2,4.4).curveTo(-1.2,5.2,-0,5.2).curveTo(1.2,5.2,2,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,2,-0).curveTo(1.2,-0.9,-0,-0.9).curveTo(-1.2,-0.9,-2,-0.1).closePath();
	this.shape_3.setTransform(-21.5,-21.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(5,4.9).lineTo(5,-0.5).curveTo(4.9,-2.9,3.1,-2.9).curveTo(2.1,-2.9,1.6,-2.3).curveTo(1,-1.7,1,-0.6).lineTo(1,4.9).lineTo(-1.1,4.9).lineTo(-1.1,-0.5).curveTo(-1.1,-1.7,-1.5,-2.3).curveTo(-2,-2.9,-3,-2.9).curveTo(-3.9,-2.9,-4.4,-2.3).curveTo(-4.9,-1.7,-4.9,-0.6).lineTo(-4.9,4.9).lineTo(-7,4.9).lineTo(-7,-4.7).lineTo(-5,-4.7).lineTo(-5,-3.4).curveTo(-4.6,-4.1,-3.9,-4.5).curveTo(-3.2,-4.9,-2.2,-4.9).curveTo(-1.3,-4.9,-0.6,-4.5).curveTo(0.2,-4,0.6,-3.2).curveTo(1,-4,1.8,-4.5).curveTo(2.5,-4.9,3.5,-4.9).curveTo(5.1,-4.9,6.1,-3.8).curveTo(7,-2.7,7,-0.9).lineTo(7,4.9).closePath();
	this.shape_4.setTransform(-35.75,-19.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.8,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.7,-4.4).curveTo(-1.7,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.8,-4.8).lineTo(4.8,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.7,5,-2.7,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.2,3,0,3).curveTo(1.3,3,1.9,2.2).curveTo(2.7,1.4,2.6,-0).curveTo(2.7,-1.4,1.9,-2.2).curveTo(1.3,-3,0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_5.setTransform(-50.15,-19.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.1,-7.1).lineTo(0.1,4.1).curveTo(0.1,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(1.9,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_6.setTransform(-57.75,-21.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-1.1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(-0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1.1,4.8).closePath();
	this.shape_7.setTransform(-66.05,-19.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_8.setTransform(-80.775,-19.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_9.setTransform(-91.45,-19.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1.1,-2.6).lineTo(1.1,7).closePath().moveTo(-1,-4.8).curveTo(-1.4,-5.2,-1.4,-5.7).curveTo(-1.4,-6.3,-1,-6.7).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.7).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.2,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_10.setTransform(-99.45,-21.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_11.setTransform(-107.075,-19.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.1,-7.1).lineTo(0.1,4.1).curveTo(0.1,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(1.9,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_12.setTransform(-114.45,-21.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(2.9,6.7).lineTo(-2,0.9).lineTo(-3.5,2.5).lineTo(-3.5,6.7).lineTo(-5.7,6.7).lineTo(-5.7,-6.7).lineTo(-3.5,-6.7).lineTo(-3.5,-0.5).lineTo(2.5,-6.7).lineTo(5.4,-6.7).lineTo(-0.5,-0.6).lineTo(5.7,6.7).closePath();
	this.shape_13.setTransform(-123.675,-21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(-133,-35.7,266,46.7), null);


(lib.burn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.burnok();
	this.instance.setTransform(-218,-457,2.3499,2.3499);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burn, new cjs.Rectangle(-218,-457,467.7,728.5), null);


(lib.blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginLinearGradientFill(["#CBEEFD","#778B94"],[0,1],-134.2,94.9,316.3,464.4).beginStroke().moveTo(-453.2,-628.1).lineTo(460.8,-628.1).lineTo(459,169.4).curveTo(428.2,211.9,389.6,263.3).curveTo(312.6,365.9,274,409.9).curveTo(235.5,453.8,143.5,543.7).curveTo(97.5,588.6,59.3,624.7).lineTo(35.8,626.2).lineTo(-460.8,628.1).closePath();
	this.shape.setTransform(-56.525,-261.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.3,-889.5,921.5999999999999,1256.1);


(lib.texture2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.noise_1("synched",0);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 0.75, 1, 0, 0, 0, 0)];
	this.instance.cache(-258,-258,516,1028);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-511.25},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-767.2,512,1535.2);


(lib.texture1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.noise_1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-511.25},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-767.2,512,1535.2);


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
	mask.graphics.moveTo(-58.5,10).lineTo(-58.5,-10).lineTo(58.5,-10).lineTo(58.5,10).closePath();
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
	mask_1.graphics.moveTo(-58.5,9.5).lineTo(-58.5,-9.5).lineTo(58.5,-9.5).lineTo(58.5,9.5).closePath();
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
	this.shape.graphics.beginFill("#FDD25C").beginStroke().moveTo(-59.7,59.9).lineTo(-59.7,-59.9).lineTo(59.8,-59.9).lineTo(59.8,59.9).closePath();
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


(lib.fire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _4
	this.instance = new lib.red();
	this.instance.setTransform(18.05,-270,0.7457,1);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _3
	this.instance_1 = new lib.grad();
	this.instance_1.setTransform(41.5,-332.8,0.9861,1.4694,0,0,0,-0.1,-0.2);
	this.instance_1.compositeOperation = "overlay";
	this.instance_1.cache(-155,-129,253,258);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// _2
	this.instance_2 = new lib.texture2();
	this.instance_2.setTransform(34.7,-259.8,0.3719,0.4016,0,0,0,0,-0.1);
	this.instance_2.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// _1
	this.instance_3 = new lib.texture1();
	this.instance_3.setTransform(47.95,-267.95,0.5653,0.6808,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-519.1,302,774.1);


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
	mask.graphics.moveTo(-59.3,15.3).lineTo(-59.3,-15.2).lineTo(59.3,-15.2).lineTo(59.3,15.3).closePath();
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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-58.5,15.3).lineTo(-58.5,-15.2).lineTo(58.5,-15.2).lineTo(58.5,15.3).closePath();
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
	mask.graphics.moveTo(-50,16).lineTo(-50,-16).lineTo(50,-16).lineTo(50,16).closePath();
	mask.setTransform(50,16);

	// Layer_2
	this.arrow2 = new lib.mc_cta_arrowDo();
	this.arrow2.name = "arrow2";
	this.arrow2.setTransform(-16.5,3.85);

	this.arrow1 = new lib.mc_cta_arrowDo();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(72,3.85);

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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-50,16).lineTo(-50,-16).lineTo(50,-16).lineTo(50,16).closePath();
	this.shape.setTransform(50,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctado, new cjs.Rectangle(0,0,100,32), null);


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
	mask.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
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
	mask_1.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
	mask_1.setTransform(0,-2);

	// line2
	this.copy_2 = new lib.copyDo_2();
	this.copy_2.name = "copy_2";
	this.copy_2.setTransform(0,30);

	var maskedShapeInstanceList = [this.copy_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo, new cjs.Rectangle(-133,-20,266,36), null);


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
	mask.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
	mask.setTransform(0,-18);

	// line1
	this.copy2_1 = new lib.copy2_1();
	this.copy2_1.name = "copy2_1";
	this.copy2_1.setTransform(20,7);

	var maskedShapeInstanceList = [this.copy2_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_1).wait(1));

	// mask3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.moveTo(-144,20.5).lineTo(-144,-20.5).lineTo(144,-20.5).lineTo(144,20.5).closePath();
	mask_1.setTransform(0,0.5);

	// Layer_4
	this.copy2_2 = new lib.copy2_3();
	this.copy2_2.name = "copy2_2";
	this.copy2_2.setTransform(19.65,21.45,1,1,0,0,0,0,15.1);

	var maskedShapeInstanceList = [this.copy2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-113.3,-28.7,257.3,47), null);


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
	mask.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
	mask.setTransform(0,-16);

	// line1
	this.copy1_1 = new lib.copy1_1();
	this.copy1_1.name = "copy1_1";
	this.copy1_1.setTransform(20,39);
	this.copy1_1.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_1).wait(1));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
	mask_1.setTransform(0,5.5);

	// line2
	this.copy1_2 = new lib.copy1_2();
	this.copy1_2.name = "copy1_2";
	this.copy1_2.setTransform(20,39.5);
	this.copy1_2.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_2).wait(1));

	// mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
	mask_2.setTransform(0,46);

	// line3
	this.copy1_3 = new lib.copy1_3();
	this.copy1_3.name = "copy1_3";
	this.copy1_3.setTransform(20,35);
	this.copy1_3.alpha = 0;

	var maskedShapeInstanceList = [this.copy1_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-113,5.3,246,18.2), null);


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
	var mask_graphics_0 = new cjs.Graphics().moveTo(-10,-10).lineTo(10,-0).lineTo(-10,10).closePath();
	var mask_graphics_1 = new cjs.Graphics().moveTo(-25.3,-25.3).lineTo(25.3,-0).lineTo(-25.3,25.3).closePath();
	var mask_graphics_2 = new cjs.Graphics().moveTo(-40.6,-40.6).lineTo(40.6,0).lineTo(-40.6,40.6).closePath();
	var mask_graphics_3 = new cjs.Graphics().moveTo(-55.9,-55.9).lineTo(55.9,0).lineTo(-55.9,55.9).closePath();
	var mask_graphics_4 = new cjs.Graphics().moveTo(-71.2,-71.3).lineTo(71.2,0).lineTo(-71.2,71.3).closePath();
	var mask_graphics_5 = new cjs.Graphics().moveTo(-86.6,-86.6).lineTo(86.6,-0).lineTo(-86.6,86.6).closePath();
	var mask_graphics_6 = new cjs.Graphics().moveTo(-101.9,-101.9).lineTo(101.9,0).lineTo(-101.9,101.9).closePath();
	var mask_graphics_7 = new cjs.Graphics().moveTo(-117.2,-117.2).lineTo(117.2,-0).lineTo(-117.2,117.2).closePath();
	var mask_graphics_8 = new cjs.Graphics().moveTo(-132.5,-132.5).lineTo(132.5,0).lineTo(-132.5,132.5).closePath();
	var mask_graphics_9 = new cjs.Graphics().moveTo(-147.8,-147.8).lineTo(147.8,0).lineTo(-147.8,147.8).closePath();
	var mask_graphics_10 = new cjs.Graphics().moveTo(-163.1,-163.1).lineTo(163.1,0).lineTo(-163.1,163.1).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(-178.5,-178.4).lineTo(178.5,-0).lineTo(-178.5,178.4).closePath();
	var mask_graphics_12 = new cjs.Graphics().moveTo(-193.7,-193.7).lineTo(193.7,0).lineTo(-193.7,193.7).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(-209.1,-209.1).lineTo(209.1,0).lineTo(-209.1,209.1).closePath();
	var mask_graphics_14 = new cjs.Graphics().moveTo(-224.4,-224.4).lineTo(224.4,0).lineTo(-224.4,224.4).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(-239.7,-239.7).lineTo(239.7,-0).lineTo(-239.7,239.7).closePath();
	var mask_graphics_16 = new cjs.Graphics().moveTo(-255,-255).lineTo(255,-0).lineTo(-255,255).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(-270.3,-270.3).lineTo(270.3,-0).lineTo(-270.3,270.3).closePath();
	var mask_graphics_18 = new cjs.Graphics().moveTo(-285.6,-285.6).lineTo(285.6,-0).lineTo(-285.6,285.6).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(-301,-300.9).lineTo(301,-0).lineTo(-301,300.9).closePath();
	var mask_graphics_20 = new cjs.Graphics().moveTo(-316.2,-316.3).lineTo(316.2,-0).lineTo(-316.2,316.3).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(-331.6,-331.6).lineTo(331.5,-0).lineTo(-331.6,331.5).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(-346.9,-346.9).lineTo(346.9,-0).lineTo(-346.9,346.9).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(-362.2,-362.2).lineTo(362.2,-0).lineTo(-362.2,362.2).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(-377.5,-377.5).lineTo(377.5,0).lineTo(-377.5,377.5).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(-392.8,-392.8).lineTo(392.8,-0).lineTo(-392.8,392.8).closePath();
	var mask_graphics_26 = new cjs.Graphics().moveTo(-408.1,-408.1).lineTo(408.1,-0).lineTo(-408.1,408.1).closePath();
	var mask_graphics_27 = new cjs.Graphics().moveTo(-423.4,-423.4).lineTo(423.4,0).lineTo(-423.4,423.4).closePath();
	var mask_graphics_28 = new cjs.Graphics().moveTo(-438.7,-438.7).lineTo(438.8,0).lineTo(-438.7,438.8).closePath();
	var mask_graphics_29 = new cjs.Graphics().moveTo(-454.1,-454.1).lineTo(454.1,-0).lineTo(-454.1,454).closePath();
	var mask_graphics_30 = new cjs.Graphics().moveTo(-469.4,-469.4).lineTo(469.4,-0).lineTo(-469.4,469.4).closePath();
	var mask_graphics_31 = new cjs.Graphics().moveTo(-484.7,-484.7).lineTo(484.7,0).lineTo(-484.7,484.7).closePath();
	var mask_graphics_32 = new cjs.Graphics().moveTo(-500,-500).lineTo(500,0).lineTo(-500,500).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-311.1,y:121.05}).wait(1).to({graphics:mask_graphics_1,x:-300.7,y:120.025}).wait(1).to({graphics:mask_graphics_2,x:-290.275,y:118.975}).wait(1).to({graphics:mask_graphics_3,x:-279.875,y:117.95}).wait(1).to({graphics:mask_graphics_4,x:-269.5,y:116.9}).wait(1).to({graphics:mask_graphics_5,x:-259.075,y:115.875}).wait(1).to({graphics:mask_graphics_6,x:-248.675,y:114.825}).wait(1).to({graphics:mask_graphics_7,x:-238.275,y:113.8}).wait(1).to({graphics:mask_graphics_8,x:-227.85,y:112.75}).wait(1).to({graphics:mask_graphics_9,x:-217.45,y:111.725}).wait(1).to({graphics:mask_graphics_10,x:-207.075,y:110.675}).wait(1).to({graphics:mask_graphics_11,x:-196.65,y:109.65}).wait(1).to({graphics:mask_graphics_12,x:-186.25,y:108.6}).wait(1).to({graphics:mask_graphics_13,x:-175.85,y:107.575}).wait(1).to({graphics:mask_graphics_14,x:-165.425,y:106.525}).wait(1).to({graphics:mask_graphics_15,x:-155.025,y:105.5}).wait(1).to({graphics:mask_graphics_16,x:-144.6,y:104.5}).wait(1).to({graphics:mask_graphics_17,x:-134.225,y:103.45}).wait(1).to({graphics:mask_graphics_18,x:-123.825,y:102.425}).wait(1).to({graphics:mask_graphics_19,x:-113.4,y:101.375}).wait(1).to({graphics:mask_graphics_20,x:-103,y:100.35}).wait(1).to({graphics:mask_graphics_21,x:-92.6,y:99.3}).wait(1).to({graphics:mask_graphics_22,x:-82.175,y:98.275}).wait(1).to({graphics:mask_graphics_23,x:-71.8,y:97.225}).wait(1).to({graphics:mask_graphics_24,x:-61.4,y:96.2}).wait(1).to({graphics:mask_graphics_25,x:-50.975,y:95.15}).wait(1).to({graphics:mask_graphics_26,x:-40.575,y:94.125}).wait(1).to({graphics:mask_graphics_27,x:-30.175,y:93.075}).wait(1).to({graphics:mask_graphics_28,x:-19.75,y:92.05}).wait(1).to({graphics:mask_graphics_29,x:-9.375,y:91}).wait(1).to({graphics:mask_graphics_30,x:1.025,y:89.975}).wait(1).to({graphics:mask_graphics_31,x:11.45,y:88.925}).wait(1).to({graphics:mask_graphics_32,x:21.85,y:87.9}).wait(74));

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
	this.frame_193 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(193).call(this.frame_193).wait(1));

	// burn
	this.instance = new lib.burn();
	this.instance.setTransform(541.45,539.15,0.01,0.01,0,0,0,5,5);
	this.instance.alpha = 0.1719;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:355.05,y:291.1,alpha:0.5508},94,cjs.Ease.cubicInOut).wait(15));

	// blue
	this.instance_1 = new lib.rad("synched",0);
	this.instance_1.setTransform(145,3.7,1,1.5345);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).wait(44));

	// masked (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_150 = new cjs.Graphics().moveTo(-385.3,-533.9).lineTo(391.7,-533.9).lineTo(390.2,144).curveTo(364,180.2,331.2,223.8).curveTo(265.7,311.1,232.9,348.4).curveTo(200.2,385.8,122,462.2).curveTo(82.9,500.3,50.4,531.1).lineTo(30.5,532.3).lineTo(-391.7,533.9).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_graphics_150,x:147.2008,y:9.5114}).wait(44));

	// fade
	this.instance_2 = new lib.square("synched",0);
	this.instance_2.setTransform(152.5,157.1,0.7158,0.7158,0,0,0,0.1,0.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({alpha:0},42,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// bright
	this.instance_3 = new lib.blue();
	this.instance_3.setTransform(195.4,231.9,0.8501,0.8501,0,0,0,0.2,0.1);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).wait(44));

	// fire
	this.instance_4 = new lib.fire();
	this.instance_4.setTransform(163.2,999.4,3,3);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).wait(44));

	// square (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().moveTo(-322.3,-665.2).lineTo(-322.3,-669.2).lineTo(-318.4,-669.2).lineTo(-318.4,-665.2).closePath();
	var mask_1_graphics_22 = new cjs.Graphics().moveTo(-23,23).lineTo(-23,-23).lineTo(23,-23).lineTo(23,23).closePath();
	var mask_1_graphics_23 = new cjs.Graphics().moveTo(-23.4,23.4).lineTo(-23.4,-23.4).lineTo(23.4,-23.4).lineTo(23.4,23.4).closePath();
	var mask_1_graphics_24 = new cjs.Graphics().moveTo(-24.7,24.7).lineTo(-24.7,-24.7).lineTo(24.7,-24.7).lineTo(24.7,24.7).closePath();
	var mask_1_graphics_25 = new cjs.Graphics().moveTo(-26.8,26.8).lineTo(-26.8,-26.8).lineTo(26.8,-26.8).lineTo(26.8,26.8).closePath();
	var mask_1_graphics_26 = new cjs.Graphics().moveTo(-29.6,29.6).lineTo(-29.6,-29.6).lineTo(29.6,-29.6).lineTo(29.6,29.6).closePath();
	var mask_1_graphics_27 = new cjs.Graphics().moveTo(-33.1,33.1).lineTo(-33.1,-33.1).lineTo(33.1,-33.1).lineTo(33.1,33.1).closePath();
	var mask_1_graphics_28 = new cjs.Graphics().moveTo(-37.4,37.4).lineTo(-37.4,-37.4).lineTo(37.4,-37.4).lineTo(37.4,37.4).closePath();
	var mask_1_graphics_29 = new cjs.Graphics().moveTo(-42.3,42.3).lineTo(-42.3,-42.3).lineTo(42.3,-42.3).lineTo(42.3,42.3).closePath();
	var mask_1_graphics_30 = new cjs.Graphics().moveTo(-47.9,47.9).lineTo(-47.9,-47.9).lineTo(47.9,-47.9).lineTo(47.9,47.9).closePath();
	var mask_1_graphics_31 = new cjs.Graphics().moveTo(-54.1,54.1).lineTo(-54.1,-54.1).lineTo(54.1,-54.1).lineTo(54.1,54.1).closePath();
	var mask_1_graphics_32 = new cjs.Graphics().moveTo(-60.9,60.9).lineTo(-60.9,-60.9).lineTo(60.9,-60.9).lineTo(60.9,60.9).closePath();
	var mask_1_graphics_33 = new cjs.Graphics().moveTo(-68.2,68.2).lineTo(-68.2,-68.2).lineTo(68.2,-68.2).lineTo(68.2,68.2).closePath();
	var mask_1_graphics_34 = new cjs.Graphics().moveTo(-76,76).lineTo(-76,-76).lineTo(76,-76).lineTo(76,76).closePath();
	var mask_1_graphics_35 = new cjs.Graphics().moveTo(-84.3,84.3).lineTo(-84.3,-84.3).lineTo(84.3,-84.3).lineTo(84.3,84.3).closePath();
	var mask_1_graphics_36 = new cjs.Graphics().moveTo(-93.1,93.1).lineTo(-93.1,-93.1).lineTo(93.1,-93.1).lineTo(93.1,93.1).closePath();
	var mask_1_graphics_37 = new cjs.Graphics().moveTo(-102.3,102.3).lineTo(-102.3,-102.3).lineTo(102.3,-102.3).lineTo(102.3,102.3).closePath();
	var mask_1_graphics_38 = new cjs.Graphics().moveTo(-112,112).lineTo(-112,-112).lineTo(112,-112).lineTo(112,112).closePath();
	var mask_1_graphics_39 = new cjs.Graphics().moveTo(-122,122).lineTo(-122,-122).lineTo(122,-122).lineTo(122,122).closePath();
	var mask_1_graphics_40 = new cjs.Graphics().moveTo(-132.3,132.3).lineTo(-132.3,-132.3).lineTo(132.3,-132.3).lineTo(132.3,132.3).closePath();
	var mask_1_graphics_41 = new cjs.Graphics().moveTo(-143,143).lineTo(-143,-143).lineTo(143,-143).lineTo(143,143).closePath();
	var mask_1_graphics_42 = new cjs.Graphics().moveTo(-154,154).lineTo(-154,-154).lineTo(154,-154).lineTo(154,154).closePath();
	var mask_1_graphics_43 = new cjs.Graphics().moveTo(-165.2,165.2).lineTo(-165.2,-165.2).lineTo(165.2,-165.2).lineTo(165.2,165.2).closePath();
	var mask_1_graphics_44 = new cjs.Graphics().moveTo(-176.7,176.7).lineTo(-176.7,-176.7).lineTo(176.7,-176.7).lineTo(176.7,176.7).closePath();
	var mask_1_graphics_45 = new cjs.Graphics().moveTo(-188.4,188.4).lineTo(-188.4,-188.4).lineTo(188.4,-188.4).lineTo(188.4,188.4).closePath();
	var mask_1_graphics_46 = new cjs.Graphics().moveTo(-200.3,200.3).lineTo(-200.3,-200.3).lineTo(200.3,-200.3).lineTo(200.3,200.3).closePath();
	var mask_1_graphics_47 = new cjs.Graphics().moveTo(-212.3,212.3).lineTo(-212.3,-212.3).lineTo(212.3,-212.3).lineTo(212.3,212.3).closePath();
	var mask_1_graphics_48 = new cjs.Graphics().moveTo(-224.5,224.5).lineTo(-224.5,-224.5).lineTo(224.5,-224.5).lineTo(224.5,224.5).closePath();
	var mask_1_graphics_49 = new cjs.Graphics().moveTo(-236.7,236.7).lineTo(-236.7,-236.7).lineTo(236.7,-236.7).lineTo(236.7,236.7).closePath();
	var mask_1_graphics_50 = new cjs.Graphics().moveTo(-249.1,249.1).lineTo(-249.1,-249.1).lineTo(249.1,-249.1).lineTo(249.1,249.1).closePath();
	var mask_1_graphics_51 = new cjs.Graphics().moveTo(-261.5,261.5).lineTo(-261.5,-261.5).lineTo(261.5,-261.5).lineTo(261.5,261.5).closePath();
	var mask_1_graphics_52 = new cjs.Graphics().moveTo(-274,274).lineTo(-274,-274).lineTo(274,-274).lineTo(274,274).closePath();
	var mask_1_graphics_53 = new cjs.Graphics().moveTo(-286.4,286.4).lineTo(-286.4,-286.4).lineTo(286.4,-286.4).lineTo(286.4,286.4).closePath();
	var mask_1_graphics_54 = new cjs.Graphics().moveTo(-298.9,298.9).lineTo(-298.9,-298.9).lineTo(298.9,-298.9).lineTo(298.9,298.9).closePath();
	var mask_1_graphics_55 = new cjs.Graphics().moveTo(-311.3,311.3).lineTo(-311.3,-311.3).lineTo(311.3,-311.3).lineTo(311.3,311.3).closePath();
	var mask_1_graphics_56 = new cjs.Graphics().moveTo(-323.6,323.6).lineTo(-323.6,-323.6).lineTo(323.6,-323.6).lineTo(323.6,323.6).closePath();
	var mask_1_graphics_57 = new cjs.Graphics().moveTo(-335.8,335.8).lineTo(-335.8,-335.8).lineTo(335.8,-335.8).lineTo(335.8,335.8).closePath();
	var mask_1_graphics_58 = new cjs.Graphics().moveTo(-347.9,347.9).lineTo(-347.9,-347.9).lineTo(347.9,-347.9).lineTo(347.9,347.9).closePath();
	var mask_1_graphics_59 = new cjs.Graphics().moveTo(-359.9,359.9).lineTo(-359.9,-359.9).lineTo(359.9,-359.9).lineTo(359.9,359.9).closePath();
	var mask_1_graphics_60 = new cjs.Graphics().moveTo(-371.6,371.6).lineTo(-371.6,-371.6).lineTo(371.6,-371.6).lineTo(371.6,371.6).closePath();
	var mask_1_graphics_61 = new cjs.Graphics().moveTo(-383.2,383.2).lineTo(-383.2,-383.2).lineTo(383.2,-383.2).lineTo(383.2,383.2).closePath();
	var mask_1_graphics_62 = new cjs.Graphics().moveTo(-394.6,394.6).lineTo(-394.6,-394.6).lineTo(394.6,-394.6).lineTo(394.6,394.6).closePath();
	var mask_1_graphics_63 = new cjs.Graphics().moveTo(-405.7,405.7).lineTo(-405.7,-405.7).lineTo(405.7,-405.7).lineTo(405.7,405.7).closePath();
	var mask_1_graphics_64 = new cjs.Graphics().moveTo(-416.6,416.6).lineTo(-416.6,-416.6).lineTo(416.6,-416.6).lineTo(416.6,416.6).closePath();
	var mask_1_graphics_65 = new cjs.Graphics().moveTo(-427.2,427.2).lineTo(-427.2,-427.2).lineTo(427.2,-427.2).lineTo(427.2,427.2).closePath();
	var mask_1_graphics_66 = new cjs.Graphics().moveTo(-437.4,437.4).lineTo(-437.4,-437.4).lineTo(437.4,-437.4).lineTo(437.4,437.4).closePath();
	var mask_1_graphics_67 = new cjs.Graphics().moveTo(-447.3,447.3).lineTo(-447.3,-447.3).lineTo(447.3,-447.3).lineTo(447.3,447.3).closePath();
	var mask_1_graphics_68 = new cjs.Graphics().moveTo(-456.9,456.9).lineTo(-456.9,-456.9).lineTo(456.9,-456.9).lineTo(456.9,456.9).closePath();
	var mask_1_graphics_69 = new cjs.Graphics().moveTo(-466,466).lineTo(-466,-466).lineTo(466,-466).lineTo(466,466).closePath();
	var mask_1_graphics_70 = new cjs.Graphics().moveTo(-474.8,474.8).lineTo(-474.8,-474.8).lineTo(474.8,-474.8).lineTo(474.8,474.8).closePath();
	var mask_1_graphics_71 = new cjs.Graphics().moveTo(-483.1,483.1).lineTo(-483.1,-483.1).lineTo(483.1,-483.1).lineTo(483.1,483.1).closePath();
	var mask_1_graphics_72 = new cjs.Graphics().moveTo(-490.9,490.9).lineTo(-490.9,-490.9).lineTo(490.9,-490.9).lineTo(490.9,490.9).closePath();
	var mask_1_graphics_73 = new cjs.Graphics().moveTo(-498.2,498.2).lineTo(-498.2,-498.2).lineTo(498.2,-498.2).lineTo(498.2,498.2).closePath();
	var mask_1_graphics_74 = new cjs.Graphics().moveTo(-505.1,505.1).lineTo(-505.1,-505.1).lineTo(505.1,-505.1).lineTo(505.1,505.1).closePath();
	var mask_1_graphics_75 = new cjs.Graphics().moveTo(-511.4,511.4).lineTo(-511.4,-511.4).lineTo(511.4,-511.4).lineTo(511.4,511.4).closePath();
	var mask_1_graphics_76 = new cjs.Graphics().moveTo(-517.1,517.1).lineTo(-517.1,-517.1).lineTo(517.1,-517.1).lineTo(517.1,517.1).closePath();
	var mask_1_graphics_77 = new cjs.Graphics().moveTo(-522.3,522.3).lineTo(-522.3,-522.3).lineTo(522.3,-522.3).lineTo(522.3,522.3).closePath();
	var mask_1_graphics_78 = new cjs.Graphics().moveTo(-526.8,526.8).lineTo(-526.8,-526.8).lineTo(526.8,-526.8).lineTo(526.8,526.8).closePath();
	var mask_1_graphics_79 = new cjs.Graphics().moveTo(-530.8,530.8).lineTo(-530.8,-530.8).lineTo(530.8,-530.8).lineTo(530.8,530.8).closePath();
	var mask_1_graphics_80 = new cjs.Graphics().moveTo(-534,534).lineTo(-534,-534).lineTo(534,-534).lineTo(534,534).closePath();
	var mask_1_graphics_81 = new cjs.Graphics().moveTo(-536.6,536.6).lineTo(-536.6,-536.6).lineTo(536.6,-536.6).lineTo(536.6,536.6).closePath();
	var mask_1_graphics_82 = new cjs.Graphics().moveTo(-538.5,538.5).lineTo(-538.5,-538.5).lineTo(538.5,-538.5).lineTo(538.5,538.5).closePath();
	var mask_1_graphics_83 = new cjs.Graphics().moveTo(-539.6,539.6).lineTo(-539.6,-539.6).lineTo(539.6,-539.6).lineTo(539.6,539.6).closePath();
	var mask_1_graphics_84 = new cjs.Graphics().moveTo(-540,540).lineTo(-540,-540).lineTo(540,-540).lineTo(540,540).closePath();
	var mask_1_graphics_85 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,0).lineTo(-0,1160.7).closePath();
	var mask_1_graphics_86 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,-0).lineTo(0,1160.7).closePath();
	var mask_1_graphics_87 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,-0).lineTo(0,1160.7).closePath();
	var mask_1_graphics_88 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,-0).lineTo(0,1160.7).closePath();
	var mask_1_graphics_89 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,-0).lineTo(0,1160.7).closePath();
	var mask_1_graphics_90 = new cjs.Graphics().moveTo(-1160.7,0).lineTo(-0,-1160.7).lineTo(1160.7,-0).lineTo(0,1160.7).closePath();
	var mask_1_graphics_91 = new cjs.Graphics().moveTo(-1160.7,0.1).lineTo(-0.1,-1160.7).lineTo(1160.7,-0.1).lineTo(0.1,1160.7).closePath();
	var mask_1_graphics_92 = new cjs.Graphics().moveTo(-1160.7,0.1).lineTo(-0.1,-1160.7).lineTo(1160.7,-0.1).lineTo(0.1,1160.7).closePath();
	var mask_1_graphics_93 = new cjs.Graphics().moveTo(-1160.7,0.1).lineTo(-0.1,-1160.7).lineTo(1160.7,-0.1).lineTo(0.1,1160.7).closePath();
	var mask_1_graphics_94 = new cjs.Graphics().moveTo(-1160.7,0.2).lineTo(-0.2,-1160.7).lineTo(1160.7,-0.2).lineTo(0.2,1160.7).closePath();
	var mask_1_graphics_95 = new cjs.Graphics().moveTo(-1160.7,0.2).lineTo(-0.2,-1160.7).lineTo(1160.7,-0.2).lineTo(0.2,1160.7).closePath();
	var mask_1_graphics_96 = new cjs.Graphics().moveTo(-1160.7,0.3).lineTo(-0.3,-1160.7).lineTo(1160.7,-0.3).lineTo(0.3,1160.7).closePath();
	var mask_1_graphics_97 = new cjs.Graphics().moveTo(-1160.7,0.4).lineTo(-0.4,-1160.7).lineTo(1160.7,-0.4).lineTo(0.4,1160.7).closePath();
	var mask_1_graphics_98 = new cjs.Graphics().moveTo(-1160.7,0.5).lineTo(-0.5,-1160.7).lineTo(1160.7,-0.5).lineTo(0.5,1160.7).closePath();
	var mask_1_graphics_99 = new cjs.Graphics().moveTo(-1160.7,0.7).lineTo(-0.7,-1160.7).lineTo(1160.7,-0.7).lineTo(0.7,1160.7).closePath();
	var mask_1_graphics_100 = new cjs.Graphics().moveTo(-1160.7,0.8).lineTo(-0.8,-1160.7).lineTo(1160.7,-0.8).lineTo(0.8,1160.7).closePath();
	var mask_1_graphics_101 = new cjs.Graphics().moveTo(-1160.7,1).lineTo(-1,-1160.7).lineTo(1160.7,-1).lineTo(1,1160.7).closePath();
	var mask_1_graphics_102 = new cjs.Graphics().moveTo(-1160.7,1.2).lineTo(-1.2,-1160.7).lineTo(1160.7,-1.2).lineTo(1.2,1160.7).closePath();
	var mask_1_graphics_103 = new cjs.Graphics().moveTo(-1160.7,1.4).lineTo(-1.4,-1160.7).lineTo(1160.7,-1.4).lineTo(1.4,1160.7).closePath();
	var mask_1_graphics_104 = new cjs.Graphics().moveTo(-1160.7,1.7).lineTo(-1.7,-1160.7).lineTo(1160.7,-1.7).lineTo(1.7,1160.7).closePath();
	var mask_1_graphics_105 = new cjs.Graphics().moveTo(-1160.7,1.9).lineTo(-1.9,-1160.7).lineTo(1160.7,-1.9).lineTo(1.9,1160.7).closePath();
	var mask_1_graphics_106 = new cjs.Graphics().moveTo(-1160.7,2.2).lineTo(-2.2,-1160.7).lineTo(1160.7,-2.2).lineTo(2.2,1160.7).closePath();
	var mask_1_graphics_107 = new cjs.Graphics().moveTo(-1160.7,2.6).lineTo(-2.6,-1160.7).lineTo(1160.7,-2.6).lineTo(2.6,1160.7).closePath();
	var mask_1_graphics_108 = new cjs.Graphics().moveTo(-1160.7,2.9).lineTo(-2.9,-1160.7).lineTo(1160.7,-2.9).lineTo(2.9,1160.7).closePath();
	var mask_1_graphics_109 = new cjs.Graphics().moveTo(-1160.7,3.3).lineTo(-3.3,-1160.7).lineTo(1160.7,-3.3).lineTo(3.3,1160.7).closePath();
	var mask_1_graphics_110 = new cjs.Graphics().moveTo(-1160.7,3.8).lineTo(-3.8,-1160.7).lineTo(1160.7,-3.8).lineTo(3.8,1160.7).closePath();
	var mask_1_graphics_111 = new cjs.Graphics().moveTo(-1160.7,4.2).lineTo(-4.2,-1160.7).lineTo(1160.7,-4.2).lineTo(4.2,1160.7).closePath();
	var mask_1_graphics_112 = new cjs.Graphics().moveTo(-1160.7,4.7).lineTo(-4.7,-1160.7).lineTo(1160.7,-4.7).lineTo(4.7,1160.7).closePath();
	var mask_1_graphics_113 = new cjs.Graphics().moveTo(-1160.7,5.3).lineTo(-5.3,-1160.7).lineTo(1160.7,-5.3).lineTo(5.3,1160.7).closePath();
	var mask_1_graphics_114 = new cjs.Graphics().moveTo(-1160.7,5.9).lineTo(-5.9,-1160.7).lineTo(1160.7,-5.9).lineTo(5.9,1160.7).closePath();
	var mask_1_graphics_115 = new cjs.Graphics().moveTo(-1160.7,6.5).lineTo(-6.5,-1160.7).lineTo(1160.7,-6.5).lineTo(6.5,1160.7).closePath();
	var mask_1_graphics_116 = new cjs.Graphics().moveTo(-1160.7,7.2).lineTo(-7.2,-1160.7).lineTo(1160.7,-7.2).lineTo(7.2,1160.7).closePath();
	var mask_1_graphics_117 = new cjs.Graphics().moveTo(-1160.7,7.9).lineTo(-7.9,-1160.7).lineTo(1160.7,-7.9).lineTo(7.9,1160.7).closePath();
	var mask_1_graphics_118 = new cjs.Graphics().moveTo(-1160.7,8.7).lineTo(-8.7,-1160.7).lineTo(1160.7,-8.7).lineTo(8.7,1160.7).closePath();
	var mask_1_graphics_119 = new cjs.Graphics().moveTo(-1160.7,9.5).lineTo(-9.5,-1160.7).lineTo(1160.7,-9.5).lineTo(9.5,1160.7).closePath();
	var mask_1_graphics_120 = new cjs.Graphics().moveTo(-1160.7,10.3).lineTo(-10.3,-1160.7).lineTo(1160.7,-10.3).lineTo(10.3,1160.7).closePath();
	var mask_1_graphics_121 = new cjs.Graphics().moveTo(-1160.7,11.2).lineTo(-11.2,-1160.7).lineTo(1160.7,-11.2).lineTo(11.2,1160.7).closePath();
	var mask_1_graphics_122 = new cjs.Graphics().moveTo(-1160.7,12.2).lineTo(-12.2,-1160.7).lineTo(1160.7,-12.2).lineTo(12.2,1160.7).closePath();
	var mask_1_graphics_123 = new cjs.Graphics().moveTo(-1160.6,13.2).lineTo(-13.2,-1160.6).lineTo(1160.6,-13.2).lineTo(13.2,1160.6).closePath();
	var mask_1_graphics_124 = new cjs.Graphics().moveTo(-1160.6,14.3).lineTo(-14.3,-1160.6).lineTo(1160.6,-14.3).lineTo(14.3,1160.6).closePath();
	var mask_1_graphics_125 = new cjs.Graphics().moveTo(-1160.6,15.4).lineTo(-15.4,-1160.6).lineTo(1160.6,-15.4).lineTo(15.4,1160.6).closePath();
	var mask_1_graphics_126 = new cjs.Graphics().moveTo(-1160.6,16.6).lineTo(-16.6,-1160.6).lineTo(1160.6,-16.6).lineTo(16.6,1160.6).closePath();
	var mask_1_graphics_127 = new cjs.Graphics().moveTo(-1160.6,17.9).lineTo(-17.9,-1160.6).lineTo(1160.6,-17.9).lineTo(17.9,1160.6).closePath();
	var mask_1_graphics_128 = new cjs.Graphics().moveTo(-1160.6,19.2).lineTo(-19.2,-1160.6).lineTo(1160.6,-19.2).lineTo(19.2,1160.6).closePath();
	var mask_1_graphics_129 = new cjs.Graphics().moveTo(-1160.5,20.5).lineTo(-20.5,-1160.5).lineTo(1160.5,-20.5).lineTo(20.5,1160.5).closePath();
	var mask_1_graphics_130 = new cjs.Graphics().moveTo(-1160.5,22).lineTo(-22,-1160.5).lineTo(1160.5,-22).lineTo(22,1160.5).closePath();
	var mask_1_graphics_131 = new cjs.Graphics().moveTo(-1160.5,23.5).lineTo(-23.5,-1160.5).lineTo(1160.5,-23.5).lineTo(23.5,1160.5).closePath();
	var mask_1_graphics_132 = new cjs.Graphics().moveTo(-1160.5,25).lineTo(-25,-1160.5).lineTo(1160.5,-25).lineTo(25,1160.5).closePath();
	var mask_1_graphics_133 = new cjs.Graphics().moveTo(-1160.4,26.6).lineTo(-26.6,-1160.4).lineTo(1160.4,-26.6).lineTo(26.6,1160.4).closePath();
	var mask_1_graphics_134 = new cjs.Graphics().moveTo(-1160.4,28.1).lineTo(-28.1,-1160.4).lineTo(1160.4,-28.1).lineTo(28.1,1160.4).closePath();
	var mask_1_graphics_135 = new cjs.Graphics().moveTo(-1160.3,29.5).lineTo(-29.5,-1160.3).lineTo(1160.3,-29.5).lineTo(29.5,1160.3).closePath();
	var mask_1_graphics_136 = new cjs.Graphics().moveTo(-1160.3,30.9).lineTo(-30.9,-1160.3).lineTo(1160.3,-30.9).lineTo(30.9,1160.3).closePath();
	var mask_1_graphics_137 = new cjs.Graphics().moveTo(-1160.3,32.2).lineTo(-32.2,-1160.3).lineTo(1160.3,-32.2).lineTo(32.2,1160.3).closePath();
	var mask_1_graphics_138 = new cjs.Graphics().moveTo(-1160.2,33.4).lineTo(-33.4,-1160.2).lineTo(1160.2,-33.4).lineTo(33.4,1160.2).closePath();
	var mask_1_graphics_139 = new cjs.Graphics().moveTo(-1160.2,34.6).lineTo(-34.6,-1160.2).lineTo(1160.2,-34.6).lineTo(34.6,1160.2).closePath();
	var mask_1_graphics_140 = new cjs.Graphics().moveTo(-1160.2,35.8).lineTo(-35.8,-1160.2).lineTo(1160.2,-35.8).lineTo(35.8,1160.2).closePath();
	var mask_1_graphics_141 = new cjs.Graphics().moveTo(-1160.1,36.8).lineTo(-36.8,-1160.1).lineTo(1160.1,-36.8).lineTo(36.8,1160.1).closePath();
	var mask_1_graphics_142 = new cjs.Graphics().moveTo(-1160.1,37.8).lineTo(-37.8,-1160.1).lineTo(1160.1,-37.8).lineTo(37.8,1160.1).closePath();
	var mask_1_graphics_143 = new cjs.Graphics().moveTo(-1160.1,38.8).lineTo(-38.8,-1160.1).lineTo(1160.1,-38.8).lineTo(38.8,1160.1).closePath();
	var mask_1_graphics_144 = new cjs.Graphics().moveTo(-1160,39.7).lineTo(-39.7,-1160).lineTo(1160,-39.7).lineTo(39.7,1160).closePath();
	var mask_1_graphics_145 = new cjs.Graphics().moveTo(-1160,40.6).lineTo(-40.6,-1160).lineTo(1160,-40.6).lineTo(40.6,1160).closePath();
	var mask_1_graphics_146 = new cjs.Graphics().moveTo(-1160,41.4).lineTo(-41.4,-1160).lineTo(1160,-41.4).lineTo(41.4,1160).closePath();
	var mask_1_graphics_147 = new cjs.Graphics().moveTo(-1160,42.2).lineTo(-42.2,-1160).lineTo(1160,-42.2).lineTo(42.2,1160).closePath();
	var mask_1_graphics_148 = new cjs.Graphics().moveTo(-1159.9,42.9).lineTo(-42.9,-1159.9).lineTo(1159.9,-42.9).lineTo(42.9,1159.9).closePath();
	var mask_1_graphics_149 = new cjs.Graphics().moveTo(-1159.9,43.5).lineTo(-43.5,-1159.9).lineTo(1159.9,-43.5).lineTo(43.5,1159.9).closePath();
	var mask_1_graphics_150 = new cjs.Graphics().moveTo(-1159.9,44.2).lineTo(-44.2,-1159.9).lineTo(1159.9,-44.2).lineTo(44.2,1159.9).closePath();
	var mask_1_graphics_151 = new cjs.Graphics().moveTo(-1159.9,44.8).lineTo(-44.8,-1159.9).lineTo(1159.9,-44.8).lineTo(44.8,1159.9).closePath();
	var mask_1_graphics_152 = new cjs.Graphics().moveTo(-1159.8,45.3).lineTo(-45.3,-1159.8).lineTo(1159.8,-45.3).lineTo(45.3,1159.8).closePath();
	var mask_1_graphics_153 = new cjs.Graphics().moveTo(-1159.8,45.8).lineTo(-45.8,-1159.8).lineTo(1159.8,-45.8).lineTo(45.8,1159.8).closePath();
	var mask_1_graphics_154 = new cjs.Graphics().moveTo(-1159.8,46.3).lineTo(-46.3,-1159.8).lineTo(1159.8,-46.3).lineTo(46.3,1159.8).closePath();
	var mask_1_graphics_155 = new cjs.Graphics().moveTo(-1159.8,46.7).lineTo(-46.7,-1159.8).lineTo(1159.8,-46.7).lineTo(46.7,1159.8).closePath();
	var mask_1_graphics_156 = new cjs.Graphics().moveTo(-1159.8,47.1).lineTo(-47.1,-1159.8).lineTo(1159.8,-47.1).lineTo(47.1,1159.8).closePath();
	var mask_1_graphics_157 = new cjs.Graphics().moveTo(-1159.8,47.5).lineTo(-47.5,-1159.8).lineTo(1159.8,-47.5).lineTo(47.5,1159.8).closePath();
	var mask_1_graphics_158 = new cjs.Graphics().moveTo(-1159.7,47.8).lineTo(-47.8,-1159.7).lineTo(1159.7,-47.8).lineTo(47.8,1159.7).closePath();
	var mask_1_graphics_159 = new cjs.Graphics().moveTo(-1159.7,48.1).lineTo(-48.1,-1159.7).lineTo(1159.7,-48.1).lineTo(48.1,1159.7).closePath();
	var mask_1_graphics_160 = new cjs.Graphics().moveTo(-1159.7,48.4).lineTo(-48.4,-1159.7).lineTo(1159.7,-48.4).lineTo(48.4,1159.7).closePath();
	var mask_1_graphics_161 = new cjs.Graphics().moveTo(-1159.7,48.6).lineTo(-48.6,-1159.7).lineTo(1159.7,-48.6).lineTo(48.6,1159.7).closePath();
	var mask_1_graphics_162 = new cjs.Graphics().moveTo(-1159.7,48.9).lineTo(-48.9,-1159.7).lineTo(1159.7,-48.9).lineTo(48.9,1159.7).closePath();
	var mask_1_graphics_163 = new cjs.Graphics().moveTo(-1159.7,49.1).lineTo(-49.1,-1159.7).lineTo(1159.7,-49.1).lineTo(49.1,1159.7).closePath();
	var mask_1_graphics_164 = new cjs.Graphics().moveTo(-1159.7,49.2).lineTo(-49.2,-1159.7).lineTo(1159.7,-49.2).lineTo(49.2,1159.7).closePath();
	var mask_1_graphics_165 = new cjs.Graphics().moveTo(-1159.7,49.4).lineTo(-49.4,-1159.7).lineTo(1159.7,-49.4).lineTo(49.4,1159.7).closePath();
	var mask_1_graphics_166 = new cjs.Graphics().moveTo(-1159.7,49.5).lineTo(-49.5,-1159.7).lineTo(1159.7,-49.5).lineTo(49.5,1159.7).closePath();
	var mask_1_graphics_167 = new cjs.Graphics().moveTo(-1159.7,49.6).lineTo(-49.6,-1159.7).lineTo(1159.7,-49.6).lineTo(49.6,1159.7).closePath();
	var mask_1_graphics_168 = new cjs.Graphics().moveTo(-1159.7,49.7).lineTo(-49.7,-1159.7).lineTo(1159.7,-49.7).lineTo(49.7,1159.7).closePath();
	var mask_1_graphics_169 = new cjs.Graphics().moveTo(-1159.7,49.8).lineTo(-49.8,-1159.7).lineTo(1159.7,-49.8).lineTo(49.8,1159.7).closePath();
	var mask_1_graphics_170 = new cjs.Graphics().moveTo(-1159.7,49.9).lineTo(-49.9,-1159.7).lineTo(1159.7,-49.9).lineTo(49.9,1159.7).closePath();
	var mask_1_graphics_171 = new cjs.Graphics().moveTo(-1159.6,49.9).lineTo(-49.9,-1159.6).lineTo(1159.6,-49.9).lineTo(49.9,1159.6).closePath();
	var mask_1_graphics_172 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_173 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_174 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_175 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_176 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_177 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_178 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();
	var mask_1_graphics_179 = new cjs.Graphics().moveTo(-1159.6,50).lineTo(-50,-1159.6).lineTo(1159.6,-50).lineTo(50,1159.6).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-322.35,y:-669.15}).wait(22).to({graphics:mask_1_graphics_22,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_23,x:-0.0019,y:0.0014}).wait(1).to({graphics:mask_1_graphics_24,x:-0.0077,y:0.0054}).wait(1).to({graphics:mask_1_graphics_25,x:-0.017,y:0.0119}).wait(1).to({graphics:mask_1_graphics_26,x:-0.0298,y:0.021}).wait(1).to({graphics:mask_1_graphics_27,x:-0.046,y:0.0323}).wait(1).to({graphics:mask_1_graphics_28,x:-0.0654,y:0.0459}).wait(1).to({graphics:mask_1_graphics_29,x:-0.0878,y:0.0617}).wait(1).to({graphics:mask_1_graphics_30,x:-0.1131,y:0.0794}).wait(1).to({graphics:mask_1_graphics_31,x:-0.1412,y:0.0992}).wait(1).to({graphics:mask_1_graphics_32,x:-0.172,y:0.1208}).wait(1).to({graphics:mask_1_graphics_33,x:-0.2052,y:0.1441}).wait(1).to({graphics:mask_1_graphics_34,x:-0.2408,y:0.1691}).wait(1).to({graphics:mask_1_graphics_35,x:-0.2787,y:0.1957}).wait(1).to({graphics:mask_1_graphics_36,x:-0.3186,y:0.2237}).wait(1).to({graphics:mask_1_graphics_37,x:-0.3606,y:0.2532}).wait(1).to({graphics:mask_1_graphics_38,x:-0.4043,y:0.2839}).wait(1).to({graphics:mask_1_graphics_39,x:-0.4498,y:0.3158}).wait(1).to({graphics:mask_1_graphics_40,x:-0.4969,y:0.3489}).wait(1).to({graphics:mask_1_graphics_41,x:-0.5454,y:0.3829}).wait(1).to({graphics:mask_1_graphics_42,x:-0.5953,y:0.4179}).wait(1).to({graphics:mask_1_graphics_43,x:-0.6463,y:0.4538}).wait(1).to({graphics:mask_1_graphics_44,x:-0.6985,y:0.4904}).wait(1).to({graphics:mask_1_graphics_45,x:-0.7517,y:0.5278}).wait(1).to({graphics:mask_1_graphics_46,x:-0.8057,y:0.5657}).wait(1).to({graphics:mask_1_graphics_47,x:-0.8604,y:0.6041}).wait(1).to({graphics:mask_1_graphics_48,x:-0.9157,y:0.6429}).wait(1).to({graphics:mask_1_graphics_49,x:-0.9715,y:0.6821}).wait(1).to({graphics:mask_1_graphics_50,x:-1.0277,y:0.7216}).wait(1).to({graphics:mask_1_graphics_51,x:-1.0842,y:0.7612}).wait(1).to({graphics:mask_1_graphics_52,x:-1.1408,y:0.801}).wait(1).to({graphics:mask_1_graphics_53,x:-1.1974,y:0.8407}).wait(1).to({graphics:mask_1_graphics_54,x:-1.2539,y:0.8804}).wait(1).to({graphics:mask_1_graphics_55,x:-1.3102,y:0.9199}).wait(1).to({graphics:mask_1_graphics_56,x:-1.3662,y:0.9593}).wait(1).to({graphics:mask_1_graphics_57,x:-1.4218,y:0.9983}).wait(1).to({graphics:mask_1_graphics_58,x:-1.4768,y:1.0369}).wait(1).to({graphics:mask_1_graphics_59,x:-1.5311,y:1.075}).wait(1).to({graphics:mask_1_graphics_60,x:-1.5847,y:1.1127}).wait(1).to({graphics:mask_1_graphics_61,x:-1.6374,y:1.1497}).wait(1).to({graphics:mask_1_graphics_62,x:-1.6891,y:1.186}).wait(1).to({graphics:mask_1_graphics_63,x:-1.7397,y:1.2215}).wait(1).to({graphics:mask_1_graphics_64,x:-1.7891,y:1.2561}).wait(1).to({graphics:mask_1_graphics_65,x:-1.8371,y:1.2899}).wait(1).to({graphics:mask_1_graphics_66,x:-1.8837,y:1.3226}).wait(1).to({graphics:mask_1_graphics_67,x:-1.9287,y:1.3542}).wait(1).to({graphics:mask_1_graphics_68,x:-1.9721,y:1.3847}).wait(1).to({graphics:mask_1_graphics_69,x:-2.0137,y:1.4139}).wait(1).to({graphics:mask_1_graphics_70,x:-2.0534,y:1.4418}).wait(1).to({graphics:mask_1_graphics_71,x:-2.0912,y:1.4683}).wait(1).to({graphics:mask_1_graphics_72,x:-2.1268,y:1.4933}).wait(1).to({graphics:mask_1_graphics_73,x:-2.1602,y:1.5167}).wait(1).to({graphics:mask_1_graphics_74,x:-2.1913,y:1.5386}).wait(1).to({graphics:mask_1_graphics_75,x:-2.22,y:1.5587}).wait(1).to({graphics:mask_1_graphics_76,x:-2.2461,y:1.577}).wait(1).to({graphics:mask_1_graphics_77,x:-2.2695,y:1.5935}).wait(1).to({graphics:mask_1_graphics_78,x:-2.2902,y:1.608}).wait(1).to({graphics:mask_1_graphics_79,x:-2.308,y:1.6205}).wait(1).to({graphics:mask_1_graphics_80,x:-2.3228,y:1.6309}).wait(1).to({graphics:mask_1_graphics_81,x:-2.3345,y:1.6391}).wait(1).to({graphics:mask_1_graphics_82,x:-2.3431,y:1.6451}).wait(1).to({graphics:mask_1_graphics_83,x:-2.3482,y:1.6488}).wait(1).to({graphics:mask_1_graphics_84,x:0,y:4}).wait(1).to({graphics:mask_1_graphics_85,x:-31.1,y:-24.25}).wait(1).to({graphics:mask_1_graphics_86,x:-31.1009,y:-24.251}).wait(1).to({graphics:mask_1_graphics_87,x:-31.1069,y:-24.2584}).wait(1).to({graphics:mask_1_graphics_88,x:-31.1232,y:-24.2783}).wait(1).to({graphics:mask_1_graphics_89,x:-31.155,y:-24.3171}).wait(1).to({graphics:mask_1_graphics_90,x:-31.2073,y:-24.3811}).wait(1).to({graphics:mask_1_graphics_91,x:-31.2855,y:-24.4766}).wait(1).to({graphics:mask_1_graphics_92,x:-31.3945,y:-24.6098}).wait(1).to({graphics:mask_1_graphics_93,x:-31.5397,y:-24.787}).wait(1).to({graphics:mask_1_graphics_94,x:-31.726,y:-25.0146}).wait(1).to({graphics:mask_1_graphics_95,x:-31.9587,y:-25.2989}).wait(1).to({graphics:mask_1_graphics_96,x:-32.2429,y:-25.6461}).wait(1).to({graphics:mask_1_graphics_97,x:-32.5838,y:-26.0625}).wait(1).to({graphics:mask_1_graphics_98,x:-32.9866,y:-26.5544}).wait(1).to({graphics:mask_1_graphics_99,x:-33.4563,y:-27.1281}).wait(1).to({graphics:mask_1_graphics_100,x:-33.9981,y:-27.79}).wait(1).to({graphics:mask_1_graphics_101,x:-34.6173,y:-28.5462}).wait(1).to({graphics:mask_1_graphics_102,x:-35.3188,y:-29.4031}).wait(1).to({graphics:mask_1_graphics_103,x:-36.108,y:-30.3671}).wait(1).to({graphics:mask_1_graphics_104,x:-36.9899,y:-31.4443}).wait(1).to({graphics:mask_1_graphics_105,x:-37.9697,y:-32.641}).wait(1).to({graphics:mask_1_graphics_106,x:-39.0525,y:-33.9637}).wait(1).to({graphics:mask_1_graphics_107,x:-40.2435,y:-35.4185}).wait(1).to({graphics:mask_1_graphics_108,x:-41.5479,y:-37.0117}).wait(1).to({graphics:mask_1_graphics_109,x:-42.9708,y:-38.7497}).wait(1).to({graphics:mask_1_graphics_110,x:-44.5173,y:-40.6387}).wait(1).to({graphics:mask_1_graphics_111,x:-46.1927,y:-42.6851}).wait(1).to({graphics:mask_1_graphics_112,x:-48.002,y:-44.8951}).wait(1).to({graphics:mask_1_graphics_113,x:-49.9504,y:-47.275}).wait(1).to({graphics:mask_1_graphics_114,x:-52.043,y:-49.8311}).wait(1).to({graphics:mask_1_graphics_115,x:-54.2851,y:-52.5697}).wait(1).to({graphics:mask_1_graphics_116,x:-56.6818,y:-55.4971}).wait(1).to({graphics:mask_1_graphics_117,x:-59.2382,y:-58.6197}).wait(1).to({graphics:mask_1_graphics_118,x:-61.9594,y:-61.9435}).wait(1).to({graphics:mask_1_graphics_119,x:-64.8507,y:-65.4751}).wait(1).to({graphics:mask_1_graphics_120,x:-67.9171,y:-69.2207}).wait(1).to({graphics:mask_1_graphics_121,x:-71.1639,y:-73.1865}).wait(1).to({graphics:mask_1_graphics_122,x:-74.5962,y:-77.3788}).wait(1).to({graphics:mask_1_graphics_123,x:-78.2191,y:-81.8041}).wait(1).to({graphics:mask_1_graphics_124,x:-82.0377,y:-86.4684}).wait(1).to({graphics:mask_1_graphics_125,x:-86.0574,y:-91.3782}).wait(1).to({graphics:mask_1_graphics_126,x:-90.2831,y:-96.5398}).wait(1).to({graphics:mask_1_graphics_127,x:-94.72,y:-101.9593}).wait(1).to({graphics:mask_1_graphics_128,x:-99.3734,y:-107.6432}).wait(1).to({graphics:mask_1_graphics_129,x:-104.2482,y:-113.5977}).wait(1).to({graphics:mask_1_graphics_130,x:-109.3498,y:-119.8291}).wait(1).to({graphics:mask_1_graphics_131,x:-114.6833,y:-126.3436}).wait(1).to({graphics:mask_1_graphics_132,x:-120.2537,y:-133.1477}).wait(1).to({graphics:mask_1_graphics_133,x:-125.8242,y:-139.9518}).wait(1).to({graphics:mask_1_graphics_134,x:-131.1576,y:-146.4664}).wait(1).to({graphics:mask_1_graphics_135,x:-136.2592,y:-152.6977}).wait(1).to({graphics:mask_1_graphics_136,x:-141.1341,y:-158.6522}).wait(1).to({graphics:mask_1_graphics_137,x:-145.7874,y:-164.3361}).wait(1).to({graphics:mask_1_graphics_138,x:-150.2244,y:-169.7557}).wait(1).to({graphics:mask_1_graphics_139,x:-154.4501,y:-174.9172}).wait(1).to({graphics:mask_1_graphics_140,x:-158.4697,y:-179.827}).wait(1).to({graphics:mask_1_graphics_141,x:-162.2883,y:-184.4913}).wait(1).to({graphics:mask_1_graphics_142,x:-165.9112,y:-188.9166}).wait(1).to({graphics:mask_1_graphics_143,x:-169.3435,y:-193.1089}).wait(1).to({graphics:mask_1_graphics_144,x:-172.5903,y:-197.0747}).wait(1).to({graphics:mask_1_graphics_145,x:-175.6567,y:-200.8203}).wait(1).to({graphics:mask_1_graphics_146,x:-178.548,y:-204.3518}).wait(1).to({graphics:mask_1_graphics_147,x:-181.2692,y:-207.6757}).wait(1).to({graphics:mask_1_graphics_148,x:-183.8256,y:-210.7982}).wait(1).to({graphics:mask_1_graphics_149,x:-186.2223,y:-213.7257}).wait(1).to({graphics:mask_1_graphics_150,x:-188.4643,y:-216.4643}).wait(1).to({graphics:mask_1_graphics_151,x:-190.557,y:-219.0204}).wait(1).to({graphics:mask_1_graphics_152,x:-192.5054,y:-221.4003}).wait(1).to({graphics:mask_1_graphics_153,x:-194.3147,y:-223.6103}).wait(1).to({graphics:mask_1_graphics_154,x:-195.9901,y:-225.6567}).wait(1).to({graphics:mask_1_graphics_155,x:-197.5366,y:-227.5457}).wait(1).to({graphics:mask_1_graphics_156,x:-198.9595,y:-229.2837}).wait(1).to({graphics:mask_1_graphics_157,x:-200.2639,y:-230.8769}).wait(1).to({graphics:mask_1_graphics_158,x:-201.4549,y:-232.3317}).wait(1).to({graphics:mask_1_graphics_159,x:-202.5377,y:-233.6543}).wait(1).to({graphics:mask_1_graphics_160,x:-203.5175,y:-234.8511}).wait(1).to({graphics:mask_1_graphics_161,x:-204.3994,y:-235.9283}).wait(1).to({graphics:mask_1_graphics_162,x:-205.1885,y:-236.8922}).wait(1).to({graphics:mask_1_graphics_163,x:-205.8901,y:-237.7492}).wait(1).to({graphics:mask_1_graphics_164,x:-206.5092,y:-238.5054}).wait(1).to({graphics:mask_1_graphics_165,x:-207.0511,y:-239.1672}).wait(1).to({graphics:mask_1_graphics_166,x:-207.5208,y:-239.741}).wait(1).to({graphics:mask_1_graphics_167,x:-207.9235,y:-240.2329}).wait(1).to({graphics:mask_1_graphics_168,x:-208.2644,y:-240.6493}).wait(1).to({graphics:mask_1_graphics_169,x:-208.5487,y:-240.9965}).wait(1).to({graphics:mask_1_graphics_170,x:-208.7814,y:-241.2807}).wait(1).to({graphics:mask_1_graphics_171,x:-208.9677,y:-241.5083}).wait(1).to({graphics:mask_1_graphics_172,x:-209.1128,y:-241.6856}).wait(1).to({graphics:mask_1_graphics_173,x:-209.2219,y:-241.8188}).wait(1).to({graphics:mask_1_graphics_174,x:-209.3,y:-241.9143}).wait(1).to({graphics:mask_1_graphics_175,x:-209.3524,y:-241.9782}).wait(1).to({graphics:mask_1_graphics_176,x:-209.3842,y:-242.017}).wait(1).to({graphics:mask_1_graphics_177,x:-209.4005,y:-242.037}).wait(1).to({graphics:mask_1_graphics_178,x:-209.4065,y:-242.0443}).wait(1).to({graphics:mask_1_graphics_179,x:-209.3,y:-242.05}).wait(15));

	// wipe
	this.instance_5 = new lib.mask("synched",0,false);
	this.instance_5.setTransform(1120,4,1,1,0,0,0,1660,540);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.5,-536.1,1141.2,1098.7);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(611.1,-1033.1,2304.7000000000003,1882.3);


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
		var version = "do";
		//version = "do";
		var COLOR_VERSION = 3;
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
				
				if(version=="do")
				self.whiteLogo.play();
			 
			
			});
			
		
			if(version == "think"){
			//	gsap.from(self.shape, {scale:0, delay:d,duration:0.6, ease:allianzEase});
		
				 
				gsap.to(self.copy1.copy1_1, {y:0, alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {y:0, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {y:0, alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
				
			
				d+=0.4;
				gsap.to(self.copy1.copy1_1, {x:"-=20", alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {x:"-=20", alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {x:"-=20", alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
		
				}
				else{
					 
				//	gsap.set(self.shape, {scale:0});
				}
				
				
			
		gsap.from(self.plugMC, {scale:0,delay:d, duration:0.75, ease: "elastic.out(1.0, 0.9)"});
			
		
			gsap.delayedCall(d , function() {
					self.plugMC.play();
			});
				gsap.delayedCall(d +1, function() {
					sparksParticleGroup.addEmitter(sparksEmitter);
					scene.add(sparksParticleGroup.mesh);
						   //scene.add(particleGroup.mesh);
		 
			});
			
			 
				gsap.delayedCall(d , function() {
					
			smokeParticleGroup.addEmitter(smokeEmitter);
					scene.add(smokeParticleGroup.mesh);
		 
			});
		 
			d+=0.25;
			
				
			gsap.from(cta, {scale:0, alpha:1, ease: 'elastic.out(1.0, 0.9)', delay: d, duration:0.75});
			
		
		        d+=1;
			
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
			
		 
			 d+=0.25;
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
		
		addBorder();
		
		animateInFrame1();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// particles
	this.particles = new lib.particleSystem();
	this.particles.name = "particles";
	this.particles.setTransform(186.7,163.7);

	this.timeline.addTween(cjs.Tween.get(this.particles).wait(1));

	// copy_do
	this.copyDo = new lib.copyDo();
	this.copyDo.name = "copyDo";
	this.copyDo.setTransform(158,72.85,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.copyDo).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(148,37.75);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(150,43);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.whiteLogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(234,19);

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(207.4,214.8,1.0001,1,0,0,0,1.4,0.8);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(-118.95,383.25,1,1,0,0,0,5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// Layer_1
	this.plugMC = new lib.plug_1();
	this.plugMC.name = "plugMC";
	this.plugMC.setTransform(220.2,187,0.4949,0.4926,0,0,0,-43.6,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.plugMC).wait(1));

	// animation
	this.crowbar = new lib.crowbarMC();
	this.crowbar.name = "crowbar";
	this.crowbar.setTransform(128,152.55,0.1046,0.1046,0,0,0,902.4,540.7);

	this.timeline.addTween(cjs.Tween.get(this.crowbar).wait(1));

	// cta_do
	this.ctaDo = new lib.ctado();
	this.ctaDo.name = "ctaDo";
	this.ctaDo.setTransform(63,213.55,0.7185,0.7188,0,0,0,50.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.ctaDo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(-56.2,213.55,0.7538,0.7541,0,0,0,58.1,15.3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// largeshape
	this.largecircle = new lib.largeshape();
	this.largecircle.name = "largecircle";
	this.largecircle.setTransform(173.2,130,1,1,0,0,0,5.2,5);
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
	this.shape.graphics.beginFill().beginStroke("rgba(0,0,0,0)").setStrokeStyle(1,1,1,3,true).moveTo(-178,-135).lineTo(178,-135).lineTo(178,135).lineTo(-178,135).closePath();
	this.shape.setTransform(168,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-178,135).lineTo(-178,-135).lineTo(178,-135).lineTo(178,135).closePath();
	this.shape_1.setTransform(168,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,90.5,374,509.5);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 336,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./burnok.png", id:"burnok"},
		{src:"./crowbar.png", id:"crowbar"},
		{src:"./noise.jpg", id:"noise"},
		{src:"./plug.png", id:"plug"}
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