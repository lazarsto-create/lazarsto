/**
*        ______                                 
*      (, /    )                     /)        
*        /---(  _  __  __    _  __  (/_ ___    
*     ) / ____)(_(_/ (_/ (__(/_/ (_/_) (_) (_/_
*    (_/ (                                .-/  
*	                                     (_/
*
*   (c) 2015 Bannerboy AB
*
*	Who was here?
*	- Alexander Flink
*
**/

var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({width: width, height: height, overflow: "hidden", cursor: "pointer", border: "1px solid #000", boxSizing: "border-box", parent: document.body});
	var introFade = bannerboy.createElement({background: "#FFF", width: width, height: height, zIndex: 100, parent: banner});
	var busy = true;
	var browser = detectBrowser();

	var images = [
		"bg.jpg",
		"headlights.jpg", 
		"table.png", 
		"lemonade_table.png",
		"lemon.png",
		"txt3_1.png",
		"txt3_2.png",
		"txt2.png", 
		"txt1_line2.png", 
		"txt1_line1.png", 
		"logo.png",
		"logo2.jpg",
		"legal.png",
		"replayIcon.png", 
		"replayText.png", 
	];

	function onPolite () {
		bannerboy.preloadImages(images, function () {
			///////////////////////
			// C R E A T E  D I V S

			var container = bannerboy.createElement({rotation: 0.01, parent: banner}); container.blur = 0;
			var bg = bannerboy.createElement({backgroundImage: "bg.jpg", parent: container});
			var headlights = bannerboy.createElement({backgroundImage: "headlights.jpg", left: 461, top: 47, parent: container});
			var table = bannerboy.createElement({backgroundImage: "table.png", top: 20, parent: container});
			var lemon1 = bannerboy.createElement({left: 247, top: 101, parent: table});
				lemon1.shadow = bannerboy.createElement({background:"#000", left: 10, top: 25, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: lemon1});
				lemon1.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: 0, parent: lemon1}); // actual lemon
			var lemon2 = bannerboy.createElement({left: 35, top: 105, parent: table});
				lemon2.shadow = bannerboy.createElement({background:"#000", left: 20, top: 23, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: lemon2});
				lemon2.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: 20, parent: lemon2}); // actual lemon
			var lemon3 = bannerboy.createElement({left: 22, top: 106, parent: table});
				lemon3.shadow = bannerboy.createElement({background:"#000", left: 0, top: 23, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: lemon3});
				lemon3.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: -40, parent: lemon3}); // actual lemon
			var txt2 = bannerboy.createElement({backgroundImage: "txt2.png", left: 458, top: 173, retina: true, parent: container});
			var txt1_line2 = bannerboy.createElement({backgroundImage: "txt1_line2.png", left: 34, top: 195, retina: true, parent: container});
			var txt1_line1 = bannerboy.createElement({backgroundImage: "txt1_line1.png", left: 65, top: 169, retina: true, parent: container});
			var legal = bannerboy.createElement({backgroundImage: "legal.png", left: 527, top: 206, retina: true, parent: container});
			var black_cover = bannerboy.createElement({background: "#000", width: width, height: height, opacity: 0, parent: banner});

			// endframe stuff
			var txt3_2 = bannerboy.createElement({backgroundImage: "txt3_2.png", left: 196, top: 37, retina: true, parent: banner});
			var txt3_1 = bannerboy.createElement({backgroundImage: "txt3_1.png", left: 75, top: 37, retina: true, parent: banner});
			var lemonade_table = bannerboy.createElement({backgroundImage: "lemonade_table.png", top: 51, parent: banner});
			var logo = bannerboy.createElement({backgroundImage: "logo.png", top: 221, parent: banner});
			var endframe_lockup = bannerboy.createElement({top: 201, parent: banner});
				var logo2 = bannerboy.createElement({backgroundImage: "logo2.jpg", left: 180, parent: endframe_lockup});
				var cta = bannerboy.createElement({background: "#2e92d7", width: 180, height: 49, parent: endframe_lockup});
				var ctaCircle = bannerboy.createElement({width: 22, height: 22, left: 18, top: 12, border: "2px solid #FFF", borderRadius: "100%", overflow: "hidden", parent: endframe_lockup});
				var ctaArrow = bannerboy.createElement({className: "arrow", parent: ctaCircle}); ctaArrow.center();
				var ctaText = bannerboy.createElement({backgroundImage: "ctaText.png", left: 51, top: 16, retina: true, parent: endframe_lockup});
			var replayIcon = bannerboy.createElement({backgroundImage: "replayIcon.png", left: 7, top: 6, retina: true, parent: banner});
			var replayText = bannerboy.createElement({backgroundImage: "replayText.png", left: 23, top: 8, retina: true, parent: banner});
			var replayButton = bannerboy.createElement({width: 60, height: 20, display: "none", parent: banner});
			var replayBg = bannerboy.createElement({backgroundImage: "bg.jpg", opacity: 0, display: "none", parent: banner});
			var replayTable = bannerboy.createElement({backgroundImage: "table.png", top: 20, parent: replayBg});
			var replayLemon1 = bannerboy.createElement({left: 247, top: 101, parent: replayTable});
				replayLemon1.shadow = bannerboy.createElement({background:"#000", left: 10, top: 25, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: replayLemon1});
				replayLemon1.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: 0, parent: replayLemon1}); // actual lemon
			var replayLemon2 = bannerboy.createElement({left: 35, top: 105, parent: replayTable});
				replayLemon2.shadow = bannerboy.createElement({background:"#000", left: 20, top: 23, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: replayLemon2});
				replayLemon2.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: 20, parent: replayLemon2}); // actual lemon
			var replayLemon3 = bannerboy.createElement({left: 22, top: 106, parent: replayTable});
				replayLemon3.shadow = bannerboy.createElement({background:"#000", left: 0, top: 23, boxShadow: "0 0 2px 2px #000", scaleX: 5, opacity: 0.5, parent: replayLemon3});
				replayLemon3.lemon = bannerboy.createElement({backgroundImage: "lemon.png", rotation: -40, parent: replayLemon3}); // actual lemon

			////////////////////
			// A N I M A T I O N

			var lemonsRoll = new TimelineLite()
			.to([lemon1.lemon, lemon2.lemon, lemon3.lemon], 1, {rotation: "+=200", x: "+=20", ease: Power4.easeIn}, 0)
			.to([lemon1.shadow, lemon2.shadow, lemon3.shadow], 1, {x: "+=20", ease: Power4.easeIn}, 0);

			var pan = new TimelineLite()
			.to(container, 2, {x: - (bg.get("width") - width), ease: Power4.easeInOut}, 0)
			.to(table, 2, {x: - 200, ease: Power4.easeInOut}, 0)
			.to([txt1_line1, txt1_line2], 2, {x: -200, ease: Power4.easeInOut}, 0)
			.add(lemonsRoll, 0);

			var blur = new TimelineLite()
			.to(container, 0.5, {blur: 10, onUpdate: function () {
				if (browser == "MSIE" || browser == "rv:11.0" || browser == "Firefox") return;
				container.style.webkitFilter = "blur(" + container.blur + "px)";
				container.style.filter = "blur(" + container.blur + "px)";
				container.style.mozFilter = "blur(" + container.blur + "px)";
			}});

			headlights.in = new TimelineLite()
			.from(headlights, 0.4, {opacity: 0, ease: Power3.easeOut})
			.to(headlights, 1, {opacity: 0.7, ease: Power1.easeIn});

			black_cover.in = new TimelineLite()
			.to(black_cover, 0.5, {opacity: browser == "MSIE" || browser == "rv:11.0" || browser == "Firefox" ? 0.9 : 0.5});

			lemonade_table.in = new TimelineLite()
			.from(lemonade_table, 0.7, {y: 250, ease: Power2.easeOut});
			lemonade_table.out = new TimelineLite()
			.to(lemonade_table, 0.5, {y: 250, ease: Power2.easeIn});

			logo.in = new TimelineLite()
			.from(logo, 0.5, {y: 50, ease: Power2.easeOut});
			logo.out = new TimelineLite()
			.to(logo, 0.4, {y: 50, ease: Power2.easeIn});

			ctaCircle.in = new TimelineLite()
			.from(ctaCircle, 0.3, {scale: 0, ease: Back.easeOut});

			ctaArrow.spin = new TimelineLite()
			.to(ctaArrow, 0.2, {x: 20})
			.fromTo(ctaArrow, 0.1, {x: -20}, {x: 20, ease: Linear.easeNone})
			.fromTo(ctaArrow, 0.2, {x: -20}, {x: 20, ease: Linear.easeNone})
			.fromTo(ctaArrow, 0.2, {x: -20}, {x: 0, ease: Power2.easeOut});

			ctaText.in = new TimelineLite()
			.from(ctaText, 0.5, {x: -5, opacity: 0});

			replayIcon.spin = function () {
				return new TimelineLite()
				.from(replayIcon, 0.7, {rotation: -720, ease: Power1.easeInOut});
			};

			var replayIn = new TimelineLite()
			.from([replayIcon, replayText], 0.5, {opacity: 0})
			.add(replayIcon.spin, "-=0.5")
			.set(replayButton, {display: "block"});

			var replayOut = new TimelineLite()
			.to([replayIcon, replayText], 0.5, {opacity: 0});

			endframe_lockup.in = new TimelineLite()
			.from(endframe_lockup, 0.4, {y: 50, ease: Power2.easeOut})
			.add("arrow", "-=0.1")
			.add(ctaCircle.in, "arrow")
			.add(ctaArrow.spin, "arrow")
			.add(ctaText.in, "arrow");

			endframe_lockup.out = new TimelineLite()
			.to(endframe_lockup, 0.4, {y: 50, ease: Power2.easeIn});

			function textIn (txt, staggerAmount) {
				return new TimelineLite()
				.staggerFrom(txt, 0.4, {y: 10, opacity: 0, ease: Power2.easeOut}, staggerAmount);
			}

			var txt3Out = new TimelineLite()
			.staggerTo([txt3_1, txt3_2], 0.5, {y: 250, ease: Power2.easeIn}, 0.1);

			var loop = new TimelineLite()
			.to(replayBg, 0.5, {opacity: 1, display: "block"}, "+=0.5")
			.to(container, 0.1, {blur: 0, onUpdate: function () {
				if (browser == "MSIE" || browser == "rv:11.0" || browser == "Firefox") return;
				container.style.webkitFilter = "blur(" + container.blur + "px)";
				container.style.filter = "blur(" + container.blur + "px)";
				container.style.mozFilter = "blur(" + container.blur + "px)";
			}});

			var mainTimeline = new TimelineLite({onComplete: function () { busy = true; this.seek("loop"); }})
			.add("loop")
			.add(logo.in, "loop")
			.add("start")
			.add(textIn([txt1_line1, txt1_line2], 0.1), "start")
			.add("pan", "+=1")
			.add(pan, "pan")
			.add(textIn([txt2, legal], 0.1))
			.add(headlights.in, "+=1.5")
			.add("frame3", "+=1")
			.add(blur, "frame3")
			.add(black_cover.in, "frame3")
			.add(textIn([txt3_1, txt3_2], 0.1), "frame3+=0.5")
			.add(lemonade_table.in, "frame3+=0.7")
			.add(logo.out)
			.add(endframe_lockup.in)
			.call(function () { busy = false; })
			.add(replayIn)
			.addPause()
			.add("replay")
			.add(replayOut, "replay")
			.add(lemonade_table.out, "replay")
			.add(txt3Out, "replay+=0.2")
			.add(endframe_lockup.out, "replay+=0.2")
			.add(loop);

			mainTimeline.seek("start");

			TweenLite.to(introFade, 0.5, {opacity: 0, display: "none"});

			if (bannerboy.scrubber) bannerboy.scrubber({mainTimeline: mainTimeline});

			////////////////////////
			// I N T E R A C T I O N

			var mouseover = new TimelineLite({paused: true, onComplete: function () { this.pause(0); }})
			.to(ctaCircle, 0.2, {scale: 1.1})
			.to(ctaCircle, 0.2, {scale: 1})
			.to(ctaArrow, 0.2, {x: 20, ease: Power1.easeIn}, 0)
			.fromTo(ctaArrow, 0.1, {x: -20}, {x: 0, ease: Power2.easeOut});

			banner.onmouseenter = function () {
				if (mouseover.progress() === 0 && !busy) mouseover.play(0);
			};

			replayButton.onmouseenter = function () {
				TweenLite.from(replayIcon, 0.7, {rotation: -720, ease: Power1.easeInOut});
			};

			replayButton.onclick = function (event) {
				event.stopPropagation();
				mainTimeline.play();
			};
		});
	}

	function detectBrowser() {
		var browsers = ["Chrome", "Firefox", "Safari", "MSIE", "rv:11.0", "Opera"];
		var browser;

		for (var i = 0; i < browsers.length; i++) {
			if (navigator.userAgent.search(browsers[i]) > 0) {
				browser = browsers[i];
				break;
			}
		}

		return browser;
	}
	// set up DoubleClick listeners
	bannerboy.dc.init({
		onInit: function() {
			// add click listener
			banner.onclick = function() {
				Enabler.exit("exit");
			};
		},
		onPolite: function() {
			onPolite();
		},
		onVisible: function() {
			
		}
	});		
};