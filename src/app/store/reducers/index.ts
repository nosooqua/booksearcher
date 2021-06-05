import {combineReducers} from "redux";
import {bookSearchReducer} from "./bookSearchReducer";
import {inputReducer} from "./inputReducer";

export const rootReducer = combineReducers({
    bookSearch: bookSearchReducer,
    input: inputReducer
})

export type RootState = ReturnType<typeof rootReducer>