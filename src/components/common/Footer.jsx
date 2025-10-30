import { Heart, Globe } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="lg:px-2 pt-16 pb-5" >
        {/* Social Links & Contact */}
        <div className=" px-2 lg:px-0 box-border flex items-center justify-between mb-40">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-100 text-zinc-100 hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all duration-300"
            >
              <span className="font-bold text-sm">FB</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-100 text-white hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all duration-300"
            >
              <span className="font-bold text-sm">IG</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-white hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all duration-300"
            >
              <span className="font-bold text-sm">IN</span>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-white hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all duration-300"
            >
              <span className="font-bold text-sm">BE</span>
            </a>
          </div>

          {/* Contact Button */}
          <button className=" box-border flex items-center gap-2 px-8 py-3 border-2 border-white rounded-full text-white font-bold hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all duration-300 group">
            <span>CONTACT</span>
            <Heart className="w-5 h-5 group-hover:fill-black" />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
          {/* Location & Time */}
          <div className="px-2 lg:px-0 flex items-center gap-2 text-sm text-zinc-100">
            <Globe className="w-4 h-4" />
            <span>MONTREAL_04:09:09</span>
          </div>


          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-2 lg:px-0 text-sm text-zinc-100 font-bold hover:text-[#FFFF00] transition-colors uppercase tracking-wide"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
