var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
parent;

var child = parent.getElementsByTagName("li")[0];
child;

var removed = parent.removeChild(child);

parent.appendChild(removed);    //przywroci li tag ponownie do ul tag