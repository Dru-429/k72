import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProjectTitle = ({index, name, image, link}) => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP( () => {
    gsap.from( '.imgWarp',{
      height: '100px',
      stagger: 'o.2'
    })
  })

  return (
    <div key={index} className=" relative max-w-[49%] lg:h-[450px] box-border min-h-40 group hover:rounded-4xl transition-all duration-200 overflow-hidden ">
      <img
        src={image}
        alt={name} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-[105%] transition-all duration-200 "
      />

      {/* /link */}
      <a href={link}>
        <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0  items-center justify-center bg-[#00000068]">
          <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
            View Project
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectTitle;
