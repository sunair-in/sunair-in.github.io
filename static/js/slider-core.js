function manipulateDisplayArray(data, type){
    let numberOfElementToDisplay;
    const dataLength = data.length;

    if(type == 'explore'){
        numberOfElementToDisplay = calculateDisplayElementForExploreWorldSection();
    } else {
        numberOfElementToDisplay = calculateDisplayElementForInboundSection();
    }

    
    let numberOfGroups = Math.floor(dataLength/numberOfElementToDisplay); 
    let iterator = 0;
    let returnArray = [];

    if(numberOfGroups!=0){
        returnArray.push(`<div class="slide active">`);
        numberOfGroups--;
    }
    
    while(numberOfGroups>=0){
        if(iterator != 0){
            returnArray.push(`<div class="slide">`);
        }
        const maxNumberOfColumnsToPush = iterator + numberOfElementToDisplay;
        for(;iterator<maxNumberOfColumnsToPush;iterator++){
            returnArray.push(data[iterator]);
        }
        returnArray.push(`</div>`);
        numberOfGroups--;

    }
    if(iterator != dataLength){
        returnArray.push(`<div class="slide">`);
        while(iterator != dataLength){
            returnArray.push(data[iterator]);
            iterator++;
        }
        returnArray.push(`</div>`);
    }

    return returnArray;
}

function calculateDisplayElementForExploreWorldSection(){
    const viewportWidth = window.innerWidth;

    if(viewportWidth >= 1040){
        return 3;
    } else if(viewportWidth >= 640){
        return 2;
    } else return 1;
}

function calculateDisplayElementForInboundSection(){
    const viewportWidth = window.innerWidth;

    if(viewportWidth >= 900){
        return 4;
    } else if(viewportWidth >= 600){
        return 3;
    } else return 2;
}

function debounce(callback, waitMs){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, args), waitMs);
    };
}

function onViewportResize(callback){
    window.addEventListener('resize', debounce(callback, 200));
    window.addEventListener('orientationchange', debounce(callback, 200));
}

// The CSS height on .slider-container is a fallback guess (clamp()) sized for
// the common case. Actual content height varies with viewport width (narrower
// columns wrap card text onto more lines), so once real content is in the DOM
// we measure the tallest slide and set an exact height — this is what stops
// text-heavy slides from being clipped by the container's overflow:hidden.
function syncSliderHeight(containerId){
    const container = document.getElementById(containerId);
    if (!container) return;

    let maxHeight = 0;
    container.querySelectorAll('.slide').forEach(slide => {
        maxHeight = Math.max(maxHeight, slide.scrollHeight);
    });

    if (maxHeight > 0) {
        container.style.height = maxHeight + 'px';
    }
}