const FullScreenNav = () => {
  return (
    <div id="FullScreenNav" className="w-full h-screen absolute top-0 bg-black flex justify-center">


      <div id="all_links " className="w-full h-72% pt-36">

        {/* /Work Link */}
        <div className="max-w-screen w-screen h-1/4 box-border text-zinc-100 border-y-1 border-zinc-50 relative uppercase flex justify-center items-center">
          <h1 className="text-zinc-100 text-[8vw] tracking-wider font-semibold leading-none uppercase">WORK</h1>

          {/* Link Scroll Box Div */}
          <div className="h-full flex gap-20 flex-nowrap absolute top-0 text-zinc-950 text-[8vw] leading-none upercase bg-[#FFFF00]  uppercase tracking-tighter">
            <div className="flex gap-5 justify-center item-center leading-none  bg-red-500 pb-24 min-w-screen" >
              <h2 className="whitespace-nowrap">See Everything</h2>
              <img src="images/work1.jpg" alt="work img" className="h-auto w-[15vw] rounded-full object-contain " />
              <h2 className="whitespace-nowrap">See Everything</h2>
              <img src="images/work2.jpg" alt="work img" className="h-auto w-[15vw] rounded-full object-contain " />
            </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default FullScreenNav;
