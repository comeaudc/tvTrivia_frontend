import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext/authContext";
import AuthPage from '../pages/AuthPage/AuthPage'

export default function ProtectedRoutes(){
    const {cookies} = useAuth();

    return cookies.token? <Outlet /> : <AuthPage />
}