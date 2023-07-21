import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"


const Nav = ({onSearch}) => {

    return (

    <div className={style.nav}>
       <SearchBar onSearch={onSearch}/>
           
            <button>
                <Link to="/home">Home</Link>
            </button>
                
            <button>
                <Link to="/about">About</Link>
            </button>

            <button>    
                <Link to="/favorites">Favorites</Link>
            </button>

            
        </div>
    )

}

export default Nav;