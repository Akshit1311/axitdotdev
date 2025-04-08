import { Link } from "next-view-transitions";

import React from "react";

const Navbar = () => {
	return (
		<header className="rounded-2xl my-3 flex items-center justify-between px-4 py-3 text-xs sticky top-2 mx-auto w-fit  z-50 bg-zinc-300/10 backdrop-blur-md">
			<nav className="flex items-center gap-4">
				<Link className="text-zinc-200" href="/">
					Home
				</Link>
				<a
					className="text-zinc-400 hover:text-zinc-100 flex items-center"
					href="/assets/documents/akshit_resume_2025.pdf"
					download="akshitgupta_resume_2025.pdf"
				>
					Resume{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-3 ml-1"
					>
						<title>Akshit's Resume</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>
				</a>
			</nav>
		</header>
	);
};

export default Navbar;
