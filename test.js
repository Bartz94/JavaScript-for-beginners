var myPara = document.getElementById("content").getElementsByTagName("p")[5];
var myPara2 = $("#content p:last-child");

myPara2.addClass("test");
myPara2.removeClass("test");

myPara2.fadeOut();
myPara2.fadeIn();

myPara2.addClass({position: "relative", color: "red"});

myPara2.animate({left: "50px"});