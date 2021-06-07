import React from "react";
import "../styles/modules/Paginator.sass"
import {Box} from "../elements/Box";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {changePage} from "../store/action-creators/bookSearch";

export const Paginator: React.FC = () => {

    const dispatch = useDispatch()

    const { page, count, limit } = useTypedSelector(state => state.bookSearch)

    const range = (from: number, to: number, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    const fetchPageNumbers = () => {
        const totalPages = Math.ceil(count/limit)

        /**
         * totalNumbers: кол-во кнопок с номерами страниц
         * totalBlocks: общее кол-во кнопок, в т.ч. стрел очкиобщее кол-во кнопок, в т.ч. стрел очки
         */
        const totalNumbers = 5
        const totalBlocks = totalNumbers + 2

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, page - 1);
            const endPage = Math.min(totalPages - 1, page + 1);
            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: имеются ли скрытые страницы слева
             * hasRightSpill: имеются ли скрытые страницы справа
             * spillOffset: скрытые страницы справа или слева
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (totalPages + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [-1, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, -5];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [-1, ...pages, -5];
                    break;
                }
            }

            return [1, ...pages, totalPages]
        }
        return range(1, totalPages)
    }

    const handleClick = (newPage: number) => (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(changePage(newPage))
    }

    const handleMoveLeft = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(changePage(page - 1))
    }

    const handleMoveRight = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(changePage(page + 1))
    }

    if(count === 0) return <></>

    return (
        <div className="paginator-header">
            <div className="paginator-num">
                <h3>Результатов: <strong>{count}</strong></h3>
                <h4>Страница <strong>{page} / {Math.ceil(count/limit)}</strong></h4>
            </div>
            <Box className="paginator">
                {fetchPageNumbers().map((pageNum, key) => {
                        if(pageNum === -1) return (
                            <button onClick={handleMoveLeft} key={key}>
                                <span className="material-icons-outlined">chevron_left</span>
                            </button>
                        )
                        if(pageNum === -5) return (
                            <button onClick={handleMoveRight} key={key}>
                                <span className="material-icons-outlined">chevron_right</span>
                            </button>
                        )
                        return (
                            <button disabled={pageNum === page}
                                    className={pageNum === page ? "selected":""}
                                    onClick={handleClick(pageNum)}
                                    key={key}
                            >
                                {pageNum}
                            </button>
                        )
                    }
                )}
            </Box>
        </div>
    )
}