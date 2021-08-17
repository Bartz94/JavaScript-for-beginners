var ColorChanger = document.getElementById("color-changer");
var colors = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColor(){

    if (counter >= colors.length){
        counter = 0;
    }

    ColorChanger.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColor, 2000);

ColorChanger.onclick = function(){

    clearInterval(myTimer);
    ColorChanger.innerHTML = "Timer stopped";
};