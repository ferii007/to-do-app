import { combineReducers} from "redux";
import createTodoReducer from "./createTodoReducer";
import allDataNotesReducer from "./allDataNotesReducer";
import showDeleteNoteModalReducer from "./showDeleteNoteModalReducer";

export default combineReducers({
    createTodo: createTodoReducer,
    allDataNotes: allDataNotesReducer,
    showDeleteNoteModal: showDeleteNoteModalReducer,
});