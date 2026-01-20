var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", backgroundColor: "#000", width: width, height: height, overflow: "hidden", cursor: "pointer", parent: document.body});
	var loop = 3;
	var tl_main;
	var canvas;
	var ctx;
	var canvas1;
	var ctx1;

	var images = [
		"copper_top.jpg", 
		"logo_duracell_sm.png", 
		"logo_duracell_lg.png", 
		"copper_left.jpg", 
		"scene_1.jpg", 
		"scene_2.jpg", 
		"scene_3.jpg", 
		"txt_1_1.png", 
		"txt_1_2.png", 
		"txt_2_1.png", 
		"txt_2_2.png", 
		"txt_3_1.png", 
		"txt_3_2_2.png", 
		"txt_3_2_1.png", 
		"txt_4.png", 
		"txt_5.png", 
		"battery_body.png",
		"battery_blur.png", 
		"battery_light.png", 
		"battery_glow.png", 
		"legal.png",
		"noise.png"
	];

	var particle_images = [
		"rain1.png",
		"rain2.png"
	];

	var imageSequence = [
		"001.png",
		"002.png",
		"003.png",
		"004.png",
		"005.png",
		"006.png",
		"007.png",
		"008.png",
		"009.png",
		"010.png",
		"011.png",
		"012.png",
		"013.png"
	];

	images = images.concat(particle_images);
	images = images.concat(imageSequence);
	bannerboy.preloadImages(images, function() {
	
		/* Create elements
		================================================= */
		var endframe = new Endframe();

		var scenes = bannerboy.createElement({width: width, height: height, top: 42, parent: banner});
			var scene_1 = bannerboy.createElement({backgroundImage: "scene_1.jpg", parent: scenes});
			var scene_2 = bannerboy.createElement({backgroundImage: "scene_2.jpg", parent: scenes});
			var scene_3 = bannerboy.createElement({backgroundImage: "scene_3.jpg", parent: scenes});
		var txt_3 = bannerboy.createElement({top: 120, width: 264, height: 40, centerX: true, parent: banner});
			var txt_3_1 = bannerboy.createElement({backgroundImage: "txt_3_1.png", retina: true, parent: txt_3});
			var txt_3_2 = bannerboy.createElement({left: 56, top: 25, width: 155, height: 16, parent: txt_3});
				var txt_3_2_2 = bannerboy.createElement({backgroundImage: "txt_3_2_2.png", left: 49, retina: true, parent: txt_3_2});
				var txt_3_2_1 = bannerboy.createElement({backgroundImage: "txt_3_2_1.png", top: 4, retina: true, parent: txt_3_2});
		var txt_2 = bannerboy.createElement({left: 15, top: 59, parent: banner});
			var txt_2_1 = bannerboy.createElement({backgroundImage: "txt_2_1.png", left: 1, retina: true, parent: txt_2});
			var txt_2_2 = bannerboy.createElement({backgroundImage: "txt_2_2.png", top: 23, retina: true, parent: txt_2});
		var txt_1 = bannerboy.createElement({left: 15, top: 60, parent: banner});
			var txt_1_1 = bannerboy.createElement({backgroundImage: "txt_1_1.png", retina: true, parent: txt_1});
			var txt_1_2 = bannerboy.createElement({backgroundImage: "txt_1_2.png", top: 23, retina: true, parent: txt_1});

		var copper_top = bannerboy.createElement({backgroundImage: "copper_top.jpg", top: -13, parent: banner});
		var logo_duracell_sm = bannerboy.createElement({backgroundImage: "logo_duracell_sm.png", left: 261, top: 12, parent: banner});
		var bg = bannerboy.createElement({backgroundColor: "#000000", width: 300, height: 250, parent: banner});
		var logo_duracell_lg = bannerboy.createElement({backgroundImage: "logo_duracell_lg.png", left: 125, top: 114, retina: true, parent: banner});
		var copper_left = bannerboy.createElement({backgroundImage: "copper_left.jpg", parent: banner});
		
		var battery = new Battery(18, 68);

		var lightning_left = bannerboy.createElement({backgroundImage: "lightning_left.png", left: 105, opacity: 0, parent: scene_1});
		var lightning_right = bannerboy.createElement({backgroundImage: "lightning_right.png", left: 195, opacity: 0, parent: scene_1});
		var environment_light = bannerboy.createElement({backgroundColor: "#fff", width: width, height: height, opacity: 0, parent: banner});

		/* Create canvas
		================================================= */
		canvas = bannerboy.createElement({type: "canvas", alpha: 0.8, width: width, height: height, parent: scenes});
		ctx = canvas.getContext("2d");
		canvas1 = bannerboy.createElement({type: "canvas", alpha: 0.5, width: width, height: height, parent: scenes});
		ctx1 = canvas1.getContext("2d");

		base_image = new Image();
		base_image.src = 'noise.png';
		
		/* Initiate
		================================================= */
		animations();
		timeline();
		interaction();
		
		/* Animations
		================================================= */
		function timeline() {
			tl_main = new BBTimeline({onComplete: function() { /*tl_main.seek("loop")*/ }})
			.add("loop")

			// frame 1
			.add(copper_left.tl_in)
			.offset(0.2)
			.add(logo_duracell_lg.tl_in)
			.chain(0.6)
			.add(logo_duracell_lg.tl_out)
			.offset(0.2)
			.add(copper_left.tl_out)
			.offset(0.1)
			.add(bg.tl_out)

			// frame 2
			.add(copper_top.tl_in)
			.offset(0.8)
			.add(lightning(0.95))
			.add(txt_1.tl_in)
			.chain(0.8)
			.add(txt_1.tl_out)
			.chain()

			// frame 3
			.add(canvas1.tl_storm)
			.add(scenes.tl_switch1)
			.add(txt_2.tl_in)
			.add(lightning(0.85))
			.chain(0.8)
			.add(txt_2.tl_out)
			.chain()

			// frame 4
			.add(scenes.tl_switch2)
			.add(txt_3.tl_in)
			.chain(1.4)
			.add(txt_3.tl_out)
			.add(scenes.tl_out)
			.add(copper_top.tl_out)
			.offset(0.33)

			// frame 5
			.add(battery.tl_in)
			.offset(0.45)
			.add(endframe.tl_in)

			scrubber(tl_main);
		}
	
		function animations() {

			// storm
			canvas1.tl_storm = new BBTimeline()
			.to(canvas1, 0.3, {alpha: 0.85});

			// scenes
			scenes.tl_switch1 = new BBTimeline()
			.from(scene_2, 0.02, {opacity: 0, ease: Power1.easeOut})
			.chain()
			.to(scene_2, 0.07, {opacity: 0.2, ease: Power1.easeOut})
			.chain()
			.to(scene_2, 0.05, {opacity: 0.6, ease: Power1.easeOut})
			.chain()
			.to(scene_2, 0.05, {opacity: 0.2, ease: Power1.easeOut})
			.chain()
			.to(scene_2, 0.2, {opacity: 1, ease: Power2.easeIn});

			scenes.tl_switch2 = new BBTimeline()
			.from(scene_3, 0.1, {opacity: 0, ease: Power2.easeIn})
			.chain()
			.to(scene_3, 0.08, {opacity: 0.3, ease: Power2.easeOut})
			.chain()
			.to(scene_3, 0.6, {opacity: 1, ease: Power2.easeInOut})

			scenes.tl_out = new BBTimeline()
			.to(scenes, 0.5, {opacity: 0, ease: Power2.easeIn})

			// logo_duracell_lg
			logo_duracell_lg.tl_in = new BBTimeline()
			.from(logo_duracell_lg, 0.8, {x: -300, ease: Power3.easeInOut});

			logo_duracell_lg.tl_out = new BBTimeline()
			.to(logo_duracell_lg, 0.45, {x: -300, ease: Back.easeIn.config(1)});

			// copper_left
			copper_left.tl_in = new BBTimeline()
			.from(copper_left, 0.7, {x: -150, ease: Power2.easeInOut});

			copper_left.tl_out = new BBTimeline()
			.to(copper_left, 0.28, {x: -150, ease: Power2.easeIn});

			// copper_top
			copper_top.tl_in = new BBTimeline()
			.from(copper_top, 0.6, {y: -50, ease: Power2.easeInOut})
			.chain()
			.from(logo_duracell_sm, 0.5, {x: 75, ease: Back.easeOut.config(1)});

			copper_top.tl_out = new BBTimeline()
			.to(logo_duracell_sm, 0.5, {x: 75, ease: Back.easeIn.config(1)})

			// bg
			bg.tl_out = new BBTimeline()
			.to(bg, 0.8, {opacity: 0, ease: Power2.easeIn});
		
			// txt_1
			txt_1.tl_in = new BBTimeline()
			.from(txt_1_1, 0.7, {opacity: 0, ease: Power2.easeInOut})
			.offset(0.1)
			.from(txt_1_2, 0.7, {opacity: 0, ease: Power2.easeInOut});

			txt_1.tl_out = new BBTimeline()
			.to(txt_1, 0.5, {opacity: 0, ease: Power2.easeIn});

			// txt_2
			txt_2.tl_in = new BBTimeline()
			.from(txt_2_1, 0.7, {opacity: 0, ease: Power2.easeInOut})
			.offset(0.1)
			.from(txt_2_2, 0.7, {opacity: 0, ease: Power2.easeInOut});

			txt_2.tl_out = new BBTimeline()
			.to(txt_2, 0.5, {opacity: 0, ease: Power2.easeIn});

			// txt_3
			txt_3.tl_in = new BBTimeline()
			.from(txt_3_1, 0.7, {opacity: 0, ease: Power2.easeInOut})
			.offset(0.1)
			.from(txt_3_2, 0.7, {opacity: 0, ease: Power2.easeInOut});

			txt_3.tl_out = new BBTimeline()
			.to(txt_3, 0.5, {opacity: 0, ease: Power2.easeIn});
		}

		function lightning(intensity) {
			return new BBTimeline()
			.to(lightning_left, 0.1, {opacity: 1 * intensity})
			.to(environment_light, 0.1, {opacity: 1 * intensity})
			.chain()
			.to(lightning_right, 0.1, {opacity: 1 * intensity})
			.to(environment_light, 0.1, {opacity: 0.2})
			.offset(0.1)
			.to(lightning_left, 0.2, {opacity: 0})
			.to(environment_light, 0.1, {opacity: 0.6 * intensity})
			.chain()
			.to(lightning_right, 0.2, {opacity: 0})
			.to(environment_light, 0.1, {opacity: 0.0})
			.to(lightning_left, 0.1, {opacity: 1 * intensity})
			.chain()
			.to(lightning_left, 0.3, {opacity: 0});
		}

		/* Objects
		================================================= */
		function Endframe() {
			var container = bannerboy.createElement({width: width, height: height, parent: banner});
				var txt_5 = bannerboy.createElement({backgroundImage: "txt_5.png", top: 185, centerX: true, retina: true, parent: container});
				var divider = bannerboy.createElement({backgroundColor: "#98211d", width: 219, height: 2, top: 173, centerX: true, parent: container});
				var txt_4 = bannerboy.createElement({backgroundImage: "txt_4.png", top: 146, centerX: true, retina: true, parent: container});
				var legal = bannerboy.createElement({backgroundImage: "legal.png", top: 221, centerX: true, retina: true, parent: container});

			container.tl_in = new BBTimeline()
			.from(txt_4, 0.38, {y: 20, opacity: 0, ease: Power2.easeOut})
			.chain(-0.18)
			.from(divider, 0.4, {scaleX: 0, ease: Back.easeOut.config(1.1)})
			.offset(0.08)
			.from(txt_5, 0.52, {opacity: 0, ease: Power2.easeInOut});

			return container;
		}

		function Battery(left, top) {
			var container = bannerboy.createElement({left: left, top: top, parent: banner});

			var batteryCanvas = bannerboy.createElement({type: "canvas", width: 95, height: 63, parent: container});
			var battery_head = new bannerboy.sequence(batteryCanvas, imageSequence, 31, false);
			var battery_body = bannerboy.createElement({backgroundImage: "battery_body.png", left: 95, x: 5, transformOrigin: "center right", parent: container});
			var battery_light = bannerboy.createElement({backgroundImage: "battery_light.png", left: 13, opacity: 0.95, transformOrigin: "bottom center", parent: container});
			var battery_blur = bannerboy.createElement({backgroundImage: "battery_blur.png", left: -117, parent: battery_body});
			var battery_flash = bannerboy.createElement({backgroundImage: "battery_glow.png", left: 30, top: -25, scale: 2.5, opacity: 0.5, parent: container});
			var battery_glow = bannerboy.createElement({backgroundImage: "battery_glow.png", left: -64, top: -54, parent: container});

			// battery
			container.tl_fall = new BBTimeline()
			.from(battery_body, 0.3, {x: -400, ease: Power3.easeIn})
			.chain()
			.to(battery_body, 0.2, {x: 0, ease: Power3.easeOut})
			.to(battery_body, 0.05, {scaleX: 0.99, ease: Power2.easeOut})
			.offset(0.05)
			.to(battery_body, 0.2, {scaleX: 1, ease: Power2.easeInOut});

			container.tl_glow = new BBTimeline()
			.from(battery_glow, 0.5, {scale: 0, ease: Power4.easeInOut})
			.offset(0.22)
			.from(battery_glow, 1.5, {x: 225, ease: Power4.easeOut})
			.offset(0.1)
			.to(battery_glow, 0.7, {scaleY: 0, ease: Power2.easeIn})
			.offset(0.1)
			.to(battery_glow, 0.6, {scaleX: 0.2, ease: Power2.easeIn});

			container.tl_shut = new BBTimeline()
			.to(container, 0.1, {x: 7, ease: Power1.easeOut})
			.chain()
			.to(container, 0.3, {x: 0, ease: Power1.easeInOut});

			container.tl_effects = new BBTimeline()
			.from(battery_light, 0.05, {opacity: 0, ease: Power4.easeIn})
			.from(battery_blur, 0.1, {scaleX: 0.5, opacity: 0, ease: Power2.easeOut})
			.chain()
			.to(battery_light, 0.5, {opacity: 0, ease: Power2.easeOut})
			.to(battery_blur, 0.3, {scaleX: 0.7, opacity: 0, ease: Power2.easeIn});

			container.tl_flash = new BBTimeline()
			.from(battery_flash, 0.15, {x: -100, scale: 2, opacity: 0, ease: Power2.easeOut})
			.chain()
			.to(battery_flash, 0.4, {scale: 1, opacity: 0, ease: Power2.easeIn});

			container.tl_in = new BBTimeline()
			.add(container.tl_fall)
			.offset(0.5)
			.call(function() {
				battery_head.timeline.play();
			})
			.offset(0.27)
			.add(container.tl_glow)
			.offset(0.1)
			.add(container.tl_effects)
			.add(container.tl_shut)
			.offset(0.1)
			.add(container.tl_flash);

			return container;
		}
		
		/* Interactions
		================================================= */
		function interaction() {
			banner.onmouseenter = function() {

			}

			banner.onmouseleave = function() {
				
			}

			banner.onclick = function() {
				window.open(window.clickTag, "_blank");
			}
		}
	
		/* Helpers
		================================================= */
		function loopstop() {
			loop--;
			
			if (loop === 0) {
				tl_main.pause();
			}
		}
		
		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});

	/* Particles
	================================================= */
	var numParticles = 400;
	var gravity = 1;
	var emitter = {x: 0, y: 0};
	var particlesPerSecond = 200;
	var turbulence = 0.8;
	// var friction = 0.96;

	var activeParticles = [];
	var idleParticles = [];
	var confettiShapes = [];
	var lifespan = numParticles / particlesPerSecond;
	var interval;
	var currentTime;
	var fps;
	var oldTime;

	startSnow();
	function startSnow() {
		createParticles();
		addListeners();
		setParticleFlow(particlesPerSecond);
	}

	function createParticles() {
		createSnowflakes();
		for(var i = 0; i < numParticles; ++i) {
			var particle = bannerboy.particle.create(0, 0, 0, 0, 0);
			idleParticles.push(particle);
		}
	}

	function createSnowflakes() {
		for(var i = 0; i < particle_images.length; ++i) {
			var img = new Image();
			img.src = particle_images[i];
			particle_images[i] = img;
		}
	}

	function setParticleFlow(particlesPerSecond) {
		clearInterval(interval);
		interval = setInterval(launchParticle, 1000 / particlesPerSecond);
	}

	function stopParticleFlow() {
		clearInterval(interval);
	}



	function launchParticle(num) {
		var birthTime = new Date().getTime() / 1000;
		for(var i = 0; i < (num || 1); ++i) {
			var particle = idleParticles.length ? idleParticles.shift() : activeParticles.shift();
			particle.x = emitter.x + bannerboy.utils.randomRange(0, width);
			particle.y = emitter.y;
			// particle.friction = friction;
			particle.frame = 0;
			particle.lifespan = lifespan;
			particle.birthTime = birthTime;
			particle.img = particle_images[bannerboy.utils.randomInt(0, particle_images.length - 1)];
			particle.setHeading(Math.PI/2);

			var rnd = Math.random();

			if(rnd < 0.05) {
				particle.scaleFactor = 3;
			particle.speedFactor = 1;
			particle.alpha = 0.7;
			particle.turbulence = 0;
			particle.friction = 0.96;
			particle.gravity = 1.3;
			particle.dir = 0;
			} else  if(rnd < 0.3) {
				particle.scaleFactor = 2;
			particle.speedFactor = 1;
			particle.alpha = 0.8;
			particle.turbulence = 0;
			particle.friction = 0.96;
			particle.gravity = 1.2;
			particle.dir = 0;
			} else {
			particle.scaleFactor = 1.5;
			particle.speedFactor = 1;
			particle.alpha = 0.9;
			particle.turbulence = 0;
			particle.friction = 0.96;
			particle.gravity = 1.1;
			particle.dir = 0;
			}

			

			particle.scale = bannerboy.utils.randomRange(0.8, 1);	
			
			particle.ctx = ctx;
			
			activeParticles.push(particle);
		}
	}

	function renderParticle(particle) {
		if (!particle.ctx) return;

		particle.ctx.save();
		particle.ctx.globalAlpha = particle.alpha;
		particle.ctx.translate(particle.x, particle.y);
		particle.ctx.rotate(particle.rotation);
		particle.ctx.scale(particle.scale * particle.scaleFactor, particle.scale * particle.scaleFactor);
		var image = particle.img;
		particle.ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
		particle.ctx.restore();
	}

	// update
	var a = 0;
	var r = 0;
	var ctx1Pos = 0;
	function update() {
		if (!ctx) return;

		storm();
		
		var i = activeParticles.length;
		while(i--) {
			var particle = activeParticles[i];
			particle.accelerate(bannerboy.utils.randomRange(-particle.turbulence, particle.turbulence)  * particle.speedFactor, bannerboy.utils.randomRange(-particle.turbulence, particle.turbulence) * particle.speedFactor);
			particle.accelerate(bannerboy.utils.randomRange(0.1, 0.3) * particle.dir, 0);
			particle.update();
			var lifeFactor = particle.frame / (particle.lifespan * fps);

			particle.frame++;
			//particle.scale = bannerboy.utils.map(particle.frame, 0, 50, 0, 1, true)
			
			if(particle.x > width + particle.img.width * particle.scale * particle.scaleFactor ||
				particle.y > height + particle.img.width * particle.scale * particle.scaleFactor ||
				particle.x < 0 - particle.img.width * particle.scale * particle.scaleFactor ||
				particle.y < 0 - particle.img.height * particle.scale * particle.scalefactor) {
				if (particle.frame > 50) {
					idleParticles.push(activeParticles.splice(i, 1)[0]);
				}
			} else {
				renderParticle(particle);
			}
		}
	}

	function storm() {
		if (!ctx1) return;

		ctx1.clearRect(0, 0, width, height);
		ctx1.save();

		if (ctx1Pos >= height) {
			ctx1Pos = 0;
		} else {
			ctx1Pos += 15;
		}

		ctx1.drawImage(base_image, 0, ctx1Pos);
		ctx1.drawImage(base_image, 0, ctx1Pos - height);

		ctx1.restore();

		oldTime = currentTime || 0;
		currentTime = new Date().getTime() / 1000;
		fps = 1/(currentTime - oldTime);
		ctx.clearRect(0, 0, width, height);
	}

	function addListeners() {
		TweenLite.ticker.addEventListener("tick", update);
	}
}