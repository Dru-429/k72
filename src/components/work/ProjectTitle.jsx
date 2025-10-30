
const ProjectTitle = ({ image1, link1, name1, author1, year1, image2, link2, name2, author2, year2,}) => {
  return (
    <>
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-3xl overflow-hidden h-full ">
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
      </div>

      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-3xl overflow-hidden h-full ">
        <img 
            className="h-full w-full object-cover" 
            src={image2} 
            loading="lazy"
            alt={name2} 
        />

        {/* //Overlay */}
         <a href={link2}>
        <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0  items-center justify-center bg-[#00000068]">
          <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
            View Project
          </div>
        </div>
      </a>
      </div>
    </>
  );
};

export default ProjectTitle;
