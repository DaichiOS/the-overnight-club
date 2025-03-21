// Immediate execution script to ensure loader is visible before any content
(function() {
  // Add class immediately
  document.documentElement.classList.add('loading-initial');
  
  // Style to hide content and show preloader
  var style = document.createElement('style');
  style.textContent = `
    body { 
      visibility: hidden !important; 
      opacity: 0 !important;
    }
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/backgrounds/oatbg.png');
      background-size: cover;
      background-position: center;
      z-index: 99999;
      display: block;
      visibility: visible !important;
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);
})(); 