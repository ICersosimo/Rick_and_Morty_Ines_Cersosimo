import style from "./SearchBar.module.css";
import { useState } from "react";
// import style from "../..//Nav.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
      <div className={style.search}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={id}/>
         <button 
         className={style.searchButton}
         onClick={() => {onSearch(id); setId('')}}>Add</button>
      </div>
   );  
}
