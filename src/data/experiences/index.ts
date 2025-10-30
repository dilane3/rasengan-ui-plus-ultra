export type Experience = {
	company: string;
	role: string;
	period: string;
	image: string;
	link: string;
};

export const experiences: Experience[] = [
	{
		company: "Google",
		role: "Software Engineer",
		period: "2022 - Present",
		image: "/assets/images/experiences/google.png",
		link: "https://google.com",
	},
	{
		company: "Amazon",
		role: "Software Engineer",
		period: "2019 - 2022",
		image: "/assets/images/experiences/amazon.png",
		link: "https://amazon.com",
	},
	{
		company: "Meta",
		role: "Software Engineer",
		period: "2018 - 2019",
		image: "/assets/images/experiences/meta.jpg",
		link: "https://meta.com",
	},
	{
		company: "Vercel",
		role: "Software Engineer",
		period: "2015 - 2018",
		image: "/assets/images/experiences/vercel.png",
		link: "https://vercel.com",
	},
	{
		company: "Apple",
		role: "Software Engineer",
		period: "2005 - 2015",
		image: "/assets/images/experiences/apple.jpg",
		link: "https://apple.com",
	},
];
