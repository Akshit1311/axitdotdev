import Link from "next/link";

export default async function NotFound() {
	return (
		<div className="grid place-items-center h-full">
			<div className="flex items-center flex-col ">
				<h1 className="text-center text-8xl">404</h1>
				<p className="text-sm text-center mt-2">Nothing to see here!</p>

				<Link
					href={"/"}
					className="text-center bg-white rounded-lg text-black py-2 px-3 my-4 mx-auto flex items-center border-r-[3px] border-b-[3px] border-r-slate-400 border-b-slate-500 hover:border-r-transparent hover:border-b-transparent hover:translate-x-[1px] hover:translate-y-[1px]"
				>
					<span className="mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5"
						>
							<title>Back Button</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
					</span>
					<span>Back to Home</span>
				</Link>
			</div>
		</div>
	);
}
