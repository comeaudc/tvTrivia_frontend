import style from "./Forms.module.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setNewUser }) {
  const { login } = useAuth();
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formData);

      nav("/dash");
    } catch (err) {
      console.error(err.message);
    }
  }
  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className={style.forms}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            minLength="6"
          />{" "}
        </label>
        <input type="submit" value="Log In" />
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
}
