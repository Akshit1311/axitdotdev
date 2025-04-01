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
	const otherSkills = ["claude", "gpt", "aws", "python", "cloudflare", "move"];

	return (
		<SectionLayout title="Tech Stack">
			<div className="mb-4">Area of expertise: </div>

			<div className="flex gap-2 flex-wrap">
				{techStack.map((tech) => (
					<TechPill key={tech} tech={tech} />
				))}
			</div>
			<div className="my-4">Other Skills & Tech: </div>
			<div className="flex gap-2 flex-wrap">
				{otherSkills.map((tech) => (
					<TechPill key={tech} tech={tech} />
				))}
			</div>
		</SectionLayout>
	);
};

export default TechStack;
