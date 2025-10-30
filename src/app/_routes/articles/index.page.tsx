import { PageComponent } from "rasengan";

const Page: PageComponent = () => {
	return (
		<section className='bg-background text-foreground'>
			<h1>Articles</h1>
		</section>
	);
};

Page.metadata = {
	title: "Articles",
	description: "Articles Page",
};

export default Page;
