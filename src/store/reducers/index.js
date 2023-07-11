import { combineReducers} from "redux";
import createTodoReducer from "./createTodoReducer";

export default combineReducers({
    createTodo: createTodoReducer
});