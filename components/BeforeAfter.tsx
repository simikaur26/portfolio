import { ImageCell } from "./_imageRow";

type Props = {
  beforeSrc: string;
  beforeAlt?: string;
  beforeWidth: number;
  beforeHeight: number;
  beforeCaption?: string;
  afterSrc: string;
  afterAlt?: string;
  afterWidth: number;
  afterHeight: number;
  afterCaption?: string;
};

export default function BeforeAfter({
  beforeSrc,
  beforeAlt = "",
  beforeWidth,
  beforeHeight,
  beforeCaption = "Before",
  afterSrc,
  afterAlt = "",
  afterWidth,
  afterHeight,
  afterCaption = "After",
}: Props) {
  return (
    <div className="my-6 flex flex-col md:flex-row gap-6">
      <ImageCell
        src={beforeSrc}
        alt={beforeAlt}
        width={beforeWidth}
        height={beforeHeight}
        caption={beforeCaption}
        captionStyle="label"
        sizes="(max-width: 768px) 100vw, 465px"
      />
      <ImageCell
        src={afterSrc}
        alt={afterAlt}
        width={afterWidth}
        height={afterHeight}
        caption={afterCaption}
        captionStyle="label"
        sizes="(max-width: 768px) 100vw, 465px"
      />
    </div>
  );
}
