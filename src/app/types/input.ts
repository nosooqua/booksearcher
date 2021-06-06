export interface InputState {
    value: string,
    isTimerActive: boolean
}

export enum InputTypes {
    INPUT_CHANGE = "INPUT_CHANGE",
    SEND_INPUT = "SEND_INPUT"
}

interface InputChangeAction {
    type: InputTypes.INPUT_CHANGE
    value: string
    isTimerActive: boolean
}

interface InputSendAction {
    type: InputTypes.SEND_INPUT
    value: string
    isTimerActive: boolean
}

export type InputAction = InputChangeAction | InputSendAction