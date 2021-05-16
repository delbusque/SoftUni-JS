function circleArea(input){
    
    let radius;
    let inputType = typeof(input);
    
    if(inputType === 'number'){
        radius = Math.PI * Math.pow(input, 2);
        console.log(radius.toFixed(2));
    }
    else{      
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(11);