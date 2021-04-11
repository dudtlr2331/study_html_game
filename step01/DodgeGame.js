window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onKeydown, false);
window.addEventListener("keyup", onKeyup, false);

var intPlayerX = 350;
var intPlayerY = 250;
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

function drawScreen(){
    var theCanvas =  document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600); // start_x, start_y, width, height

    Context.drawImage(imgBackground, 0, 0);
    Context.drawImage(imgPlayer, intPlayerX, intPlayerY);

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

function onKeydown(e){
    if(gameState == GAME_START_READY){    
        if(e.keyCode == 13)
            gameState = GAME_START_GAME;
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
