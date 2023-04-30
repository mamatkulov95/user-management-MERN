import React, { useContext } from "react";
import ModalWindow from "@/components/ModalWindow";
import { Context } from "@/components/context/context";

export default function SignIn() {
  const {
    setUserName = () => {},
    setEmail = () => {},
    setPassword = () => {},
    handleLogin,
  } = useContext(Context) ?? {};
  return (
    <div>
      <ModalWindow
        title="User management"
        subTitle="Sign in to your account"
        btnName="Sign In"
        signUpInText="Don’t have an account yet? "
        signInUpLink="Sign Up"
        href="/registration"
        isLoginForm={false}
        formOnSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          handleLogin && handleLogin(e);
        }}
        userNameValue={(e: React.FormEvent<HTMLInputElement>) =>
          setUserName((e.target as HTMLInputElement).value)
        }
        emailValue={(e: React.FormEvent<HTMLInputElement>) =>
          setEmail((e.target as HTMLInputElement).value)
        }
        passwordValue={(e: React.FormEvent<HTMLInputElement>) =>
          setPassword((e.target as HTMLInputElement).value)
        }
      />
    </div>
  );
}
