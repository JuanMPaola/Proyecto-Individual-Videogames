import style from "./nav.module.css"
import { useState } from "react";

function Nav({ onSearch }) {

/*     const [name, setGames] = useState("");

    function handleChange(event){
        
    } */

    return (
        <div className={style.container} >
            <h1>Nav Bar  B|</h1>

            <input
                type="text"
/*                 value={name}
                onChange={() =>{handleChange}}  */
            />
            <button /* onClick={()=>onSearch(name)} */></button>
        </div>
    );
}

export default Nav;