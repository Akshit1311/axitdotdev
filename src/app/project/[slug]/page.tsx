import { redirect } from "next/navigation";
import { PROJECTS } from "~/app/_constants/projects";
import WorkExpPage from "~/app/_sections/WorkExpPage";

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	if (!Object.keys(PROJECTS).includes(slug)) {
		return redirect("/not-found");
	}

	return <div className="max-w-[800px] min-w-[600px]  mx-auto">{slug}</div>;
}
