import React from 'react';
import GameCard from './GameCard';

function MyGames({ myGames, setMyGames, setEditGame }) {

  const renderGames = myGames.map(game => {
    return <GameCard key={game.id} game={game} myGames={myGames} setMyGames={setMyGames} setEditGame={setEditGame} />
  })

  return (
    <div>
      {(myGames == null ? "" : renderGames)}
    </div>
  )
}

export default MyGames;