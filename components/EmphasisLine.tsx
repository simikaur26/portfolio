type Props = {
  children: React.ReactNode;
};

export default function EmphasisLine({ children }: Props) {
  return (
    <div className="my-6 mx-[50px]">
      <hr className="border-t border-border" />
      <p className="text-body font-normal text-secondary py-5 px-5 text-center">{children}</p>
      <hr className="border-t border-border" />
    </div>
  );
}
