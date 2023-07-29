let a = document.querySelector("h1");
let x = document.querySelector(".myList");
console.log(x);
console.log(a);
function changeRadius(){
    // a.addEventListener("mouseover",function(){
    //     a.style.color="black";
    // });
    if(a.style.color!="white")
    {
        a.style.color = "white";
        // x.style.textShadow = "0 0 0 transparent";
        console.log("if block excecuted");
        console.log(x.classList.contains("active"));
        
        if (x.classList.contains("active")){
                x.classList.remove("active");
                x.classList.add("inactive");
                console.log("active has been removed");
        
            }
        else{
                x.classList.remove("inactive");
                x.classList.add("active");
                console.log("active has been added");
                }
       
    }
    else{
        a.style.color="black";
        x.style.textShadow = "0 0 20px white 0 0 50px yellow 0 0 100px orange";
        console.log("else block executed");
        
        if(x.classList.contains("inactive")){
                x.classList.remove("inactive");
                x.classList.add("active");
                console.log("active has been added");
                }
        else {
                    x.classList.remove("active");
                    x.classList.add("inactive");
                    console.log("active has been removed");
            
                }
        
        }
    }
        // a.addEventListener("mouseout", function (){
        //     a.style.color="white";
        //     });


    
a.addEventListener("click",changeRadius);
a.addEventListener("mouseover",function (){
    a.style.backgroundColor="rgba(255,255,255,0.8)";
    a.style.color="black";
    a.style.boxShadow="0 0 90px 10px rgba(0,0,0,0.6)";
    a.addEventListener("mouseout",function(){
        a.style.backgroundColor="transparent";
        a.style.color="white";
        a.style.boxShadow="0 0 0 0 transparent";
    });
});


// x.addEventListener("click",dropDown);
function liHoverEffect(x){

   x.addEventListener("mouseover",function(){
        x.style.backgroundColor="white";
        if(document.get)
        x.style.color="rgb"
   })
   x.addEventListener("mouseout",function (){
        x.style.backgroundColor="transparent";
   })
}
let navbarElements= document.querySelectorAll("li span");
navbarElements.forEach(liHoverEffect);