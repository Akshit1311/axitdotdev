import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/Navbar";
import Image from "next/image";
import Socials from "./_sections/Socials";
import Talks from "./_sections/Talks";
import TechStack from "./_sections/TechStack";
export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC" });

	void api.post.getLatest.prefetch();

	return (
		<HydrateClient>
			<main className="flex min-h-screen  mx-auto flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-[#1a1a1a] text-white">
				{/* <Navbar /> */}

				<section className="max-w-[800px] min-w-[600px]">
					<div className="flex items-center gap-3 ">
						<div>
							<Image
								src="/assets/images/axit_devcon.jpg"
								alt="Axit"
								width={70}
								height={70}
								className="rounded-full"
							/>
						</div>

						<div className="flex flex-col justify-between">
							<div className="">Akshit Gupta</div>
							<div className="text-sm text-zinc-400">Full Stack Engineer</div>
						</div>
					</div>
					<Socials />

					<TechStack />

					<Talks />
				</section>
			</main>
		</HydrateClient>
	);
}
