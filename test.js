var newLi = document.createElement("li");
var newA = document.createElement("a");

var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];



menu.appendChild(newLi);
newLi.appendChild(newA);

newA.innerHTML = "Blog";  //Dodaje napis do elemntu


menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);     //Dodaje nowy elemnt na koncu 