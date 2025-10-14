document.addEventListener('DOMContentLoaded', () => {
  const TOP = 200;   // height of .header-bg
  const BOTTOM = 100; // height of .navbar

  // let the page scroll naturally
  document.documentElement.style.height = '100%';
  document.body.style.minHeight = '100%';
  document.body.style.overflowY = 'auto';
  document.body.style.webkitOverflowScrolling = 'touch';

  // make content start below the fixed header-bg and end above navbar
  document.body.style.paddingTop = TOP + 'px';
  document.body.style.paddingBottom = BOTTOM + 'px';
});
