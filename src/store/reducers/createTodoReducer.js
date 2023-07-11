const createTodoReducer = (state = false, action) => {
    switch(action.type){
        case 'create_todo':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;