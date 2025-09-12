"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Generate array of all 36 gallery images
const exploreData = Array.from({ length: 36 }, (_, i) => (i + 1).toString());

// Lazy Image Component
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          priority={false}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      )}
    </div>
  );
};

// Better distribution for visual balance
const getColumnData = (column: number) => {
  switch (column) {
    case 1:
      // First column: 12 images (1-12)
      return exploreData.slice(0, 12);
    case 2:
      // Second column: 12 images (13-24)
      return exploreData.slice(12, 24);
    case 3:
      // Third column: 11 images (25-36)
      return exploreData.slice(24, 36);
    default:
      return [];
  }
};

// Art-themed animation variants for gallery
const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -15,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
  },
};

const accentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -20,
    filter: "hue-rotate(180deg)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "hue-rotate(0deg)",
  },
};

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const galleryItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Explore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [visibleImages, setVisibleImages] = useState(9); // Mulai dengan 9 gambar (3 per kolom)

  // Preload images untuk performa yang lebih baik
  useEffect(() => {
    const preloadImages = () => {
      const firstImages = exploreData.slice(0, 9);
      firstImages.forEach((item) => {
        const img = new window.Image();
        img.src = `/app/gallery/${item}.png`;
        img.loading = "eager";
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Throttle scroll event
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Load lebih banyak gambar saat user scroll ke bawah
        if (scrollPosition + windowHeight > documentHeight * 0.8) {
          setVisibleImages((prev) => Math.min(prev + 6, exploreData.length));
        }
      }, 100); // Throttle to 100ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Filter data berdasarkan visible images
  const getColumnDataLimited = (column: number) => {
    const allData = getColumnData(column);
    const itemsPerColumn = Math.ceil(visibleImages / 3);
    return allData.slice(0, Math.min(itemsPerColumn, allData.length));
  };

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative h-auto w-full overflow-hidden bg-[url('/app/home/explore-bg.png')] bg-cover bg-center"
    >
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:pt-40 md:pb-24">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="font-pixelify-sans mb-8 text-center text-3xl font-bold text-[#515151] md:text-6xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            EXPLORE{" "}
            <motion.span
              className="text-[#A17AF1]"
              variants={accentVariants}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
              whileHover={{
                scale: 1.1,
                filter: "hue-rotate(45deg)",
                transition: { duration: 0.3 },
              }}
            >
              OURS
            </motion.span>
          </motion.h2>

          <motion.div
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
            variants={galleryContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Column 1 */}
            <motion.div
              className="col-span-1"
              variants={columnVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4">
                {getColumnDataLimited(1).map((item, index) => (
                  <motion.div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[200px] md:h-[400px]"
                        : index % 3 === 1
                          ? "h-[160px] md:h-[320px]"
                          : "h-[180px] md:h-[360px]"
                    }`}
                    key={index}
                    variants={galleryItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <LazyImage
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      className="h-full w-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              className="col-span-1"
              variants={columnVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4">
                {getColumnDataLimited(2).map((item, index) => (
                  <motion.div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[180px] md:h-[360px]"
                        : index % 3 === 1
                          ? "h-[200px] md:h-[400px]"
                          : "h-[160px] md:h-[320px]"
                    }`}
                    key={index}
                    variants={galleryItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <LazyImage
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      className="h-full w-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              className="col-span-1"
              variants={columnVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4">
                {getColumnDataLimited(3).map((item, index) => (
                  <motion.div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[160px] md:h-[320px]"
                        : index % 3 === 1
                          ? "h-[180px] md:h-[360px]"
                          : "h-[200px] md:h-[400px]"
                    }`}
                    key={index}
                    variants={galleryItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <LazyImage
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      className="h-full w-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
