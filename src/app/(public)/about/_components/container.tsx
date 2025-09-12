"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  textReveal,
} from "@/hooks/useScrollAnimation";

export default function Container() {
  return (
    <main>
      <section className="h-auto min-h-screen w-full overflow-hidden bg-[url('/app/about/bottom-bg.png')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:pb-24">
          <motion.div
            className="h-[200px] w-full rounded-2xl bg-[url('/app/about/top-bg.png')] bg-cover bg-center p-4 md:h-[320px] md:rounded-4xl md:p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link href="/">
              <motion.button
                className="flex items-center justify-center gap-2 md:gap-4"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/app/about/back-icon.png"
                  alt=""
                  width={480}
                  height={480}
                  className="h-6 w-auto md:h-8"
                />
                <span className="font-pixelify-sans text-lg font-bold text-[#515151] md:text-2xl">
                  ARTIST <span className="text-[#A17AF1]">PROFILE</span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            className="-mt-16 mb-8 flex flex-col items-center justify-center gap-4 md:-mt-32 md:mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              variants={slideInLeft}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/app/about/artist-char.png"
                alt=""
                width={480}
                height={480}
                className="mb-4 h-32 w-auto md:h-58"
              />
            </motion.div>
            <motion.h1
              className="font-pixelify-sans mb-4 text-3xl font-bold text-[#515151] md:text-5xl"
              variants={textReveal}
              transition={{ delay: 0.4 }}
            >
              Kevin{" "}
              <motion.span
                className="text-[#8772E5]"
                variants={textReveal}
                transition={{ delay: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  filter: "hue-rotate(45deg)",
                  transition: { duration: 0.3 },
                }}
              >
                Varian
              </motion.span>
            </motion.h1>
            <motion.div
              className="relative"
              variants={slideInRight}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.1,
                rotate: -2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-[#8772E5] px-4 py-2">
                <span className="font-pixelify-sans text-sm font-bold text-white md:text-lg">
                  ARTIST
                </span>
              </div>
              <div className="absolute top-0 left-0">
                <div className="h-4 w-2 bg-[#F5F6F5]"></div>
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="h-4 w-2 bg-[#F5F6F5]"></div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-white p-4 md:p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.0 }}
          >
            <motion.h4
              className="font-pixelify-sans mb-4 text-2xl font-normal text-[#A17AF1] md:text-4xl"
              variants={textReveal}
              transition={{ delay: 1.2 }}
            >
              ABOUT KEVIN
            </motion.h4>
            <motion.p
              className="font-pixelify-sans text-sm text-[#353232] md:text-lg"
              variants={textReveal}
              transition={{ delay: 1.4 }}
            >
              I&apos;VE BEEN DRAWING FOR AS LONG AS I CAN REMEMBER. I LOVED
              MAKING CUTE BUT WEIRD CREATURES, INSPIRED BY ALL THE 90&apos;S AND
              EARLY 2000&apos;S CARTOONS I GREW UP WITH ON CARTOON NETWORK,
              NICKELODEON, AND ADULT SWIM. LATER ON IN COLLEGE, I DISCOVERED
              ARTISTS LIKE TAKASHI MURAKAMI, WHO OPENED UP A WHOLE NEW UNIVERSE
              OF STYLES AND MOODS I HADN&apos;T SEEN BEFORE. AT THE SAME TIME, I
              GOT REALLY INTO DRAWING HUMAN FIGURES, INSPIRED BY YOSHITAKA AMANO
              AND KATSUHIRO OTOMO.
              <br />
              <br />
              FOR A WHILE, I COULDN&apos;T DECIDE WHICH STYLE I WANTED TO STICK
              WITH. I WAS IN LOVE WITH TOO MANY DIFFERENT REFERENCES. I ENJOYED
              CREATING STRANGE LITTLE CREATURES, BUT I ALSO LOVED THE DRAMA AND
              SERIOUSNESS OF HUMAN FIGURES. EVENTUALLY, I FIGURED OUT I
              DIDN&apos;T HAVE TO CHOOSE. INSTEAD, I STARTED MIXING THE TWO
              WORLDS TOGETHER: BLENDING THE MOOD OF MY HUMAN FIGURES WITH THE
              PLAYFUL WEIRDNESS OF THE CREATURES I CALL GUMS. THAT MIX SLOWLY
              BECAME THE UNIQUE CHARACTER OF MY WORK.
              <br />
              <br />
              MY ART BLENDS LOGIC AND IMAGINATION, BRINGING BACK THE PLAYFUL
              CREATIVITY WE OFTEN LOSE AS WE GROW OLDER. I LIKE WHEN MY WORK
              CONNECTS WITH PEOPLE IN UNEXPECTED WAYS. FOR ME, ART DOESN&apos;T
              ALWAYS HAVE TO BE HEAVY OR SERIOUS. SOMETIMES IT&apos;S JUST ABOUT
              CREATING AN ESCAPE: STRANGE, FUN, AND THOUGHTFUL ALL AT ONCE.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
