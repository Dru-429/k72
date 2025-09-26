import BottomLinks from "./components/home/BottomLinks";
import TopText from "./components/home/TopText";
import Video from "./components/home/Video";

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full blur-[4px] fixed">
        <Video />
      </div>

      <div className="max-w-screen h-full relative flex flex-col justify-between box-border p-5 pt-0 ">
        <div>
          {/* top text */}
          <TopText />
        </div>
        <div className="text-xs tracking-tighter text-[#FFFF00]/70 max-w-3xl mx-auto w-1/6 absolute top-1/2 right-0 text-left selection:bg-[#FFFF00]/80 selection:text-black">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </div>
        <div>
          {/* bottom Buttons */}
          <BottomLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
