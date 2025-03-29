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
				Joined Huddle01 in the early stages as the Founding Engineer in Dec
				2020, have been leading the dev team since. <br />
				Core roles and responsibilities included taking technical decisions on
				what tech stack to choose, developing and maintaining the robust
				backend, tech hiring, communicating with clients to suggest the viable
				usecase for them, assigning tasks and leading the tech team.
			</div>
		),
		projects: [
			{
				title: "Meeting Product",
				link: "/huddle-meet",
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
				title: "Personal Dashboard",
				link: "/personal-dashboard",
				description: <div>helelo</div>,
			},
			{
				title: "Huddleverse - Quests Platform",
				link: "/huddleverse",
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
		projects: [
			{
				title: "Meeting Product",
				link: "/huddle-meet",
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
				title: "Personal Dashboard",
				link: "/personal-dashboard",
				description: <div>helelo</div>,
			},
			{
				title: "Huddleverse - Quests Platform",
				link: "/huddleverse",
				description: <div>helelo</div>,
			},
		],
	},
	lscg: {
		title: "London Strategy & Consulting Group",
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
		projects: [
			{
				title: "Meeting Product",
				link: "/huddle-meet",
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
				title: "Personal Dashboard",
				link: "/personal-dashboard",
				description: <div>helelo</div>,
			},
			{
				title: "Huddleverse - Quests Platform",
				link: "/huddleverse",
				description: <div>helelo</div>,
			},
		],
	},
} as const;
