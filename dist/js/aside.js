const activeLink = document.querySelector(`aside a#${props.active}`);
const parentAccordion = activeLink.closest('details');
activeLink.setAttribute('aria-current', 'page');
parentAccordion.setAttribute('open', 'true');
