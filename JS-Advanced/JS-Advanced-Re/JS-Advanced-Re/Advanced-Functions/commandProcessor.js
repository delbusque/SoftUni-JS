function solution() {
    let text = '';

    return {
        'append': function(inputText) {
            text += inputText;
        },
        print() {
            console.log(text);
        },
        removeStart(n) {
            text = text.slice(n);
        },
        removeEnd(n) {
            text = text.substring(0, text.length - n)
        }

    }
}



let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();