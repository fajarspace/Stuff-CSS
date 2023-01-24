// Imports
import darkMode from './src/darkmode';
// import customDarkmode from "./src/custom-darkmode";
import toggleNavigation from './src/toggle-navigation';
import copyButtonLabel from "./src/copy";

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