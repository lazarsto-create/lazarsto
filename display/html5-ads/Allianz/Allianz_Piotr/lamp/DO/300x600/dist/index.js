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



(lib.crowbar = function() {
	this.initialize(img.crowbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,98);


(lib.lamppost = function() {
	this.initialize(img.lamppost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,855);


(lib.lightglass = function() {
	this.initialize(img.lightglass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,60);


(lib.shadow2 = function() {
	this.initialize(img.shadow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,335);


(lib.tiretrack = function() {
	this.initialize(img.tiretrack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,722,602);// helper functions:

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


(lib.tracks = function(mode,startPosition,loop,reversed) {
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
	this.frame_88 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(13));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_40 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_41 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_42 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_43 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_44 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_45 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_46 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_47 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_48 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_49 = new cjs.Graphics().p("AGVBWIymhKIiPAUIgsl7IWDDeIIWBZIkiFYIjLhCIhhBqg");
	var mask_graphics_50 = new cjs.Graphics().p("AE3BPIymg2IiQAUIgsl7IZBCpIIWBZIknFfIlZguIhhBqg");
	var mask_graphics_51 = new cjs.Graphics().p("ADaBKIymgiIiSATIgsl7Ib/B0IIWBZIksFmInmgcIhiBqg");
	var mask_graphics_52 = new cjs.Graphics().p("AB8BEIymgPIiTATIgsl8Ie+BAIIVBZIkyFtIpzgIIhhBrg");
	var mask_graphics_53 = new cjs.Graphics().p("AAeA+IymAGIiUASIgsl8MAh8AALIIVBZIk3FzIsAAMIhiBqg");
	var mask_graphics_54 = new cjs.Graphics().p("Ag+BNIynAaIiWARIgtl8MAk7gAqIIWBZIk9F7IuOAeIhhBrg");
	var mask_graphics_55 = new cjs.Graphics().p("AicBiIynAtIiYASIgsl9MAn5gBfIIWBZIlDGCIwbAxIhhBrg");
	var mask_graphics_56 = new cjs.Graphics().p("Aj6B2IynBCIiZARIgsl+MAq3gCTIIWBZIlIGIIyoBGIhiBqg");
	var mask_graphics_57 = new cjs.Graphics().p("AlYCLIynBVIiaAQIgsl9MAt1gDIIIWBZIlOGPI01BZIhhBqg");
	var mask_graphics_58 = new cjs.Graphics().p("Al9CvIyqCOIirAMIgsmAMAvogEeIIVBZIlNGPI02BZIhhBqg");
	var mask_graphics_59 = new cjs.Graphics().p("A83gHMAxagF0IIVBZIlNGPI02BZIhhBrIn3iDIysDIIi8AGg");
	var mask_graphics_60 = new cjs.Graphics().p("A9xAiMAzNgHJIIWBZIlOGPI01BZIhiBrIpVhfIywEBIjNABg");
	var mask_graphics_61 = new cjs.Graphics().p("A99HTIgsmKMA0+gIeIIWBZIlOGPI01BZIhiBqIqzg6IyzE6g");
	var mask_graphics_62 = new cjs.Graphics().p("A+3H9IgsmNMA2xgJ0IIWBZIlOGQI01BYIhiBrIsSgWIy1Fzg");
	var mask_graphics_63 = new cjs.Graphics().p("A/wImIgsmPMA4jgLKIIWBZIlOGQI01BYIhiBrItxAOIy4Gtg");
	var mask_graphics_64 = new cjs.Graphics().p("EggpAJQIgsmSMA6VgMgIIWBZIlOGQI01BZIhiBqIvPAzIy7Hmg");
	var mask_graphics_65 = new cjs.Graphics().p("EggpAJFIgsmuMA6VgMgIIWBZIlOGQI01BZIgMBqIvJBSIxxIVg");
	var mask_graphics_66 = new cjs.Graphics().p("EggpAI6IgsnLMA6VgMfIIWBZIlOGQI01BZIBKBqIvDByIwoJDg");
	var mask_graphics_67 = new cjs.Graphics().p("EggpAIvIgsnnMA6VgMgIIWBZIlOGRI01BYICgBrIu9CRIvfJyg");
	var mask_graphics_68 = new cjs.Graphics().p("EggpAIkIgsoDMA6VgMgIIWBZIlOGRI01BYID1BrIu2CwIuVKig");
	var mask_graphics_69 = new cjs.Graphics().p("EggpAIZIgsoeMA6VgMhIIWBZIlOGQI01BZIFLBrIuwDPItMLRg");
	var mask_graphics_70 = new cjs.Graphics().p("EggpAIOIgso6MA6VgMhIIWBZIlOGQI01BZIGhBrIurDuIsBMAg");
	var mask_graphics_71 = new cjs.Graphics().p("EggpAIDIgspXMA6VgMgIIWBZIlOGQI01BZIH2BqIulEPIq3Mug");
	var mask_graphics_72 = new cjs.Graphics().p("EggpAHcIgspXMA6VgMhIIWBZIlOGRI01BYIJ7CMItqEsIpWM/g");
	var mask_graphics_73 = new cjs.Graphics().p("EggpAG1IgspXMA6VgMhIIWBZIlOGQI01BZIL/CuIsuFJIn2NOg");
	var mask_graphics_74 = new cjs.Graphics().p("EggpAGNIgspWMA6VgMhIIWBZIlOGQI01BZIODDPIrzFnImVNdg");
	var mask_graphics_75 = new cjs.Graphics().p("EggpAFmIgspXMA6VgMgIIWBZIlOGQI01BZIQIDxIq5GDIkzNtg");
	var mask_graphics_76 = new cjs.Graphics().p("EggpAE/IgspXMA6VgMhIIWBZIlOGRI01BYISMETIp8GgIjUN+g");
	var mask_graphics_77 = new cjs.Graphics().p("EggpAEYIgspXMA6VgMhIIWBZIlOGQI01BZIUQE1IpBG9IhyONg");
	var mask_graphics_78 = new cjs.Graphics().p("EggpADwIgspWMA6VgMhIIWBZIlOGQI01BZIWVFWIoHHbIgQOcg");
	var mask_graphics_79 = new cjs.Graphics().p("EggpADJIgspXMA6VgMgIIWBZIlOGQI01BZIYZF4InLH3IBROsg");
	var mask_graphics_80 = new cjs.Graphics().p("Egg2ACiIgspXMA6VgMhIIWBZIlOGRI01BYIadGaImQIUICyO8g");
	var mask_graphics_81 = new cjs.Graphics().p("Egj+ACjIgsprMA6VgMgIIWBZIlOGQI01BZMAgtAG0ImQIUICxPHg");
	var mask_graphics_82 = new cjs.Graphics().p("EgnGACjIgsp+MA6VgMgIIWBZIlOGQI01BZMAm9AHPImQIUICxPSg");
	var mask_graphics_83 = new cjs.Graphics().p("EgqOACkIgsqRMA6WgMhIIVBZIlNGQI01BZMAtMAHpImQIVICxPdg");
	var mask_graphics_84 = new cjs.Graphics().p("EgtVACkIgsqkMA6VgMhIIWBZIlOGQI00BZMAzaAIEImPIVICxPog");
	var mask_graphics_85 = new cjs.Graphics().p("EgwdAClIgsq4MA6VgMhIIWBZIlOGRI00BYMA5qAIfImQIVICyPyg");
	var mask_graphics_86 = new cjs.Graphics().p("EgzlAClIgsrLMA6VgMhIIWBZIlOGRI00BYMA/6AI6ImQIUICyP+g");
	var mask_graphics_87 = new cjs.Graphics().p("Eg2tAClIgsreMA6VgMgIIWBZIlOGQI00BZMBGKAJUImQIUICxQJg");
	var mask_graphics_88 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_89 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_90 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_91 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_92 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_95 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_96 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_97 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_98 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_99 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");
	var mask_graphics_100 = new cjs.Graphics().p("Eg51AClIgsrwMA6XgMhIIUBZIlNGQI01BZMBMaAJuImQIVICxQUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_40,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_41,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_42,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_43,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_44,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_45,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_46,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_47,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_48,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_49,x:60.575,y:812.875}).wait(1).to({graphics:mask_graphics_50,x:51.05,y:816.85}).wait(1).to({graphics:mask_graphics_51,x:41.55,y:820.8}).wait(1).to({graphics:mask_graphics_52,x:32.025,y:824.75}).wait(1).to({graphics:mask_graphics_53,x:22.525,y:828.725}).wait(1).to({graphics:mask_graphics_54,x:13,y:830.575}).wait(1).to({graphics:mask_graphics_55,x:3.475,y:831.9}).wait(1).to({graphics:mask_graphics_56,x:-6.025,y:833.2}).wait(1).to({graphics:mask_graphics_57,x:-15.55,y:834.525}).wait(1).to({graphics:mask_graphics_58,x:-21.275,y:834.525}).wait(1).to({graphics:mask_graphics_59,x:-26.975,y:838.275}).wait(1).to({graphics:mask_graphics_60,x:-32.7,y:842.7}).wait(1).to({graphics:mask_graphics_61,x:-38.4,y:847.325}).wait(1).to({graphics:mask_graphics_62,x:-44.125,y:852}).wait(1).to({graphics:mask_graphics_63,x:-49.825,y:856.7}).wait(1).to({graphics:mask_graphics_64,x:-55.55,y:861.375}).wait(1).to({graphics:mask_graphics_65,x:-55.55,y:865.3}).wait(1).to({graphics:mask_graphics_66,x:-55.55,y:869.225}).wait(1).to({graphics:mask_graphics_67,x:-55.55,y:873.15}).wait(1).to({graphics:mask_graphics_68,x:-55.55,y:877.05}).wait(1).to({graphics:mask_graphics_69,x:-55.55,y:880.975}).wait(1).to({graphics:mask_graphics_70,x:-55.55,y:884.9}).wait(1).to({graphics:mask_graphics_71,x:-55.55,y:888.825}).wait(1).to({graphics:mask_graphics_72,x:-55.55,y:892.75}).wait(1).to({graphics:mask_graphics_73,x:-55.55,y:896.675}).wait(1).to({graphics:mask_graphics_74,x:-55.55,y:900.6}).wait(1).to({graphics:mask_graphics_75,x:-55.55,y:904.525}).wait(1).to({graphics:mask_graphics_76,x:-55.55,y:908.45}).wait(1).to({graphics:mask_graphics_77,x:-55.55,y:912.375}).wait(1).to({graphics:mask_graphics_78,x:-55.55,y:916.3}).wait(1).to({graphics:mask_graphics_79,x:-55.55,y:920.225}).wait(1).to({graphics:mask_graphics_80,x:-54.225,y:924.15}).wait(1).to({graphics:mask_graphics_81,x:-34.25,y:926.025}).wait(1).to({graphics:mask_graphics_82,x:-14.25,y:927.925}).wait(1).to({graphics:mask_graphics_83,x:5.725,y:929.8}).wait(1).to({graphics:mask_graphics_84,x:25.7,y:931.675}).wait(1).to({graphics:mask_graphics_85,x:45.675,y:933.55}).wait(1).to({graphics:mask_graphics_86,x:65.675,y:935.45}).wait(1).to({graphics:mask_graphics_87,x:85.65,y:937.325}).wait(1).to({graphics:mask_graphics_88,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_89,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_90,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_91,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_92,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_93,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_94,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_95,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_96,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_97,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_98,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_99,x:105.625,y:939.2}).wait(1).to({graphics:mask_graphics_100,x:105.625,y:939.2}).wait(1));

	// tracks
	this.instance = new lib.tiretrack();
	this.instance.setTransform(-441,122,2,2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},55).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.9,0,749.0999999999999,1078.1);


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
	this.shape.graphics.f("#C4B2CD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.shadowc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shadow2();
	this.instance.setTransform(-444,-586,3.4998,3.4998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadowc, new cjs.Rectangle(-444,-586,889,1172.5), null);


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
	this.shape.graphics.f("#F86200").s().p("AgNA5IAAg8IgKAAIAAgQIAKAAIAAgLQAAgNAGgGQAHgHAKAAQAJAAAFADIgDAOQgDgBgFAAQgFAAgDACQgCADAAAGIAAAKIATAAIAAAQIgTAAIAAA8g");
	this.shape.setTransform(48.675,11.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86200").s().p("AgUAjQgIgFgEgJQgFgJAAgMQAAgLAFgJQAEgJAIgFQAIgFAKAAQAPAAAKANIAAgLIAPAAIAABLIgPAAIAAgLQgKANgPAAQgKAAgIgFgAgOgQQgHAGABAKQgBALAHAHQAGAGAIAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgGgKAAQgIAAgGAHg");
	this.shape_1.setTransform(41.2,13.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F86200").s().p("AgHArQgGgGAAgLIAAgmIgKAAIAAgPIAKAAIAAgSIAQgEIAAAWIAUAAIAAAPIgUAAIAAAjQAAALAKAAIAJgCIACAPQgGADgIgBQgLAAgGgGg");
	this.shape_2.setTransform(30.625,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F86200").s().p("AgHA4IAAhMIAPAAIAABMgAgHglQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgCg");
	this.shape_3.setTransform(26.125,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F86200").s().p("AgaAeQgHgJAAgPIAAgsIAQAAIAAAoQAAALAFAFQAEAGAIAAQAIAAAFgGQAFgGAAgJIAAgpIAQAAIAABLIgPAAIAAgLQgEAHgGADQgHADgHAAQgNAAgIgJg");
	this.shape_4.setTransform(19.725,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86200").s().p("AgKA0QgFgFAAgLIAAhcIAQAAIAABZQAAAEACACQACACADAAIAGgBIACAPQgFACgHAAQgJAAgFgFg");
	this.shape_5.setTransform(13.65,11.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F86200").s().p("AgkAwIADgRQANAIAQAAQAKAAAHgFQAGgEABgGQAAgEgDgDQgDgDgEgCIgLgEQgLgEgHgDQgHgCgFgHQgFgGAAgKQAAgOAKgIQAKgIARAAQAJAAAJACQAIACAGADIgFARQgFgEgHgCQgHgCgHAAQgKAAgFAEQgFAEAAAGQAAAEADADQADAEAFABIALAFIARAHQAHACAFAGQAEAGAAAJQAAAPgLAJQgLAIgTAAQgTAAgNgHg");
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


(lib.lightglass_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lightglass();
	this.instance.setTransform(-11.5,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lightglass_1, new cjs.Rectangle(-11.5,-15,23,30), null);


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


(lib.halo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.rf(["#FFFCAD","#FFFCAD","rgba(255,252,173,0)"],[0,0.749,1],0,0,0,0,0,97.1).s().p("AqnKoQkakZAAmPQAAmOEakZQEZkaGOAAQGPAAEZEaQEaEZAAGOQAAGPkaEZQkZEamPAAQmOAAkZkag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.halo, new cjs.Rectangle(-96.2,-96.2,192.5,192.5), null);


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
	this.shape.setTransform(74.825,35.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD25C").s().p("AAhBJIAAhMQAAgUgIgKQgJgKgPAAQgPAAgJAKQgJAKAAATIAABNIggAAIAAiOIAeAAIAAAWQAGgMANgHQALgGAOAAQAZAAAPAQQAPARAAAeIAABSg");
	this.shape_1.setTransform(58.5,32.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD25C").s().p("AgOBpIAAiOIAdAAIAACOgAgOhGQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgFg");
	this.shape_2.setTransform(46.45,29.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD25C").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_3.setTransform(38.325,32.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_4.setTransform(24.175,33);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDD25C").s().p("AAbBpIgvg5IgPAQIAAApIgfAAIAAjRIAfAAIAACBIA7g+IAnAAIg/A/IBDBPg");
	this.shape_5.setTransform(9.525,29.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_6.setTransform(-7.125,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDD25C").s().p("Ag6BIIAAgZIBHhZIhEAAIAAgdIBvAAIAAAZIhHBZIBKAAIAAAdg");
	this.shape_7.setTransform(-21.925,32.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDD25C").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_8.setTransform(-33.425,32.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDD25C").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADASAMAJQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAHgPAFQgOAEgQAAQgVAAgSgJgAAlgNQgCgQgJgIQgKgKgPABQgOAAgKAIQgKAJgCAQIBIAAIAAAAg");
	this.shape_9.setTransform(-47.575,33);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDD25C").s().p("AgPBIIg6iPIAiAAIAnBrIAohrIAiAAIg6CPg");
	this.shape_10.setTransform(-62.925,32.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDD25C").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLAMAAAUQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgUgLgMQgMgNgSAAQgRAAgMANg");
	this.shape_11.setTransform(-78.775,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDD25C").s().p("AgOBRQgLgMAAgVIAAhGIgTAAIAAgdIATAAIAAgjIAegGIAAApIAmAAIAAAdIgmAAIAABBQAAAVATAAQAIAAAJgEIAEAcQgMAFgPAAQgUAAgMgMg");
	this.shape_12.setTransform(-92.125,31.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDD25C").s().p("AgxA5QgPgRAAgeIAAhSIAgAAIAABMQgBAUAJAKQAIAKAQAAQAPAAAJgKQAJgKAAgSIAAhOIAfAAIAACOIgdAAIAAgWQgHANgMAGQgMAGgOAAQgZAAgOgQg");
	this.shape_13.setTransform(-105.5,33.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDD25C").s().p("AgnBBQgPgJgIgRQgIgRAAgWQAAgVAIgRQAIgRAPgJQAPgKATAAQAdAAASAZIAAgWIAdAAIAACPIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcggQgLANAAATQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgUgLgMQgKgMgSAAQgSAAgLAMg");
	this.shape_14.setTransform(-122.825,32.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape.setTransform(87.875,2.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_1.setTransform(70.925,-0.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBJIAAhMQAAgUgIgKQgIgKgQAAQgPAAgJAKQgKAKAAATIAABNIgfAAIAAiOIAdAAIAAAWQAIgMALgHQAMgGAOAAQAaAAAOAQQAOARAAAeIAABSg");
	this.shape_2.setTransform(54.6,2.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_3.setTransform(38.225,2.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BAIAHgcQASAKAXAAQANABAHgFQAIgEAAgIQAAgGgHgEQgGgDgNgDIgYgJQgJgEgIgJQgGgJAAgOQAAgVANgLQAOgLAZAAQANAAAMADQAMADAJAEIgIAcQgRgJgUAAQgLAAgFADQgHAEAAAGQAAAIAIAEQAGADANAEQAPAEAKAEQAIAFAHAHQAHAIAAAOQAAAWgQAMQgQAMgbAAQgcAAgUgLg");
	this.shape_4.setTransform(24.1,2.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BAIAHgcQATAKAWAAQAMABAIgFQAHgEABgIQAAgGgHgEQgGgDgNgDIgYgJQgJgEgIgJQgGgJAAgOQAAgVANgLQAOgLAZAAQANAAAMADQAMADAJAEIgIAcQgRgJgUAAQgLAAgFADQgHAEAAAGQAAAIAIAEQAGADANAEQAPAEAKAEQAJAFAGAHQAHAIAAAOQAAAWgQAMQgRAMgaAAQgcAAgUgLg");
	this.shape_5.setTransform(11.6,2.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBBQgPgJgIgRQgIgRAAgWQAAgVAIgRQAIgRAPgJQAPgKATAAQAdAAASAZIAAgWIAdAAIAACPIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcggQgLANAAATQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgUgLgMQgKgMgSAAQgSAAgLAMg");
	this.shape_6.setTransform(-3.725,2.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBjIAAjCIAdAAIAAAVQASgZAdAAQATAAAPAKQAPAJAIARQAIARAAAXQAAAVgIAQQgIARgPAKQgPAJgTAAQgbAAgSgWIAABHgAgcg5QgLAMAAAWQAAAUALALQAKANASAAQARAAAMgNQALgMAAgTQAAgVgLgMQgMgNgRAAQgSAAgKAMg");
	this.shape_7.setTransform(-20.025,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBRQgLgMAAgVIAAhGIgTAAIAAgdIATAAIAAgjIAegGIAAApIAmAAIAAAdIgmAAIAABBQAAAVATAAQAIAAAJgEIAEAcQgMAFgPAAQgUAAgMgMg");
	this.shape_8.setTransform(-40.925,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BAIAHgcQATAKAWAAQANABAHgFQAIgEAAgIQgBgGgFgEQgHgDgNgDIgYgJQgJgEgIgJQgGgJgBgOQAAgVAPgLQAOgLAYAAQANAAAMADQAMADAJAEIgIAcQgQgJgWAAQgJAAgHADQgFAEAAAGQgBAIAIAEQAGADAOAEQAOAEAKAEQAIAFAHAHQAHAIAAAOQAAAWgQAMQgQAMgbAAQgcAAgUgLg");
	this.shape_9.setTransform(-52.15,2.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_10.setTransform(-66.225,2.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBSIAAAWIgdAAIAAjSIAfAAIAABWQASgWAbAAQATAAAPAKQAPAJAIARQAIAQAAAWQAAAWgIARQgIARgPAJQgPAKgTAAQgdAAgSgZgAgcAAQgLALAAAVQAAAVALAMQAKAMASAAQARAAAMgMQALgNAAgUQAAgUgLgMQgMgMgRAAQgSAAgKAMg");
	this.shape_11.setTransform(-82.175,-0.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBCQgRgJgJgRQgKgRAAgXQAAgVAJgRQAIgRAQgJQAPgKATAAQAUAAAPAJQAQAJAIARQAJAQAAAVIgBAMIhnAAQADARAMAKQAMAJASAAQAMAAAMgDQAMgEAJgGIAJAaQgKAIgPAEQgOAEgQAAQgVAAgSgJgAAlgOQgCgPgJgIQgKgKgPABQgOAAgKAIQgKAJgCAPIBIAAIAAAAg");
	this.shape_12.setTransform(-105.875,2.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBhQgPgJgIgRQgIgRAAgWQAAgWAIgQQAIgRAPgJQAPgKATAAQAbAAASAXIAAhXIAfAAIAADSIgdAAIAAgWQgSAZgdAAQgTAAgPgKgAgcAAQgLAMAAAUQAAAUALANQALAMASAAQASAAAKgMQALgMAAgVQAAgVgLgLQgKgMgSAAQgSAAgLAMg");
	this.shape_13.setTransform(-122.825,-0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("AgxA5QgPgRAAgeIAAhSIAfAAIAABMQAAAUAJAKQAIAKAQAAQAPAAAJgKQAJgKAAgSIAAhOIAfAAIAACOIgdAAIAAgWQgHANgMAGQgMAGgOAAQgZAAgOgQg");
	this.shape.setTransform(-28.2,-27.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLANAAATQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgTgLgNQgMgMgSAAQgRAAgMAMg");
	this.shape_1.setTransform(-44.675,-27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghCCIACgcIAIABQALAAAGgHQAGgHAAgQIAAiJIAeAAIAACMQAAAbgMAPQgNAOgYAAQgIAAgGgCgAAAhhQgEgGgBgJQABgIAEgGQAGgFAIAAQAJAAAGAFQAGAGgBAIQABAJgGAFQgGAGgJAAQgIAAgGgFg");
	this.shape_2.setTransform(-57.95,-28.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBJIAAiPIAdAAIAAAZQALgbAZAAQAKAAAIAEIgEAeQgHgCgIAAQgQAAgIAKQgJALAAAUIAABIg");
	this.shape_3.setTransform(-71.275,-27.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLANAAATQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgTgLgNQgMgMgSAAQgRAAgMAMg");
	this.shape_4.setTransform(-85.825,-27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBBQgQgJgJgRQgJgSAAgVQAAgVAJgRQAJgRAQgJQARgKAUAAQAVAAARAKQAQAJAJARQAJARAAAVQAAAVgJASQgJARgQAJQgRAKgVAAQgUAAgRgKgAgdggQgLANAAATQAAAUALANQALAMASAAQASAAAMgMQALgNAAgUQAAgTgLgNQgMgMgSAAQgRAAgMAMg");
	this.shape_5.setTransform(-102.375,-27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBkIhSjHIAkAAIA/CiIA/iiIAlAAIhTDHg");
	this.shape_6.setTransform(-120.8,-30.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copyDo_1, new cjs.Rectangle(-133,-50.8,266,101.69999999999999), null);


(lib.copy2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BRIAIgZQAKAFALADQALADAMAAQAVAAALgKQAMgLAAgVIAAgGQgRAVgZAAQgSAAgOgJQgOgJgIgPQgIgOAAgTQAAgUAIgPQAIgPAOgIQAOgJASAAQAbAAARAXIAAgVIAbAAIAAB3QAAAggTARQgTARghAAQgdAAgZgNgAgag3QgLALAAASQAAARALALQALAKAQABQARAAAKgLQAKgKAAgSQAAgSgKgMQgKgLgRAAQgQAAgLAMg");
	this.shape.setTransform(4.5,72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_1.setTransform(-10.725,69.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBiIAAiFIAcAAIAACFgAgNhCQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgIAAQgIAAgFgFg");
	this.shape_2.setTransform(-21.925,66.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBEIAAiFIAbAAIAAAXQALgZAXAAQAKAAAHADIgDAdQgHgDgIABQgOgBgIAKQgJAKABASIAABEg");
	this.shape_3.setTransform(-29.5,69.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA9QgQgIgKgQQgJgQAAgVQAAgUAJgPQAHgQAPgJQAOgJASAAQASAAAPAJQAPAIAHAPQAJAQgBATIAAAMIhgAAQACAQAMAIQALAJARAAQAKAAAMgDQALgDAJgGIAIAYQgKAHgNAEQgNAEgPAAQgVAAgPgJgAAjgMQgCgPgJgIQgJgIgPAAQgMAAgJAIQgKAIgCAPIBEAAIAAAAg");
	this.shape_4.setTransform(-42.7,69.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBiIgrg1IgPAPIAAAmIgdAAIAAjDIAdAAIAAB4IA3g6IAlAAIg6A8IA+BJg");
	this.shape_5.setTransform(-56.375,66.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdA9QgQgIgIgQQgJgQAAgVQAAgUAHgPQAIgQAPgJQAPgJARAAQASAAAPAJQAOAIAJAPQAHAQABATIgBAMIhgAAQADAQALAIQALAJARAAQALAAALgDQALgDAIgGIAJAYQgKAHgNAEQgNAEgQAAQgTAAgRgJgAAigMQgBgPgJgIQgJgIgOAAQgNAAgJAIQgJAIgDAPIBDAAIAAAAg");
	this.shape_6.setTransform(-71.9,69.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BDIAAgXIBChSIg/AAIAAgcIBnAAIAAAXIhCBTIBFAAIAAAbg");
	this.shape_7.setTransform(-85.675,69.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBEIAAiFIAbAAIAAAXQALgZAYAAQAJAAAIADIgFAdQgHgDgGABQgQgBgHAKQgJAKAAASIAABEg");
	this.shape_8.setTransform(-96.4,69.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA9QgQgIgIgQQgJgQAAgVQAAgUAIgPQAHgQAPgJQAPgJARAAQATAAAOAJQAOAIAJAPQAHAQABATIgBAMIhgAAQADAQALAIQALAJARAAQALAAALgDQALgDAIgGIAJAYQgKAHgNAEQgNAEgPAAQgUAAgRgJgAAjgMQgCgPgJgIQgJgIgOAAQgNAAgJAIQgJAIgDAPIBEAAIAAAAg");
	this.shape_9.setTransform(-109.6,69.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBDIg2iFIAfAAIAlBkIAmhkIAfAAIg2CFg");
	this.shape_10.setTransform(-123.925,69.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_4, new cjs.Rectangle(-133,-35.7,279,122.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AggAPIAAgdIBBAAIAAAdg");
	this.shape.setTransform(104.6,41.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA8IAGgbQASAKAVAAQALAAAIgEQAGgEABgHQgBgGgGgDQgFgDgMgEIgXgHQgJgEgGgIQgGgIgBgOQAAgTANgLQANgKAYAAQALAAALADQAMACAIAEIgHAaQgPgJgUAAQgJAAgGAEQgFADgBAHQABAHAGADQAGADAMAEQAOAEAJAEQAIADAGAHQAHAIAAANQgBAUgPAMQgOALgZAAQgbAAgSgKg");
	this.shape_1.setTransform(94.3,41.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBbQgOgJgIgQQgHgQgBgUQAAgVAJgOQAHgQAOgJQAOgJASABQAZAAARAUIAAhRIAdAAIAADEIgbAAIAAgUQgRAXgbgBQgSAAgOgIgAgaAAQgLAMAAASQAAATALAMQALALAQAAQARAAAKgLQAKgMAAgTQAAgUgKgKQgKgLgRAAQgQAAgLALg");
	this.shape_2.setTransform(80,38.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBiIAAiFIAcAAIAACFgAgNhCQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgIAAQgIAAgFgFg");
	this.shape_3.setTransform(69.125,38.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdA9QgPgIgKgQQgIgQgBgVQABgUAHgPQAJgQAOgJQAPgJARAAQASAAAPAJQAPAIAIAPQAHAQAAATIAAAMIhgAAQACAQAMAIQALAJARAAQAKAAAMgDQALgDAJgGIAIAYQgKAHgNAEQgOAEgPAAQgTAAgRgJgAAigMQgBgPgJgIQgJgIgPAAQgMAAgJAIQgJAIgDAPIBDAAIAAAAg");
	this.shape_4.setTransform(58.4,41.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBiIAAhIQAAgTgIgIQgHgJgPAAQgOAAgJAJQgIAJAAARIAABJIgdAAIAAjDIAdAAIAABQQAHgKAKgFQALgFALAAQAYAAAOAPQANAQAAAaIAABOg");
	this.shape_5.setTransform(43.475,38.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBiIgrg1IgPAPIAAAmIgdAAIAAjDIAdAAIAAB4IA3g6IAlAAIg6A8IA+BJg");
	this.shape_6.setTransform(29.175,38.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfB6IACgaIAIAAQAKAAAFgGQAGgGAAgPIAAiBIAcAAIAACEQAAAYgMAOQgLANgWAAQgJAAgFgBgAAAhbQgEgFAAgIQAAgIAEgFQAFgFAJAAQAHAAAGAFQAFAFABAIQgBAIgFAFQgGAFgHAAQgJAAgFgFg");
	this.shape_7.setTransform(16.35,41.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBiIAAiFIAcAAIAACFgAgNhCQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgIAAQgIAAgFgFg");
	this.shape_8.setTransform(11.075,38.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBbQgIgKAAgTIAAigIAcAAIAACbQAAAIADADQADAEAHAAQAGAAADgCIADAaQgHADgNAAQgRAAgIgIg");
	this.shape_9.setTransform(4.725,38.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcA9QgRgIgIgQQgKgQABgVQgBgUAJgPQAHgQAPgJQAPgJARAAQATAAAOAJQAPAIAHAPQAJAQgBATIAAAMIhgAAQACAQAMAIQALAJARAAQAKAAAMgDQALgDAJgGIAIAYQgKAHgNAEQgOAEgOAAQgVAAgPgJgAAjgMQgCgPgJgIQgJgIgPAAQgMAAgJAIQgKAIgCAPIBEAAIAAAAg");
	this.shape_10.setTransform(-7.25,41.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBiIgrg1IgPAPIAAAmIgdAAIAAjDIAdAAIAAB4IA3g6IAlAAIg6A8IA+BJg");
	this.shape_11.setTransform(-20.925,38.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA9QgOgJgIgQQgHgQAAgUQgBgUAJgPQAHgQAOgJQAOgJASABQAbAAARAWIAAgUIAbAAIAACFIgbAAIAAgUQgRAXgbgBQgSAAgOgIgAgagdQgLAMAAARQAAATALAMQALALAQAAQARAAAKgLQAJgMAAgTQAAgTgJgLQgKgLgRAAQgQAAgLAMg");
	this.shape_12.setTransform(-37.65,41.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBEIAAiFIAbAAIAAAYQAKgaAYAAQAIAAAIADIgEAdQgHgCgHgBQgPAAgHAKQgIAKAAASIAABEg");
	this.shape_13.setTransform(-49.45,41.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCBdIAAi2IAbAAIAAAUQARgXAcAAQASAAAOAJQANAJAIAQQAHAPAAAVQAAAUgHAPQgIAQgNAJQgOAIgSAAQgZAAgSgUIAABDgAgag1QgLALAAAUQAAATALALQAJALARAAQAQAAALgMQALgKAAgTQAAgTgLgMQgLgLgQAAQgRAAgJALg");
	this.shape_14.setTransform(-62.9,44.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxA8IAHgbQARAKAVAAQALAAAHgEQAIgEAAgHQAAgGgHgDQgFgDgMgEIgXgHQgJgEgGgIQgGgIgBgOQABgTANgLQANgKAXAAQALAAALADQALACAKAEIgIAaQgPgJgUAAQgJAAgGAEQgGADAAAHQAAAHAHADQAGADAMAEQAOAEAJAEQAIADAGAHQAHAIgBANQABAUgQAMQgPALgYAAQgbAAgSgKg");
	this.shape_15.setTransform(-77.4,41.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_16.setTransform(-90.775,41.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA9QgOgJgIgQQgIgQAAgUQABgUAHgPQAIgQAOgJQAOgJARABQAcAAAQAWIAAgUIAbAAIAACFIgbAAIAAgUQgQAXgcgBQgRAAgOgIgAgagdQgKAMAAARQAAATAKAMQALALAQAAQARAAAKgLQAJgMAAgTQAAgTgJgLQgKgLgRAAQgQAAgLAMg");
	this.shape_17.setTransform(-107.25,41.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA9QgOgJgIgQQgHgQgBgUQAAgUAJgPQAHgQAOgJQAOgJASABQAbAAARAWIAAgUIAbAAIAACFIgbAAIAAgUQgRAXgbgBQgSAAgOgIgAgagdQgLAMAAARQAAATALAMQALALAQAAQARAAAKgLQAKgMAAgTQAAgTgKgLQgKgLgRAAQgQAAgLAMg");
	this.shape_18.setTransform(-123.4,41.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_3, new cjs.Rectangle(-133,-35.7,279,94.4), null);


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
	this.shape.graphics.f("#003781").s().p("AgcA9QgQgIgKgQQgJgQAAgVQAAgUAJgPQAHgQAPgJQAOgJASAAQASAAAPAJQAPAIAHAPQAJAQgBATIAAAMIhgAAQACAQAMAIQALAJARAAQAKAAAMgDQALgDAJgGIAIAYQgKAHgNAEQgNAEgPAAQgVAAgPgJgAAjgMQgCgPgJgIQgJgIgPAAQgMAAgJAIQgKAIgCAPIBEAAIAAAAg");
	this.shape.setTransform(73.4,13.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgkBbQgOgJgIgPQgIgRABgUQAAgVAHgOQAIgQAOgJQAOgIARAAQAagBAQAVIAAhRIAdAAIAADEIgbAAIAAgUQgQAXgcgBQgRAAgOgIgAgaAAQgKAMAAASQAAATAKAMQALALAQAAQARAAAKgLQAJgLAAgUQAAgUgJgKQgKgLgRAAQgQAAgLALg");
	this.shape_1.setTransform(57.55,10.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_2.setTransform(42.325,13.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgcA9QgQgIgJgQQgKgQAAgVQAAgUAJgPQAHgQAPgJQAOgJASAAQASAAAPAJQAPAIAHAPQAJAQgBATIAAAMIhgAAQACAQAMAIQALAJARAAQAKAAAMgDQALgDAJgGIAIAYQgKAHgNAEQgNAEgPAAQgVAAgPgJgAAjgMQgCgPgJgIQgJgIgPAAQgMAAgJAIQgKAIgCAPIBEAAIAAAAg");
	this.shape_3.setTransform(27.05,13.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgyA8IAHgbQASAKAUAAQAMAAAHgEQAIgEgBgHQAAgGgFgDQgHgDgLgEIgXgHQgJgEgGgIQgHgIABgOQAAgTAMgLQANgKAXAAQAMAAAMADQAKACAKAEIgIAaQgQgJgTAAQgKAAgFAEQgGADABAHQAAAHAGADQAGADANAEQANAEAIAEQAJADAHAHQAFAIAAANQAAAUgOAMQgPALgaAAQgZAAgUgKg");
	this.shape_4.setTransform(13.8,13.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgyA8IAHgbQASAKAUAAQAMAAAHgEQAIgEgBgHQAAgGgFgDQgHgDgLgEIgXgHQgJgEgGgIQgHgIABgOQAAgTAMgLQANgKAXAAQAMAAAMADQAKACAKAEIgIAaQgQgJgTAAQgKAAgFAEQgGADABAHQAAAHAGADQAGADANAEQANAEAIAEQAJADAHAHQAFAIAAANQAAAUgOAMQgPALgaAAQgZAAgUgKg");
	this.shape_5.setTransform(2.1,13.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgkA9QgOgJgIgPQgIgRABgUQAAgUAHgPQAIgQAOgJQAOgIARAAQAcAAAQAWIAAgUIAbAAIAACFIgbAAIAAgUQgQAXgcgBQgRAAgOgIgAgageQgKANAAARQAAATAKAMQALALAQAAQARAAAKgLQAJgLAAgUQAAgTgJgLQgKgLgRAAQgQAAgLALg");
	this.shape_6.setTransform(-12.2,13.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AhBBdIAAi2IAbAAIAAAUQAQgXAcAAQASAAANAJQAOAJAIAQQAIAPgBAVQABAUgIAPQgIAQgOAJQgNAIgSAAQgaAAgQgUIAABDgAgbg1QgKALABAUQgBATAKALQALALAQAAQAQAAALgMQAKgKAAgTQAAgTgKgMQgLgLgQAAQgQAAgLALg");
	this.shape_7.setTransform(-27.4,16.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgMBMQgLgLAAgVIAAhBIgSAAIAAgbIASAAIAAggIAcgFIAAAlIAkAAIAAAbIgkAAIAAA9QAAAUASgBQAHAAAIgCIAEAaQgLADgOAAQgTABgKgLg");
	this.shape_8.setTransform(-46.925,12.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AgxA8IAGgbQASAKAVAAQALAAAIgEQAGgEABgHQgBgGgFgDQgHgDgLgEIgXgHQgJgEgGgIQgGgIAAgOQgBgTANgLQAOgKAWAAQAMAAALADQAMACAIAEIgHAaQgQgJgTAAQgJAAgGAEQgFADgBAHQABAHAGADQAGADAMAEQAOAEAIAEQAJADAGAHQAHAIAAANQgBAUgPAMQgPALgYAAQgaAAgTgKg");
	this.shape_9.setTransform(-57.45,13.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgdA9QgQgIgIgQQgJgQAAgVQAAgUAHgPQAIgQAPgJQAPgJARAAQASAAAPAJQAOAIAJAPQAHAQABATIgBAMIhgAAQADAQALAIQALAJARAAQALAAALgDQALgDAIgGIAJAYQgKAHgNAEQgNAEgQAAQgTAAgRgJgAAigMQgBgPgJgIQgJgIgOAAQgNAAgJAIQgJAIgDAPIBDAAIAAAAg");
	this.shape_10.setTransform(-70.55,13.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgmBNIAAAUIgbAAIAAjEIAdAAIAABRQAQgVAaABQASAAANAIQAOAJAIAQQAIAOgBAVQABAUgIARQgIAPgOAJQgNAIgSAAQgcABgQgXgAgbAAQgKAKABAUQgBAUAKALQALALAQAAQAQABALgMQAKgMAAgTQAAgSgKgMQgLgLgQAAQgQAAgLALg");
	this.shape_11.setTransform(-85.45,10.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgdA9QgPgIgKgQQgIgQgBgVQABgUAHgPQAJgQAOgJQAPgJARAAQASAAAPAJQAOAIAJAPQAHAQABATIgBAMIhgAAQACAQAMAIQALAJARAAQALAAALgDQALgDAIgGIAJAYQgKAHgNAEQgOAEgPAAQgUAAgQgJgAAigMQgBgPgJgIQgJgIgOAAQgNAAgJAIQgKAIgCAPIBDAAIAAAAg");
	this.shape_12.setTransform(-107.55,13.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgkBbQgOgJgIgPQgHgRgBgUQAAgVAJgOQAHgQAOgJQAOgIASAAQAZgBARAVIAAhRIAdAAIAADEIgbAAIAAgUQgRAXgbgBQgSAAgOgIgAgaAAQgLAMAAASQAAATALAMQALALAQAAQARAAAKgLQAKgLAAgUQAAgUgKgKQgKgLgRAAQgQAAgLALg");
	this.shape_13.setTransform(-123.4,10.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#003781").s().p("AguA1QgNgQAAgbIAAhNIAdAAIAABHQAAATAIAJQAHAJAPAAQAOAAAIgJQAJgKAAgRIAAhIIAdAAIAACFIgcAAIAAgVQgFAMgMAGQgLAFgNAAQgYAAgNgPg");
	this.shape.setTransform(-35.1,-13.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_1.setTransform(-50.475,-13.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgfB6IACgaIAIAAQAKAAAFgGQAGgGAAgPIAAiBIAcAAIAACEQAAAYgMAOQgLANgWAAQgJAAgFgBgAAAhbQgEgFAAgIQAAgIAEgFQAFgFAJAAQAHAAAGAFQAFAFABAIQgBAIgFAFQgGAFgHAAQgJAAgFgFg");
	this.shape_2.setTransform(-62.85,-14.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgnBEIAAiFIAbAAIAAAYQALgaAYAAQAJAAAIADIgFAdQgHgCgGgBQgQABgHAJQgJAKAAATIAABDg");
	this.shape_3.setTransform(-75.25,-13.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_4.setTransform(-88.825,-13.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_5.setTransform(-104.275,-13.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgPBeIhOi6IAjAAIA6CXIA7iXIAjAAIhOC6g");
	this.shape_6.setTransform(-121.5,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_1, new cjs.Rectangle(-133,-35.7,266,94.4), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003781").s().p("AgZBbQgGgFAAgKQAAgIAGgFQAFgGAJAAQAIAAAFAGQAGAFAAAIQAAAKgGAFQgFAGgIAAQgJAAgFgGgAgaAlIAAgDQAAgLAEgJQAEgIAGgGIAPgMQAMgIAFgFQAGgHAAgJQAAgLgJgHQgKgHgOAAQgMAAgKAEQgKAEgIAGIgJgbQAKgIANgEQAOgEAPgBQARAAAOAIQAOAGAIAMQAIAMAAAQQAAAMgEAJQgFAJgGAFIgRAMQgLAIgGAGQgFAGAAAJIAAADg");
	this.shape.setTransform(67.575,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_1.setTransform(53.775,45.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgIgQABgUQAAgUAHgPQAIgQAOgJQAOgJARABQAcgBAQAXIAAgUIAbAAIAACFIgbAAIAAgUQgQAXgcAAQgRgBgOgIgAgagdQgKALAAASQAAATAKAMQALAMAQAAQARAAAKgMQAJgMAAgTQAAgTgJgLQgKgLgRAAQgQAAgLAMg");
	this.shape_2.setTransform(37.3,45.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgHgQgBgUQAAgUAJgPQAHgQAOgJQAOgJASABQAbgBARAXIAAgUIAbAAIAACFIgbAAIAAgUQgRAXgbAAQgSgBgOgIgAgagdQgLALAAASQAAATALAMQALAMAQAAQARAAAKgMQAKgMAAgTQAAgTgKgLQgKgLgRAAQgQAAgLAMg");
	this.shape_3.setTransform(21.15,45.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgMBMQgLgLAAgVIAAhAIgSAAIAAgcIASAAIAAggIAcgFIAAAlIAkAAIAAAcIgkAAIAAA8QAAAUASAAQAHAAAIgDIAEAZQgLAFgOAAQgTgBgKgKg");
	this.shape_4.setTransform(8.775,43.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AgyA8IAHgbQASAKAUAAQAMAAAIgEQAGgEAAgHQAAgGgFgDQgHgDgLgEIgXgHQgJgEgGgIQgGgIAAgOQgBgTANgLQAOgKAWAAQAMAAAMADQAKACAJAEIgHAaQgQgJgTAAQgJAAgGAEQgFADgBAHQABAHAGADQAGADANAEQANAEAIAEQAJADAHAHQAFAIABANQAAAUgQAMQgPALgZAAQgZAAgUgKg");
	this.shape_5.setTransform(-1.75,45.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AgSBaQgIgIAAgUIAAigIAcAAIAACbQAAAIADADQADAEAHAAQAGAAADgCIADAaQgHADgNAAQgRAAgIgJg");
	this.shape_6.setTransform(-16.675,42.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgIgQAAgUQABgUAHgPQAIgQAOgJQAOgJARABQAcgBAQAXIAAgUIAbAAIAACFIgbAAIAAgUQgQAXgcAAQgRgBgOgIgAgagdQgKALAAASQAAATAKAMQALAMAQAAQARAAAKgMQAJgMAAgTQAAgTgJgLQgKgLgRAAQgQAAgLAMg");
	this.shape_7.setTransform(-29.85,45.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgHgQgBgUQAAgUAJgPQAHgQAOgJQAOgJASABQAbgBARAXIAAgUIAbAAIAACFIgbAAIAAgUQgRAXgbAAQgSgBgOgIgAgagdQgLALAAASQAAATALAMQALAMAQAAQARAAAKgMQAKgMAAgTQAAgTgKgLQgKgLgRAAQgQAAgLAMg");
	this.shape_8.setTransform(-46,45.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AhCBdIAAi2IAbAAIAAAUQARgXAcAAQASAAAOAJQANAJAIAQQAHAPABAVQgBAUgHAPQgIAQgNAJQgOAIgSAAQgZAAgSgUIAABDgAgbg1QgJALgBAUQABATAJALQAKALARAAQARAAAKgMQALgKAAgTQAAgTgLgMQgKgLgRAAQgRAAgKALg");
	this.shape_9.setTransform(-61.2,47.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AgmBEIAAiFIAbAAIAAAXQAKgZAXAAQAKAAAHAEIgDAcQgIgDgHABQgOgBgIAKQgIAKAAASIAABEg");
	this.shape_10.setTransform(-80.15,45.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_11.setTransform(-93.725,45.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_12.setTransform(-109.175,45.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgOBDIg2iFIAfAAIAlBkIAmhkIAfAAIg2CFg");
	this.shape_13.setTransform(-123.925,45.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_3, new cjs.Rectangle(-133,-32.2,266,94.4), null);


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
	this.shape.graphics.f("#003781").s().p("AgyA8IAHgbQASAKAUAAQAMAAAIgEQAGgEAAgHQAAgGgFgDQgHgDgLgEIgXgHQgJgEgGgIQgGgIAAgOQgBgTANgLQAOgKAWAAQAMAAAMADQAKACAJAEIgHAaQgQgJgTAAQgJAAgGAEQgFADAAAHQAAAHAGADQAGADANAEQANAEAIAEQAJADAGAHQAGAIABANQAAAUgQAMQgPALgZAAQgZAAgUgKg");
	this.shape.setTransform(108.5,15.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgMBMQgLgLAAgVIAAhAIgSAAIAAgcIASAAIAAggIAcgFIAAAlIAkAAIAAAcIgkAAIAAA8QAAAUASAAQAHAAAIgEIAEAaQgLAFgOAAQgTgBgKgKg");
	this.shape_1.setTransform(97.975,13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_2.setTransform(85.675,15.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AgSBaQgIgIAAgUIAAigIAcAAIAACbQAAAIADAEQADADAHAAQAGAAADgCIADAaQgHADgNAAQgRAAgIgJg");
	this.shape_3.setTransform(74.975,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AhCBdIAAi2IAbAAIAAAUQASgXAbAAQARAAAPAJQANAJAIAQQAHAPAAAVQAAAUgHAPQgIAQgNAJQgPAIgRAAQgZAAgRgUIAABDgAgag1QgKALAAAUQAAATAKALQAJALARAAQAQAAALgMQALgKAAgTQAAgTgLgMQgLgLgQAAQgRAAgJALg");
	this.shape_4.setTransform(62.75,17.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("Ag6BRIAIgZQAJAFAMADQALADAMAAQAVAAAMgKQALgLAAgVIAAgGQgRAVgaAAQgRAAgOgJQgOgIgIgQQgHgOgBgTQABgUAHgPQAIgPAOgIQAOgJARAAQAcAAAQAXIAAgVIAbAAIAAB2QAAAhgSARQgTARgiAAQgcAAgZgNgAgag3QgKALAAASQAAARAKALQALAKAQABQARAAAKgLQAJgKABgSQgBgSgJgMQgKgLgRABQgQAAgLALg");
	this.shape_5.setTransform(39.45,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003781").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_6.setTransform(24.225,15.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003781").s().p("AgOBiIAAiFIAcAAIAACFgAgNhCQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAFgIAAQgIAAgFgFg");
	this.shape_7.setTransform(13.025,12.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003781").s().p("AAfBDIgfhfIgfBfIghAAIgniFIAdAAIAbBiIAhhiIAdAAIAhBiIAbhiIAdAAIgnCFg");
	this.shape_8.setTransform(-1.075,15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003781").s().p("AguA1QgNgQAAgbIAAhNIAdAAIAABHQAAATAHAJQAIAJAPAAQAOAAAJgJQAIgKAAgRIAAhIIAdAAIAACFIgbAAIAAgVQgHAMgLAGQgLAFgNAAQgXAAgOgPg");
	this.shape_9.setTransform(-19.75,15.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003781").s().p("AAfBiIAAhIQAAgTgIgIQgHgJgPAAQgOAAgJAJQgIAJAAARIAABJIgdAAIAAjDIAdAAIAABQQAHgKAKgFQALgFALAAQAYAAAOAPQANAQAAAaIAABOg");
	this.shape_10.setTransform(-35.025,12.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003781").s().p("AgVA9QgQgIgIgQQgJgQAAgVQAAgUAJgQQAIgPAQgJQAPgJASAAQAMAAALADQALAEAJAGIgIAbQgHgGgJgDQgIgDgJAAQgRAAgLALQgLALAAATQAAATALAMQALALARAAQAJAAAIgDQAJgDAHgFIAIAaQgJAGgLADQgLAEgMAAQgSAAgPgJg");
	this.shape_11.setTransform(-49.025,15.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003781").s().p("AgxA8IAGgbQASAKAVAAQALAAAIgEQAGgEABgHQgBgGgGgDQgFgDgMgEIgXgHQgJgEgGgIQgGgIgBgOQAAgTANgLQANgKAYAAQALAAALADQAMACAIAEIgHAaQgPgJgUAAQgJAAgGAEQgFADgBAHQABAHAGADQAGADAMAEQAOAEAJAEQAIADAGAHQAHAIAAANQgBAUgPAMQgOALgZAAQgbAAgSgKg");
	this.shape_12.setTransform(-61.4,15.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003781").s().p("AgnBEIAAiFIAbAAIAAAXQALgZAXAAQAKAAAHAEIgDAcQgHgDgIABQgOgBgIALQgJAJABASIAABEg");
	this.shape_13.setTransform(-71.35,15.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgIgQAAgUQABgUAHgPQAIgQAOgJQAOgJARAAQAcAAAQAYIAAgVIAbAAIAACFIgbAAIAAgUQgQAXgcAAQgRAAgOgJgAgagdQgLALABASQgBATALAMQALAMAQAAQARAAAKgMQAKgMAAgTQAAgTgKgLQgKgLgRAAQgQAAgLAMg");
	this.shape_14.setTransform(-85.75,15.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003781").s().p("AgkA9QgOgJgIgQQgHgQAAgUQgBgUAJgPQAHgQAOgJQAOgJASAAQAbAAARAYIAAgVIAbAAIAACFIgbAAIAAgUQgRAXgbAAQgSAAgOgJgAgagdQgLALAAASQAAATALAMQALAMAQAAQARAAAKgMQAKgMgBgTQABgTgKgLQgKgLgRAAQgQAAgLAMg");
	this.shape_15.setTransform(-101.9,15.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003781").s().p("AAfBDIgfhfIgfBfIghAAIgniFIAdAAIAbBiIAhhiIAdAAIAhBiIAbhiIAdAAIgnCFg");
	this.shape_16.setTransform(-120.225,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_2, new cjs.Rectangle(-133,-34.2,266,66.6), null);


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
	this.shape.graphics.f("#003781").s().p("AgmBEIAAiFIAbAAIAAAYQAKgaAXAAQAKAAAHADIgDAdQgIgCgHgBQgOABgIAJQgIAKAAATIAABDg");
	this.shape.setTransform(-46.4,-13.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003781").s().p("AgdA9QgPgIgKgQQgIgQgBgVQABgUAHgPQAJgQAOgJQAOgJASAAQASAAAPAJQAPAIAHAPQAIAQAAATIAAAMIhgAAQACAQAMAIQALAJARAAQALAAALgDQALgDAJgGIAIAYQgKAHgNAEQgOAEgPAAQgTAAgRgJgAAigMQgBgPgJgIQgJgIgPAAQgMAAgJAIQgJAIgDAPIBDAAIAAAAg");
	this.shape_1.setTransform(-59.6,-13.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003781").s().p("AgkBbQgOgJgIgPQgHgRAAgUQgBgUAJgPQAHgQAOgJQAOgIASAAQAZgBAQAVIAAhRIAeAAIAADEIgbAAIAAgUQgRAWgbAAQgSABgOgJgAgaAAQgLAMAAASQAAATALAMQALALAQAAQARAAAKgLQAJgLAAgUQAAgTgJgLQgKgLgRAAQgQAAgLALg");
	this.shape_2.setTransform(-75.45,-16.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003781").s().p("AAfBEIAAhHQAAgTgIgJQgHgJgPAAQgOAAgJAJQgIAKAAARIAABIIgdAAIAAiFIAbAAIAAAVQAGgMALgFQAMgGAMAAQAYAAAOAPQANAQAAAbIAABNg");
	this.shape_3.setTransform(-90.675,-13.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003781").s().p("AgiA9QgQgJgIgQQgJgQAAgUQAAgUAJgPQAIgQAQgJQAPgJATAAQAUAAAPAJQAPAJAJAQQAJAPAAAUQAAAUgJAQQgJAQgPAJQgPAJgUAAQgTAAgPgJgAgbgeQgLAMAAASQAAATALALQALAMAQAAQARAAALgMQAKgLAAgTQAAgSgKgMQgLgLgRAAQgQAAgLALg");
	this.shape_4.setTransform(-106.325,-13.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003781").s().p("AhJBeIAAgZIBkiEIhgAAIAAgdICLAAIAAAYIhkCEIBoAAIAAAeg");
	this.shape_5.setTransform(-122.5,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(-133,-35.7,266,66.6), null);


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
	mask.setTransform(2.5,-12);

	// copy1
	this.copy1 = new lib.promocopy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(2.5,-11.5);

	var maskedShapeInstanceList = [this.copy1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApIBfIAAi9ISRAAIAAC9g");
	mask_1.setTransform(2.5,9.5);

	// copy2
	this.copy2 = new lib.promocopy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(2.45,4.65,1,1,0,0,0,6.2,-4.5);

	var maskedShapeInstanceList = [this.copy2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD25C").s().p("AnHHIQi9i9AAkLQAAkKC9i9QC9i9EKAAQELAAC9C9QC9C9AAEKQAAELi9C9Qi9C9kLAAQkKAAi9i9g");
	this.shape.setTransform(2.5,-3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.promoMC, new cjs.Rectangle(-62,-67.9,129,129), null);


(lib.masker = function(mode,startPosition,loop,reversed) {
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
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// red
	this.instance = new lib.square();
	this.instance.setTransform(1697.95,540.1,0.738,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:0.7379,x:1683.268,y:539.9986},0).wait(1).to({scaleX:0.7378,x:1667.4128,y:539.997},0).wait(1).to({scaleX:0.7377,x:1650.1457,y:539.9953},0).wait(1).to({scaleX:0.7375,x:1631.3792,y:539.9934},0).wait(1).to({scaleX:0.7374,x:1611.0312,y:539.9914},0).wait(1).to({scaleX:0.7372,x:1589.0316,y:539.9893},0).wait(1).to({scaleX:0.7371,x:1565.3298,y:539.9869},0).wait(1).to({scaleX:0.7369,x:1539.9057,y:539.9844},0).wait(1).to({scaleX:0.7367,x:1512.7812,y:539.9818},0).wait(1).to({scaleX:0.7365,x:1484.033,y:539.9789},0).wait(1).to({scaleX:0.7362,x:1453.8034,y:539.9759},0).wait(1).to({scaleX:0.736,x:1422.305,y:539.9728},0).wait(1).to({scaleX:0.7358,x:1389.8193,y:539.9696},0).wait(1).to({scaleX:0.7355,x:1356.6826,y:539.9664},0).wait(1).to({scaleX:0.7353,x:1323.2644,y:539.9631},0).wait(1).to({scaleX:0.735,x:1289.9382,y:539.9598},0).wait(1).to({scaleX:0.7348,x:1257.0537,y:539.9565},0).wait(1).to({scaleX:0.7345,x:1224.9139,y:539.9534},0).wait(1).to({scaleX:0.7343,x:1193.7612,y:539.9503},0).wait(1).to({scaleX:0.7341,x:1163.7739,y:539.9473},0).wait(1).to({scaleX:0.7339,x:1135.0697,y:539.9445},0).wait(1).to({scaleX:0.7337,x:1107.7137,y:539.9418},0).wait(1).to({scaleX:0.7335,x:1081.7294,y:539.9392},0).wait(1).to({scaleX:0.7333,x:1057.1086,y:539.9368},0).wait(1).to({scaleX:0.7331,x:1033.8204,y:539.9345},0).wait(1).to({scaleX:0.7329,x:1011.8192,y:539.9323},0).wait(1).to({scaleX:0.7328,x:991.05,y:539.9303},0).wait(1).to({scaleX:0.7326,x:971.4528,y:539.9284},0).wait(1).to({scaleX:0.7325,x:952.9658,y:539.9265},0).wait(1).to({scaleX:0.7324,x:935.5274,y:539.9248},0).wait(1).to({scaleX:0.7323,x:919.0775,y:539.9232},0).wait(1).to({scaleX:0.7321,x:903.5584,y:539.9217},0).wait(1).to({scaleX:0.732,x:888.9157,y:539.9202},0).wait(1).to({scaleX:0.7319,x:875.0978,y:539.9189},0).wait(1).to({scaleX:0.7318,x:862.0567,y:539.9176},0).wait(1).to({scaleX:0.7317,x:849.7473,y:539.9164},0).wait(1).to({x:838.1279,y:539.9152},0).wait(1).to({scaleX:0.7316,x:827.1597,y:539.9141},0).wait(1).to({scaleX:0.7315,x:816.8066,y:539.9131},0).wait(1).to({scaleX:0.7314,x:807.0352,y:539.9121},0).wait(1).to({x:797.8145,y:539.9112},0).wait(1).to({scaleX:0.7313,x:789.1156,y:539.9104},0).wait(1).to({scaleX:0.7312,x:780.912,y:539.9096},0).wait(1).to({x:773.1786,y:539.9088},0).wait(1).to({scaleX:0.7311,x:765.8924,y:539.9081},0).wait(1).to({x:759.032,y:539.9074},0).wait(1).to({scaleX:0.731,x:752.5772,y:539.9068},0).wait(1).to({x:746.5093,y:539.9062},0).wait(1).to({scaleX:0.7309,x:740.8109,y:539.9056},0).wait(1).to({x:735.4657,y:539.9051},0).wait(1).to({x:730.4584,y:539.9046},0).wait(1).to({scaleX:0.7308,x:725.7747,y:539.9041},0).wait(1).to({x:721.4011,y:539.9037},0).wait(1).to({x:717.325,y:539.9033},0).wait(1).to({scaleX:0.7307,x:713.5346,y:539.9029},0).wait(1).to({x:710.0187,y:539.9026},0).wait(1).to({x:706.7669,y:539.9022},0).wait(1).to({x:703.7691,y:539.902},0).wait(1).to({scaleX:0.7306,x:701.016,y:539.9017},0).wait(1).to({x:698.4989,y:539.9014},0).wait(1).to({x:696.2093,y:539.9012},0).wait(1).to({x:694.1392,y:539.901},0).wait(1).to({x:692.2813,y:539.9008},0).wait(1).to({x:690.6284,y:539.9007},0).wait(1).to({x:689.1737,y:539.9005},0).wait(1).to({scaleX:0.7305,x:687.9108,y:539.9004},0).wait(1).to({x:686.8337,y:539.9003},0).wait(1).to({x:685.9364,y:539.9002},0).wait(1).to({x:685.2135,y:539.9001},0).wait(1).to({x:684.6596},0).wait(1).to({x:684.2699,y:539.9},0).wait(1).to({x:684.0393},0).wait(1).to({regX:0.1,x:684.05,y:540},0).wait(1));

	// green
	this.instance_1 = new lib.square();
	this.instance_1.setTransform(1543.3,540,0.9262,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9149,x:1525.3585},0).wait(1).to({scaleX:0.9023,x:1505.5065},0).wait(1).to({scaleX:0.8885,x:1483.5891},0).wait(1).to({scaleX:0.8732,x:1459.4454},0).wait(1).to({scaleX:0.8565,x:1432.9128},0).wait(1).to({scaleX:0.8381,x:1403.8354},0).wait(1).to({scaleX:0.818,x:1372.0764},0).wait(1).to({scaleX:0.7962,x:1337.5347},0).wait(1).to({scaleX:0.7725,x:1300.1687},0).wait(1).to({scaleX:0.7472,x:1260.0225},0).wait(1).to({scaleX:0.7201,x:1217.2553},0).wait(1).to({scaleX:0.6916,x:1172.1631},0).wait(1).to({scaleX:0.6619,x:1125.1874},0).wait(1).to({scaleX:0.6314,x:1076.8996},0).wait(1).to({scaleX:0.6005,x:1027.9596},0).wait(1).to({scaleX:0.5696,x:979.0549},0).wait(1).to({scaleX:0.5391,x:930.8346},0).wait(1).to({scaleX:0.5094,x:883.8551},0).wait(1).to({scaleX:0.4807,x:838.5492},0).wait(1).to({scaleX:0.4534,x:795.2181},0).wait(1).to({scaleX:0.4273,x:754.0431},0).wait(1).to({scaleX:0.4027,x:715.1067},0).wait(1).to({scaleX:0.3795,x:678.4162},0).wait(1).to({scaleX:0.3577,x:643.9264},0).wait(1).to({scaleX:0.3373,x:611.5577},0).wait(1).to({scaleX:0.3181,x:581.2101},0).wait(1).to({scaleX:0.3001,x:552.7735},0).wait(1).to({scaleX:0.2833,x:526.1342},0).wait(1).to({scaleX:0.2675,x:501.1798},0).wait(1).to({scaleX:0.2527,x:477.8018},0).wait(1).to({scaleX:0.2389,x:455.8974},0).wait(1).to({scaleX:0.2259,x:435.3699},0).wait(1).to({scaleX:0.2137,x:416.1297},0).wait(1).to({scaleX:0.2023,x:398.0937},0).wait(1).to({scaleX:0.1916,x:381.1852},0).wait(1).to({scaleX:0.1816,x:365.3335},0).wait(1).to({scaleX:0.1722,x:350.4738},0).wait(1).to({scaleX:0.1634,x:336.5463},0).wait(1).to({scaleX:0.1552,x:323.496},0).wait(1).to({scaleX:0.1474,x:311.2725},0).wait(1).to({scaleX:0.1402,x:299.8292},0).wait(1).to({scaleX:0.1334,x:289.1232},0).wait(1).to({scaleX:0.1271,x:279.1149},0).wait(1).to({scaleX:0.1212,x:269.7677},0).wait(1).to({scaleX:0.1157,x:261.0477},0).wait(1).to({scaleX:0.1106,x:252.9235},0).wait(1).to({scaleX:0.1058,x:245.3661},0).wait(1).to({scaleX:0.1013,x:238.3484},0).wait(1).to({scaleX:0.0972,x:231.8452},0).wait(1).to({scaleX:0.0934,x:225.8331},0).wait(1).to({scaleX:0.0899,x:220.2902},0).wait(1).to({scaleX:0.0867,x:215.196},0).wait(1).to({scaleX:0.0838,x:210.5315},0).wait(1).to({scaleX:0.0811,x:206.2786},0).wait(1).to({scaleX:0.0786,x:202.4206},0).wait(1).to({scaleX:0.0764,x:198.9418},0).wait(1).to({scaleX:0.0745,x:195.8272},0).wait(1).to({scaleX:0.0727,x:193.0629},0).wait(1).to({scaleX:0.0712,x:190.6358},0).wait(1).to({scaleX:0.0698,x:188.5335},0).wait(1).to({scaleX:0.0687,x:186.7441},0).wait(1).to({scaleX:0.0678,x:185.2567},0).wait(1).to({scaleX:0.067,x:184.0607},0).wait(1).to({scaleX:0.0664,x:183.1462},0).wait(1).to({scaleX:0.066,x:182.5039},0).wait(1).to({scaleX:0.0658,x:182.1246},0).wait(1).to({scaleX:0.0657,x:182},0).wait(7));

	// blue
	this.instance_2 = new lib.square();
	this.instance_2.setTransform(1344.25,540,0.818,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.7962,x:1306.3654},0).wait(1).to({scaleX:0.7725,x:1265.383},0).wait(1).to({scaleX:0.7472,x:1221.3515},0).wait(1).to({scaleX:0.7201,x:1174.4452},0).wait(1).to({scaleX:0.6916,x:1124.9889},0).wait(1).to({scaleX:0.6619,x:1073.4669},0).wait(1).to({scaleX:0.6314,x:1020.5057},0).wait(1).to({scaleX:0.6005,x:966.8292},0).wait(1).to({scaleX:0.5696,x:913.1915},0).wait(1).to({scaleX:0.5391,x:860.3043},0).wait(1).to({scaleX:0.5094,x:808.7782},0).wait(1).to({scaleX:0.4807,x:759.0874},0).wait(1).to({scaleX:0.4533,x:711.5627},0).wait(1).to({scaleX:0.4273,x:666.4028},0).wait(1).to({scaleX:0.4027,x:623.6981},0).wait(1).to({scaleX:0.3795,x:583.4566},0).wait(1).to({scaleX:0.3577,x:545.6289},0).wait(1).to({scaleX:0.3373,x:510.1275},0).wait(1).to({scaleX:0.3181,x:476.8429},0).wait(1).to({scaleX:0.3001,x:445.6541},0).wait(1).to({scaleX:0.2833,x:416.4367},0).wait(1).to({scaleX:0.2675,x:389.0671},0).wait(1).to({scaleX:0.2527,x:363.4266},0).wait(1).to({scaleX:0.2389,x:339.4022},0).wait(1).to({scaleX:0.2259,x:316.8881},0).wait(1).to({scaleX:0.2137,x:295.7858},0).wait(1).to({scaleX:0.2023,x:276.0042},0).wait(1).to({scaleX:0.1916,x:257.4592},0).wait(1).to({scaleX:0.1816,x:240.0734},0).wait(1).to({scaleX:0.1722,x:223.7756},0).wait(1).to({scaleX:0.1634,x:208.5001},0).wait(1).to({scaleX:0.1552,x:194.1869},0).wait(1).to({scaleX:0.1474,x:180.7804},0).wait(1).to({scaleX:0.1402,x:168.2296},0).wait(1).to({scaleX:0.1334,x:156.4874},0).wait(1).to({scaleX:0.1271,x:145.5105},0).wait(1).to({scaleX:0.1212,x:135.2586},0).wait(1).to({scaleX:0.1157,x:125.6947},0).wait(1).to({scaleX:0.1106,x:116.7843},0).wait(1).to({scaleX:0.1058,x:108.4955},0).wait(1).to({scaleX:0.1013,x:100.7986},0).wait(1).to({scaleX:0.0972,x:93.666},0).wait(1).to({scaleX:0.0934,x:87.0721},0).wait(1).to({scaleX:0.0899,x:80.9927},0).wait(1).to({scaleX:0.0867,x:75.4055},0).wait(1).to({scaleX:0.0838,x:70.2895},0).wait(1).to({scaleX:0.0811,x:65.625},0).wait(1).to({scaleX:0.0786,x:61.3937},0).wait(1).to({scaleX:0.0764,x:57.5781},0).wait(1).to({scaleX:0.0745,x:54.1621},0).wait(1).to({scaleX:0.0727,x:51.1303},0).wait(1).to({scaleX:0.0712,x:48.4683},0).wait(1).to({scaleX:0.0698,x:46.1625},0).wait(1).to({scaleX:0.0687,x:44.2},0).wait(1).to({scaleX:0.0678,x:42.5686},0).wait(1).to({scaleX:0.067,x:41.2569},0).wait(1).to({scaleX:0.0664,x:40.2539},0).wait(1).to({scaleX:0.066,x:39.5493},0).wait(1).to({scaleX:0.0658,x:39.1334},0).wait(1).to({scaleX:0.0657,x:39},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-0.1,2092.9,1080.1);


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
	this.logoBlue.setTransform(0,0,0.85,0.8489);

	this.timeline.addTween(cjs.Tween.get(this.logoBlue).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,22.6);


(lib.haloMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.halo = new lib.halo();
	this.halo.name = "halo";
	this.halo.setTransform(0,-0.05,1.5,1.5);
	this.halo.alpha = 0.2695;

	this.glass = new lib.lightglass_1();
	this.glass.name = "glass";
	this.glass.setTransform(1.5,-0.15);
	this.glass.alpha = 0.5781;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glass},{t:this.halo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.haloMC, new cjs.Rectangle(-144.3,-144.4,288.70000000000005,288.8), null);


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
	mask.graphics.p("AnzCgIAAk/IPnAAIAAE/g");
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
	this.shape.graphics.f("#FFFFFF").s().p("AnzCgIAAk/IPnAAIAAE/g");
	this.shape.setTransform(50,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctado, new cjs.Rectangle(0,0,100,32), null);


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
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// circel (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg6JA7ZUgYWgYVAAAgicUAAAgibAYWgYWUAYWgYWAibAAAUAicAAAAYVAYWUAYXAYWAAAAibUAAAAicgYXAYVUgYVAYXgicAAAUgibAAAgYWgYXg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg6xA6xUgYWgYVAAAgicUAAAgibAYWgYWUAYWgYWAibAAAUAicAAAAYVAYWUAYXAYWAAAAibUAAAAicgYXAYVUgYVAYXgicAAAUgibAAAgYWgYXg");
	var mask_graphics_46 = new cjs.Graphics().p("EAA3BTIUghjgAKgX8gXXIhAhAUgYLgYSAAAgiUIAAgBUAAAgiTAYLgYTIA/g/UAX8gXXAhjgAKQBZgBBYACQTLAdPUHYQL/FrJcJ4QCVCbCCCmQFWHEDVF0QDCFfCAFgQB+FdBCFzQBRG6gCHrQAACGgFCMQgLE9grE/QgvFkhKFBQhLFDhoE7QiGGKi9GPQj2HtmgHFQgvA0gyAzQmyG+oDFIQpuGMrBDLQpyC1qPARQhMAChMAAIgfAAg");
	var mask_graphics_47 = new cjs.Graphics().p("EABnBTHUghYgATgX0gXYIhAg/UgYBgYPAAAgiNIAAgBUAAAgiMAYBgYQIA/g+UAX1gXYAhXgAUQBZgBBYACQTiAXO7GyQMZFdI+J1QCPCfB7CrQFYICCzE8QC/FrB1FWQB2FeAyF0QA+GxgaHyQgGCDgLCMQgWE0gzFFQg4FshDE1QhGFAhVFBQhvF/iUGoQjDHzmeHWQguA0gxAzQmhG5oPFQQpqGLq+DQQp/DAp6ANIh5ABIg8AAg");
	var mask_graphics_48 = new cjs.Graphics().p("EACQBTHUghMgAegXtgXYIg/g/UgX4gYMAAAgiGIAAAAUAAAgiFAX3gYNIA/g+UAXtgXYAhMgAeQBZgBBYABQT6ASOiGLQMyFPIgJzQCKChBzCxQFcJBCQEFQC8F1BqFMQBuFfAiF1QArGogzH5QgLCBgRCMQghErg7FLQhBFzg9EqQhAE9hEFGQhWF1hsHAQiPH6mcHlQgtA1gwA0QmRGzoaFZQpnGJq6DXQqMDJplAKIhsABIhIAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EAC1BTGUghBgAogXmgXXIg/g/UgXtgYJAAAgh+IAAgBUAAAgh+AXtgYJIA+g/UAXmgXXAhBgAoQBYgCBYABQUSAMOIFlQNNFBIBJxQCGCjBqC3QFgKABuDNQC4GABfFCQBlFfATF3QAYGfhMH/QgRB/gWCMQgsEihDFQQhKF7g2EfQg6E6gzFLQg+FshEHZQhbH/maH1QgsA1guA0QmCGwolFgQpjGIq4DcQqXDUpRAHIhHAAIhrgBg");
	var mask_graphics_50 = new cjs.Graphics().p("EADWBTGUgg2gAygXfgXYIg+g+UgXjgYGAAAgh4UAAAgh2AXjgYHIA+g/UAXfgXXAg1gAyQBXgCBZAAQUqAHNuE/QNmEzHjJuQCBCnBiC8IGvNTQC1GMBUE4QBdFhADF3QAFGVhkIGQgXB8gcCMQg2EahMFXQhSGBgwEUQg1E3ggFRQgmFggcHyQgoIGmYIGQgrA1gtA1QlxGpoxFqQpgGGq0DiQqkDeo8ADIgkABQhGAAhGgCg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg0QA6xUgYWgYVAAAgicUAAAgibAYWgYWUAYWgYWAibAAAQVCAANVEZQR1F3GmOGQFmL8ApBeQCzGXBIEuQBVFhgNF6QgOGLh8INIjUNyQhbGJgpEJQgwE1gOFWQgOFWAMIKQAMIMmWIWQlvHhqEGgQpcGFqxDoQqxDoonAAUgibAAAgYWgYXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:536,y:536}).wait(45).to({graphics:mask_graphics_45,x:540,y:540}).wait(1).to({graphics:mask_graphics_46,x:531.6037,y:539.9992}).wait(1).to({graphics:mask_graphics_47,x:523.9467,y:539.9967}).wait(1).to({graphics:mask_graphics_48,x:516.8585,y:540.0075}).wait(1).to({graphics:mask_graphics_49,x:510.2645,y:540}).wait(1).to({graphics:mask_graphics_50,x:504.087,y:540}).wait(1).to({graphics:mask_graphics_51,x:498.2675,y:540}).wait(1));

	// Layer_7
	this.instance = new lib.shadowc();
	this.instance.setTransform(877.65,627.85);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "multiply";
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({x:940.3,y:631.3,alpha:1},3).wait(1));

	// masker
	this.masker = new lib.masker();
	this.masker.name = "masker";
	this.masker.setTransform(1654,548,1,1,0,0,0,1660,540);

	var maskedShapeInstanceList = [this.masker];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.masker).wait(52));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.7,8,638.3,1064);


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

	// mask3_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A0TCWIAAkrMAonAAAIAAErg");
	mask_2.setTransform(-2,34);

	// Layer_4_copy
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

	// mask3_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A2fDNIAAmZMAs/AAAIAAGZg");
	mask_2.setTransform(0,50.5);

	// Layer_4_copy
	this.copy2_3 = new lib.copy2_3();
	this.copy2_3.name = "copy2_3";
	this.copy2_3.setTransform(19.65,21.45,1,1,0,0,0,0,15.1);

	var maskedShapeInstanceList = [this.copy2_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_3).wait(1));

	// mask4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A2fH+IAAmaMAs/AAAIAAGag");
	mask_3.setTransform(0,51);

	// copy4
	this.copy2_4 = new lib.copy2_4();
	this.copy2_4.name = "copy2_4";
	this.copy2_4.setTransform(19.65,21.45,1,1,0,0,0,0,15.1);

	var maskedShapeInstanceList = [this.copy2_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.copy2_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-113.3,-26,257.3,118.8), null);


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
	mask_1.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
	mask_1.setTransform(0,21.5);

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
	mask_2.graphics.p("A0xC0IAAlnMApjAAAIAAFng");
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

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-113,5.3,246,58.7), null);


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
	var mask_graphics_0 = new cjs.Graphics().p("AxnRoQnTnTAAqVQAAqUHTnTQHTnTKUAAQKVAAHTHTQHTHTAAKUQAAKVnTHTQnTHTqVAAQqUAAnTnTg");
	var mask_graphics_1 = new cjs.Graphics().p("AxsRuQnWnWAAqYQAAqXHWnWQHVnVKXABQKYgBHVHVQHWHWAAKXQAAKYnWHWQnVHVqYgBQqXABnVnVg");
	var mask_graphics_2 = new cjs.Graphics().p("Ax+SAQnendABqjQgBqiHendQHcncKigBQKjABHcHcQHeHdgBKiQABKjneHdQncHcqjABQqigBncncg");
	var mask_graphics_3 = new cjs.Graphics().p("AygSiQnrnsAAq2QAAq2HrnqQHrnrK1AAQK2AAHrHrQHrHqAAK2QAAK2nrHsQnrHqq2AAQq1AAnrnqg");
	var mask_graphics_4 = new cjs.Graphics().p("AzUTUQn/oAAArUQAArTH/oAQIAoALUAAQLVAAIAIAQH/IAAALTQAALUn/IAQoAIArVAAQrUAAoAoAg");
	var mask_graphics_5 = new cjs.Graphics().p("A0XUYQococAAr8QAAr7IcocQIcocL7AAQL8AAIcIcQIcIcAAL7QAAL8ocIcQocIcr8AAQr7AAococg");
	var mask_graphics_6 = new cjs.Graphics().p("A1nVoQo8o9gBsrQABsqI8o9QI9o9MqAAQMrAAI9I9QI8I9ABMqQgBMro8I9Qo9I9srAAQsqAAo9o9g");
	var mask_graphics_7 = new cjs.Graphics().p("A28W9QpgpgAAtdQAAtcJgpgQJgpgNcAAQNdAAJgJgQJgJgAANcQAANdpgJgQpgJgtdAAQtcAApgpgg");
	var mask_graphics_8 = new cjs.Graphics().p("A4QYRQqDqDABuOQgBuNKDqDQKDqCONAAQOOAAKDKCQKDKDgBONQABOOqDKDQqDKCuOAAQuNAAqDqCg");
	var mask_graphics_9 = new cjs.Graphics().p("A5fZfQqjqjAAu8QAAu7KjqkQKkqjO7AAQO8AAKkKjQKjKkAAO7QAAO8qjKjQqkKku8AAQu7AAqkqkg");
	var mask_graphics_10 = new cjs.Graphics().p("A6naoQrCrBABvnQgBvlLCrCQLBrCPmABQPngBLBLCQLCLCgBPlQABPnrCLBQrBLBvnAAQvmAArBrBg");
	var mask_graphics_11 = new cjs.Graphics().p("A7obpQrdrcgBwNQABwMLdrdQLcrdQMAAQQNAALcLdQLdLdABQMQgBQNrdLcQrcLdwNABQwMgBrcrdg");
	var mask_graphics_12 = new cjs.Graphics().p("A8kclQr1r1AAwwQAAwuL1r2QL1r1QvAAQQvAAL2L1QL1L2AAQuQAAQwr1L1Qr2L1wvAAQwvAAr1r1g");
	var mask_graphics_13 = new cjs.Graphics().p("A9adbQsLsMAAxPQAAxOMLsMQMMsLROAAQRPAAMMMLQMLMMAAROQAARPsLMMQsMMLxPAAQxOAAsMsLg");
	var mask_graphics_14 = new cjs.Graphics().p("A+KeLQsfsfAAxsQAAxqMfsgQMfsgRrAAQRrAAMgMgQMfMgAARqQAARssfMfQsgMfxrABQxrgBsfsfg");
	var mask_graphics_15 = new cjs.Graphics().p("A+2e2QsxsxAAyFQAAyEMxsyQMysxSEAAQSFAAMxMxQMyMyAASEQAASFsyMxQsxMyyFAAQyEAAsysyg");
	var mask_graphics_16 = new cjs.Graphics().p("A/dfeQtCtCAAycQAAybNCtCQNBtDScAAQScAANCNDQNCNCAASbQAASctCNCQtCNDycgBQycABtBtDg");
	var mask_graphics_17 = new cjs.Graphics().p("EggBAgCQtRtRAAyxQAAywNRtSQNQtQSxAAQSxAANRNQQNRNSAASwQAASxtRNRQtRNRyxAAQyxAAtQtRg");
	var mask_graphics_18 = new cjs.Graphics().p("EggiAgjQtetegBzFQABzENeteQNeteTEgBQTFABNeNeQNeNeABTEQgBTFteNeQteNezFABQzEgBteteg");
	var mask_graphics_19 = new cjs.Graphics().p("EghAAhAQtrtqAAzWQAAzVNrtrQNrtrTVABQTWgBNqNrQNsNrAATVQAATWtsNqQtqNrzWAAQzVAAtrtrg");
	var mask_graphics_20 = new cjs.Graphics().p("EghbAhbQt2t1AAzmQAAzkN2t3QN2t2TlAAQTmAAN2N2QN2N3AATkQAATmt2N1Qt2N3zmAAQzlAAt2t3g");
	var mask_graphics_21 = new cjs.Graphics().p("Egh0Ah0QuAt/AAz1QAAzzOAuBQOAuAT0AAQT0AAOAOAQOBOBAATzQAAT1uBN/QuAOBz0AAQz0AAuAuBg");
	var mask_graphics_22 = new cjs.Graphics().p("EgiKAiLQuKuJAA0CQAA0AOKuKQOJuKUBAAQUBAAOKOKQOKOKAAUAQAAUCuKOJQuKOK0BAAQ0BAAuJuKg");
	var mask_graphics_23 = new cjs.Graphics().p("EgifAifQuSuRAA0OQAA0MOSuTQOSuSUNAAQUNAAOSOSQOTOTAAUMQAAUOuTORQuSOT0NAAQ0NAAuSuTg");
	var mask_graphics_24 = new cjs.Graphics().p("EgixAiyQuauZAA0ZQAA0XOauaQOZuaUYAAQUZAAOZOaQOaOaAAUXQAAUZuaOZQuZOa0ZAAQ0YAAuZuag");
	var mask_graphics_25 = new cjs.Graphics().p("EgjCAjDQuhugAA0jQAA0hOhuhQOguhUiAAQUiAAOhOhQOhOhAAUhQAAUjuhOgQuhOh0iAAQ0iAAuguhg");
	var mask_graphics_26 = new cjs.Graphics().p("EgjSAjSQununAA0rQAA0qOnuoQOnunUrAAQUrAAOnOnQOoOoAAUqQAAUruoOnQunOo0rAAQ0rAAunuog");
	var mask_graphics_27 = new cjs.Graphics().p("EgjfAjgQutusAA00QAA0yOtutQOsutUzAAQUzAAOtOtQOtOtAAUyQAAU0utOsQutOt0zAAQ0zAAusutg");
	var mask_graphics_28 = new cjs.Graphics().p("EgjsAjsQuyuxAA07QAA06OyuyQOyuyU6AAQU6AAOyOyQOzOyAAU6QAAU7uzOxQuyOz06AAQ06AAuyuzg");
	var mask_graphics_29 = new cjs.Graphics().p("Egj3Aj4Qu3u2AA1CQAA1AO3u3QO2u3VBABQVBgBO3O3QO3O3AAVAQAAVCu3O2Qu3O31BgBQ1BABu2u3g");
	var mask_graphics_30 = new cjs.Graphics().p("EgkBAkBQu7u6AA1HQAA1GO7u7QO7u7VGAAQVHAAO6O7QO8O7AAVGQAAVHu8O6Qu6O81HAAQ1GAAu7u8g");
	var mask_graphics_31 = new cjs.Graphics().p("EgkKAkKQu+u+AA1MQAA1LO+u/QO+u+VMAAQVMAAO+O+QO/O/AAVLQAAVMu/O+Qu+O/1MAAQ1MAAu+u/g");
	var mask_graphics_32 = new cjs.Graphics().p("EgkSAkSQvBvBAA1RQAA1QPBvCQPCvBVQAAQVRAAPBPBQPCPCAAVQQAAVRvCPBQvBPC1RAAQ1QAAvCvCg");
	var mask_graphics_33 = new cjs.Graphics().p("EgkYAkZQvFvEAA1VQAA1UPFvEQPEvFVUAAQVVAAPEPFQPFPEAAVUQAAVVvFPEQvEPF1VAAQ1UAAvEvFg");
	var mask_graphics_34 = new cjs.Graphics().p("EgkeAkfQvHvHAA1YQAA1XPHvHQPHvHVXAAQVYAAPHPHQPHPHAAVXQAAVYvHPHQvHPH1YAAQ1XAAvHvHg");
	var mask_graphics_35 = new cjs.Graphics().p("EgkjAkjQvJvIAA1bQAA1aPJvJQPJvJVaAAQVbAAPIPJQPKPJAAVaQAAVbvKPIQvIPK1bAAQ1aAAvJvKg");
	var mask_graphics_36 = new cjs.Graphics().p("EgknAkoQvKvKAA1eQAA1cPKvLQPKvKVdAAQVdAAPLPKQPKPLAAVcQAAVevKPKQvLPK1dAAQ1dAAvKvKg");
	var mask_graphics_37 = new cjs.Graphics().p("EgkqAkrQvMvLAA1gQAA1ePMvMQPLvMVfAAQVfAAPMPMQPMPMAAVeQAAVgvMPLQvMPM1fAAQ1fAAvLvMg");
	var mask_graphics_38 = new cjs.Graphics().p("EgktAktQvMvMAA1hQAA1fPMvOQPNvMVgAAQVgAAPNPMQPNPOAAVfQAAVhvNPMQvNPN1gAAQ1gAAvNvNg");
	var mask_graphics_39 = new cjs.Graphics().p("EgkuAkvQvOvNAA1iQAA1gPOvOQPNvOVhAAQVhAAPOPOQPOPOAAVgQAAVivOPNQvOPO1hAAQ1hAAvNvOg");
	var mask_graphics_40 = new cjs.Graphics().p("EgkvAkwQvOvNAA1jQAA1hPOvOQPNvOViAAQViAAPOPOQPOPOAAVhQAAVjvOPNQvOPO1iAAQ1iAAvNvOg");
	var mask_graphics_41 = new cjs.Graphics().p("EgkwAkwQvOvNAA1jQAA1hPOvPQPOvOViAAQViAAPOPOQPPPPAAVhQAAVjvPPNQvOPP1iAAQ1iAAvOvPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_1,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_2,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_3,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_4,x:0,y:-58.55}).wait(1).to({graphics:mask_graphics_5,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_6,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_7,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_8,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_9,x:0,y:-58.525}).wait(1).to({graphics:mask_graphics_10,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_11,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_12,x:0.025,y:-58.525}).wait(1).to({graphics:mask_graphics_13,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_14,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_15,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_16,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_17,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_18,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_19,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_20,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_21,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_22,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_23,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_24,x:0,y:-58.5}).wait(1).to({graphics:mask_graphics_25,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_26,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_27,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_28,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_29,x:0.025,y:-58.5}).wait(1).to({graphics:mask_graphics_30,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_31,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_32,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_33,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_34,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_35,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_36,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_37,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_38,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_39,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_40,x:0.025,y:-58.475}).wait(1).to({graphics:mask_graphics_41,x:0.0257,y:-58.4789}).wait(65));

	// logoWhite
	this.logoWhite = new lib.LogoWhite();
	this.logoWhite.name = "logoWhite";
	this.logoWhite.setTransform(-26.8,196.25,1.0001,1,0,0,0,1.4,0.8);

	var maskedShapeInstanceList = [this.logoWhite];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.logoWhite).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,0,150.5,218.1);


(lib.lamppostMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.halo = new lib.haloMC();
	this.halo.name = "halo";
	this.halo.setTransform(0,-222.85);

	this.timeline.addTween(cjs.Tween.get(this.halo).wait(1));

	// post
	this.instance = new lib.lamppost();
	this.instance.setTransform(-45,-283,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lamppostMC, new cjs.Rectangle(-144.3,-367.2,288.70000000000005,511.7), null);


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
		var COLOR_VERSION = 0;
		var self= this;
		
		var WIDTH = 300;
		var HEIGHT = 600;
		
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
			
			self.largeshape.visible = true;
			gsap.set(self.largeshape,{scale:0});
			gsap.to(self.largeshape, {scale:2.25,duration:0.6, ease:allianzEase});
			
			 	gsap.delayedCall(d , function() {
						self.whiteLogo.play();
						//self.crowbar.play();
				
			});
			d+=0.25;
			gsap.from(self.crowbar, {scale:0, delay:d, duration:0.85,ease:"power.out"});
		
			
			gsap.from(self.lamp, {scale:0, delay:d, duration:0.5,ease:"power.out"});
		 
		 
			
			d+=0.5;
					
			var shakes = 30;
			for(var s = 0; s< shakes; s++){
				gsap.to(self.lamp.halo, {alpha:random(0.1,1), delay:d+0.2+s*0.1, duration:0.1});
			}
			gsap.to(self.lamp.halo, {alpha:0.5, delay:d+0.2+shakes*0.1, duration:0.1});
		
			
			//self.lamp
				//d+=0.1;
			gsap.to(self.lamp, {rotation:10, delay:d, duration:0.65,ease: "elastic.out(1.0, 0.9)"});
			gsap.delayedCall(d , function() {
					particleGroup.addEmitter(smokeEmitter);
					scene.add(particleGroup.mesh);
				
			});
		
				gsap.delayedCall(d , function() {
			
		
				//	if(version=="do")
			
				
			});
			 
			if(version == "think"){
		
				 
				gsap.to(self.copy1.copy1_1, {y:0, alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {y:0, alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {y:0, alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
				
			
				d+=0.4;
				gsap.to(self.copy1.copy1_1, {x:"-=20", alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_2, {x:"-=20", alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy1.copy1_3, {x:"-=20", alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
		
					d-=0.4;
				}
				else{
					 
				//	gsap.set(self.shape, {scale:0});
				}
				
		
						d+=0.5;
		
			gsap.from(cta, {duration:0.4,scale:0, alpha:1, ease: 'power3.out', delay: d});
			
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
				
				for(var i = 1; i <= 4; i++){
					gsap.to(self.copyDo['copy_'+i], {y:0, alpha:1, delay:d+(i-1)*0.1, duration:0.6, ease:'power3.out'});
					}
				
			}
			d+=0.3;
		 
			 
			if(version == "think"){
				gsap.from(self.copy2.copy2_1, {y:"+=30", alpha:0, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.from(self.copy2.copy2_2, {y:"+=30", alpha:0, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.from(self.copy2.copy2_3, {y:"+=30", alpha:0, delay:d+0.2, duration:0.6, ease:'power3.out'});
				 	gsap.from(self.copy2.copy2_4, {y:"+=30", alpha:0, delay:d+0.3, duration:0.6, ease:'power3.out'});
			
				d+=0.4;
				gsap.to(self.copy2.copy2_1, {x:"-=20", alpha:1, delay:d, 	duration:0.6, ease:'power3.out'});
				gsap.to(self.copy2.copy2_2, {x:"-=20", alpha:1, delay:d+0.1, duration:0.6, ease:'power3.out'});
				gsap.to(self.copy2.copy2_3, {x:"-=20", alpha:1, delay:d+0.2, duration:0.6, ease:'power3.out'});
		
				gsap.to(self.copy2.copy2_4, {x:"-=20", alpha:1, delay:d+0.3, duration:0.6, ease:'power3.out'});
				
				}
			
			gsap.from(self.promo, {scale:0, delay:d,duration:0.6, ease:allianzEase});
			gsap.from(self.promo.copy1 ,{y:"+=30", alpha:0, delay:d+0.3,duration:0.6, ease: 'power3.out'});
			gsap.from(self.promo.copy2,  {y:"+=30", alpha:0, delay:d+0.1,duration:0.6, ease: 'power3.out'});
		
		 
			 
			
					gsap.delayedCall(d + 0.5, function() {
						  
				ctaAnimate();
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
		
		
		function random(min, max) {
		    return Math.random() * (max - min) + min;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// particles
	this.particles = new lib.particleSystem();
	this.particles.name = "particles";
	this.particles.setTransform(239.2,258.9);

	this.timeline.addTween(cjs.Tween.get(this.particles).wait(1));

	// copy_do
	this.copyDo = new lib.copyDo();
	this.copyDo.name = "copyDo";
	this.copyDo.setTransform(163,109.85,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.copyDo).wait(1));

	// copy_think_2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.setTransform(163,67.75);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy_think_1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.setTransform(160,83);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// logoMask
	this.whiteLogo = new lib.whiteLogo();
	this.whiteLogo.name = "whiteLogo";
	this.whiteLogo.setTransform(148.2,358.4);

	this.timeline.addTween(cjs.Tween.get(this.whiteLogo).wait(1));

	// logoblue
	this.logo = new lib.logoW();
	this.logo.name = "logo";
	this.logo.setTransform(121.4,554.65,1.0001,1,0,0,0,1.4,0.8);
	this.logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// promo
	this.promo = new lib.promoMC();
	this.promo.name = "promo";
	this.promo.setTransform(96.6,301.35,1,1,0,0,0,5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.promo).wait(1));

	// Layer_2
	this.lamp = new lib.lamppostMC();
	this.lamp.name = "lamp";
	this.lamp.setTransform(210.4,417.85);

	this.timeline.addTween(cjs.Tween.get(this.lamp).wait(1));

	// animation
	this.crowbar = new lib.crowbarMC();
	this.crowbar.name = "crowbar";
	this.crowbar.setTransform(157,295,0.23,0.23,0,0,0,545.7,528.5);

	this.timeline.addTween(cjs.Tween.get(this.crowbar).wait(1));

	// tracks
	this.instance = new lib.tracks();
	this.instance.setTransform(114,343.2,0.25,0.25,0,0,0,281,724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cta_do
	this.ctaDo = new lib.ctado();
	this.ctaDo.name = "ctaDo";
	this.ctaDo.setTransform(80,489,1,1,0,0,0,50,16);

	this.timeline.addTween(cjs.Tween.get(this.ctaDo).wait(1));

	// cta
	this.cta = new lib.ctanew();
	this.cta.name = "cta";
	this.cta.setTransform(-166.05,473);

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
	this.largeshape.setTransform(155,305,0.0174,0.0174,0,0,0,5.8,5.8);
	this.largeshape.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.largeshape).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,300,544.8000000000001,300);
// library properties:
lib.properties = {
	id: '5FE19E2B1B484BF89BA7A3ACD3406BF0',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./crowbar.png", id:"crowbar"},
		{src:"./lamppost.png", id:"lamppost"},
		{src:"./lightglass.png", id:"lightglass"},
		{src:"./shadow2.jpg", id:"shadow2"},
		{src:"./tiretrack.png", id:"tiretrack"}
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