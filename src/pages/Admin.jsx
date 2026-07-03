import { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";
import Navbar from "../components/Navbar";


const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const result = await getAllUsers();

    if (result.ok) {
      setUsers(result.data);
    }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white pt-28 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Quản lý người đăng ký
          </h1>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
              <p className="text-slate-400">
                Tổng số người đăng ký
              </p>
              <h2 className="text-4xl font-bold mt-2">
                {users.length}
              </h2>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
              <p className="text-slate-400">
                Người đăng ký mới nhất
              </p>
              <h2 className="text-lg font-semibold mt-2">
                {users.length > 0
                  ? users[0].email
                  : "No data"}
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="p-4 text-left">
                    #
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Thời gian đăng ký
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="border-t border-slate-800 hover:bg-slate-800 transition">
                    <td className="p-4">
                      {index + 1}
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">
                        {new Date(user.createdAt).toLocaleString("vi-VN", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;