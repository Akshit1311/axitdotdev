export const PROJECTS = {
	"huddle-personal-dashboard": {
		title: "Personal Dashboard",
		description: "",
		link: "https://huddle01.app",
	},
} as const;

export type TCompany = keyof typeof COMPANIES;

export const COMPANIES = {
	huddle: {
		title: "Huddle01",
		imgName: "huddle01.png",
		duration: <div>Full Time &middot; 4 yrs 4 mos &middot; Dec 2020 - Now</div>,
		role: "Engineering Lead",
		description: (
			<div>
				{/* <div>Overview: </div>
				<ul className="list-disc list-inside">
					<li>
						Joined Huddle01 in the early stages as the Founding Engineer in Dec
						2020.
					</li>
					<li>
						Huddle01 started as an Edtech startup focussed towards providing low
						latency calls in remote areas/villages.
					</li>
					<li>
						After cracking low latency, pivoted towards providing pseudonymous
						av calls for NFT Communities & DAOs.
					</li>
				</ul> */}

				<div className="mt-4">Key Responsibilties: </div>
				<ul className="list-disc list-inside ">
					<li>
						Taking key decisions in choosing the tech stack for upcoming
						products.
					</li>
					<li>
						Developing and maintaining the robust backend on which RTC
						infrastructure relied on.
					</li>
					<li>
						Assign tasks to the team and guiding them to solve technical
						problems.
					</li>
					<li>Reviewing code, giving code reviews and merging PRs.</li>
					<li>Assisting the BD team with technical calls with clients.</li>
					<li>Giving talks and workshops on the tech we've developed.</li>
				</ul>

				<div className="mt-4">Skills Acquired: </div>
				<ul className="list-disc list-inside ">
					<li>
						Great understanding of how the networking stack works.{" "}
						<span className="font-semibold  underline">
							i.e WebRTC, Sockets, UDP, Holepunching, SFUs
						</span>
					</li>

					<li>
						Built out the Orchestration Network using{" "}
						<span className="underline font-semibold">
							gRPC, protobufs, Redis & WebRTC
						</span>
					</li>
					<li>
						Contributed towards building the Recording pipeline using{" "}
						<span className="underline font-semibold">Golang and FFmpeg</span>{" "}
						which supports{" "}
						<span className="underline font-semibold">
							RTMP/s & WebRTC WHEP/WHIP
						</span>{" "}
						for low latency egress {"<"}100 ms
					</li>
					<li>
						Learned how to instrument, collect and visualize telemetry data and
						working with time series DBs using{" "}
						<span className="underline font-semibold">
							the LGTM stack - Loki , Grafana, Tempo & Prometheus
						</span>
					</li>

					<li>
						Scaling the backend horizontally / vertically based on the usecase.
						Good exposure to cloud services like{" "}
						<span className="underline font-semibold">AWS, GCP & Azure</span>
					</li>
					<li>
						How to progressively decentralize a tech stack with tech like{" "}
						<span className="underline font-semibold">Iroh and Libp2p.</span>
					</li>

					<li>
						<span className="underline font-semibold">
							Public Speaking skills
						</span>{" "}
						as I got opportunity to give talks and workshops at many Web3
						Conferences and Hackathons.
					</li>
					<li>
						<span className="underline font-semibold">Hiring Talent</span> -
						Took countless interviews for technical roles at the company to hire
						for Full Stack Devs, Dev Rels, Mobile Devs, Unity Devs etc.
					</li>
				</ul>
			</div>
		),
		projects: [
			{
				title: "Meeting Product",
				link: "/huddle-meet",
				img: "huddle-meet/cover.png",
				tech: [
					"typescript",
					"postgres",
					"webrtc",
					"hono",
					"cloudflare-worker",
					"grafana",
					"next",
					"tailwind",
				],
				description: (
					<div className="text-sm">
						<div>Backend: </div>
						<ul className="list-disc list-inside">
							<li>
								Contributed towards building the robust Media Server for
								handling the media streams which was built on Mediasoup (SFU).
							</li>
							<li>
								Maintained the SFU and the Orchestration networking stack using
								WebRTC, gRPC, Protobufs.
							</li>
							<li>
								Built out the recording pipeline using FFmpeg which supports
								RTMP/s for low latency egress.
							</li>
						</ul>
						<div>Frontend: </div>
					</div>
				),
			},
			{
				title: "RTC SDKs",
				link: "/sdk",
				img: "sdk/cover.png",
				tech: ["typescript", "react", "mediasoup", "webrtc"],
				description: <div>helelo</div>,
			},
			{
				title: "Media Node Sale",
				link: "/node-sale",
				tech: ["hardhat", "solidity", "trpc", "typescript", "next", "tailwind"],
				img: "node-sale/cover.png",
				description: <div>helelo</div>,
			},
			{
				title: "Huddleverse - Quests Platform",
				tech: [
					"hardhat",
					"solidity",
					"typescript",
					"trpc",
					"postgres",
					"next",
					"tailwind",
				],
				link: "/huddleverse",
				img: "huddleverse/cover.png",
				description: <div>helelo</div>,
			},
		],
	},
	polygon: {
		title: "Polygon Labs",
		imgName: "polygon.png",
		duration: <div>Part-time &middot; 3 mos &middot; Jun 2022 - Aug 2022</div>,
		role: "Buidler Track Fellow",
		description: (
			<div>
				Joined Huddle01 in the early stages as the Founding Engineer in Dec
				2020, have been leading the dev team since. <br />
				Core roles and responsibilities included taking technical decisions on
				what tech stack to choose, developing and maintaining the robust
				backend, tech hiring, communicating with clients to suggest the viable
				usecase for them, assigning tasks and leading the tech team.
			</div>
		),
		projects: [],
	},
	lscg: {
		title: "LS&CG",
		imgName: "lscg.png",
		duration: <div>Part-time &middot; 6 mos &middot; Jul 2020 - Dec 2020</div>,
		role: "Technology Intern",
		description: (
			<div>
				Joined Huddle01 in the early stages as the Founding Engineer in Dec
				2020, have been leading the dev team since. <br />
				Core roles and responsibilities included taking technical decisions on
				what tech stack to choose, developing and maintaining the robust
				backend, tech hiring, communicating with clients to suggest the viable
				usecase for them, assigning tasks and leading the tech team.
			</div>
		),
		projects: [],
	},
} as const;
