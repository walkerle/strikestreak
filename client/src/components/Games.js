import React from 'react';
import GameCard from './GameCard';
// import { useGetMyGamesQuery } from '../app/services/myGamesApi';
// import { useSelector } from 'react-redux';

function Games({games, onGoToGameUpdateForm, onDeleteGame}) {

  // Redux methods
  // const sessionId = useSelector(state => state.session.id)
  // const session = useSelector(state => state.session.value)
  // console.log(session)

  // const { data: myGames } = useGetMyGamesQuery(session.id);
  // console.log(myGames)

  const renderGames = games?.map(game => {
    return <GameCard key={game.id} game={game} onGoToGameUpdateForm={onGoToGameUpdateForm} onDeleteGame={onDeleteGame} />
  })
  .sort((a, b) => a.props.game.id - b.props.game.id)
  // console.log(renderGames);

  return (
    <div>
      {/* {(myGames == null ? "" : renderGames)} */}
      {renderGames}
    </div>
  )
}

export default Games;