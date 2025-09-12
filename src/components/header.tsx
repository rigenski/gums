"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-5xl px-2 pt-2 md:pt-8">
        <div className="border-2 border-[#A17AF1] bg-white p-2 md:border-4 md:p-2.5">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <Link href="/">
              <Image
                src="/logo-text.png"
                alt=""
                width={480}
                height={480}
                className="h-4 w-auto md:h-6"
              />
            </Link>
            <div className="flex gap-1 md:gap-2">
              <Link
                href={process.env.NEXT_PUBLIC_PF_URL || "/"}
                target="_blank"
              >
                <button className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-4 py-1.5 md:px-8 md:py-2">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/components/header/pf-icon.png"
                      alt=""
                      width={480}
                      height={480}
                      className="h-4 w-auto md:h-5"
                    />
                  </div>
                </button>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_X_URL || "/"} target="_blank">
                <button className="min-h-full bg-[url('/components/header/btn-bg.png')] bg-cover bg-center px-4 py-1.5 md:px-8 md:py-2">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/components/header/x-icon.png"
                      alt=""
                      width={480}
                      height={480}
                      className="h-4 w-auto md:h-5"
                    />
                  </div>
                </button>
              </Link>
              <Link href="#gallery">
                <button className="border-2 border-[#E9E9E9] py-0.5">
                  <div className="bg-[#A17AF1] px-4 py-1 md:py-2">
                    <span className="font-pixelify-sans text-sm font-bold text-white md:text-lg">
                      GALLERY
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
