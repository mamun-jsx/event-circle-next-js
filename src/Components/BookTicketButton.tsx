"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const BuyTicketButton = ({
  eventId,
  name,
  price,
}: {
  eventId: string;
  image: string;
  name: string;
  price: number;
  date: string;
  time: string;
  organizerEmail: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Booking Details:", { eventId, ...formData });

      setIsOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full cursor-pointer py-4 bg-ec-accent hover:bg-black text-white font-bold rounded-2xl transition-all transform active:scale-95 shadow-lg shadow-ec-accent/20"
      >
        Buy Ticket Now
      </button>

      {/* Basic Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl relative text-black">
            <h2 className="text-2xl font-bold mb-4">Book Ticket for {name}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  required
                  className="w-full p-3 border rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, userName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full p-3 border rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full p-3 border rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-gray-200 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-ec-accent text-white rounded-xl font-bold hover:bg-black transition-colors"
                >
                  Confirm ( ${price} )
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
