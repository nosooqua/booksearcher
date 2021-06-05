import {BookSearchAction, BookSearchTypes} from "../../types/bookSearch";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchBooks = (query: string, page: number = 1, limit: number = 20) => {
    return async (dispatch: Dispatch<BookSearchAction>) => {
        try {
            dispatch({ type: BookSearchTypes.FETCH_BOOKS })
            const response = await axios.get(
                `https://openlibrary.org/search.json?q=${encodeURI(query)}&limit=${limit}&page=${page}`
            )
            dispatch({ type: BookSearchTypes.FETCH_BOOKS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: BookSearchTypes.FETCH_BOOKS_ERROR,
                payload: 'Произошла ошибка при загрузке книг'})
        }
    }
}

export const clearBooks = (dispatch: Dispatch<BookSearchAction>) => {
    return dispatch({ type: BookSearchTypes.CLEAR_BOOKS })
}