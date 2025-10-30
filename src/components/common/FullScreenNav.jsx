import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useRef } from "react";
import { usePreviousPath } from "../../context/PreviousPathContext";

const FullScreenNav = () => {
  const scrollBoxRef = useRef(null);
  const boxRef = useRef(null);
  const previousPath = usePreviousPath()
  
  console.log(previousPath)

  gsap.registerPlugin(Observer);

  //Marquee Animation
  useEffect(() => {
    const items = scrollBoxRef.current.querySelectorAll(".scrollItem");
    gsap.to(items, {
      xPercent: -100 * items.length,
      repeat: -1,
      ease: "none",
      duration: 20,
      modifiers: {
        xPercent: gsap.utils.wrap(-80 * items.length, 0),
      },
    });
  }, []);

  //Get Direction of mouse enter and mouse exits
  function getDirection(e, element) {
    const { top, height } = element.getBoundingClientRect();
    const y = e.clientY - top;
    // Top: 1, n Bottom: 2
    return y < height / 2 ? 1 : 2;
  }

  //Overlay animation
  useEffect(() => {
    const observer = Observer.create({
      target: boxRef.current,
      type: "pointer",

      onHover: (event) => {
        const dir = getDirection(event, boxRef.current);
        gsap.set(scrollBoxRef.current, {
          yPercent: dir === 2 ? 100 : dir === 1 ? -100 : 0
        });
        gsap.to(scrollBoxRef.current, { yPercent: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
      },
      onHoverEnd: (event) => {
        const dir = getDirection(event, boxRef.current);
        const props = { duration: 0.3, ease: "power2.in", opacity: 0 };
        if (dir === 1) props.yPercent = -100;
        else if (dir === 2) props.yPercent = 100;

        gsap.to(scrollBoxRef.current, props)
      },
    });
    return () => observer.kill()
  }, []);

  useGSAP( ()=> {
    const tl = gsap.timeline()
    
    tl.from('.link', {
      opacity:0,
      rotateX: 90,
      stagger: {
        amount: 0.2
      }
    })
  } )


  return (
    <div className="w-screen h-screen bg-black relative">
      <nav className="w-screen h-fit">
        <div className="flex justify-between w-full p-1 h-12">
          {/* /Logo */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-11  p-1"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          <a href={previousPath}>
            <div className=" group flex flex-col h-full justify-center items-center pt-1 cursor-pointer">
              <div className="h-[2px] w-[5vw]  bg-white group-hover:bg-[#FFFF00]  transition-transform transform rotate-45"></div>
              <div className="h-[2px] w-[5vw] bg-white group-hover:bg-[#FFFF00] transition-transform transform -rotate-45"></div>
            </div>
          </a>
        </div>
      </nav>

      {/* /Links */}
      <div className=" w-full h-[80%] origin-top overflow-x-hidden pt-20 flex flex-col gap-5">

        {/* /work */}

        <div ref={boxRef} className="link h-[20%] relative overflow-hidden">
          <div className="h-full pb-3 box-border uppercase font-semibold text-7xl lg:text-[7vw] text-zinc-50 border-y-1 border-zinc-50 flex justify-center items-center leading-none">
            Work
          </div>

          {/* //Scroll Box */}
          <div
            ref={scrollBoxRef}
            className="opacity-0 absolute top-0 h-full w-[470%] uppercase text-[6vw] text-black font-semibold tracking-tight text-center leading-none bg-[#FFFF00] flex items-center gap-5 pb-5"
          >
            <div className="scrollItem box-border h-full flex gap-5 justify-start itmes-center w-fit">
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work1.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] relative top-2 rounded-full object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work2.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] rounded-full relative top-2 object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work1.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] relative top-2 rounded-full object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work2.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] rounded-full relative top-2 object-contain "
              />
            </div>

            <div className="scrollItem box-border h-full flex gap-5 justify-start itmes-center w-fit">
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work1.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] relative top-2 rounded-full object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work2.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] rounded-full relative top-2 object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work1.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] relative top-2 rounded-full object-contain "
              />
              <h1 className="whitespace-nowrap">See Everything</h1>
              <img
                src="./images/work2.jpg"
                alt="work image"
                className="w-[13vw] h-[5vw] rounded-full relative top-2 object-contain "
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FullScreenNav;
