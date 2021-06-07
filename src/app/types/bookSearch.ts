import {Docs} from "./docs";

export interface BookSearchState {
    books: Docs | null
    loading: boolean
    error: null | string
    page: number
    limit: number
    count: number
}

export enum BookSearchTypes {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
    CLEAR_BOOKS = "CLEAR_BOOKS",
    CHANGE_PAGE = "CHANGE_PAGE"
}

interface FetchBooksAction {
    type: BookSearchTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
    type: BookSearchTypes.FETCH_BOOKS_SUCCESS;
    page: number;
    limit: number;
    count: number;
    payload: Docs;
}

interface FetchBooksErrorAction {
    type: BookSearchTypes.FETCH_BOOKS_ERROR;
    payload: string;
}

interface ClearBooksAction {
    type: BookSearchTypes.CLEAR_BOOKS;
}

interface ChangePageAction {
    type: BookSearchTypes.CHANGE_PAGE;
    page: number;
}

export type BookSearchAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction | ClearBooksAction | ChangePageAction