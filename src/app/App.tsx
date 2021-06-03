import React from 'react';
import './styles/app.sass'

import {Logo, Navbar} from "./components/Navbar";
import {Container} from "./components/Container";
import {Box} from "./components/Box";

const App: React.FC = () => {

    const [modalShow, setModalShow] = React.useState(false)

    const handleCardClick = () => {
        setModalShow(true)
        alert("Открыть модалку")
    }

    return (
        <div className="app">
            <Navbar>
                <Logo>БукСёрчер.</Logo>
            </Navbar>
            <Container className="main">
                <div className="input active">
                    <input placeholder="Введите название книги"/>
                </div>
                <h1>Результаты поиска:</h1>
                <div className="search-results">
                    <Box onClick={handleCardClick}>
                        <div className="arrow"/>
                        <img src="https://via.placeholder.com/140" alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">Тут название книги</p>
                            <p className="author">А тут её автор</p>
                        </div>
                    </Box>
                    <Box onClick={handleCardClick}>
                        <div className="arrow"/>
                        <img src="https://via.placeholder.com/140" alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">Тут название книги</p>
                            <p className="author">А тут её автор</p>
                        </div>
                    </Box>
                    <Box onClick={handleCardClick}>
                        <div className="arrow"/>
                        <img src="https://via.placeholder.com/140" alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">Тут название книги</p>
                            <p className="author">А тут её автор</p>
                        </div>
                    </Box>
                    <Box onClick={handleCardClick}>
                        <div className="arrow"/>
                        <img src="https://via.placeholder.com/140" alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">Тут название книги</p>
                            <p className="author">А тут её автор</p>
                        </div>
                    </Box>
                    <Box onClick={handleCardClick}>
                        <div className="arrow"/>
                        <img src="https://via.placeholder.com/140" alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">Тут название книги</p>
                            <p className="author">А тут её автор</p>
                        </div>
                    </Box>
                </div>
            </Container>
            <Container className="footer">
                Особо важная информация для пользователей в футере
            </Container>
        </div>
    );
}

export default App;
