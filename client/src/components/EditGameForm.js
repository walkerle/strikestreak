import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUpdateGameMutation } from '../app/services/myGamesApi';

// function EditGameForm () {
const EditGameForm = () => {

  const game = useSelector(state => state.game.value)

  const [updateGame] = useUpdateGameMutation()

  let navigate = useNavigate()

  // const initialForm = {...game, id: game.id}
  const initialForm = {...game}

  const [form, setForm] = useState(initialForm);
  // const [errors, setErrors] = useState([]);
  
  const handleFormChange = (e) => {
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
          <button type="submit"  className='addButton'>Update Changes</button>
        </form>
      </div>
    )
  }
}

export default EditGameForm;