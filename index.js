let hamburger = document.getElementById("hamburger")
let barMenu = document.getElementById("barMenu");
let menuExit = document.getElementById("menuExit")
let aboutUs = document.getElementById("header_links_aboutUs")
let info = document.getElementById("header_links_info")
let gigs = document.getElementById("header_links_gigs")
let aboutUsBtn = document.getElementById("aboutUsBtn")
let whoAreWeBtn = document.getElementById("whoAreWeBtn")
let gigsBtn = document.getElementById("gigsBtn")
let contactBtn = document.getElementById("contactBtn")
let videoBtn = document.getElementById("videoBtn")




hamburger.addEventListener("click",showBarMenu);
menuExit.addEventListener("click",exitMenuBar);
aboutUsBtn.addEventListener("click",exitMenuBar)
whoAreWeBtn.addEventListener("click",exitMenuBar)
gigsBtn.addEventListener("click",exitMenuBar)
contactBtn.addEventListener("click",exitMenuBar)
homeBtn.addEventListener("click",exitMenuBar)
videoBtn.addEventListener("click",exitMenuBar)


let count = 0 ; 
if(window.onload)
{
    count++;
}

console.log(count)




function scrollToAboutUs()
{
    window.scroll(100)
}


function showBarMenu()
{
    barMenu.style.opacity = 1;
    barMenu.style.left = 0;
    hamburger.style.display = "none";
    menuExit.style.display = "block";

}

function exitMenuBar()
{
    barMenu.style.left = "100%";
    hamburger.style.display = "block";
    menuExit.style.display = "none";

}


