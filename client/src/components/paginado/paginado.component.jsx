import React from "react";
import style from "./paginado.module.css";

export default function Paginado({ charactersPerPage, allGames, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allGames / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={style.container}>
            <ul>
                {pageNumbers && pageNumbers.map(number => {
                    <li key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}