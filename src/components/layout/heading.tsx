import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, NavLink } from "rasengan";
import { Button } from "../ui/button";
import Image from "@rasenganjs/image";
import { cn } from "@/lib/utils";
import { me } from "@/data/me";

export default function HeadingCard() {
	return (
		<div className='w-full'>
			<div className='w-full relative'>
				<Image
					src='/assets/images/6.jpeg'
					alt=''
					width={"100%"}
					height={"200px"}
				/>

				<div className='absolute -bottom-[64px] left-6 transform'>
					<Image
						src='/assets/images/avatars/1.jpeg'
						alt=''
						width={"128px"}
						height={"128px"}
						className='rounded-full'
					/>
				</div>
			</div>

			<div className='w-full px-6 py-2'>
				<div className='flex justify-end w-full gap-2'>
					{me.socials
						.filter((social) => social.type === "other")
						.map((social, index) => (
							<Link key={index} to={social.link} target='_blank'>
								<Button
									size='icon'
									variant='outline'
									className='text-foreground'
								>
									{social.icon}
								</Button>
							</Link>
						))}
					<Link to={me.contact.value} target='_blank'>
						<Button className='rounded-full'>{me.contact.cta}</Button>
					</Link>
				</div>

				<div className='mt-8'>
					<p className='text-foreground/80'>
						Hi I'm {me.name} - Software Developer & Creator of{" "}
						<Link
							to='https://rasengan.dev'
							target='_blank'
							rel='noreferrer'
							className='text-primary/80 hover:text-primary hover:underline font-bold transition-all'
						>
							Rasengan.js
						</Link>
					</p>
				</div>

				<div className='mt-4 flex gap-2'>
					<Link to={me.cv} target='_blank'>
						<Button className='rounded-full'>Download CV</Button>
					</Link>

					{me.socials
						.filter((social) => social.type === "social")
						.map((social, index) => (
							<Link key={index} to={social.link} target='_blank'>
								<Button
									size='icon'
									variant='outline'
									className='text-foreground'
								>
									{social.icon}
								</Button>
							</Link>
						))}
				</div>
			</div>

			<div className='w-full flex border-b border-border mt-4 text-foreground overflow-auto'>
				<NavLink to='/'>
					{({ isActive }) => {
						return (
							<Link to='/'>
								<div
									className={cn(
										"w-auto px-6 py-4 flex items-center justify-center hover:bg-muted transition-all duration-300 border-b-4 border-transparent cursor-pointer",
										isActive && "border-primary bg-muted"
									)}
								>
									<span>About</span>
								</div>
							</Link>
						);
					}}
				</NavLink>
				<NavLink to='/projects'>
					{({ isActive }) => {
						return (
							<Link to='/projects'>
								<div
									className={cn(
										"w-auto px-6 py-4 flex items-center justify-center hover:bg-muted transition-all duration-300 border-b-4 border-transparent cursor-pointer",
										isActive && "border-primary bg-muted"
									)}
								>
									<span>Projects</span>
								</div>
							</Link>
						);
					}}
				</NavLink>
				<NavLink to='/experiences'>
					{({ isActive }) => {
						return (
							<Link to='/experiences'>
								<div
									className={cn(
										"w-auto px-6 py-4 flex items-center justify-center hover:bg-muted transition-all duration-300 border-b-4 border-transparent cursor-pointer",
										isActive && "border-primary bg-muted"
									)}
								>
									<span>Experiences</span>
								</div>
							</Link>
						);
					}}
				</NavLink>
				{/* <NavLink to='/articles'>
					{({ isActive }) => {
						return (
							<Link to='/articles'>
								<div
									className={cn(
										"w-auto px-6 py-4 flex items-center justify-center hover:bg-muted transition-all duration-300 border-b-4 border-transparent cursor-pointer",
										isActive && "border-primary bg-muted"
									)}
								>
									<span>Articles</span>
								</div>
							</Link>
						);
					}}
				</NavLink> */}
			</div>
		</div>
	);
}
