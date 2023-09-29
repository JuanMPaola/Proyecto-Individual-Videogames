import Card from "../card/card.component";

function Cards({ allGames }) {

    const gamesList = Array.isArray(allGames) ? allGames : [];

    return (
        <div >
            {
                gamesList.map((game)=>
                    <Card game={game} />
                )
            }
        </div>
    );
}

export default Cards;