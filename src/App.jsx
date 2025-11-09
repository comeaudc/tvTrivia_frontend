import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useUser } from "./context/userContext/userContext";
import { useAuth } from "./context/authContext/authContext";
import axios from "axios";
import apiService from "./utilities/apiService.mjs";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import GamePage from "./pages/GamePage/GamePage";

// Components
import ProtectedRoutes from "./components/ProtectedRoutes";
import Nav from "./components/Nav/Nav";

function App() {
  const { cookies, logout } = useAuth();
  const { setUser, setCategory } = useUser();

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3000/api/category`);
      setCategory(res.data);

      if (cookies.token) {
        let res = await apiService.getUser(cookies.token);

        setUser(res);
      }
    } catch (err) {
      logout();
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, [cookies.token]);

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
