const Agence = () => {
  return (
    <div className="max-w-screen box-border overflow-x-hidden selection:bg-[#FFFF00]/80">
        <div className="mb-20">
            {/* #hero section */}
            <div className="flex min-h-screen  justify-center items-end text-[19vw] leading-none font-semibold text-zinc-950 box-border text-center relative roboto">
                <div className="relative -bottom-40">
                    SEVEN7Y <br />TWO
                </div>
            </div>

            {/* about */}
            <div className="max-w-full boder-box overflow-x-hidden flex justify-end p-10  mt-44 text-zinc-950 font-semibold text-4xl">
                <div className="w-[60%] text-">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
                </div>
            </div>

            {/* #Experties */}
            <div className="px-40 max-w-ful mt-44 text-zinc-950 font-medium leading-tight">
                <div className="w-full flex justify-center capitalize">
                    <div className="w-[35%] text-left">Expertise</div>
                    <div className="w-[60%] text-left">
                        <ul className="leading-tight">
                            <li>stratagy</li>
                            <li>advertising</li>
                            <li>branding</li>
                            <li>design</li>
                            <li>content</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-32 ">
                    <div className="w-[35%] text-left">
                        <p className="w-[80%]">
                            Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.
                        </p>
                    </div>

                    <div className="w-[30%] text-left">
                        Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
                    </div>

                    <div className="w-[30%] text-left pl-10">
                        Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Agence