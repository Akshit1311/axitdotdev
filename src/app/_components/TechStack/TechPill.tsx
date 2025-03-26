import Image from "next/image";
import React from "react";

type Props = {
	tech: string;
};

const TechPill = ({ tech }: Props) => {
	return (
		<button
			type="button"
			className="flex items-center gap-1 bg-zinc-800 rounded-full w-fit p-1 border-r-2 hover:border-r-zinc-800 hover:border-b-zinc-800 border-r-zinc-700 border-b-2 border-b-zinc-700 -translate-x-[2px] -translate-y-[2px] hover:-translate-x-0 hover:-translate-y-0"
		>
			<span className="p-1 bg-zinc-900 rounded-full">
				<Image
					src={`/assets/icons/${tech}.png`}
					alt={"rust"}
					width={25}
					height={25}
					className="rounded-full"
				/>
			</span>
			<span className="pr-2 text-sm mx-1 capitalize">{tech}</span>
		</button>
	);
};

export default TechPill;
