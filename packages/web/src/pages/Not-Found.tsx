import { Link } from "react-router";

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center min-h-svh padding-x padding-y">
			<img
				src="/not_found.svg"
				alt="resource not found"
				width={600}
				height={600}
			/>
			<p className="text-lg">Could not find requested resource</p>
			<Link className="text-lg font-semibold py-2 text-primary" to="/">
				Return Home
			</Link>
		</section>
	);
}
