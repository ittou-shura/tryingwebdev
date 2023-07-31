const center =document.querySelector(".center");
console.log(center);
const menu = document.querySelector(".main");
center.addEventListener("click",function(){
    center.classList.toggle("on");
    menu.classList.toggle("on");
});
