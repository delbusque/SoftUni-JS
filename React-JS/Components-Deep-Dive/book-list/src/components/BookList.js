import { Book } from '../components/Book';
import styles from './Book.module.css';


export const BookList = (props) => {

    const bookElements = props.books.map(book => <Book key={book.author + book.year}{...book} />);

    return (
        <div >
            {bookElements}
        </div>
    )
}