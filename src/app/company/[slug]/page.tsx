import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { COMPANIES, type TCompany } from "~/app/_constants/projects";
import WorkExpPage from "~/app/_sections/WorkExpPage";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;

	if (slug === "huddle") {
		return {
			openGraph: {
				images: ["/assets/og/huddle01.png"],
			},
		};
	}

	return {};
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	if (!Object.keys(COMPANIES).includes(slug)) {
		return redirect("/not-found");
	}

	console.log({ slug });

	return (
		<div className="mx-auto">
			<WorkExpPage companyKey={slug as TCompany} />
		</div>
	);
}

export async function generateStaticParams() {
	const paths = Object.keys(COMPANIES).map((company) => ({
		slug: company,
	}));

	return paths;
}
