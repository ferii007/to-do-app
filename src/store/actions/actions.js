
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

export const editNoteModal = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'edit_note_modal',
            payload: flag
        })
    }
}

export const editNoteModalHide = (flag) => {
    return (dispatch) => {
        dispatch({
            type: 'hide_edit_note_modal',
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

export const settingPage = (flag, message) => {
    return (dispatch) => {
        dispatch({
            type: 'setting_page',
            payload: flag
        })
    }
}

export const sortingNotes = (flag, message) => {
    return (dispatch) => {
        dispatch({
            type: 'sorting_notes',
            payload: flag
        })
    }
}

export const showSortingNotesModal = (flag, message) => {
    return (dispatch) => {
        dispatch({
            type: 'show_sorting_notes_modal',
            payload: flag
        })
    }
}