import IProject from "../types/project.ts";

function ProjectCard(project: IProject) {
    return (
        <div className="bg-primary rounded-3xl overflow-hidden">
            <img src={project.imgUrl}
                 alt={project.alt}
                 className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-xl font-semibold text-gray-orange">{project.title}</h3>
                <p className="text-gray-green">{project.link}</p>
                <p className="text-gray-green">
                    {project.stack.map(item => (
                        <span>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;
