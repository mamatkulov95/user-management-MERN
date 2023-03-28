import React from "react";
import ModalWindow from "@/components/ModalWindow";

export default function SignIn() {
  return (
    <div>
      <ModalWindow
        title="User management"
        subTitle="Sign in to your account"
        btnName="Sign In"
        signUpInText="Don’t have an account yet? "
        signInUpLink="Sign Up"
        href="/registration"
      />
    </div>
  );
}
