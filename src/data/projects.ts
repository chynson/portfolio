import project from "../types/project.ts";
import images from "../types/images.ts";

const projects: project[] = [
    {
        title: "Evolving Creature Sim",
        imgUrl: images.creatureSimImg,
        stack: ["Python", "Pyxel"],
        link: "https://github.com/heyitszackb/GA"
    },
    {
        title: "Checkers AI",
        imgUrl: images.checkersImg,
        stack: ["Python"],
        link: ""
    },
    {
        title: "Mobile Karaoke",
        imgUrl: "",
        stack: ["React", "Typescript", "SQL"],
        link: ""
    },
    {
        title: "Data Validation Process",
        imgUrl: "",
        stack: ["C#", "SQL", ".NET"],
        link: ""
    },
    {
        title: "Portfolio Website",
        imgUrl: images.portfolioImg,
        stack: ["React", "Typescript", "TailwindCSS"],
        link: "https://github.com"
    },
];

export default projects;