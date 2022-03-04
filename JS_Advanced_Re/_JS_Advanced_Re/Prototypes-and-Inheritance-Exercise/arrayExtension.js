(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        let result = Array.from(this)
        result.splice(0, n);
        return result;
    }
    Array.prototype.take = function(n) {
        let result = Array.from(this)
        return result.splice(0, n);
    }
    Array.prototype.sum = function() {
        return this.reduce((acc, x) => {
            acc += x;
            return acc;
        }, 0)
    }
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();

let arr = [1, 2, 3]
console.log(arr.take(2));