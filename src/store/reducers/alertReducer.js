const createTodoReducer = (state = {}, action) => {
    switch(action.type){
        case 'alert_notif':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;