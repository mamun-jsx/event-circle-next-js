import { cookies } from "next/headers";

type User = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt?: string;
};

const AllUsers = async () => {
  // ✅ Correct cookies usage
  const token = (await cookies()).get("auth-token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-all-users`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  // ✅ Parse response
  const result = await res.json();
  const users: User[] = (await result?.data) || [];

  return (
    <div className="p-6 min-h-screen bg-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">All Users</h1>

          <span className="bg-ec-accent/20 text-ec-accent px-3 py-1 rounded-full text-sm font-medium">
            Total: {users.length}
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#191919]">
          <table className="min-w-[700px] w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-[#222]">
                <th className="p-4 text-sm font-semibold text-gray-400">
                  Name
                </th>
                <th className="p-4 text-sm font-semibold text-gray-400">
                  Email
                </th>
                <th className="p-4 text-sm font-semibold text-gray-400">
                  Role
                </th>
                <th className="p-4 text-sm font-semibold text-gray-400">
                  Joined Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800 text-sm">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-white font-medium">
                      {user.name || "N/A"}
                    </td>

                    <td className="p-4 text-gray-300">{user.email || "N/A"}</td>

                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          user.role === "ADMIN"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="p-4 text-gray-400 text-sm">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
