var ParticleSystem = function(parent, options) {
    var self = this;

    this.particles = [];
    this.parent = parent;
    this.options = options;
    this.spawnTimer = 0;

    createjs.Ticker.addEventListener("tick", function(e) {
        self.update(e);
    });

}
ParticleSystem.prototype.update = function(e) {
    //  console.log(e.delta);

    for (var i = 0; i < this.particles.length; i++) {
        var p = this.particles[i];
        p.update(e);

        if (p.isDead()) {
            p.delete();
            this.particles.splice(i--, 1);
        }
    }
    this.spawnTimer -= e.delta * 0.001;
    if (this.particles.length < this.options.count && this.spawnTimer <= 0) {
        var p = new Particle(this);
        this.particles.push(p);
        this.spawnTimer = this.options.spawnRate;
    }

    //update
}

var Particle = function(particleSystem) {
    this.system = particleSystem;

    this.bitmap = new createjs.Bitmap(this.system.options.texture);

    this.bitmap.regX = this.bitmap.regY = 0.5;

    this.system.parent.addChild(this.bitmap);

    this.lifetime = this.system.options.lifetime;

    this.acceleration = new Vector2(this.system.options.acceleration.x, this.system.options.acceleration.y);
    this.velocity = new Vector2(random(this.system.options.initalVelocity.min.x, this.system.options.initalVelocity.max.x),
        random(this.system.options.initalVelocity.min.y, this.system.options.initalVelocity.max.y));
    this.position = new Vector2(0, 0);


    if (this.system.options.set != undefined)
        gsap.set(this.bitmap, this.system.options.set);

    if (this.system.options.to != undefined) {
        for (var t = 0; t < this.system.options.to.length; t++)
            gsap.to(this.bitmap, this.system.options.to[t]);
    }

}
Particle.prototype.update = function(e) {

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.bitmap.x = this.position.x;
    this.bitmap.y = this.position.y;

    this.lifetime -= e.delta * 0.001;
}

Particle.prototype.isDead = function() {

    return this.lifetime <= 0;
}

Particle.prototype.delete = function() {
    this.system.parent.removeChild(this.bitmap);
}


function random(min, max) {
    return Math.random() * (max - min) + min;
}


function Vector2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector2.prototype.add = function(v2) {
    this.x += v2.x;
    this.y += v2.y;
}

Vector2.prototype.multiply = function(v2) {
    this.x *= v2.x;
    this.y *= v2.y;
}