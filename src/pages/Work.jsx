import ProjectData from "../components/work/ProjectData";
import ProjectTitle from "../components/work/ProjectTitle";

const Work = () => {

  const projectData = ProjectData

  return (
    <div className="bg-zinc-50 pl-3">
      {/* //Hero section */}
      <div className="w-full h-[70vh] flex justify-start items-end gap-2 relative box-border uppercase text-[11.5vw] leading-none font-semibold text-zinc-950">
        <div className="flex">
          work
          <p className="text-[2.5vw] relative top-6 ">16</p>
        </div>
      </div>

      {/* //work */}
      <div className=" w-full min-h-screen -mt-2">
        <div className="w-full flex gap-3 flex-wrap">
          {
            projectData.map((item, index) => (
              <ProjectTitle
                key={index}
                index={index}
                name={item.name}
                image={item.img_url}
                link={item.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Work;
