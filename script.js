let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelector(".nav-sidebar a");
    
    if (toggleNavStatus === false) { 
        getSidebarUl.style.visability = "visible";
        getSidebar.style.width = "270px";
        getSidebarTitle.style.opacity = "0,5";
        }
        
        toggleNavStatus = true;
    }

function changeBodyBg(color){
     document.body.style.background = color;
}