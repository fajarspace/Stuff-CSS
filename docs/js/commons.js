

// Imports
import themeSwitcher from './src/theme-switcher.js';
import toggleNavigation from './src/toggle-navigation';
import copyButtonLabel from "./src/copy";

// Theme switcher
themeSwitcher.addButton({
  tag: 'li',
  class: 'contrast switcher theme-switcher',
  target: '.theme',
});
themeSwitcher.init();

// Toggle navigation
toggleNavigation.init();

copyButtonLabel.init();