function stars(n) {
    let output = '* * * * *';
    if (n != undefined) {
        output = '';
        for (let index = 0; index < n; index++) {
            output += '* ';


        }
        for (let index = 0; index < n; index++) {
            console.log(output)

        }
    } else {
        for (let index = 0; index < 5; index++) {
            console.log(output)

        }
    }
}

stars(5)