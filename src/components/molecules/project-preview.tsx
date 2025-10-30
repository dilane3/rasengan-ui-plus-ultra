import { Project } from "@/data/projects";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "rasengan";

export const ProjectPreview = ({ data }: { data: Project }) => {
	return (
		<div className={cn("w-full overflow-auto pb-20 bg-background")}>
			<div className='p-2'>
				<img
					src={data.image}
					alt={data.title}
					className='w-full h-full object-cover rounded-lg border'
				/>

				<div className='py-2 px-2'>
					<h2 className='text-lg font-semibold text-foreground'>
						{data.title}
					</h2>
					<p className='text-sm text-muted-foreground mt-2'>
						{data.description}
					</p>

					<div className='mt-4 w-full gap-2 flex items-center justify-between'>
						<Link
							to={data.links[0].value}
							className='w-[calc(100%-2.5rem-8px)]'
							target='_blank'
						>
							<Button className='w-full h-10'>Demo</Button>
						</Link>
						<Link to={data.links[1].value} target='_blank'>
							<Button
								size='icon'
								variant={"outline"}
								className='size-10 text-foreground'
							>
								<Github />
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='mt-4 p-4 text-foreground'>
				<h2 className='text-lg font-semibold'>Technologies</h2>
				{data.technologies.map((technology, index) => (
					<div key={index} className='border-b w-full py-2 text-foreground/70'>
						<span className='text-sm'>{technology}</span>
					</div>
				))}
			</div>
		</div>
	);
};
