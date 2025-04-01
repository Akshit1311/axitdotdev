import React from "react";
import SectionLayout from "../_components/SectionLayout";
import TechPill from "../_components/TechStack/TechPill";

const TechStack = () => {
	const techStack = [
		// "rust",
		"webrtc",
		"solidity",
		"typescript",
		"postgres",
		"next",
		"tailwind",
	];

	return (
		<SectionLayout title="Tech Stack">
			<div className="flex gap-2 flex-wrap">
				{techStack.map((tech) => (
					<TechPill key={tech} tech={tech} />
				))}
			</div>
		</SectionLayout>
	);
};

export default TechStack;
