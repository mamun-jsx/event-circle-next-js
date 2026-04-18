import { getAuthUser } from "@/lib/current.auth";

const UserDashboard = async () => {
  const user = await getAuthUser();
  console.log(user);
  return <div>User Dashboard</div>;
};

export default UserDashboard;