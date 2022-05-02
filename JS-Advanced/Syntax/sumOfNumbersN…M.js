function Sum(a, b){
    
    let result = 0;
    let n1 = Number(a);
    let n2 = Number(b);

    for (let index = n1; index <= n2; index++){
        result += index;    
    }

    return result;
}

console.log(Sum('1', '3'));