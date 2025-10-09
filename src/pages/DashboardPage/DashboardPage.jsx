import { useUser } from "../../context/userContext/userContext";

// Components
import AdminDash from "../../components/DashboardComponents/AdminDash";
import UserDash from "../../components/DashboardComponents/UserDash";

export default function DashboardPage() {
  const { user } = useUser(); // User Context

  const loading = () => {
    return <h1>Loading</h1>;
  };

  const loaded = () => {
    return (
      <>
        <h1>Welcome {user.userName}!</h1>
        {user.isAdmin ? <AdminDash /> : <UserDash />}
      </>
    );
  };

  return user ? loaded() : loading();
}
