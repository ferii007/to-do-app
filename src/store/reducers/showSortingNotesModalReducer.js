const createTodoReducer = (state = false, action) => {
    switch(action.type){
        case 'show_sorting_notes_modal':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;