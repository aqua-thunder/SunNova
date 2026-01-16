import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

// import './login.css'
const Login = () => {

    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const res_data = await response.json();
            console.log("Response from server", res_data)
            if (response.ok) {
                storetokenInLS(res_data.token);
                toast.success("Login Successfull")
                setUser({
                    email: "",
                    password: ""
                },
                    navigate("/"))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
       
        <div className="min-h-screen flex bg-[#fdefe8] items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">

                <div className="flex justify-center bg-green-50 p-6">
                    <img
                        src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="login"
                        className="w-40 sm:w-48 md:w-52 object-contain"
                    />
                </div>
                
                <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-5">
                    <h2 className="text-xl font-bold text-center text-green-600">
                        Login
                    </h2>

                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        required
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        required
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-2.5 rounded-md hover:bg-green-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
