import React from "react";

const exploreData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function Explore() {
  return (
    <section className="relative h-auto w-full bg-[url('/app/home/explore-bg.png')] bg-cover bg-center">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-pixelify-sans mb-8 text-center text-6xl font-bold text-[#515151]">
            EXPLORE <span className="text-[#A17AF1]">OURS</span>
          </h2>
          <div className="grid w-full grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {exploreData
                  ?.slice(0, exploreData.length / 3)
                  .map((item, index) => (
                    <div
                      className="h-[360px] w-full bg-[#D9D9D9]"
                      key={index}
                    ></div>
                  ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {exploreData
                  ?.slice(exploreData.length / 3, (exploreData.length / 3) * 2)
                  .map((item, index) => (
                    <div
                      className="h-[440px] w-full bg-[#D9D9D9]"
                      key={index}
                    ></div>
                  ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {exploreData
                  ?.slice((exploreData.length / 3) * 2, exploreData.length)
                  .map((item, index) => (
                    <div
                      className="h-[280px] w-full bg-[#D9D9D9]"
                      key={index}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
