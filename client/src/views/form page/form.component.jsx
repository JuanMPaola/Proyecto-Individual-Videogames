import { useState } from "react";
import style from "./form.module.css"
import { sumbitGame } from "../../redux/actions";

import { useDispatch } from "react-redux";

function Form({ allGenres }) {

  const [data, setData] = useState({
    name: "",
    description: "",
    realesed: "",
    image: "",
    rating: "",
    genres: ""
    /*
    platafomrs: "",
     */
  })

  const [error, setErrors] = useState({
    name: "",
    platafomrs: "",
    image: ""
  })

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const dispatch = useDispatch();

  function handleSumbit(event) {
    event.preventDefault()
    dispatch(sumbitGame(data))
  }

  return (
    <div className={style.container} >
      <h1>Subi tu juego</h1>
      <form onSubmit={handleSumbit}>
        <label >Nombre</label>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <label >Imagen</label>
        <input
          type="file"
          accept="image/*"
          value=""
          onChange={handleChange}
          placeholder="background_image"
        />
        <label >Descripcion</label>
        <input
          type="text"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          name="description"
        />
        <label >Plataformas</label>
        <input
          type="text"
          value=""
          onChange={handleChange}
          placeholder="Plataforms"
          name="plataforms"
        />
        <label >Rating</label>
        <input
          type="number"
          value={data.rating}
          onChange={handleChange}
          placeholder="1 to 10"
          name="rating"
        />
        <label >Fecha de lanzamiento</label>
        <input
          type="date"
          value={data.realesed}
          onChange={handleChange}
          placeholder="Realesed date"
          name="realesed"
        />
        <select>
        <option value="" disabled selected>Genres</option>
          {
            allGenres.map((genero) => (
              <option key={genero.id} value={genero.name}>
                {genero.name}
              </option>
            ))
          }
        </select>

        <button type="sumbit" onClick={handleSumbit}>SUMBITEALO</button>
      </form>
    </div>
  );
}

export default Form;