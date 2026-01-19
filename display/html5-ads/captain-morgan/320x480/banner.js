var bannerboy = bannerboy || {};
bannerboy.main = function() {

	// banner format
	var width = 320;
	var height = 480;

	// banner container
	var color = bannerboy.createElement({width: width, height: height, backgroundColor: "#000", overflow: "hidden", cursor: "pointer", parent: document.body});
	var banner = bannerboy.createElement({width: width, height: height, backgroundColor: "#000", overflow: "hidden", cursor: "pointer", parent: document.body});

	var bg;
	var canvas;
	var fog1;
	var fog2;
	var txt1;
	var txt1Body;
	var txt1Skull;
	var bottle;
	var drink1;
	var drink2;
	var cta;
	var ctaBody;
	var ctaExplosion;
	var particles;
	

	// images
	var images = [
		"bg.jpg",
		"spritesheet.png"
	];
		
	bannerboy.preloadImages(images, function() {

		// images loaded
		console.log("BB -- " + images + " loaded");

		// create elements
		bg = bannerboy.createElement({backgroundImage: "bg.jpg", width: width, height: height, parent: banner});
		canvas = bannerboy.createElement({type: "canvas", width: width, height: height, parent: banner});
		
		// fog behind
		fog1 = bannerboy.createElement({className: "sprite sprite-particle_dust", width: width, height: height, top: 330, left: 30,  scaleX: 1.8, opacity: 0, parent: banner});

		// text
		txt1 = bannerboy.createElement({left: 110, top: 30, y: 5, scale:1.2, parent: banner});
		txt1Body = bannerboy.createElement({className: "sprite sprite-txt_1_body", parent: txt1});
		txt1Skull = bannerboy.createElement({className: "sprite sprite-txt_1_skull", left: 124, top: 48, parent: txt1});

		// products
		bottle = getBottle(14, 173);
		drink3 = getDrink(195, 320, 2);
		drink2 = getDrink(251, 320, 2);
		drink1 = getDrink(217, 326, 1);


		// cta
		cta = bannerboy.createElement({left: 213, top: 395, sacle:1.4,parent: banner});
		ctaExplosion = bannerboy.createElement({className: "sprite sprite-explosion", left: -20, top: -50, parent: cta});
		ctaBody = bannerboy.createElement({className: "sprite sprite-cta", parent: cta}); 
		
		ctaDust = getDust(cta, -20, -50, 0, 30, 1);

		// particles
		particles = Particles;
		particles.Particles(canvas, 90, 430);

		// fog front
		fog2 = bannerboy.createElement({className: "sprite sprite-particle_dust", width: width, height: height, top: 330, left: 30, scaleX: 1.8, opacity: 0, rotation: 180, parent: banner});

		disclaimer = bannerboy.createElement({className: "sprite sprite-disclaimer", left: 35, top: 468, scale: 0.5, transformOrigin: "top left", parent: banner});
		
		// start here
		animate();
	});

	// animations
	function animate() {

		// text
		txt1.in_tl = new TimelineLite()
		.from(txt1, 0.4, {y: -200, ease: Power2.easeInOut})
		.to(txt1, 0.3, {y: 0, ease: Power2.easeOut})
		.from(txt1Skull, 0.3, {scale: 0.3, opacity: 0, ease: Back.easeOut}, "-= 0.2");

		// cta
		cta.in_tl = new TimelineLite()
		.fromTo(ctaExplosion, 0.15, {scale: 0, opacity: 0, ease: Power2.easeOut}, {scale: 0.8, opacity: 0.95, ease: Power2.easeOut})
		.to(ctaExplosion, 0.15, {scale: 0.2, opacity: 0, ease: Power3.easeIn})
		.fromTo(ctaBody, 0.25, {scale: 0, ease: Power3.easeOut}, {scale: 1.3, ease: Power3.easeOut}, "-= 0.2")
		.to(ctaBody, 0.15, {scale: 1, ease: Power3.easeOut})
		.add(ctaDust.dust_in_tl, "-= 0.5");

		// fog
		fog1.in_tl = new TimelineLite()
		.to(fog1, 2, {x: -40, y: -20, scaleX: 2, opacity: 0.8, ease: Power3.easeOut})
		.to(fog1, 2, {x: 180, y: 50, opacity: 0, ease: Power1.easeIn}, "-= 1")
		.to(fog2, 2, {x: 40, y: -20, scaleX: 2, opacity: 1, ease: Power3.easeOut}, "-= 3")
		.to(fog2, 2, {x: -180, y: 50, opacity: 0, ease: Power1.easeIn}, "-= 1");

		var tl = new TimelineLite({onComplete: function() { }});

		tl.addLabel("loop")
		.add(bottle.in_tl, "+= 0.5")
		.call(particles.startParticles, null, particles, "-= 2.55")
		.add(fog1.in_tl, "-= 2.2")
		.add(drink1.in_tl, "-= 2.8")
		.add(drink3.in_tl, "-= 3")
		.add(drink2.in_tl, "-= 3.3")
		.call(particles.stopParticles, null, particles)
		.add(txt1.in_tl, "-= 2.1")
		.add(cta.in_tl, "-= 0.4");
	}

	// bottle
	function getBottle(left, top) {
		var container = bannerboy.createElement({left: left, top: top, parent: banner});
		
		// rocks behind
		var rocksBackLeft = bannerboy.createElement({className: "sprite sprite-rocks_back_left", left: -78, top: 115, transformOrigin: "right bottom", parent: container});
		var rocksBackRight = bannerboy.createElement({className: "sprite sprite-rocks_back_right", left: 150, top: 105, transformOrigin: "left bottom", parent: container});
		
		// dust behind
		var dust1 = getDust(container, 15, 20, -0.4, 100, 2.5);

		// bottle
		var bottleShadow = bannerboy.createElement({className: "sprite sprite-bottle_shadow", left: 0, top: 170, parent: container});
		var bottleBody = bannerboy.createElement({className: "sprite sprite-bottle_body", parent: container});
		
		// rocks single behind
		var rocksSingle3 = bannerboy.createElement({className: "sprite sprite-rocks_single_1", left: 175, top: 175, scale: 0.7, parent: container});

		// rocks front
		var rocksFrontLeft = bannerboy.createElement({className: "sprite sprite-rocks_front_left", left: -60, top: 145, transformOrigin: "right bottom", parent: container});
		var rocksFrontRight = bannerboy.createElement({className: "sprite sprite-rocks_front_right", left: 70, top: 125, transformOrigin: "left bottom", parent: container});

		// rocks single front
		var rocksSingle1 = bannerboy.createElement({className: "sprite sprite-rocks_single_1", left: 10, top: 185, parent: container});
		var rocksSingle2 = bannerboy.createElement({className: "sprite sprite-rocks_single_2", left: 90, top: 175, parent: container});
		var rocksSingle4 = bannerboy.createElement({className: "sprite sprite-rocks_single_1", left: -70, top: 175, scale: 0.5, parent: container});

		// dust front
		var dust2 = getDust(container, -50, 90, -1, 85, 1.1);
		var dust3 = getDust(container, 0, 70, 0.4, 85, 1.4);
		var dust4 = getDust(container, 80, 95, 1, 85, 1.3);
		
		// bottle fall in
		container.bottle_in_tl = new TimelineLite()
		.from(bottleBody, 0.25, {x: -40, y: -500, ease: Power3.easeIn})
		.from(bottleShadow, 0.25, {x: -80, y: 300, opacity: 0, ease: Power3.easeIn}, "-= 0.25");

		// rocks front in
		container.rocks_front_in_tl = new TimelineLite()
		.fromTo(rocksFrontLeft, 0.04, {x: 15, y: 5, scale: 0}, {y: -2, scale: 1.1})
		.to(rocksFrontLeft, 0.07, {y: 0, scale: 1, ease: Power2.easeOut})
		.fromTo(rocksFrontRight, 0.04, {x: -1, y: 3, scale: 0}, {y: -2, scale: 1.05}, "-= 0.09")
		.to(rocksFrontRight, 0.07, {y: 0, scale: 1, ease: Power2.easeOut});

		// rocks behind in
		container.rocks_behind_in_tl = new TimelineLite()
		.fromTo(rocksBackLeft, 0.08, {x: 15, y: 6, scale: 0}, {y: -2, scale: 1.2})
		.to(rocksBackLeft, 0.07, {y: 0, scale: 1, ease: Power2.easeOut})
		.fromTo(rocksBackRight, 0.08, {x: -5, y: 1, scale: 0}, {y: -2, scale: 1.2}, "-= 0.15")
		.to(rocksBackRight, 0.07, {y: 0, scale: 1, ease: Power2.easeOut});

		// rocks single 1
		container.rocks_single1_in_tl = new TimelineLite()
		.fromTo(rocksSingle1, 0.08, {x: 15, y: -5, scale: 0, rotation: 40, ease: Power2.easeOut}, {x: 0, y: -15, scale: 1, rotation: -15, ease: Power2.easeOut})
		.to(rocksSingle1, 0.08, {y: 0, rotation: -20, ease: Power2.easeIn})
		.to(rocksSingle1, 0.08, {x: -2, y: -2, rotation: -17, ease: Power2.easeOut})
		.to(rocksSingle1, 0.08, {x: -4, y: 0, rotation: -19, ease: Power2.easeIn});

		// rocks single 2
		container.rocks_single2_in_tl = new TimelineLite()
		.fromTo(rocksSingle2, 0.08, {scale: 0, ease: Power2.easeOut}, {x: 20, y: -25, scale: 1.5, rotation: 80, ease: Power1.easeOut})
		.to(rocksSingle2, 0.19, {x: 70, y: 60, scale: 3, rotation: 190, opacity: 0, ease: Power1.easeIn});

		// rocks single 3
		container.rocks_single3_in_tl = new TimelineLite()
		.fromTo(rocksSingle3, 0.08, {x: -30, y: -5, scale: 0, rotation: -40, ease: Power2.easeOut}, {x: -20, y: -15, scale: 1, rotation: 15, ease: Power2.easeOut})
		.to(rocksSingle3, 0.08, {y: 0, rotation: 20, ease: Power2.easeIn})
		.to(rocksSingle3, 0.08, {x: 2, y: -2, rotation: 17, ease: Power2.easeOut})
		.to(rocksSingle3, 0.08, {x: 4, y: 0, rotation: 19, ease: Power2.easeIn});

		// rocks single 4
		container.rocks_single4_in_tl = new TimelineLite()
		.fromTo(rocksSingle4, 0.08, {x: 15, y: -5, scale: 0, rotation: 40, ease: Power2.easeOut}, {x: 0, y: -15, scale: 0.5, rotation: -15, ease: Power2.easeOut})
		.to(rocksSingle4, 0.08, {y: 0, rotation: -20, ease: Power2.easeIn})
		.to(rocksSingle4, 0.08, {x: -2, y: -2, rotation: -17, ease: Power2.easeOut})
		.to(rocksSingle4, 0.08, {x: -4, y: 0, rotation: -19, ease: Power2.easeIn});

		//rocks timelines
		container.rocks_in = new TimelineLite()
		.add(container.rocks_front_in_tl)
		.add(container.rocks_behind_in_tl, "-= 0.13")
		.add(container.rocks_single1_in_tl, "-= 0.30")
		.add(container.rocks_single2_in_tl, "-= 0.32")
		.add(container.rocks_single3_in_tl, "-= 0.27")
		.add(container.rocks_single4_in_tl, "-= 0.32");
		
		// camera shake
		container.camera_tl = new TimelineLite()
		.to(banner, 0.02, {y: -20})
		.to(banner, 0.02, {y: 14})
		.to(banner, 0.02, {x: -1, y: -10})
		.to(banner, 0.02, {x: 2, y: 8})
		.to(banner, 0.02, {x: 1, y: -5})
		.to(banner, 0.02, {x: -2, y: 4})
		.to(banner, 0.02, {x: 1, y: -2})
		.to(banner, 0.02, {x: 0, y: 0});

		// dust timelines
		container.dust_in = new TimelineLite()
		.add(dust1.dust_in_tl)
		.add(dust3.dust_in_tl, "-= 2")
		.add(dust2.dust_in_tl, "-= 2.1")
		.add(dust4.dust_in_tl, "-= 2.1");

		// bottle in animation
		container.in_tl = new TimelineLite()
		.add(container.bottle_in_tl, "+= 0.5")
		.add(container.rocks_in, "-= 0.02")
		.add(container.camera_tl, "-= 0.30")
		.add(container.dust_in, "-= 0.34");

		return container;
	}

	// drink
	function getDrink(left, top, id) {
		var container = bannerboy.createElement({left: left, top: top, scale:1.4,parent: banner});

		// dust back
		var dust1 = getDust(container, -55, -25, 0.4, 20, 0.8);

		switch (id) {
			case 1:
				var drinkShadow = bannerboy.createElement({className: "sprite sprite-drink_1_shadow", left: -56, top: 48, parent: container});
				var drinkBody = bannerboy.createElement({parent: container});
				var drinkBack = bannerboy.createElement({className: "sprite sprite-drink_1_back", left: 2, parent: drinkBody});
				var drinkLiquid = bannerboy.createElement({className: "sprite sprite-drink_1_liquid", left: 2, top: 2, transformOrigin: "center center",  parent: drinkBody});
				var drinkSplash = bannerboy.createElement({className: "sprite sprite-drink_splash", left: 7, top: -9,  scale: 0.5,  parent: drinkBody});
				var drinkFront = bannerboy.createElement({className: "sprite sprite-drink_1_front", left: 0, top: 3, parent: drinkBody});
				break;

			case 2:
				var drinkShadow = bannerboy.createElement({className: "sprite sprite-drink_2_shadow", left: -23, top: 46, parent: container});
				var drinkBody = bannerboy.createElement({parent: container});
				var drinkBack = bannerboy.createElement({className: "sprite sprite-drink_2_back", left: 2, parent: drinkBody});
				var drinkLiquid = bannerboy.createElement({className: "sprite sprite-drink_2_liquid", left: 3, top: 2, transformOrigin: "center center", parent: drinkBody});
				var drinkSplash = bannerboy.createElement({className: "sprite sprite-drink_splash", left: 9, top: -9, scale: 0.5, parent: drinkBody});
				var drinkFront = bannerboy.createElement({className: "sprite sprite-drink_2_front", left: 1, top: 3, parent: drinkBody});
				break;
		}

		// dust front
		var dust2 = getDust(container, -50, -20, -0.4, 20, 0.6);
		
		// drink fall in
		container.drink_in_tl = new TimelineLite()
		.from(drinkBody, 0.25, {y: -500, ease: Power3.easeIn})
		.from(drinkShadow, 0.25, {x: -80, y: 200, opacity: 0, ease: Power3.easeIn}, "-= 0.25")
		.to(drinkSplash, 0.15, {y: -20, rotation: 5, ease: Power3.easeOut})
		.to(drinkSplash, 0.25, {y: 15, ease: Power3.easeIn});

		// drink liquid motion
		container.drink_liquid_tl = new TimelineLite()
		.to(drinkLiquid, 0.2, {y: 3, rotation: -1})
		.to(drinkLiquid, 0.3, {y: 0, rotation: 2})
		.to(drinkLiquid, 0.4, {y: 2, rotation: -1})
		.to(drinkLiquid, 1, {y: 0, rotation: 0});

		// camera shake
		container.camera_tl = new TimelineLite()
		.to(banner, 0.02, {y: -14})
		.to(banner, 0.02, {y: 10})
		.to(banner, 0.02, {x: -1, y: -8})
		.to(banner, 0.02, {x: 2, y: 6})
		.to(banner, 0.02, {x: 1, y: -4})
		.to(banner, 0.02, {x: -2, y: 3})
		.to(banner, 0.02, {x: 1, y: -2})
		.to(banner, 0.02, {x: 0, y: 0});

		// dust timelines
		container.dust1_in = new TimelineLite()
		.add(dust1.dust_in_tl)
		.add(dust2.dust_in_tl, "-= 2.1");

		// bottle in animation
		container.in_tl = new TimelineLite()
		.add(container.drink_in_tl, "+= 0.5")
		.add(container.drink_liquid_tl, "-= 0.4")
		.add(container.camera_tl, "-= 1.9")
		.add(container.dust1_in, "-= 1.88");
		
		return container;
	}

	// dust
	function getDust(container, left, top, direction, distance, scale) {
		var dust = bannerboy.createElement({className: "sprite sprite-particle_dust", left: left, top: top, opacity: 0.75, parent: container});
		var distance = ((Math.random() * 100) + distance);
		var rotation = ((Math.random() * 20) + 100) * direction;

		// dust in
		dust.dust_in_tl = new TimelineLite()
		.fromTo(dust, 0.2, {scale: 0}, {y: 15, scale: scale})
		.to(dust, 2, {x: 25 * direction, rotation: rotation, ease: Power2.easeOut}, "-= 0.2")
		.to(dust, 2, {y: -distance, scale: 1, opacity: 0, ease: Power1.easeInOut}, "-= 1.9");

		return dust;
	}

	banner.onclick = function() {
		// clicktag logic here
	};
};


// Engine
(function() {
	Engine = {
		isRunning: true,
		time: null,
		fps: null,
		then: null,
		objectsToUpdate: [],

		// Constructor
		Engine: function() {
			console.log('Engine::constructor: Initialized'); 
			Engine.loop();
		},

		add: function(object) {
			Engine.objectsToUpdate.push(object);
		},

		remove: function(object) {
			var length = Engine.objectsToUpdate.length;

			for (i = 0; i < length; i++) {
				if (Engine.objectsToUpdate[i] == object) {
					Engine.objectsToUpdate.splice(i, 1);
					return;
				}
			}
		},

		loop: function() {
			var now = Date.now();
			var delta = now - Engine.then;

			if (Engine.isRunning) {
				Engine.update(delta);
				requestAnimationFrame(Engine.loop);
			}

			Engine.then = now;
			Engine.fps = 1 / delta * 1000;
		},

		update: function(delta) {
			var length = Engine.objectsToUpdate.length;

			for (i = 0; i < length; i++) {	
				if(typeof(Engine.objectsToUpdate[i].update) !== 'undefined') {
					Engine.objectsToUpdate[i].update(delta);
				} else {
					throw new Error('Engine::update: ' + Engine.objectsToUpdate[i] + ' is missing an update() function');
				}
			}
		},

		getFps: function() {
			return Math.round(Engine.fps);
		}
	};
}());

// Particles
(function() {
    Particles = {
        engine: Engine,
        canvas: null,
        ctx: null,
        x: 0,
        y: 0,
        particles: [],
        particle: {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            gravity: -0.15,
            wind: 0,
            turbulence: 0.08,
            life: 80,
            c: [255, 255, 255, 0]
        },

        Particles: function(canvas, x, y) {
            console.log('Particles::constructor: Initialized');

            // set canvas
            this.canvas = canvas;
            this.ctx = this.canvas.getContext("2d");

            // set position
            this.x = x;
            this.y = y;

            // create particles
            this.createParticles();

            // add engine
            this.engine.Engine();
        },

        createParticles: function() {
            // create particles
            for ( i = 0; i < 1000; i++ ) {
                var p = Object.create(this.particle);
                p.x = this.x;
                p.y = this.y;

                this.particles[i] = p;
            }
        },

        startParticles: function() {
        	this.engine.add(this);
        },

        stopParticles: function() {
        	this.engine.remove(this);
        },

        update: function() {
            b = (a = this.ctx.createImageData(this.canvas.width, this.canvas.height)).data;

            for (i = 0; i < this.particles.length; i++) {
                var p = this.particles[i];
                var n = (~~p.x + (~~p.y * this.canvas.width)) * 4;

                if (p.life < 60) {
                	p.c[3] = 90;
                }

                b[n + 0] = p.c[0];
                b[n + 1] = p.c[1];
                b[n + 2] = p.c[2];
                b[n + 3] = p.c[3];

                // move particle
                p.wind = (Math.random() * p.turbulence) - (p.turbulence / 2) + p.wind;
                p.gravity = (Math.random() * p.turbulence) - (p.turbulence / 2) + p.gravity;

                p.vx += p.wind;
                p.vy += p.gravity;

                if (p.vx > 10) p.vx = 10;
                if (p.vx < -10) p.vx = -10;

                if (p.vy > 10) p.vy = 10;
                if (p.vy < -10) p.vy = -10;

                p.x += p.vx;
                p.y += p.vy;
                p.life -= 1;

                if(p.x < 0 || p.x > this.canvas.width || p.y > this.canvas.height) {
                	this.particles.splice(i, 1);
                }
                
                if (p.y < 0) {
                	p.vy += 0.5;
                }
            }

            this.ctx.putImageData(a, 0, 0);
        }
    };
}());