function pressHouse() {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = [];
            result.push(`Title: ${this.title}`)
            result.push(`Content: ${this.content}`)
            return result.join('\n')
        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.')
            }
            if (!originalResearch.hasOwnProperty('title') || !originalResearch.hasOwnProperty('author')) {
                throw new Error(`The original research should have author and title.`)
            }
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            let result = [];
            result.push(super.toString());
            result.push(`Original Research: ${this.originalResearch.title } by ${this.originalResearch.author }`);
            if (this.comments.length > 0) {
                result.push('Comments:');
                this.comments.forEach(comment => {
                    result.push(comment)
                })
            }
            return result.join('\n')
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            let current = this.clients
                .find(client => client.clientName === clientName && client.orderDescription === orderDescription);

            if (current) {
                throw new Error('This client has already ordered this review.')
            }

            this.clients.push({ clientName, orderDescription });

            return `${clientName} has ordered a review for ${this.book.name}`
        }

        toString() {
            let result = [];
            result.push(super.toString());
            result.push(`Book: ${this.book.name}`)

            if (this.clients.length > 0) {
                result.push('Orders:')
                this.clients.forEach(client => {
                    result.push(`${client.clientName } - ${client.orderDescription}.`)
                })
            }

            return result.join('\n');

        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let  classes  = pressHouse();

let  book  =  new  classes.BookReview("The Great Gatsby is so much more than a love story",  "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...",   {  name:   "The Great Gatsby",  author:   "F Scott Fitzgerald"  });
console.log(book.addClient("The Guardian",  "100 symbols"));
console.log(book.addClient("Goodreads",  "30 symbols"));
console.log(book.toString()); 