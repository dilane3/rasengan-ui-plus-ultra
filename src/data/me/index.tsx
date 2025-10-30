import cv from "@/assets/cv/dilane3-cv.pdf";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { JSX } from "react";

export type MeSchema = {
	name: string;
	title: string;
	about: string;
	description: string[];
	avatar: string;
	socials: Array<{
		name: string;
		link: string;
		icon: JSX.Element;
		type: "social" | "other";
	}>;
	contact: {
		type: "email" | "web";
		value: string;
		cta: string;
	};
	cv: string;
};

export const me: MeSchema = {
	name: "Dilane Kombou",
	title: "Software Developer & Creator of Rasengan.js",
	about: `
    I love building awesome and useful things to automate some tasks. And
		I'm always looking for new challenges.`,
	description: [
		"I’m Dilane Kombou. I live in Cameroon, where I’m building the future of the web",
		"I’ve been fascinated by computers for as long as I can remember. I wrote my first lines of code as a teenager, driven by the thrill of making ideas come alive on a screen. What started as curiosity soon became an obsession: understanding how things work, and how to make them better.",
		"As a kid, I didn’t dream of spaceships — I dreamed of building worlds inside a terminal. I spent nights breaking, fixing, and rebuilding projects just to see how far I could push my limits. Every bug was a puzzle, every crash a new lesson.",
		"Years later, that same obsession gave birth to Rasengan.js — an open-source React framework built to make web development faster, more intuitive, and more creative. Inspired by the energy and precision of the Rasengan itself, it’s my way of bringing power and simplicity together for developers everywhere.",
		"Today, I’m focused on growing the Rasengan ecosystem — empowering creators, solo developers, and teams to build without limits. Because the web is our universe, and I’m here to help others master their own chakra of code.",
	],
	avatar: "/assets/images/avatars/1.jpeg",
	socials: [
		{
			name: "Github",
			link: "https://github.com/dilane3",
			icon: <Github />,
			type: "other",
		},
		{
			name: "LinkedIn",
			link: "https://linkedin.com/in/dilane-kombou",
			icon: <Linkedin />,
			type: "social",
		},
		{
			name: "X (Twitter)",
			link: "https://x.com/dilanekombou",
			icon: <Twitter />,
			type: "social",
		},
		{
			name: "Instagram",
			link: "#",
			icon: <Instagram />,
			type: "social",
		},
	],
	contact: {
		type: "email",
		value: "mailto:komb.dilane3@gmail.com",
		cta: "Get in Touch",
	},
	cv,
};
