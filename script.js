var btn = document.querySelector("button")
var closeicon =  document.querySelector(".ri-close-fill")
var menu = document.querySelector(".ri-menu-line")
var nav = document.querySelector("nav")
var h3 = document.querySelectorAll("h3")
var flag = 0;
btn.addEventListener("click",function(){
    if(flag === 0 ){
        menu.style.display = "block"
        closeicon.style.display = "none"
        nav.style.width = "50px"
        h3.forEach(function(dets){
            dets.style.display = "none"
        })
        flag++;
    }
   else{
    menu.style.display = "none"
    closeicon.style.display = "block"
    nav.style.width = "400px"
    h3.forEach(function(dets){
        dets.style.display = "block"
    })
    flag--;
   }
})