import { motion, useMotionValue, useSpring } from "motion/react";
import { ComponentProps, ReactNode, useMemo } from "react";

type Props = {
	children: ReactNode;
	delay?: number;
	duration?: number;

	className?: ComponentProps<"div">["className"];
};

export const FadeIn = ({
	children,
	delay = 0.5,
	duration = 0.5,
	className,
}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: {
					duration,
					delay,
				},
			}}
			viewport={{ once: true }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
