import AuthContext from "./authContext/authContext";
import { CookiesProvider } from "react-cookie";

export default function AppProvider({ children }) {
  return (
    <CookiesProvider>
      <AuthContext>{children}</AuthContext>
    </CookiesProvider>
  );
}
