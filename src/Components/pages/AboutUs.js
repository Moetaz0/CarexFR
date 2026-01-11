import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import geosearch from "../../static/story.png";
import chatbot from "../../static/goals.png";
import prescription from "../../static/services.png";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white font-roboto pt-12">
                {/* Hero Section */}
                <div className="bg-[#4addbf] text-white py-16 px-6 text-center">
                    <h1 className="text-4xl font-semibold">About Us</h1>
                    <p className="text-lg mt-4">
                        Learn more about our mission, story, and the services we offer.
                    </p>
                </div>

                {/* Goals Section */}
                <div className="container mx-auto py-12 px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-28">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Goals</h2>
                            <p className="text-gray-600">
                                At CareX, we aim to revolutionize the way healthcare is delivered. Our goal is to create a
                                seamless, accessible, and efficient platform that connects patients with healthcare
                                providers, pharmacies, and laboratories.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={geosearch}
                                alt="Our Goals"
                                className="w-full max-w-md rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-gray-50 py-12 px-6 lg:px-12">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pr-14">
                        <div className="flex justify-center order-2 lg:order-none">
                            <img
                                src={chatbot}
                                alt="Our Story"
                                className="w-full max-w-md rounded-md "
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-600">
                                Founded in Tunisia, CareX was born out of a vision to bridge the gap between patients
                                and healthcare providers. Our story began with a commitment to innovation and a
                                passion for improving healthcare accessibility for everyone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="container mx-auto py-12 px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-28">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
                            <p className="text-gray-600">
                                We provide a range of services including online doctor consultations, pharmacy
                                integration for electronic prescriptions, and laboratory result management to ensure
                                you receive the best care possible.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={prescription}
                                width={500}
                                alt="Our Services"
                                className="w-full max-w-md rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
