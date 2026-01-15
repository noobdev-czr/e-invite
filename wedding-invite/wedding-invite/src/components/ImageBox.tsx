// interface Props {
//   src?: string;
//   alt?: string;
// }

// export default function ImageBox({ src, alt }: Props) {
//   return (
//     <div className="w-full aspect-[4/3] bg-sage rounded-xl overflow-hidden">
//       {src && (
//         <img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover"
//         />
//       )}
//     </div>
//   );
// }

interface Props {
  src: string;
  onClick?: () => void;
}

export default function ImageBox({ src, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-full aspect-square rounded-xl bg-cover bg-center cursor-pointer hover:opacity-90 transition"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

