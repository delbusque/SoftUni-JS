function solve(commands) {

    let initial = 0;
    let arr = [];

    for (const comm of commands) {

        initial += 1;

        if(comm === 'add'){
            arr.push(initial);
        }
        else if(comm === 'remove'){
            arr.pop();
        }
    }

    if(arr.length === 0){

        return 'Empty';
    }
    else{
        return arr.join('\n');
    }
    
}

console.log(solve(['remove', 
'remove', 
'remove']));