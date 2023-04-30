import {  ReactNode } from "react";

export interface ContextProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; 
  deleteHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  updateUserStatus: (userId: string) => Promise<void>;
  users: User[];
  userId: string;
}

export interface ContextProviderProps {
  children: ReactNode;
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  registrationTime: string;
  lastLogin: string;
  isBlocked: boolean;
}

export interface Links {
  id: number;
  href: string;
  menu: string;
}

export interface ModalWindowProps {
  title: string;
  subTitle: string;
  btnName: string;
  signUpInText: string;
  signInUpLink: string;
  href: string;
  formOnSubmit: React.FormEventHandler;
  userNameValue: React.FormEventHandler;
  emailValue: React.FormEventHandler;
  passwordValue: React.FormEventHandler;
  isLoginForm: boolean;
}

export interface TableHeader {
  id: number;
  header: string;
}

export interface Button {
  id: number;
  btnName: string;
}