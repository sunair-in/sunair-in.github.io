let currentSlideIndexForInboundTours = 0;
let selectedIdentifierForInboundTours  = document.querySelector('[id="inbound-tours"]');
let slidesForInboundTours;
let sliderIntervalForInboundTours;
let inboundToursSliderData = [
    `<div class="slide-entity"><img src="/images/inbound-tours/taj-mahal.png"/><label class="place">TAJ MAHAL</label><label class="address">AGRA, INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/varanasi.png"/><label class="place">VARANASI</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/statue-unity.png"/><label class="place">STATUR OF UNITY</label><label class="address">NARMADA, INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/leh.png"/><label class="place">LEH LADAKH</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/amritsar.png"/><label class="place">GOLDEN TEMPLE</label><label class="address">PUNJAB, INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/jaipur.png"/><label class="place">HAWA MAHAL</label><label class="address">RAJASTHAN, INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/kerela.png"/><label class="place">KERELA</label><label class="address">INDIA</label></div>`,
    `<div class="slide-entity"><img src="/images/inbound-tours/mumbai.png"/><label class="place">MUMBAI</label><label class="address">INDIA</label></div>`
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

// Start the slider when the page loads
document.addEventListener('DOMContentLoaded', () => {
    
    const rearrangedInboundTourSliderArr = manipulateDisplayArray(inboundToursSliderData, 'inBound');
    const refElement = document.getElementById("inbound-tour-slider");
    refElement.innerHTML = rearrangedInboundTourSliderArr.join('');

    slidesForInboundTours = selectedIdentifierForInboundTours.querySelectorAll('.slide');
    startAutoSlideForInboundTours();
});