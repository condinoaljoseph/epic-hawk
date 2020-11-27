// pre made from https://tailwindui.com/preview
import Link from "next/link";
import { useTheme } from "../../utils/themeContext";

export default function Nav() {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className="relative bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/">
							<a href="#">
								<span className="sr-only">Epic Hawk</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									// src="https://cdn2.whatoplay.com/ui/logo.png"
									alt=""
								/>
							</a>
						</Link>
					</div>
					<Link href="/blogs">
						<a className="text-base font-medium text-secondary">
							Blogs
						</a>
					</Link>
					<Link href="/jobs">
						<a className="text-base font-medium text-secondary">
							Jobs
						</a>
					</Link>
					<Link href="/faqs">
						<a className="text-base font-medium text-secondary">
							Faqs
						</a>
					</Link>
					<Link href="/about">
						<a className="text-base font-medium text-secondary">
							About
						</a>
					</Link>
					<div class="flex items-center justify-center">
						<label
							htmlFor="toogleA"
							className="flex items-center cursor-pointer"
						>
							<div className="relative">
								<input
									id="toogleA"
									type="checkbox"
									className="hidden"
									onClick={toggleTheme}
								/>
								<div className="toggle__line w-10 h-4 bg-secondary rounded-full shadow-inner"></div>
								<div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
							</div>
							<div className="ml-3 text-secondary font-medium">
								{theme === "theme-light" ? "Dark" : "Light"}{" "}
								Theme
							</div>
						</label>
					</div>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="#"
							className="whitespace-nowrap text-base font-medium text-secondary"
						>
							Sign in
						</a>
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Sign up
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
