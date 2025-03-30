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

					<h3 className="text-sm mt-4 font-semibold mb-2">Projects</h3>

					<div className="md:grid grid-cols-3 gap-4">
						{company.projects.map((project) => (
							<div key={project.title} className="bg-zinc-900 p-3 rounded-lg">
								<Image
									src={`/assets/projects/${project.img}`}
									width={5088}
									height={3434}
									alt={project.title}
									className="rounded-lg"
								/>

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
				</ul>
			</div>
		</SectionLayout>
	);
};

export default WorkExpPage;
