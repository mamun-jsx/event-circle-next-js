"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { buySingleTicket } from "@/action/user";

export const BuyTicketButton = ({
  eventId,
  title,
  image,
  date,
  time,
  venue,
  price,
  type,
  organizerEmail,
}: {
  eventId: string;
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  type: string;
  organizerEmail: string;
}) => {
  const token = localStorage?.getItem("token");
  const email = localStorage.getItem("user-email");
  console.log("token from book ticket button--> ", token);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    mobile: "",
    email: email,
  });

  // event form.. button.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!token) {
        // router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        console.log(token, " from submit button ");
        router.push("/login");

        toast.error("Please login first");
        return;
      }
      const res = await buySingleTicket({
        eventId,
        title,
        image,
        date,
        time,
        venue,
        price,
        type,
        organizerEmail,
        ...formData,
      });

      if (res?.success && res?.url) {
        window.location.href = res.url;
      } else {
        toast.error(res?.message || "Payment initiation failed");
      }
    } catch (error) {
      console.log("catch error--> ", error);
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
            <h2 className="text-2xl font-bold mb-4">Book Ticket for {title}</h2>

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
                  value={email as string}
                  readOnly
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-gray-200 rounded-xl font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer py-3 bg-ec-accent text-white rounded-xl font-bold hover:bg-black transition-colors"
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
