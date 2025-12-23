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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.7,12.8).curveTo(-1.5,11.9,-3.8,9.5).curveTo(-7.6,5.7,-7.6,0).curveTo(-7.6,-5.7,-3.8,-9.5).curveTo(-2,-11.3,0.4,-12.3).curveTo(2.9,-13.3,5.7,-13.3).curveTo(11.4,-13.3,15.3,-9.5).curveTo(19.1,-5.7,19,0).curveTo(19.1,5.7,15.3,9.5).curveTo(12.9,11.9,9.8,12.8).curveTo(7.9,13.3,5.7,13.3).curveTo(3.6,13.3,1.7,12.8).closePath().moveTo(-2.2,-8).curveTo(-5.3,-4.9,-5.3,0).curveTo(-5.3,4.9,-2.2,8).curveTo(1,11.2,5.7,11.2).curveTo(10.5,11.2,13.7,8).curveTo(16.8,4.9,16.8,0).curveTo(16.8,-4.8,13.7,-8).curveTo(10.5,-11.2,5.7,-11.2).curveTo(1,-11.2,-2.2,-8).closePath().moveTo(82.5,6.9).curveTo(81.6,5.9,81.7,3.6).lineTo(81.7,-2.5).lineTo(79.8,-2.5).lineTo(79.8,-5.2).lineTo(81.8,-5.2).lineTo(82.4,-9.5).lineTo(85.6,-9.5).lineTo(85.6,-5.2).lineTo(88.5,-5.2).lineTo(88.5,-2.4).lineTo(85.6,-2.4).lineTo(85.6,3.1).curveTo(85.6,4.1,85.8,4.5).curveTo(86.1,4.9,86.9,4.9).lineTo(88.2,4.8).lineTo(88.2,7.4).lineTo(87.5,7.7).lineTo(86.4,7.9).lineTo(85.1,8).curveTo(83.4,8,82.5,6.9).closePath().moveTo(70.6,6.2).curveTo(69.1,4.4,69.1,1.4).curveTo(69.1,-1.6,70.7,-3.5).curveTo(72.4,-5.4,75.1,-5.4).curveTo(77.3,-5.4,78.8,-4.1).lineTo(78.2,-1.5).curveTo(77.5,-2.1,77,-2.3).curveTo(76.5,-2.5,75.8,-2.5).curveTo(73.2,-2.5,73.1,1.5).curveTo(73.2,3.3,73.8,4.2).curveTo(74.5,5.2,75.7,5.2).curveTo(76.4,5.2,76.9,5).curveTo(77.6,4.8,78.3,4.3).lineTo(78.8,6.7).lineTo(77.9,7.3).curveTo(76.6,8,74.9,8).curveTo(72.2,8,70.6,6.2).closePath().moveTo(57.9,6.3).curveTo(56.3,4.5,56.3,1.5).curveTo(56.4,-1.6,58,-3.5).curveTo(59.7,-5.4,62.4,-5.4).curveTo(67.7,-5.4,67.7,1.6).lineTo(67.7,2.3).lineTo(60.3,2.3).curveTo(60.3,3.9,61.1,4.5).curveTo(61.8,5.2,63.3,5.2).curveTo(64.2,5.2,64.9,5).curveTo(65.7,4.8,66.6,4.2).lineTo(67.4,6.6).lineTo(66.2,7.2).curveTo(64.6,8,62.5,8).curveTo(59.6,8,57.9,6.3).closePath().moveTo(60.8,-2.1).curveTo(60.4,-1.4,60.3,-0.1).lineTo(63.9,-0.1).lineTo(63.9,-0.2).curveTo(63.9,-2.8,62.2,-2.8).curveTo(61.3,-2.8,60.8,-2.1).closePath().moveTo(-50.3,7).curveTo(-51.2,6.1,-51.2,4.3).curveTo(-51.2,2.8,-50.5,1.8).curveTo(-50,0.9,-48.7,0.4).lineTo(-47.2,-0.1).lineTo(-44,-0.7).lineTo(-44,-1).curveTo(-44.1,-1.8,-44.4,-2.2).curveTo(-44.7,-2.5,-45.6,-2.5).curveTo(-46.4,-2.5,-47.5,-2.2).curveTo(-48.5,-2,-49.5,-1.5).lineTo(-50.5,-4).lineTo(-49,-4.6).curveTo(-48.5,-4.9,-47.7,-5).curveTo(-46.2,-5.4,-44.6,-5.4).curveTo(-42.1,-5.4,-41.1,-4.4).curveTo(-40.2,-3.4,-40.2,-0.9).lineTo(-40.2,5.3).curveTo(-40.1,5.9,-39.9,6.1).curveTo(-39.7,6.4,-39.2,6.4).lineTo(-39,6.4).lineTo(-39,7.8).lineTo(-42.7,7.8).curveTo(-44,7.8,-44,6.6).lineTo(-44,6.4).lineTo(-44.9,7.1).lineTo(-45.7,7.5).curveTo(-46.8,7.9,-47.8,7.9).curveTo(-49.6,7.9,-50.3,7).closePath().moveTo(-46.4,2.2).curveTo(-46.9,2.4,-47.1,2.8).curveTo(-47.3,3.1,-47.3,3.9).curveTo(-47.3,4.6,-47,4.9).curveTo(-46.9,5.2,-46.3,5.2).curveTo(-45.8,5.2,-45.1,4.9).curveTo(-44.5,4.6,-44,4.1).lineTo(-44,1.6).curveTo(-45.5,1.8,-46.4,2.2).closePath().moveTo(47.7,7.8).lineTo(47.7,-5.2).lineTo(51.4,-5.2).lineTo(51.4,-3.5).lineTo(51.5,-3.5).curveTo(52.2,-4.4,52.9,-4.8).curveTo(53.5,-5.3,54.3,-5.3).lineTo(54.8,-5.2).lineTo(55.5,-5.1).lineTo(55.5,-1.5).lineTo(54.6,-1.7).lineTo(53.9,-1.8).curveTo(53.2,-1.8,52.6,-1.6).lineTo(51.6,-0.9).lineTo(51.6,7.8).closePath().moveTo(41,7.8).lineTo(41,-5.2).lineTo(45,-5.2).lineTo(45,7.8).closePath().moveTo(25.4,7.8).lineTo(25.4,-9.5).lineTo(31,-9.5).curveTo(32.8,-9.5,33.8,-9.3).curveTo(34.9,-9,35.9,-8.4).curveTo(37.3,-7.4,38.2,-5.4).curveTo(39,-3.4,39,-0.8).curveTo(39,2.7,37.3,4.9).curveTo(36.5,6,35.3,6.7).curveTo(34.3,7.3,33.2,7.6).curveTo(32,7.8,30.2,7.8).closePath().moveTo(29.5,4.8).lineTo(30.8,4.8).curveTo(32.7,4.8,33.7,3.4).curveTo(34.8,1.9,34.7,-0.8).curveTo(34.7,-3.9,33.6,-5.4).curveTo(32.9,-6.5,30.9,-6.5).lineTo(29.5,-6.5).closePath().moveTo(-23.9,7.8).lineTo(-23.9,5.1).lineTo(-18.5,-2.5).lineTo(-21.4,-2.5).curveTo(-22.3,-2.5,-22.3,-1.7).lineTo(-22.3,-1.4).lineTo(-23.9,-1.4).lineTo(-23.9,-3.8).curveTo(-23.9,-4.5,-23.5,-4.9).curveTo(-23.2,-5.2,-22.4,-5.2).lineTo(-14,-5.2).lineTo(-14,-2.5).lineTo(-19.4,5.1).lineTo(-13.6,5.1).lineTo(-13.6,7.8).closePath().moveTo(-29.8,7.8).lineTo(-29.8,-0.4).curveTo(-29.8,-1.4,-30,-1.8).curveTo(-30.2,-2.1,-30.8,-2.1).curveTo(-32,-2.1,-33.1,-1).lineTo(-33.1,7.8).lineTo(-37.1,7.8).lineTo(-37.1,-2.7).curveTo(-37.1,-3.2,-37.4,-3.5).curveTo(-37.6,-3.7,-38.1,-3.7).lineTo(-38.3,-3.7).lineTo(-38.3,-5.2).lineTo(-34.4,-5.2).curveTo(-33.2,-5.2,-33.2,-4).lineTo(-33.2,-3.5).curveTo(-32.1,-4.5,-31.2,-4.9).curveTo(-30.2,-5.4,-29,-5.4).curveTo(-27.3,-5.4,-26.6,-4.4).curveTo(-26.1,-3.9,-25.9,-3.3).curveTo(-25.7,-2.6,-25.8,-1).lineTo(-25.8,7.8).closePath().moveTo(-57.1,7.8).lineTo(-57.1,-2.7).curveTo(-57.1,-3.2,-57.3,-3.5).curveTo(-57.6,-3.7,-58.1,-3.7).lineTo(-58.3,-3.7).lineTo(-58.3,-5.2).lineTo(-54.4,-5.2).curveTo(-53.7,-5.2,-53.3,-4.8).curveTo(-53,-4.5,-53,-3.9).lineTo(-53,7.8).closePath().moveTo(-64.1,7.8).lineTo(-64.1,-7.1).curveTo(-64.1,-7.6,-64.4,-7.8).curveTo(-64.6,-8,-65.2,-8).lineTo(-65.4,-8).lineTo(-65.4,-9.5).lineTo(-61.4,-9.5).curveTo(-60.8,-9.5,-60.4,-9.2).curveTo(-60.1,-8.8,-60.1,-8.2).lineTo(-60.1,7.8).closePath().moveTo(-71.1,7.8).lineTo(-71.1,-7.1).curveTo(-71.1,-7.6,-71.3,-7.8).curveTo(-71.6,-8,-72.1,-8).lineTo(-72.4,-8).lineTo(-72.4,-9.5).lineTo(-68.3,-9.5).curveTo(-67.8,-9.5,-67.4,-9.2).curveTo(-67,-8.8,-67.1,-8.2).lineTo(-67.1,7.8).closePath().moveTo(-76.9,7.8).lineTo(-78.1,3.6).lineTo(-83,3.6).lineTo(-84.3,7.8).lineTo(-88.5,7.8).lineTo(-83.9,-5.9).lineTo(-83.6,-6.7).lineTo(-83.6,-7.3).curveTo(-83.6,-8,-84.6,-8).lineTo(-85.2,-8).lineTo(-85.2,-9.5).lineTo(-78.7,-9.5).curveTo(-78,-9.5,-77.5,-9.2).curveTo(-77,-8.9,-76.9,-8.2).lineTo(-72.3,7.8).closePath().moveTo(-78.7,0.8).lineTo(-80.4,-5.6).lineTo(-82.4,0.8).lineTo(-78.7,0.8).closePath().moveTo(9.3,7.5).lineTo(9.3,-5.5).lineTo(11.6,-5.5).curveTo(12.5,-5.5,12.8,-5.2).curveTo(13.2,-4.8,13.2,-4).lineTo(13.2,7.5).closePath().moveTo(3.8,7.5).lineTo(3.8,-6).curveTo(3.8,-6.7,3.7,-6.9).curveTo(3.4,-7.2,2.8,-7.2).lineTo(2.7,-7.2).lineTo(2.7,-8.8).lineTo(6.1,-8.8).curveTo(7,-8.8,7.3,-8.4).curveTo(7.7,-8.1,7.6,-7.2).lineTo(7.6,7.5).closePath().moveTo(-1.7,7.5).lineTo(-1.7,-4).curveTo(-1.7,-4.8,-1.4,-5.2).curveTo(-1,-5.5,-0.1,-5.5).lineTo(2.1,-5.5).lineTo(2.1,7.5).closePath().moveTo(41.3,-6.6).curveTo(40.7,-7.1,40.6,-8).curveTo(40.7,-8.8,41.3,-9.3).curveTo(41.9,-9.8,43,-9.8).curveTo(44.1,-9.8,44.7,-9.3).curveTo(45.3,-8.8,45.3,-8).curveTo(45.3,-7.1,44.7,-6.6).curveTo(44.1,-6.1,43,-6.1).curveTo(41.9,-6.1,41.3,-6.6).closePath().moveTo(-57,-6.6).curveTo(-57.6,-7.1,-57.6,-8).curveTo(-57.6,-8.8,-57,-9.3).curveTo(-56.4,-9.8,-55.3,-9.8).curveTo(-54.2,-9.8,-53.6,-9.3).curveTo(-52.9,-8.8,-53,-8).curveTo(-52.9,-7.1,-53.6,-6.6).curveTo(-54.2,-6.1,-55.3,-6.1).curveTo(-56.4,-6.1,-57,-6.6).closePath();
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
	this.shape.graphics.beginFill("#FCAE7F").beginStroke().moveTo(-540,540).lineTo(-540,-540).lineTo(540,-540).lineTo(540,540).closePath();

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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-1.4,5.7).lineTo(-1.4,-0.4).lineTo(-2.4,-0.4).lineTo(-2.4,-2).lineTo(-1.4,-2).lineTo(-1.4,-3.1).curveTo(-1.4,-4.4,-0.8,-5).curveTo(-0.1,-5.7,1,-5.7).curveTo(1.9,-5.7,2.4,-5.4).lineTo(2.1,-4).curveTo(1.8,-4.1,1.3,-4.1).curveTo(0.8,-4.1,0.5,-3.9).curveTo(0.3,-3.6,0.3,-3).lineTo(0.3,-2).lineTo(2.2,-2).lineTo(2.2,-0.4).lineTo(0.3,-0.4).lineTo(0.3,5.7).closePath();
	this.shape.setTransform(48.675,11.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F86200").beginStroke().moveTo(-2.1,3.5).curveTo(-2.9,3,-3.3,2.1).curveTo(-3.8,1.2,-3.8,0).curveTo(-3.8,-1.2,-3.3,-2.1).curveTo(-2.9,-3,-2.1,-3.5).curveTo(-1.3,-4,-0.3,-4).curveTo(1.3,-4,2.3,-2.7).lineTo(2.3,-3.8).lineTo(3.8,-3.8).lineTo(3.8,3.8).lineTo(2.3,3.8).lineTo(2.3,2.7).curveTo(1.3,4,-0.3,4).curveTo(-1.3,4,-2.1,3.5).closePath().moveTo(-1.5,-1.7).curveTo(-2.2,-1.1,-2.1,0).curveTo(-2.2,1.1,-1.5,1.8).curveTo(-0.9,2.4,0,2.4).curveTo(1,2.4,1.6,1.8).curveTo(2.2,1.1,2.2,0).curveTo(2.2,-1.1,1.6,-1.8).curveTo(1,-2.4,0,-2.4).curveTo(-0.9,-2.4,-1.5,-1.7).closePath();
	this.shape_1.setTransform(41.2,13.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F86200").beginStroke().moveTo(-0.8,4.3).curveTo(-1.4,3.7,-1.4,2.6).lineTo(-1.4,-1.3).lineTo(-2.4,-1.3).lineTo(-2.4,-2.8).lineTo(-1.4,-2.8).lineTo(-1.4,-4.6).lineTo(0.3,-5).lineTo(0.3,-2.8).lineTo(2.3,-2.8).lineTo(2.3,-1.3).lineTo(0.3,-1.3).lineTo(0.3,2.3).curveTo(0.3,3.4,1.3,3.4).lineTo(2.2,3.2).lineTo(2.4,4.7).curveTo(1.8,5,1,4.9).curveTo(-0.2,4.9,-0.8,4.3).closePath();
	this.shape_2.setTransform(30.625,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#F86200").beginStroke().moveTo(-0.8,5.6).lineTo(-0.8,-2.1).lineTo(0.8,-2.1).lineTo(0.8,5.6).closePath().moveTo(-0.8,-3.8).curveTo(-1.1,-4.1,-1.1,-4.6).curveTo(-1.1,-5.1,-0.8,-5.4).curveTo(-0.5,-5.6,-0,-5.6).curveTo(0.5,-5.6,0.8,-5.3).curveTo(1.1,-5,1.1,-4.6).curveTo(1.1,-4.2,0.8,-3.9).curveTo(0.5,-3.6,-0,-3.6).curveTo(-0.5,-3.6,-0.8,-3.8).closePath();
	this.shape_3.setTransform(26.125,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#F86200").beginStroke().moveTo(-2.7,3).curveTo(-3.4,2.1,-3.4,0.6).lineTo(-3.4,-3.9).lineTo(-1.8,-3.9).lineTo(-1.8,0.2).curveTo(-1.8,1.3,-1.3,1.8).curveTo(-0.9,2.4,-0.1,2.4).curveTo(0.8,2.4,1.3,1.8).curveTo(1.8,1.2,1.8,0.3).lineTo(1.8,-3.9).lineTo(3.4,-3.9).lineTo(3.4,3.7).lineTo(1.9,3.7).lineTo(1.9,2.6).curveTo(1.5,3.3,0.9,3.6).curveTo(0.2,3.9,-0.6,3.9).curveTo(-1.9,3.9,-2.7,3).closePath();
	this.shape_4.setTransform(19.725,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F86200").beginStroke().moveTo(-1.1,5.2).curveTo(-1.6,4.7,-1.6,3.6).lineTo(-1.6,-5.7).lineTo(0.1,-5.7).lineTo(0.1,3.3).curveTo(0.1,3.7,0.3,3.9).curveTo(0.5,4.1,0.8,4.1).lineTo(1.4,4).lineTo(1.6,5.5).curveTo(1.1,5.7,0.4,5.7).curveTo(-0.6,5.7,-1.1,5.2).closePath();
	this.shape_5.setTransform(13.65,11.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F86200").beginStroke().moveTo(-3.7,4.8).lineTo(-3.4,3.1).curveTo(-2.1,3.9,-0.5,3.9).curveTo(0.6,3.9,1.3,3.4).curveTo(1.9,3,2,2.4).curveTo(2,2,1.7,1.7).curveTo(1.4,1.4,1,1.2).lineTo(-0.2,0.8).curveTo(-1.3,0.4,-2,0.1).curveTo(-2.7,-0.2,-3.2,-0.9).curveTo(-3.7,-1.5,-3.7,-2.5).curveTo(-3.7,-3.9,-2.7,-4.7).curveTo(-1.7,-5.5,0.1,-5.5).curveTo(1,-5.5,1.9,-5.3).curveTo(2.7,-5.1,3.3,-4.8).lineTo(2.8,-3.1).curveTo(2.3,-3.5,1.6,-3.7).curveTo(0.9,-3.9,0.2,-3.9).curveTo(-0.9,-3.9,-1.4,-3.5).curveTo(-1.9,-3.1,-1.9,-2.5).curveTo(-1.9,-2.1,-1.6,-1.8).curveTo(-1.3,-1.4,-0.8,-1.3).lineTo(0.4,-0.8).lineTo(2.1,-0.1).curveTo(2.8,0.2,3.3,0.8).curveTo(3.7,1.4,3.7,2.3).curveTo(3.7,3.8,2.6,4.7).curveTo(1.5,5.5,-0.5,5.5).curveTo(-2.4,5.5,-3.7,4.8).closePath();
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
	this.shape.graphics.beginFill("#F86200").beginStroke().moveTo(-0,2.7).lineTo(1.7,1).lineTo(-5.3,1).lineTo(-5.3,-0.9).lineTo(1.7,-0.9).lineTo(-0,-2.6).lineTo(1.3,-4).lineTo(5.3,-0).lineTo(1.3,4).closePath();
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
	this.shape_3.graphics.beginFill("#C1EBFB").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#8A679C").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#407D71").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F86200").beginStroke().moveTo(-161.4,161.5).lineTo(-161.4,-161.5).lineTo(161.4,-161.5).lineTo(161.4,161.5).closePath();

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#96DCFA").beginStroke().moveTo(-112.8,112.8).curveTo(-159.5,66.1,-159.5,0).curveTo(-159.5,-66.1,-112.8,-112.8).curveTo(-66.1,-159.5,0,-159.5).curveTo(66.1,-159.5,112.8,-112.8).curveTo(159.5,-66.1,159.5,0).curveTo(159.5,66.1,112.8,112.8).curveTo(66.1,159.5,0,159.5).curveTo(-66.1,159.5,-112.8,112.8).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.4,-161.5,323.3,323.5);


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
	this.shape.graphics.beginBitmapFill(img.crowbar, null, new cjs.Matrix2D(1,0,0,1,-136,-49)).beginStroke().moveTo(-136,49).lineTo(-131.9,29.6).curveTo(-125.6,24.8,-113.5,32.1).lineTo(62.5,-49).lineTo(136,-49).lineTo(136,49).closePath();

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
	this.shape.graphics.beginFill("#FDD25C").beginStroke().moveTo(-6.3,8.7).lineTo(-5.5,6).curveTo(-4.5,6.6,-3.3,6.9).curveTo(-2.1,7.2,-0.8,7.2).curveTo(1.6,7.2,2.8,6.1).curveTo(4,5,4,2.7).lineTo(4,2.1).curveTo(2.2,4.3,-0.6,4.3).curveTo(-2.5,4.3,-4,3.4).curveTo(-5.5,2.5,-6.3,0.8).curveTo(-7.1,-0.8,-7.1,-2.9).curveTo(-7.1,-5,-6.3,-6.6).curveTo(-5.5,-8.2,-4,-9.2).curveTo(-2.5,-10.1,-0.6,-10.1).curveTo(2.4,-10.1,4.2,-7.6).lineTo(4.2,-9.8).lineTo(7.1,-9.8).lineTo(7.1,3).curveTo(7.1,6.4,5.1,8.2).curveTo(3.1,10.1,-0.6,10.1).curveTo(-3.7,10.1,-6.3,8.7).closePath().moveTo(-2.9,-6).curveTo(-4,-4.8,-4,-2.9).curveTo(-4,-1,-2.9,0.2).curveTo(-1.8,1.4,0.1,1.4).curveTo(1.9,1.4,2.9,0.2).curveTo(4,-0.9,4,-2.9).curveTo(4,-4.9,2.9,-6).curveTo(1.9,-7.2,0.1,-7.2).curveTo(-1.8,-7.2,-2.9,-6).closePath();
	this.shape.setTransform(-43.575,35.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDD25C").beginStroke().moveTo(-3.2,6.6).curveTo(-4.9,5.7,-5.8,4).curveTo(-6.8,2.3,-6.8,0).curveTo(-6.8,-2.2,-5.9,-3.9).curveTo(-5.1,-5.6,-3.5,-6.5).curveTo(-2,-7.5,0,-7.5).curveTo(2,-7.5,3.5,-6.6).curveTo(5.1,-5.7,5.9,-4).curveTo(6.8,-2.4,6.8,-0.3).lineTo(6.7,1).lineTo(-3.7,1).curveTo(-3.4,2.8,-2.2,3.7).curveTo(-1,4.6,0.9,4.6).curveTo(2.1,4.6,3.3,4.3).curveTo(4.5,3.9,5.4,3.3).lineTo(6.3,5.9).curveTo(5.3,6.6,3.8,7.1).curveTo(2.4,7.5,0.8,7.5).curveTo(-1.4,7.5,-3.2,6.6).closePath().moveTo(3.7,-1.4).curveTo(3.5,-3,2.6,-3.8).curveTo(1.6,-4.8,0.1,-4.7).curveTo(-1.4,-4.7,-2.4,-3.9).curveTo(-3.4,-3,-3.6,-1.4).lineTo(3.7,-1.4).lineTo(3.7,-1.4).closePath();
	this.shape_1.setTransform(-59.625,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDD25C").beginStroke().moveTo(3.3,7.2).lineTo(0,-3.1).lineTo(-3.4,7.2).lineTo(-7,7.2).lineTo(-11.2,-7.2).lineTo(-8.1,-7.2).lineTo(-5.1,3.4).lineTo(-1.6,-7.2).lineTo(1.6,-7.2).lineTo(5.1,3.4).lineTo(8,-7.2).lineTo(11.2,-7.2).lineTo(6.9,7.2).closePath();
	this.shape_2.setTransform(-78.95,32.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDD25C").beginStroke().moveTo(-7.1,9.9).lineTo(-7.1,-9.6).lineTo(-4.2,-9.6).lineTo(-4.2,-7.5).curveTo(-2.4,-10,0.6,-10).curveTo(2.5,-10,4,-9).curveTo(5.5,-8,6.3,-6.4).curveTo(7.1,-4.6,7.1,-2.4).curveTo(7.1,-0.3,6.3,1.4).curveTo(5.5,3.1,4,4.1).curveTo(2.5,5,0.6,5).curveTo(-2.2,5,-4,2.8).lineTo(-4,9.9).closePath().moveTo(-2.9,-5.8).curveTo(-4,-4.6,-4,-2.4).curveTo(-4,-0.4,-2.9,0.8).curveTo(-1.9,2.1,-0.1,2.1).curveTo(1.7,2.1,2.9,0.8).curveTo(4,-0.5,4,-2.4).curveTo(4,-4.5,2.9,-5.8).curveTo(1.7,-7,-0.1,-7).curveTo(-1.9,-7,-2.9,-5.8).closePath();
	this.shape_3.setTransform(-105.275,35.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FDD25C").beginStroke().moveTo(-3.8,6.5).curveTo(-5.4,5.6,-6.3,3.9).curveTo(-7.2,2.1,-7.2,0).curveTo(-7.2,-2.2,-6.3,-3.9).curveTo(-5.4,-5.6,-3.8,-6.5).curveTo(-2.1,-7.5,0,-7.5).curveTo(2.1,-7.5,3.8,-6.5).curveTo(5.4,-5.6,6.3,-3.9).curveTo(7.2,-2.2,7.2,0).curveTo(7.2,2.1,6.3,3.9).curveTo(5.4,5.6,3.8,6.5).curveTo(2.1,7.5,0,7.5).curveTo(-2.1,7.5,-3.8,6.5).closePath().moveTo(-3,-3.3).curveTo(-4.1,-2.1,-4.1,0).curveTo(-4.1,2,-3,3.3).curveTo(-1.9,4.5,0,4.5).curveTo(1.8,4.5,3,3.3).curveTo(4.1,2,4.1,0).curveTo(4.1,-2.1,3,-3.3).curveTo(1.8,-4.6,0,-4.6).curveTo(-1.8,-4.6,-3,-3.3).closePath();
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
	this.shape.graphics.beginFill("#FDD25C").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.7,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.1,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.1,-4.8,-2,-4).closePath();
	this.shape.setTransform(42,-3.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDD25C").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_1.setTransform(31.1,-4.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDD25C").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.5).lineTo(1,-2.5).lineTo(1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.1,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.7).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.7).curveTo(1.4,-6.3,1.4,-5.7).curveTo(1.4,-5.1,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_2.setTransform(23.1,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_3.setTransform(17.675,-4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_4.setTransform(8.275,-4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDD25C").beginStroke().moveTo(1.8,7).lineTo(-1.3,3.2).lineTo(-2.4,4.3).lineTo(-2.4,7).lineTo(-4.5,7).lineTo(-4.5,-7).lineTo(-2.4,-7).lineTo(-2.4,1.6).lineTo(1.6,-2.5).lineTo(4.3,-2.5).lineTo(0.1,1.8).lineTo(4.5,7).closePath();
	this.shape_5.setTransform(-1.525,-7.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_6.setTransform(-12.575,-4.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDD25C").beginStroke().moveTo(-3.9,4.8).lineTo(-3.9,3.2).lineTo(0.9,-2.8).lineTo(-3.7,-2.8).lineTo(-3.7,-4.8).lineTo(3.7,-4.8).lineTo(3.7,-3.2).lineTo(-1.1,2.9).lineTo(3.9,2.9).lineTo(3.9,4.8).closePath();
	this.shape_7.setTransform(-22.45,-4.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_8.setTransform(-30.125,-4.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_9.setTransform(-39.525,-4.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FDD25C").beginStroke().moveTo(-1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(-0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1.1,4.8).closePath();
	this.shape_10.setTransform(-49.75,-4.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FDD25C").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.2,-7.1).lineTo(0.2,4.1).curveTo(0.2,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(2,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_11.setTransform(-56.95,-7.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-65.475,-4.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-76.75,-7.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_14.setTransform(-87.425,-4.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-98.125,-4.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FDD25C").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.7,6.9).lineTo(-4.7,-7.1).lineTo(-2.6,-7.1).lineTo(-2.6,-1.4).curveTo(-1.5,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.7,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.7,0.7,4.7,2.1).curveTo(4.7,3.6,4.2,4.7).curveTo(3.7,5.9,2.7,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-1.9,-0.1).curveTo(-2.7,0.7,-2.6,2.1).curveTo(-2.7,3.5,-1.9,4.4).curveTo(-1.3,5.2,-0,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0,-0.9).curveTo(-1.3,-0.9,-1.9,-0.1).closePath();
	this.shape_16.setTransform(-109.05,-7.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FDD25C").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_17.setTransform(-120.6,-4.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FDD25C").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.5).lineTo(1.1,-2.5).lineTo(1.1,7).closePath().moveTo(-0.9,-4.8).curveTo(-1.4,-5.1,-1.4,-5.7).curveTo(-1.4,-6.3,-0.9,-6.7).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.7).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.1,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-0.9,-4.8).closePath();
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape.setTransform(93.275,-25.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,6.5).curveTo(-3.6,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.6,-1.6,-2.6,-2.2).curveTo(-1.7,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.8,-7.1).lineTo(4.8,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.7,7.1,-2.6,6.5).closePath().moveTo(-2,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-2,4.3).curveTo(-1.1,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.1,-0.9,-2,-0).closePath();
	this.shape_1.setTransform(82,-27.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_2.setTransform(71.1,-25.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_3.setTransform(60.225,-25.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_4.setTransform(50.75,-25.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_5.setTransform(42.4,-25.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.7,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.6,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.6,4.3).closePath().moveTo(-1.9,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-1.9,2.2).curveTo(-1.2,3,0.1,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.4,2.7,-0).curveTo(2.7,-1.4,2,-2.2).curveTo(1.2,-3,0.1,-3).curveTo(-1.2,-3,-1.9,-2.2).closePath();
	this.shape_6.setTransform(32.25,-25.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.6).lineTo(-4.8,-6.4).lineTo(-2.8,-6.4).lineTo(-2.8,-5).curveTo(-1.6,-6.6,0.4,-6.6).curveTo(1.7,-6.6,2.6,-6).curveTo(3.7,-5.4,4.2,-4.2).curveTo(4.8,-3.1,4.8,-1.7).curveTo(4.8,-0.2,4.2,0.9).curveTo(3.7,2.1,2.6,2.7).curveTo(1.7,3.3,0.4,3.3).curveTo(-1.4,3.3,-2.7,1.9).lineTo(-2.7,6.6).closePath().moveTo(-2,-3.9).curveTo(-2.6,-3.1,-2.7,-1.7).curveTo(-2.6,-0.3,-2,0.6).curveTo(-1.2,1.4,-0.1,1.4).curveTo(1.2,1.4,1.9,0.5).curveTo(2.7,-0.3,2.7,-1.7).curveTo(2.7,-3,1.9,-3.8).curveTo(1.2,-4.7,-0.1,-4.7).curveTo(-1.2,-4.7,-2,-3.9).closePath();
	this.shape_7.setTransform(21.4,-23.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(7.475,-26.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-0.05,-25.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_10.setTransform(-9.375,-25.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.8,6.9).lineTo(-4.8,-7.1).lineTo(-2.7,-7.1).lineTo(-2.7,-1.4).curveTo(-1.4,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.6,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.8,0.7,4.8,2.1).curveTo(4.8,3.6,4.2,4.7).curveTo(3.7,5.9,2.6,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-2,-0.1).curveTo(-2.6,0.7,-2.7,2.1).curveTo(-2.6,3.5,-2,4.4).curveTo(-1.2,5.2,-0.1,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0.1,-0.9).curveTo(-1.2,-0.9,-2,-0.1).closePath();
	this.shape_11.setTransform(-20,-27.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-35.775,-25.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-47.05,-27.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.3,1.6,2.2,0.4).lineTo(2.2,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.4,3.8).closePath();
	this.shape_14.setTransform(-62.6,-25.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-73.525,-25.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,8.6).lineTo(-2.1,6.8).lineTo(-1.6,6.8).curveTo(-0.8,6.9,-0.5,6.4).curveTo(-0.1,5.9,-0.1,4.9).lineTo(-0.1,-4.3).lineTo(2,-4.3).lineTo(2,5.1).curveTo(2,6.8,1.2,7.8).curveTo(0.3,8.8,-1.3,8.8).curveTo(-1.9,8.8,-2.3,8.6).closePath().moveTo(0,-6.6).curveTo(-0.4,-6.9,-0.4,-7.5).curveTo(-0.4,-8.1,0,-8.5).curveTo(0.4,-8.8,1,-8.8).curveTo(1.6,-8.8,1.9,-8.5).curveTo(2.3,-8.1,2.3,-7.5).curveTo(2.3,-6.9,1.9,-6.6).curveTo(1.6,-6.2,1,-6.2).curveTo(0.4,-6.2,0,-6.6).closePath();
	this.shape_16.setTransform(-82.375,-25.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3.1).curveTo(-0.1,-4.8,1.6,-4.9).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.5).curveTo(2,-2.7,1.5,-2.8).curveTo(0.5,-2.7,-0.1,-2.1).curveTo(-0.7,-1.3,-0.7,0.1).lineTo(-0.7,4.9).closePath();
	this.shape_17.setTransform(-91.275,-25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_18.setTransform(-100.925,-25.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_19.setTransform(-111.925,-25.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,6.7).lineTo(-6.7,-6.7).lineTo(-4.2,-6.7).lineTo(0,4.2).lineTo(4.3,-6.7).lineTo(6.7,-6.7).lineTo(1.2,6.7).closePath();
	this.shape_20.setTransform(-124.225,-27.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.7,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.1,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.1,-4.8,-2,-4).closePath();
	this.shape.setTransform(42,17.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_1.setTransform(31.1,15.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1,-2.6).lineTo(1,7).closePath().moveTo(-1,-4.8).curveTo(-1.3,-5.1,-1.3,-5.7).curveTo(-1.3,-6.3,-1,-6.6).curveTo(-0.6,-7,0,-7).curveTo(0.6,-7,0.9,-6.6).curveTo(1.4,-6.3,1.4,-5.7).curveTo(1.4,-5.1,0.9,-4.8).curveTo(0.6,-4.4,0,-4.4).curveTo(-0.6,-4.4,-1,-4.8).closePath();
	this.shape_2.setTransform(23.1,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,4.8).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3).curveTo(-0.1,-4.9,1.6,-4.8).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.6).curveTo(2,-2.7,1.5,-2.7).curveTo(0.5,-2.8,-0.1,-2).curveTo(-0.7,-1.4,-0.7,0).lineTo(-0.7,4.8).closePath();
	this.shape_3.setTransform(17.675,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_4.setTransform(8.275,15.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8,7).lineTo(-1.3,3.2).lineTo(-2.4,4.3).lineTo(-2.4,7).lineTo(-4.5,7).lineTo(-4.5,-7).lineTo(-2.4,-7).lineTo(-2.4,1.6).lineTo(1.6,-2.5).lineTo(4.3,-2.5).lineTo(0.1,1.8).lineTo(4.5,7).closePath();
	this.shape_5.setTransform(-1.525,13.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_6.setTransform(-12.575,15.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.9,4.8).lineTo(-3.9,3.2).lineTo(0.9,-2.8).lineTo(-3.7,-2.8).lineTo(-3.7,-4.8).lineTo(3.7,-4.8).lineTo(3.7,-3.2).lineTo(-1.1,2.9).lineTo(3.9,2.9).lineTo(3.9,4.8).closePath();
	this.shape_7.setTransform(-22.45,15.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,4.8).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3).curveTo(-0.1,-4.9,1.6,-4.8).curveTo(2.3,-4.8,2.8,-4.6).lineTo(2.5,-2.6).curveTo(2,-2.7,1.5,-2.7).curveTo(0.5,-2.8,-0.1,-2).curveTo(-0.7,-1.4,-0.7,0).lineTo(-0.7,4.8).closePath();
	this.shape_8.setTransform(-30.125,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_9.setTransform(-39.525,15.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(-0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1.1,4.8).closePath();
	this.shape_10.setTransform(-49.75,15.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,6.5).curveTo(-1.9,5.8,-1.9,4.5).lineTo(-1.9,-7.1).lineTo(0.2,-7.1).lineTo(0.2,4.1).curveTo(0.2,4.6,0.3,4.9).curveTo(0.6,5.2,1.1,5.2).curveTo(1.5,5.2,1.8,5).lineTo(2,6.9).curveTo(1.4,7.1,0.5,7.1).curveTo(-0.8,7.1,-1.4,6.5).closePath();
	this.shape_11.setTransform(-56.95,13.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-65.475,15.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-76.75,13.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_14.setTransform(-87.425,15.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-98.125,15.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.7,6.9).lineTo(-4.7,-7.1).lineTo(-2.6,-7.1).lineTo(-2.6,-1.4).curveTo(-1.5,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.7,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.7,0.7,4.7,2.1).curveTo(4.7,3.6,4.2,4.7).curveTo(3.7,5.9,2.7,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-1.9,-0.1).curveTo(-2.7,0.7,-2.6,2.1).curveTo(-2.7,3.5,-1.9,4.4).curveTo(-1.3,5.2,-0,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0,-0.9).curveTo(-1.3,-0.9,-1.9,-0.1).closePath();
	this.shape_16.setTransform(-109.05,13.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_17.setTransform(-120.6,15.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,7).lineTo(-1.1,-2.6).lineTo(1.1,-2.6).lineTo(1.1,7).closePath().moveTo(-0.9,-4.8).curveTo(-1.4,-5.1,-1.4,-5.7).curveTo(-1.4,-6.3,-0.9,-6.6).curveTo(-0.6,-7,-0,-7).curveTo(0.6,-7,1,-6.6).curveTo(1.3,-6.3,1.3,-5.7).curveTo(1.3,-5.1,1,-4.8).curveTo(0.6,-4.4,-0,-4.4).curveTo(-0.6,-4.4,-0.9,-4.8).closePath();
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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape.setTransform(93.275,-11.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.6,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.6,-1.6,-2.6,-2.2).curveTo(-1.7,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.8,-7.1).lineTo(4.8,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.7,7.1,-2.6,6.5).closePath().moveTo(-2,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-2,4.3).curveTo(-1.1,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.1,-0.9,-2,-0).closePath();
	this.shape_1.setTransform(82,-14.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.2,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_2.setTransform(71.1,-12.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_3.setTransform(60.225,-11.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.8,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_4.setTransform(50.75,-11.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.4,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_5.setTransform(42.4,-11.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.7,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.6,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.6,4.3).closePath().moveTo(-1.9,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-1.9,2.2).curveTo(-1.2,3,0.1,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.4,2.7,-0).curveTo(2.7,-1.4,2,-2.2).curveTo(1.2,-3,0.1,-3).curveTo(-1.2,-3,-1.9,-2.2).closePath();
	this.shape_6.setTransform(32.25,-11.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-4.8,6.6).lineTo(-4.8,-6.4).lineTo(-2.8,-6.4).lineTo(-2.8,-5).curveTo(-1.6,-6.6,0.4,-6.6).curveTo(1.7,-6.6,2.6,-6).curveTo(3.7,-5.4,4.2,-4.2).curveTo(4.8,-3.1,4.8,-1.7).curveTo(4.8,-0.2,4.2,0.9).curveTo(3.7,2.1,2.6,2.7).curveTo(1.7,3.3,0.4,3.3).curveTo(-1.4,3.3,-2.7,1.9).lineTo(-2.7,6.6).closePath().moveTo(-2,-3.9).curveTo(-2.6,-3.1,-2.7,-1.7).curveTo(-2.6,-0.3,-2,0.6).curveTo(-1.2,1.4,-0.1,1.4).curveTo(1.2,1.4,1.9,0.5).curveTo(2.7,-0.3,2.7,-1.7).curveTo(2.7,-3,1.9,-3.8).curveTo(1.2,-4.7,-0.1,-4.7).curveTo(-1.2,-4.7,-2,-3.9).closePath();
	this.shape_7.setTransform(21.4,-10.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(7.475,-13.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-0.05,-11.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_10.setTransform(-9.375,-11.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,5.5).lineTo(-2.8,6.9).lineTo(-4.8,6.9).lineTo(-4.8,-7.1).lineTo(-2.7,-7.1).lineTo(-2.7,-1.4).curveTo(-1.4,-2.8,0.4,-2.8).curveTo(1.7,-2.8,2.6,-2.2).curveTo(3.7,-1.6,4.2,-0.4).curveTo(4.8,0.7,4.8,2.1).curveTo(4.8,3.6,4.2,4.7).curveTo(3.7,5.9,2.6,6.5).curveTo(1.7,7.1,0.4,7.1).curveTo(-1.6,7.1,-2.8,5.5).closePath().moveTo(-2,-0.1).curveTo(-2.6,0.7,-2.7,2.1).curveTo(-2.6,3.5,-2,4.4).curveTo(-1.2,5.2,-0.1,5.2).curveTo(1.2,5.2,1.9,4.3).curveTo(2.7,3.5,2.7,2.1).curveTo(2.7,0.8,1.9,-0).curveTo(1.2,-0.9,-0.1,-0.9).curveTo(-1.2,-0.9,-2,-0.1).closePath();
	this.shape_11.setTransform(-20,-14.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_12.setTransform(-35.775,-11.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,6.5).curveTo(-3.7,5.9,-4.2,4.7).curveTo(-4.8,3.6,-4.8,2.1).curveTo(-4.8,0.7,-4.2,-0.4).curveTo(-3.7,-1.6,-2.6,-2.2).curveTo(-1.6,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.7,-1.4).lineTo(2.7,-7.1).lineTo(4.7,-7.1).lineTo(4.7,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.6,7.1,-2.6,6.5).closePath().moveTo(-1.9,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-1.9,4.3).curveTo(-1.2,5.2,0.1,5.2).curveTo(1.2,5.2,2,4.4).curveTo(2.6,3.5,2.7,2.1).curveTo(2.6,0.7,2,-0.1).curveTo(1.2,-0.9,0.1,-0.9).curveTo(-1.2,-0.9,-1.9,-0).closePath();
	this.shape_13.setTransform(-47.05,-14.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#003781").beginStroke().moveTo(-3.4,3.8).curveTo(-4.3,2.7,-4.3,0.7).lineTo(-4.3,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,0.3).curveTo(-2.2,1.6,-1.7,2.3).curveTo(-1.1,2.9,-0,2.9).curveTo(1,2.9,1.6,2.2).curveTo(2.3,1.6,2.2,0.4).lineTo(2.2,-4.9).lineTo(4.3,-4.9).lineTo(4.3,4.7).lineTo(2.4,4.7).lineTo(2.4,3.2).curveTo(1.9,4.1,1.1,4.5).curveTo(0.3,4.9,-0.7,4.9).curveTo(-2.4,4.9,-3.4,3.8).closePath();
	this.shape_14.setTransform(-62.6,-11.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_15.setTransform(-73.525,-11.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#003781").beginStroke().moveTo(-2.3,8.7).lineTo(-2.1,6.8).lineTo(-1.6,6.9).curveTo(-0.8,6.8,-0.5,6.4).curveTo(-0.1,6,-0.1,4.9).lineTo(-0.1,-4.4).lineTo(2,-4.4).lineTo(2,5.1).curveTo(2,6.9,1.2,7.8).curveTo(0.3,8.8,-1.3,8.8).curveTo(-1.9,8.8,-2.3,8.7).closePath().moveTo(0,-6.6).curveTo(-0.4,-6.9,-0.4,-7.5).curveTo(-0.4,-8.1,0,-8.4).curveTo(0.4,-8.8,1,-8.8).curveTo(1.6,-8.8,1.9,-8.4).curveTo(2.3,-8.1,2.3,-7.5).curveTo(2.3,-6.9,1.9,-6.6).curveTo(1.6,-6.2,1,-6.2).curveTo(0.4,-6.2,0,-6.6).closePath();
	this.shape_16.setTransform(-82.375,-12.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#003781").beginStroke().moveTo(-2.8,4.9).lineTo(-2.8,-4.7).lineTo(-0.9,-4.7).lineTo(-0.9,-3).curveTo(-0.1,-4.9,1.6,-4.8).curveTo(2.3,-4.9,2.8,-4.6).lineTo(2.5,-2.6).curveTo(2,-2.8,1.5,-2.8).curveTo(0.5,-2.8,-0.1,-2).curveTo(-0.7,-1.4,-0.7,0).lineTo(-0.7,4.9).closePath();
	this.shape_17.setTransform(-91.275,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_18.setTransform(-100.925,-11.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
	this.shape_19.setTransform(-111.925,-11.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#003781").beginStroke().moveTo(-1.2,6.7).lineTo(-6.7,-6.7).lineTo(-4.2,-6.7).lineTo(0,4.2).lineTo(4.3,-6.7).lineTo(6.7,-6.7).lineTo(1.2,6.7).closePath();
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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(-1.9,6.5).curveTo(-2.3,6.1,-2.3,5.5).curveTo(-2.3,4.9,-1.9,4.5).curveTo(-1.5,4.1,-0.9,4.1).curveTo(-0.3,4.1,0.1,4.5).curveTo(0.5,4.9,0.5,5.5).curveTo(0.5,6.1,0.1,6.5).curveTo(-0.3,6.9,-0.9,6.9).curveTo(-1.5,6.9,-1.9,6.5).closePath().moveTo(-1.9,2.6).lineTo(-1.9,2.4).curveTo(-1.9,1.6,-1.6,1).curveTo(-1.3,0.4,-0.9,0).lineTo(0.2,-0.9).curveTo(1.1,-1.5,1.4,-1.9).curveTo(1.8,-2.3,1.8,-3).curveTo(1.8,-3.8,1.2,-4.3).curveTo(0.5,-4.8,-0.6,-4.8).curveTo(-1.4,-4.8,-2.2,-4.5).curveTo(-2.9,-4.2,-3.4,-3.8).lineTo(-4.1,-5.7).curveTo(-3.4,-6.3,-2.4,-6.6).curveTo(-1.5,-6.9,-0.4,-6.9).curveTo(0.9,-6.9,1.9,-6.4).curveTo(2.9,-5.9,3.5,-5.1).curveTo(4.1,-4.2,4.1,-3.1).curveTo(4.1,-2.2,3.7,-1.6).curveTo(3.4,-0.9,3,-0.5).lineTo(1.8,0.4).lineTo(0.6,1.3).curveTo(0.2,1.8,0.2,2.4).lineTo(0.2,2.6).closePath();
	this.shape.setTransform(43.825,7.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.3,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_1.setTransform(33.95,9.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_2.setTransform(23.075,9.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_3.setTransform(14.475,8.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1.1,2.8).curveTo(1.5,2.5,1.5,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-3,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.2,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.5,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.8,-1.4).curveTo(-0.4,-1.2,0.5,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.3,5,-3.6,4.3).closePath();
	this.shape_4.setTransform(6.95,9.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.7,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.7,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.7,4.3).closePath().moveTo(-1.9,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-1.9,2.2).curveTo(-1.2,3,0,3).curveTo(1.3,3,1.9,2.2).curveTo(2.7,1.4,2.7,-0).curveTo(2.7,-1.4,1.9,-2.2).curveTo(1.3,-3,0,-3).curveTo(-1.2,-3,-1.9,-2.2).closePath();
	this.shape_5.setTransform(-3.2,9.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.7,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.1,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.1,-4.8,-2,-4).closePath();
	this.shape_6.setTransform(-14.7,11.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_7.setTransform(-29.825,9.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(-38.425,8.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.8,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.5,2.5,1.6,2).curveTo(1.6,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.8,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-0.9,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.6,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-45.95,9.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0.1,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_10.setTransform(-55.5,9.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_11.setTransform(-66.375,9.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.8).lineTo(-0,-2.1).lineTo(-2.3,4.8).lineTo(-4.6,4.8).lineTo(-7.4,-4.8).lineTo(-5.4,-4.8).lineTo(-3.4,2.3).lineTo(-1.1,-4.8).lineTo(1.1,-4.8).lineTo(3.4,2.3).lineTo(5.4,-4.8).lineTo(7.4,-4.8).lineTo(4.6,4.8).closePath();
	this.shape_12.setTransform(-79.25,9.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_13.setTransform(-92.175,9.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#003781").beginStroke().moveTo(-4.3,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.3,4.8,-0.6,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.6,2.8,-2.7,2.2).curveTo(-3.7,1.6,-4.2,0.5).curveTo(-4.8,-0.6,-4.7,-2).curveTo(-4.8,-3.4,-4.2,-4.4).curveTo(-3.7,-5.5,-2.7,-6.1).curveTo(-1.6,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.7,-6.5).lineTo(4.7,2).curveTo(4.7,4.2,3.4,5.5).curveTo(2,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.3,5.8).closePath().moveTo(-1.9,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-1.9,0.1).curveTo(-1.2,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.2,-4.8,-1.9,-4).closePath();
	this.shape_14.setTransform(-103.45,11.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#003781").beginStroke().moveTo(2.2,4.9).lineTo(2.2,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.2,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.4,-4.7).lineTo(-2.4,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.3,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape_15.setTransform(-114.35,9.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#003781").beginStroke().moveTo(-2.5,4.4).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.8,1.5,-4.8,-0).curveTo(-4.8,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.5,-4.4).curveTo(-1.4,-5,-0,-5).curveTo(1.4,-5,2.5,-4.4).curveTo(3.6,-3.7,4.2,-2.6).curveTo(4.8,-1.5,4.8,-0).curveTo(4.8,1.5,4.2,2.6).curveTo(3.6,3.7,2.5,4.4).curveTo(1.4,5,-0,5).curveTo(-1.4,5,-2.5,4.4).closePath().moveTo(-2,-2.2).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.3,-2,2.2).curveTo(-1.2,3,-0,3).curveTo(1.2,3,2,2.2).curveTo(2.7,1.3,2.7,-0).curveTo(2.7,-1.3,2,-2.2).curveTo(1.2,-3,-0,-3).curveTo(-1.2,-3,-2,-2.2).closePath();
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
	this.shape.graphics.beginFill("#003781").beginStroke().moveTo(2.3,4.9).lineTo(2.3,-0.3).curveTo(2.3,-1.6,1.7,-2.3).curveTo(1.1,-2.9,0,-2.9).curveTo(-1,-2.9,-1.6,-2.3).curveTo(-2.2,-1.6,-2.2,-0.4).lineTo(-2.2,4.9).lineTo(-4.3,4.9).lineTo(-4.3,-4.7).lineTo(-2.3,-4.7).lineTo(-2.3,-3.2).curveTo(-1.9,-4,-1.1,-4.5).curveTo(-0.3,-4.9,0.7,-4.9).curveTo(2.4,-4.9,3.4,-3.8).curveTo(4.3,-2.7,4.3,-0.7).lineTo(4.3,4.9).closePath();
	this.shape.setTransform(-2.55,-19.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.7,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.7,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.7,-3.7,-2.7,-4.4).curveTo(-1.7,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.7,-4.8).lineTo(4.7,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.7,5,-2.7,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.1,3,0,3).curveTo(1.3,3,1.9,2.2).curveTo(2.7,1.4,2.6,-0).curveTo(2.7,-1.4,1.9,-2.2).curveTo(1.3,-3,0,-3).curveTo(-1.1,-3,-2,-2.2).closePath();
	this.shape_1.setTransform(-14.25,-19.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#003781").beginStroke().moveTo(-1,4.8).lineTo(-4.9,-4.8).lineTo(-2.7,-4.8).lineTo(0,2.4).lineTo(2.7,-4.8).lineTo(4.9,-4.8).lineTo(1,4.8).closePath();
	this.shape_2.setTransform(-24.7,-19.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,6.5).curveTo(-3.6,5.9,-4.2,4.7).curveTo(-4.7,3.6,-4.8,2.1).curveTo(-4.7,0.7,-4.2,-0.4).curveTo(-3.6,-1.6,-2.7,-2.2).curveTo(-1.7,-2.8,-0.4,-2.8).curveTo(1.5,-2.8,2.6,-1.4).lineTo(2.6,-7.1).lineTo(4.8,-7.1).lineTo(4.8,6.9).lineTo(2.8,6.9).lineTo(2.8,5.5).curveTo(1.6,7.1,-0.4,7.1).curveTo(-1.7,7.1,-2.7,6.5).closePath().moveTo(-2,-0).curveTo(-2.7,0.8,-2.7,2.1).curveTo(-2.7,3.5,-2,4.3).curveTo(-1.2,5.2,0,5.2).curveTo(1.3,5.2,1.9,4.4).curveTo(2.7,3.5,2.6,2.1).curveTo(2.7,0.7,1.9,-0.1).curveTo(1.3,-0.9,0,-0.9).curveTo(-1.2,-0.9,-2,-0).closePath();
	this.shape_3.setTransform(-40.25,-21.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#003781").beginStroke().moveTo(-2.6,4.3).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.8,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.6,-4.4).curveTo(-1.7,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.8,-4.8).lineTo(4.8,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.7,5,-2.6,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.1,3,0.1,3).curveTo(1.2,3,2,2.2).curveTo(2.6,1.4,2.6,-0).curveTo(2.6,-1.4,2,-2.2).curveTo(1.2,-3,0.1,-3).curveTo(-1.1,-3,-2,-2.2).closePath();
	this.shape_4.setTransform(-51.75,-19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#003781").beginStroke().moveTo(2.3,7).lineTo(2.3,1.8).curveTo(2.2,0.5,1.7,-0.1).curveTo(1.1,-0.8,0,-0.8).curveTo(-1,-0.8,-1.6,-0.1).curveTo(-2.2,0.6,-2.2,1.8).lineTo(-2.2,7).lineTo(-4.3,7).lineTo(-4.3,-7).lineTo(-2.2,-7).lineTo(-2.2,-1.3).curveTo(-1.7,-2,-1,-2.4).curveTo(-0.3,-2.7,0.7,-2.7).curveTo(2.3,-2.7,3.3,-1.6).curveTo(4.3,-0.5,4.3,1.4).lineTo(4.3,7).closePath();
	this.shape_5.setTransform(-62.65,-21.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#003781").beginStroke().moveTo(-2.1,4.4).curveTo(-3.3,3.8,-3.9,2.7).curveTo(-4.5,1.5,-4.5,-0).curveTo(-4.5,-1.5,-4,-2.6).curveTo(-3.4,-3.7,-2.4,-4.4).curveTo(-1.3,-5,-0,-5).curveTo(1.3,-5,2.3,-4.4).curveTo(3.4,-3.8,3.9,-2.7).curveTo(4.5,-1.6,4.5,-0.2).lineTo(4.5,0.7).lineTo(-2.4,0.7).curveTo(-2.2,1.9,-1.4,2.5).curveTo(-0.6,3.1,0.6,3.1).curveTo(1.4,3.1,2.2,2.8).curveTo(3,2.6,3.6,2.2).lineTo(4.2,4).curveTo(3.5,4.5,2.5,4.7).curveTo(1.6,5,0.5,5).curveTo(-1,5,-2.1,4.4).closePath().moveTo(2.5,-0.9).curveTo(2.3,-2,1.7,-2.6).curveTo(1.1,-3.2,0,-3.2).curveTo(-0.9,-3.2,-1.6,-2.6).curveTo(-2.2,-2,-2.4,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-0.9).closePath();
	this.shape_6.setTransform(-73.525,-19.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#003781").beginStroke().moveTo(-4.2,5.8).lineTo(-3.7,3.9).curveTo(-3,4.3,-2.2,4.6).curveTo(-1.4,4.8,-0.5,4.8).curveTo(1.1,4.8,1.8,4).curveTo(2.7,3.3,2.6,1.8).lineTo(2.6,1.3).curveTo(1.5,2.8,-0.4,2.8).curveTo(-1.7,2.8,-2.7,2.2).curveTo(-3.6,1.6,-4.2,0.5).curveTo(-4.7,-0.6,-4.8,-2).curveTo(-4.7,-3.4,-4.2,-4.4).curveTo(-3.6,-5.5,-2.7,-6.1).curveTo(-1.7,-6.7,-0.4,-6.7).curveTo(1.6,-6.7,2.8,-5.1).lineTo(2.8,-6.5).lineTo(4.8,-6.5).lineTo(4.8,2).curveTo(4.8,4.2,3.4,5.5).curveTo(2.1,6.7,-0.4,6.7).curveTo(-2.5,6.7,-4.2,5.8).closePath().moveTo(-2,-4).curveTo(-2.7,-3.2,-2.7,-2).curveTo(-2.7,-0.7,-2,0.1).curveTo(-1.2,0.9,0,0.9).curveTo(1.3,0.9,1.9,0.1).curveTo(2.7,-0.6,2.6,-2).curveTo(2.7,-3.3,1.9,-4).curveTo(1.3,-4.8,0,-4.8).curveTo(-1.2,-4.8,-2,-4).closePath();
	this.shape_7.setTransform(-84.8,-17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#003781").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.6,-1.7,3.2).lineTo(-1.7,-1.5).lineTo(-3,-1.5).lineTo(-3,-3.5).lineTo(-1.7,-3.5).lineTo(-1.7,-5.8).lineTo(0.3,-6.2).lineTo(0.3,-3.5).lineTo(2.9,-3.5).lineTo(2.9,-1.5).lineTo(0.3,-1.5).lineTo(0.3,2.9).curveTo(0.3,4.3,1.6,4.3).curveTo(2.2,4.3,2.7,4.1).lineTo(3,5.9).curveTo(2.2,6.2,1.2,6.2).curveTo(-0.2,6.2,-1,5.4).closePath();
	this.shape_8.setTransform(-98.075,-20.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#003781").beginStroke().moveTo(-3.6,4.3).lineTo(-3.1,2.4).curveTo(-1.9,3.1,-0.4,3.1).curveTo(0.5,3.1,1,2.8).curveTo(1.6,2.5,1.6,2).curveTo(1.5,1.6,1.1,1.4).curveTo(0.7,1.1,-0.2,0.9).lineTo(-1.9,0.3).curveTo(-2.5,0.1,-2.9,-0.5).curveTo(-3.4,-1.1,-3.4,-2.1).curveTo(-3.4,-3.5,-2.5,-4.2).curveTo(-1.5,-5,0.2,-5).lineTo(1.8,-4.8).lineTo(3.3,-4.3).lineTo(2.7,-2.5).curveTo(1.6,-3.1,0.2,-3.1).curveTo(-0.6,-3.1,-1,-2.9).curveTo(-1.3,-2.6,-1.3,-2.2).curveTo(-1.3,-1.7,-0.9,-1.4).curveTo(-0.4,-1.2,0.6,-0.9).lineTo(2.1,-0.4).curveTo(2.7,-0.1,3.2,0.5).curveTo(3.6,1,3.6,2).curveTo(3.6,3.4,2.5,4.2).curveTo(1.5,5,-0.4,5).curveTo(-2.2,5,-3.6,4.3).closePath();
	this.shape_9.setTransform(-105.6,-19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#003781").beginStroke().moveTo(-2.7,4.3).curveTo(-3.6,3.7,-4.2,2.6).curveTo(-4.7,1.5,-4.8,-0).curveTo(-4.7,-1.5,-4.2,-2.6).curveTo(-3.6,-3.7,-2.7,-4.4).curveTo(-1.6,-5,-0.4,-5).curveTo(1.6,-5,2.8,-3.3).lineTo(2.8,-4.8).lineTo(4.8,-4.8).lineTo(4.8,4.8).lineTo(2.8,4.8).lineTo(2.8,3.3).curveTo(1.6,5,-0.4,5).curveTo(-1.6,5,-2.7,4.3).closePath().moveTo(-2,-2.2).curveTo(-2.7,-1.3,-2.7,-0).curveTo(-2.7,1.4,-2,2.2).curveTo(-1.1,3,0,3).curveTo(1.2,3,2,2.2).curveTo(2.6,1.4,2.6,-0).curveTo(2.6,-1.4,2,-2.2).curveTo(1.2,-3,0,-3).curveTo(-1.1,-3,-2,-2.2).closePath();
	this.shape_10.setTransform(-115.75,-19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#003781").beginStroke().moveTo(-4,6.7).lineTo(-4,-6.7).lineTo(-1.7,-6.7).lineTo(-1.7,4.6).lineTo(4,4.6).lineTo(4,6.7).closePath();
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-50,16).lineTo(-50,-16).lineTo(50,-16).lineTo(50,16).closePath();
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

	// mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.moveTo(-107,15).lineTo(-107,-15).lineTo(107,-15).lineTo(107,15).closePath();
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

}).prototype = getMCSymbolPrototype(lib.copyDo, new cjs.Rectangle(-133,-20,266,69), null);


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
	mask_1.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
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
	mask.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
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
	mask_1.graphics.moveTo(-133,18).lineTo(-133,-18).lineTo(133,-18).lineTo(133,18).closePath();
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
	this.instance.setTransform(-2168.9,463.55,2.9999,2.9999,19.2486,0,0,-114.3,37.4);

	this.instance_1 = new lib.crowbar_front("synched",0);
	this.instance_1.setTransform(-358.8,114.9,2.9999,2.9999,-2.9509,0,0,-114,32.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:3,rotation:18.4717,x:-1734.9855,y:452.1989},0).wait(1).to({scaleY:2.9999,rotation:17.71,x:-1663.3181,y:434.0679},0).wait(1).to({rotation:16.9645,x:-1593.2279,y:416.3207},0).wait(1).to({scaleY:3,rotation:16.235,x:-1524.7108,y:398.958},0).wait(1).to({scaleY:2.9999,rotation:15.5216,x:-1457.763,y:381.9805},0).wait(1).to({rotation:14.824,x:-1392.3439,y:365.3794},0).wait(1).to({rotation:14.1428,x:-1328.5234,y:349.1738},0).wait(1).to({scaleY:3,rotation:13.4774,x:-1266.2242,y:333.3454},0).wait(1).to({rotation:12.828,x:-1205.4795,y:317.9039},0).wait(1).to({scaleY:2.9999,rotation:12.1944,x:-1146.2493,y:302.8401},0).wait(1).to({rotation:11.5773,x:-1088.6035,y:288.173},0).wait(1).to({rotation:10.9759,x:-1032.4655,y:273.8839},0).wait(1).to({rotation:10.3906,x:-977.8687,y:259.9821},0).wait(1).to({rotation:9.8218,x:-924.8466,y:246.477},0).wait(1).to({scaleY:3,rotation:9.2683,x:-873.2864,y:233.3406},0).wait(1).to({scaleY:2.9999,rotation:8.7313,x:-823.2949,y:220.6007},0).wait(1).to({rotation:8.21,x:-774.7961,y:208.2385},0).wait(1).to({rotation:7.7053,x:-727.8603,y:196.2725},0).wait(1).to({rotation:7.2162,x:-682.4119,y:184.6838},0).wait(1).to({scaleY:3,rotation:6.7432,x:-638.4847,y:173.4814},0).wait(1).to({scaleY:2.9999,rotation:6.286,x:-596.0397,y:162.6558},0).wait(1).to({scaleY:3,rotation:5.8453,x:-555.1476,y:152.2252},0).wait(1).to({scaleY:2.9999,rotation:5.4202,x:-515.7331,y:142.1708},0).wait(1).to({scaleY:3,rotation:5.0117,x:-477.8668,y:132.5108},0).wait(1).to({scaleY:2.9999,rotation:4.6189,x:-441.4737,y:123.2262},0).wait(1).to({scaleY:3,rotation:4.2418,x:-406.5518,y:114.3167},0).wait(1).to({rotation:3.8812,x:-373.172,y:105.8006},0).wait(1).to({scaleY:2.9999,rotation:3.5363,x:-341.2596,y:97.6587},0).wait(1).to({scaleY:3,rotation:3.2079,x:-310.8855,y:89.9094},0).wait(1).to({rotation:2.8952,x:-281.9754,y:82.5337},0).wait(1).to({scaleY:2.9999,rotation:2.5986,x:-254.5639,y:75.5406},0).wait(1).to({scaleY:3,rotation:2.3177,x:-228.6133,y:68.9202},0).wait(1).to({rotation:2.0534,x:-204.1947,y:62.691},0).wait(1).to({scaleY:2.9999,rotation:1.8047,x:-181.2341,y:56.8339},0).wait(1).to({scaleY:3,rotation:1.5722,x:-159.7667,y:51.3579},0).wait(1).to({scaleX:3,rotation:1.3557,x:-139.7911,y:46.2627},0).wait(1).to({scaleX:2.9999,scaleY:2.9999,rotation:1.1554,x:-121.3063,y:41.5479},0).wait(1).to({rotation:0.9711,x:-104.3112,y:37.2133},0).wait(1).to({rotation:0.8026,x:-88.7688,y:33.2493},0).wait(1).to({rotation:0.6506,x:-74.7505,y:29.6742},0).wait(1).to({scaleY:3,rotation:0.5143,x:-62.1832,y:26.4693},0).wait(1).to({rotation:0.3941,x:-51.1024,y:23.6436},0).wait(1).to({rotation:0.2896,x:-41.4714,y:21.1876},0).wait(1).to({scaleY:2.9999,rotation:0.2016,x:-33.3619,y:19.1197},0).wait(1).to({rotation:0.1293,x:-26.7011,y:17.4213},0).wait(1).to({rotation:0.0731,x:-21.5249,y:16.1015},0).wait(1).to({rotation:0.0331,x:-17.833,y:15.1601},0).wait(1).to({rotation:0.0091,x:-15.6251,y:14.5971},0).wait(1).to({rotation:0.0009,x:-14.8651,y:14.4033},0).wait(1).to({regX:-113.9,regY:37.7,scaleX:2.9998,rotation:-0.0828,x:-358.15,y:125.8},0).wait(1).to({regX:0,regY:0,scaleX:2.9999,rotation:-0.203,x:-16.834,y:11.482},0).wait(1).to({scaleY:3,rotation:-0.3225,x:-17.0731,y:10.7704},0).wait(1).to({rotation:-0.442,x:-17.3138,y:10.0594},0).wait(1).to({scaleX:3,rotation:-0.5615,x:-17.5559,y:9.3488},0).wait(1).to({scaleX:2.9999,rotation:-0.681,x:-17.7995,y:8.6388},0).wait(1).to({scaleY:2.9999,rotation:-0.8005,x:-18.0446,y:7.9292},0).wait(1).to({rotation:-0.92,x:-18.2911,y:7.2202},0).wait(1).to({rotation:-1.0395,x:-18.5392,y:6.5117},0).wait(1).to({scaleX:3,scaleY:3,rotation:-1.159,x:-18.7887,y:5.8037},0).wait(1).to({rotation:-1.2785,x:-19.0397,y:5.0962},0).wait(1).to({scaleX:2.9999,rotation:-1.398,x:-19.2921,y:4.3892},0).wait(1).to({rotation:-1.5175,x:-19.5461,y:3.6828},0).wait(1).to({scaleY:2.9999,rotation:-1.637,x:-19.8015,y:2.9769},0).wait(1).to({rotation:-1.7565,x:-20.0584,y:2.2716},0).wait(1).to({rotation:-1.876,x:-20.3167,y:1.5668},0).wait(1).to({scaleY:3,rotation:-1.9955,x:-20.5765,y:0.8625},0).wait(1).to({rotation:-2.115,x:-20.8378,y:0.1587},0).wait(1).to({rotation:-2.2345,x:-21.1006,y:-0.5445},0).wait(1).to({scaleX:3,rotation:-2.354,x:-21.3648,y:-1.2471},0).wait(1).to({scaleX:2.9999,rotation:-2.4735,x:-21.6305,y:-1.9492},0).wait(1).to({scaleY:2.9999,rotation:-2.593,x:-21.8977,y:-2.6507},0).wait(1).to({rotation:-2.7125,x:-22.1663,y:-3.3517},0).wait(1).to({rotation:-2.832,x:-22.4364,y:-4.0521},0).to({_off:true},1).wait(86).to({_off:false,regX:-104,regY:40.2,scaleX:2.8913,scaleY:2.8914,rotation:30.7473,x:-310.2,y:160.1},0).wait(1).to({regX:0,regY:0,scaleX:2.8914,scaleY:2.8915,rotation:30.4754,x:11.4839,y:213.0639},0).wait(1).to({scaleX:2.8913,rotation:30.2032,x:15.3064,y:213.4154},0).wait(1).to({rotation:29.9309,x:19.1217,y:215.0163},0).wait(1).to({scaleX:2.8914,rotation:29.6587,x:22.9299,y:217.8665},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:29.3865,x:26.7308,y:221.9502},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:29.1143,x:30.5245,y:227.2834},0).wait(1).to({scaleX:2.8913,rotation:28.8421,x:34.311,y:233.866},0).wait(1).to({scaleY:2.8914,rotation:28.5699,x:38.0903,y:241.6902},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:28.2976,x:41.8623,y:250.756},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:28.0254,x:45.6272,y:261.0634},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:27.7532,x:49.3848,y:272.6204},0).wait(1).to({rotation:27.481,x:53.1352,y:285.4271},0).wait(1).to({scaleX:2.8913,rotation:27.2088,x:56.8784,y:299.4676},0).wait(1).to({scaleX:2.8914,rotation:26.9366,x:60.6143,y:314.7657},0).wait(1).to({scaleX:2.8913,rotation:26.6643,x:64.343,y:331.2977},0).wait(1).to({scaleX:2.8914,rotation:26.3921,x:68.0644,y:349.0794},0).wait(1).to({rotation:26.1199,x:71.7786,y:368.103},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:25.8477,x:75.4855,y:388.3765},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:25.5755,x:79.1852,y:409.8919},0).wait(1).to({scaleX:2.8913,rotation:25.3032,x:82.8777,y:432.6493},0).wait(1).to({scaleY:2.8914,rotation:25.031,x:86.5628,y:456.6567},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:24.7588,x:90.2407,y:481.906},0).wait(1).to({scaleX:2.8913,rotation:24.4866,x:93.9114,y:508.4054},0).wait(1).to({scaleX:2.8914,rotation:24.2144,x:97.5747,y:536.147},0).wait(1).to({rotation:23.9422,x:101.2309,y:565.1306},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:23.6699,x:104.8797,y:595.3564},0).wait(1).to({scaleY:2.8915,rotation:23.3977,x:108.5213,y:626.8404},0).wait(1).to({scaleX:2.8914,rotation:23.1255,x:112.1556,y:580.9927},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:22.8533,x:115.7826,y:541.9708},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:22.5811,x:119.4023,y:509.7586},0).wait(1).to({rotation:22.3089,x:123.0148,y:484.3721},0).wait(1).to({scaleX:2.8913,rotation:22.0366,x:126.62,y:465.7955},0).wait(1).to({scaleX:2.8914,rotation:21.7644,x:130.2179,y:454.0368},0).wait(1).to({rotation:21.4922,x:133.8085,y:449.096},0).wait(1).to({scaleX:2.8913,rotation:21.22,x:137.3919,y:450.973},0).wait(1).to({scaleX:2.8914,rotation:20.9478,x:140.968,y:459.6681},0).wait(1).to({rotation:20.6756,x:144.5368,y:475.1811},0).wait(1).to({scaleX:2.8913,rotation:20.4033,x:148.0983,y:497.5042},0).wait(1).to({scaleX:2.8914,rotation:20.1311,x:151.6526,y:526.6533},0).wait(1).to({scaleX:2.8913,rotation:19.8589,x:155.1995,y:562.6125},0).wait(1).to({scaleX:2.8914,rotation:19.5867,x:158.7392,y:605.3979},0).wait(1).to({rotation:19.3145,x:162.2716,y:579.5896},0).wait(1).to({scaleX:2.8913,rotation:19.0422,x:165.7968,y:559.8508},0).wait(1).to({scaleX:2.8914,rotation:18.77,x:169.3147,y:546.1895},0).wait(1).to({rotation:18.4978,x:172.8253,y:538.5898},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:18.2256,x:176.3286,y:537.0597},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:17.9534,x:179.8246,y:541.5993},0).wait(1).to({rotation:17.6812,x:183.3134,y:552.2005},0).wait(1).to({scaleX:2.8913,rotation:17.4089,x:186.795,y:568.8794},0).wait(1).to({rotation:17.1367,x:190.2692,y:591.6281},0).wait(1).to({scaleX:2.8914,rotation:16.8645,x:193.7362,y:579.029},0).wait(1).to({scaleX:2.8913,scaleY:2.8914,rotation:16.5923,x:197.196,y:570.1182},0).wait(1).to({scaleX:2.8914,scaleY:2.8915,rotation:16.3201,x:200.6485,y:564.9037},0).wait(1).to({rotation:16.0479,x:204.0937,y:563.3775},0).wait(1).to({scaleX:2.8913,rotation:15.7756,x:207.5317,y:565.5398},0).wait(1).to({rotation:15.5034,x:210.9624,y:571.3984},0).wait(1).to({scaleX:2.8914,rotation:15.2312,x:214.3859,y:580.9456},0).wait(1));
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
	var mask_graphics_120 = new cjs.Graphics().moveTo(-394.9,540).lineTo(-394.9,-540).lineTo(394.9,-540).lineTo(394.9,540).closePath();
	var mask_graphics_121 = new cjs.Graphics().moveTo(-393.2,540).lineTo(-394.5,529.8).lineTo(-394.8,446.9).curveTo(-395.3,363.9,-395.3,283.9).curveTo(-395.3,249.3,-393.4,215.6).curveTo(-392.1,186.8,-389.2,157.3).curveTo(-387.4,143.5,-387,131).curveTo(-385.8,118.3,-385.1,105.7).curveTo(-383.3,79.4,-383.5,52.7).curveTo(-383.7,20.3,-385.6,-12.9).curveTo(-386.2,-30.2,-387.4,-48.2).curveTo(-388,-66.6,-389.4,-86.2).curveTo(-392,-127.5,-393.3,-168.1).curveTo(-394.9,-217.7,-394.9,-267.7).curveTo(-394.9,-361.9,-394.7,-456.1).lineTo(-394.5,-530.6).lineTo(-393.4,-540).lineTo(330.3,-540).lineTo(331.6,-540).lineTo(395.3,-533.8).lineTo(395.3,533.8).lineTo(330.5,540).lineTo(-393.2,540).closePath();
	var mask_graphics_122 = new cjs.Graphics().moveTo(-391.6,540).lineTo(-394,530.9).lineTo(-394.8,447.3).curveTo(-395.7,362.2,-395.7,282.9).curveTo(-395.7,247.9,-391.9,214.4).curveTo(-389.4,186.5,-383.6,157.4).curveTo(-380,143.4,-379.3,131.8).curveTo(-376.9,119.2,-375.6,106.9).curveTo(-372,80.7,-372.4,53.8).curveTo(-372.8,21.6,-376.4,-11.8).curveTo(-377.7,-28.7,-380,-46.9).curveTo(-381.4,-64.6,-384.1,-84.7).curveTo(-389.2,-126.3,-391.6,-166.4).curveTo(-394.9,-216,-394.9,-266.6).curveTo(-394.9,-361.5,-394.5,-456.4).lineTo(-394,-531.7).lineTo(-391.8,-540).lineTo(337.6,-540).lineTo(338.7,-540).lineTo(395.7,-527.8).lineTo(395.7,527.6).lineTo(337.8,540).lineTo(-391.6,540).closePath();
	var mask_graphics_123 = new cjs.Graphics().moveTo(-390,540).lineTo(-393.6,531.9).lineTo(-394.8,447.9).curveTo(-396.1,360.7,-396.1,282).curveTo(-396,246.4,-390.4,213.3).curveTo(-386.8,186.3,-378.2,157.5).curveTo(-372.9,143.2,-371.8,132.5).curveTo(-368.4,120,-366.3,108).curveTo(-361.1,82.1,-361.6,54.9).curveTo(-362.2,23,-367.6,-10.8).curveTo(-369.5,-27.3,-373,-45.7).curveTo(-374.9,-62.6,-379,-83).curveTo(-386.5,-125,-390,-164.7).curveTo(-395,-214.4,-395,-265.5).curveTo(-395,-361.1,-394.3,-456.7).lineTo(-393.6,-532.6).lineTo(-390.3,-540).lineTo(344.5,-540).lineTo(345.7,-540).lineTo(396.1,-522).lineTo(396.1,521.8).lineTo(344.8,540).lineTo(-390,540).closePath();
	var mask_graphics_124 = new cjs.Graphics().moveTo(-388.4,540).lineTo(-393.1,533).lineTo(-394.8,448.3).curveTo(-396.4,359.2,-396.4,281.1).curveTo(-396.4,245.1,-389,212.2).curveTo(-384.2,186.1,-372.9,157.6).curveTo(-366,143,-364.5,133.2).curveTo(-360,120.8,-357.3,109.1).curveTo(-350.5,83.4,-351.1,56).curveTo(-351.9,24.2,-359,-9.9).curveTo(-361.5,-25.9,-366.1,-44.5).curveTo(-368.6,-60.7,-373.9,-81.6).curveTo(-383.8,-123.8,-388.5,-163.1).curveTo(-395,-213,-395,-264.4).curveTo(-395,-360.7,-394.1,-457).lineTo(-393.1,-533.5).lineTo(-388.8,-540).lineTo(351.2,-540).lineTo(352.4,-540).lineTo(396.4,-516.4).lineTo(396.4,516).lineTo(351.7,540).lineTo(-388.4,540).closePath();
	var mask_graphics_125 = new cjs.Graphics().moveTo(-386.9,540).lineTo(-392.7,534).curveTo(-393.7,494.8,-394.7,448.8).curveTo(-396.7,357.7,-396.8,280.3).curveTo(-396.8,243.8,-387.7,211.2).curveTo(-381.8,185.9,-367.9,157.7).curveTo(-359.4,142.8,-357.5,133.8).curveTo(-351.9,121.7,-348.6,110.2).curveTo(-340.1,84.7,-341.1,57).curveTo(-342,25.5,-350.7,-8.9).curveTo(-353.8,-24.5,-359.4,-43.4).curveTo(-362.5,-58.8,-369.1,-80).curveTo(-381.2,-122.7,-387,-161.5).curveTo(-395,-211.4,-395,-263.4).curveTo(-395,-360.3,-393.8,-457.3).curveTo(-393.3,-500.6,-392.7,-534.4).lineTo(-387.4,-540).lineTo(357.8,-540).lineTo(359,-540).lineTo(396.8,-510.9).lineTo(396.8,510.5).lineTo(358.3,540).lineTo(-386.9,540).closePath();
	var mask_graphics_126 = new cjs.Graphics().moveTo(-385.5,540).lineTo(-392.3,534.9).curveTo(-393.5,496.1,-394.7,449.3).curveTo(-397.1,356.3,-397.1,279.5).curveTo(-397.1,242.6,-386.4,210.2).curveTo(-379.3,185.7,-363,157.8).curveTo(-352.9,142.7,-350.7,134.5).curveTo(-344.1,122.5,-340.2,111.3).curveTo(-330.2,85.9,-331.2,58).curveTo(-332.3,26.8,-342.6,-8).curveTo(-346.3,-23.2,-352.9,-42.2).curveTo(-356.6,-57,-364.4,-78.6).curveTo(-378.7,-121.5,-385.5,-159.9).curveTo(-395,-210,-395,-262.3).curveTo(-395,-359.9,-393.6,-457.6).curveTo(-393,-502,-392.3,-535.3).lineTo(-386.1,-540).lineTo(364.2,-540).lineTo(365.3,-540).lineTo(365.3,-539.9).lineTo(397.1,-505.6).lineTo(397.1,505.1).lineTo(364.7,540).lineTo(-385.5,540).closePath();
	var mask_graphics_127 = new cjs.Graphics().moveTo(-384,540).lineTo(-391.9,535.8).curveTo(-393.3,497.4,-394.6,449.7).curveTo(-397.4,354.9,-397.4,278.8).curveTo(-397.4,241.3,-385.1,209.2).curveTo(-377,185.5,-358.2,157.8).curveTo(-346.6,142.5,-344.1,135.1).curveTo(-336.5,123.1,-332,112.3).curveTo(-320.5,87,-321.7,59).curveTo(-323,28,-334.8,-7.2).curveTo(-339.1,-21.9,-346.6,-41.2).curveTo(-350.9,-55.3,-359.8,-77.3).curveTo(-376.3,-120.4,-384.1,-158.5).curveTo(-395,-208.6,-395,-261.3).curveTo(-395,-359.6,-393.5,-457.9).curveTo(-392.7,-503.5,-391.9,-536.2).lineTo(-384.7,-540).lineTo(370.3,-540).lineTo(371.4,-540).lineTo(397.4,-500.5).lineTo(397.4,499.9).lineTo(371,540).lineTo(-384,540).closePath();
	var mask_graphics_128 = new cjs.Graphics().moveTo(-382.7,540).lineTo(-391.5,536.8).curveTo(-393,498.6,-394.6,450.1).curveTo(-397.7,353.6,-397.7,278).curveTo(-397.7,240.2,-383.8,208.3).curveTo(-374.7,185.3,-353.6,157.9).curveTo(-340.5,142.3,-337.7,135.7).curveTo(-329.2,123.9,-324.1,113.3).curveTo(-311.2,88.2,-312.6,59.9).curveTo(-314,29.1,-327.3,-6.3).curveTo(-332.1,-20.7,-340.6,-40.1).curveTo(-345.4,-53.6,-355.4,-75.9).curveTo(-373.9,-119.3,-382.8,-157).curveTo(-395,-207.2,-395,-260.4).curveTo(-395,-359.3,-393.3,-458.1).curveTo(-392.4,-504.8,-391.5,-537).lineTo(-383.4,-540).lineTo(376.2,-540).lineTo(377.3,-540).lineTo(377.3,-540).lineTo(397.7,-495.5).lineTo(397.7,494.9).lineTo(377,540).lineTo(-382.7,540).closePath();
	var mask_graphics_129 = new cjs.Graphics().moveTo(-381.4,540).lineTo(-391.1,537.6).curveTo(-392.9,499.8,-394.6,450.6).curveTo(-398,352.3,-398,277.3).curveTo(-398,239,-382.7,207.4).curveTo(-372.6,185.2,-349.2,158).curveTo(-334.7,142.2,-331.6,136.4).curveTo(-322.2,124.6,-316.6,114.3).curveTo(-302.2,89.3,-303.7,60.8).curveTo(-305.3,30.3,-320,-5.5).curveTo(-325.3,-19.5,-334.8,-39).curveTo(-340.1,-51.9,-351.2,-74.6).curveTo(-371.7,-118.3,-381.5,-155.7).curveTo(-395.1,-205.8,-395.1,-259.5).curveTo(-395.1,-358.9,-393.1,-458.3).curveTo(-392.1,-506,-391.1,-537.8).lineTo(-382.2,-540).lineTo(381.9,-540).lineTo(383,-540).lineTo(383,-540).lineTo(398,-490.7).lineTo(398,490).lineTo(382.7,540).lineTo(-381.4,540).closePath();
	var mask_graphics_130 = new cjs.Graphics().moveTo(-380.1,540).lineTo(-390.8,538.4).curveTo(-392.7,501.1,-394.5,450.9).curveTo(-398.3,351,-398.3,276.6).curveTo(-398.3,237.9,-381.5,206.6).curveTo(-370.5,185,-344.9,158.1).curveTo(-329.1,142.1,-325.7,136.9).curveTo(-315.4,125.4,-309.3,115.2).curveTo(-293.6,90.4,-295.2,61.7).curveTo(-296.9,31.3,-313,-4.7).curveTo(-318.9,-18.4,-329.1,-38).curveTo(-335,-50.4,-347.1,-73.3).curveTo(-369.5,-117.3,-380.3,-154.3).curveTo(-395.1,-204.6,-395.1,-258.6).curveTo(-395.1,-358.6,-393,-458.6).curveTo(-391.9,-507.3,-390.8,-538.5).lineTo(-381.1,-540).lineTo(387.4,-540).lineTo(388.5,-540).lineTo(388.5,-540).lineTo(398.3,-486.1).lineTo(398.3,485.3).lineTo(388.3,540).lineTo(-380.1,540).closePath();
	var mask_graphics_131 = new cjs.Graphics().moveTo(-378.9,540).lineTo(-390.5,539.2).curveTo(-392.5,502.1,-394.5,451.3).curveTo(-398.6,349.9,-398.6,275.9).curveTo(-398.6,236.9,-380.4,205.7).curveTo(-368.5,184.8,-340.8,158).curveTo(-323.6,141.8,-320,137.4).curveTo(-308.8,126,-302.2,116.1).curveTo(-285.2,91.4,-287,62.5).curveTo(-288.9,32.3,-306.3,-4).curveTo(-312.6,-17.3,-323.7,-37.2).curveTo(-330,-48.9,-343.2,-72.2).curveTo(-367.4,-116.4,-379,-153).curveTo(-395.1,-203.4,-395.1,-257.8).curveTo(-395.1,-358.3,-392.7,-458.8).curveTo(-391.6,-508.5,-390.5,-539.3).lineTo(-379.9,-540).lineTo(392.7,-540).lineTo(393.8,-540).lineTo(393.8,-539.9).lineTo(398.6,-481.7).lineTo(398.6,480.8).lineTo(393.7,540).lineTo(-378.9,540).closePath();
	var mask_graphics_132 = new cjs.Graphics().moveTo(-390.1,540).curveTo(-392.3,503.2,-394.5,451.7).curveTo(-398.9,348.7,-398.9,275.3).curveTo(-398.9,235.8,-379.4,204.9).curveTo(-366.6,184.7,-336.8,158.1).curveTo(-318.5,141.8,-314.5,137.9).curveTo(-302.5,126.6,-295.4,117).curveTo(-277.2,92.4,-279.1,63.3).curveTo(-281.1,33.3,-299.8,-3.2).curveTo(-306.6,-16.3,-318.5,-36.3).lineTo(-339.4,-71).curveTo(-365.4,-115.5,-377.9,-151.8).curveTo(-395.1,-202.2,-395.1,-257).curveTo(-395.1,-358,-392.6,-459).curveTo(-391.4,-509.7,-390.1,-540).lineTo(397.8,-540).lineTo(398.9,-540).lineTo(398.9,-539.9).lineTo(398.9,540).closePath();

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
	var mask_1_graphics_0 = new cjs.Graphics().moveTo(-23,23).lineTo(-23,-23).lineTo(23,-23).lineTo(23,23).closePath();
	var mask_1_graphics_1 = new cjs.Graphics().moveTo(-23.4,23.4).lineTo(-23.4,-23.4).lineTo(23.4,-23.4).lineTo(23.4,23.4).closePath();
	var mask_1_graphics_2 = new cjs.Graphics().moveTo(-24.7,24.7).lineTo(-24.7,-24.7).lineTo(24.7,-24.7).lineTo(24.7,24.7).closePath();
	var mask_1_graphics_3 = new cjs.Graphics().moveTo(-26.8,26.8).lineTo(-26.8,-26.8).lineTo(26.8,-26.8).lineTo(26.8,26.8).closePath();
	var mask_1_graphics_4 = new cjs.Graphics().moveTo(-29.6,29.6).lineTo(-29.6,-29.6).lineTo(29.6,-29.6).lineTo(29.6,29.6).closePath();
	var mask_1_graphics_5 = new cjs.Graphics().moveTo(-33.1,33.1).lineTo(-33.1,-33.1).lineTo(33.1,-33.1).lineTo(33.1,33.1).closePath();
	var mask_1_graphics_6 = new cjs.Graphics().moveTo(-37.4,37.4).lineTo(-37.4,-37.4).lineTo(37.4,-37.4).lineTo(37.4,37.4).closePath();
	var mask_1_graphics_7 = new cjs.Graphics().moveTo(-42.3,42.3).lineTo(-42.3,-42.3).lineTo(42.3,-42.3).lineTo(42.3,42.3).closePath();
	var mask_1_graphics_8 = new cjs.Graphics().moveTo(-47.9,47.9).lineTo(-47.9,-47.9).lineTo(47.9,-47.9).lineTo(47.9,47.9).closePath();
	var mask_1_graphics_9 = new cjs.Graphics().moveTo(-54.1,54.1).lineTo(-54.1,-54.1).lineTo(54.1,-54.1).lineTo(54.1,54.1).closePath();
	var mask_1_graphics_10 = new cjs.Graphics().moveTo(-60.9,60.9).lineTo(-60.9,-60.9).lineTo(60.9,-60.9).lineTo(60.9,60.9).closePath();
	var mask_1_graphics_11 = new cjs.Graphics().moveTo(-68.2,68.2).lineTo(-68.2,-68.2).lineTo(68.2,-68.2).lineTo(68.2,68.2).closePath();
	var mask_1_graphics_12 = new cjs.Graphics().moveTo(-76,76).lineTo(-76,-76).lineTo(76,-76).lineTo(76,76).closePath();
	var mask_1_graphics_13 = new cjs.Graphics().moveTo(-84.3,84.3).lineTo(-84.3,-84.3).lineTo(84.3,-84.3).lineTo(84.3,84.3).closePath();
	var mask_1_graphics_14 = new cjs.Graphics().moveTo(-93.1,93.1).lineTo(-93.1,-93.1).lineTo(93.1,-93.1).lineTo(93.1,93.1).closePath();
	var mask_1_graphics_15 = new cjs.Graphics().moveTo(-102.3,102.3).lineTo(-102.3,-102.3).lineTo(102.3,-102.3).lineTo(102.3,102.3).closePath();
	var mask_1_graphics_16 = new cjs.Graphics().moveTo(-112,112).lineTo(-112,-112).lineTo(112,-112).lineTo(112,112).closePath();
	var mask_1_graphics_17 = new cjs.Graphics().moveTo(-122,122).lineTo(-122,-122).lineTo(122,-122).lineTo(122,122).closePath();
	var mask_1_graphics_18 = new cjs.Graphics().moveTo(-132.3,132.3).lineTo(-132.3,-132.3).lineTo(132.3,-132.3).lineTo(132.3,132.3).closePath();
	var mask_1_graphics_19 = new cjs.Graphics().moveTo(-143,143).lineTo(-143,-143).lineTo(143,-143).lineTo(143,143).closePath();
	var mask_1_graphics_20 = new cjs.Graphics().moveTo(-154,154).lineTo(-154,-154).lineTo(154,-154).lineTo(154,154).closePath();
	var mask_1_graphics_21 = new cjs.Graphics().moveTo(-165.2,165.2).lineTo(-165.2,-165.2).lineTo(165.2,-165.2).lineTo(165.2,165.2).closePath();
	var mask_1_graphics_22 = new cjs.Graphics().moveTo(-176.7,176.7).lineTo(-176.7,-176.7).lineTo(176.7,-176.7).lineTo(176.7,176.7).closePath();
	var mask_1_graphics_23 = new cjs.Graphics().moveTo(-188.4,188.4).lineTo(-188.4,-188.4).lineTo(188.4,-188.4).lineTo(188.4,188.4).closePath();
	var mask_1_graphics_24 = new cjs.Graphics().moveTo(-200.3,200.3).lineTo(-200.3,-200.3).lineTo(200.3,-200.3).lineTo(200.3,200.3).closePath();
	var mask_1_graphics_25 = new cjs.Graphics().moveTo(-212.3,212.3).lineTo(-212.3,-212.3).lineTo(212.3,-212.3).lineTo(212.3,212.3).closePath();
	var mask_1_graphics_26 = new cjs.Graphics().moveTo(-224.5,224.5).lineTo(-224.5,-224.5).lineTo(224.5,-224.5).lineTo(224.5,224.5).closePath();
	var mask_1_graphics_27 = new cjs.Graphics().moveTo(-236.7,236.7).lineTo(-236.7,-236.7).lineTo(236.7,-236.7).lineTo(236.7,236.7).closePath();
	var mask_1_graphics_28 = new cjs.Graphics().moveTo(-249.1,249.1).lineTo(-249.1,-249.1).lineTo(249.1,-249.1).lineTo(249.1,249.1).closePath();
	var mask_1_graphics_29 = new cjs.Graphics().moveTo(-261.5,261.5).lineTo(-261.5,-261.5).lineTo(261.5,-261.5).lineTo(261.5,261.5).closePath();
	var mask_1_graphics_30 = new cjs.Graphics().moveTo(-274,274).lineTo(-274,-274).lineTo(274,-274).lineTo(274,274).closePath();
	var mask_1_graphics_31 = new cjs.Graphics().moveTo(-286.4,286.4).lineTo(-286.4,-286.4).lineTo(286.4,-286.4).lineTo(286.4,286.4).closePath();
	var mask_1_graphics_32 = new cjs.Graphics().moveTo(-298.9,298.9).lineTo(-298.9,-298.9).lineTo(298.9,-298.9).lineTo(298.9,298.9).closePath();
	var mask_1_graphics_33 = new cjs.Graphics().moveTo(-311.3,311.3).lineTo(-311.3,-311.3).lineTo(311.3,-311.3).lineTo(311.3,311.3).closePath();
	var mask_1_graphics_34 = new cjs.Graphics().moveTo(-323.6,323.6).lineTo(-323.6,-323.6).lineTo(323.6,-323.6).lineTo(323.6,323.6).closePath();
	var mask_1_graphics_35 = new cjs.Graphics().moveTo(-335.8,335.8).lineTo(-335.8,-335.8).lineTo(335.8,-335.8).lineTo(335.8,335.8).closePath();
	var mask_1_graphics_36 = new cjs.Graphics().moveTo(-347.9,347.9).lineTo(-347.9,-347.9).lineTo(347.9,-347.9).lineTo(347.9,347.9).closePath();
	var mask_1_graphics_37 = new cjs.Graphics().moveTo(-359.9,359.9).lineTo(-359.9,-359.9).lineTo(359.9,-359.9).lineTo(359.9,359.9).closePath();
	var mask_1_graphics_38 = new cjs.Graphics().moveTo(-371.6,371.6).lineTo(-371.6,-371.6).lineTo(371.6,-371.6).lineTo(371.6,371.6).closePath();
	var mask_1_graphics_39 = new cjs.Graphics().moveTo(-383.2,383.2).lineTo(-383.2,-383.2).lineTo(383.2,-383.2).lineTo(383.2,383.2).closePath();
	var mask_1_graphics_40 = new cjs.Graphics().moveTo(-394.6,394.6).lineTo(-394.6,-394.6).lineTo(394.6,-394.6).lineTo(394.6,394.6).closePath();
	var mask_1_graphics_41 = new cjs.Graphics().moveTo(-405.7,405.7).lineTo(-405.7,-405.7).lineTo(405.7,-405.7).lineTo(405.7,405.7).closePath();
	var mask_1_graphics_42 = new cjs.Graphics().moveTo(-416.6,416.6).lineTo(-416.6,-416.6).lineTo(416.6,-416.6).lineTo(416.6,416.6).closePath();
	var mask_1_graphics_43 = new cjs.Graphics().moveTo(-427.2,427.2).lineTo(-427.2,-427.2).lineTo(427.2,-427.2).lineTo(427.2,427.2).closePath();
	var mask_1_graphics_44 = new cjs.Graphics().moveTo(-437.4,437.4).lineTo(-437.4,-437.4).lineTo(437.4,-437.4).lineTo(437.4,437.4).closePath();
	var mask_1_graphics_45 = new cjs.Graphics().moveTo(-447.3,447.3).lineTo(-447.3,-447.3).lineTo(447.3,-447.3).lineTo(447.3,447.3).closePath();
	var mask_1_graphics_46 = new cjs.Graphics().moveTo(-456.9,456.9).lineTo(-456.9,-456.9).lineTo(456.9,-456.9).lineTo(456.9,456.9).closePath();
	var mask_1_graphics_47 = new cjs.Graphics().moveTo(-466,466).lineTo(-466,-466).lineTo(466,-466).lineTo(466,466).closePath();
	var mask_1_graphics_48 = new cjs.Graphics().moveTo(-474.8,474.8).lineTo(-474.8,-474.8).lineTo(474.8,-474.8).lineTo(474.8,474.8).closePath();
	var mask_1_graphics_49 = new cjs.Graphics().moveTo(-483.1,483.1).lineTo(-483.1,-483.1).lineTo(483.1,-483.1).lineTo(483.1,483.1).closePath();
	var mask_1_graphics_50 = new cjs.Graphics().moveTo(-490.9,490.9).lineTo(-490.9,-490.9).lineTo(490.9,-490.9).lineTo(490.9,490.9).closePath();
	var mask_1_graphics_51 = new cjs.Graphics().moveTo(-498.2,498.2).lineTo(-498.2,-498.2).lineTo(498.2,-498.2).lineTo(498.2,498.2).closePath();
	var mask_1_graphics_52 = new cjs.Graphics().moveTo(-505.1,505.1).lineTo(-505.1,-505.1).lineTo(505.1,-505.1).lineTo(505.1,505.1).closePath();
	var mask_1_graphics_53 = new cjs.Graphics().moveTo(-511.4,511.4).lineTo(-511.4,-511.4).lineTo(511.4,-511.4).lineTo(511.4,511.4).closePath();
	var mask_1_graphics_54 = new cjs.Graphics().moveTo(-517.1,517.1).lineTo(-517.1,-517.1).lineTo(517.1,-517.1).lineTo(517.1,517.1).closePath();
	var mask_1_graphics_55 = new cjs.Graphics().moveTo(-522.3,522.3).lineTo(-522.3,-522.3).lineTo(522.3,-522.3).lineTo(522.3,522.3).closePath();
	var mask_1_graphics_56 = new cjs.Graphics().moveTo(-526.8,526.8).lineTo(-526.8,-526.8).lineTo(526.8,-526.8).lineTo(526.8,526.8).closePath();
	var mask_1_graphics_57 = new cjs.Graphics().moveTo(-530.8,530.8).lineTo(-530.8,-530.8).lineTo(530.8,-530.8).lineTo(530.8,530.8).closePath();
	var mask_1_graphics_58 = new cjs.Graphics().moveTo(-534,534).lineTo(-534,-534).lineTo(534,-534).lineTo(534,534).closePath();
	var mask_1_graphics_59 = new cjs.Graphics().moveTo(-536.6,536.6).lineTo(-536.6,-536.6).lineTo(536.6,-536.6).lineTo(536.6,536.6).closePath();
	var mask_1_graphics_60 = new cjs.Graphics().moveTo(-538.5,538.5).lineTo(-538.5,-538.5).lineTo(538.5,-538.5).lineTo(538.5,538.5).closePath();
	var mask_1_graphics_61 = new cjs.Graphics().moveTo(-539.6,539.6).lineTo(-539.6,-539.6).lineTo(539.6,-539.6).lineTo(539.6,539.6).closePath();
	var mask_1_graphics_62 = new cjs.Graphics().moveTo(-540,540).lineTo(-540,-540).lineTo(540,-540).lineTo(540,540).closePath();
	var mask_1_graphics_120 = new cjs.Graphics().moveTo(-37.8,540).lineTo(-37.8,-540).lineTo(37.8,-540).lineTo(37.8,540).closePath();
	var mask_1_graphics_121 = new cjs.Graphics().moveTo(-29.6,540).lineTo(-31.6,539.2).curveTo(-31.4,494.6,-31.4,447.5).curveTo(-31.2,363.8,-32,297.5).curveTo(-32.7,249.9,-35.8,200.2).curveTo(-37.4,179,-38,162.1).curveTo(-39.1,145.3,-39.5,130.7).curveTo(-39.8,117.9,-39.3,104.9).curveTo(-39,94.4,-38.1,82.3).curveTo(-37,69.6,-36.7,59.5).curveTo(-36.1,47.1,-36.3,35).curveTo(-36.5,23.4,-37.2,11.9).curveTo(-37.6,2.6,-38.8,-9.4).curveTo(-41.4,-41.2,-42.4,-73).curveTo(-43.1,-95.2,-41.9,-116.9).curveTo(-41.5,-133.7,-38.7,-158.5).curveTo(-36.2,-189,-34.9,-219.2).curveTo(-33,-266.1,-32.8,-316.5).curveTo(-32.4,-415.9,-31.6,-539.2).lineTo(-29.6,-540).lineTo(41.4,-540).lineTo(42.6,-539.5).curveTo(41.8,-439.7,41.5,-351.4).curveTo(41.1,-262.1,35.9,-184).curveTo(33.5,-161.6,32.6,-143.9).curveTo(31.1,-126.6,31.3,-110).curveTo(31.5,-85.1,32.6,-62.3).curveTo(33.3,-47.4,34.8,-32.1).curveTo(36.6,-16.7,37,-6).curveTo(38,9.6,38.3,25.9).curveTo(38.6,39.2,38.3,50.8).curveTo(38.2,57.4,37.5,65).curveTo(35.9,89.6,35.7,118).curveTo(35.6,141.5,36.8,166.9).curveTo(37.1,186.6,39.3,215.4).curveTo(40.9,242,41.4,265.2).curveTo(42,290.1,41.1,313.4).curveTo(40,365.1,41.2,440.5).curveTo(41.8,490.7,42.6,539.5).lineTo(41.4,540).lineTo(-29.6,540).closePath();
	var mask_1_graphics_122 = new cjs.Graphics().moveTo(-25.5,540).lineTo(-26.9,538.5).curveTo(-26.6,494.8,-26.5,446.8).curveTo(-26.3,356.9,-27.6,297.5).curveTo(-28.9,250.8,-34.2,200.3).curveTo(-37,177.8,-38.1,162.6).curveTo(-40.1,145.2,-40.7,131.5).curveTo(-41.3,118.7,-40.5,105.7).curveTo(-39.9,95.7,-38.2,83.1).curveTo(-36.4,69.4,-35.9,60.4).curveTo(-34.8,47.9,-35.1,36).curveTo(-35.5,24.4,-36.8,12.9).curveTo(-37.4,4.7,-39.6,-8.3).curveTo(-44,-39.9,-45.8,-71.6).curveTo(-47.1,-93.8,-45,-115.4).curveTo(-44.3,-129.3,-39.4,-157.1).curveTo(-35,-187.6,-32.7,-217.4).curveTo(-29.4,-262.9,-28.9,-314.9).curveTo(-28.2,-405.7,-26.9,-538.5).lineTo(-25.5,-540).lineTo(45.5,-540).lineTo(46.3,-539.2).curveTo(44.9,-435.1,44.4,-351.4).curveTo(43.6,-258.3,34.6,-184.7).curveTo(30.3,-160.7,28.7,-145.2).curveTo(26.2,-127.6,26.4,-111.2).curveTo(26.9,-85.8,28.7,-63.7).curveTo(30,-49,32.5,-33.7).curveTo(35.8,-16.6,36.4,-8).curveTo(38.3,7.3,38.8,23.9).curveTo(39.3,37.8,38.8,48.6).curveTo(38.5,54.9,37.3,62.8).curveTo(34.4,86.2,34.1,116).curveTo(33.9,138.8,36,165.1).curveTo(36.7,181.5,40.5,213.9).curveTo(43.3,241.6,44.1,263.5).curveTo(45.3,288.9,43.6,311.7).curveTo(41.7,355.1,43.8,440).curveTo(44.8,490.8,46.3,539.1).lineTo(45.5,540).lineTo(-25.5,540).closePath();
	var mask_1_graphics_123 = new cjs.Graphics().moveTo(-22.6,540).lineTo(-23.5,538).curveTo(-23.1,494.9,-22.9,446.2).curveTo(-22.7,351.8,-24.3,297.6).curveTo(-26,251.6,-33.1,200.4).curveTo(-36.7,176.9,-38.2,163.1).curveTo(-40.8,145.1,-41.6,132).curveTo(-42.4,119.3,-41.3,106.2).curveTo(-40.6,96.7,-38.4,83.5).curveTo(-36,69.3,-35.3,61).curveTo(-33.9,48.5,-34.3,36.7).curveTo(-34.8,25.1,-36.4,13.6).curveTo(-37.3,6.2,-40.2,-7.6).curveTo(-46,-38.9,-48.3,-70.6).curveTo(-50,-92.9,-47.3,-114.4).curveTo(-46.3,-126,-39.9,-156).curveTo(-34.1,-186.5,-31.1,-216.2).curveTo(-26.8,-260.7,-26.1,-313.7).curveTo(-25.2,-398.3,-23.5,-538).lineTo(-22.6,-540).lineTo(48.4,-540).lineTo(49,-538.8).curveTo(47.1,-431.8,46.5,-351.4).curveTo(45.5,-255.5,33.6,-185.2).curveTo(27.9,-160.1,25.8,-146.1).curveTo(22.5,-128.4,22.8,-112.2).curveTo(23.4,-86.2,25.8,-64.8).curveTo(27.5,-50.2,30.8,-34.8).curveTo(35.2,-16.6,35.9,-9.5).curveTo(38.4,5.6,39.1,22.4).curveTo(39.8,36.8,39.1,47.1).curveTo(38.7,53,37.1,61.3).curveTo(33.4,83.7,32.9,114.6).curveTo(32.7,136.9,35.5,163.7).curveTo(36.3,177.8,41.3,212.8).curveTo(45,241.4,46.1,262.3).curveTo(47.6,288.1,45.4,310.4).curveTo(42.9,347.8,45.7,439.6).curveTo(47,490.8,48.9,538.8).lineTo(48.4,540).lineTo(-22.6,540).closePath();
	var mask_1_graphics_124 = new cjs.Graphics().moveTo(-20.5,540).lineTo(-21.1,537.7).curveTo(-20.5,495,-20.4,445.9).curveTo(-20.1,348.2,-22,297.6).curveTo(-24,252.1,-32.3,200.5).curveTo(-36.6,176.3,-38.3,163.3).curveTo(-41.3,145,-42.2,132.4).curveTo(-43.2,119.7,-41.9,106.6).curveTo(-41.1,97.4,-38.5,83.9).curveTo(-35.7,69.2,-34.8,61.6).curveTo(-33.2,48.9,-33.7,37.3).curveTo(-34.2,25.6,-36.2,14.1).curveTo(-37.2,7.3,-40.6,-7).curveTo(-47.4,-38.3,-50.2,-69.8).curveTo(-52.1,-92.2,-48.9,-113.6).curveTo(-47.8,-123.6,-40.2,-155.2).curveTo(-33.5,-185.7,-30,-215.2).curveTo(-24.9,-259.1,-24.1,-312.8).lineTo(-21.1,-537.7).lineTo(-20.5,-540).lineTo(50.5,-540).lineTo(50.9,-538.7).curveTo(48.7,-429.3,47.9,-351.4).curveTo(46.7,-253.4,32.8,-185.6).curveTo(26.1,-159.7,23.7,-146.8).curveTo(19.8,-128.9,20.2,-113).curveTo(20.9,-86.5,23.7,-65.5).curveTo(25.7,-51.1,29.6,-35.6).curveTo(34.7,-16.7,35.6,-10.5).curveTo(38.5,4.4,39.3,21.3).curveTo(40.1,36.1,39.3,45.9).curveTo(38.8,51.7,36.9,60.2).curveTo(32.6,81.8,32.1,113.6).curveTo(31.8,135.5,35,162.8).curveTo(36.1,175.1,41.9,212).curveTo(46.2,241.3,47.5,261.4).curveTo(49.3,287.5,46.7,309.5).curveTo(43.7,342.4,47,439.4).curveTo(48.6,490.9,50.8,538.6).lineTo(50.5,540).lineTo(-20.5,540).closePath();
	var mask_1_graphics_125 = new cjs.Graphics().moveTo(-19,540).lineTo(-19.4,537.5).curveTo(-18.7,495.1,-18.6,445.6).curveTo(-18.2,345.7,-20.4,297.6).curveTo(-22.6,252.4,-31.7,200.6).curveTo(-36.4,175.8,-38.4,163.5).curveTo(-41.6,145,-42.7,132.7).curveTo(-43.8,120,-42.3,106.8).curveTo(-41.4,97.9,-38.5,84.2).curveTo(-35.4,69.1,-34.5,61.9).curveTo(-32.7,49.2,-33.3,37.6).curveTo(-33.9,26,-36,14.5).curveTo(-37.2,8.1,-40.8,-6.6).curveTo(-48.4,-37.8,-51.4,-69.3).curveTo(-53.5,-91.8,-50,-113).curveTo(-48.8,-122,-40.5,-154.6).curveTo(-33,-185.2,-29.2,-214.6).curveTo(-23.6,-257.9,-22.7,-312.1).lineTo(-19.4,-537.5).lineTo(-19,-540).lineTo(52,-540).lineTo(52.2,-538.5).curveTo(49.9,-427.7,49,-351.4).curveTo(47.7,-252.1,32.4,-185.9).curveTo(25,-159.4,22.3,-147.2).curveTo(18,-129.3,18.5,-113.4).curveTo(19.3,-86.8,22.3,-66.1).curveTo(24.5,-51.7,28.8,-36.2).curveTo(34.4,-16.7,35.4,-11.3).curveTo(38.6,3.6,39.5,20.5).curveTo(40.4,35.6,39.4,45.2).curveTo(38.9,50.8,36.9,59.5).curveTo(32.1,80.5,31.5,112.9).curveTo(31.2,134.6,34.8,162.1).curveTo(35.9,173.2,42.3,211.5).curveTo(47.1,241.1,48.5,260.7).curveTo(50.5,287.1,47.6,308.9).curveTo(44.3,338.8,48,439.1).curveTo(49.7,490.9,52.2,538.5).lineTo(52,540).lineTo(-19,540).closePath();
	var mask_1_graphics_126 = new cjs.Graphics().moveTo(-18,540).lineTo(-18.3,537.4).curveTo(-17.6,495.1,-17.4,445.4).curveTo(-17.1,344,-19.4,297.7).curveTo(-21.7,252.6,-31.4,200.6).curveTo(-36.4,175.6,-38.4,163.7).curveTo(-41.9,144.9,-43,132.8).curveTo(-44.2,120.2,-42.6,107).curveTo(-41.7,98.2,-38.6,84.3).curveTo(-35.3,69.1,-34.3,62.1).curveTo(-32.5,49.4,-33.1,37.8).curveTo(-33.7,26.2,-36,14.8).curveTo(-37.2,8.5,-41.1,-6.4).curveTo(-49.1,-37.5,-52.3,-68.9).curveTo(-54.5,-91.4,-50.8,-112.7).curveTo(-49.5,-121,-40.7,-154.3).curveTo(-32.8,-184.9,-28.7,-214.1).curveTo(-22.7,-257.1,-21.8,-311.8).lineTo(-18.3,-537.4).lineTo(-18,-540).lineTo(53,-540).lineTo(53.1,-538.5).curveTo(50.6,-426.6,49.6,-351.4).curveTo(48.3,-251.1,32,-186).curveTo(24.1,-159.2,21.3,-147.5).curveTo(16.8,-129.6,17.2,-113.8).curveTo(18.1,-86.9,21.3,-66.4).curveTo(23.6,-52.1,28.2,-36.6).curveTo(34.2,-16.7,35.2,-11.8).curveTo(38.6,3,39.6,20.1).curveTo(40.5,35.2,39.5,44.6).curveTo(39,50.3,36.8,59).curveTo(31.7,79.7,31.1,112.4).curveTo(30.7,133.9,34.6,161.6).curveTo(35.8,172,42.5,211.1).curveTo(47.7,241,49.1,260.4).curveTo(51.2,286.8,48.2,308.4).curveTo(44.7,336.3,48.6,439).curveTo(50.4,490.9,53,538.4).lineTo(53,540).lineTo(-18,540).closePath();
	var mask_1_graphics_127 = new cjs.Graphics().moveTo(-17.4,540).lineTo(-17.5,537.2).curveTo(-16.8,495.2,-16.6,445.3).curveTo(-16.3,342.8,-18.6,297.7).curveTo(-21.1,252.8,-31.1,200.6).curveTo(-36.3,175.4,-38.5,163.8).curveTo(-42,144.9,-43.2,132.9).curveTo(-44.4,120.3,-42.8,107.2).curveTo(-41.8,98.4,-38.6,84.4).curveTo(-35.2,69.1,-34.2,62.3).curveTo(-32.2,49.5,-32.9,38).curveTo(-33.5,26.3,-35.9,14.9).curveTo(-37.1,8.9,-41.2,-6.1).curveTo(-49.5,-37.3,-52.8,-68.8).curveTo(-55.2,-91.2,-51.3,-112.4).curveTo(-49.9,-120.3,-40.8,-154.1).curveTo(-32.6,-184.6,-28.3,-213.8).curveTo(-22.1,-256.6,-21.2,-311.5).lineTo(-17.5,-537.2).lineTo(-17.4,-540).lineTo(53.6,-540).lineTo(53.7,-538.4).curveTo(51.1,-425.9,50.1,-351.4).curveTo(48.7,-250.5,31.8,-186.1).curveTo(23.7,-159.1,20.7,-147.7).curveTo(16,-129.8,16.5,-113.9).curveTo(17.3,-87,20.7,-66.7).curveTo(23.1,-52.4,27.9,-36.8).curveTo(34,-16.7,35.1,-12.1).curveTo(38.6,2.6,39.6,19.7).curveTo(40.6,35,39.6,44.3).curveTo(39,49.9,36.8,58.6).curveTo(31.5,79.2,30.9,112.1).curveTo(30.5,133.4,34.5,161.4).curveTo(35.7,171.2,42.7,210.9).curveTo(48.1,241,49.6,260.1).curveTo(51.7,286.6,48.6,308.2).curveTo(45,334.7,49,438.9).curveTo(50.9,491,53.6,538.3).lineTo(53.6,540).lineTo(-17.4,540).closePath();
	var mask_1_graphics_128 = new cjs.Graphics().moveTo(-17,540).lineTo(-17,537.1).curveTo(-16.4,495.2,-16.2,445.2).curveTo(-15.8,342.2,-18.2,297.7).curveTo(-20.7,252.9,-31,200.7).curveTo(-36.3,175.2,-38.5,163.9).curveTo(-42.1,144.9,-43.3,133).curveTo(-44.5,120.3,-42.9,107.3).curveTo(-41.9,98.5,-38.6,84.5).curveTo(-35.1,69,-34.1,62.4).curveTo(-32.1,49.6,-32.7,38.1).curveTo(-33.4,26.4,-35.8,15).curveTo(-37.1,9.1,-41.2,-6).curveTo(-49.7,-37.2,-53.1,-68.6).curveTo(-55.5,-91.1,-51.6,-112.2).curveTo(-50.2,-119.8,-40.8,-154).curveTo(-32.4,-184.5,-28.1,-213.7).curveTo(-21.8,-256.3,-20.8,-311.3).lineTo(-17,-537.1).lineTo(-17,-540).lineTo(54,-540).lineTo(54.1,-538.4).curveTo(51.4,-425.4,50.4,-351.4).curveTo(48.9,-250.1,31.7,-186.2).curveTo(23.4,-159,20.4,-147.8).curveTo(15.5,-129.9,16,-114).curveTo(16.9,-87,20.4,-66.8).curveTo(22.8,-52.6,27.7,-37).curveTo(34,-16.7,35,-12.3).curveTo(38.7,2.5,39.7,19.5).curveTo(40.7,34.9,39.6,44).curveTo(39.1,49.6,36.8,58.4).curveTo(31.4,78.9,30.7,111.9).curveTo(30.3,133.2,34.4,161.2).curveTo(35.7,170.6,42.9,210.8).curveTo(48.3,241,49.9,259.9).curveTo(52.1,286.5,48.8,308).curveTo(45.2,333.8,49.3,438.9).curveTo(51.2,491,54,538.3).lineTo(54,540).lineTo(-17,540).closePath();
	var mask_1_graphics_129 = new cjs.Graphics().moveTo(-16.8,540).lineTo(-16.8,537.1).curveTo(-16.1,495.2,-15.9,445.2).curveTo(-15.5,341.8,-18,297.7).curveTo(-20.5,253,-30.9,200.7).curveTo(-36.3,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133).curveTo(-44.6,120.4,-43,107.3).curveTo(-41.9,98.6,-38.7,84.5).curveTo(-35.1,69,-34.1,62.4).curveTo(-32,49.7,-32.7,38.1).curveTo(-33.3,26.5,-35.8,15).curveTo(-37.1,9.2,-41.3,-6).curveTo(-49.9,-37.1,-53.3,-68.5).curveTo(-55.8,-91,-51.7,-112.1).curveTo(-50.4,-119.6,-40.9,-153.8).curveTo(-32.4,-184.4,-28,-213.6).curveTo(-21.6,-256.2,-20.6,-311.2).curveTo(-19.3,-383.6,-16.8,-537.1).lineTo(-16.8,-540).lineTo(54.2,-540).lineTo(54.2,-538.3).curveTo(51.5,-425.1,50.5,-351.4).curveTo(49,-249.9,31.6,-186.2).curveTo(23.2,-159,20.1,-147.9).curveTo(15.2,-129.9,15.7,-114.1).curveTo(16.6,-87,20.1,-66.9).curveTo(22.6,-52.6,27.5,-37.1).curveTo(33.9,-16.7,35,-12.4).curveTo(38.7,2.3,39.7,19.4).curveTo(40.7,34.8,39.6,43.9).curveTo(39,49.4,36.7,58.3).curveTo(31.3,78.7,30.6,111.8).curveTo(30.2,133,34.3,161.1).curveTo(35.6,170.4,42.9,210.7).curveTo(48.4,240.9,50,259.8).curveTo(52.2,286.4,48.9,307.9).curveTo(45.2,333.2,49.4,438.8).curveTo(51.4,491,54.1,538.2).lineTo(54.2,540).lineTo(-16.8,540).closePath();
	var mask_1_graphics_130 = new cjs.Graphics().moveTo(-16.7,540).lineTo(-16.7,537.1).curveTo(-16,495.2,-15.8,445.1).curveTo(-15.4,341.6,-17.9,297.7).curveTo(-20.4,253,-30.9,200.7).curveTo(-36.3,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34.1,62.5).curveTo(-32,49.7,-32.7,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.2,-41.3,-5.9).curveTo(-50,-37.1,-53.4,-68.5).curveTo(-55.9,-90.9,-51.8,-112.1).curveTo(-50.4,-119.5,-40.9,-153.8).curveTo(-32.4,-184.4,-27.9,-213.6).curveTo(-21.5,-256.1,-20.5,-311.2).lineTo(-16.7,-537.1).lineTo(-16.7,-540).lineTo(54.3,-540).lineTo(54.3,-538.3).curveTo(51.6,-425.1,50.6,-351.4).curveTo(49.1,-249.8,31.5,-186.2).curveTo(23.1,-158.9,20,-148).curveTo(15.1,-130,15.6,-114.2).curveTo(16.5,-87.1,20,-66.9).curveTo(22.5,-52.7,27.4,-37.1).curveTo(33.9,-16.6,35,-12.4).curveTo(38.6,2.3,39.7,19.4).curveTo(40.7,34.7,39.6,43.9).curveTo(39,49.4,36.7,58.2).curveTo(31.2,78.5,30.6,111.8).curveTo(30.2,133,34.3,161).curveTo(35.6,170.3,42.9,210.7).curveTo(48.5,240.9,50,259.8).curveTo(52.3,286.4,49,307.9).curveTo(45.3,333,49.5,438.8).curveTo(51.4,491,54.2,538.2).lineTo(54.3,540).lineTo(-16.7,540).closePath();
	var mask_1_graphics_131 = new cjs.Graphics().moveTo(-16.6,540).lineTo(-16.6,537.1).curveTo(-15.9,495.2,-15.7,445.1).curveTo(-15.3,341.5,-17.8,297.7).curveTo(-20.4,253,-30.9,200.7).curveTo(-36.3,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34.1,62.5).curveTo(-32,49.7,-32.7,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.3,-41.3,-5.9).curveTo(-50,-37,-53.5,-68.5).curveTo(-55.9,-90.9,-51.9,-112.1).curveTo(-50.5,-119.4,-40.9,-153.8).curveTo(-32.4,-184.4,-27.9,-213.5).curveTo(-21.5,-256.1,-20.5,-311.1).lineTo(-16.6,-537.1).lineTo(-16.6,-540).lineTo(54.4,-540).lineTo(54.4,-538.3).curveTo(51.6,-425,50.6,-351.4).curveTo(49.1,-249.7,31.5,-186.2).curveTo(23,-158.9,20,-148).curveTo(15,-130,15.5,-114.2).curveTo(16.4,-87.1,20,-67).curveTo(22.5,-52.7,27.4,-37.2).curveTo(33.9,-16.7,35,-12.5).curveTo(38.6,2.2,39.7,19.4).curveTo(40.7,34.7,39.6,43.8).curveTo(39,49.3,36.7,58.2).curveTo(31.2,78.5,30.6,111.7).curveTo(30.2,133,34.3,161).curveTo(35.6,170.2,42.9,210.6).curveTo(48.5,240.9,50.1,259.7).curveTo(52.3,286.4,49,307.8).curveTo(45.3,332.8,49.5,438.8).curveTo(51.5,491,54.3,538.2).lineTo(54.4,540).lineTo(-16.6,540).closePath();
	var mask_1_graphics_132 = new cjs.Graphics().moveTo(-16.6,540).lineTo(-16.6,537.1).curveTo(-15.9,495.2,-15.7,445.1).curveTo(-15.3,341.5,-17.8,297.7).curveTo(-20.3,253,-30.8,200.7).curveTo(-36.2,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34,62.5).curveTo(-32,49.7,-32.6,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.3,-41.3,-5.9).curveTo(-50,-37,-53.5,-68.5).curveTo(-55.9,-90.9,-51.9,-112.1).curveTo(-50.5,-119.3,-40.9,-153.8).curveTo(-32.3,-184.4,-27.9,-213.5).curveTo(-21.4,-256.1,-20.4,-311.1).lineTo(-16.6,-537.1).lineTo(-16.6,-540).lineTo(54.4,-540).lineTo(54.4,-538.3).curveTo(51.7,-425,50.7,-351.4).curveTo(49.2,-249.7,31.5,-186.2).curveTo(23,-158.9,20,-148).curveTo(15,-130,15.5,-114.2).curveTo(16.4,-87.1,20,-67).curveTo(22.5,-52.7,27.4,-37.2).curveTo(33.9,-16.7,35,-12.5).curveTo(38.7,2.2,39.7,19.4).curveTo(40.7,34.7,39.7,43.8).curveTo(39.1,49.3,36.7,58.2).curveTo(31.2,78.5,30.6,111.7).curveTo(30.2,133,34.3,161).curveTo(35.6,170.2,43,210.6).curveTo(48.5,240.9,50.1,259.7).curveTo(52.4,286.4,49.1,307.8).curveTo(45.3,332.8,49.5,438.8).curveTo(51.5,491,54.3,538.2).lineTo(54.4,540).lineTo(-16.6,540).closePath();
	var mask_1_graphics_133 = new cjs.Graphics().moveTo(-16.6,540).lineTo(-16.6,537.1).curveTo(-15.9,495.2,-15.7,445.1).curveTo(-15.3,341.5,-17.8,297.7).curveTo(-20.3,253,-30.8,200.7).curveTo(-36.2,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34,62.5).curveTo(-32,49.7,-32.6,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.3,-41.3,-5.9).curveTo(-50,-37,-53.5,-68.5).curveTo(-55.9,-90.9,-51.9,-112.1).curveTo(-50.5,-119.3,-40.9,-153.8).curveTo(-32.3,-184.4,-27.9,-213.5).curveTo(-21.4,-256.1,-20.4,-311.1).lineTo(-16.6,-537.1).lineTo(-16.6,-540).lineTo(54.4,-540).lineTo(54.4,-538.3).curveTo(51.7,-425,50.7,-351.4).curveTo(49.2,-249.7,31.5,-186.2).curveTo(23,-158.9,20,-148).curveTo(15,-130,15.5,-114.2).curveTo(16.4,-87.1,20,-67).curveTo(22.5,-52.7,27.4,-37.2).curveTo(33.9,-16.7,35,-12.5).curveTo(38.7,2.2,39.7,19.4).curveTo(40.7,34.7,39.7,43.8).curveTo(39.1,49.3,36.7,58.2).curveTo(31.2,78.5,30.6,111.7).curveTo(30.2,133,34.3,161).curveTo(35.6,170.2,43,210.6).curveTo(48.5,240.9,50.1,259.7).curveTo(52.4,286.4,49.1,307.8).curveTo(45.3,332.8,49.5,438.8).curveTo(51.5,491,54.3,538.2).lineTo(54.4,540).lineTo(-16.6,540).closePath();
	var mask_1_graphics_134 = new cjs.Graphics().moveTo(-16.6,540).lineTo(-16.6,537.1).curveTo(-15.9,495.2,-15.7,445.1).curveTo(-15.3,341.5,-17.8,297.7).curveTo(-20.3,253,-30.8,200.7).curveTo(-36.2,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34,62.5).curveTo(-32,49.7,-32.6,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.3,-41.3,-5.9).curveTo(-50,-37,-53.5,-68.5).curveTo(-55.9,-90.9,-51.9,-112.1).curveTo(-50.5,-119.3,-40.9,-153.8).curveTo(-32.3,-184.4,-27.9,-213.5).curveTo(-21.4,-256.1,-20.4,-311.1).lineTo(-16.6,-537.1).lineTo(-16.6,-540).lineTo(54.4,-540).lineTo(54.4,-538.3).curveTo(51.7,-425,50.7,-351.4).curveTo(49.2,-249.7,31.5,-186.2).curveTo(23,-158.9,20,-148).curveTo(15,-130,15.5,-114.2).curveTo(16.4,-87.1,20,-67).curveTo(22.5,-52.7,27.4,-37.2).curveTo(33.9,-16.7,35,-12.5).curveTo(38.7,2.2,39.7,19.4).curveTo(40.7,34.7,39.7,43.8).curveTo(39.1,49.3,36.7,58.2).curveTo(31.2,78.5,30.6,111.7).curveTo(30.2,133,34.3,161).curveTo(35.6,170.2,43,210.6).curveTo(48.5,240.9,50.1,259.7).curveTo(52.4,286.4,49.1,307.8).curveTo(45.3,332.8,49.5,438.8).curveTo(51.5,491,54.3,538.2).lineTo(54.4,540).lineTo(-16.6,540).closePath();
	var mask_1_graphics_135 = new cjs.Graphics().moveTo(-16.6,540).curveTo(-15.9,496.9,-15.7,445.1).curveTo(-15.3,341.5,-17.8,297.7).curveTo(-20.3,253,-30.8,200.7).curveTo(-36.2,175.1,-38.5,163.9).curveTo(-42.2,144.9,-43.4,133.1).curveTo(-44.7,120.5,-43,107.3).curveTo(-42,98.6,-38.7,84.6).curveTo(-35.1,69,-34,62.5).curveTo(-32,49.7,-32.6,38.2).curveTo(-33.3,26.5,-35.8,15.1).curveTo(-37.1,9.3,-41.3,-5.9).curveTo(-50,-37,-53.5,-68.5).curveTo(-55.9,-90.9,-51.9,-112.1).curveTo(-50.5,-119.3,-40.9,-153.8).curveTo(-32.3,-184.4,-27.9,-213.5).curveTo(-21.4,-256.1,-20.4,-311.1).curveTo(-19.1,-383.8,-16.6,-540).lineTo(54.4,-540).curveTo(51.7,-425.5,50.7,-351.4).curveTo(49.2,-249.7,31.5,-186.2).curveTo(23,-158.9,20,-148).curveTo(15,-130,15.5,-114.2).curveTo(16.4,-87.1,20,-67).curveTo(22.5,-52.7,27.4,-37.2).curveTo(33.9,-16.7,35,-12.5).curveTo(38.7,2.2,39.7,19.4).curveTo(40.7,34.7,39.7,43.8).curveTo(39.1,49.3,36.7,58.2).curveTo(31.2,78.5,30.6,111.7).curveTo(30.2,133,34.3,161).curveTo(35.6,170.2,43,210.6).curveTo(48.5,240.9,50.1,259.7).curveTo(52.4,286.4,49.1,307.8).curveTo(45.3,332.8,49.5,438.8).curveTo(51.6,491.9,54.4,540).closePath();

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
p.nominalBounds = new cjs.Rectangle(-2241.8,-540,2897.3,1453);


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
	var mask_graphics_0 = new cjs.Graphics().moveTo(261.9,272.7).lineTo(261.9,261.9).lineTo(272.7,261.9).lineTo(272.7,272.7).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(235.5,281.5).lineTo(235.5,235.5).lineTo(281.5,235.5).lineTo(281.5,281.5).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(234.8,281.7).lineTo(234.8,234.8).lineTo(281.7,234.8).lineTo(281.7,281.7).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(232.9,282.3).lineTo(232.9,232.9).lineTo(282.3,232.9).lineTo(282.3,282.3).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(229.8,283.4).lineTo(229.8,229.8).lineTo(283.4,229.8).lineTo(283.4,283.4).closePath();
	var mask_graphics_26 = new cjs.Graphics().moveTo(225.6,284.8).lineTo(225.6,225.6).lineTo(284.8,225.6).lineTo(284.8,284.8).closePath();
	var mask_graphics_27 = new cjs.Graphics().moveTo(220.3,286.5).lineTo(220.3,220.3).lineTo(286.5,220.3).lineTo(286.5,286.5).closePath();
	var mask_graphics_28 = new cjs.Graphics().moveTo(213.9,288.7).lineTo(213.9,213.9).lineTo(288.7,213.9).lineTo(288.7,288.7).closePath();
	var mask_graphics_29 = new cjs.Graphics().moveTo(206.4,291.1).lineTo(206.4,206.4).lineTo(291.1,206.4).lineTo(291.1,291.1).closePath();
	var mask_graphics_30 = new cjs.Graphics().moveTo(198.1,293.9).lineTo(198.1,198.1).lineTo(293.9,198.1).lineTo(293.9,293.9).closePath();
	var mask_graphics_31 = new cjs.Graphics().moveTo(188.8,297).lineTo(188.8,188.8).lineTo(297,188.8).lineTo(297,297).closePath();
	var mask_graphics_32 = new cjs.Graphics().moveTo(178.6,300.3).lineTo(178.6,178.6).lineTo(300.3,178.6).lineTo(300.3,300.3).closePath();
	var mask_graphics_33 = new cjs.Graphics().moveTo(167.6,304).lineTo(167.6,167.6).lineTo(304,167.6).lineTo(304,304).closePath();
	var mask_graphics_34 = new cjs.Graphics().moveTo(155.9,307.9).lineTo(155.9,155.9).lineTo(307.9,155.9).lineTo(307.9,307.9).closePath();
	var mask_graphics_35 = new cjs.Graphics().moveTo(143.4,312).lineTo(143.4,143.4).lineTo(312,143.4).lineTo(312,312).closePath();
	var mask_graphics_36 = new cjs.Graphics().moveTo(130.2,316.4).lineTo(130.2,130.2).lineTo(316.4,130.2).lineTo(316.4,316.4).closePath();
	var mask_graphics_37 = new cjs.Graphics().moveTo(116.3,321).lineTo(116.3,116.3).lineTo(321,116.3).lineTo(321,321).closePath();
	var mask_graphics_38 = new cjs.Graphics().moveTo(101.8,325.8).lineTo(101.8,101.8).lineTo(325.8,101.8).lineTo(325.8,325.8).closePath();
	var mask_graphics_39 = new cjs.Graphics().moveTo(86.8,330.8).lineTo(86.8,86.8).lineTo(330.8,86.8).lineTo(330.8,330.8).closePath();
	var mask_graphics_40 = new cjs.Graphics().moveTo(71.3,335.9).lineTo(71.3,71.3).lineTo(335.9,71.3).lineTo(335.9,335.9).closePath();
	var mask_graphics_41 = new cjs.Graphics().moveTo(55.2,341.2).lineTo(55.2,55.2).lineTo(341.2,55.2).lineTo(341.2,341.2).closePath();
	var mask_graphics_42 = new cjs.Graphics().moveTo(38.7,346.7).lineTo(38.7,38.7).lineTo(346.7,38.7).lineTo(346.7,346.7).closePath();
	var mask_graphics_43 = new cjs.Graphics().moveTo(21.9,352.3).lineTo(21.9,21.9).lineTo(352.3,21.9).lineTo(352.3,352.3).closePath();
	var mask_graphics_44 = new cjs.Graphics().moveTo(4.6,358).lineTo(4.6,4.6).lineTo(358,4.6).lineTo(358,358).closePath();
	var mask_graphics_45 = new cjs.Graphics().moveTo(-12.9,363.8).lineTo(-12.9,-12.9).lineTo(363.8,-12.9).lineTo(363.8,363.8).closePath();
	var mask_graphics_46 = new cjs.Graphics().moveTo(-30.8,369.7).lineTo(-30.8,-30.8).lineTo(369.7,-30.8).lineTo(369.7,369.7).closePath();
	var mask_graphics_47 = new cjs.Graphics().moveTo(-48.9,375.7).lineTo(-48.9,-48.9).lineTo(375.7,-48.9).lineTo(375.7,375.7).closePath();
	var mask_graphics_48 = new cjs.Graphics().moveTo(-67.2,381.8).lineTo(-67.2,-67.2).lineTo(381.8,-67.2).lineTo(381.8,381.8).closePath();
	var mask_graphics_49 = new cjs.Graphics().moveTo(-85.6,387.9).lineTo(-85.6,-85.6).lineTo(387.9,-85.6).lineTo(387.9,387.9).closePath();
	var mask_graphics_50 = new cjs.Graphics().moveTo(-104.2,394).lineTo(-104.2,-104.2).lineTo(394,-104.2).lineTo(394,394).closePath();
	var mask_graphics_51 = new cjs.Graphics().moveTo(-122.8,400.2).lineTo(-122.8,-122.8).lineTo(400.2,-122.8).lineTo(400.2,400.2).closePath();
	var mask_graphics_52 = new cjs.Graphics().moveTo(-141.5,406.4).lineTo(-141.5,-141.5).lineTo(406.4,-141.5).lineTo(406.4,406.4).closePath();
	var mask_graphics_53 = new cjs.Graphics().moveTo(-160.2,412.6).lineTo(-160.2,-160.2).lineTo(412.6,-160.2).lineTo(412.6,412.6).closePath();
	var mask_graphics_54 = new cjs.Graphics().moveTo(-178.9,418.8).lineTo(-178.9,-178.9).lineTo(418.8,-178.9).lineTo(418.8,418.8).closePath();
	var mask_graphics_55 = new cjs.Graphics().moveTo(-197.5,425).lineTo(-197.5,-197.5).lineTo(425,-197.5).lineTo(425,425).closePath();
	var mask_graphics_56 = new cjs.Graphics().moveTo(-216,431.1).lineTo(-216,-216).lineTo(431.1,-216).lineTo(431.1,431.1).closePath();
	var mask_graphics_57 = new cjs.Graphics().moveTo(-234.4,437.2).lineTo(-234.4,-234.4).lineTo(437.2,-234.4).lineTo(437.2,437.2).closePath();
	var mask_graphics_58 = new cjs.Graphics().moveTo(-252.6,443.2).lineTo(-252.6,-252.6).lineTo(443.2,-252.6).lineTo(443.2,443.2).closePath();
	var mask_graphics_59 = new cjs.Graphics().moveTo(-270.6,449.2).lineTo(-270.6,-270.6).lineTo(449.2,-270.6).lineTo(449.2,449.2).closePath();
	var mask_graphics_60 = new cjs.Graphics().moveTo(-288.3,455).lineTo(-288.3,-288.3).lineTo(455,-288.3).lineTo(455,455).closePath();
	var mask_graphics_61 = new cjs.Graphics().moveTo(-305.7,460.8).lineTo(-305.7,-305.7).lineTo(460.8,-305.7).lineTo(460.8,460.8).closePath();
	var mask_graphics_62 = new cjs.Graphics().moveTo(-322.8,466.5).lineTo(-322.8,-322.8).lineTo(466.5,-322.8).lineTo(466.5,466.5).closePath();
	var mask_graphics_63 = new cjs.Graphics().moveTo(-339.5,472).lineTo(-339.5,-339.5).lineTo(472,-339.5).lineTo(472,472).closePath();
	var mask_graphics_64 = new cjs.Graphics().moveTo(-355.8,477.4).lineTo(-355.8,-355.8).lineTo(477.4,-355.8).lineTo(477.4,477.4).closePath();
	var mask_graphics_65 = new cjs.Graphics().moveTo(-371.7,482.7).lineTo(-371.7,-371.7).lineTo(482.7,-371.7).lineTo(482.7,482.7).closePath();
	var mask_graphics_66 = new cjs.Graphics().moveTo(-387.1,487.8).lineTo(-387.1,-387.1).lineTo(487.8,-387.1).lineTo(487.8,487.8).closePath();
	var mask_graphics_67 = new cjs.Graphics().moveTo(-402,492.7).lineTo(-402,-402).lineTo(492.7,-402).lineTo(492.7,492.7).closePath();
	var mask_graphics_68 = new cjs.Graphics().moveTo(-416.3,497.4).lineTo(-416.3,-416.3).lineTo(497.4,-416.3).lineTo(497.4,497.4).closePath();
	var mask_graphics_69 = new cjs.Graphics().moveTo(-430,502).lineTo(-430,-430).lineTo(502,-430).lineTo(502,502).closePath();
	var mask_graphics_70 = new cjs.Graphics().moveTo(-443.2,506.4).lineTo(-443.2,-443.2).lineTo(506.4,-443.2).lineTo(506.4,506.4).closePath();
	var mask_graphics_71 = new cjs.Graphics().moveTo(-455.6,510.5).lineTo(-455.6,-455.6).lineTo(510.5,-455.6).lineTo(510.5,510.5).closePath();
	var mask_graphics_72 = new cjs.Graphics().moveTo(-467.4,514.4).lineTo(-467.4,-467.4).lineTo(514.4,-467.4).lineTo(514.4,514.4).closePath();
	var mask_graphics_73 = new cjs.Graphics().moveTo(-478.5,518).lineTo(-478.5,-478.5).lineTo(518,-478.5).lineTo(518,518).closePath();
	var mask_graphics_74 = new cjs.Graphics().moveTo(-488.7,521.4).lineTo(-488.7,-488.7).lineTo(521.4,-488.7).lineTo(521.4,521.4).closePath();
	var mask_graphics_75 = new cjs.Graphics().moveTo(-498.2,524.6).lineTo(-498.2,-498.2).lineTo(524.6,-498.2).lineTo(524.6,524.6).closePath();
	var mask_graphics_76 = new cjs.Graphics().moveTo(-506.8,527.4).lineTo(-506.8,-506.8).lineTo(527.4,-506.8).lineTo(527.4,527.4).closePath();
	var mask_graphics_77 = new cjs.Graphics().moveTo(-514.6,530).lineTo(-514.6,-514.6).lineTo(530,-514.6).lineTo(530,530).closePath();
	var mask_graphics_78 = new cjs.Graphics().moveTo(-521.4,532.3).lineTo(-521.4,-521.4).lineTo(532.3,-521.4).lineTo(532.3,532.3).closePath();
	var mask_graphics_79 = new cjs.Graphics().moveTo(-527.3,534.2).lineTo(-527.3,-527.3).lineTo(534.2,-527.3).lineTo(534.2,534.2).closePath();
	var mask_graphics_80 = new cjs.Graphics().moveTo(-532.2,535.8).lineTo(-532.2,-532.2).lineTo(535.8,-532.2).lineTo(535.8,535.8).closePath();
	var mask_graphics_81 = new cjs.Graphics().moveTo(-536.1,537.1).lineTo(-536.1,-536.1).lineTo(537.1,-536.1).lineTo(537.1,537.1).closePath();
	var mask_graphics_82 = new cjs.Graphics().moveTo(-538.5,538.5).lineTo(-538.5,-538.5).lineTo(538.5,-538.5).lineTo(538.5,538.5).closePath();
	var mask_graphics_83 = new cjs.Graphics().moveTo(-539.6,539.6).lineTo(-539.6,-539.6).lineTo(539.6,-539.6).lineTo(539.6,539.6).closePath();
	var mask_graphics_84 = new cjs.Graphics().moveTo(-540,540).lineTo(-540,-540).lineTo(540,-540).lineTo(540,540).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:272.6735,y:272.6735}).wait(22).to({graphics:mask_graphics_22,x:281.5109,y:281.5109}).wait(1).to({graphics:mask_graphics_23,x:281.7234,y:281.7234}).wait(1).to({graphics:mask_graphics_24,x:282.3497,y:282.3497}).wait(1).to({graphics:mask_graphics_25,x:283.3736,y:283.3736}).wait(1).to({graphics:mask_graphics_26,x:284.7789,y:284.7789}).wait(1).to({graphics:mask_graphics_27,x:286.5497,y:286.5497}).wait(1).to({graphics:mask_graphics_28,x:288.6704,y:288.6704}).wait(1).to({graphics:mask_graphics_29,x:291.1253,y:291.1253}).wait(1).to({graphics:mask_graphics_30,x:293.8991,y:293.8991}).wait(1).to({graphics:mask_graphics_31,x:296.9767,y:296.9767}).wait(1).to({graphics:mask_graphics_32,x:300.3429,y:300.3429}).wait(1).to({graphics:mask_graphics_33,x:303.9831,y:303.9831}).wait(1).to({graphics:mask_graphics_34,x:307.8823,y:307.8823}).wait(1).to({graphics:mask_graphics_35,x:312.0262,y:312.0262}).wait(1).to({graphics:mask_graphics_36,x:316.4003,y:316.4003}).wait(1).to({graphics:mask_graphics_37,x:320.9904,y:320.9904}).wait(1).to({graphics:mask_graphics_38,x:325.7822,y:325.7822}).wait(1).to({graphics:mask_graphics_39,x:330.7618,y:330.7618}).wait(1).to({graphics:mask_graphics_40,x:335.9154,y:335.9154}).wait(1).to({graphics:mask_graphics_41,x:341.2291,y:341.2291}).wait(1).to({graphics:mask_graphics_42,x:346.6893,y:346.6893}).wait(1).to({graphics:mask_graphics_43,x:352.2825,y:352.2825}).wait(1).to({graphics:mask_graphics_44,x:357.9952,y:357.9952}).wait(1).to({graphics:mask_graphics_45,x:363.8141,y:363.8141}).wait(1).to({graphics:mask_graphics_46,x:369.726,y:369.726}).wait(1).to({graphics:mask_graphics_47,x:375.7177,y:375.7177}).wait(1).to({graphics:mask_graphics_48,x:381.7761,y:381.7761}).wait(1).to({graphics:mask_graphics_49,x:387.8882,y:387.8882}).wait(1).to({graphics:mask_graphics_50,x:394.0413,y:394.0413}).wait(1).to({graphics:mask_graphics_51,x:400.2223,y:400.2223}).wait(1).to({graphics:mask_graphics_52,x:406.4187,y:406.4187}).wait(1).to({graphics:mask_graphics_53,x:412.6176,y:412.6176}).wait(1).to({graphics:mask_graphics_54,x:418.8065,y:418.8065}).wait(1).to({graphics:mask_graphics_55,x:424.9728,y:424.9728}).wait(1).to({graphics:mask_graphics_56,x:431.104,y:431.104}).wait(1).to({graphics:mask_graphics_57,x:437.1876,y:437.1876}).wait(1).to({graphics:mask_graphics_58,x:443.2113,y:443.2113}).wait(1).to({graphics:mask_graphics_59,x:449.1626,y:449.1626}).wait(1).to({graphics:mask_graphics_60,x:455.0293,y:455.0293}).wait(1).to({graphics:mask_graphics_61,x:460.799,y:460.799}).wait(1).to({graphics:mask_graphics_62,x:466.4596,y:466.4596}).wait(1).to({graphics:mask_graphics_63,x:471.9988,y:471.9988}).wait(1).to({graphics:mask_graphics_64,x:477.4044,y:477.4044}).wait(1).to({graphics:mask_graphics_65,x:482.6643,y:482.6643}).wait(1).to({graphics:mask_graphics_66,x:487.7664,y:487.7664}).wait(1).to({graphics:mask_graphics_67,x:492.6984,y:492.6984}).wait(1).to({graphics:mask_graphics_68,x:497.4484,y:497.4484}).wait(1).to({graphics:mask_graphics_69,x:502.0042,y:502.0042}).wait(1).to({graphics:mask_graphics_70,x:506.3537,y:506.3537}).wait(1).to({graphics:mask_graphics_71,x:510.485,y:510.485}).wait(1).to({graphics:mask_graphics_72,x:514.3858,y:514.3858}).wait(1).to({graphics:mask_graphics_73,x:518.0442,y:518.0442}).wait(1).to({graphics:mask_graphics_74,x:521.4481,y:521.4481}).wait(1).to({graphics:mask_graphics_75,x:524.5854,y:524.5854}).wait(1).to({graphics:mask_graphics_76,x:527.444,y:527.444}).wait(1).to({graphics:mask_graphics_77,x:530.0118,y:530.0118}).wait(1).to({graphics:mask_graphics_78,x:532.2767,y:532.2767}).wait(1).to({graphics:mask_graphics_79,x:534.2267,y:534.2267}).wait(1).to({graphics:mask_graphics_80,x:535.8494,y:535.8494}).wait(1).to({graphics:mask_graphics_81,x:537.1329,y:537.1329}).wait(1).to({graphics:mask_graphics_82,x:537.6569,y:537.6569}).wait(1).to({graphics:mask_graphics_83,x:537.6518,y:537.6518}).wait(1).to({graphics:mask_graphics_84,x:540,y:540}).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-986,-230.8,3912.8,1310.8);


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
		var COLOR = 4;
		var version = "do";
		//version = "do";
		var COLOR_VERSION = 2;
		var self= this;
		
		var WIDTH = 300;
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
		if(version == "do") COLOR_VERSION = 2; 
		 
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
				
				for(var i = 1; i <= 2; i++){
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
	this.copyDo.setTransform(158,72.85,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.copyDo).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(158,37.75);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(157,51);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.wlogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(224.85,232.5,0.5627,0.5628,0,0,0,88.6,13.3);
	this.whiteLogo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(175.95,225.6,0.6638,0.6637,0,0,0,1.4,0.9);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(190.35,99,0.4686,0.4683,0,0,0,5.1,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// crowbar
	this.crowbar = new lib.crowbarMC();
	this.crowbar.name = "crowbar";
	this.crowbar.setTransform(113,160.45,0.1153,0.1151,0,0,0,902.2,544.9);

	this.timeline.addTween(cjs.Tween.get(this.crowbar).wait(1));

	// cta_do
	this.ctaDo = new lib.ctado();
	this.ctaDo.name = "ctaDo";
	this.ctaDo.setTransform(56,219.55,0.7185,0.7188,0,0,0,50.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.ctaDo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(-166.05,202.95,0.7538,0.7541);

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
	this.largeshape.setTransform(150.1,125.1,0.0174,0.0174,0,0,0,5.8,5.8);
	this.largeshape.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largeshape).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(0,0,0,0)").setStrokeStyle(1,1,1,3,true).moveTo(-160,-135).lineTo(160,-135).lineTo(160,135).lineTo(-160,135).closePath();
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-160,135).lineTo(-160,-135).lineTo(160,-135).lineTo(160,135).closePath();
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,125,374.79999999999995,475);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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