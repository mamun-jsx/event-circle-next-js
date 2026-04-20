import LoginForm from "@/Components/Form-Data/Login.Form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
