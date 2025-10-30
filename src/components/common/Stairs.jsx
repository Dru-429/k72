import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (prop) => {
  const stairBox = useRef(null);
  const appBox = useRef(null);
  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairBox.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(stairBox.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(appBox.current, {
        opacity: 0,
        delay: 1.3,
    })



  }, [currentPath]);

  return (
    <div>
      <div ref={stairBox} className="w-full h-screen z-30 fixed top-0">
        <div className="w-full h-full flex">
          <div className="stair h-full w-1/6 bg-black "></div>
          <div className="stair h-full w-1/6 bg-black "></div>
          <div className="stair h-full w-1/6 bg-black "></div>
          <div className="stair h-full w-1/6 bg-black "></div>
          <div className="stair h-full w-1/6 bg-black "></div>
          <div className="stair h-full w-1/6 bg-black "></div>
        </div>
      </div>

      <div ref={appBox}>
        {prop.children}
      </div>
    </div>
  );
};

export default Stairs;
