const INITIAL_STATE = {
    sortedBy: 'newest',
    displaySorted: 25
}


const createTodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'sorting_notes':
            return action.payload;
        default: 
            return state;
    }
}

export default createTodoReducer;