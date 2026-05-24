import { ImageCell, ImageItem } from "./_imageRow";

type Props = {
  images: [ImageItem, ImageItem];
};

export default function TwoUp({ images }: Props) {
  return (
    <div className="my-6 flex flex-col md:flex-row gap-6">
      {images.map((item, i) => (
        <ImageCell
          key={i}
          {...item}
          sizes="(max-width: 768px) 100vw, 465px"
        />
      ))}
    </div>
  );
}
