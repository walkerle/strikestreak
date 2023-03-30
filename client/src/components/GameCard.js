import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGame } from '../features/game/gameSlice';
import { useDeleteGameMutation } from '../app/services/myGamesApi';

function GameCard({ game }) {

  const dispatch = useDispatch();
  
  const [deleteGame] = useDeleteGameMutation()

  let navigate = useNavigate();

  // Set game in State and redirect to EditGameForm
  const handleUpdate = () => {
    dispatch(setGame(game))
    navigate(`/mygames/game/edit`);
    // navigate(`/mygames/${game.id}/edit`);
  }
  
  // DELETE
  const handleDelete = () => {
    deleteGame(game.id)
    // Frontend Render DELETE
    // setMyGames(myGames.filter(g => g.id !== game.id))
    
    // Backend DELETE
    // fetch(`/games/${game.id}`, {method: "DELETE"})
  }

  return (
    <div>
      {/* <h3>{mySessions[0].date}</h3> */}
      <div className='gameContainer'>
        <h3>Game Summary</h3>
      </div>
      <br/>
      <button onClick={handleUpdate} className='moreButton'>Update Game</button>
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
            <td>{game.first_frame_1} | {game.first_frame_2}</td>
            <td>{game.second_frame_1} | {game.second_frame_2}</td>
            <td>{game.third_frame_1} | {game.third_frame_2}</td>
            <td>{game.fourth_frame_1} | {game.fourth_frame_2}</td>
            <td>{game.fifth_frame_1} | {game.fifth_frame_2}</td>
            <td>{game.sixth_frame_1} | {game.sixth_frame_2}</td>
            <td>{game.seventh_frame_1} | {game.seventh_frame_2}</td>
            <td>{game.eighth_frame_1} | {game.eighth_frame_2}</td>
            <td>{game.ninth_frame_1} | {game.ninth_frame_2}</td>
            <td>{game.tenth_frame_1} | {game.tenth_frame_2} | {game.tenth_frame_3}</td>
          </tr>
          <tr className='bottomRow'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{game.score}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <div className='notes'>
        <h4><strong>Game Notes: </strong>{game.notes}</h4>
      </div>
      <div className='divider'>
        <hr className='dividerLine'/>
      </div>
    </div>
  )
}

export default GameCard;