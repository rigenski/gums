"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, bounceIn, buttonHover } from "@/hooks/useScrollAnimation";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[url('/app/home/hero-bg.png')] bg-cover bg-bottom">
      <div className="mx-auto max-w-7xl px-4 pt-24 md:pt-38">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className=""
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-pixelify-sans mb-4 text-center text-3xl font-bold text-[#515151] md:text-6xl"
              variants={fadeInUp}
            >
              STEP INTO A WORLD
              <br /> OF{" "}
              <motion.span
                className="text-[#A17AF1]"
                variants={bounceIn}
                transition={{ delay: 0.3 }}
                whileHover={{
                  filter: "hue-rotate(90deg)",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                CHAOS
              </motion.span>
            </motion.h2>
            <motion.p
              className="font-manrope mb-8 text-center text-sm text-[#515151]/75 md:text-lg"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              An explosion of shapes, humor and imagination
              <br /> where every pixel tells a story.
            </motion.p>
            <motion.div
              className="flex flex-col items-center justify-center gap-4 md:flex-row"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link href="#gallery">
                <motion.button
                  className="border-2 border-[#E9E9E9] py-0.5 shadow-lg"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="bg-[#A17AF1] px-4 py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-white md:text-lg">
                      SHOW GALLERY
                    </span>
                  </div>
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="border-2 border-[#E9E9E9] shadow-lg"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="bg-white px-4 py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-[#515151] md:text-lg">
                      ABOUT ME
                    </span>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute -bottom-[60px] z-20 w-full md:-bottom-[120px]"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: [0, -10, 10, 0],
          scale: 1,
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          opacity: {
            delay: 0.8,
            duration: 1.2,
            ease: [0.68, -0.55, 0.265, 1.55],
          },
          y: {
            delay: 0.8,
            duration: 1.2,
            ease: [0.68, -0.55, 0.265, 1.55],
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          },
          scale: {
            delay: 0.8,
            duration: 1.2,
            ease: [0.68, -0.55, 0.265, 1.55],
          },
          rotate: {
            delay: 0.8,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          },
        }}
      >
        <div className="flex w-full justify-center">
          <Image
            src="/app/home/hero-char.png"
            alt="hero-footer"
            width={1080}
            height={1080}
            className="h-[320px] w-auto md:h-[520px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
