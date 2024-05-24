var toggled = false; 
var toggledElement=document.getElementById("toggle-container");
var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementsByClassName("circle")[0];

document.addEventListener("DOMContentLoaded", () => {
    circle.classList.add('left');
})

toggledElement.addEventListener("click" , function () {
    // if(circle.classList.contains('left')){  
    //     circle.classList.add('right');
    //     circle.classList.remove('left');
    // }
    // else{
    //     circle.classList.add('left');
    //     circle.classList.remove('right');
    // } 
    if(!toggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
    
})