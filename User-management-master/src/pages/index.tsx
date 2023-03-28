interface TableHeader {
  id: number;
  header: string;
}

interface TableRow {
  id: number;
  name: string;
  email: string;
  loginTime: string;
  registrationTime: string;
  status: string;
}

interface Button {
  id: number;
  btnName: string;
}

const theader: TableHeader[] = [
  { id: 1, header: "ID" },
  { id: 2, header: "Name" },
  { id: 3, header: "E-mail" },
  { id: 4, header: "Last login time" },
  { id: 5, header: "Registration time" },
  { id: 6, header: "Status" },
  { id: 7, header: "Actions" },
];

const tbody: TableRow[] = [
  {
    id: 1,
    name: "Joh",
    email: "test.com",
    loginTime: "12.12.12",
    registrationTime: "12:12",
    status: "active",
  },
];

const btns: Button[] = [
  { id: 1, btnName: "Block" },
  { id: 1, btnName: "Unblock" },
  { id: 1, btnName: "Delete" },
];

export default function Home() {
  return (
    <div className="w-3/5 m-auto">
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
          {tbody.map(
            ({ id, name, email, loginTime, registrationTime, status }) => (
              <tr key={id}>
                <td className="border px-4 py-2">{id}</td>
                <td className="border px-4 py-2">{name}</td>
                <td className="border px-4 py-2">{email}</td>
                <td className="border px-4 py-2">{loginTime}</td>
                <td className="border px-4 py-2">{registrationTime}</td>
                <td className="border px-4 py-2">{status}</td>
                <td className=" border px-4 py-2 flex gap-4 justify-center items-center">
                  {btns.map(({ id, btnName }) => (
                    <button
                      className={`py-1 px-2 rounded mr-2 text-white ${
                        btnName === "Block"
                          ? "bg-red-500 hover:bg-red-600 "
                          : btnName === "Delete"
                          ? "bg-gray-500 hover:bg-gray-600  "
                          : "bg-green-500 hover:bg-green-600 "
                      }`}
                      key={id}
                    >
                      {btnName}
                    </button>
                  ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
