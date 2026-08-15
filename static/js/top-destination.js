let currentSlideIndexForTopDestination = 0;
let selectedIdentifierForTopDestination  = document.querySelector('[id="top-destinations"]');
let slidesForTopDestination;
let sliderIntervalForTopDestination;
let topDestinationSliderData = [
    `<div class="slide-entity top-destinations-holder"><img alt="Maldives" src="/images/top-destinations/maldives.png"/><div class="place bottom-right">Maldives</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Thailand" src="/images/top-destinations/thailand.png"/><div class="place bottom-right">Thailand</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Bali" src="/images/top-destinations/bali.png"/><div class="place bottom-right">Bali</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Greece" src="/images/top-destinations/greece.png"/><div class="place bottom-right">Greece</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Rome" src="/images/top-destinations/rome.png"/><div class="place bottom-right">Rome</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Sydney" src="/images/top-destinations/sydney.png"/><div class="place bottom-right">Sydney</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Dubai" src="/images/top-destinations/dubai.png"/><div class="place bottom-right">Dubai</div></div>`,
    `<div class="slide-entity top-destinations-holder"><img alt="Japan" src="/images/top-destinations/japan.png"/><div class="place bottom-right">Japan</div></div>`
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

function renderTopDestinationSlider() {
    const rearrangedTopDestinationSliderArr = manipulateDisplayArray(topDestinationSliderData, 'inBound');
    const refElement = document.getElementById("top-destination-slider");
    refElement.innerHTML = rearrangedTopDestinationSliderArr.join('');

    slidesForTopDestination = selectedIdentifierForTopDestination.querySelectorAll('.slide');
    currentSlideIndexForTopDestination = 0;
    syncSliderHeight('top-destination-slider');

    if (sliderIntervalForTopDestination) {
        clearInterval(sliderIntervalForTopDestination);
    }
    startAutoSlideForTopDestination();
}

// Start the slider when the page loads, and re-flow it on viewport resize/rotation
document.addEventListener('DOMContentLoaded', () => {
    renderTopDestinationSlider();
    onViewportResize(renderTopDestinationSlider);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => syncSliderHeight('top-destination-slider'));
    }
});
