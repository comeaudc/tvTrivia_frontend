import RegisterForm from "../../components/AuthForms/RegisterForm";
import LoginForm from "../../components/AuthForms/LoginForm";
import { useState } from "react";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <>
      {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </>
  );
}
