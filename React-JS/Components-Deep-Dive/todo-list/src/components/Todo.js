export const Todo = (props) => {

    let className = 'todo';
    if (props.isCompleted) {
        className = 'todo is-completed';
    }

    return (
        <tr className={className}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => props.onClick(props._id)}>Change status</button>
            </td>
        </tr>
    )
}