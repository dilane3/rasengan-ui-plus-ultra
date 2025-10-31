import { Project } from "@/data/projects";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "../ui/button";
import { ProjectPreview } from "./project-preview";
import Image from "@rasenganjs/image";
import { ExternalLink } from "lucide-react";
import { Link } from "rasengan";
import { Badge } from "../ui/badge";

export function ProjectCard({ data }: { data: Project }) {
	const hover = useMotionValue(0);

	const scale = useSpring(useTransform(hover, [0, 1], [1, 0.95]));
	const opacity = useSpring(useTransform(hover, [0, 1], [0, 1]));
	const x = useSpring(useTransform(hover, [0, 1], [0, 20]));

	return (
		<motion.div
			onHoverStart={() => {
				hover.set(1);
			}}
			onHoverEnd={() => {
				hover.set(0);
			}}
			// onTouchStart={() => {
			// 	if (hover.get() === 1) {
			// 		hover.set(0);
			// 	} else {
			// 		hover.set(1);
			// 	}
			// }}
			className='relative w-full rounded-lg'
		>
			<motion.div
				style={{
					scale,
				}}
				className='rounded-lg w-full h-auto'
			>
				<Image
					src={data.image}
					alt={data.title}
					width={"100%"}
					height={"auto"}
					className='rounded-lg w-full h-auto min-h-[250px]'
				/>
			</motion.div>
			<motion.div
				style={{
					scale,
				}}
				className='mt-2 flex flex-col gap-2 w-full justify-between pb-4 text-foreground'
			>
				<div className='flex justify-between'>
					<span className='font-bold text-lg'>{data.title}</span>

					<Link to={data.links[0].value} target='_blank'>
						<Button variant={"link"}>
							<span>Preview</span>
							<ExternalLink />
						</Button>
					</Link>
				</div>
				<span className='text-foreground/70'>{data.description}</span>
				<div className='flex gap-2'>
					{data.technologies.map((tech, index) => (
						<Badge key={index} className=''>
							{tech}
						</Badge>
					))}
				</div>
			</motion.div>

			{/* <motion.div
				style={{
					opacity,
				}}
				className='absolute top-0 left-0 w-full h-full bg-black/40 flex gap-2 items-center justify-center rounded-lg'
			>
				<Link to={data.links[0].value} target='_blank'>
					<Button className='border border-white/70 dark:border-foreground bg-black/80 hover:bg-black text-white shadow-lg'>
						<span>Preview - {data.title}</span>
					</Button>
				</Link>
			</motion.div> */}
		</motion.div>
	);
}
