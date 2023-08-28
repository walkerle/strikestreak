import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setGame } from '../features/game/gameSlice';
// import { useDeleteGameMutation } from '../app/services/myGamesApi';

function GameCard({game, onGoToGameUpdateForm, onDeleteGame}) {

  // Redux method
  // const dispatch = useDispatch();
  // const [deleteGame] = useDeleteGameMutation()

  // let navigate = useNavigate();

  // Event Handler: Set game in State and redirect to EditGameForm
  const goToGameUpdateForm = () => {
    onGoToGameUpdateForm(game);
  }
  
  // Event Handler: Delete a game
  const handleDelete = () => {
    // deleteGame(game.id)

    onDeleteGame(game);
  }

  const markSymbol = (b1, b2) => {
    const b1m = (b1 === 0 ? '-' : b1)
    const b2m = (b2 === 0 ? '-' : b2)
    if(b1 === 10) {
      return `X`
    } else if(b1 + b2 === 10) {
      return `${b1m} | /`
    } else {
      return `${b1m} | ${b2m}`
    }
  }

  const tenthMarkSymbol = (b1, b2, b3) => {
    const b1m = (b1 === 0 ? '-' : b1)
    const b2m = (b2 === 0 ? '-' : b2)
    const b3m = (b3 === 0 ? '-' : b3)
    if(b1 === 10 && b2 === 10 && b3 === 10) {
      return `X | X | X`
    } else if(b1 === 10 && b2 === 10 && b3 !== 10) {
      return `X | X | ${b3m}`
    } else if(b1 === 10 && b2 + b3 === 10) {
      return `X | ${b2m} | /`
    } else if(b1 === 10 && b2 + b3 !== 10) {
      return `X | ${b2m} | ${b3m}`
    } else if(b1 + b2 === 10 && b3 === 10) {
      return `${b1m} | / | X`
    } else if(b1 + b2 === 10 && b3 !== 10) {
      return `${b1m} | / | ${b3m}`
    } else {
      return `${b1m} | ${b2m}`
    }
  }

  let strikes = 0;
  let spares = 0;
  let opens = 0;

  const eachFrameScore = (f1b1, f1b2, f2b1, f2b2, f3b1, prevScore) => {
    if(f1b1 === 10 && f2b1 === 10) {
      strikes++;
      return f1b1 + f2b1 + f3b1 + prevScore;
    } else if(f1b1 === 10 && f2b1 !== 10) {
      strikes++;
      return f1b1 + f2b1 + f2b2 + prevScore;
    } else if(f1b1 + f1b2 === 10) {
      spares++;
      return f1b1 + f1b2 + f2b1 + prevScore;
    } else {
      opens++;
      return f1b1 + f1b2 + prevScore;
    }
  }

  const tenthFrameScore = (b1, b2, b3, prevScore) => {
    if(b1 === 10 && b2 === 10 && b3 === 10) {
      strikes = strikes + 3;
    } else if(b1 === 10 && b2 === 10 && b3 !== 10) {
      strikes = strikes + 2;
    } else if(b1 === 10 && b2 + b3 === 10) {
      ++strikes;
      ++spares;
    } else if(b1 === 10 && b2 + b3 !== 10) {
      ++strikes;
      ++opens;
    } else if(b1 + b2 === 10 && b3 === 10) {
      ++strikes;
      ++spares;
    } else if(b1 + b2 === 10 && b3 !== 10) {
      ++spares
    } else {
      ++opens;
      return b1 + b2 + prevScore;
    }
    return b1 + b2 + b3 + prevScore;
  }

  const f1s = eachFrameScore(game.f1b1, game.f1b2, game.f2b1, game.f2b2, game.f3b1, 0);
  const f2s = eachFrameScore(game.f2b1, game.f2b2, game.f3b1, game.f3b2, game.f4b1, f1s);
  const f3s = eachFrameScore(game.f3b1, game.f3b2, game.f4b1, game.f4b2, game.f5b1, f2s);
  const f4s = eachFrameScore(game.f4b1, game.f4b2, game.f5b1, game.f5b2, game.f6b1, f3s);
  const f5s = eachFrameScore(game.f5b1, game.f5b2, game.f6b1, game.f6b2, game.f7b1, f4s);
  const f6s = eachFrameScore(game.f6b1, game.f6b2, game.f7b1, game.f7b2, game.f8b1, f5s);
  const f7s = eachFrameScore(game.f7b1, game.f7b2, game.f8b1, game.f8b2, game.f9b1, f6s);
  const f8s = eachFrameScore(game.f8b1, game.f8b2, game.f9b1, game.f9b2, game.f10b1, f7s);
  const f9s = eachFrameScore(game.f9b1, game.f9b2, game.f10b1, game.f10b2, game.f10b2, f8s);
  const f10s = tenthFrameScore(game.f10b1, game.f10b2, game.f10b3, f9s);

  return (
    <div>
      <div className='gameContainer'>
        <h3>Game Summary</h3>
      </div>
      <br/>
      <button onClick={goToGameUpdateForm} className='moreButton'>Update Game</button>
      <button onClick={handleDelete} className='deleteButton'>Delete Game</button>
      <br/><br/>
      <table>
        <tbody>
          <tr className='topRow'>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
          <tr className='middleRow'>
            <td>{markSymbol(game.f1b1, game.f1b2)}</td>
            <td>{markSymbol(game.f2b1, game.f2b2)}</td>
            <td>{markSymbol(game.f3b1, game.f3b2)}</td>
            <td>{markSymbol(game.f4b1, game.f4b2)}</td>
            <td>{markSymbol(game.f5b1, game.f5b2)}</td>
            <td>{markSymbol(game.f6b1, game.f6b2)}</td>
            <td>{markSymbol(game.f7b1, game.f7b2)}</td>
            <td>{markSymbol(game.f8b1, game.f8b2)}</td>
            <td>{markSymbol(game.f9b1, game.f9b2)}</td>
            <td>{tenthMarkSymbol(game.f10b1, game.f10b2, game.f10b3)}</td>
          </tr>
          <tr className='bottomRow'>
            <td>{f1s}</td>
            <td>{f2s}</td>
            <td>{f3s}</td>
            <td>{f4s}</td>
            <td>{f5s}</td>
            <td>{f6s}</td>
            <td>{f7s}</td>
            <td>{f8s}</td>
            <td>{f9s}</td>
            <td>{f10s}</td>
          </tr>
        </tbody>
      </table>
      <h4>
        <strong>Number of Strikes: </strong>{strikes} |
        <strong> Number of Spares: </strong>{spares} |
        <strong> Number of Open Frames: </strong>{opens}
      </h4>
      <div className='notes'>
        <h4><strong>Game Notes: </strong>{game.notes}</h4>
      </div>
      <br/>
      <div className='divider'>
        <hr className='dividerLine'/>
      </div>
      <br/>
    </div>
  )
}

export default GameCard;