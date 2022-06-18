/* Arrow UP */
// Top arrow scroll
var mybutton = document.getElementById("top");

/* Menu toggler */
const mediaQuery = window.matchMedia('(max-width: 990px)')

const nav = document.querySelector("nav");
const navContent = document.getElementById("navbarNavAltMarkup");
const section = document.querySelector(".frontpage");
const toggler = document.getElementById("toggler");

toggler.style.display = "none"

// When the user scrolls down 500px from the top of the document, add arrow and change menu to toggler
function scrollFunction() {
  //If on desktop
  if(!mediaQuery.matches) {
    //if scrolled 
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      //button toggler menu
        console.log(mediaQuery.matches)
        nav.classList.add("nav-scrolled");
        toggler.style.display = "block";
        navContent.classList.remove("navbar-collapse");

        mybutton.style.display = "block";
       
    } else {
          //long menu
         nav.classList.remove("nav-scrolled");
          toggler.style.display = "none"; 
          navContent.classList.add("navbar-collapse");    

           mybutton.style.display = "none";
    }    
  } else { //else on mobile format
      nav.classList.remove("nav-scrolled");
          toggler.style.display = "none"; 
          navContent.classList.add("navbar-collapse");    
    }
}

['scroll', 'resize'].forEach( evt =>
  window.addEventListener(evt, scrollFunction, false)
);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}