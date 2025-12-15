"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";

const StatCounter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

export default function Stats() {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full flex flex-col justify-evenly gap-12 px-6 mb-20 mt-10">
        {/* Section Title */}
        <div className="mb-4 px-4 sm:px-6 flex flex-col md:w-1/2 text-center md:text-left">
          {/* Small head text */}
          <p className="text-[#ff9326] mb-2">Stats</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Excellence</h2>
          <div className="w-24 h-[2px] bg-[#ff9326] mt-3 mx-auto md:mx-0 rounded-full"></div>
        </div>

        <div className="flex text-center flex-col md:flex-row items-stretch justify-between gap-8 px-6">
          {/* BOX 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-[220px] p-8 bg-[#1a1a1a] border-t-4 border-[#ff9326] rounded-xl shadow-lg bg-white/10 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transitio"
          >
            <h2 className="text-4xl font-extrabold text-[#ff9326]">
              <StatCounter from={0} to={150} duration={2} />+
            </h2>
            <p className="mt-2 font-medium">Completed Projects</p>
          </motion.div>

          {/* BOX 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-w-[220px] p-8 bg-[#1a1a1a] border-t-4 border-[#ff9326] rounded-xl shadow-lg bg-white/10 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transitio"
          >
            <h2 className="text-4xl font-extrabold text-[#ff9326]">
              <StatCounter from={0} to={10} duration={2} />+
            </h2>
            <p className="mt-2 font-medium">Years Experience</p>
          </motion.div>

          {/* BOX 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 min-w-[220px] p-8 bg-[#1a1a1a] border-t-4 border-[#ff9326] rounded-xl shadow-lg bg-white/10 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transitio"
          >
            <h2 className="text-4xl font-extrabold text-[#ff9326]">
              <StatCounter from={0} to={100} duration={2} />%
            </h2>
            <p className="mt-2 font-medium">Client Satisfaction</p>
          </motion.div>

          {/* BOX 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 min-w-[220px] p-8 bg-[#1a1a1a] border-t-4 border-[#ff9326] rounded-xl shadow-lg bg-white/10 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transitio"
          >
            <h2 className="text-4xl font-extrabold text-[#ff9326]">
              <StatCounter from={0} to={20} duration={2} />+
            </h2>
            <p className="mt-2 font-medium">Skilled Team Members</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
