import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUpdateGameMutation } from '../app/services/myGamesApi';

// function EditGameForm () {
const EditGameForm = () => {

  const game = useSelector(state => state.game.value)

  const [updateGame] = useUpdateGameMutation()

  let navigate = useNavigate()

  const initialForm = {...game}

  const [form, setForm] = useState(initialForm);
  // const [errors, setErrors] = useState([]);
  
  const handleScoreChange = (e) => {
    setForm({...form, [e.target.name]: parseInt(e.target.value)})
  }

  const handleNotesChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // UPDATE
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // updateGame({id: game.id, ...form})
    updateGame(form)
    navigate('/mygames/games');

    setForm(initialForm);
  }

  let strikes = 0;
  let spares = 0;
  let opens = 0;

  const eachFrameScore = (f1b1, f1b2, f2b1, f2b2, f3b1, prevScore) => {
    if(f1b1 === 10 && f2b1 === 10) {
      return f1b1 + f2b1 + f3b1 + prevScore;
    } else if(f1b1 === 10 && f2b1 !== 10) {
      return f1b1 + f2b1 + f2b2 + prevScore;
    } else if(f1b1 + f1b2 === 10) {
      return f1b1 + f1b2 + f2b1 + prevScore;
    } else {
      return f1b1 + f1b2 + prevScore;      
    }
  }

  const tenthFrameScore = (b1, b2, b3, prevScore) => {
    if(b1 === 10 && b2 === 10 && b3 === 10) {
      strikes = strikes + 3;
    } else if(b1 === 10 && b2 === 10 && b3 !== 10) {
      strikes = strikes + 2;
    } else if(b1 === 10 && b2 + b3 === 10) {
      strikes++;
      spares++;
    } else if(b1 === 10 && b2 + b3 !== 10) {
      strikes++;
      opens++;
    } else if(b1 + b2 === 10 && b3 === 10) {
      strikes++;
      spares++;
    } else if(b1 + b2 === 10 && b3 !== 10) {
      spares++
    } else {
      opens++;
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

  if(game == null) {
    return (
      <div>
        <h2>Update My Game</h2>
      </div>
    )
  } else {
    return (
      <div>
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
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
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f1b2"
                    value={form.f1b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f2b1"
                    value={form.f2b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f2b2"
                    value={form.f2b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f3b1"
                    value={form.f3b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f3b2"
                    value={form.f3b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f4b1"
                    value={form.f4b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f4b2"
                    value={form.f4b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f5b1"
                    value={form.f5b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f5b2"
                    value={form.f5b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f6b1"
                    value={form.f6b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f6b2"
                    value={form.f6b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f7b1"
                    value={form.f7b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f7b2"
                    value={form.f7b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f8b1"
                    value={form.f8b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f8b2"
                    value={form.f8b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f9b1"
                    value={form.f9b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f9b2"
                    value={form.f9b2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f10b1"
                    value={form.f10b1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f10b2"
                    value={form.f10b2}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleScoreChange}
                    type="number"
                    name="f10b3"
                    value={form.f10b3}
                  />
                </td>
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
          <br/>
          <div className='gameFormNotes'>
            <div>
              <strong>Notes: </strong>
              <input
                onChange={handleNotesChange}
                type="text"
                name="notes"
                placeholder="Enter Any Notes"
                value={form.notes}
              />
            </div>
          </div>
          <br/>
          <button type="submit"  className='addButton'>Update Changes</button>
        </form>
      </div>
    )
  }
}

export default EditGameForm;