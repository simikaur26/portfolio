type Item = {
  icon: string;
  text: string;
};

type Group = {
  heading: string;
  items: Item[];
};

type Props = {
  data: Group[];
};

export default function GroupedPoints({ data }: Props) {
  return (
    <div className="flex flex-col" style={{ gap: "40px" }}>
      {data.map((group) => (
        <div key={group.heading}>
          <p className="text-label-l1-medium" style={{ color: "#232323" }}>
            {group.heading}
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 mt-4"
            style={{ gap: "16px" }}
          >
            {group.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  style={{ fontSize: "36px", lineHeight: 1, flexShrink: 0 }}
                >
                  {item.icon}
                </span>
                <p className="text-body" style={{ color: "#232323" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
