export type Project = {
	title: string;
	description: string;
	image: string;
	links: {
		type: "demo" | "source";
		value: string;
	}[];
	technologies: string[];
};

export const projects: Project[] = [
	{
		title: "Rasengan.js",
		description:
			"Rasengan.js is a next-generation React framework designed to make building web applications faster, cleaner, and more enjoyable — without compromising on performance.",
		image: "/assets/images/projects/rasengan-js.png",
		links: [
			{
				type: "demo",
				value: "https://rasengan.dev",
			},
			{
				type: "source",
				value: "https://github.com/rasengan-dev/rasenganjs",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
	{
		title: "Youcare",
		description: "Youcare is a platform for mental health.",
		image: "/assets/images/projects/youcare.png",
		links: [
			{
				type: "demo",
				value: "#",
			},
			{
				type: "source",
				value: "#",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
	{
		title: "Moimoi",
		description:
			"Moimoi is the perfect mobile application for your daily needs.",
		image: "/assets/images/projects/moimoi.png",
		links: [
			{
				type: "demo",
				value: "#",
			},
			{
				type: "source",
				value: "#",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
	{
		title: "Learna",
		description: "Learna is a platform for learning new skills.",
		image: "/assets/images/projects/learna.png",
		links: [
			{
				type: "demo",
				value: "#",
			},
			{
				type: "source",
				value: "#",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
	{
		title: "Eduplex",
		description: "Eduplex is a platform for learning new skills.",
		image: "/assets/images/projects/eduplex.png",
		links: [
			{
				type: "demo",
				value: "#",
			},
			{
				type: "source",
				value: "#",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
	{
		title: "Brandi",
		description: "Brandi is the new UI Kit for your next project.",
		image: "/assets/images/projects/brandi.jpeg",
		links: [
			{
				type: "demo",
				value: "#",
			},
			{
				type: "source",
				value: "#",
			},
		],
		technologies: [
			"React",
			"Rasengan.js",
			"TypeScript",
			"TailwindCSS",
			"Shadcn UI",
		],
	},
];
