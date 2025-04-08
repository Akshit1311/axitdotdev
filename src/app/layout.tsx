import "~/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { Space_Mono } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { BackgroundBeams } from "./_components/aceternity/bg-beams";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
	title: "Akshit Gupta",
	description: "Guess who's portfolio?",
	// icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const spaceMono = Space_Mono({
	weight: ["400", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-spaceMono",
});

export const dynamicParams = false;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ViewTransitions>
			<html
				lang="en"
				className={cn(
					`${GeistSans.variable}`,
					spaceMono.variable,
					"bg-gradient-to-br from-zinc-900 to-zinc-800 text-white min-h-screen",
				)}
			>
				<body className="md:max-w-[900px] md:min-w-[600px] mx-auto font-spaceMono">
					<Navbar />

					<TRPCReactProvider>{children}</TRPCReactProvider>

					<div className="text-center my-4">Built with 💙 by axit</div>
					<BackgroundBeams className="-z-10" />
				</body>
			</html>
		</ViewTransitions>
	);
}
