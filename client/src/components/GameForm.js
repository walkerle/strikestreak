import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAddGameMutation } from '../app/services/myGamesApi';

function GameForm() {

  const sessionId = useSelector(state => state.session.value.id)
  // console.log(sessionId)
  const [addGame, {error}] = useAddGameMutation()

  let navigate = useNavigate()

  const initialForm = {
    first_frame_1: "",
    first_frame_2: "",
    second_frame_1: "",
    second_frame_2: "",
    third_frame_1: "",
    third_frame_2: "",
    fourth_frame_1: "",
    fourth_frame_2: "",
    fifth_frame_1: "",
    fifth_frame_2: "",
    sixth_frame_1: "",
    sixth_frame_2: "",
    seventh_frame_1: "",
    seventh_frame_2: "",
    eighth_frame_1: "",
    eighth_frame_2: "",
    ninth_frame_1: "",
    ninth_frame_2: "",
    tenth_frame_1: "",
    tenth_frame_2: "",
    tenth_frame_3: "",
    score: "",
    notes: "",
    game_session_id: sessionId
  }

  const [form, setForm] = useState(initialForm);
  // const [errors, setErrors] = useState([]);

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // CREATE
  const handleFormSubmit = (e) => {
    e.preventDefault();

    addGame(form)
    navigate('/mygames/games')

    // Frontend Render and Backend CREATE
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }
    
    // fetch(`/games`, config)
    // .then(res => {
    //   if(res.ok) {
    //     res.json()
    //     .then(data => {
    //       setErrors([])
    //       navigate('/mygames/games');
    //     })
    //   } else {
    //     res.json().then(json => setErrors(json["errors"]))
    //   }
    // })
    
    setForm(initialForm);
  }

  return (
    <div>
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
      {error?.data.errors.map((err) => (
        <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
      ))}
      <div className='gameContainer'>
        <h3>Add New Game</h3>
      </div>
      <br/>
      <div className='form'>
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
                    onChange={handleFormChange}
                    type="number"
                    name="first_frame_1"
                    value={form.first_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="first_frame_2"
                    value={form.first_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="second_frame_1"
                    value={form.second_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="second_frame_2"
                    value={form.second_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="third_frame_1"
                    value={form.third_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="third_frame_2"
                    value={form.third_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="fourth_frame_1"
                    value={form.fourth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="fourth_frame_2"
                    value={form.fourth_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="fifth_frame_1"
                    value={form.fifth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="fifth_frame_2"
                    value={form.fifth_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="sixth_frame_1"
                    value={form.sixth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="sixth_frame_2"
                    value={form.sixth_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="seventh_frame_1"
                    value={form.seventh_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="seventh_frame_2"
                    value={form.seventh_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="eighth_frame_1"
                    value={form.eighth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="eighth_frame_2"
                    value={form.eighth_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="ninth_frame_1"
                    value={form.ninth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="ninth_frame_2"
                    value={form.ninth_frame_2}
                  />
                </td>
                <td>
                  <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="tenth_frame_1"
                    value={form.tenth_frame_1}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="tenth_frame_2"
                    value={form.tenth_frame_2}
                  /> | <input
                    className="gameFormFrame"
                    onChange={handleFormChange}
                    type="number"
                    name="tenth_frame_3"
                    value={form.tenth_frame_3}
                  />
                </td>
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
                <td>
                  <input
                    className="gameFormScore"
                    onChange={handleFormChange}
                    type="number"
                    name="score"
                    placeholder="Total Score"
                    value={form.score}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div className='gameFormNotes'>
            <div>
              <strong>Notes: </strong>
              <input
                onChange={handleFormChange}
                type="text"
                name="notes"
                placeholder="Enter Any Notes"
                value={form.notes}
              />
            </div>
          </div>
          <br/>
          <button type="submit" className='addButton'>Add New Game</button>
        </form>
      </div>
    </div>
  )
}

export default GameForm;