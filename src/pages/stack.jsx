import React, { useEffect } from "react";
import { SiFramer, SiFigma, SiReact, SiNodedotjs, SiPython } from "react-icons/si";
import { FaDatabase, FaLemon } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  { id: 1, name: "Python", icon: <SiPython size={100} />, color: "text-emerald-200" },
  { id: 2, name: "Figma", icon: <SiFigma size={100} />, color: "text-emerald-200" },
  { id: 3, name: "React", icon: <SiReact size={100} />, color: "text-emerald-200" },
  { id: 4, name: "Node.js", icon: <SiNodedotjs size={100} />, color: "text-emerald-200" },
  { id: 5, name: "SQL", icon: <FaDatabase size={100} />, color: "text-emerald-200" },
];

export const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Expertise</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-transform"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-gray-100 font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
