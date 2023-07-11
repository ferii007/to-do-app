
const createTodo = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'create_todo',
            payload: flag
        })
    }
}

export default createTodo