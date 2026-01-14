import useEmblaCarousel from "embla-carousel-react";

export default function GalleryCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex-[0_0_80%] h-48 bg-sage rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
