
var wHeight = window.innerHeight;
var wWidth = window.innerWidth;
// var nmb = new SSNum(200, 5, 10, 10);
var pingTime, pongTime, pingText, pingMS = 0;
var socket;
var clientRac = new Racquet(true);
var opponentRac = new Racquet(false);
var isPlaying = false;
var flooredFPS;
var isPlayer1 = true;
var leftScore = new SSN(0, 1, 10, 20);
var rightScore = new SSN(0, 1, 10, 20);
var canvasX = 800;
var canvasY = 600;
var ball = new Ball(300,300);
var prevFrame = Date.now();
var deltaT;
var bg = new Background();
var beat, pwinsnd, plosesnd;
var aiDifficulty = .2;
var diffSlider;

leftScore.changeX(300 - leftScore.getWidth());
rightScore.changeX(500);


function preload(){

beat = loadSound('beat.wav')
pwinsnd = loadSound('pwin.wav');
plosesnd = loadSound('plose.wav');

}
function setup(){


  createCanvas(canvasX, canvasY, P2D);
  socket = io.connect('http://116.240.152.165:9876');
  // frameRate(30);
  socket.on('pong!', serverPong);
  // socket.on('connected', pingServer);
  socket.on('rcvTest', function(){
    console.log('RECIEVED!');
  });
  diffSlider = createSlider(0, 100, 8);
  diffSlider.position(wWidth / 2, wHeight - 100)

}

function pingServer(){

  pingTime = Date.now();
  // console.log('ping!');
  socket.emit('ping!', 'last ping: ' + pingMS);

}



function serverPong(){

  pongTime = Date.now();
  pingMS = pongTime - pingTime;
  // console.log('pong recieved');

}

function draw(){
  bg.draw();

  if (frameCount % 100 == 0){
    pingServer();
  }
  clientRac.y = mouseY - (clientRac.height / 2);

  deltaT = Date.now() - prevFrame;

  fill(255);
  textAlign(CENTER);
  text('Waiting for an opponent', 400, 300);
  textAlign(LEFT);
  text('Ping: ' + pingMS + 'ms', 10,20);
  if (frameCount % 20 == 0) flooredFPS = Math.floor(frameRate());
  text('FPS: ' + flooredFPS, 10,590);

  ball.updatePos(deltaT / 1000);
  ball.checkCollision();
  ball.checkPaddleCollision(clientRac);
  ball.checkPaddleCollision(opponentRac);
  ball.show();
  // console.log(deltaT);
  clientRac.show();
  opponentRac.AI(ball, diffSlider.value() * .01);
  opponentRac.show();
  leftScore.show();
  rightScore.show();

  prevFrame = Date.now();
}

function awardPoint(left){
  (left == false) ? leftScore.modify(leftScore.getScore() + 1) : rightScore.modify(rightScore.getScore() + 1);
  (left == false) ? pwinsnd.play() : plosesnd.play();
  ball.resetPos();
  bg.pulseHeavy();
  (Math.random() < .5) ? ball.vx = -300 : ball.vx = 300;
  ball.vy = random(-500,500);
  // ball.vx = 300;
}
