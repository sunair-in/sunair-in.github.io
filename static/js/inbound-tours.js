let currentSlideIndexForInboundTours = 0;
let selectedIdentifierForInboundTours  = document.querySelector('[id="inbound-tours"]');
const slidesForInboundTours = selectedIdentifierForInboundTours.querySelectorAll('.slide');
let sliderIntervalForInboundTours;

function showSlideForInboundTours(index) {
    slidesForInboundTours.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Auto-slide every 5 seconds
function startAutoSlideForInboundTours() {
    sliderIntervalForInboundTours = setInterval(nextSlideForInboundTours, 5000);
}

function nextSlideForInboundTours() {
    currentSlideIndexForInboundTours = (currentSlideIndexForInboundTours + 1) % slidesForInboundTours.length;
    showSlideForInboundTours(currentSlideIndexForInboundTours);
}

// Start the slider when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startAutoSlideForInboundTours();
});