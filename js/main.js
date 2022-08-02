/* Dark mode switch */

var darkswitch = document.getElementById("dark-switch");
darkswitch.onclick = function(){
    if (document.body.classList.contains("white-theme")){
        document.body.classList.remove("white-theme");
        document.body.classList.add("dark-theme");
    }
    else{
        document.body.classList.remove("dark-theme");
        document.body.classList.add("white-theme");
    }
}

/* Navigation bar */
const mainNav = document.querySelector(".main-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = mainNav.getAttribute("data-visible");

    if (visibility === "false"){
        mainNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visibility === "true"){
        mainNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})