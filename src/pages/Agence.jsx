import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 20%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          if (e.progress < 1) {
            const imageIndex = Math.floor(e.progress * imageArray.length);
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  return (
    <div>
      <div
        id="section-1"
        className="max-w-screen box-border overflow-x-hidden selection:bg-[#FFFF00]/80 relative bg-zinc-50"
      >
        {/* #Team Images */}
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] absolute left-[30vw] top-32 rounded-3xl overflow-hidden "
        >
          <img
            ref={imageRef}
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="Team_image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-20">
          {/* #hero section */}
          <div className="flex min-h-screen  justify-center items-end text-[19vw] leading-none font-semibold text-zinc-950 box-border text-center relative roboto">
            <div className="relative -bottom-40">
              SEVEN7Y <br />
              TWO
            </div>
          </div>

          {/* about */}
          <div className="max-w-full boder-box overflow-x-hidden flex justify-end p-10  mt-44 text-zinc-950 font-semibold text-4xl relative">
            <div className="w-[60%] text-">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </div>
          </div>

          {/* #Experties */}
          <div className="px-40 max-w-ful mt-44 text-zinc-950 font-medium leading-tight">
            <div className="w-full flex justify-center capitalize">
              <div className="w-[35%] text-left">Expertise</div>
              <div className="w-[60%] text-left">
                <ul className="leading-tight">
                  <li>stratagy</li>
                  <li>advertising</li>
                  <li>branding</li>
                  <li>design</li>
                  <li>content</li>
                </ul>
              </div>
            </div>

            <div className="w-full flex justify-center mt-32 ">
              <div className="w-[35%] text-left">
                <p className="w-[80%]">
                  Our Work_ Born in curiosity, raised by dedication and fed with
                  a steady diet of creativity.
                </p>
              </div>

              <div className="w-[30%] text-left">
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </div>

              <div className="w-[30%] text-left pl-10">
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-2" className="h-screen"></div>
    </div>
  );
};

export default Agence;
