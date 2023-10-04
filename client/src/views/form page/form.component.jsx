import { useState } from "react";
import style from "./form.module.css"
import { sumbitGame } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Form({ allGenres }) {

  const allPlatforms = ["PC", "xBox", "PS4", "Switch", "PS5"];

  const [isDisabled, setIsDisabled] = useState(false)

  const [data, setData] = useState({
    name: "",
    description: "",
    realesed: "",
    background_image: "",
    rating: "",
    platforms: [],
    genres: [],
  })

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    realesed: "",
    background_image: "",
    rating: "",
    platforms: "",
    genres: "",
  });

  useEffect(() => {
    disabledHandler()
  }, [errors])

  //FUNCION QUE SE USA PARA MODIFICAR EL ESTADO DEL BOTON
  const disabledHandler = () => {
    if (errors && Object.keys(errors).length > 0) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  function validation(data) {
    let errors = {}

    if (data.name === "" || !data.name) errors.name = "El nombre es obligatorio"

    if (data.description === "" || !data.description) errors.description = "Agregue una breve descripcion"

    if (data.background_image === "" || !data.background_image) errors.background_image = "La imagen es obligatoria"

    if (data.realesed === "" || !data.realesed) errors.realesed = "Ingrese la fecha de lanzamiento"

    if(data.genres.length<1|| !data.genres) errors.genres = "Ingrese almenos un genero"

    if(data.platforms.length < 1|| !data.platforms) errors.platforms = "Ingrese aunque sea una plataforma"

    return errors;
  }

  const handleChange = (event) => {
    if(event.target.name === "platforms" ||event.target.name === "genres"){
      setData({
        ...data,
        [event.target.name]: [...data[event.target.name],...[event.target.value]]
      })
    }else{
      setData({
        ...data,
        [event.target.name]: event.target.value
      })
    }
    setErrors(
      validation({
        ...data,
        [event.target.name]: event.target.value
      })
    )
  }

  const dispatch = useDispatch();

  function handleSumbit(event) {
    event.preventDefault()
    console.log(data)
    dispatch(sumbitGame(data))
  }

  return (
    <div className={style.container} >
      <h1>Subi tu juego</h1>

      {console.log(data)}

      <form onSubmit={handleSumbit}>
        <label >Nombre</label>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        {errors.name ? <p className="formerror">{errors.name}</p> : null}
        <label >Imagen</label>
        <input
          type="text"
          value={data.background_image}
          onChange={handleChange}
          placeholder="background_image"
          name="background_image"
        />
        {errors.background_image ? <p className="formerror">{errors.background_image}</p> : null}
        <label >Descripcion</label>
        <input
          type="text"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          name="description"
        />
        {errors.description ? <p className="formerror">{errors.description}</p> : null}
        <label >Plataformas</label>
        <select
          defaultValue=""
          onChange={handleChange}
          name="platforms"
        >
          <option disabled selected>-</option>
          {
            allPlatforms.map((plat) => (
              <option value={plat}>
                {plat}
              </option>
            ))
          }
        </select>
        {errors.platforms ? <p className="formerror">{errors.platforms}</p> : null}
        <label >Rating</label>
        <input
          type="text"
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
        <label >Generos</label>
        <select
         defaultValue=""
          onChange={handleChange}
          name="genres"
        >
          <option disabled selected>-</option>
          {
            allGenres.map((genero) => (
              <option key={genero.id} value={genero.name}>
                {genero.name}
              </option>
            ))
          }
        </select>
        {errors.genres ? <p className="formerror">{errors.genres}</p> : null}
        <button type="submit" onClick={handleSumbit} disabled={isDisabled}>SUMBITEALO</button>
      </form>
    </div>
  );
}

export default Form;