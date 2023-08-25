const createTodoReducer = (state = false, action) => {
    console.log('action', action)
    switch(action.type){
        case 'saved_alert':
            return action.payload;
        case 'warning_alert':
            return action.payload;
        case 'deleted_alert':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;