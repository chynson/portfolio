
function Intro() {
    return (
        <div className="flex
                        bg-primary
                        pb-40
                        my-5
                        rounded-3xl">
            <div className="basis-3/5">
                <h1 className="text-4xl md:text-7xl font-bold text-secondary text-nowrap
                               mt-10 mb-1 md:mb-3 mx-20">
                    Carl Hynson
                </h1>
                <p className="text-base md:text-xl font-extrabold
                              mb:3">
                </p>
            </div>
            <ul className="text-2xl text-gray-orange font-bold
                          mt-10 mb-1 md:mb-3 mx-20
                          list-disc">
                <li>Computer Science Student</li>
                <li>Full Stack Developer</li>
            </ul>
        </div>
    )
}

export default Intro;
