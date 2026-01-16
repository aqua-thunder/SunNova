import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../store/auth'
// import './signup.css'

const Signup = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const { storetokenInLS } = useAuth();
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log(res_data)

            if (response.ok) {
                toast.success(res_data.message || "Register successfully");
                storetokenInLS(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });

                navigate("/");
            } else {
                toast.error(res_data.message || "Error");
            }
        } catch (error) {
            console.log("Register error:", error);
            toast.error("Server not responding");
        }
    };

    return (
        <div className="min-h-screen bg-[#fdefe8] flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg">

                <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-4">

                    <h2 className="text-xl font-bold text-center text-green-600">
                        Signup
                    </h2>

                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleInput}
                        placeholder="Enter username"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Enter your email"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    {/* Phone */}
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <span className="text-gray-500 text-sm">+91</span>
                        <input
                            type="number"
                            name="phone"
                            value={user.phone}
                            onChange={handleInput}
                            placeholder="Mobile number"
                            required
                            className="w-full ml-2 outline-none text-sm"
                        />
                    </div>

                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="Enter password"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <label className="flex items-start gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="mt-1"
                        />
                        <span>
                            By continuing, I agree to the
                            <span className="font-semibold"> Terms of Use </span>
                            &
                            <span className="font-semibold"> Privacy Policy</span>.
                        </span>
                    </label>

                    <NavLink
                        to="/login"
                        className="text-sm font-bold block text-right"
                    >
                        Already have an account? Login
                    </NavLink>

                    <button
                        type="submit"
                        disabled={!isChecked}
                        className={`w-full py-2.5 rounded-md font-bold text-white transition
          ${isChecked
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-gray-400 cursor-not-allowed"}`}
                    >
                        CONTINUE
                    </button>

                    <p className="text-xs text-center text-gray-500">
                        Need help? <span className="text-green-600 font-semibold">Get help</span>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup

