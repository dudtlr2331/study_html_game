window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onKeydown, false);
window.addEventListener("keyup", onKeyup, false);

var intPlayerX = 350;
var intPlayerY = 250;
var imgMissileX = 0;
var imgMissileY = 0;

var imgMissileX2 = 740;
var imgMissileY2 = 0;
var imgMissileX3 = 0;
var imgMissileY3 = 540;
var imgMissileX4 = 740;
var imgMissileY4 = 540;

var intPlayerSpeed = 50;

var GAME_START_READY = 0;
var GAME_START_GAME = 1;
var GAME_START_OVER = 2;

var gameState = GAME_START_READY;


var imgBackground = new Image();
imgBackground.src = "../images/background.png";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "../images/player.png"
imgPlayer.addEventListener("load", drawScreen, false);

var imgMissile = new Image();
imgMissile.src = "../images/missile.png"
imgMissile.addEventListener("load", drawScreen, false);

var imgMissile2 = new Image();
imgMissile2.src = "../images/missile.png"
imgMissile2.addEventListener("load", drawScreen, false);

var imgMissile3 = new Image();
imgMissile3.src = "../images/missile.png"
imgMissile3.addEventListener("load", drawScreen, false);

var imgMissile4 = new Image();
imgMissile4.src = "../images/missile.png"
imgMissile4.addEventListener("load", drawScreen, false);

function drawScreen(){
    var theCanvas =  document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600); // start_x, start_y, width, height

    Context.drawImage(imgBackground, 0, 0);
    Context.drawImage(imgPlayer, intPlayerX, intPlayerY);
    Context.drawImage(imgMissile, imgMissileX, imgMissileY);
    Context.drawImage(imgMissile2, imgMissileX2, imgMissileY2);
    Context.drawImage(imgMissile3, imgMissileX3, imgMissileY3);
    Context.drawImage(imgMissile4, imgMissileX4, imgMissileY4);

    Context.fillStyle = "#ffffff";
    Context.font = "50px Arial";
    Context.textBaseline = "top";
    
    if(gameState == GAME_START_READY){    
        Context.fillText("준비", 330, 180);
    }
    if(gameState == GAME_START_GAME){

    }
    if(gameState == GAME_START_OVER){
        Context.fillText("게임오버", 300, 180);
    }
}

function InGameUpdate(){
    imgMissileX +=intPlayerSpeed;
    imgMissileY +=intPlayerSpeed; 
    imgMissileX2 -=intPlayerSpeed;
    imgMissileY2 +=intPlayerSpeed;
    imgMissileX3 +=intPlayerSpeed;
    imgMissileY3 -=intPlayerSpeed;
    imgMissileX4 -=intPlayerSpeed;
    imgMissileY4 -=intPlayerSpeed;
    drawScreen();
}

function onKeydown(e){
    if(gameState == GAME_START_READY){    
        if(e.keyCode == 13){
            gameState = GAME_START_GAME;
            setInterval(InGameUpdate, 100)
        }
    }

    if(gameState == GAME_START_GAME){
        switch(e.keyCode){
            case 37: //왼쪽
            intPlayerX-=intPlayerSpeed;
                if(intPlayerX < 0){
                    intPlayerX = 0;
                }
                break;
            case 38: // 위
                intPlayerY-=intPlayerSpeed;
                if(intPlayerY < 0){
                    intPlayerY = 0;
                }
                break;
            case 39: //오른쪽
                intPlayerX+=intPlayerSpeed;
                if(intPlayerX > 742){
                    intPlayerX = 742;
                }
                break;
            case 40: //아래
                intPlayerY+=intPlayerSpeed;
                if(intPlayerY > 544){
                    intPlayerY = 544;
                }
                break;
        }
    }
    if(gameState == GAME_START_OVER){
        if(e.keyCode == 13)
        gameState = GAME_START_READY;
    }
    drawScreen();
}

function onKeyup(e){

    drawScreen();
}
