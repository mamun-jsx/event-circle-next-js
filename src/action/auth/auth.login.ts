"use server";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("from server action --> ", email, " pw-> ", password);

  

  //Pass data to backend actual backend API or Database

  return { success: true };
}
