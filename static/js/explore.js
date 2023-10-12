let currentSlideIndexForExplore = 0;
let selectedIdentifierForExplore = document.querySelector('[id="tour"]');
const slidesForExplore = selectedIdentifierForExplore.querySelectorAll('.slide');
let sliderIntervalForExplore;

function showSlideForExplore(index) {
    slidesForExplore.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Auto-slide every 5 seconds
function startAutoSlideForExplore() {
    sliderIntervalForExplore = setInterval(nextSlideForExplore, 7000);
}

function nextSlideForExplore() {
    currentSlideIndexForExplore = (currentSlideIndexForExplore + 1) % slidesForExplore.length;
    showSlideForExplore(currentSlideIndexForExplore);
}

// Start the slider when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startAutoSlideForExplore();
});