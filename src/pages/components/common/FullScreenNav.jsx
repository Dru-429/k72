const FullScreenNav = () => {
  return (
    <div id="FullScreenNav" className="w-full h-screen absolute top-0 bg-black">
      <div id="all_links">
        <div className="capitalize text-[17vw] roboto">
            <h1>Work</h1>

            {/* /Scroll Box Div */}
            <div>
                <h2>See Everything</h2>
                <img 
                    src="images/work1.jpg" 
                    alt="work img" 
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
