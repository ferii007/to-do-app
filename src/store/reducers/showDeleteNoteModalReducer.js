const INITIAL_STATE = {
    open: false,
    id: null,
    title: '',
    notes: ''
}


const createTodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'show_delete_note_modal':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;