import type React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const SectionLayout = ({ title, children }: Props) => {
  return (
    <div className="my-8">
      <div className="mb-4">{title}</div>
      {children}
    </div>
  );
};

export default SectionLayout;
