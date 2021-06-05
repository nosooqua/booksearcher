import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as BookSearchActions from '../store/action-creators/bookSearch'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(BookSearchActions, dispatch)
}