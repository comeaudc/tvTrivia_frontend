import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";

export default function Nav() {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }
  return (
    <nav className={style.nav}>
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <Link to={"/dash"}>
        <h3>Dashboard</h3>
      </Link>
      <Link to={"/game"}>
        <h3>Game</h3>
      </Link>
      <Link to={"/auth"}>
        <h3>Login/SignUp</h3>
      </Link>
      <a>
        <h3 onClick={handleLogout}>Logout</h3>
      </a>
    </nav>
  );
}
