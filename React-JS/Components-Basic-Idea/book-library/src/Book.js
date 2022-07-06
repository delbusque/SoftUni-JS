export const Book = (props) => {
    return (
        <article>
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>Year: {props.year}, Country: {props.country}</p>
            <p>{props.link}</p>
        </article>
    )
}