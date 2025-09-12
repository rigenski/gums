import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <section className="relative h-auto w-full bg-[url('/app/home/video-bg.png')] bg-cover bg-center">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Image
            src="/app/home/video-border.png"
            alt=""
            width={480}
            height={480}
            className="relative z-10 h-auto w-full scale-[1.03]"
          />
          <div className="absolute z-0">
            <video
              src="/app/home/video.M4V"
              autoPlay
              muted
              loop
              className="h-auto w-full"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full">
        <Image
          src="/app/home/video-illust.png"
          alt="hero-footer"
          width={480}
          height={480}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
