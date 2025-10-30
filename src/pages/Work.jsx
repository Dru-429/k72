import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectTitle from '../components/work/ProjectTitle'
import ProjectData from '../components/work/ProjectData'


const Work = () => {

  const projectData = ProjectData

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4  bg-zinc-100'>
      {/* //Hero section */}
      <div className="w-full h-[65vh] flex justify-start items-end gap-2 relative box-border uppercase text-[11.5vw] leading-none font-semibold text-zinc-950">
        <div className="flex">
          work
          <p className="text-[2.5vw] relative top-6 ">10</p>
        </div>
      </div>

      {/* //Projects */}
      <div className='-lg:mt-20 lol'>
        {projectData.map(function (items, idx) {
          return (
            <div key={idx} className='hero w-full lg:h-[450px] mb-4 flex lg:flex-row flex-col gap-2'>
              <ProjectTitle 
                image1= {items[0].img_url}
                link1= {items[0].link}
                name1= {items[0].name}
                author1= {items[0].author}
                year1 = {items[0].year}
                
                image2= {items[1].img_url}
                link2= {items[1].link}
                name2= {items[1].name}
                author2= {items[1].author}
                year2 = {items[1].year}

              />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Work
