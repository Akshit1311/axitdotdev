import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { COMPANIES } from "../_constants/projects";
import Image from "next/image";
import Link from "next/link";

const WorkExp = () => {
	return (
		<SectionLayout title="Experience">
			<div className="md:flex gap-4">
				{Object.entries(COMPANIES).map(([key, company]) => (
					<Link
						href={`/company/${key}`}
						key={key}
						className="flex flex-col mb-4 gap-4 hover:opacity-75"
					>
						<div className=" flex gap-2 ">
							<div className="min-w-16">
								<Image
									alt="huddle01"
									src={`/assets/icons/companies/${company.imgName}`}
									height={70}
									width={70}
									className="rounded-lg"
								/>
							</div>

							<div className="">
								<div className="font-medium underline  flex items-center">
									{company.title}{" "}
									<svg
										className="inline-block h-3 w-3 ml-1"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="text-sm text-slate-300">{company.duration}</div>
								<div className="text-sm text-slate-300">{company.role}</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</SectionLayout>
	);
};

export default WorkExp;
