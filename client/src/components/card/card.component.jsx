import style from "./card.module.css"
import { NavLink } from "react-router-dom";

function Card({ game }) {
    console.log(game.background_image)
    return (
        <div className={style.container} >
            <NavLink to={`/detail/${game.id}`}>
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
                </div>
            </NavLink>
        </div>
    );
}

export default Card;