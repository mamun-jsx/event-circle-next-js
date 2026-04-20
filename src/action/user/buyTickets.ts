import { IEvent, TApiResponse } from "@/Types/fetchDataType";

// buyTickets.ts
export const buyTickets = async (
  eventData: any,
  token: string,
  formData: FormData,
): Promise<TApiResponse> => {
  const userName = formData.get("userName");
  const mobile = formData.get("mobile");
  const email = formData.get("email");

  const payload = {
    ...eventData,
    price: eventData.registrationFee || eventData.price,
    userName,
    mobile,
    email,
  };

  try {
    // Change this to your actual BACKEND URL
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/buy-ticket`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
    );

    // Check if response is okay before parsing JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server Error:", errorText);
      return { success: false, message: "Server error occurred" };
    }

    return await response.json();
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, message: "Network error" };
  }
};
