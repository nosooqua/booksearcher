import {InputAction, InputState, InputTypes} from "../../types/input";

const initialState: InputState = {
    value: "",
    isTimerActive: false
}

export const inputReducer = (state = initialState, action: InputAction): InputState => {
    switch (action.type) {
        case InputTypes.INPUT_CHANGE:
            return {value: action.value, isTimerActive: action.isTimerActive}
        case InputTypes.SEND_INPUT:
            return {value: state.value, isTimerActive: false}
        default:
            return state
    }
}