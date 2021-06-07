import {BookSearchAction, BookSearchTypes} from "../../types/bookSearch";
import {Dispatch} from "redux";
import axios from "axios";
import {RootState} from "../reducers";

export const fetchBooks = (query: string, page: number = 1, limit: number = 20) => {
    return async (dispatch: Dispatch<BookSearchAction>) => {
        try {
            dispatch({ type: BookSearchTypes.FETCH_BOOKS })
            const response = await axios.get(
                `https://openlibrary.org/search.json?q=${encodeURI(query)}&limit=${limit}&page=${page}`
            )
            dispatch({
                type: BookSearchTypes.FETCH_BOOKS_SUCCESS,
                payload: response.data,
                count: response.data.numFound,
                page: page,
                limit: limit
            })
        } catch (e) {
            dispatch({
                type: BookSearchTypes.FETCH_BOOKS_ERROR,
                payload: 'Произошла ошибка при загрузке книг'})
        }
    }
}

export const changePage = (page: number = 1, limit: number = 20) => (dispatch: Dispatch<BookSearchAction>, getState: () => RootState) => {
    const { value } = getState().input

    dispatch({ type: BookSearchTypes.CHANGE_PAGE, page })

    fetchBooks(value, page, limit)(dispatch)
}

export const clearBooks = (dispatch: Dispatch<BookSearchAction>) => {
    return dispatch({ type: BookSearchTypes.CLEAR_BOOKS })
}