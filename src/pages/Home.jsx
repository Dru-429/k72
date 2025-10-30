import TopText from "../components/home/TopText";
import Video from "../components/home/Video";
import BottomLinks from "../components/home/BottomLinks";

const Home = () => {

  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full blur-[4px] fixed">
        <Video />
      </div>

      <div className="max-w-screen h-full relative flex flex-col justify-between box-border lg:p-5 px-2 pt-100 lg:pt-0 ">
        <div>
          {/* top text */}
          <TopText />
        </div>
        <div className=" text-lg lg:text-xs tracking-tighter text-[#FFFF00]/90 bg-[#f6f6b022] lg:bg-[#f6f6b000] lg:text-[#FFFF00]/70 lg:max-w-3xl mx-auto lg:w-1/6 w-full lg:absolute top-1/2 right-0 text-left selection:bg-[#FFFF00]/80 selection:text-black">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </div>
        <div className="rotate-180 lg:rotate-0">
          {/* bottom Buttons */}
          <BottomLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
