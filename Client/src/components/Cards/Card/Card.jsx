import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
// import {reducer} from "../../../redux/reducer";

function Card({
  id,
  name,
  species,
  gender,
  status,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, onClose, origin, status }); 
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <button onClick={() => onClose(id)} className={styles.btn}>
        X
      </button>
      <div>
        <Link to={`/detail/${id}`}>
          <div className={styles.name}>{name}</div>
         <div> <img className={styles.image} src={image} alt="" /> </div>
        </Link>

        <span className={styles.info}>{species}</span>
        <span className={styles.info}>{gender}</span>
        <span className={styles.info}>{origin}</span>
        <span className={styles.info}>{status}</span>
        
      </div>
     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => { dispatch(removeFav(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
