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

/* Experience Slider */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay: 3000,
        disableOnInteraction: false
    },    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* Contact Site Send Email Form */

function SendContact(){
    Email.send({
        SecureToken: "2f921160-9e9b-47bb-a86f-66a5c788c278",
        
        To : 'harrynmiranda@gmail.com',
        From : 'tomasharryn@outlook.com',
        Subject : "New contact form",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Form sent correctly")
    );
}