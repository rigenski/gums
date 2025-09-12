import React from "react";
import Image from "next/image";

// Generate array of all 36 gallery images
const exploreData = Array.from({ length: 36 }, (_, i) => (i + 1).toString());

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

export default function Explore() {
  return (
    <section
      id="gallery"
      className="relative h-auto w-full bg-[url('/app/home/explore-bg.png')] bg-cover bg-center"
    >
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-pixelify-sans mb-8 text-center text-6xl font-bold text-[#515151]">
            EXPLORE <span className="text-[#A17AF1]">OURS</span>
          </h2>
          <div className="grid w-full grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {getColumnData(1).map((item, index) => (
                  <div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[400px]"
                        : index % 3 === 1
                          ? "h-[320px]"
                          : "h-[360px]"
                    }`}
                    key={index}
                  >
                    <Image
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {getColumnData(2).map((item, index) => (
                  <div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[360px]"
                        : index % 3 === 1
                          ? "h-[400px]"
                          : "h-[320px]"
                    }`}
                    key={index}
                  >
                    <Image
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-4">
                {getColumnData(3).map((item, index) => (
                  <div
                    className={`w-full overflow-hidden rounded-lg ${
                      index % 3 === 0
                        ? "h-[320px]"
                        : index % 3 === 1
                          ? "h-[360px]"
                          : "h-[400px]"
                    }`}
                    key={index}
                  >
                    <Image
                      src={`/app/gallery/${item}.png`}
                      alt={`Gallery image ${item}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
