import Card from "../card/card.component";

function Cards({ allGames }) {

    const gamesList = allGames

    return (
        <div >
            {
                gamesList.map(function (game) {
                    return <Card game={game} />
                })
            }
        </div>
    );
}

export default Cards;