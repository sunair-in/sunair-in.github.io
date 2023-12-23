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
    const screenWidth=screen.width;

    if(screenWidth > 700){
        return 3;
    } else if(screenWidth > 500 && screenWidth < 700){
        return 2;
    } else return 1;
}

function calculateDisplayElementForInboundSection(){
    const screenWidth=screen.width;

    if(screenWidth > 700){
        return 4;
    } else if(screenWidth > 500 && screenWidth < 700){
        return 3;
    } else return 2;
}