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
var secondOpacity = 0;
var thirdOpacity = 0;
//captures the background image so it can be redrawn at the beginning of each frame
var baseFrame = context.getImageData(0,0,window.innerWidth,window.innerHeight);

//the big bad draw loop. The field of my labours, holder of my tears T.T
function draw() {
    //redraws background image to reset the text at beginning of the animation frame
    context.putImageData(baseFrame,0,0);
    //fades in text by increasing opacity
    if(frameNumber < 300){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 300 && frameNumber < 600){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 600){
        opacity = 0;
    }
    if(frameNumber > 600 && frameNumber < 900){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 900 && frameNumber < 1200){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1200){
        opacity = 0;
    }
    if(frameNumber > 1200 && frameNumber < 1500){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1500 && frameNumber < 1800){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1800){
        opacity = 0;
    }
    if(frameNumber > 1800 && frameNumber < 2100){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2100 && frameNumber < 2400){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2400){
        opacity = 0;
    }
    if(frameNumber > 2400 && frameNumber < 2700){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2700 && frameNumber < 3000){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber > 3000 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("I love you so much Maggie, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 3300 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        context.textAlign = `center`;
        context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 50));
        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3600 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.textAlign = `center`;
        context.fillText("Happy Valentines Day <3", canvas.width/2, (canvas.height/2 + 100));
        thirdOpacity = thirdOpacity + 0.01;
    }   
    

    if(frameNumber < 99999){
    console.log(frameNumber);
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

//starts the draw loop
window.requestAnimationFrame(draw);
