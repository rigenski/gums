import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[url('/app/home/hero-bg.png')] bg-cover bg-bottom">
      <div className="mx-auto max-w-7xl px-4 pt-48">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <h2 className="font-pixelify-sans mb-4 text-center text-6xl font-bold text-[#515151]">
              STEP INTO A WORLD OF <br />
              <span className="text-[#A17AF1]">CHAOS COLOUR</span>
            </h2>
            <p className="font-manrope mb-8 text-center text-lg text-[#515151]/75">
              An explosion of shapes, humour, and imagination
              <br /> — where every pixel tells a story.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="border-2 border-[#E9E9E9] py-0.5">
                <div className="bg-[#A17AF1] px-4 py-2">
                  <span className="font-pixelify-sans text-lg font-bold text-white">
                    SHOW GALLERY
                  </span>
                </div>
              </button>
              <button className="border-2 border-[#E9E9E9]">
                <div className="bg-white px-4 py-2">
                  <span className="font-pixelify-sans text-lg font-bold text-[#515151]">
                    ABOUT THE ARTIST
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[120px] left-1/2 z-20 -translate-x-1/2">
        <Image
          src="/app/home/hero-char.png"
          alt="hero-footer"
          width={1080}
          height={1080}
          className="h-[520px] w-auto"
        />
      </div>
    </section>
  );
}
