import BeforeAfter from "./BeforeAfter";

type Props = {
  number: number | string;
  heading: string;
  beforeSrc?: string;
  beforeAlt?: string;
  beforeWidth?: number;
  beforeHeight?: number;
  beforeCaption?: string;
  afterSrc?: string;
  afterAlt?: string;
  afterWidth?: number;
  afterHeight?: number;
  afterCaption?: string;
};

export default function RefinementBlock({
  number,
  heading,
  beforeSrc,
  beforeAlt,
  beforeWidth,
  beforeHeight,
  beforeCaption,
  afterSrc,
  afterAlt,
  afterWidth,
  afterHeight,
  afterCaption,
}: Props) {
  const hasImages =
    beforeSrc && afterSrc && beforeWidth && beforeHeight && afterWidth && afterHeight;

  return (
    <div className="my-10">
      {/* Number + heading row — number shrinks on mobile, heading wraps */}
      <div className="flex items-center gap-5">
        <span
          className="shrink-0 opacity-50 leading-[1] font-normal text-[40px] md:text-[56px]"
          style={{ color: "var(--color-navy)" }}
        >
          {number}
        </span>
        <p className="text-body text-navy">{heading}</p>
      </div>

      {/* Reuses the existing BeforeAfter component — only rendered when image props are provided */}
      {hasImages && (
        <BeforeAfter
          beforeSrc={beforeSrc}
          beforeAlt={beforeAlt}
          beforeWidth={beforeWidth}
          beforeHeight={beforeHeight}
          beforeCaption={beforeCaption}
          afterSrc={afterSrc}
          afterAlt={afterAlt}
          afterWidth={afterWidth}
          afterHeight={afterHeight}
          afterCaption={afterCaption}
        />
      )}
    </div>
  );
}
