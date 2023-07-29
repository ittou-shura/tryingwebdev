let x = document.querySelector(".circle");
window.addEventListener("click",function(){
    if(x.classList.contains("clicked")){
        x.classList.remove("clicked");
    }
    else{
        x.classList.add("clicked");
    }
    
});