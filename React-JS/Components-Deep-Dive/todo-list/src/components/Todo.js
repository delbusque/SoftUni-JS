export const Todo = (props) => {
    return (
        <tr class="todo is-completed">
            <td>Give dog a bath</td>
            <td>Complete</td>
            <td class="todo-action">
                <button class="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}