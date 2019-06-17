var foxElement = document.getElementById("fox");
var buttonStartElement = document.getElementById("button-start")
var width = innerWidth;
var height = innerHeight;
var foxWidth = 90;
var foxHeight = 110;



var interval = 1500;
var won = false;
function init(){
    randomPlacingFox();
    playAudio();
    document.onmousemove = mouseMoved;
    buttonStartElement.style.display = "none";
    hideControls ()
}
function playAudio(){    
    var audio = new Audio("./assets/sounds/fox.mp3");
    if(!won)
        audio.play();
    setTimeout(function(){
        playAudio()
    },interval);
}
function randomPlacingFox(){
    var foxPositionX = Math.random() * (width - foxWidth);
    if(foxPositionX < foxWidth){
        foxPositionX = 0;
    }
    foxElement.style.marginLeft = foxPositionX + "px";
    var foxPositionY = Math.random() * (height - foxHeight);
    if(foxPositionY < foxHeight){
        foxPositionY = 0;
    }
    foxElement.style.marginTop = foxPositionY +"px";
    foxElement.style.display = "block";
    foxElement.style.opacity = 0;
}
function mouseMoved(mouseEvent){
    
    var mousePositionX = mouseEvent.clientX;
    var mousePositionY = mouseEvent.clientY;
    var centroFoxX = Number(foxElement.style.marginLeft.split("px")[0]) + foxWidth / 2;
    var centroFoxY = Number(foxElement.style.marginTop.split("px")[0]) + foxHeight / 2;
    var distance = Math.sqrt((mousePositionX - centroFoxX)**2 + (mousePositionY - centroFoxY)**2);
    interval = (700/width) * distance + 300;

    
}
function win(){
    foxElement.style.opacity = 1;
    var whatDoesTheFoxSayAudio = new Audio('./assets/sounds/what_does_the_foxxx.mp3');
    whatDoesTheFoxSayAudio.play();
    won = true;
    foxElement.classList.add("animate-fox");
    //alert("What does the fox say?")
}
function hideControls (){
   var controls = document.getElementsByClassName("inicio");
    for (var x = 0; x < controls.length; x++)
        controls[x].style.display = "none"
}
