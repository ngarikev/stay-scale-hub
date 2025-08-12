import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ImageGridCarousel({ images }: { images: string[] }) {
  // These are the images for the carousel (skip the first 2 because:
  // [0] = main image, [1] = the fixed image in first column of the right grid)
  const carouselImages = images.slice(2);

  // Group into chunks of 4 (for 2x2 grid per slide)
  const chunkedImages: string[][] = [];
  for (let i = 0; i < carouselImages.length; i += 4) {
    chunkedImages.push(carouselImages.slice(i, i + 4));
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {chunkedImages.map((group, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 gap-4">
            {group.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Property view ${i * 4 + idx + 3}`}
                className="w-full h-44 lg:h-60 object-cover rounded-2xl"
              />
            ))}
            {/* Fill empty spots if less than 4 images in last slide */}
            {group.length < 4 &&
              Array.from({ length: 4 - group.length }).map((_, idx) => (
                <div
                  key={`placeholder-${idx}`}
                  className="w-full h-44 lg:h-60 rounded-2xl bg-gray-100"
                />
              ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageGridCarousel;
