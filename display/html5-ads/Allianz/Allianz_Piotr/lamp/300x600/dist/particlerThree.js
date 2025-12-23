var scene, camera, renderer, clock;
var emitter, smokeEmitter, particleGroup;
var width, height;

function initThreeJS() {
    // variables used in init()


    // Used in initParticles()


    // Setup the scene
    function init() {
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
        particleGroup = new SPE.Group({
            texture: {
                value: THREE.ImageUtils.loadTexture('smoke.png')
            },
            blending: THREE.NormalBlending
        });

        emitter = new SPE.Emitter({
            maxAge: {
                value: 2
            },
            position: {
                value: new THREE.Vector3(0, 0, -50),
                spread: new THREE.Vector3(0, 0, 0)
            },

            acceleration: {
                value: new THREE.Vector3(0, -10, 0),
                spread: new THREE.Vector3(10, 0, 10)
            },

            velocity: {
                value: new THREE.Vector3(0, 25, 0),
                spread: new THREE.Vector3(10, 7.5, 10)
            },

            color: {
                value: [new THREE.Color('white'), new THREE.Color('red')]
            },

            size: {
                value: 1
            },

            particleCount: 100
        });
        smokeEmitter = new SPE.Emitter({

            maxAge: { value: 8 },
            position: {
                value: new THREE.Vector3(3.8, -1, -20),
                spread: new THREE.Vector3(1, 0.5, 2),
            },
            size: {
                value: [0, 5],
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
                value: new THREE.Vector3(0, 1, 0.15),
                spread: new THREE.Vector3(0.25, 0.1, 0.25)
            },
            opacity: {
                value: [0, 0.5, 0]
            },
            color: {
                value: [new THREE.Color(0.5, 0.5, 0.5), new THREE.Color(1, 1, 1)],
                spread: [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]
            },
            particleCount: 30,
        });



    }



    function animate() {
        requestAnimationFrame(animate);
        render(clock.getDelta());

    }


    function render(dt) {
        particleGroup.tick(dt);
        renderer.render(scene, camera);
    }



    init();
    initParticles();

    setTimeout(animate, 0);
}