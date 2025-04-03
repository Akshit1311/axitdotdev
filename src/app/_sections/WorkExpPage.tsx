"use client";

import React from "react";
import SectionLayout from "../_components/SectionLayout";
import { COMPANIES, type TCompany } from "../_constants/projects";
import Link from "next/link";
import Image from "next/image";

type Props = {
	companyKey: TCompany;
};

const WorkExpPage = ({ companyKey }: Props) => {
	const company = COMPANIES[companyKey];
	console.log({ company, companyKey });

	return (
		<SectionLayout title="Experience">
			<div key={companyKey} className="flex flex-col gap-4">
				<div className="min-w-16 flex gap-2 ">
					<div>
						<Image
							alt={companyKey}
							src={`/assets/icons/companies/${company.imgName}`}
							height={70}
							width={70}
							className="rounded-lg"
						/>
					</div>

					<div className="">
						<h2 className="font-medium underline ">{company.title}</h2>
						<div className="text-sm text-slate-300">{company.duration}</div>
						<div className="text-sm text-slate-300">{company.role}</div>
					</div>
				</div>

				{company.projects[0] && (
					<div className="overflow-hidden">
						<h3 className="text-sm mt-4 font-semibold mb-2">Projects</h3>
						<div
							className="overflow-x-auto py-4 [&::-webkit-scrollbar]:w-[2px]
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
						>
							<div className="flex gap-4 w-fit">
								{company.projects.map((project) => (
									<div
										key={project.title}
										className="bg-zinc-900 p-3 rounded-lg min-w-[350px] max-w-[400px]"
									>
										<div className="group relative w-[300px] md:w-auto">
											<Image
												src={`/assets/projects/${project.img}`}
												width={508}
												height={343}
												alt={project.title}
												className="rounded-lg"
											/>
											<div className="bg-black/30 rounded-lg backdrop-blur-lg h-full w-full absolute inset-0 group-hover:grid hidden place-items-center">
												{project.link ? (
													<button
														type="button"
														onClick={() => window.open(project.link)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="size-6"
														>
															<title>arrow-top-right-on-square</title>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
															/>
														</svg>
													</button>
												) : (
													"No link available"
												)}
											</div>
										</div>

										<div className="text-sm my-2">{project.title}</div>

										<div className="flex flex-wrap items-center gap-2">
											{project.tech.map((tech) => (
												<Image
													title={tech}
													key={tech}
													alt={tech}
													height={23}
													width={23}
													src={`/assets/icons/tech/${tech}.png`}
													className="cursor-pointer rounded-sm "
												/>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
				<div className="text-sm ">{company.description}</div>
			</div>
		</SectionLayout>
	);
};

export default WorkExpPage;
