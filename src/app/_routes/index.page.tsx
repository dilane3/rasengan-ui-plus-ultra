import { me } from "@/data/me";
import { PageComponent } from "rasengan";

const Page: PageComponent = () => {
	return (
		<section className='bg-background text-foreground p-6'>
			<div className='mb-6'>
				<h1 className='font-raleway text-foreground font-bold text-2xl text-pretty max-w-[600px]'>
					My Story
				</h1>
			</div>

			{me.description.map((description, index) => {
				return (
					<p key={index} className='text-foreground/70 mb-6'>
						{description}
					</p>
				);
			})}
		</section>
	);
};

Page.metadata = {
	title: "About - D3 Portfolio",
	description: "Discover who I am and what I do",
};

export default Page;
