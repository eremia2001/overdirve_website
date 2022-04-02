let hamburger = document.getElementById("hamburger")
let barMenu = document.getElementById("barMenu");
let menuExit = document.getElementById("menuExit")




function showBarMenu()
{
    barMenu.style.opacity = 1;
    hamburger.style.display = "none";
    menuExit.style.display = "block";
}

function exitMenuBar()
{
    barMenu.style.display = "flex"
    barMenu.style.opacity = 0;
    hamburger.style.display = "block";
    menuExit.style.display = "none";

}


hamburger.addEventListener("click",showBarMenu);

menuExit.addEventListener("click",exitMenuBar);
