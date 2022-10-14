import { Book } from "./Book.js"

export const BookList = (props) => {

    return (
        <ul>
            {props.books.map(b => <Book key={b.title + b.year} {...b} />)}
        </ul>
    )
}