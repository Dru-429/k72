
const Video = () => {
  return (
    <div className='w-full h-full'>
        <video 
            autoPlay
            loop
            muted
            className='w-full h-full object-cover'
            src="./videos/intro.mp4"
        > 
        </video>
    </div>
  )
}

export default Video