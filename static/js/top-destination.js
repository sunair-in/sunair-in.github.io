let currentSlideIndexForTopDestination = 0;
let selectedIdentifierForTopDestination  = document.querySelector('[id="top-destinations"]');
let slidesForTopDestination;
let sliderIntervalForTopDestination;
let topDestinationSliderData = [
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/maldives.png"/><div class="place bottom-right">Maldives</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/thailand.png"/><div class="place bottom-right">Thailand</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/bali.png"/><div class="place bottom-right">Bali</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/greece.png"/><div class="place bottom-right">Greece</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/rome.png"/><div class="place bottom-right">Rome</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/sydney.png"/><div class="place bottom-right">Sydney</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/dubai.png"/><div class="place bottom-right">Dubai</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img src="/images/top-destinations/japan.png"/><div class="place bottom-right">Japan</div></div>`
]

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
    
    const rearrangedTopDestinationSliderArr = manipulateDisplayArray(topDestinationSliderData, 'inBound');
    const refElement = document.getElementById("top-destination-slider");
    refElement.innerHTML = rearrangedTopDestinationSliderArr.join('');
    
    slidesForTopDestination = selectedIdentifierForTopDestination.querySelectorAll('.slide');
    startAutoSlideForTopDestination();
});