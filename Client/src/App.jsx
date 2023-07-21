import style from "./App.module.css";
import Nav from "./components/Navbar/Nav.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

// const EMAIL = "ine@gmail.com";
// const PASSWORD = "12qwaszx";
const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [myFavorites, setFavorites] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("No hay personajes con este ID");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={""} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
