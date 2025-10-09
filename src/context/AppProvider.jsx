import AuthContext from "./authContext/authContext";
import UserProvider from "./userContext/userContext";
import { CookiesProvider } from "react-cookie";

export default function AppProvider({ children }) {
  return (
    <CookiesProvider>
      <UserProvider>
        <AuthContext>{children}</AuthContext>
      </UserProvider>
    </CookiesProvider>
  );
}
