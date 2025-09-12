import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Container() {
  return (
    <main>
      <section className="h-auto min-h-screen w-full bg-[url('/app/about/bottom-bg.png')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-24">
          <div className="h-[320px] w-full rounded-4xl bg-[url('/app/about/top-bg.png')] bg-cover bg-center p-8">
            <Link href="/">
              <button className="flex items-center justify-center gap-4">
                <Image
                  src="/app/about/back-icon.png"
                  alt=""
                  width={480}
                  height={480}
                  className="h-8 w-auto"
                />
                <span className="font-pixelify-sans text-2xl font-bold text-[#515151]">
                  ARTIST <span className="text-[#A17AF1]">PROFILE</span>
                </span>
              </button>
            </Link>
          </div>
          <div className="-mt-32 mb-16 flex flex-col items-center justify-center gap-4">
            <Image
              src="/app/about/artist-char.png"
              alt=""
              width={480}
              height={480}
              className="mb-4 h-58 w-auto"
            />
            <h1 className="font-pixelify-sans mb-4 text-5xl font-bold text-[#515151]">
              Kevin <span className="text-[#8772E5]">Varian</span>
            </h1>
            <div className="relative">
              <div className="bg-[#8772E5] px-4 py-2">
                <span className="font-pixelify-sans text-lg font-bold text-white">
                  ARTIST
                </span>
              </div>
              <div className="absolute top-0 left-0">
                <div className="h-4 w-2 bg-[#F5F6F5]"></div>
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="h-4 w-2 bg-[#F5F6F5]"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8">
            <h4 className="font-pixelify-sans mb-4 text-4xl font-normal text-[#A17AF1]">
              ABOUT KEVIN
            </h4>
            <p className="font-pixelify-sans text-lg text-[#353232]">
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
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
