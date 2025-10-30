import { PageComponent } from "rasengan";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/molecules/project-card";

const Page: PageComponent = () => {
	return (
		<section className='bg-background text-foreground p-6 flex flex-col gap-4 mb-6'>
			{projects.map((project, index) => {
				return <ProjectCard key={index} data={project} />;
			})}
		</section>
	);
};

Page.metadata = {
	title: "Projects",
	description: "Projects Page",
};

export default Page;
