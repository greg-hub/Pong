var canvas;
var canvasContext;
var ballx = 50;
var ballY = 50;
var ballSpeedx = 10;
var ballSpeedY = 10;

window.onload = function () {
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');


var framesPerSecond = 30;
	setInterval(function(){	
	moveEverything();
	drawEverything();
	}, 1000/framesPerSecond );
} 

function moveEverything() {
	ballx = ballx + ballSpeedx;
	ballY = ballY + ballSpeedY;
	if(ballx > canvas.width){
		ballSpeedx = - ballSpeedx;
	}
		if(ballx < 0){
		ballSpeedx = - ballSpeedx;
	}

			if(ballY < 0){
		ballSpeedY = - ballSpeedY;
	}
		
	if(ballY > canvas.height){
		ballSpeedY = - ballSpeedY;
	}
	

}

function drawEverything() {
	//blanks out the screen with black.
	colorRect(0,0,canvas.width,canvas.height,'black');
	// left player paddle
	colorRect(0,300,10,100,'white');
	//draws the ball
	colorCircle(ballx,ballY, 10, 'white');

}

function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = "white";
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
	canvasContext.fill();

}
	

function colorRect(leftX,topY,width,height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width,height);

}