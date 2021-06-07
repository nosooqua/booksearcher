import {BookSearchAction, BookSearchState, BookSearchTypes} from "../../types/bookSearch";

const initialState: BookSearchState = {
    books: null,
    loading: false,
    error: null,
    page: 0,
    limit: 0,
    count: 0
}

export const bookSearchReducer = (state = initialState, action: BookSearchAction): BookSearchState => {
    switch (action.type) {
        case BookSearchTypes.FETCH_BOOKS:
            return {loading: true, error: null, books: null, page: 0, limit: 0, count: 0}
        case BookSearchTypes.FETCH_BOOKS_SUCCESS:
            return {loading: false, error: null, books: action.payload, page: action.page, limit: action.limit, count: action.count}
        case BookSearchTypes.FETCH_BOOKS_ERROR:
            return {loading: false, error: action.payload, books: null, page: 0, limit: 0, count: 0}
        case BookSearchTypes.CLEAR_BOOKS:
            return {loading: false, error: null, books: null, page: 0, limit: 0, count: 0}
        case BookSearchTypes.CHANGE_PAGE:
            return {loading: true, error: null, books: state.books, page: state.page, limit: state.limit, count: state.count}
        default:
            return state
    }
}