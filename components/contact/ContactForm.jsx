"use client";

import { useContext, useState } from "react";
import themeContext from "../../app/context/themeContext";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import service from "../../app/data/service";

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
      className={`${currentTheme.background} ${currentTheme.text} py-12 md:py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className={`text-center mb-2 ${currentTheme.headings}`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Get in <span className="text-secondary">Touch</span>
        </h2>
        <p className="text-center mb-8">
          Have a project in mind? Fill out the form below and we'll get back to
          you as soon as possible.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
                className={`mt-3 w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-secondary`}
              />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                required
                className={`mt-3 w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-secondary`}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              className={`mt-3 w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-secondary`}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
              className={`mt-3 w-full px-4 py-3 rounded-lg ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-secondary`}
            />
          </div>
          <div>
            <Label htmlFor="service">Services</Label>
            <Select name="service" id="service" required>
              <SelectTrigger
                className={`w-full mt-3 px-4 py-3 rounded-lg ${currentTheme.card} hover:outline-none hover:ring-2 hover:ring-secondary cursor-pointer focus:ring-2 focus:ring-secondary`}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent
                className={`${currentTheme.card} ${currentTheme.text} `}
                position="popper"
              >
                <SelectGroup>
                  <SelectLabel className={`${currentTheme.text}`}>
                    Services
                  </SelectLabel>
                  {service.map((item) => (
                    <SelectItem
                      key={item.slug}
                      value={item.slug}
                      className={`${currentTheme.text} hover:bg-gray-700 cursor-pointer`}
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className={`mt-3 w-full px-4 py-3 rounded-lg resize-none ${currentTheme.card} focus:outline-none focus:ring-2 focus:ring-secondary`}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-secondary text-white cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-secondary/70 disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
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
