import images from "../types/images.ts";

function Bio() {
    return (
        <div className="flex flex-col sm:flex-row sm:h-[500px]
                        bg-primary
                        my-5
                        rounded-3xl">
            <img src={images.carlBioImg} alt="Carl Hynson" className="m-16 md:m-16 sm:basis-2/5 rounded-3xl
                                                                      transition-all hover:scale-110 duration-300"/>
            <div className="sm:basis-3/5 sm:mt-16 mb-6 mx-10 ">
                <h2 className="text-secondary text-nowrap font-bold text-4xl mb-4">Who am I?</h2>
                <p className="text-base md:text-lg font-semibold text-gray-green">
                    Currently a student at Taylor University studying Computer Science with
                    <span className="font-extrabold italic"> 2 internships</span> under my belt. Excited about
                    <span className="font-extrabold italic"> creating software</span> and
                    <span className="italic font-extrabold"> solving problems</span>, and always seeking to learn and expand
                    my opportunities.
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-orange py-2">
                    <a href="https://www.linkedin.com/in/carl-hynson-369435229/" className="px-2 transition-colors hover:text-secondary">LinkedIn</a>
                    <a href="https://github.com/chynson" className="px-2 transition-colors hover:text-secondary">GitHub</a>
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-orange"></p>
            </div>
        </div>
    )
}

export default Bio