var bannerboy = bannerboy || {};
bannerboy.main = function() {

	// banner settings
	var width = 300;
	var height = 600;

	// create main container
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, overflow: "hidden", parent: document.body});
	var thinBorderWidth = 6;
	var thickBorderWidth = 65;
	var mouse = {x: 0, y: 0};
	var sockAnchor = {x: 0, y: 0};
	var dragging = false;
	var dropped = false;
	var debug = false;
	var autoPlaying = false;
	var images = [
		"bg.jpg",
		"washingMachine.png",
		"centrifuge_back.png",
		"clothes1.png",
		"clothes2.png",
		"clothes3.png",
		"clothes4.png",
		"clothes5.png",
		"clothes6.png",
		"clothes7.png",
		"clothes8.png",
		"clothes9.png",
		"clothes10.png",
		"clothes11.png",
		"hatch_open_top.png",
		"hatch_closed.png",
		"hatch_open_bottom.png",
		"sock_floor.png",
		"dot1.png",
		"dot2.png",
		"dot3.png",
		"dot4.png",
		"dot5.png",
		"txt_1.png",
		"sock_drag.png",
		"txt_2.png",
		"txt_3.png",
		"txt_4.png",
		"txt_5.png",
		"txt_6.png",
		"ctaArrow.png",
		"txt_cta.png",
		"logo_samsung.png",
		"logo_jl.png",
	];

	function onImagesLoaded () {
		/* Create elements
		================================================= */
		CSSPlugin.defaultTransformPerspective = 0;
		var bg = bannerboy.createElement({backgroundImage: "bg.jpg", parent: banner});
		var washingMachineContainer = bannerboy.createElement({left: 54, top: 179, width: 195, height: 251, parent: banner});
			var washingMachine = bannerboy.createElement({backgroundImage: "washingMachine.png", parent: washingMachineContainer});
			var centrifuge = bannerboy.createElement({left: 47, top: 65, width: 99, height: 99, parent: washingMachineContainer});
				var centrifuge_back = bannerboy.createElement({backgroundImage: "centrifuge_back.png", parent: centrifuge});
				var clothes1 = bannerboy.createElement({backgroundImage: "clothes1.png", left: 1, top: 18, parent: centrifuge});
				var clothes2 = bannerboy.createElement({backgroundImage: "clothes2.png", left: 10, parent: centrifuge});
				var clothes3 = bannerboy.createElement({backgroundImage: "clothes3.png", parent: centrifuge});
				var clothes4 = bannerboy.createElement({backgroundImage: "clothes4.png", left: 54, top: 13, parent: centrifuge});
				var clothes5 = bannerboy.createElement({backgroundImage: "clothes5.png", left: 68, top: 22, parent: centrifuge});
				var clothes6 = bannerboy.createElement({backgroundImage: "clothes6.png", left: 41, top: 14, parent: centrifuge});
				var clothes7 = bannerboy.createElement({backgroundImage: "clothes7.png", left: 10, top: 67, parent: centrifuge});
				var clothes8 = bannerboy.createElement({backgroundImage: "clothes8.png", left: 5, top: 73, parent: centrifuge});
				var clothes9 = bannerboy.createElement({backgroundImage: "clothes9.png", top: 15, parent: centrifuge});
				var clothes10 = bannerboy.createElement({backgroundImage: "clothes10.png", left: 29, top: 6, opacity: 0, parent: centrifuge});
				var clothes11 = bannerboy.createElement({backgroundImage: "clothes11.png", left: 12, top: 67, parent: centrifuge});
			var hatch_open_top = bannerboy.createElement({backgroundImage: "hatch_open_top.png", left: 56, top: 48, parent: washingMachineContainer});
			var hatch_closed = bannerboy.createElement({backgroundImage: "hatch_closed.png", left: 56, top: 48, parent: washingMachineContainer});
			var hatch_open_bottom = bannerboy.createElement({backgroundImage: "hatch_open_bottom.png", left: 57, top: 103, parent: washingMachineContainer});
			putInContainer([hatch_open_top, hatch_closed, hatch_open_bottom]);
		var sock_floor = bannerboy.createElement({backgroundImage: "sock_floor.png", left: 32, top: 434, parent: banner});
		var dots = bannerboy.createElement({left: 113, top: 276, width: 79, height: 174, parent: banner});
			var dot1 = bannerboy.createElement({backgroundImage: "dot1.png", top: 155, parent: dots});
			var dot2 = bannerboy.createElement({backgroundImage: "dot2.png", left: 18, top: 131, parent: dots});
			var dot3 = bannerboy.createElement({backgroundImage: "dot3.png", left: 34, top: 95, parent: dots});
			var dot4 = bannerboy.createElement({backgroundImage: "dot4.png", left: 26, top: 38, parent: dots});
			var dot5 = bannerboy.createElement({backgroundImage: "dot5.png", centerX: true, parent: dots});
		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 25, top: 27, retina: true, parent: banner});
		var sock_drag = bannerboy.createElement({backgroundImage: "sock_drag.png", left: 74, top: 311, parent: banner});
		var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", left: 25, top: 27, retina: true, parent: banner});
		var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", left: 26, top: 27, retina: true, parent: banner});
		var txt_4;
		if (isRetina()) {
			txt_4 = bannerboy.createElement({backgroundImage: "txt_4.png", left: 26, top: 64, retina: true, parent: banner});
		} else {
			txt_4 = bannerboy.createElement({backgroundImage: "txt_4_sm.png", left: 26, top: 64, parent: banner});
		}
		var txt_5 = bannerboy.createElement({backgroundImage: "txt_5.png", left: 170, top: 450, retina: true, parent: banner});
		var txt_6 = bannerboy.createElement({backgroundImage: "txt_6.png", left: 171, top: 498, retina: true, parent: banner});
		var cta = bannerboy.createElement({left: 26, top: 124, width: 119, height: 14, parent: banner});
			var ctaArrow = bannerboy.createElement({backgroundImage: "ctaArrow.png", left: 112, top: 4, retina: true, parent: cta});
			var txt_cta = bannerboy.createElement({backgroundImage: "txt_cta.png", retina: true, parent: cta});
		var logo_samsung = bannerboy.createElement({backgroundImage: "logo_samsung.png", left: 26, top: 501, retina: true, parent: banner});
		var logo_jl = bannerboy.createElement({backgroundImage: "logo_jl.png", left: 182, top: 557, retina: true, parent: banner});

		var sockMask = bannerboy.createElement({width: width, height: 276, opacity: debug ? 0.5 : 1, background: debug ? "#000" : "", parent: banner});
		sockMask.appendChild(sock_drag);

		var dropArea = bannerboy.createElement({width: 50, height: 150, left: 124, top: 100, opacity: 0.3, background: debug ? "green" : "", parent: banner});
		// var dropPoint = bannerboy.createElement({width: 5, height: 5, left: 150, top: 300, background: debug ? "red" : "", parent: banner});

		// put sock in container to be able to controls it's anchor point (not the same as transformOrigin!)
		sock_drag.set({left: 0, top: 0});
		putInContainer([sock_drag]);
		sock_drag.parentNode.set({display: "none", transformOrigin: "0% 0%"});
		sock_drag.parentNode.set({x: sock_floor.get("left"), y: sock_floor.get("top")});
		logo_jl.set({zIndex: 10});

		// set clothes in centrifuge to starting values
		centrifuge.set({overflow: "hidden", borderRadius: "100%"});
		clothes1.set({y: 30});
		clothes2.set({y: 30});
		clothes3.set({y: 30});
		clothes4.set({y: 40});
		clothes5.set({y: 20});
		clothes6.set({y: 20});
		clothes9.set({y: 20});
		clothes10.set({y: 80});
		clothes11.set({y: 10});

		// create borders
		bannerboy.createElement({width: thinBorderWidth, height: height, background: "#FFF", parent: banner});
		bannerboy.createElement({width: thinBorderWidth, height: height, background: "#FFF", right: 0, parent: banner});
		bannerboy.createElement({width: width, height: thinBorderWidth, background: "#FFF", top: 0, parent: banner});
		bannerboy.createElement({width: width, height: thickBorderWidth, bottom: 0, background: "#FFF", parent: banner});
		bannerboy.createElement({width: 1, height: height, background: "#a3a3a3", parent: banner});
		bannerboy.createElement({width: width, height: 1, background: "#a3a3a3", parent: banner});
		bannerboy.createElement({width: 1, height: height, background: "#a3a3a3", right: 0, parent: banner});
		bannerboy.createElement({width: width, height: 1, background: "#a3a3a3", bottom: 0, parent: banner});

		/* Initiate
		================================================= */
		animations();
		timeline();
		interaction();

		/* Animations
		================================================= */
		var main_tl;
		function timeline() {
			// create main_tl here
			main_tl = new BBTimeline({paused: true})
			.add(textOut(txt_1))
			.offset(0.5)
			.add(textIn(txt_2))
			.chain()
			.addPause()
			.add(textOut(txt_2))
			.chain()
			.add(textIn(txt_3))
			.offset(0.1)
			.add(textIn(txt_4))
			.offset(0.1)
			.add(textIn(txt_5))
			.add(textIn(txt_6))
			.add(textIn(cta))
			.add(textIn(logo_samsung))
			.offset(1)
			.to(ctaArrow, 0.3, {x: 5})
			.chain()
			.to(ctaArrow, 0.2, {x: 0})
			.chain()
			.to(ctaArrow, 0.3, {x: 5})
			.chain()
			.to(ctaArrow, 0.2, {x: 0})

		}

		function animations() {
			// add animations that will go into main_tl here
			var dotsPulse = new BBTimeline({onComplete: function () { dotsPulse.seek(0); }})
			.staggerFrom([dot1, dot2, dot3, dot4, dot5], 0.5, {opacity: 0.3, ease: Power1.easeInOut}, 0.2)
			.offset(0.5)
			.staggerTo([dot1, dot2, dot3, dot4, dot5], 0.5, {opacity: 0.3, ease: Power1.easeInOut}, 0.2);

			washingMachine.open = new BBTimeline({paused: true})
			.to(hatch_closed, 0.5, {rotationX: 90, transformOrigin: "50% 100%", ease: Power1.easeIn})
			.chain(-0.1)
			.from(hatch_open_bottom, 0.5, {rotationX: -90, transformOrigin: "50% 0%", ease: Power1.easeOut});

			washingMachine.close = new BBTimeline({paused: true})
			.to(hatch_open_bottom, 0.3, {rotationX: -90, transformOrigin: "50% 0%", ease: Power1.easeIn})
			.chain(-0.1)
			.to(hatch_closed, 0.2, {rotationX: 0, transformOrigin: "50% 100%", ease: Power1.easeIn})
			.chain()
			.add(function () {
				main_tl.play();
			});

			washingMachine.start = new BBTimeline({onComplete: function () { washingMachine.start.seek(0); }})
			.to(centrifuge, 3, {rotation: -360, ease: Linear.easeNone})
			.offset(0.7)
			.staggerTo([clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8, clothes9, clothes10, clothes11], 0.5, {cycle: {y: [0, 0, 0, 0, -30, -30, -30, 30, -40, -10, -80]}, ease: Power1.easeIn}, 0.05)
			.offset(1.2)
			.staggerTo([clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8, clothes9, clothes10, clothes11], 0.5, {cycle: {y: [30, 30, 30, 40, 20, 20, 0, 0, 20, 80, 10]}, ease: Power1.easeIn}, 0.05);

			// scrubber(washingMachine.start);
			TweenLite.fromTo(washingMachine.start, 4, {timeScale: 0}, {timeScale: 1.5, ease: Linear.easeNone});
		}

		function textIn (text) {
			return new BBTimeline()
			.from(text, 0.5, {opacity: 0, ease: Power1.easeInOut});
		}

		function textOut (text) {
			return new BBTimeline()
			.to(text, 0.5, {opacity: 0, ease: Power1.easeInOut});
		}

		/* Interactions
		================================================= */
		function interaction() {

			// if 15 seconds pass without interaction, run autoplay
			// TweenLite.delayedCall(15, autoPlay);

			banner.onmouseenter = function () {
				TweenLite.to(dots, 0.5, {opacity: 0, display: "none"});
			};
			banner.onmouseleave = function () {
				TweenLite.to(dots, 0.5, {opacity: 1, display: "block"});
			};

			banner.onmousemove = function (e) {
				if (autoPlaying) return;
				mouse.x = e.clientX;
				mouse.y = e.clientY;
			};

			banner.onmouseup = function (e) {
				dropSock();
			};

			function dropSock () {
				// let go of sock
				if (dragging) {
					dragging = false;
					dropped = true;
					// sockParticle.vx = speedX;
					// sockParticle.vy = speedY;

					// if sock is in correct place
					if (mouse.x > dropArea.get("left") && mouse.x < dropArea.get("left") + dropArea.get("width") &&
						mouse.y > dropArea.get("top") && mouse.y < dropArea.get("top") + dropArea.get("height") &&
						Math.abs(speedX) < 3 && Math.abs(speedY) < 10) {
							TweenLite.to(sock_drag.parentNode, 0.5, {scale: 0.6});
							sockMask.set({overflow: "hidden"});
							TweenLite.to(clothes10, 0.5, {opacity: 1, delay: 0.5});
					}
					dots.set({visibility: "hidden"});
					TweenLite.delayedCall(0.5, function () {
						washingMachine.close.play();
					});
				}
			}

			sock_floor.onmousedown = function (e) {
				if (autoPlaying) return;
				TweenLite.killDelayedCallsTo(autoPlay);
				initiateDrag(e.clientX, e.clientY);
			};

			function initiateDrag (x, y) {
				var sockClick = (x - sock_floor.get("left")) / sock_floor.get("width");
				// sockClick = bannerboy.utils.map(sockClick, 0, 1, 1, 0);
				sockAnchor.x = sockClick;
				sockAnchor.y = 0.5;
				setAnchorPoint(sock_drag, sockAnchor.x, sockAnchor.y);
				sock_drag.parentNode.set({x: x, y: y, display: "block"});
				TweenLite.from(sock_drag, 0.3, {scaleY: 0.2});
				sock_floor.set({display: "none"});
				dragging = true;

				washingMachine.open.play();
				main_tl.play();
			}

			function autoPlay () {
				console.log("autoplay");
				autoPlaying = true;
				dragging = true;
				initiateDrag(64, 450);
				mouse.x = 64;
				mouse.y = 450;
				TweenLite.to(dots, 0.5, {opacity: 0, display: "none", visibility: "hidden"});
				TweenLite.to(mouse, 1.5, {x: 150, y: 150, ease: Power1.easeInOut, onComplete: function () {
					TweenLite.delayedCall(1, dropSock);
				}});
			}
		}

		TweenLite.ticker.addEventListener("tick", update);
		var gravity = 0;
		var friction = 0.97;
		var points = [];
		var stick;

		points.push({x: sock_drag.parentNode.get("x"), y: sock_drag.parentNode.get("y"), oldx: sock_drag.parentNode.get("x"), oldy: sock_drag.parentNode.get("y")});
		points.push({x: sock_drag.parentNode.get("x") + sock_drag.parentNode.get("width"), y: sock_drag.parentNode.get("y"), oldx: sock_drag.parentNode.get("x") + sock_drag.parentNode.get("width"), oldy: sock_drag.parentNode.get("y")});
		stick = {p0: points[0], p1: points[1], length: bannerboy.utils.dist(points[0].x, points[1].y, points[1].x, points[1].y)};
		var debug1 = bannerboy.createElement({width: 5, height: 5, background: "red", display: "none", parent: banner});
		var debug2 = bannerboy.createElement({width: 5, height: 5, background: "black", display: "none", parent: banner});

		var lastX = 0;
		var lastY = 0;
		var speedX = 0;
		var speedY = 0;
		function update () {
			var x = mouse.x;
			var y = mouse.y;
			speedX = mouse.x - lastX;
			speedY = mouse.y - lastY;
			lastX = mouse.x;
			lastY = mouse.y;

			for (var i = 0; i < points.length; i++) {
				var p = points[i];
				var vx = (p.x - p.oldx) * friction;
				var vy = (p.y - p.oldy) * friction;

				p.oldx = p.x;
				p.oldy = p.y;
				p.x += vx;
				p.y += vy;
				p.y += gravity;
			}

			if (dragging) {
				gravity = 0.8;
				// var rotationOffset = -180 * sockAnchor.x;
				points[0].x = mouse.x;
				points[0].y = mouse.y;
			}

			updateStick();

			var rotationOffset = 0;
			if (sockAnchor.x > 0.5) rotationOffset = -180;
			var rotation = bannerboy.utils.toDegrees(bannerboy.utils.angle(stick.p0.x, stick.p0.y, stick.p1.x, stick.p1.y)) + rotationOffset;
			sock_drag.parentNode.set({rotation: rotation});

			// update sock position
			debug1.set({x: stick.p0.x, y: stick.p0.y});
			debug2.set({x: stick.p1.x, y: stick.p1.y});
			sock_drag.parentNode.set({x: stick.p0.x, y: stick.p0.y});
		}

		function updateStick() {
			var dx = stick.p1.x - stick.p0.x;
			var dy = stick.p1.y - stick.p0.y;
			var distance = Math.sqrt(dx * dx + dy * dy);
			// console.log(stick.length);
			var difference = stick.length - distance;
			var percent = difference / distance / 2;
			var offsetX = dx * percent;
			var offsetY = dy * percent;

			stick.p0.x -= offsetX;
			stick.p0.y -= offsetY;
			stick.p1.x += offsetX;
			stick.p1.y += offsetY;
		}

		/* Helpers
		================================================= */
		function putInContainer (elements, overflow) {
			for (var i = 0; i < elements.length; i++) {
				var element = elements[i];
				element.container = bannerboy.createElement({left: element.get("left"), top: element.get("top"), width: element.get("width"), height: element.get("height"), overflow: overflow || "visible", parent: element.parentNode});
				element.set({left: 0, top: 0});
				element.container.appendChild(element);
			}
		}

		function setAnchorPoint (element, x, y) {
			TweenLite.set(element, {left: - element.get("width") * x, top: - element.get("height") * y});
		}

		function isRetina() {
	        return window.devicePixelRatio > 1;
	    }
		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	}

	// set up DoubleClick listeners
	bannerboy.preloadImages(images, onImagesLoaded);
};
window.addEventListener('message', function(e) {
	if (e.data == false)
		TweenLite.ticker.fps(0);
	else
		TweenLite.ticker.fps(60);
});