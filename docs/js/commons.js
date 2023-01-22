

// Imports
import themeSwitcher from './src/theme-switcher.js';
import toggleNavigation from './src/toggle-navigation';

// Theme switcher
themeSwitcher.addButton({
  tag: 'li',
  class: 'contrast switcher theme-switcher',
  target: '.theme',
});
themeSwitcher.init();

// Toggle navigation
toggleNavigation.init();