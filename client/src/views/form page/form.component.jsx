import { useState } from "react";
import style from "./form.module.css"
import { sumbitGame } from "../../redux/actions";

import { useDispatch } from "react-redux";

function Form() {

  const [data, setData] = useState({
    name: "",
    description: "",
    /* realesed: "",
    image: "",
    platafomrs: "",
    genres: "" */
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
        <label >Fecha de lanzamiento</label>
        <input
          type="date"
          value={data.realesed}
          onChange={handleChange}
          placeholder="Realesed date"
          name="realesed"
        />
        <label >Generos</label>
        <input
          type="text"
          value=""
          onChange={handleChange}
          placeholder="Genres"
          name="genres"
        />
        <button type="sumbit" onClick={handleSumbit}>SUMBITEALO</button>
      </form>
    </div>
  );
}

export default Form;