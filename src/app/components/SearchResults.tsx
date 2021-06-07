import React from "react";
import {Box} from "../elements/Box";
import {BookModal} from "./BookModal";
import {Book} from "../types/book";
import {Paginator} from "./Paginator";

type SearchResultsProps = {
    docs: Book[]
}

export const SearchResults: React.FC<SearchResultsProps> = ({ docs }) => {

    const [modalShow, setModalShow] = React.useState(false)

    const [currentBook, setCurrentBook] = React.useState<Book | null>(null)

    const handleCardClick = (book: Book) => {
        setModalShow(true)

        setCurrentBook(book)
    }

    const handleModalClose = () => {
        setModalShow(false)

        setCurrentBook(null)
    }

    return (
        <>
            {docs.length === 0 ?
                <h4>Нет книг :(</h4> : ""
            }
            <div className="search-results">
                {docs.map((book, id) =>
                    <Box key={id} onClick={() => handleCardClick(book)}>
                        <div className="arrow"/>
                        <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="Обложка книги"/>
                        <div className="book-info">
                            <p className="name">{book.title}</p>
                            <p className="author">{book.author_name ? book.author_name[0] : "Неизвестно"}</p>
                        </div>
                    </Box>
                )}
            </div>
            <BookModal book={currentBook} show={modalShow} handleModalClose={handleModalClose} />
        </>
    )
}