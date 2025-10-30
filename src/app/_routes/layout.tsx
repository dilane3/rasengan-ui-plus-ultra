import { Outlet, LayoutComponent, ScrollRestoration } from "rasengan";
import { useTheme } from "@rasenganjs/theme";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import HeadingCard from "@/components/layout/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveIn } from "@/components/molecules/move-in";
import { FadeIn } from "@/components/molecules/fade-in";

const RootLayout: LayoutComponent = () => {
	const { isDark } = useTheme();

	return (
		<div className={isDark ? "dark" : ""}>
			<div
				className={cn(
					"bg-background w-full h-full min-h-screen font-host-grotesk"
				)}
			>
				<ScrollRestoration alwaysToTop />

				<Navbar />

				<div className='relative'>
					<FadeIn delay={0}>
						<main className='relative pt-16 w-full min-h-screen max-w-2xl h-auto mx-auto pb-24'>
							{/* Vertical lines */}
							<div className='absolute top-0 left-0 z-50 bg-background h-full w-0 border-l'></div>
							<div className='absolute top-0 right-0 z-50 bg-background h-full w-0 border-l'></div>

							<HeadingCard />

							<Outlet />
						</main>
					</FadeIn>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default RootLayout;
