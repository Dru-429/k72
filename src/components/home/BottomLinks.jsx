import { Link } from "react-router-dom"

const BottomLinks = () => {
  return (
    <div className="-scale-50 lg:scale-0 flex justify-center gap-20 text-8xl text-[#FFFF00]  oswald uppercase tracking-tighter leading-none">
        <Link to={'/work'} className="border-3 px-8 hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-105 border-[#FFFF00] bg-[#f6f6b022] rounded-full flex justify-center items-center py-2 ">Work</Link>
        <Link to={'/agence'} className="border-3 px-8 hover:text-[#D3FD50] hover:border-[#D3FD50] hover:scale-105 border-[#FFFF00] bg-[#f6f6b022] rounded-full flex justify-center items-center py-2 ">Agency</Link>
    </div>
  )
}

export default BottomLinks