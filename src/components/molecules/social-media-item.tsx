import { MeSchema } from "@/data/me";
import { ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "rasengan";

export const SocialMediaItem = ({ data }: { data: MeSchema["socials"][0] }) => {
	const hover = useMotionValue(0);

	const x = useSpring(useTransform(hover, [0, 1], [-25, 0]));
	const opacity = useSpring(useTransform(hover, [0, 1], [0, 1]));

	return (
		<Link to={data.link} target='_blank'>
			<motion.div
				onHoverStart={() => {
					hover.set(1);
				}}
				onHoverEnd={() => {
					hover.set(0);
				}}
				onTouchStart={() => {
					hover.set(1);
				}}
				onTouchEnd={() => {
					hover.set(0);
				}}
				className='border-b py-2 text-sm font-light'
			>
				<motion.div
					style={{
						x,
					}}
					className='flex items-center gap-2'
				>
					<motion.div
						style={{
							opacity,
						}}
					>
						<ExternalLink size={18} />
					</motion.div>
					<span>{data.name}</span>
				</motion.div>
			</motion.div>
		</Link>
	);
};
