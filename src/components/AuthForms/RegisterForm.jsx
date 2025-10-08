import style from "./Forms.module.css";

export default function RegisterForm({ setNewUser }) {
  const handleClick = () => {
    setNewUser(false);
  };

  return (
    <div className="forms">
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="First and Last Name"
          />{" "}
        </label>
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
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          minLength="6"
        />
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
}
