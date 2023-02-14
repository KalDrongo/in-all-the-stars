//sets canvas variable and makes it take up whole screen
var canvas = document.getElementById("starfield")
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

//draws pretty stars!
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}           
var canvas = document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 500,
colorrange = [0,60,240];
for (var i = 0; i < stars; i++) {
var x = Math.random() * canvas.offsetWidth;
y = Math.random() * canvas.offsetHeight,
radius = Math.random() * 1.2,
hue = colorrange[getRandom(0,colorrange.length - 1)],
sat = getRandom(50,100);
context.beginPath();
context.arc(x, y, radius, 0, 360);
context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
context.fill();
}

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {

    var words = canvas.getContext("2d");
    words.font = "30px Comic Sans MS";
    words.fillStyle = `rgba(45, 45, 255, 0.02)`;
    words.textAlign = `center`;
    words.fillText("Hello World", canvas.width/2, canvas.height/2);
    
    window.requestAnimationFrame(draw);
}

init ();