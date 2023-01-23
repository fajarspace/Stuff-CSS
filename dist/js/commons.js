

// Imports
import themeSwitcher from './src/theme-switcher.js';
import toggleNavigation from './src/toggle-navigation';
import copyButtonLabel from "./src/copy";

// Theme switcher
themeSwitcher.addButton({
  tag: 'button',
  class: 'contrast switcher theme-switcher',
  target: '.darkmode',
});
themeSwitcher.init();

// Toggle navigation
toggleNavigation.init();

copyButtonLabel.init();