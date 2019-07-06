var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = 3;
var dy = -3;
var ballRadius = 10;
var color = "white"
var paddleHeight = 10;
var paddleWidth = 75;
var paddleXT = (canvas.width - paddleWidth) / 2;
var paddleXB = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var scoreComputer = 1;
var scorePlayerOne = 1;

window.addEventListener('load', drawBall(), drawPaddleBottom(), drawPaddleTop());
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

function ballReset() {
  x = canvas.width / 2;
  y = canvas.height - 220;
  dx = 3;
  dy = -3;
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddleBottom();
  drawPaddleTop();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x + ballRadius > paddleXB && x < paddleXB + paddleWidth) {
      dy = -dy;
    } else if (document.getElementById("computerScore").innerHTML == 9) {
      $("#you-lose-modal").modal();
    } else {
      document.getElementById("computerScore").innerHTML = scoreComputer++;
      ballReset();
    }
  } else if (y + dy < ballRadius) {
    if (x + ballRadius > paddleXT && x < paddleXT + paddleWidth) {
      dy = -dy;
      dy++;
    } else if (document.getElementById("playerOneScore").innerHTML == 9) {
      $("#you-win-modal").modal();
    } else {
      document.getElementById("playerOneScore").innerHTML = scorePlayerOne++;
      ballReset();
    }
  }


  if (rightPressed && paddleXB < canvas.width - paddleWidth) {
    paddleXB += 10;
  } else if (leftPressed && paddleXB > 0) {
    paddleXB -= 10;
  }

  if (x + dx > paddleXT + paddleWidth && paddleXT < canvas.width - paddleWidth) {
    paddleXT += 2.95;
  } else if (x + dx < paddleXT) {
    paddleXT -= 2.95;
  }


  x += dx;
  y += dy;

  requestAnimationFrame(draw);

}