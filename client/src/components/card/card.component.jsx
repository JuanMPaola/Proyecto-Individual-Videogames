import style from "./card.module.css"
import { NavLink } from "react-router-dom";

function Card({ game }) {
    return (
        <div className={style.container} >
            <h2>{game.name}</h2>
            <img src={game.background_image} alt="" />

            <NavLink to={`/detail/${game.id}`}><button>Mas info</button></NavLink>


        </div>

    );
}

export default Card;