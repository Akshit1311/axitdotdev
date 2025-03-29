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
					<Image
						alt={companyKey}
						src={`/assets/icons/companies/${company.imgName}`}
						height={70}
						width={70}
						className="rounded-lg"
					/>

					<div className="">
						<h2 className="font-medium underline ">{company.title}</h2>
						<div className="text-sm text-slate-300">{company.duration}</div>
						<div className="text-sm text-slate-300">{company.role}</div>
					</div>
				</div>

				<ul className="list-disc list-inside">
					<div className="text-sm mt-2">{company.description}</div>

					<h3 className="text-sm mt-2 font-semibold">Projects</h3>
					{company.projects.map((project) => (
						<li key={project.title} className="my-2">
							<Link
								key={project.title}
								className="text-sm underline hover:opacity-75"
								href={`/project/${project.link}`}
							>
								{project.title}

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
							</Link>

							<div className="ml-6">{project.description}</div>
						</li>
					))}
				</ul>
			</div>
		</SectionLayout>
	);
};

export default WorkExpPage;
