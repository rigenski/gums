"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/hooks/useScrollAnimation";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
    >
      <div className="mx-auto max-w-5xl px-2 pt-2 md:pt-8">
        <motion.div
          className="border-2 border-[#A17AF1] bg-white p-2 md:border-4 md:p-2.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/logo-text.png"
                    alt=""
                    width={480}
                    height={480}
                    className="h-4 w-auto md:h-6"
                  />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              className="flex gap-1 md:gap-2"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <Link
                href={process.env.NEXT_PUBLIC_PF_URL || "/"}
                target="_blank"
              >
                <motion.button
                  className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-4 py-1.5 md:px-8 md:py-2"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/components/header/pf-icon.png"
                      alt=""
                      width={480}
                      height={480}
                      className="h-4 w-auto md:h-5"
                    />
                  </div>
                </motion.button>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_X_URL || "/"} target="_blank">
                <motion.button
                  className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-4 py-1.5 md:px-8 md:py-2"
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/components/header/x-icon.png"
                      alt=""
                      width={480}
                      height={480}
                      className="h-4 w-auto md:h-5"
                    />
                  </div>
                </motion.button>
              </Link>
              <Link href="#gallery">
                <motion.button
                  className="border-2 border-[#E9E9E9] py-0.5"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-[#A17AF1] px-4 py-1 md:py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-white md:text-lg">
                      GALLERY
                    </span>
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
