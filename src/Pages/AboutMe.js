import React from 'react';
import aboutMeImage from '../Assests/Images/burhanSecond.png';

const AboutMe = () => {

    return (
      <div style={{ overflow: "hidden" }} id="aboutMe" className="my-12">
        <h3
          style={{
            marginTop: "250px",
            // Media query for laptops and larger screens (remove margin):
            "@media (min-width: 768px)": {
              marginTop: "0", // Set margin to 0 for wider screens
            },
          }}
          className="text-md underline underline-offset-1 text-center my-8 text-accent"
        >
          About Me
        </h3>

        <div data-aos="zoom-out-left" className="hero">
          <div className="hero-content flex-col lg:flex-row gap-6 md:gap-20">
            <div>
              <img
                src={aboutMeImage}
                className="w-md md:max-w-sm rounded-lg"
                style={{
                  marginTop: "20px",
                  height: "300px",
                  width: "300px",
                  borderRadius: "50%",
                }}
                alt="Haris Bin Rehan"
              />
            </div>
            <div className="w-xs md:max-w-4xl">
              <h1 className="text-4xl font-bold">Why Hire Me ?</h1>
              <p className="py-6 md:pr-8">
                As a MERN Stack Developer, I offer a unique blend of technical
                prowess, creative problem-solving, and a passion for delivering
                exceptional results. Proficient in MongoDB, Express.js,
                React.js, and Node.js, I specialize in crafting seamless,
                user-centric web applications. With a solid foundation in
                Computer Science and a commitment to continuous learning, I
                bring a collaborative and innovative approach to every project.
                Choose me, and you're not just hiring a developer – you're
                gaining a dedicated partner ready to turn your vision into
                reality efficiently and with style.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;