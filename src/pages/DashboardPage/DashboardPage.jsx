import { useAuth } from "../../context/authContext/authContext";
import { useNavigate } from "react-router-dom";
import QuestionForm from '../../components/QuestionForm/QuestionForm';

export default function DashboardPage() {
  const { logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/auth");
  }
  return (
    <>
      <h1>Dashboard Page</h1>
      <QuestionForm />
    </>
  );
}
