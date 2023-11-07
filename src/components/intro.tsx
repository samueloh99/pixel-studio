"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Mail, Repeat2, Zap } from "lucide-react";

export function Intro() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
    hidden: { opacity: 0, translateY: 50 }, // adjust the translateY value as needed
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="container flex flex-col justify-center items-center h-full py-[100px] gap-10"
    >
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">
          Elevating User Experience Through Innovative Design & Development
        </h1>
        <p className="font-normal text-sm w-3/4">
          Where Vision Meets Precision: Crafting Your Digital Presence with
          Expertise
        </p>
      </div>
      <div className="flex justify-between items-center text-center w-3/5">
        <div className="flex flex-col justify-center items-center w-1/3 gap-3">
          <Mail size={40} />
          <p className="text-sm">
            Subscribe and request many design as you'd like.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 gap-3">
          <Zap size={40} />
          <p className="text-sm">
            Receive your design in few days. Monday to Friday.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 gap-3">
          <Repeat2 size={40} />
          <p className="text-sm">
            We will not finish the design untill you are 100% satisfied.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
