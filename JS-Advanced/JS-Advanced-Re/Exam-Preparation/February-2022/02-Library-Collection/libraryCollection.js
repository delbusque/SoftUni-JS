class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error("Not enough space in the collection.")
        }

        const newBook = {
            bookName,
            bookAuthor,
            payed: false
        }

        this.books.push(newBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }


    payBook(bookName) {
        let bookToPay = this.books.find(book => book.bookName == bookName);

        if (!bookToPay) {
            throw new Error(`${bookName} is not in the collection.`)
        }

        if (bookToPay.payed) {
            throw new Error(`${bookName} has already been paid.`)
        }

        bookToPay.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let indexToRemove;
        let bookToRemove = this.books.find((book, index) => {
            indexToRemove = index;
            return book.bookName == bookName;
        });

        if (!bookToRemove) {
            throw new Error("The book, you're looking for, is not found.")
        }

        if (!bookToRemove.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(indexToRemove, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
            let result = [];
            if (!bookAuthor) {
                result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
                let sorted = this.books.sort((a, b) => b.bookAuthor.localeCompare(a.bookAuthor));

                sorted.forEach(book => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid` : `Not Paid`}.`))
        }else{
            let withBookAuthor = this.books.filter(b=>{
                return b.bookAuthor === bookAuthor;
            })

            if(withBookAuthor.length == 0){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            withBookAuthor.forEach(book=>result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid` : `Not Paid`}.`))
        }

        return result.join('\n')
    }
}

let library = new LibraryCollection(2);
library.addBook("Don Quixote", "123w")
library.getStatistics("123w")