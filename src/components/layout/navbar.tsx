import { me } from "@/data/me";
import ThemeButton from "../atoms/theme-button";

export default function Navbar() {
	return (
		<header className='fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-lg h-16 border-b border-b-border flex items-center justify-center'>
			<div className='w-full max-w-2xl mx-auto flex items-center justify-between px-6'>
				<h1 className='text-xl font-bold text-foreground'>{me.name}</h1>
				<ThemeButton />
			</div>
		</header>
	);
}
