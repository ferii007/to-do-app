const createTodoReducer = (state = false, action) => {
    switch(action.type){
        case 'setting_page':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;