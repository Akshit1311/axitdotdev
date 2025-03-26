import React from "react";
import SectionLayout from "../_components/SectionLayout";
import TechPill from "../_components/TechStack/TechPill";

const TechStack = () => {
	return (
		<SectionLayout title="Tech Stack">
			<div className="flex gap-2">
				<TechPill tech="rust" />
				<TechPill tech="typescript" />
				<TechPill tech="next" />
			</div>
		</SectionLayout>
	);
};

export default TechStack;
