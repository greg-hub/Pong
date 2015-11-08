var canvas;
var canvasContext;
var ballx = 50;

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
	ballx = ballx + 20;

}

function drawEverything() {
	
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(0,300,10,100);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(ballx,100,10,10);

}
	