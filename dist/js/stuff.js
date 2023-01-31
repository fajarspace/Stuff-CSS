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

const activeLink = document.querySelector(`aside a#${props.active}`);
const parentAccordion = activeLink.closest('details');
activeLink.setAttribute('aria-current', 'page');
parentAccordion.setAttribute('open', 'true');
// // Init
// flex.init();
