const createTodoReducer = (state = [], action) => {
    switch(action.type){
        case 'store_all_data_notes':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;