class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }
    add(elemenent) {
        this.list.push(elemenent);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
        return this;
    }
    remove(index) {
        if (index < this.size && index >= 0) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
            return this;
        }
    }
    get(index) {
        if (index < this.size && index >= 0) {
            return this.list[index];
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list);