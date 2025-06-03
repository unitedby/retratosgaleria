document.getElementById('mainLanding').addEventListener('click', function() {
    const element = this;
    
    // First, trigger opacity transition
    element.classList.add('hidden');
    
    // After opacity transition completes, then change z-index
    element.addEventListener('transitionend', function handler() {
        element.style.zIndex = '-1';
        element.removeEventListener('transitionend', handler); // Clean up
    });
});