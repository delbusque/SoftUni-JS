function town(input){

    const towns = {};

    for (let i = 0; i < input.length; i++){

        const current = input[i].split(' <-> ');
        let name = current[0];
        let popul = Number(current[1]);

        if(towns.hasOwnProperty(name))
        {
            towns[name] += popul;
        }
        else{
            towns[name] = popul;
        }
    }

    for (const key in towns) {
        
        console.log(`${key} : ${towns[key]}`)
    }
}

town(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Montana <-> 20000',
'Las Vegas <-> 1000000'])