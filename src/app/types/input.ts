export interface InputState {
    value: string
}

export enum InputTypes {
    INPUT_CHANGE = "INPUT_CHANGE"
}

interface InputChangeAction {
    type: InputTypes.INPUT_CHANGE;
    value: string
}

export type InputAction = InputChangeAction