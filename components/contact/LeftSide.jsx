"use client";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const LeftSide = () => {
  const { currentTheme } = useContext(themeContext);

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text}
      py-6 md:py-16
      px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className={`text-center mb-6 ${currentTheme.headings}`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Contact <span className="text-secondary">At</span>
        </h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-secondary text-sm">Email</span>
              <p className="text-sm sm:text-base">info@fabuilders.co.uk</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-secondary text-sm">Phone</span>
              <p className="text-sm sm:text-base">+44 7476 555002</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-secondary text-sm">Address</span>
              <p className="text-sm sm:text-base">
                Flat 2, 23 Headcorn Road, Thornton Heath, London, CR7 6JR,
                United Kingdom
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-secondary text-sm">Opening Hours</span>
              <p className="text-sm sm:text-base">
                Monday - Saturday: 9am - 5pm
              </p>
              <p className="text-sm sm:text-base">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <div
            className={`w-full h-64 sm:h-72 rounded-lg ${currentTheme.card} overflow-hidden`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.6635293291583!2d-0.0874558!3d51.4659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c467a3b499%3A0xc34b72e5a7b8e5d!2s23%20Headcorn%20Rd%2C%20London%20SE15%203ND%2C%20UK!5e0!3m2!1sen!2sus!4v1703692800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
