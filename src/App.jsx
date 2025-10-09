import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import GamePage from "./pages/GamePage/GamePage";
import QuestionFormPage from "./pages/QuestionFormPage/QuestionForm";

// Components
import ProtectedRoutes from "./components/ProtectedRoutes";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/dash" element={<DashboardPage />} />
            <Route path="/game" element={<GamePage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
