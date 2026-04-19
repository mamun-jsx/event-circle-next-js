"use client";

import { Mail, Fingerprint, User } from "lucide-react";

interface UserProps {
  user: {
    id: string;
    email: string;
    // adding other fields as optional if needed
    role?: string;
    token?: string;
  } | null;
}

const UserInfoCard = ({ user }: UserProps) => {
  // Guard clause if user data is missing
  if (!user) {
    return (
      <div className="p-6 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <p className="text-gray-500">No user data found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Decorative Header */}
      <div className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600" />

      <div className="px-6 pb-6 text-center">
        {/* Profile Image Placeholder */}
        <div className="relative -mt-10 mb-4 inline-block">
          <div className="w-20 h-20 bg-white rounded-full p-1 shadow-md">
            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
              <User size={40} />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
        <p className="text-sm text-gray-500 mb-6 font-medium">
          Dashboard Overview
        </p>

        <div className="space-y-4 text-left">
          {/* Email Info */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600">
              <Mail size={18} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                Email Address
              </span>
              <span className="text-sm font-semibold text-gray-700 truncate">
                {user.email}
              </span>
            </div>
          </div>
          {/* ID Info */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600">
              <Fingerprint size={18} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                Account ID
              </span>
              <span
                className="text-xs font-mono text-gray-500 truncate"
                title={user.id}
              >
                {user.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
