import style from "./card.module.css"

function Card({game}) {
    return (
        <div className={style.container} >
            <h2>{game.name}</h2>
            <img src={game.background_image} alt="" />
        </div>
    );
}

export default Card;