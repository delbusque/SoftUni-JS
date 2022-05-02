function last(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let current = 0;

        for (let j = result.length - 1; j >= 0; j--) {
            if (j < k) {
                current += result[j];
            } else {
                for (let l = 0; l < k; l++) {
                    current += result[result.length - 1 - l];
                };
                break;
            }
        };
        result.push(current);
    };

    return result;

};

last(8, 2);