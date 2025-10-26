const Work = () => {
  return (
    <div className="bg-zinc-50 px-2">
      {/* //Hero section */}
      <div className="w-full h-[70vh] flex justify-start items-end gap-2 relative box-border uppercase text-[11.5vw] leading-none font-semibold text-zinc-950">
        <div className="flex">
          work
          <p className="text-[2.5vw] relative top-6 ">16</p>
        </div>
      </div>

      {/* //work */}
      <div className="w-full min-h-screen -mt-2">
        <div className="flex gap-2 flex-2 ">
          {/* /work1 */}
          <div className="relative w-1/2 min-h-40 group hover:rounded-4xl transition-all duration-200 overflow-hidden ">
            <img
              src="./images/work2.jpg"
              alt="project 1"
              className="object-cover group-hover:scale-[105%] transition-all duration-200"
            />
            {/* /link */}
            <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0  items-center justify-center bg-[#00000024]">
              <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
                View Project
              </div>
            </div>
          </div>

          <div className="relative w-1/2 min-h-40 group hover:rounded-4xl transition-all duration-200 overflow-hidden ">
            <img
              src="./images/work2.jpg"
              alt="project 1"
              className="object-cover group-hover:scale-[105%] transition-all duration-200"
            />
            {/* /link */}
            <div className="hidden group-hover:flex transition-all duration-200 w-full h-full absolute top-0  items-center justify-center bg-[#00000024]">
              <div className="text-5xl text-zinc-50 border-2 rounded-3xl px-4 font-semibold uppercase ">
                View Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
