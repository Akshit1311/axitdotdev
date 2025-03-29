import Image from "next/image";
import React from "react";

type Props = {
	tech: string;
};

const TechPill = ({ tech }: Props) => {
	return (
		<button
			type="button"
			className="hover:opacity-90 flex items-center  bg-zinc-800 rounded-full w-fit p-1 border-r-[3px] hover:border-r-zinc-800 hover:border-b-zinc-800 border-r-zinc-700/50 border-b-[3px] border-b-zinc-700/70 -translate-x-[3px] -translate-y-[3px] hover:-translate-x-0 hover:-translate-y-0"
		>
			<span className="m-1 bg-zinc-900 rounded-full">
				<Image
					src={`/assets/icons/tech/${tech}.png`}
					alt={"rust"}
					width={25}
					height={25}
					className="rounded-full min-w-6"
				/>
			</span>
			<span className="pr-2 text-sm mx-1 capitalize">{tech}</span>
		</button>
	);
};

export default TechPill;
