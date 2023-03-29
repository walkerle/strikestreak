import React from 'react';
import GameCard from './GameCard';
import { useGetMyGamesQuery } from '../app/services/myGamesApi';
import { useSelector } from 'react-redux';

function MyGames() {

  const sessionId = useSelector(state => state.session.id)

  const { data: myGames=[] } = useGetMyGamesQuery(sessionId);

  const renderGames = myGames.map(game => {
    return <GameCard key={game.id} game={game} />
  })

  return (
    <div>
      {(myGames == null ? "" : renderGames)}
    </div>
  )
}

export default MyGames;