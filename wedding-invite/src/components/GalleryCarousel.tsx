import useEmblaCarousel from "embla-carousel-react";
import { gallery1, gallery2, gallery3, gallery4, gallery5,gallery6 } from "../assets/images";
import ImageBox from "./ImageBox";

export default function GalleryCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-4">
        {[gallery1, gallery2, gallery3,gallery4,gallery5,gallery6].map((img, i) => (
          <div
            key={i}
            className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
          >
            <ImageBox src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
