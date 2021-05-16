function strLen(strA, strB, strC){
    let totalLen = strA.length + strB.length + strC.length;
    console.log(totalLen);
    console.log(Math.floor(totalLen / 3));
}

strLen('chocolate', 'ice cream', 'cake');