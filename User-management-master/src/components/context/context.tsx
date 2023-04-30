import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  ContextProps,
  ContextProviderProps,
  User,
} from "@/interfaces/userInterfaces";

export const Context = createContext<ContextProps | null>(null);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/user");
    setUsers(data.users);
    console.log(users);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/user/add", {
      userName,
      email,
      password,
    });
    await fetchData();
    router.push("/dashboard");
  };

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      const user = response.data.user;
      setUserId(user._id);
      await updateLastLogin(user._id);
      router.push("/dashboard");
      await fetchData();
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const updateLastLogin = async (userId: string) => {
    try {
      if (userId) {
        await axios.put(`http://localhost:5000/api/user/${userId}`, {});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserStatus = async (userId: string) => {
    try {
      if (userId) {
        await axios.put(
          `http://localhost:5000/api/user/dashboard/${userId}`,
          {}
        );
        await fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/api/user/${userId}`);
    fetchData();
  };

  const contextValue: ContextProps = {
    setUserName,
    setEmail,
    setPassword,
    handleSubmit,
    handleLogin,
    deleteHandler,
    updateUserStatus,
    setUserId,
    users,
    userId,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
