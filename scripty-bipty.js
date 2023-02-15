//sets canvas variable and makes it take up whole screen
var canvas = document.getElementById("starfield")
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

//draws pretty stars for the background!
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

//keeps track of frame number for timing
var frameNumber = 0;
//keeps track of opacity so it can be changed in the draw loop
var opacity = 0;
//captures the background image so it can be redrawn at the beginning of each frame
var baseFrame = context.getImageData(0,0,window.innerWidth,window.innerHeight);

//the big bad draw loop. The field of my labours, holder of my tears T.T
function draw() {
    //redraws background image to reset at beginning of animation frame
    context.putImageData(baseFrame,0,0);
    //fades in first text by increasing opacity
    if(frameNumber < 300){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("Hello Bubby!", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 300 && frameNumber < 600){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("Hello Bubby!", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this to reset the opacity before next statement on canvas
    if(frameNumber == 600){
        opacity = 0;
    }
    if(frameNumber > 600 && frameNumber <900){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("I just want to tell you I love you so much!", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 900 && frameNumber < 1200){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("I just want to tell you I love you so much!", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }
    if(frameNumber < 99999){
    console.log(frameNumber);
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

//starts the draw loop
window.requestAnimationFrame(draw);