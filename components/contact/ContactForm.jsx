"use client";

import { useContext, useState } from "react";
import themeContext from "../../app/context/themeContext";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentTheme } = useContext(themeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult("Oops! Something went wrong. Please try again.");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className={`text-3xl font-bold text-center mb-2 ${currentTheme.headings}`}
        >
          Get in Touch
        </h2>
        <p className="text-center mb-8">
          Have a project in mind? Fill out the form below and we'll get back to
          you as soon as possible.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          {" "}
          {/* Yeh zaroori tha! */}
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className={`w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className={`w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              placeholder="Message"
              className={`w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-orange-500`}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          {/* Success/Error Message */}
          {result && (
            <p
              className={`text-center font-medium mt-4 ${
                result.includes("Thank you") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
