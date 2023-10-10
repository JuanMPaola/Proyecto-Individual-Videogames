import React from "react";
import style from "./paginado.module.css";

export default function Paginado({ gamesPerPage, allGames, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.container}>
            <ul>
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}