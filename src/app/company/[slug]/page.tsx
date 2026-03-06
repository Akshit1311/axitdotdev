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
      title: "Huddle01 - Engineering Lead at People-Powered Communication",
      description:
        "Akshit Gupta's experience as Engineering Lead at Huddle01, building real-time communication infrastructure with WebRTC and decentralized tech.",
      openGraph: {
        title: "Huddle01 - Engineering Lead at People-Powered Communication",
        description:
          "Akshit Gupta's experience as Engineering Lead at Huddle01, building real-time communication infrastructure with WebRTC and decentralized tech.",
        images: ["/assets/og/huddle01-og.png"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Huddle01 - Engineering Lead at People-Powered Communication",
        description:
          "Akshit Gupta's experience as Engineering Lead at Huddle01, building real-time communication infrastructure with WebRTC and decentralized tech.",
        images: ["/assets/og/huddle01-og.png"],
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
