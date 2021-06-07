import React from 'react';
import './styles/app.sass'

import {Logo, Navbar} from "./components/Navbar";
import {Container} from "./elements/Container";
import {SearchResults} from "./components/SearchResults";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {clearInput, input, sendInput} from "./store/action-creators/input";
import {clearBooks} from "./store/action-creators/bookSearch";
import {Box} from "./elements/Box";
import {IconButton} from "./elements/IconButton";
import {LoadingBar} from "./elements/LoadingBar";
import {Paginator} from "./components/Paginator";

const App: React.FC = () => {

    const [ searchState, setSearchState ] = React.useState(false)

    const {books, error, loading} = useTypedSelector(state => state.bookSearch)

    const {value, isTimerActive} = useTypedSelector(state => state.input)

    const dispatch = useDispatch()

    React.useEffect(() => {
        if(error || books !== null) setSearchState(true)
        else setSearchState(false)
    }, [error, books])

    React.useEffect(() => {
        if(value === "") {
            dispatch(clearBooks)
        }
    }, [value, dispatch])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(input(e.target.value))
    }

    const handleInputClear = () => {
        dispatch(clearInput())
    }

    const handleInputSend = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(sendInput())
    }

    return (
        <div className="app">
            <Navbar>
                <Logo>БукСёрчер.</Logo>
            </Navbar>
            <Container className="main">
                <div className={`input${searchState ? ' active' : ''}`}>
                    <form onSubmit={handleInputSend}>
                        <Box>
                            <input disabled={loading} value={value} onChange={handleInputChange} placeholder="Введите название книги"/>
                            <IconButton type="button" disabled={loading || value === ""} onClick={handleInputClear} icon={<span className="material-icons-outlined">clear</span>}/>
                            <IconButton type="submit" disabled={loading} icon={<span className="material-icons-outlined">send</span>}/>
                            <LoadingBar visible={loading || isTimerActive}/>
                        </Box>
                    </form>
                </div>

                {error}

                <Paginator/>

                {(searchState && books) && <SearchResults docs={books.docs} />}

            </Container>
            <Container className="footer">
                <p>Особо важная информация для пользователей в футере</p>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </Container>
        </div>
    );
}

export default App;
