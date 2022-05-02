function solution(input = []) {
    let sum = input[0].reduce((a, c) => a + c, 0);

    let arr = (arr, n) => arr.map((x) => x[n]);
    
    for (let i = 0; i < input.length; i++) {

        let col = arr(input, i);
        let vertical = column.reduce((a, c) => a + c, 0);
        let horizontal = input[i].reduce((a, c) => a + c, 0);
        if (sum !== vertical || sum !== horizontal) {
            console.log("false");
            return;
        }
    }
    console.log("true");
}

solution([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ]);