var scene, camera, renderer, clock;
var emitter, smokeEmitter, fireEmitter, sparksEmitter, smokeParticleGroup, fireParticleGroup, sparksParticleGroup;
var width, height;

function initThreeJS() {
    // variables used in init()
 
    // Used in initParticles()


    // Setup the scene
    function initScene() {

        var domElement = document.getElementById('dom_overlay_container');
        width = domElement.offsetWidth;
        height = domElement.offsetHeight;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
        // camera.position.z = 50;
        // camera.lookAt( scene.position );


        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(width, height);


        clock = new THREE.Clock();

        domElement.appendChild(renderer.domElement);
    }

    // Create particle group and emitter
    function initParticles() {

        var pos = new THREE.Vector3(5.2, -5.5, -20);
        smokeParticleGroup = new SPE.Group({
            texture: {
                value: THREE.ImageUtils.loadTexture('smoke.png')
            },
            blending: THREE.NormalBlending
        });

        sparksParticleGroup = new SPE.Group({
            texture: {
                value: THREE.ImageUtils.loadTexture('spark.png')
            },
        blending: THREE.AdditiveBlending
        });
       
        smokeEmitter = new SPE.Emitter({

            maxAge: { value: 4 },
            position: {
                value: pos,
                spread: new THREE.Vector3(1, 0.5, 2),
            },
            size: {
                value: [0, 3],
                spread: [0, 1, 2]
            },
            acceleration: {
                value: new THREE.Vector3(0, 0, 0),
            },
            rotation: {
                axis: new THREE.Vector3(0, 1, 0),
                spread: new THREE.Vector3(0, 20, 0),
                angle: 100 * Math.PI / 180,
            },
            velocity: {
                value: new THREE.Vector3(0, 1, -0.15),
                spread: new THREE.Vector3(0.25, 0.1, 0.25)
            },
            opacity: {
                value: [0, 0.5, 0]
            },
            color: {
                value: [new THREE.Color(0.25, 0.25, 0.25), new THREE.Color(1, 1, 1)],
                spread: [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]
            },
            particleCount: 30,
        });

            sparksEmitter = new SPE.Emitter( {
                    particleCount: 5,
                    type: SPE.distributions.SPHERE,
                    position: {
                        value: pos,
                        radius: 0.1,
                    },
                    maxAge: {
                        value: 1.5
                    },
                    // duration: 2,
                   activeMultiplier: 40,

                    velocity: {
                        value: new THREE.Vector3( 10 )
                    },
                    acceleration: {
                        value: new THREE.Vector3( 0, -10, 0 ),
                        distribution: SPE.distributions.BOX
                    },
                    size: { value: [0.4,0] },
                    drag: {
                        value: 1
                    },
                    color: {
                        value: [
                            new THREE.Color( 1, 1, 0 ),
                          new THREE.Color( 1, 1, 1 )
                     
                        ]
                    },
                 //   opacity: { value: [1, 0] }
                });


    }



    function animate() {
        requestAnimationFrame(animate);
        render(clock.getDelta());

    }


    function render(dt) {
        smokeParticleGroup.tick(dt);
              sparksParticleGroup.tick(dt);
        renderer.render(scene, camera);
    }



    initScene();
    initParticles();
    initAn();
    setTimeout(animate, 0);
}