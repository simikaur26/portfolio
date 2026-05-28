const DEFAULT_TOOLS = [
  { name: "Figma",       src: "/figma.svg" },
  { name: "ChatGPT",     src: "/chatgpt.svg" },
  { name: "Claude Code", src: "/claude.svg" },
  { name: "Granola",     src: "/granola.svg" },
];

type Tool = { name: string; src: string };

type Props = {
  timeline: string;
  role: string;
  team: string;
  overview: string;
  tools?: Tool[];
};

export default function ContextBlock({ timeline, role, team, overview, tools }: Props) {
  const TOOLS = tools ?? DEFAULT_TOOLS;
  return (
    <div>
      <p className="text-eyebrow text-secondary">Context</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-3">
        <div>
          <p className="text-h6">Timeline</p>
          <p className="text-body text-primary mt-2">{timeline}</p>
        </div>
        <div>
          <p className="text-h6">Role</p>
          <p className="text-body text-primary mt-2">{role}</p>
        </div>
        <div>
          <p className="text-h6">Team</p>
          <p className="text-body text-primary mt-2">{team}</p>
        </div>
        <div>
          <p className="text-h6">Tech Stack</p>
          <div className="flex flex-wrap gap-[10px] mt-2">
            {TOOLS.map(({ name, src }) => (
              <div key={name} className="group relative">
                <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#f4f3ef] group-hover:bg-[#e8e7e2] transition-all duration-200 ease-out group-hover:-translate-y-0.5">
                  <img src={src} alt={name} width={22} height={22} />
                </div>
                {/* Tooltip */}
                <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-label-l3 bg-primary text-bg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h5 className="text-h5 mt-14">Overview</h5>
      <p className="text-body text-primary mt-4">{overview}</p>
    </div>
  );
}
