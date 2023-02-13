// Imports
import darkMode from './src/darkmode';
// import customDarkmode from "./src/custom-darkmode";
import toggleNavigation from './src/toggle-navigation';
import copyButtonLabel from "./src/copy";
// import flex from "./src/flex";

// Theme switcher
darkMode.addButton({
  tag: 'li',
  class: 'contrast darkmode',
  target: '.darkmode',
});

//darkmode
darkMode.init();
// customDarkmode.init();

// Toggle navigation
toggleNavigation.init();

// Code doc copy
copyButtonLabel.init();

<<<<<<< HEAD
=======
const activeLink = document.querySelector(`aside a#${props.active}`);
const parentAccordion = activeLink.closest('details');
activeLink.setAttribute('aria-current', 'page');
parentAccordion.setAttribute('open', 'true');
>>>>>>> 4fd3b3c96ee87207cef2a834869eff0449671145
// // Init
// flex.init();
