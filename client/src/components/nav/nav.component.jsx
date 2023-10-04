import style from "./nav.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../redux/actions";
import { NavLink } from "react-router-dom";

function Nav() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const onSearch = (event) => {
        event.preventDefault()
        dispatch(getByName(name))
    }


    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div className={style.container} >

            <NavLink to={`/home`}>
                <button>Home</button>
            </NavLink>

            <input
                type="text"
                onChange={handleChange}
            />
            <button onClick={onSearch}>🔎</button>

            <NavLink to={`/form`}>
                <button>Upload game</button>
            </NavLink>


        </div>
    );
}

export default Nav;