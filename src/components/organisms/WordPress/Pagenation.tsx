import React from 'react';
import { createPaginationLinks } from './../../../utils/pagenation';
import { ul, li, active, button, prevButton, nextButton, i } from './Pagenation.css'

interface Props {
    blogPerPage: number,
    totalBlogs: number,
    paginate: any,
    currentPages: number
}

const Pagenation = React.memo(({ blogPerPage, totalBlogs, paginate, currentPages }: Props) => {

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation">
            <ul className={ul}>
                {currentPages > 1 &&
                    <li className={currentPages > 1 ? "page-item" : "page-item disabled"}>
                        <button className={prevButton} type='button' onClick={() => paginate(currentPages - 1)} tabIndex="-1" aria-disabled="true">
                            ＜</button>
                    </li>
                }

                {pageNumbers.map(n => (
                    <li
                        key={n}
                        className={n === currentPages
                            ? active
                            : ""}>
                        <button type='button' className={`${button}
                        ${n === currentPages
                                ? active
                                : ""}`}
                            onClick={() => paginate(n)}>{n}</button>
                    </li>
                ))}
                {(currentPages !== pageNumbers.length && pageNumbers.length > 1) &&
                    <li className={currentPages === pageNumbers.length ? "page-item disabled" : "page-item"}>
                        <button className={nextButton} type='button' onClick={() => paginate(currentPages + 1)}>＞
                        </button>
                    </li>
                }
            </ul>
        </nav>
    )
})

export default Pagenation;
