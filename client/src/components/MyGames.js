import React from 'react';
import GameCard from './GameCard';
import { useGetMyGamesQuery } from '../app/services/myGamesApi';
import { useSelector } from 'react-redux';

function MyGames() {

  // const sessionId = useSelector(state => state.session.id)
  const session = useSelector(state => state.session.value)
  // console.log(session)
  // console.log(session.id)

  const { data: myGames } = useGetMyGamesQuery(session.id);
  // console.log(myGames)

  const renderGames = myGames?.map(game => {
    return <GameCard key={game.id} game={game} />
  })

  return (
    <div>
      {/* {(myGames == null ? "" : renderGames)} */}
      {renderGames}
    </div>
  )
}

export default MyGames;