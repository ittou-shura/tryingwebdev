let x = document.querySelector(".jiggle");
x.addEventListener("click",function(){
    if(x.classList.contains("active")){
        x.classList.remove("active");
    }
    else{
        x.classList.add("active");
    }
})