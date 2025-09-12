import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <section className="relative h-auto w-full bg-[url('/app/home/video-bg.png')] bg-cover bg-center">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/app/home/video-border.png"
            alt=""
            width={480}
            height={480}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
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
