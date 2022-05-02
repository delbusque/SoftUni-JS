(function solve() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str.concat(this.toString());
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.toString().concat(str);
        }
        return this.toString();
    }

    String.prototype.isEmpty = function() {
        if (this == '') {
            return true;
        }
        return false;
    }

    String.format = function(string, ...params) {
        let arr = params;
        let input = string.split(' ');
        let result = [];
        input.forEach(x => {
            if (x.startsWith('{') && x.endsWith('}')) {
                let i = x.slice(1, 2)
                if (i < arr.length) {
                    result.push(arr[i]);
                } else {
                    result.push(x);
                }

            } else {
                result.push(x);
            }
        })
        return result.join(' ');
    }

})();
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);

str = String.format('jumps {0} {1}', 'dog');
console.log(str);

str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);