import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditGameForm ({ editGame }) {

  let navigate = useNavigate()

  const initialForm = {...editGame}

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // UPDATE
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const config = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }

    fetch(`/games/${form.id}`, config)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          setErrors([])
          navigate('/mygames/games');
        })
      } else {
        res.json().then(json => setErrors(json["errors"]))
      }
    })

    setForm(initialForm);
  }

  return(
    <div>
      {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")}
      <h2>Update My Game</h2>

      <form onSubmit={handleFormSubmit}>
        <table>
          <tbody>
            <tr>
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
            <tr>
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
            <tr>
              <td>1F Score</td>
              <td>2F Score</td>
              <td>3F Score</td>
              <td>4F Score</td>
              <td>5F Score</td>
              <td>6F Score</td>
              <td>7F Score</td>
              <td>8F Score</td>
              <td>9F Score</td>
              <td>
                <input
                  className="gameFormScore"
                  onChange={handleFormChange}
                  type="number"
                  name="score"
                  placeholder="Score"
                  value={form.score}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Notes: </strong>
        <input
          onChange={handleFormChange}
          type="text"
          name="notes"
          placeholder="Enter Any Notes"
          value={form.notes}
        />
        <button type="submit">Update Changes</button>
      </form>
    </div>
  )
}

export default EditGameForm;