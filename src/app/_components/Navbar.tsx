import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className="rounded-2xl my-3 flex items-center justify-between px-4 py-3 text-xs sticky top-2 mx-auto w-fit  z-50 bg-zinc-300/10 backdrop-blur-md">
			<nav className="flex items-center gap-4">
				<Link className="text-zinc-200" href="/">
					Home
				</Link>
				<Link className="text-zinc-400 hover:text-zinc-100" href="/about">
					About
				</Link>
				<Link className="text-zinc-400 hover:text-zinc-100" href="/contact">
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
