import Image from "next/image";

export default function ProjectGallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-xl">
          <Image
            src={img}
            alt="Project Image"
            width={600}
            height={400}
            className="object-cover hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  );
}
