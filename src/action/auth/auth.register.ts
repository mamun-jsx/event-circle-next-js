"use server";

export async function registerAction(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("from server action --> ", name, " email-> ", email, " pw-> ", password);

    // fetch backend acton apis 


    return { success: true };
}
