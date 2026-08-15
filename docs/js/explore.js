let currentSlideIndexForExplore = 0;
let selectedIdentifierForExplore = document.querySelector('[id="tour"]');
let slidesForExplore;
let sliderIntervalForExplore;
let exploreSliderData = [
    `<div class="column"><h3 class="column-header">ASIA</h3><div class="card"><img alt="Bali, Indonesia" src="/images/explore-world/asia/bali.png" /><div class="card-description"><h5 class="card-title">BALI, INDONESIA</h5><label class="card-info">Explore new and offbeat Islands in Bali while keeping up with the trends</label></div></div><div class="card"><img alt="Boracay, Philippines" src="/images/explore-world/asia/boracay.png" /><div class="card-description"><h5 class="card-title">BORACAY, PHILIPPINES</h5><label class="card-info">Hassle-free holiday packages inclusive of flights, hotels and transfers</label></div></div><div class="card"><img alt="Bhutan" src="/images/explore-world/asia/bhutan.png" /><div class="card-description"><h5 class="card-title">BHUTAN</h5><label class="card-info">Explore the most popular cities of Bhutan and travel across the Phuentsholing border</label></div></div><div class="card"><img alt="Nguyen Hue, Vietnam" src="/images/explore-world/asia/nguyen.png" /><div class="card-description"><h5 class="card-title">NGUYEN HUE, VIETNAM</h5><label class="card-info">Grab our top-selling packages at unbelievable prices, get free visa assistance and more!</label></div></div></div>`,
    `<div class="column"><h3 class="column-header">EUROPE</h3><div class="card"><img alt="Eiffel Tower, Paris" src="/images/explore-world/europe/eiffel-tower.png"/><div class="card-description"><h5 class="card-title">EIFFEL TOWER, PARIS</h5><label class="card-info">Rejuvenating Paris Family Vacation Package with Airfare</label></div></div><div class="card"><img alt="Barcelona, Spain" src="/images/explore-world/europe/barcelona.png"/><div class="card-description"><h5 class="card-title">BARCELONA, SPAIN</h5><label class="card-info">Most Budgeted Spain Tour Packages For A Fun Holiday</label></div></div><div class="card"><img alt="London Bridge, UK" src="/images/explore-world/europe/london-bridge.png"/><div class="card-description"><h5 class="card-title">LONDON BRIDGE, UK</h5><label class="card-info">Best-Selling London Honeymoon Packages For Your famlily</label></div></div><div class="card"><img alt="Amsterdam, Netherlands" src="/images/explore-world/europe/amsterdam.png"/><div class="card-description"><h5 class="card-title">AMSTERDAM, NETHERLANDS</h5><label class="card-info">Remarkable Amsterdam Honeymoon Package with Airfare</label></div></div></div>`,
    `<div class="column"><h3 class="column-header">NORTH AMERICA</h3><div class="card"><img alt="Times Square, New York" src="/images/explore-world/north-america/times-square.png"/><div class="card-description"><h5 class="card-title">TIMES SQUARE, NEW YORK</h5><label class="card-info">Explore Our Amazing Summer Special USA Honeymoon Package</label></div></div><div class="card"><img alt="Disneyland, California" src="/images/explore-world/north-america/disneyland.png"/><div class="card-description"><h5 class="card-title">DISNEY LAND, CALIFORNIA</h5><label class="card-info">The land of milk and honey: America is awaiting for you</label></div></div><div class="card"><img alt="Mount Rushmore, South Dakota" src="/images/explore-world/north-america/mount-rushmore.png"/><div class="card-description"><h5 class="card-title">MOUNT RUSHMORE, SOUTH DAKOTA</h5><label class="card-info">Mount Rushmore Tour Package - Best Mount Rushmore Tour</label></div></div><div class="card"><img alt="Toronto, Canada" src="/images/explore-world/north-america/toronto.png"/><div class="card-description"><h5 class="card-title">TORONTO, CANADA</h5><label class="card-info">A tremendous tour through Canada with Airfare</label></div></div></div>`,
    `<div class="column"><h3 class="column-header">AFRICA</h3><div class="card"><img alt="Botswana" src="/images/explore-world/africa/botswana.png"/><div class="card-description"><h5 class="card-title">BOTSWANA</h5><label class="card-info">Embark on a safari adventure in Botswana's pristine wilderness</label></div></div><div class="card"><img alt="Cape Town, South Africa" src="/images/explore-world/africa/cape-town.png"/><div class="card-description"><h5 class="card-title">CAPE TOWN, SOUTH AFRICA</h5><label class="card-info">Experience the breathtaking beauty of Cape Town, where nature meets urban charm</label></div></div><div class="card"><img alt="Ethiopia" src="/images/explore-world/africa/ethiopia.png"/><div class="card-description"><h5 class="card-title">ETHIOPIA</h5><label class="card-info">Discover Ethiopia's ancient wonders and vibrant culture</label></div></div><div class="card"><img alt="Mombasa, Kenya" src="/images/explore-world/africa/mombasa.png"/><div class="card-description"><h5 class="card-title">MOMBASA, KENYA</h5><label class="card-info">Relax on the sun-kissed beaches of Mombasa, Kenya's coastal gem</label></div></div></div>`,
    `<div class="column"><h3 class="column-header">SOUTH AMERICA</h3><div class="card"><img alt="Machu Picchu, Peru" src="/images/explore-world/south-america/machu-icchu.png"/><div class="card-description"><h5 class="card-title">MACHU PICCHU, PERU</h5><label class="card-info">An ancient Incan citadel perched among the Andes, offering a glimpse into history's secrets</label></div></div><div class="card"><img alt="Rio de Janeiro, Brazil" src="/images/explore-world/south-america/rio-de-jenerio.png"/><div class="card-description"><h5 class="card-title">RIO DE JANEIRO, BRAZIL</h5><label class="card-info">Dive into the vibrant rhythm of Rio de Janeiro</label></div></div><div class="card"><img alt="Iguazu Falls, Argentina" src="/images/explore-world/south-america/iguazu-falls.png"/><div class="card-description"><h5 class="card-title">IGUAZU FALLS, ARGENTINA</h5><label class="card-info">Surrender to the awe-inspiring majesty of Iguazu Falls</label></div></div><div class="card"><img alt="Torres del Paine, Chile" src="/images/explore-world/south-america/torres-del.png"/><div class="card-description"><h5 class="card-title">TORRES DEL PAINE, CHILE</h5><label class="card-info">Journey to the untamed wilderness</label></div></div></div>`,
    `<div class="column"><h3 class="column-header">AUSTRALIA</h3><div class="card"><img alt="Sydney" src="/images/explore-world/australia/sydney.png"/><div class="card-description"><h5 class="card-title">SYDNEY</h5><label class="card-info">Harbor city, home to the famous Sydney Opera House and stunning beaches</label></div></div><div class="card"><img alt="Great Barrier Reef, Queensland" src="/images/explore-world/australia/great-barrier-reef.png"/><div class="card-description"><h5 class="card-title">GREAT BARRIER REEF, QUEENSLAND</h5><label class="card-info">Dive into the world's largest coral reef system</label></div></div><div class="card"><img alt="Melbourne" src="/images/explore-world/australia/melbourne.png"/><div class="card-description"><h5 class="card-title">MELBOURNE</h5><label class="card-info">A cultural hub known for its diverse neighborhoods</label></div></div><div class="card"><img alt="Uluru-Kata Tjuta" src="/images/explore-world/australia/uluru-kata.png"/><div class="card-description"><h5 class="card-title">ULURU-KATA TJUTA</h5><label class="card-info">Witness the ancient beauty and sacred rock formations in it's heart</label></div></div></div>`
]

function showSlideForExplore(index) {
    slidesForExplore.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function startAutoSlideForExplore() {
    sliderIntervalForExplore = setInterval(nextSlideForExplore, 7000);
}

function nextSlideForExplore() {
    currentSlideIndexForExplore = (currentSlideIndexForExplore + 1) % slidesForExplore.length;
    showSlideForExplore(currentSlideIndexForExplore);
}

function renderExploreSlider() {
    const rearrangedExploreSliderArr = manipulateDisplayArray(exploreSliderData, 'explore');
    const refElement = document.getElementById("explore-world-slider");
    refElement.innerHTML = rearrangedExploreSliderArr.join('');

    slidesForExplore = selectedIdentifierForExplore.querySelectorAll('.slide');
    currentSlideIndexForExplore = 0;
    syncSliderHeight('explore-world-slider');

    if (sliderIntervalForExplore) {
        clearInterval(sliderIntervalForExplore);
    }
    startAutoSlideForExplore();
}

// Start the slider when the page loads, and re-flow it on viewport resize/rotation
document.addEventListener('DOMContentLoaded', () => {
    renderExploreSlider();
    onViewportResize(renderExploreSlider);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => syncSliderHeight('explore-world-slider'));
    }
});
