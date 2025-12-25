"use client";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Space_Mono } from "next/font/google";

const LeftSide = () => {
  const { currentTheme } = useContext(themeContext);

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${currentTheme.headings}`}
        >
          Contact Information
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 ">
            <Mail className="w-8 h-8 text-secondary" />
            <div className="flex flex-col gap-2">
              <span className="text-secondary">Email</span>
              <p>info@fabuilders.co.uk</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8 text-secondary" />
            <div className="flex flex-col gap-2">
              <span className="text-secondary">Phone</span>
              <p>+44 7476 555002</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-secondary" />
            <div className="flex flex-col gap-2">
              <span className="text-secondary">Address</span>
              <p>
                Flat 2, 23 Headcorn Road, Thornton Heath, London, CR7 6JR,
                United Kingdom
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-secondary" />
            <div className="flex flex-col gap-2">
              <span className="text-secondary">Opening Hours</span>
              <p>Monday - Saturday: 9am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div
            className={`w-full h-72 rounded-lg ${currentTheme.card} overflow-hidden`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.6635293291583!2d-0.0874558!3d51.4659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c467a3b499%3A0xc34b72e5a7b8e5d!2s23%20Headcorn%20Rd%2C%20London%20SE15%203ND%2C%20UK!5e0!3m2!1sen!2sus!4v1703692800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
