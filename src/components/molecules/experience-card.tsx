import { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";

export function ExperienceCard({ data }: { data: Experience }) {
	const hover = useMotionValue(0);

	const scale = useSpring(useTransform(hover, [0, 1], [1, 0.95]));
	const opacity = useSpring(useTransform(hover, [0, 1], [0, 1]));

	return (
		<motion.div
			style={{ scale }}
			onHoverStart={() => {
				hover.set(1);
			}}
			onHoverEnd={() => {
				hover.set(0);
			}}
			onTouchStart={() => {
				if (hover.get() === 1) {
					hover.set(0);
				} else {
					hover.set(1);
				}
			}}
			className={cn(
				"relative flex items-center gap-2 w-full p-2 pr-4 bg-transparent hover:bg-muted dark:hover:bg-input/10 rounded-2xl cursor-pointer",
				hover.get() === 1 && "bg-muted dark:bg-input/10"
			)}
		>
			<div className='rounded-full aspect-square p-1 border bg-input/30 shrink-0'>
				<img
					src={data.image}
					className='size-8 rounded-full shrink-0'
					alt={data.company}
				/>
			</div>

			<div className='relative w-full flex flex-col gap-1 leading-5'>
				<h3 className='font-raleway font-bold text-foreground'>
					{data.company}
				</h3>
				<div className='flex justify-between items-center gap-2 text-sm'>
					<p className='text-foreground/70 font-light'>{data.role}</p>
					<p className='text-foreground/70 font-light text-[12px]'>
						{data.period}
					</p>
				</div>
			</div>

			<motion.span
				initial={{ opacity: 0 }}
				style={{ opacity }}
				className='absolute top-1 right-4 rounded-full p-2 bg-input/30'
			>
				<ExternalLink className='size-3 text-foreground/70' />
			</motion.span>
		</motion.div>
	);
}
