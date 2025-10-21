const FullScreenNav = () => {
  return (
    <div id="FullScreenNav" className="w-full h-screen absolute top-0 bg-black">
      <div id="all_links">

        <div className="capitalize text-[2vw] tracking-tight roboto border-y-2 border-zinc-50">
            <h1>Work</h1>

            {/* /Scroll Box Div */}
            <div className="">
                <div className=" items-center">
                    <h2>See Everything</h2>
                    <img 
                        src="images/work1.jpg" 
                        alt="work img" 
                    />
                    <h2>See Everything</h2>
                    <img 
                        src="images/work2.jpg" 
                        alt="work img" 
                    />
                </div>
                <div className=" items-center">
                    <h2>See Everything</h2>
                    <img 
                        src="images/work1.jpg" 
                        alt="work img" 
                    />
                    <h2>See Everything</h2>
                    <img 
                        src="images/work2.jpg" 
                        alt="work img" 
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
