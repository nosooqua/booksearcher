import React from 'react';
import './styles/app.sass'

import {Logo, Navbar} from "./components/Navbar";
import {Container} from "./components/Container";
import {SearchResults} from "./components/SearchResults";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {input} from "./store/action-creators/input";
import {clearBooks} from "./store/action-creators/bookSearch";

const App: React.FC = () => {

    const [ searchState, setSearchState ] = React.useState(false)

    const {books, error, loading} = useTypedSelector(state => state.bookSearch)

    const {value} = useTypedSelector(state => state.input)

    React.useEffect(() => {
        if(loading || error || value !== "" || books !== null) setSearchState(true)
        else setSearchState(false)

        if(value === "" && loading) {
            dispatch(clearBooks)
        }
    }, [loading, error, value, books])

    const dispatch = useDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(input(e.target.value))
    }

    return (
        <div className="app">
            <Navbar>
                <Logo>БукСёрчер.</Logo>
            </Navbar>
            <Container className="main">
                <div className={`input${searchState ? ' active' : ''}`}>
                    <input value={value} onChange={handleInputChange} placeholder="Введите название книги"/>
                </div>

                {loading && "Загрузка"}

                {error && "Ошибка"}

                {(searchState && books) && <SearchResults docs={books.docs}/>}

            </Container>
            <Container className="footer">
                Особо важная информация для пользователей в футере
            </Container>
        </div>
    );
}

export default App;
