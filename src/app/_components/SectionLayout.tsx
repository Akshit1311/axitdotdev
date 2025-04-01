import type React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

const SectionLayout = ({ title, children }: Props) => {
	return (
		<div className="mb-12 w-screen md:w-auto px-4">
			<div className="mb-4 text-xl font-medium">{title}</div>
			{children}
		</div>
	);
};

export default SectionLayout;
