import React from "react";
import { FaLaptopCode, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 md:text-5xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          We are a passionate team of developers, designers, and creators building innovative digital
          solutions to help people and businesses thrive in the modern world.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid gap-6 px-8 py-10 md:grid-cols-2 md:px-20 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <FaLaptopCode className="mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Development</h3>
          <p className="mt-2 text-sm text-gray-600">
            We craft clean, scalable, and high-performance software tailored to your needs.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <FaUsers className="mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our team thrives on teamwork, communication, and building together.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <FaLightbulb className="mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
          <p className="mt-2 text-sm text-gray-600">
            We embrace creativity and bring fresh ideas to life in every project.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl">
          <FaRocket className="mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Growth</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our mission is to help people and businesses grow through technology.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Let’s Build Something Amazing</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg">
          We would love to collaborate with you on your next big idea. Get in touch and let’s create the
          future together.
        </p>
        <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow transition hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
