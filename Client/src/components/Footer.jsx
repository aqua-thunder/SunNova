import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 ">
                <div className="max-w-7xl mx-auto px-6 py-14">

                    <div className="grid gap-10 md:grid-cols-4">

                        {/* Company Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Sunnova
                            </h2>
                            <p className="text-sm leading-relaxed">
                                Sunnova provides reliable and sustainable solar energy solutions
                                for homes and businesses, helping create a greener future.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#home" className="hover:text-green-500">Home</a></li>
                                <li><a href="#about" className="hover:text-green-500">About Us</a></li>
                                <li><a href="#services" className="hover:text-green-500">Services</a></li>
                                <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>📍 Ahmedabad, Gujarat, India</li>
                                <li>📞 +91 98765 43210</li>
                                <li>✉️ info@sunnovasolar.com</li>
                                <li>🕒 Mon - Sat : 9:00 AM - 6:00 PM</li>
                            </ul>
                        </div>

                        {/* Call to Action */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Get Started
                            </h3>
                            <p className="text-sm mb-4">
                                Ready to switch to solar? Get a free consultation today.
                            </p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                                Get Free Quote
                            </button>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                        © {new Date().getFullYear()} SunNova. All rights reserved.
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
