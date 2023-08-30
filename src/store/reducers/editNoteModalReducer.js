const INITIAL_STATE = {
    open: false,
    id: null,
    title: '',
    notes: ''
}


const createTodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'edit_note_modal':
            return action.payload;
        case 'hide_edit_note_modal':
            return INITIAL_STATE;
        default: 
            return state;
    }
}

export default createTodoReducer;