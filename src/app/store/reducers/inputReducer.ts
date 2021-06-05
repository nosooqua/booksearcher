import {InputAction, InputState, InputTypes} from "../../types/input";

const initialState: InputState = {
    value: ""
}

export const inputReducer = (state = initialState, action: InputAction): InputState => {
    switch (action.type) {
        case InputTypes.INPUT_CHANGE:
            return {value: action.value}
        default:
            return state
    }
}