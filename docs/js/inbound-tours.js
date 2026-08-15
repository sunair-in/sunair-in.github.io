let currentSlideIndexForInboundTours = 0;
let selectedIdentifierForInboundTours  = document.querySelector('[id="inbound-tours"]');
let slidesForInboundTours;
let sliderIntervalForInboundTours;
let inboundToursSliderData = [
    `<div class="slide-entity"><img alt="Taj Mahal, Agra" src="/images/inbound-tours/taj-mahal.png"/><label class="place">TAJ MAHAL</label><label class="address">AGRA, INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Varanasi" src="/images/inbound-tours/varanasi.png"/><label class="place">VARANASI</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Statue of Unity, Narmada" src="/images/inbound-tours/statue-unity.png"/><label class="place">STATUR OF UNITY</label><label class="address">NARMADA, INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Leh Ladakh" src="/images/inbound-tours/leh.png"/><label class="place">LEH LADAKH</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Golden Temple, Amritsar" src="/images/inbound-tours/amritsar.png"/><label class="place">GOLDEN TEMPLE</label><label class="address">PUNJAB, INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Hawa Mahal, Jaipur" src="/images/inbound-tours/jaipur.png"/><label class="place">HAWA MAHAL</label><label class="address">RAJASTHAN, INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Kerala" src="/images/inbound-tours/kerela.png"/><label class="place">KERELA</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img alt="Mumbai" src="/images/inbound-tours/mumbai.png"/><label class="place">MUMBAI</label><label class="address">INDIA</label></div>`
]

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

function renderInboundToursSlider() {
    const rearrangedInboundTourSliderArr = manipulateDisplayArray(inboundToursSliderData, 'inBound');
    const refElement = document.getElementById("inbound-tour-slider");
    refElement.innerHTML = rearrangedInboundTourSliderArr.join('');

    slidesForInboundTours = selectedIdentifierForInboundTours.querySelectorAll('.slide');
    currentSlideIndexForInboundTours = 0;
    syncSliderHeight('inbound-tour-slider');

    if (sliderIntervalForInboundTours) {
        clearInterval(sliderIntervalForInboundTours);
    }
    startAutoSlideForInboundTours();
}

// Start the slider when the page loads, and re-flow it on viewport resize/rotation
document.addEventListener('DOMContentLoaded', () => {
    renderInboundToursSlider();
    onViewportResize(renderInboundToursSlider);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => syncSliderHeight('inbound-tour-slider'));
    }
});
