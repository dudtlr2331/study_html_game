window.addEventListener("load", darwScreen, false);
window.addEventListener("keydown", onKeydown, false);
window.addEventListener("keyup", onKeyup, false);

var strKeyEventType = "None";
var strKeyEventValue = "None";
var strKeyEventCode = "None";

function darwScreen(){
    var theCanvas =  document.getElementById("main_canvas");
    var Context = theCanvas.getContext("2d");

    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 800, 600); // start_x, start_y, width, height

    Context.fillStyle = "#ffffff";
    Context.font = "25px Arial";
    Context.textBaseline = "top";

    Context.fillText("키이벤트 : " + strKeyEventType, 5, 5);
    Context.fillText("키 값 : " + strKeyEventValue, 5, 30);
    Context.fillText("키 코드 : " + strKeyEventCode, 5, 55);
}

function onKeydown(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    strKeyEventCode = e.keyCode;
    darwScreen();
}

function onKeyup(e){
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    strKeyEventCode = e.keyCode;
    darwScreen();
}