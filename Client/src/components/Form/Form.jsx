import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    const validateErrors = validation({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validateErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
    

        <div className={style.container}>
        {/* <h1>Welcome to Rick and Morty's World!</h1> */}

      <div className={style.form}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="somebody@example.com"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

         <div className={style.password}> 
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <div className={style.boton}> 
            <button
              disabled={
                !userData.email ||
                !userData.password ||
                errors.email ||
                errors.password
              }
            >
              Submit{" "}
            </button>
        
          </div>
         </div>
      </div> 
      </div>
    </form>
  );
};

export default Form;
