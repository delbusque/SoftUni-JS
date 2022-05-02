function objectFactory(array){

    const obj = {};

    for (let index = 0; index < array.length; index+=2) {
        obj[array[index]] = Number(array[index+1]);   
    }

    return obj;

}

console.log(objectFactory(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))