import React, { useContext } from "react";
import ModalWindow from "@/components/ModalWindow";
import { Context } from "@/components/context/context";

export default function Registration() {
  const {
    setUserName = () => {},
    setEmail = () => {},
    setPassword = () => {},
    handleSubmit,
  } = useContext(Context) ?? {};

  return (
    <div>
      <ModalWindow
        title="User management"
        subTitle="Sign Up to your new account"
        btnName="Sign Up"
        signUpInText="Already have an account? "
        signInUpLink="Sign In"
        href="/login"
        formOnSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit && handleSubmit(e)
        }
        userNameValue={(e: React.FormEvent<HTMLInputElement>) =>
          setUserName((e.target as HTMLInputElement).value)
        }
        emailValue={(e: React.FormEvent<HTMLInputElement>) =>
          setEmail((e.target as HTMLInputElement).value)
        }
        passwordValue={(e: React.FormEvent<HTMLInputElement>) =>
          setPassword((e.target as HTMLInputElement).value)
        }
        isLoginForm={true}
      />
    </div>
  );
}
