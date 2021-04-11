window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onKeydown, false);
window.addEventListener("keyup", onKeyup, false);

var strKeyEventType = "None";
var strKeyEventValue = "None";
var strKeyEventCode = "None";

var x = 350; //350
var y = 250; //250

var imgBackground = new Image();
imgBackground.src = "../images/background.png";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer = new Image();
imgPlayer.src = "../images/player.png"
imgPlayer.addEventListener("load", drawScreen, false);

function drawScreen(){
    var theCanvas =  document.getElementById("main_canvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600); // start_x, start_y, width, height

    Context.drawImage(imgBackground, 0, 0);

    switch(strKeyEventCode){
        case 37: x-=25; break; // 왼쪽
        case 38: y-=25; break; // 위
        case 39: x+=25; break; // 오른쪽
        case 40: y+=25; break; // 아래
    }

    Context.drawImage(imgPlayer, x, y);
}

function onKeydown(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    strKeyEventCode = e.keyCode;
    drawScreen();
}

function onKeyup(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    strKeyEventCode = e.keyCode;
    drawScreen();
}

// if(strKeyEventCode == 37) // 왼쪽
//     x-=15;
// if(strKeyEventCode == 38) // 위
//     y-=15;
// if(strKeyEventCode == 39) // 오른쪽
//     x+=15;
// if(strKeyEventCode == 40) // 아래
//     y+=15;