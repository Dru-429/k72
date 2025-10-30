import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const path = useLocation().pathname;
  console.log(path);

  return (
    <div
      className={`${
        path === "/fullnav" ? "hidden" : "visible"
      } z-30 absolute top-0 flex items-start justify-between w-full h-fit`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 p-1 mix-blend-difference"
        viewBox="0 0 103 44"
      >
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
        />
      </svg>

      <a href="/fullnav">
        <div className="cursor-pointer group w-[12vw] h-10 text-zinc-50 overflow-x-hidden">
          <div
            className="bg-black w-[12vw] h-full "
            onMouseEnter={() => {
              navRef.current.style.height = "100%";
            }}
            onMouseLeave={() => {
              navRef.current.style.height = "0%";
            }}
          >
            <div
              ref={navRef}
              className="bg-[#FFFF00] w-[12vw] h-0 absolute top-0 transition-all ease-in-out"
            ></div>

            <div className="flex flex-col gap-2 relative top-4 z-10 items-end pr-3">
              <div className="h-[1px] w-12 rounded-md group-hover:bg-zinc-950 bg-zinc-100"></div>
              <div className="h-[1.5px] w-8 bg-zinc-100 group-hover:bg-zinc-950 rounded-md"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
