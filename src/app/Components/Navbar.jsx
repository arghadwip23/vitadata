"use client";

import Link from "next/link";
import { useState } from "react";
import {
	ChevronDown,
	CircleUserRound,
	Menu,
	X,
	ArrowRightCircle,
} from "lucide-react";

const solutions = ["Admin Team", "Laboratory", "Patient", "Doctor"];
const technologies = ["Mobile App", "Cloud Storage", "Web App", "AI/ML"];

function DesktopDropdown({ label, items, active }) {
	return (
		<div className="group relative">
			<button
				className={`flex items-center gap-1 text-[15px] transition-colors hover:text-[#b56a3f] ${
					active
						? "font-bold text-[#2b1914]"
						: "font-semibold text-[#2b1914]"
				}`}
				type="button"
			>
				{label}
				<ChevronDown className="h-4 w-4" />
			</button>
			<div className="invisible absolute left-0 top-full z-40 mt-3 w-52 rounded-2xl border border-[#ead9ce] bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
				{items.map((item) => (
					<Link
						key={item}
						href={`./${item}`}
						className="block rounded-xl px-3 py-2 text-sm font-medium text-[#4a2b1f] hover:bg-[#f8f0ea]"
					>
						{item}
					</Link>
				))}
			</div>
		</div>
	);
}

function MobileSection({ title, items }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="rounded-xl border border-[#ead9ce] bg-white/70">
			<button
				className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-[#2b1914]"
				type="button"
				onClick={() => setOpen((prev) => !prev)}
			>
				{title}
				<ChevronDown
					className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
				/>
			</button>
			{open && (
				<div className="space-y-1 px-2 pb-3">
					{items.map((item) => (
						<Link
							key={item}
							href={`\${item}`}
							className="block rounded-lg px-3 py-2 text-sm font-medium text-[#4a2b1f] hover:bg-[#f8f0ea]"
						>
							{item}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-[#e8d7cc] bg-white/95 backdrop-blur">
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link href="#" className="flex items-center gap-2.5">
					<img src="/logo.svg" alt="VitaData Solutions logo" className="h-10 w-auto" />
					<div className="flex flex-col leading-tight">
						<span className="text-[15px] font-bold tracking-widest text-[#7a3e23] uppercase">
							VITADATA
						</span>
						<span className="text-[9px] font-medium tracking-[0.2em] text-[#b07a60] uppercase">
							SOLUTIONS
						</span>
					</div>
				</Link>

				{/* Desktop Nav Links */}
				<div className="hidden items-center gap-8 lg:flex">
					<Link
						href="./"
						className="text-[15px] font-semibold text-[#b56a3f] transition-colors hover:text-[#8f4f2f]"
					>
						Home
					</Link>
					<DesktopDropdown label="Solutions" items={solutions} />
					<DesktopDropdown label="Technologies" items={technologies} active />
					<Link
						href="./about"
						className="text-[15px] font-semibold text-[#2b1914] transition-colors hover:text-[#b56a3f]"
					>
						About Us
					</Link>
					<Link
						href="ContctUs"
						className="text-[15px] font-semibold text-[#2b1914] transition-colors hover:text-[#b56a3f]"
					>
						Contact Us
					</Link>
				</div>

				{/* Desktop CTA */}
				<div className="hidden items-center gap-2 lg:flex">
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-full bg-[#f4e8df] px-5 py-2.5 text-[15px] font-semibold text-[#7a3e23] transition hover:bg-[#ecdccd]"
					>
						Sign Up
						<ArrowRightCircle className="h-5 w-5" />
					</button>
					<button
						type="button"
						aria-label="User profile"
						className="grid h-10 w-10 place-items-center rounded-full border border-[#dcb8a5] text-[#9a5632] transition hover:bg-[#f8f0ea]"
					>
						<CircleUserRound className="h-6 w-6" />
					</button>
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					className="grid h-10 w-10 place-items-center rounded-xl border border-[#e4c8b8] text-[#7a3e23] lg:hidden"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="border-t border-[#f0ded2] bg-[#fffaf6] px-4 py-4 lg:hidden">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
						<Link
							href="#"
							className="rounded-xl border border-[#ead9ce] bg-white px-4 py-3 text-base font-semibold text-[#b56a3f]"
						>
							Home
						</Link>
						<MobileSection title="Solutions" items={solutions} />
						<MobileSection title="Technologies" items={technologies} />
						<Link
							href="#"
							className="rounded-xl border border-[#ead9ce] bg-white px-4 py-3 text-base font-semibold text-[#2b1914]"
						>
							About Us
						</Link>
						<Link
							href="#"
							className="rounded-xl border border-[#ead9ce] bg-white px-4 py-3 text-base font-semibold text-[#2b1914]"
						>
							Contact Us
						</Link>
						<div className="mt-1 flex items-center gap-3">
							<button
								type="button"
								className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f4e8df] px-5 py-3 text-base font-semibold text-[#7a3e23]"
							>
								Sign Up
								<ArrowRightCircle className="h-5 w-5" />
							</button>
							<button
								type="button"
								aria-label="User profile"
								className="grid h-11 w-11 place-items-center rounded-full border border-[#dcb8a5] bg-white text-[#9a5632]"
							>
								<CircleUserRound className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}