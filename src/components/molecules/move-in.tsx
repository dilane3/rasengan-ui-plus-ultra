import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ComponentProps, ReactNode, useMemo } from "react";

type Props = {
	children: ReactNode;
	direction?: "to-top" | "to-left" | "to-right" | "to-bottom";
	delay?: number;
	className?: ComponentProps<"div">["className"];
};

export const MoveIn = ({
	children,
	direction = "to-top",
	delay = 0.5,
	className,
}: Props) => {
	const defaultInitial = useMemo(() => {
		let config = { opacity: 0, x: 0, y: 0 };

		switch (direction) {
			case "to-top": {
				config = { ...config, y: 100 };
				break;
			}
			case "to-left": {
				config = { ...config, x: 100 };
				break;
			}
			case "to-right": {
				config = { ...config, x: -100 };
				break;
			}
			case "to-bottom": {
				config = { ...config, y: -100 };
				break;
			}
		}

		return config;
	}, [direction]);

	return (
		<motion.div
			initial={defaultInitial}
			whileInView={{
				y: 0,
				x: 0,
				transition: {
					duration: 0.3,
					delay,
					// type: "spring",
				},
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 1,
				},
			}}
			viewport={{ once: true }}
			className={cn("w-auto", className)}
		>
			{children}
		</motion.div>
	);
};
