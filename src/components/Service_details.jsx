import React from "react";
import { useAuth } from '../store/auth'

const ServiceDetails = () => {
    const {services} = useAuth();
    return (
        <section className="bg-gray-100 py-12 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Our Solar Services
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Clean energy solutions for every need
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">
                                {service.serviceName}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {service.description}
                            </p>

                            <div className="mt-4">
                                <p className="text-3xl font-bold text-green-600">
                                    {service.price}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Capacity: {service.capacity}
                                </p>
                            </div>

                            <ul className="mt-4 space-y-2 text-gray-700">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-green-600">✔</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
