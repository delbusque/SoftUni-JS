export const Book = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <span>{props.year}, </span>
            <span>{props.country}</span>
        </div>
    )
}