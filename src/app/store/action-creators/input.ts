import {Dispatch} from "redux";
import {InputAction, InputTypes} from "../../types/input";
import {fetchBooks} from "./bookSearch";
import {BookSearchAction} from "../../types/bookSearch";
import {RootState} from "../reducers";

let timerID: ReturnType<typeof setTimeout>

export const input = (value: string) => {
    return (dispatch: Dispatch<InputAction | BookSearchAction>) => {
        dispatch({ type: InputTypes.INPUT_CHANGE, value, isTimerActive: true })

        if(value === "") {
            dispatch({ type: InputTypes.INPUT_CHANGE, value, isTimerActive: false })
            return
        }

        if(timerID) clearTimeout(timerID)
        timerID = setTimeout(() => {
            clearTimeout(timerID)

            dispatch({ type: InputTypes.INPUT_CHANGE, value, isTimerActive: false })

            fetchBooks(value)(dispatch)
        }, 1000)
    }
}

export const clearInput = () => {
    return (dispatch: Dispatch<InputAction>) => {
        dispatch({ type: InputTypes.INPUT_CHANGE, value: "", isTimerActive: false })
        if(timerID) clearTimeout(timerID)
    }
}

export const sendInput = () => {
    return (dispatch: Dispatch<InputAction | BookSearchAction>, getState: () => RootState) => {
        const { value } = getState().input

        dispatch({ type: InputTypes.SEND_INPUT, value, isTimerActive: false })

        fetchBooks(value)(dispatch)
        if(timerID) clearTimeout(timerID)
    }
}