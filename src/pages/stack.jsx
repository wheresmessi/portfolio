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
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg transition-all"
            initial="hidden"
            animate={controls}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            variants={{
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.2
                }
              },
              hidden: { 
                opacity: 0, 
                scale: 0.8
              },
            }}
          >
            <motion.div 
              className={`mb-4 ${item.color}`}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              {item.icon}
            </motion.div>
            <motion.p 
              className="text-gray-100 font-medium"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
