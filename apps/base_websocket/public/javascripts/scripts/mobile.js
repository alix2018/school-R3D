//https://www.alsacreations.com/tuto/lire/1501-api-device-orientation-motion-acceleration.html
var hub = io.connect(window.location.origin);
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
        hub.emit("deviceOrientation", {
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma
        });
    }, false);
} else {
    // Le navigateur ne supporte pas l'événement deviceorientation
}
if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", function (event) {
        hub.emit("deviceMotion", {
            accelerationIncludingGravity: {
                x: event.accelerationIncludingGravity.x,
                y: event.accelerationIncludingGravity.y,
                z: event.accelerationIncludingGravity.z
            },
            acceleration: {
                x: event.acceleration.x,
                y: event.acceleration.y,
                z: event.acceleration.z
            }
        });
    }, false);
} else {
    // Le navigateur ne supporte pas l'événement deviceorientation
}
// Set the scene size.
const WIDTH = 400;
const HEIGHT = 300;

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Get the DOM element to attach to
const container =
    document.querySelector('#container');

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );

const scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);