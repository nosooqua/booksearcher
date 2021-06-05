import {Dispatch} from "redux";
import {InputAction, InputTypes} from "../../types/input";
import {fetchBooks} from "./bookSearch";
import {BookSearchAction} from "../../types/bookSearch";

let timerID: ReturnType<typeof setTimeout>

export const input = (value: string) => {
    return (dispatch: Dispatch<InputAction | BookSearchAction>) => {
        dispatch({ type: InputTypes.INPUT_CHANGE, value })

        if(value === "") return

        if(timerID) clearTimeout(timerID)
        timerID = setTimeout(() => {
            clearTimeout(timerID)

            fetchBooks(value)(dispatch)
        }, 1000)
    }
}