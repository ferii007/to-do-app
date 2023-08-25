
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

export const showDeleteNoteModal = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'show_delete_note_modal',
            payload: flag
        })
    }
}

export const alertNotif = (flag, message) => {
    return (dispatch) => {
        dispatch({
            type: 'alert_notif',
            payload: {
                show: flag,
                message: message,
            }
        })
    }
}