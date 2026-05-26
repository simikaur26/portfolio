"use client";

type Props = { resetIntro: () => void };

export default function ReturningHero({ resetIntro }: Props) {
  return (
    /*
      Height is viewport minus nav minus ~240px so the top portion of the
      WorkSection (eyebrow + card tops) peeks up from the bottom of the screen,
      inviting the scroll without hiding the hero text.
    */
    <section
      className="relative flex items-center px-16"
      style={{ height: "calc(100vh - var(--nav-height) - 240px)" }}
    >
      <div className="max-w-[930px] mx-auto w-full">
        <h1 className="text-h1">hey! i&apos;m simi,</h1>
        <h1 className="text-h1">and i make a lot of things.</h1>

        <button
          onClick={resetIntro}
          className="text-label-l3"
          style={{
            display: "block",
            marginTop: 24,
            color: "#363636",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          see full intro →
        </button>
      </div>
    </section>
  );
}
