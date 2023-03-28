import React from "react";
import ModalWindow from "@/components/ModalWindow";

export default function Registration() {
  return (
    <div>
      <ModalWindow
        title="User management"
        subTitle="Sign Up to your new account"
        btnName="Sign Up"
        signUpInText="Already have an account? "
        signInUpLink="Sign In"
        href="/login"
      />
    </div>
  );
}
