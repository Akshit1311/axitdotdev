import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Akshit Gupta - Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	const imageData = await readFile(
		join(process.cwd(), "public/assets/images/ghibli.png"),
	);
	const base64Image = `data:image/png;base64,${imageData.toString("base64")}`;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
					gap: 48,
				}}
			>
				<img
					alt="Akshit Gupta"
					src={base64Image}
					width={280}
					height={280}
					style={{
						borderRadius: "50%",
						objectFit: "cover",
						border: "4px solid rgba(255,255,255,0.15)",
					}}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							fontSize: 56,
							fontWeight: 700,
							color: "#ffffff",
							lineHeight: 1.2,
						}}
					>
						Akshit Gupta
					</div>
					<div
						style={{
							fontSize: 28,
							color: "rgba(255,255,255,0.5)",
							marginTop: 8,
						}}
					>
						Full Stack Engineer
					</div>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
