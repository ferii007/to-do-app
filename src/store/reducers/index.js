import { combineReducers} from "redux";
import createTodoReducer from "./createTodoReducer";
import allDataNotesReducer from "./allDataNotesReducer";
import showDeleteNoteModalReducer from "./showDeleteNoteModalReducer";
import editNoteModalReducer from "./editNoteModalReducer";
import alertReducer from "./alertReducer";
import settingPageReducer from "./settingPageReducer";
import sortingNotesReducer from "./sortingNotesReducer";
import showSortingNotesModalReducer from "./showSortingNotesModalReducer";

export default combineReducers({
    createTodo: createTodoReducer,
    allDataNotes: allDataNotesReducer,
    showDeleteNoteModal: showDeleteNoteModalReducer,
    editNoteModal: editNoteModalReducer,
    alertNotif: alertReducer,
    settingPage: settingPageReducer,
    sortingNotes: sortingNotesReducer,
    showSortingNotesModal: showSortingNotesModalReducer,
});