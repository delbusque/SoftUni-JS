function createSortedList() {

    let result = {
        list: [],
        size: 0
    };

    result['add'] = (element) => {
        result.list.push(element);
        result.list.sort((a, b) => a - b);
        result.size++;
    };
    result['remove'] = (index) => {
        if (index < result.size && index >= 0) {
            result.size--;
            return result.list.splice(index, 1);
        }

    };
    result['get'] = (index) => {
        if (index < result.size && index >= 0) {
            return result.list[index];
        } else {
            throw new Error('No such index')
        }
    };

    return result;
}

let list = createSortedList();

list.add(5);
list.add(7);
list.add(6);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


console.log(list);