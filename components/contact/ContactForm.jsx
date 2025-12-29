'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-linear-to-b from-blue-50 to-white min-h-screen">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or partnership inquiries? We love to hear from you.
          Fill out the form below and our team will get back to you soon.
        </p>
      </section>
      <section className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div>
              <label
                htmlFor="name"
                className="block font-semibold mb-2 text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'focus:ring-red-400'
                    : 'focus:ring-blue-500'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold mb-2 text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'focus:ring-red-400'
                    : 'focus:ring-blue-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-semibold mb-2 text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className={`w-full border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'focus:ring-red-400'
                    : 'focus:ring-blue-500'
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-gray-700 mb-6">
              Your message has been received. Our team will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-[1.03]"
            >
              Send Another Message
            </button>
          </div>
        )}
      </section>
      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { title: 'Customer Support', email: 'support@shoppingapp.com' },
          { title: 'Business Inquiries', email: 'business@shoppingapp.com' },
          { title: 'Careers', email: 'careers@shoppingapp.com' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.email}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
