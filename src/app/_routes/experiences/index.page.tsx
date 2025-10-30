import { ExperienceCard } from "@/components/molecules/experience-card";
import { experiences } from "@/data/experiences";
import { BriefcaseBusiness } from "lucide-react";
import { Link, PageComponent } from "rasengan";

const Page: PageComponent = () => {
	return (
		<section className='bg-background text-foreground p-6'>
			<div className=''>
				<h1 className='font-raleway text-foreground font-bold text-2xl text-pretty max-w-[600px]'>
					Places where I’ve learned, built, and left a mark.
				</h1>
				<p className='text-foreground/70 mt-6 max-w-[600px]'>
					Over the years, I’ve had the chance to collaborate with incredible
					teams, tackle challenging problems, and grow as both a developer and a
					creator. Each experience has shaped how I think, build, and lead. Here
					are some of the roles and moments that have defined my journey so far.
				</p>
			</div>

			<div className='mt-6'>
				<div className='flex flex-col w-full border-l px-4g'>
					<div className='w-[200px] mb-4 px-4'>
						<h2 className='text-foreground/70 flex items-center gap-2'>
							<BriefcaseBusiness size={18} />
							<span>Work</span>
						</h2>
					</div>
					<div className='w-full flex flex-col gap-2 pl-2'>
						{experiences.map((experience, index) => (
							<Link key={index} to={experience.link} target='_blank'>
								<ExperienceCard data={experience} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

Page.metadata = {
	title: "Experiences",
	description: "Experiences Page",
};

export default Page;
