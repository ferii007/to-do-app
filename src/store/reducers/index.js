import { combineReducers} from "redux";
import createTodoReducer from "./createTodoReducer";
import allDataNotesReducer from "./allDataNotesReducer";

export default combineReducers({
    createTodo: createTodoReducer,
    allDataNotes: allDataNotesReducer
});