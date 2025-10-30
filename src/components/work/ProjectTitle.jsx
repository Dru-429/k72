const ProjectTitle = ({
  image1,
  link1,
  name1,
  author1,
  year1,
  image2,
  link2,
  name2,
  author2,
  year2,
}) => {
  return (
    <>
      <div className="group lg:w-1/2 group transition-all relative rounded-none hover:rounded-3xl overflow-hidden h-full ">
        <img
          className="h-full w-full object-cover"
          src={image1}
          alt={name1}
          loading="lazy"
        />

        {/* //overlay */}
        <a href={link1}>
          <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0  items-center justify-center bg-[#00000068]">
            <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
              View Project
            </div>
          </div>
        </a>

        {/* //Header div */}
        <div className="group-hover:opacity-100 group-hover:top-0 w-screen fixed opacity-0 -top-10 -left-0 bg-zinc-50 border-y-2 border-zinc-950 py-2 px-2 leading-none box-border pr-6 z-40 transition-opacity duration-700 ease-in">
          <div className="w-full flex justify-between items-center text-zinc-950 font-semibold text-2xl ">
            <p className=" w-fit relative">
              <span className="z-50 relative">{author1}</span>
              <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
            </p>
            <p className=" w-fit relative">
              <span className="z-50 relative">{}name1</span>
              <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
            </p>
            <p className=" w-fit relative">
              <span className="z-50 relative">{year1}</span>
              <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
            </p>
          </div>
        </div>
      </div>

      <div className=" group lg:w-1/2 group transition-all relative rounded-none hover:rounded-3xl overflow-hidden h-full ">
        <img
          className="h-full w-full object-cover text-xl text-zinc-950"
          src={image2}
          loading="lazy"
          alt={name2}
        />

        {/* //Overlay */}
        <a href={link2}>
          <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0 items-center justify-center bg-[#00000068]">
            <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
              View Project
            </div>
            {/* //Header div */}
            <div className="header group-hover:opacity-100 group-hover:top-0 w-screen fixed opacity-0 -top-10 -left-0 bg-zinc-50 border-y-2 border-zinc-950 py-2 px-2 leading-none box-border pr-6 z-40 transition-opacity duration-700 ease-in">
              <div className="w-full flex justify-between items-center text-zinc-950 font-semibold text-2xl ">
                <p className=" w-fit relative">
                  <span className="z-50 relative">{author2}</span>
                  <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
                </p>
                <p className=" w-fit relative">
                  <span className="z-50 relative">{name2}</span>
                  <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
                </p>
                <p className=" w-fit relative">
                  <span className="z-50 relative">{year2}</span>
                  <div className="z-[35] highlighter w-full group-hover:h-[14px] group-hover:opacity-100 opacity-0 h-0 bg-[#ffff04] transition-all duration-300 ease-in absolute top-1/2"></div>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectTitle;
