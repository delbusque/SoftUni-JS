import { Book } from "./Book"

export const BookList = (props) => {
    return (
        <ul>
            <Book
                title={props.books[0].title}
                author={props.books[0].author}
                year={props.books[0].year}
                link={props.books[0].link}
                country={props.books[0].country}
            />
            <Book
                title={props.books[1].title}
                author={props.books[1].author}
                year={props.books[1].year}
                link={props.books[1].link}
                country={props.books[1].country}
            /> <Book

                title={props.books[2].title}
                author={props.books[2].author}
                year={props.books[2].year}
                link={props.books[2].link}
                country={props.books[2].country}
            />
        </ul>
    )
}