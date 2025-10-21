import Video from "./Video"

const TopText = () => {
  return (
    <div className="text-8xl font-semibold leading-none uppercase text-[#FFFF00] md:text-center relative oswald">
        <div>The spark for</div>
        <div className="flex justify-center items-center ">
            all 
            <div className="h-[7rem] w-[14rem] border-4 border-[#FFFF00] rounded-full overflow-hidden bg-black">
                <Video />
            </div>
            things
        </div>
        <div>
          <span>
            creative
          </span>
        </div>
    </div>
  )
}

export default TopText