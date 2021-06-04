import React from "react";
import '../styles/modules/BookModal.sass'
import {Box} from "./Box";

type BookModalProps = {
    bookKey: string,
    show: boolean,
    handleModalClose: () => void
}

export const BookModal: React.FC<BookModalProps> = ({ bookKey, show, handleModalClose }) => {

    return (
        <>
            <div onClick={handleModalClose} className={`book-modal-container${show ? ' show' : ''}`}>
                <div className="close"/>
                <Box onClick={(e:React.ChangeEvent<HTMLInputElement>) => e.stopPropagation()} className="book-modal">
                    <img src="https://via.placeholder.com/280" alt="Обложка книги"/>
                    <div className="book-info">
                        <p className="name">Название книги</p>
                        <p className="author">Автор: <b>Кто-то</b></p>
                        <p className="author">Дата публикации: <b>Какая-то</b></p>
                        <p className="author">Издатель: <b>Какой-то</b></p>
                        <p className="author">ISBN: <b>Что-то там</b></p>
                    </div>
                </Box>
            </div>
        </>
    )
}