import Link from 'next/link';
import { useTheme } from '../../utils/themeContext';

export default function Nav() {
	const { toggleTheme, theme } = useTheme();

	return (
		<nav className="relative bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/">
							<a>
								<span className="sr-only">Epic Hawk</span>
								<img
									className="h-12 w-auto sm:h-14"
									src="/hawk-dark.png"
									alt=""
									width="250px"
								/>
							</a>
						</Link>
					</div>
					<Link href="/blogs">
						<a className="text-base  text-secondary">Blogs</a>
					</Link>
					<Link href="/jobs">
						<a className="text-base  text-secondary">Jobs</a>
					</Link>
					<Link href="/faqs">
						<a className="text-base  text-secondary">Faqs</a>
					</Link>
					<Link href="/about">
						<a className="text-base  text-secondary">About</a>
					</Link>
					<div className="flex items-center justify-center">
						<label
							htmlFor="toogleA"
							className="flex items-center cursor-pointer"
						>
							<div className="relative">
								<input
									id="toogleA"
									type="checkbox"
									className="hidden"
									checked={theme !== 'theme-light'}
									onChange={toggleTheme}
								/>
								<div className="toggle__line w-10 h-4 bg-secondary rounded-full shadow-inner"></div>
								<div className="toggle__dot absolute w-6 h-6 bg-hawk rounded-full shadow inset-y-0 left-0"></div>
							</div>
							<a
								className="ml-3 text-secondary "
								href="https://github.com/condinoaljoseph/epic-hawk"
								target="_blank"
							>
								Github
							</a>
						</label>
					</div>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<Link href="/auth">
							<a className="whitespace-nowrap text-base  text-secondary">
								Log in
							</a>
						</Link>
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md text-primary shadow-sm bg-hawk hover:bg-hawk-light"
						>
							Create account
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
