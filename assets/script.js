var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var color = "white"
var paddleHeight = 10;
var paddleWidth = 75;

var paddleXT = (canvas.width - paddleWidth) / 2;
var paddleXB = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

}

function drawPaddleBottom() {
  ctx.beginPath();
  ctx.rect(paddleXB, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddleTop() {
  ctx.beginPath();
  ctx.rect(paddleXT, 0, paddleWidth, paddleHeight);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddleBottom();
  drawPaddleTop();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleXB && x < paddleXB + paddleWidth) {
      dy = -dy;
    }
  } else if (y + dy < ballRadius) {
    if (x > paddleXT && x < paddleXT + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); //Needed by Chrome to end the game correctly
    }
  }


  if (rightPressed && paddleXB < canvas.width - paddleWidth) {
    paddleXB += 7;
  } else if (leftPressed && paddleXB > 0) {
    paddleXB -= 7;
  }

  if (rightPressed && paddleXT > 0) {
    paddleXT -= 7;
  } else if (leftPressed && paddleXT < canvas.width - paddleWidth) {
    paddleXT += 7;
  }

  x += dx;
  y += dy;

}

var interval = setInterval(draw, 10);