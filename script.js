
/* JAVASCRIPT CURRENTLY WORKING */

// Select the div that the icon menu is inside
// Currently I'm using this div as a button
const iconMenuDiv = document.querySelector('.js-icon-menu-div');

// Select the menu icon itself to be able to change it when clicked
const iconMenu = document.getElementById('js-icon-menu');

// Select the div that contains all the header links for the mobile size screen
let headerLinks = document.querySelector('.header-links-mobile');

// Stablish the address of all menu icons
const iconMenuButtons = [
  'assets/images/icon-menu.svg',
  'assets/images/icon-menu-close.svg'
]

// Stablish the On and Off button logic
let menuButton = true;

// Add and Click event listener to the iconMenuDiv
iconMenuDiv.addEventListener('click', function () {

  // if MenuButton is true when clicked
  if (menuButton) {
    // WHEN CLICKED
    // Show the icon menu close
    iconMenu.src = iconMenuButtons[1];
    // Show the mobile size Links Div
    headerLinks.setAttribute('style', 'display: flex');
  } else {
    // WHEN CLICKED AGAIN
    // Show the icon menu open
    iconMenu.src = iconMenuButtons[0];
    // Hide the mobile size Links Div
    headerLinks.setAttribute('style', 'display: none');
  }

  // Turn menuButton False
  menuButton = !menuButton;

})


/* This was one try to make the Header links disappear when the screen was over 1000 pixels */
// const x = window.matchMedia("(max-width: 1000px)");





/* JAVASCRIPT THAT DIDN'T WORK AT THE END */

/* 

const headerLinksDiv = document.querySelector('.header-links-div');
const headerLinksMobile = document.querySelector('.header-links-mobile');

const hamburgerMenu = [
  'assets/images/icon-menu-close.svg',
  'assets/images/icon-menu.svg'
];


const headerLinks = document.querySelectorAll('.header-link')

hamburgerButtonMenu = document.createElement('img');
hamburgerButtonMenu.src = hamburgerMenu[1];


function mobileSizeButton (x) {
  
  if (x.matches) { 
    
    // Remove header links
    headerLinks.forEach(link => {
      link.remove();
    })

    // Add hamburger button 
    
    headerLinksDiv.append(hamburgerButtonMenu);
    
  } else {
    
    headerLinksDiv.append(hamburgerButtonMenu);
    
    // add header links back
    headerLinks.forEach(link => {
      link.remove();
    })

  }

}

const x = window.matchMedia("(max-width: 1000px)")

x.addEventListener('change', () => {
  mobileSizeButton(x);
});

*/