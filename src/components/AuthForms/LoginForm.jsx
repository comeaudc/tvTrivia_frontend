import style from './Forms.module.css'

export default function LoginForm({ setNewUser }) {

  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className="forms">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
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
