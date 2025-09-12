import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <div className="border-4 border-[#A17AF1] bg-white p-2.5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <Image
                src="/logo-text.png"
                alt=""
                width={480}
                height={480}
                className="h-6 w-auto"
              />
            </Link>
            <div className="flex gap-2">
              <button className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-8 py-2">
                <div className="flex items-center justify-center">
                  <Image
                    src="/components/header/pf-icon.png"
                    alt=""
                    width={480}
                    height={480}
                    className="h-5 w-auto"
                  />
                </div>
              </button>
              <button className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-8 py-2">
                <div className="flex items-center justify-center">
                  <Image
                    src="/components/header/x-icon.png"
                    alt=""
                    width={480}
                    height={480}
                    className="h-5 w-auto"
                  />
                </div>
              </button>
              <button className="border-2 border-[#E9E9E9] py-0.5">
                <div className="bg-[#A17AF1] px-4 py-2">
                  <span className="font-pixelify-sans text-lg font-bold text-white">
                    SHOW GALLERY
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
