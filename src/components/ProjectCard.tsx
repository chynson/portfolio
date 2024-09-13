import IProject from "../types/project.ts";
import {useState} from "react";
import ExpandedProjectModal from "./ExpandedProjectModal.tsx";

function ProjectCard(project: IProject) {

    const [cardExpanded, showExpandedCard] = useState<boolean>(false);

    function toggleExpandedCard() {
        showExpandedCard(true);
    }

    return (
        <div className="bg-primary rounded-3xl overflow-hidden cursor-pointer
                        transition-all duration-300 hover:scale-95"
             onClick={toggleExpandedCard}>
            <img src={project.imgUrl}
                 alt={project.alt}
                 className="w-full h-36 md:h-48 object-cover"
            />
            <div className="w-full p-4">
                <h3 className="text-xl font-semibold text-gray-orange">{project.title}</h3>
                <p className="text-gray-green mb-2 hover:underline"><a href={project.link}>{project.link}</a></p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-primary">
                    {project.stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 rounded-full border-gray-green bg-gray-green">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
            {cardExpanded &&
                <ExpandedProjectModal expanded={cardExpanded} onClose={() => showExpandedCard(false)}/>
            }
        </div>
    )
}

export default ProjectCard;
