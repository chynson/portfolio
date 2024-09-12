
function Intro() {

    return (
        <div className="flex flex-col h-screen justify-center">
            <div className="flex flex-col rounded-3xl bg-background transition-all duration-500 ease-in-out">
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-secondary text-nowrap
                               mb-1 md:mb-3 mx-10">
                    Carl Hynson
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-orange
                              mb-1 md:mb-3 mx-10 transition-opacity duration-300 linear">
                    Computer Science student with a passion for <b className="text-secondary">creating things</b> of <b className="text-secondary">value.</b>
                </p>
            </div>
        </div>
    )
}

export default Intro;
