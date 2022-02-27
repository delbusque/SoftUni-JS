class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.currentString = string;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        this.currentString = this.innerString;
        if (this.innerLength == 0) {
            this.currentString = '...';
            return this.currentString;
        } else if (this.innerString.length > this.innerLength) {
            let length = this.innerString.length - this.innerLength;
            this.currentString = `${this.currentString.slice(0, length)}...`;
            return this.currentString;
        } else {
            return this.innerString;
        }
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test