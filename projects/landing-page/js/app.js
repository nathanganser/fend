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

/* Get the sections */
const menu = document.querySelectorAll('section')

/* Get the menu */
const menu_items = document.getElementById("navbar__list")


function createMenu () {
for (let element of menu) {
    /* Create each menu element */
    menu_element =  document.createElement("li")
    menu_element.className = "menu__link";
    name = element.querySelector('h2').innerText
    number = name[name.length -1]
    menu_element.textContent = name
    menu_element.setAttribute('href', `section${number}`)
              
    /* Append the sections to the menu */
    menu_items.appendChild(menu_element)

}
}

createMenu();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


