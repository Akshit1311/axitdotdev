import Link from "next/link";

export type TCompany = keyof typeof COMPANIES;

export const COMPANIES = {
	huddle: {
		title: "Huddle01",
		imgName: "huddle01.png",
		jobType: <div>Full Time &middot; 4 yrs 4 mos</div>,
		duration: <div>Dec 2020 - Now</div>,
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
						Build a full stack app using&nbsp;
						<span className="font-semibold  underline">
							NextJS, Typescript, tRPC & TailwindCSS
						</span>
					</li>
					<li>
						Great understanding of how the networking stack works.&nbsp;
						<span className="font-semibold  underline">
							i.e WebRTC, Sockets, UDP, Holepunching, SFUs
						</span>
					</li>

					<li>
						Built out the Orchestration Network using&nbsp;
						<span className="underline font-semibold">
							gRPC, protobufs, Redis & WebRTC
						</span>
					</li>
					<li>
						Contributed towards building the Recording pipeline using&nbsp;
						<span className="underline font-semibold">Golang and FFmpeg</span>
						&nbsp; which supports&nbsp;
						<span className="underline font-semibold">
							RTMP/s & WebRTC WHEP/WHIP
						</span>
						&nbsp; for low latency egress {"<"}100 ms
					</li>
					<li>
						Learned how to instrument, collect and visualize telemetry data and
						working with time series DBs using&nbsp;
						<span className="underline font-semibold">
							the LGTM stack - Loki , Grafana, Tempo & Prometheus
						</span>
					</li>

					<li>
						Scaling the backend horizontally / vertically based on the usecase.
						Good exposure to cloud services like&nbsp;
						<span className="underline font-semibold">AWS, GCP & Azure</span>
					</li>
					<li>
						How to progressively decentralize a tech stack with tech like&nbsp;
						<span className="underline font-semibold">Iroh and Libp2p.</span>
					</li>

					<li>
						<span className="underline font-semibold">
							Public Speaking skills
						</span>
						&nbsp; as I got opportunity to give talks and workshops at many Web3
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
				link: "https://huddle01.app",
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
				link: "https://www.npmjs.com/package/@huddle01/react",
				img: "sdk/cover.png",
				tech: ["typescript", "react", "mediasoup", "webrtc"],
				description: <div>helelo</div>,
			},
			{
				title: "Network Dashboard",
				link: "https://huddle01.network",
				tech: ["hardhat", "solidity", "trpc", "typescript", "next", "tailwind"],
				img: "network-dashboard/cover.png",
				description: <div>helelo</div>,
			},
			{
				title: "Media Node Sale",
				link: "",
				tech: ["hardhat", "solidity", "trpc", "typescript", "next", "tailwind"],
				img: "node-sale/cover.png",
				description: <div>helelo</div>,
			},
			{
				title: "Huddleverse - Quests Platform",
				link: "https://huddleverse.vercel.app",
				tech: [
					"hardhat",
					"solidity",
					"typescript",
					"trpc",
					"postgres",
					"next",
					"tailwind",
				],
				img: "huddleverse/cover.png",
				description: <div>helelo</div>,
			},
		],
	},
	polygon: {
		title: "Polygon Labs",
		imgName: "polygon.png",
		jobType: <div>Fellowship &middot; 3 mos</div>,
		duration: <div>Jun 2022 - Aug 2022</div>,
		role: "Buidler Track Fellow",
		description: (
			<div>
				<div>Overview: </div>
				<ul className="list-disc list-inside">
					<li>
						8-week fellowship was an excellent introduction to the Ethereum and
						Polygon ecosystems.
					</li>
					<li>
						Got selected for the fellowship among 10 people from 10000+
						applicants and built a flash loan protocol.
					</li>
					<li>Interacted with Founders in the web3 ecosystem</li>
					<li>
						Built out my first web3 protocol from scratch in the DeFi ecosystem
					</li>
					<li>Pitched product to investors</li>
					<li>
						Project Proposal that got me selected:&nbsp;
						<Link
							target="_blank"
							className="underline text-slate-200 hover:text-slate-300"
							href="https://0xaxit.notion.site/Project-Proposal-Web3-Buidler-Track-b6be3d8585af462c83e8572eab1141d0"
						>
							Akshit's Notion
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
					</li>
				</ul>

				<div className="mt-4">Skills Acquired: </div>
				<ul className="list-disc list-inside ">
					<li>
						Hands-on experience with&nbsp;
						<span className="underline font-semibold">Solidity</span> and Web3
						development with tools like&nbsp;
						<span className="underline font-semibold">
							Hardhat & Rainbowkit
						</span>
					</li>
					<li>
						Got familiarized with how DeFi protocols works by interacting with
						contracts of popular DeFi protocols such as&nbsp;
						<span className="underline font-semibold">
							AAVE, Uniswap, NFTx & Furucombo.
						</span>
					</li>
					<li>
						Learnt out about&nbsp;
						<span className="underline font-semibold">
							Borrowing/Lending, Collateralized Loans, Flash Loans
						</span>
						&nbsp; and how one can utilize them in DeFi.
					</li>
					<li>
						How to pitch to investors by creating a pitch deck and showing
						the&nbsp;
						<span className="underline font-semibold">TAM, SAM & SOM.</span>
					</li>
				</ul>
			</div>
		),
		projects: [
			{
				title: "Swift Lend",
				link: "",
				img: "swift-lend/cover.png",
				tech: ["hardhat", "solidity", "typescript", "next", "tailwind"],
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
		],
	},
	lscg: {
		title: "LS&CG",
		imgName: "lscg.png",
		jobType: <div>Internship &middot; 6 mos</div>,
		duration: <div>Jul 2020 - Dec 2020</div>,
		role: "Technology Intern",
		description: (
			<div>
				<div className="mt-4">Overview: </div>

				<ul className="list-disc list-inside">
					<li>
						First internship in web development. Got this opportunity on the
						basis of my skills in the MERN stack
					</li>

					<li>
						Worked on multiple projects:
						<ol className="list-decimal list-inside ml-6">
							<li>
								<b>Transaction Monitoring</b> - Built out the whole frontend
								from scratch using{" "}
								<span className="font-semibold  underline">React</span> and
								collaborated with the backend python team to represent data
								using graphs and charts.
							</li>
							<li>
								<b>Low Code No Code</b> - It is a visual drag-and-drop
								development approach that facilitates the delivery of
								applications by reducing hand-coding as much as possible.{" "}
								<span className="font-semibold  underline">
									Tech Stack: React & Redux
								</span>
							</li>
							<li>
								<b>Finnovate Dashboard</b> - The LSCG Finnovate Dashboard is a
								workspace communication and collaboration tool where customers
								are provided with a vast range of features such as an instant
								messaging system, planning projects by engaging different
								members in the organization and tracking their progress and
								pro-activity.It alerts people to activity on work that pertains
								to them. It ensure that the right people have access to the
								assets they need.&nbsp;
								<span className="font-semibold  underline">
									Tech Stack: React & React Context API
								</span>
							</li>
							<li>
								<b>Chatbot</b> - A plug-n-play iframe window that can be
								embedded into any site for customer support.
								<span className="font-semibold  underline">
									Tech Stack: React & Redux
								</span>
							</li>
						</ol>
					</li>
				</ul>

				<div className="mt-4">Responsibilities: </div>

				<ul className="list-disc list-inside">
					<li>
						Responsible for developing frontend applications for all the
						products and making sure of their integration with the Frontend.
					</li>
					<li>
						Deployments on AWS - be it a python backend, Serveless APIs or
						setting up domains using Route53.
						<br />
						<span className="font-semibold  underline">
							Fun Fact: Was tasked with deploying a minecraft server to ec2 for
							a team building exercise as well!
						</span>
					</li>
				</ul>

				<div className="mt-4">Skills Acquired: </div>
				<li>
					As I was responsible for making sure all the products were deployed on
					AWS properly, got exposure to&nbsp;
					<span className="font-semibold  underline">
						AWS services like EC2, S3 Buckets, Route 53 & Lambda.
					</span>
				</li>
				<li>
					Collabed with a team of developers for the first time using&nbsp;
					<span className="font-semibold  underline">Git & Github.</span>
				</li>
				<li>
					Got introduced to various state management tools like&nbsp;
					<span className="font-semibold  underline">
						Redux & React Context API.
					</span>
				</li>
				<li>
					How to use&nbsp;
					<span className="font-semibold  underline">
						iFrames to embed pages
					</span>
					&nbsp;or React Elements into any website and interact with it
					programmatically.
				</li>
			</div>
		),
		projects: [],
	},
} as const;
