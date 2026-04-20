"use client";

import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteEventById } from "@/action/admin";

export const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this event?",
    );
    if (!confirmDelete) return;

    try {
      const response = await deleteEventById(id);

      if (response?.success) {
        toast.success(response?.message || "Deleted successfully");
        router.refresh();
      } else {
        toast.error(response?.message || "Failed to delete");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
      title="Delete Event"
    >
      <Trash2 size={18} />
    </button>
  );
};
