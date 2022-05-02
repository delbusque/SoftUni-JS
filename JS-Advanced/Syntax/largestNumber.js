function larNum(numA, numB, numC){

let largestNum;

if(numA >= numB){
    largestNum = numA;
}
else{
    largestNum = numB;
}

if (largestNum < numC){
    largestNum = numC;
}

console.log('The largest number is ' + largestNum + '.');
}

larNum(-2, -2, 2);