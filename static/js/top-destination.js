let currentSlideIndexForTopDestination = 0;
let selectedIdentifierForTopDestination  = document.querySelector('[id="top-destinations"]');
const slidesForTopDestination = selectedIdentifierForTopDestination.querySelectorAll('.slide');
let sliderIntervalForTopDestination;

function showSlideForTopDestination(index) {
    slidesForTopDestination.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Auto-slide every 5 seconds
function startAutoSlideForTopDestination() {
    sliderIntervalForTopDestination = setInterval(nextSlideForTopDestination, 5000);
}

function nextSlideForTopDestination() {
    currentSlideIndexForTopDestination = (currentSlideIndexForTopDestination + 1) % slidesForTopDestination.length;
    showSlideForTopDestination(currentSlideIndexForTopDestination);
}

// Start the slider when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startAutoSlideForTopDestination();
});