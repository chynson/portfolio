import projects from "../data/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

function Projects() {
    return (
        <>
            <h2 className="text-secondary font-bold text-4xl mb-4">Projects</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
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
