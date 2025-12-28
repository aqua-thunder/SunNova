import React from 'react'

const Home = () => {
    const plans = [
        {
            name: "Home Basic",
            capacity: "1 kW",
            price: "₹65,000",
            description: "Ideal for small homes with basic energy needs.",
            features: [
                "1 kW Solar Panel",
                "Grid Connected System",
                "5 Years Warranty",
                "Basic Installation Support",
            ],
        },
        {
            name: "Home Standard",
            capacity: "3 kW",
            price: "₹1,85,000",
            description: "Best choice for medium-sized households.",
            features: [
                "3 kW Solar Panel",
                "High Efficiency Panels",
                "10 Years Warranty",
                "Free Installation",
            ],
            popular: true,
        },
        {
            name: "Commercial Pro",
            capacity: "10 kW",
            price: "₹5,50,000",
            description: "Perfect for large homes and small businesses.",
            features: [
                "10 kW Solar Panel",
                "Hybrid System",
                "15 Years Warranty",
                "Priority Maintenance Support",
            ],
        },
    ];
    return (
        <div>
            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://intersolarsystems.com/wp-content/uploads/2025/05/Solar-Panels-For-Commercial-Use-.webp')",
                }}
            >

                <div className="bg-black/60 w-full min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 text-white text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Power Your Future with <br />
                            <span className="text-green-500">SunNova Solar Solution</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
                            Clean, affordable, and sustainable solar energy solutions for homes
                            and businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-green-600 px-6 py-3 rounded-lg text-base sm:text-lg hover:bg-green-700 transition cursor-pointer">
                                Get Free Consultation
                            </button>

                            <button className="border border-white px-6 py-3 rounded-lg text-base sm:text-lg bg-white text-black hover:bg-gray-100 transition cursor-pointer">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We are committed to delivering clean and sustainable solar energy
                            solutions that power a greener future.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Company Overview
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sunnova is a leading solar energy company providing reliable, cost-effective, and eco-friendly solar solutions for residential, commercial, clients. team combines innovation, advanced technology, and expertise to help customers reduce energy costs while protecting the environment.
                            </p>
                        </div>

                        <div>
                            <img
                                src="https://www.solarsysgreentech.in/images/solar-residential-img.webp"
                                alt="Solar panels"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-10 mb-20">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower homes and businesses with clean, affordable, and
                                renewable solar energy solutions while promoting sustainability
                                and reducing carbon footprint worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a trusted global leader in solar energy by driving
                                innovation and making renewable energy accessible to everyone.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Why Choose Sunnova?
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h4 className="text-xl font-semibold text-green-600 mb-2">
                                    10+ Years Experience
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Trusted expertise in solar technology and installation.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h4 className="text-xl font-semibold text-green-600 mb-2">
                                    500+ Installations
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Successfully completed projects across regions.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h4 className="text-xl font-semibold text-green-600 mb-2">
                                    Eco-Friendly
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Clean energy solutions with minimal environmental impact.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h4 className="text-xl font-semibold text-green-600 mb-2">
                                    End-to-End Support
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Consultation, installation, and maintenance under one roof.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Solar plans */}

            <section id="plans" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Solar Plans
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Choose a solar plan that fits your energy needs and budget.
                        </p>
                    </div>

                    {/* Plans Cards */}
                    <div className="grid gap-10 md:grid-cols-3">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border p-8 shadow-sm hover:shadow-lg transition cursor-pointer`}
                            >

                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {plan.name}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <p className="text-3xl font-bold text-green-600">
                                        {plan.price}
                                    </p>
                                    <p className="text-gray-500">
                                        Capacity: {plan.capacity}
                                    </p>
                                </div>

                                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                                    {plan.features.map((item, index) => (
                                        <li key={index}>✔ {item}</li>
                                    ))}
                                </ul>

                                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ">
                                    Enquire Now
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Home
