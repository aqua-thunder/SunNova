import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'
const Admin_users = () => {
    const API_URL = import.meta.env.VITE_API_URL;

  const [users, setUsers] = useState('')
  const { authorizationToken } = useAuth();
  const getAllUserData = async (req, res) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        },
      })
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json();
      console.log(`user after delete ${data}`)
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllUserData();
  }, [])

  return (
    <div className="min-h-screen bg-green-50 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700">
            All Users
          </h2>
          <span className="text-sm text-gray-600">
            Total: {users.length || 0}
          </span>
        </div>

        {Array.isArray(users) && users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-green-600 text-white hidden sm:table-header-group">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium">#</th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Username
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-medium">Phone</th>
                  <th className="py-3 px-4 text-center text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-200 hover:bg-green-50 transition sm:table-row block sm:border-0 p-4 sm:p-0"
                  >
                    {/* Mobile Card Layout */}
                    <td className="sm:hidden text-sm text-gray-500 mb-1">
                      User #{index + 1}
                    </td>

                    <td className="py-2 px-4 text-gray-700 text-sm hidden sm:table-cell">
                      {index + 1}
                    </td>

                    <td className="py-2 px-4 text-gray-800 text-sm font-medium">
                      <span className="sm:hidden font-semibold">Username: </span>
                      {item.username}
                    </td>

                    <td className="py-2 px-4 text-gray-700 text-sm">
                      <span className="sm:hidden font-semibold">Email: </span>
                      {item.email}
                    </td>

                    <td className="py-2 px-4 text-gray-700 text-sm">
                      <span className="sm:hidden font-semibold">Phone: </span>
                      {item.phone}
                    </td>

                    <td className="py-2 px-4 text-center sm:table-cell">
                      <div className="flex flex-col sm:flex-row justify-center gap-2">
                        <Link
                          to={`/admin/users/${item._id}/edit`}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition text-center"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => deleteUser(item._id)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No users available
          </div>
        )}
      </div>
    </div>

  )
}

export default Admin_users
