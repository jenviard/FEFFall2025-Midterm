document.addEventListener('DOMContentLoaded', () => {
  // Ensure body can scroll if there is enough content
  document.body.style.overflowY = 'auto';
  document.body.style.height = 'auto';

  const grid = document.querySelector('.items-grid');
  if (grid) {
    const resizeScrollArea = () => {
      const gridRect = grid.getBoundingClientRect();
      const totalHeight = grid.scrollHeight + 300; // add extra for navbar/header space
      document.body.style.minHeight = totalHeight + 'px';
    };

    resizeScrollArea();
    window.addEventListener('resize', resizeScrollArea);
  }

  // Optional: smooth scroll on iPhone
  document.body.style.webkitOverflowScrolling = 'touch';
});
