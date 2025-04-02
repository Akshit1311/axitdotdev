import React from "react";
import SectionLayout from "../_components/SectionLayout";

const Talks = () => {
	const controls = "?controls=0";
	const talks = [
		{
			title: "DePIN: Pushing Decentralization Beyond Blockchain",
			url: `https://www.youtube.com/embed/UDNOGtZUxc4?si=-VHoufZKjrqsSqDu?${controls}`,
		},
		{
			title: "🛠️ Leveraging LLMs to enhance your Audio/Video DApps",
			url: `https://www.youtube.com/embed/czHIOBzLzyc?si=ebvo9MyfvizLYrMc?${controls}`,
		},
		{
			title: "Video Use Cases on FVM",
			url: `https://www.youtube.com/embed/i7lyJACsycY?si=_tcifTuo39zLi-SX?${controls}`,
		},
		{
			title: "🛠️ Building Powerful Communication Dapps",
			url: `https://www.youtube.com/embed/3zdPrzdkZKk?si=CTenIECWfZ7wfV3n?${controls}`,
		},
		{
			title: "Guide to How 11yr olds are becoming rich via NFTs",
			url: `https://www.youtube.com/embed/plmtgZhMwUI?si=UT-fvqXleYkk_IQ3?${controls}`,
		},
		{
			title: "Hands-on NFTs",
			url: `https://www.youtube.com/embed/OD2T7419LSA?si=o56Jl_5CisxxOFFy${controls}`,
		},
	];

	return (
		<SectionLayout title="Talks & Workshops">
			<div
				className="overflow-x-auto [&::-webkit-scrollbar]:w-[2px]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
			>
				<div className="flex w-fit gap-4 pb-4">
					{talks.map((talk) => (
						<div key={talk.title} className="flex flex-col gap-2 ">
							<iframe
								height="200"
								src={`${talk.url}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="rounded-lg aspect-video"
							/>
							<div className="text-sm text-zinc-300">{talk.title}</div>
						</div>
					))}
				</div>
			</div>
		</SectionLayout>
	);
};

export default Talks;
