/*
 * Grid
 */

export const flex = {

  // Config
  buttons: {
    text: {
      add: 'Add column',
      remove: 'Remove column',
    },
    target: '#flex article',
  },
  flex: {
    current: 4,
    min: 1,
    max: 12,
    flexTarget: '#flex .flex',
    codeTarget: '#flex pre code',
  },

  // Init
  init() {
    this.addButtons();
    this.generateFlex();
  },

  // Add buttons
  addButtons() {
    // Insert buttons
    let buttons = document.createElement('P');
    buttons.innerHTML = `
      <button class="secondary add">
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12">'</line>
        </svg>
        ${this.buttons.text.add}
      </button>

      <button class="secondary remove">
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        ${this.buttons.text.remove}
      </button>`;
    document.querySelector(this.buttons.target).before(buttons);

    // Add button listener
    document.querySelector('#flex button.add').addEventListener('click', () => {
      this.addColumn();
    }, false);

    // Remove button listener
    document.querySelector('#flex button.remove').addEventListener('click', () => {
      this.removeColumn();
    }, false);
  },

  // Generate grid
  generateFlex() {
    // Config
    let htmlInner = '';
    let codeInner = '&lt;<b>div</b> <i>class</i>=<u>"flex"</u>&gt;\n';

    // Build
    for (let col = 0; col < this.flex.current; col++) {
      htmlInner += '<div>' + (col + 1) + '</div>';
      codeInner += '  &lt;<b>div</b>&gt;' + (col + 1) + '&lt;/<b>div</b>&gt;\n';
    }

    // Display
    codeInner += '&lt;/<b>div</b>&gt;';
    document.querySelector(this.flex.flexTarget).innerHTML = htmlInner;
    document.querySelector(this.flex.codeTarget).innerHTML = codeInner;
  },

  // Add column
  addColumn() {
    if (this.flex.current < this.flex.max) {
      this.flex.current++;
      this.generateGrid();
    }
  },

  // Remove column
  removeColumn() {
    if (this.grid.current > this.flex.min) {
      this.flex.current--;
      this.generateFlex();
    }
  },
};
export default flex;