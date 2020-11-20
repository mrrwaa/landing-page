/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
 
/**
 * Define Global Variables
 * 
*/
let ul =document.querySelector("ul");
let sections =document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

	
	


//function for navbar-menu responsive button
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the button */
function responsiveBttn() {
    if (ul.className === "topnav") {
      ul.className += " responsive";
    } else {
      ul.className = "topnav";
    }
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let fragment = document.createDocumentFragment();  
let nav      =document.querySelector(".navbar__menu");
let responsiveBtn      =document.createElement('li');
responsiveBtn.innerHTML= `<button class="icon" onclick="responsiveBttn()">section </button>`;
sections.forEach(section => {
    let text    =section.getAttribute("data-nav");
    let li      =document.createElement("li");
    let link    =document.createElement("a");
    link.setAttribute("class","menu__link");
    link.setAttribute("href",`#${section.id}`);
    let textnode=document.createTextNode(text);
    link.appendChild(textnode);
    li.appendChild(link);
    fragment.appendChild(li);
});
ul.appendChild(fragment);
ul.appendChild(responsiveBtn);


 
// Add class 'active' to section when near top of viewport

document.addEventListener("scroll",function () {
  sections.forEach(section => {
    let rect =section.getBoundingClientRect();
 if (rect.top >= 0 && rect.bottom  < window.innerHeight) {
   sections.forEach(section=> {
    section.classList.remove("active-section");
   });
     section.classList.add("active-section");
     
       
    };
    });
  });
  
  //to deactive style when we reach toop of h1
let h1 =document.querySelector("h1");
let h1pos =h1.getBoundingClientRect();
if (h1pos.top == 241 && h1pos.bottom == 359 ){
  sections.forEach(section => {
    section.classList.remove("active-section");
  });
};

//function for helping active link
 
  let links =document.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click",function(){
      links.forEach(link =>{
        link.classList.remove("active");
      });
        this.classList.add("active");
    });
  });

  
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Set sections as active


