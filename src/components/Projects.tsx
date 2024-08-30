import projects from "../data/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

function Projects() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
                    {projects.map(project => (
                        <ProjectCard
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;
