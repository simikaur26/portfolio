type Props = {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  href?: string;
};

export default function Button({ children, color = "#1B2D4F", textColor, href }: Props) {
  const resolvedTextColor = textColor ?? color;
  // Include both color values in the id so different textColor+color combos get unique class names.
  const id = `btn-${color.replace(/[^a-zA-Z0-9]/g, "")}-${resolvedTextColor.replace(/[^a-zA-Z0-9]/g, "")}`;

  const css = `
    .${id}-front {
      display: block;
      position: relative;
      z-index: 10;
      background-color: white;
      border: 2px solid #232323;
      border-radius: 8px;
      padding: 10px 30px;
      color: ${resolvedTextColor};
      font-size: 21.9px;
      line-height: 32.8px;
      font-weight: 400;
      text-align: center;
      cursor: pointer;
      outline: none;
      text-decoration: none;
      transition: transform 150ms ease, background-color 150ms ease, color 150ms ease;
    }
    .${id}-front:hover,
    .${id}-front:focus-visible {
      transform: translate(7px, 7px);
      background-color: ${color};
      color: white;
    }
    .${id}-offset {
      background-color: ${color};
    }
  `;

  return (
    <>
      <style>{css}</style>
      {/*
        pb-[7px] pr-[7px] reserves space so the wrapper is sized to contain
        the full visual stack (button + 7px offset) without overflow.
      */}
      <div className="relative inline-block pb-[7px] pr-[7px]">
        {/* Offset block — hard solid color, 7px down-right of the front face */}
        <div
          className={`${id}-offset absolute top-[7px] left-[7px] right-0 bottom-0 rounded-[8px]`}
          aria-hidden="true"
        />
        {href ? (
          <a href={href} className={`${id}-front`}>
            {children}
          </a>
        ) : (
          <button type="button" className={`${id}-front`}>
            {children}
          </button>
        )}
      </div>
    </>
  );
}
