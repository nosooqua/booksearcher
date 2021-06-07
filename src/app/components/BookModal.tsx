import React from "react";
import '../styles/modules/BookModal.sass'
import {Box} from "../elements/Box";
import {Book} from "../types/book";

type BookModalProps = {
    book: Book | null,
    show: boolean,
    handleModalClose: () => void
}

export const BookModal: React.FC<BookModalProps> = ({ book, show, handleModalClose }) => {

    return (
        <>
            <div onClick={handleModalClose} className={`book-modal-container${show ? ' show' : ''}`}>
                <div className="close"><span className="material-icons-outlined">close</span></div>
                <Box onClick={(e:React.ChangeEvent<HTMLInputElement>) => e.stopPropagation()} className="book-modal">
                    <img src={`http://covers.openlibrary.org/b/id/${book?.cover_i}-L.jpg`} alt="Обложка книги"/>
                    <div className="book-info">
                        <p className="name">{book?.title}</p>
                        <p className="author">Автор: <b>{book?.author_name ? book?.author_name.slice(0,5).join(", ") : "Неизвестно"}</b></p>
                        <p className="author">Дата публикации: <b>{book?.publish_date.slice(0,5).join(", ")}</b></p>
                        <p className="author">Издатель: <b>{book?.publish_date.slice(0,5).join(", ")}</b></p>
                        <p className="author">ISBN: <b>{book?.isbn ? book?.isbn.slice(0,5).join(", ") : "Неизвестно"}</b></p>
                    </div>
                </Box>
            </div>
        </>
    )
}