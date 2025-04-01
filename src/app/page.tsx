import { HydrateClient } from "~/trpc/server";
import Navbar from "./_components/Navbar";
import Image from "next/image";
import Socials from "./_sections/Socials";
import Talks from "./_sections/Talks";
import TechStack from "./_sections/TechStack";
import WorkExp from "./_sections/WorkExp";
export default async function Home() {
	// const hello = await api.post.hello({ text: "from tRPC" });

	// void api.post.getLatest.prefetch();

	return (
		<HydrateClient>
			<div className="flex items-center gap-3 px-4 mt-6 pb-12">
				<div className="relative w-16 h-16 group">
					{/* Front Image */}
					<Image
						src="/assets/images/ghibli.png"
						alt="Ghibli"
						width={64}
						height={64}
						className="rounded-lg absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
					/>
					{/* Back Image */}
					<Image
						src="/assets/images/axit_devcon.jpg"
						alt="Axit"
						width={64}
						height={64}
						className="rounded-lg absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
					/>
				</div>

				<div className="flex flex-col justify-between">
					<div className="text-xl">Akshit Gupta</div>
					<div className="text-md text-zinc-400">Full Stack Engineer</div>
				</div>
			</div>

			<Socials />

			<TechStack />

			<WorkExp />

			<Talks />
		</HydrateClient>
	);
}
