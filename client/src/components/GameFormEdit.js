import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useUpdateGameMutation } from '../app/services/myGamesApi';

function GameFormEdit ({game, onUpdateGame}) {

  // Redux method
  // const game = useSelector(state => state.game.value)
  // const [updateGame] = useUpdateGameMutation()

  // let navigate = useNavigate()

  const [form, setForm] = useState(game);
  
  // Event Handler: Make controlled inputs
  const handleScoreChange = (e) => {
    setForm({...form, [e.target.name]: parseInt(e.target.value)})
  }

  const handleNotesChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // Event Handler: Update Game to Session
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // updateGame({id: game.id, ...form})
    // updateGame(form)
    // navigate('/mygames/games');

    onUpdateGame({
      ...form,
      score: f10s,
      strikes: strikes,
      spares: spares,
      open_frames: open_frames 
    })
  }

  let strikes = 0;
  let spares = 0;
  let open_frames = 0;

  const eachFrameScore = (f1b1, f1b2, f2b1, f2b2, f3b1, prevScore) => {
    if(f1b1 === 10 && f2b1 === 10) {
      ++strikes
      return f1b1 + f2b1 + f3b1 + prevScore;
    } else if(f1b1 === 10 && f2b1 !== 10) {
      ++strikes
      return f1b1 + f2b1 + f2b2 + prevScore;
    } else if(f1b1 + f1b2 === 10) {
      ++spares
      return f1b1 + f1b2 + f2b1 + prevScore;
    } else {
      ++open_frames
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
      ++open_frames;
    } else if(b1 + b2 === 10 && b3 === 10) {
      ++strikes;
      ++spares;
    } else if(b1 + b2 === 10 && b3 !== 10) {
      ++spares
    } else {
      ++open_frames;
      return b1 + b2 + prevScore;
    }
    return b1 + b2 + b3 + prevScore;
  }

  const f1s = eachFrameScore(form.f1b1, form.f1b2, form.f2b1, form.f2b2, form.f3b1, 0);
  const f2s = eachFrameScore(form.f2b1, form.f2b2, form.f3b1, form.f3b2, form.f4b1, f1s);
  const f3s = eachFrameScore(form.f3b1, form.f3b2, form.f4b1, form.f4b2, form.f5b1, f2s);
  const f4s = eachFrameScore(form.f4b1, form.f4b2, form.f5b1, form.f5b2, form.f6b1, f3s);
  const f5s = eachFrameScore(form.f5b1, form.f5b2, form.f6b1, form.f6b2, form.f7b1, f4s);
  const f6s = eachFrameScore(form.f6b1, form.f6b2, form.f7b1, form.f7b2, form.f8b1, f5s);
  const f7s = eachFrameScore(form.f7b1, form.f7b2, form.f8b1, form.f8b2, form.f9b1, f6s);
  const f8s = eachFrameScore(form.f8b1, form.f8b2, form.f9b1, form.f9b2, form.f10b1, f7s);
  const f9s = eachFrameScore(form.f9b1, form.f9b2, form.f10b1, form.f10b2, form.f10b2, f8s);
  const f10s = tenthFrameScore(form.f10b1, form.f10b2, form.f10b3, f9s);

  return (
    <div>
      <div className='gameContainer'>
        <h3>Update My Game</h3>
      </div>
      <br/>
      <form onSubmit={handleFormSubmit}>
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
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f1b1"
                  value={form.f1b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f1b2"
                  value={form.f1b2}
                  min="0"
                  max={10 - form.f1b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f2b1"
                  value={form.f2b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f2b2"
                  value={form.f2b2}
                  min="0"
                  max={10 - form.f2b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f3b1"
                  value={form.f3b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f3b2"
                  value={form.f3b2}
                  min="0"
                  max={10 - form.f3b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f4b1"
                  value={form.f4b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f4b2"
                  value={form.f4b2}
                  min="0"
                  max={10 - form.f4b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f5b1"
                  value={form.f5b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f5b2"
                  value={form.f5b2}
                  min="0"
                  max={10 - form.f5b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f6b1"
                  value={form.f6b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f6b2"
                  value={form.f6b2}
                  min="0"
                  max={10 - form.f6b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f7b1"
                  value={form.f7b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f7b2"
                  value={form.f7b2}
                  min="0"
                  max={10 - form.f7b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f8b1"
                  value={form.f8b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f8b2"
                  value={form.f8b2}
                  min="0"
                  max={10 - form.f8b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f9b1"
                  value={form.f9b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f9b2"
                  value={form.f9b2}
                  min="0"
                  max={10 - form.f9b1}
                  required
                />
              </td>
              <td>
                <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f10b1"
                  value={form.f10b1}
                  min="0"
                  max="10"
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f10b2"
                  value={form.f10b2}
                  min="0"
                  max={(form.f10b1 === 10) ? 10 : 10 - form.f10b1}
                  required
                /> | <input
                  className="gameFormFrame"
                  onChange={handleScoreChange}
                  type="number"
                  name="f10b3"
                  value={form.f10b3}
                  min="0"
                  max={(form.f10b1 + form.f10b2 === 10 || form.f10b2 === 10 ? 10 : (form.f10b1 === 10 && form.f10b2 < 10 ? 10 - form.f10b2 : 0))}
                  required
                />
              </td>
            </tr>
            <tr className='bottomRow'>
              <td>{(isNaN(f1s) || form.f1b1 + form.f1b2 > 10 ? "Error" : f1s)}</td>
              <td>{(isNaN(f2s) || form.f2b1 + form.f2b2 > 10 ? "Error" : f2s)}</td>
              <td>{(isNaN(f3s) || form.f3b1 + form.f3b2 > 10 ? "Error" : f3s)}</td>
              <td>{(isNaN(f4s) || form.f4b1 + form.f4b2 > 10 ? "Error" : f4s)}</td>
              <td>{(isNaN(f5s) || form.f5b1 + form.f5b2 > 10 ? "Error" : f5s)}</td>
              <td>{(isNaN(f6s) || form.f6b1 + form.f6b2 > 10 ? "Error" : f6s)}</td>
              <td>{(isNaN(f7s) || form.f7b1 + form.f7b2 > 10 ? "Error" : f7s)}</td>
              <td>{(isNaN(f8s) || form.f8b1 + form.f8b2 > 10 ? "Error" : f8s)}</td>
              <td>{(isNaN(f9s) || form.f9b1 + form.f9b2 > 10 ? "Error" : f9s)}</td>
              <td>{(isNaN(f10s) || (form.f10b1 !== 10 && form.f10b1 + form.f10b2 > 10) || (form.f10b1 === 10 && form.f10b2 !== 10 && form.f10b2 + form.f10b3 > 10) || (form.f10b1 === 10 && form.f10b2 === 10 && form.f10b3 > 10) ? "Error" : f10s)}</td>
            </tr>
          </tbody>
        </table>
        <h4>
          <strong>Number of Strikes: </strong>{strikes} |
          <strong> Number of Spares: </strong>{spares} |
          <strong> Number of Open Frames: </strong>{open_frames}
        </h4>
        <div className='gameFormNotes'>
          <div>
            <strong>Notes: </strong>
            <input
              onChange={handleNotesChange}
              type="text"
              name="notes"
              placeholder="Enter Any Notes"
              value={form.notes}
              minLength="0"
              maxLength="100"
              size="105"
            />
          </div>
        </div>
        <br/>
        <button type="submit"  className='addButton'>Update Changes</button>
      </form>
    </div>
  )
}

export default GameFormEdit;