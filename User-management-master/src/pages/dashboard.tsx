import React, { useContext } from "react";
import { Context } from "@/components/context/context";
import { theader } from "@/mapData/data";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Dashboard() {
  const {
    users,
    setUserId = () => {},
    deleteHandler,
    updateUserStatus,
  } = useContext(Context) ?? {};

  const handleBlockUser = (userId: string) => () => {
    setUserId(userId);
    updateUserStatus && updateUserStatus(userId);
  };

  const preventDefault = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen m-auto">
      <table className="table-auto w-full">
        <thead className="bg-lime-100 m-0 p-0">
          <tr>
            {theader.map(({ id, header }) => (
              <th key={id} className="px-4 py-2 border">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user._id}</td>
              <td className="border px-4 py-2">{user.userName}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.lastLogin}</td>
              <td className="border px-4 py-2">{user.registrationTime}</td>
              <td className="border px-4 py-2">
                {user.isBlocked ? "Blocked" : "Active"}
              </td>
              <td className=" border px-4 py-2 flex gap-4 justify-center items-center">
                <form className="flex" onSubmit={preventDefault}>
                  <button
                    className={`py-1 px-2 rounded mr-2 text-white bg-red-500 hover:bg-red-600 `}
                    onClick={handleBlockUser(user._id)}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </form>
                <form onSubmit={deleteHandler}>
                  <button
                    onClick={() => {
                      setUserId(user._id);
                    }}
                  >
                    <DeleteIcon className="cursor-pointer" />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
