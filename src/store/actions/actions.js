
export const createTodo = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'create_todo',
            payload: flag
        })
    }
}

export const allDataNotes = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'store_all_data_notes',
            payload: flag
        })
    }
}