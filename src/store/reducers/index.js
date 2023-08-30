import { combineReducers} from "redux";
import createTodoReducer from "./createTodoReducer";
import allDataNotesReducer from "./allDataNotesReducer";
import showDeleteNoteModalReducer from "./showDeleteNoteModalReducer";
import alertReducer from "./alertReducer";
import settingPageReducer from "./settingPageReducer";
import sortingNotesReducer from "./sortingNotesReducer";

export default combineReducers({
    createTodo: createTodoReducer,
    allDataNotes: allDataNotesReducer,
    showDeleteNoteModal: showDeleteNoteModalReducer,
    alertNotif: alertReducer,
    settingPage: settingPageReducer,
    sortingNotes: sortingNotesReducer,
});