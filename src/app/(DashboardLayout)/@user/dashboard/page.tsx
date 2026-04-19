import UserInfoCard from "@/Components/UserInfoCard";
import { getAuthUser } from "@/lib/current.auth";

const UserDashboard = async () => {
  const user = await getAuthUser();

  return <UserInfoCard user={user} />;
};

export default UserDashboard;
