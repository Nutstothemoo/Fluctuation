// 'use client'
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Logo from "@/data/logo.svg";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import LocaleSwitcher from "./locale-switcher";
import LogoFueg from "@/components/LogoFueg";

const Header = ({ locale, fluidFont }) => {
	return (
		<>
			<header
				className={`
          sticky top-0 z-50 flex items-center justify-between py-8 transition-all duration-500 ease-in-out`}
			>
				<div>
					<Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
						<div className="flex items-center justify-between">
							<div>
								<LogoFueg />
							</div>
							{/* {typeof siteMetadata.headerTitle === "string" ? (
								<div
									className={`dark: dark: hidden h-6 text-3xl font-bold tracking-widest text-indigo-900 dark:text-white md:block ${fluidFont.className}`}
								>
									{siteMetadata.headerTitle}
								</div>
							) : (
								siteMetadata.headerTitle
							)} */}
						</div>
					</Link>
				</div>
				<div className="light: border-1 flex items-center space-x-2 rounded-full border-gray-100 bg-white p-1 px-4 leading-5 opacity-80 dark:border-indigo-900 dark:bg-indigo-950 md:p-2 lg:space-x-4 ">
					{headerNavLinks
						.filter((link) => link.href !== `/${locale}/`)
						.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="lg:text-md relative hidden w-fit font-bold text-gray-900 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 dark:text-gray-100 dark:after:bg-white sm:block sm:text-sm"
							>
								{link.title}
							</Link>
						))}
					{/* <SearchButton /> */}
					<div className="relative z-50 flex flex-row items-center justify-center space-x-4">
						<LocaleSwitcher locale={locale} />
						<ThemeSwitch />
						<MobileNav />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
