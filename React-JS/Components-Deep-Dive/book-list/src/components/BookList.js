import { Book } from '../components/Book';

export const BookList = (props) => {

    const bookElements = props.books.map(book => <Book key={book.author + book.year}{...book} />);

    return (
        <ul >
            {bookElements}
        </ul>
    )
}