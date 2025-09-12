import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[url('/app/home/hero-bg.png')] bg-cover bg-bottom">
      <div className="mx-auto max-w-7xl px-4 pt-24 md:pt-38">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <h2 className="font-pixelify-sans mb-4 text-center text-3xl font-bold text-[#515151] md:text-6xl">
              STEP INTO A WORLD OF <br />
              <span className="text-[#A17AF1]">CHAOS COLOUR</span>
            </h2>
            <p className="font-manrope mb-8 text-center text-sm text-[#515151]/75 md:text-lg">
              An explosion of shapes, humour, and imagination
              <br /> — where every pixel tells a story.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="#gallery">
                <button className="border-2 border-[#E9E9E9] py-0.5 shadow-lg">
                  <div className="bg-[#A17AF1] px-4 py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-white md:text-lg">
                      SHOW GALLERY
                    </span>
                  </div>
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-[#E9E9E9] shadow-lg">
                  <div className="bg-white px-4 py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-[#515151] md:text-lg">
                      ABOUT THE ARTIST
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[60px] z-20 w-full md:-bottom-[120px]">
        <div className="flex w-full justify-center">
          <Image
            src="/app/home/hero-char.png"
            alt="hero-footer"
            width={1080}
            height={1080}
            className="h-[320px] w-auto md:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
