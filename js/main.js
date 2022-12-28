let barsIcon = document.querySelector(".fa-bars")
let navContainer =document.querySelector(".nav-container")

barsIcon.addEventListener("click" , showNav)

function showNav(){
    navContainer.classList.toggle("show")
}