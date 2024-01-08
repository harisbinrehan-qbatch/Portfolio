import React from "react";
import bannerPhoto from "../Assests/Images/bannerPhoto.png";
import Typed from "react-typed"; 

const Banner = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/11vGtBqOVJOj01d3tJZq8S70rLpERggUY/view?usp=drivesdk"
    );
  };
  return (
    <div style={{}}>
      <div data-aos="zoom-in" className="hero h-[85vh]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5">
          <img
            src={bannerPhoto}
            className="w-sm md:max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-xs md:max-w-4xl">
            <p className="text-md">Hello I'm</p>
            <h1 className="text-2xl md:text-5xl font-bold py-1">
              Haris Bin Rehan
            </h1>
            <Typed
              className="text-xl md:text-3xl text-red-500"
              strings={["Full-Stack Web Developer", "MERN Stack Developer"]}
              typeSpeed={80}
              backSpeed={60}
              loop
            />
            <p className="text-md py-4 md:pr-8">
              As a passionate MERN Stack Developer, I specialize in crafting
              dynamic and efficient web applications using MongoDB, Express.js,
              React.js, and Node.js. With a strong foundation in full-stack
              development, I bring creativity and technical expertise to every
              project. From designing intuitive user interfaces with React to
              building robust server-side applications with Node.js, I thrive in
              delivering seamless and scalable solutions. My commitment to
              staying updated with the latest technologies ensures that I can
              bring innovation and excellence to each development endeavor.
              Let's collaborate to turn your ideas into powerful and engaging
              digital experiences.
            </p>
            <div className="flex gap-8">
              <button onClick={handleDownloadCV} className="btn btn-accent">
                Download Resume
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.upwork.com/freelancers/~01e824f8380fdebd5d"
                  );
                }}
                className="underline bg-slate-700 rounded-md text-accent p-3"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
