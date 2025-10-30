import { Link } from "rasengan";
import { Button } from "../ui/button";
import { me } from "@/data/me";

export default function Footer() {
	return (
		<footer className='absolute bottom-0 left-0 right-0 z-30 bg-background h-auto border-t border-t-border flex items-center justify-between'>
			<div className='w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between p-6'>
				<div className='flex gap-2'>
					{me.socials.map((social, index) => (
						<Link key={index} to={social.link} target='_blank'>
							<Button size='icon' variant='outline' className='text-foreground'>
								{social.icon}
							</Button>
						</Link>
					))}
				</div>

				<p className='text-sm text-muted-foreground'>
					Copyright © {new Date().getFullYear()}{" "}
					<Link
						to='https://dilane3.dev'
						className='underline text-primary/80 hover:text-primary font-medium'
						target='_blank'
					>
						{me.name}
					</Link>
					.
				</p>
			</div>
		</footer>
	);
}
