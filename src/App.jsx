import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import GamePage from "./pages/GamePage/GamePage";
import QuestionFormPage from "./pages/QuestionFormPage/QuestionForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/question" element={<QuestionFormPage />} />
      </Routes>
    </>
  );
}

export default App;
