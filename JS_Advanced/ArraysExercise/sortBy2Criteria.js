function solve(array){

    array.sort((a,b) => {

        if(a.length === b.length){
            return a.localeCompare(b);
        }

        return a.length-b.length;
    })

    return array.join('\n');
}

console.log(solve(['test', 
'Deny', 
'omen', 
'Default']));