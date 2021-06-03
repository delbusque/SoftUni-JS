function solve(matrix){

    let main = 0;
    let secondary = 0;

    for (let i = 0; i < matrix.length; i++){

        let line = matrix[i];

        main += line[0 + i];
        secondary += line[line.length - 1 - i];
      
    }

    return `${main} ${secondary}`

}

console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));