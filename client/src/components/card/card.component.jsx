import style from "./card.module.css"
import { NavLink } from "react-router-dom";

function Card({ game }) {
    return (
        <div className={style.container} >
            <div>
                <img src={game.background_image} alt="" />
                <h2>{game.name}</h2>
                <ul>
                    {game.genres?.map((genre) => (
                        <li>{genre.name}</li>
                    ))}
                </ul>
                <p>{game.rating}</p>
            </div>

            <div>
                <NavLink to={`/detail/${game.id}`}><button>Mas info</button></NavLink>
            </div>
        </div>
    );
}

export default Card;