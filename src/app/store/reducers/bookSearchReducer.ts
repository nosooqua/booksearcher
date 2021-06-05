import {BookSearchAction, BookSearchState, BookSearchTypes} from "../../types/bookSearch";

const initialState: BookSearchState = {
    books: null,
    loading: false,
    error: null
}

export const bookSearchReducer = (state = initialState, action: BookSearchAction): BookSearchState => {
    switch (action.type) {
        case BookSearchTypes.FETCH_BOOKS:
            return {loading: true, error: null, books: null}
        case BookSearchTypes.FETCH_BOOKS_SUCCESS:
            return {loading: false, error: null, books: action.payload}
        case BookSearchTypes.FETCH_BOOKS_ERROR:
            return {loading: false, error: action.payload, books: null}
        case BookSearchTypes.CLEAR_BOOKS:
            return {loading: false, error: null, books: null}
        default:
            return state
    }
}