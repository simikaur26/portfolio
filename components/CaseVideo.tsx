type Props = {
  src: string;
  width?: number;
};

export default function CaseVideo({ src, width = 550 }: Props) {
  return (
    <div className="my-6 flex justify-center">
      <video
        src={src}
        autoPlay
        muted
        loop
        controls
        playsInline
        style={{ width: `${width}px`, maxWidth: "100%" }}
      />
    </div>
  );
}
