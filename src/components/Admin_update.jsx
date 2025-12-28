import React, { use } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
const Admin_Update = () => {
    const [data, setData] = useState(({
        username: "",
        email: "",
        phone: "",
    }))

    const { authorizationToken } = useAuth();
    const params = useParams();
    const getSingleUserData = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log(`user single data ${data}`)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                toast.success("Update Successfully");
            } else {
                toast.error("Not Updated")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-6 sm:p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
                    Update User Data
                </h2>

                {/* Username */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={data.username}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mb-6">
                    <label className="block mb-1 font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={data.phone}
                        onChange={handleInput}
                        className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer"
                >
                    Update
                </button>
            </form>
        </div>

    )
}

export default Admin_Update
