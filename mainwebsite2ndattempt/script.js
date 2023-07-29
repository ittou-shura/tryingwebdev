let loader = document.getElementById("preloader");
console.log(loader);
window.addEventListener("load",function(){
    loader.style.display="none";
})
let a = document.querySelector(".header");
console.log(a);
let openIconName = function(){
      if(a.classList.contains("active"))
        {   
            a.classList.remove("active");
            b.style.border = "2px solid white";
            b.style.borderRadius = "10%";
            b.style.padding = "5px";
            console.log("active has been remove from .header");
        }
      else
        {
            a.classList.add("active");
            b.style.border = "2px solid white";
            b.style.borderRadius="50%";
            b.style.padding = "15px";
            console.log("active has been added to .header");
        }
};
let b = a.querySelector("h1");
console.log(b);
b.addEventListener("click",openIconName);
