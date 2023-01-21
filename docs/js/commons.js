

// Imports
import themeSwitcher from './src/theme-switcher.js';
import toggleNavigation from './src/toggle-navigation';

// Theme switcher
themeSwitcher.addButton({
  tag: 'BUTTON',
  class: 'contrast switcher theme-switcher',
  target: 'nav',
});
themeSwitcher.init();

// Toggle navigation
toggleNavigation.init();