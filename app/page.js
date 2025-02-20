import Image from "next/image";
import Link from "next/link";

import StackImage from '../public/stack.webp';

import ReviewPage from './Pages/Review';
import EducationPage from './Pages/Education';
import WorkExperience from "./Pages/WorkExperience";
import ContactUs from './Pages/Contact';

import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import AmeerYousufPic from '../public/ameeryousuf.png';

export default function Home() {

  const socialLinks = [
    { Component: GrFacebookOption, altText: 'facebook', link: 'https://www.facebook.com/yousufbhatti2002' },
    { Component: GrGithub, altText: 'github', link: 'https://github.com/yousufalipk' },
    { Component: GrInstagram, altText: 'instagram', link: 'https://www.instagram.com/yousufbhatti_1' },
    { Component: GrLinkedinOption, altText: 'linkedin', link: 'https://www.linkedin.com/in/yousufalipk' },
  ];

  const topTechStack = [
    { icon: '/stack/topStack/1.svg', altText: 'html_logo' },
    { icon: '/stack/topStack/2.svg', altText: 'css_logo' },
    { icon: '/stack/topStack/3.svg', altText: 'javascript_logo' },
    { icon: '/stack/topStack/4.svg', altText: 'react_logo' },
    { icon: '/stack/topStack/5.svg', altText: 'node_logo' }
  ]

  const midLeftStack = [
    { icon: '/stack/midLeftStack/6.svg', altText: 'express_logo' },
    { icon: '/stack/midLeftStack/7.svg', altText: 'mongo_logo' },
    { icon: '/stack/midLeftStack/8.svg', altText: 'tailwind_logo' },
    { icon: '/stack/midLeftStack/9.svg', altText: 'github_logo' },
    { icon: '/stack/midLeftStack/10.svg', altText: 'linux_logo' },
    { icon: '/stack/midLeftStack/11.svg', altText: 'vite_logo' }
  ]

  const midRightStack = [
    { icon: '/stack/midRightStack/12.svg', altText: 'vercel_logo' },
    { icon: '/stack/midRightStack/13.svg', altText: 'netlify_logo' },
    { icon: '/stack/midRightStack/14.png', altText: 'railway_logo' },
    { icon: '/stack/midRightStack/15.svg', altText: 'render_logo' },
    { icon: '/stack/midRightStack/16.svg', altText: 'firebase_logo' },
    { icon: '/stack/midRightStack/17.png', altText: 'jwt_logo' }
  ]

  const bottomStack = [
    { icon: '/stack/bottomStack/18.svg', altText: 'powerBi_logo' },
    { icon: '/stack/bottomStack/19.svg', altText: 'tableau_logo' },
    { icon: '/stack/bottomStack/20.png', altText: 'gpt-3.5_logo' },
    { icon: '/stack/bottomStack/21.svg', altText: 'postman_logo' },
    { icon: '/stack/bottomStack/22.svg', altText: 'insomnia_logo' }
  ]

  const youtubeVideos = [
    { image: '/youtube/yt1.png', title: 'Class Connect (FYP)', link: 'https://www.youtube.com/watch?v=XXXXXXX' },
    { image: '/youtube/yt2.png', title: 'Loan Prediction System', link: 'https://www.youtube.com/watch?v=XXXXXXX' },
    { image: '/youtube/yt3.jpeg', title: 'Chat Bot Gpt-3.5', link: 'https://www.youtube.com/watch?v=XXXXXXX' },
    { image: '/youtube/yt4.png', title: 'BURAQ Luxury Rentals', link: 'https://www.youtube.com/watch?v=XXXXXXX' },
    { image: '/youtube/yt5.png', title: 'Panda Tap & Kvants TMA', link: 'https://www.youtube.com/watch?v=XXXXXXX' }
  ];

  return (
    <>
      {/* Landing Page 1 */}
      <section id="home" className="parent relative w-full h-[90vh] md:h-[115vh] bg-gradient-to-t from-[#32b0b4] to-[#42548a] flex flex-col overflow-hidden">
        <div className="w-full h-[100vh] flex flex-col md:flex-row justify-center items-center">
          {/* Left Section */}
          <div className="animate-slideUpLeftLanding w-[80%] md:w-1/2 h-1/2 md:h-full flex flex-col items-center md:items-start justify-center gap-5 md:pl-[10vw]">
            <h1 className="text-center md:text-start text-5xl md:text-6xl lg:text-8xl font-bold leading-10 md:leading-[5.5vw] bg-gradient-to-tl from-[#ffffff] to-[#53cfd6] text-transparent bg-clip-text">
              AMEER YOUSUF
            </h1>
            <p className="text-center md:text-start text-sm md:text-sm lg:text-xl font-thin">
              Founder & CEO at{' '}
              <a
                href="https://bhattisphere.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline opacity-80"
              >
                BhattiSphere.com
              </a>{' '}
              | Software Engineer | Innovator | MERN Stack Developer | AI & Automation Enthusiast | Building Next-Gen Tech Solutions
            </p>
            <div className="flex justify-start items-center gap-8">
              {socialLinks.map((link, index) => {
                const Icon = link.Component;
                return (
                  <div
                    key={index}
                    className="w-9 h-9 md:w-8 md:h-8 lg:w-12 lg:h-12 flex justify-center items-center border-[3px] border-white rounded-full hover:translate-y-[-5px] transition-transform"
                  >
                    <a
                      href={link.link}
                      alt={link.altText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5 md:w-4 md:h-4 lg:w-7 lg:h-7" />
                    </a>
                  </div>
                )
              })}
            </div>
            <div className="hover:translate-y-[-5px] transition-transform">
              <a
                href="https://www.linkedin.com/in/yousufalipk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#32b0b4] py-1 px-3 md:py-2 md:px-6 text-lg md:text-xl font-semibold rounded-3xl"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="opacity-0 animate-slideUpRightLanding w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center gap-5 pr-0 md:pr-[10vw]">
            <p className="text-[15rem] md:text-[22rem] lg:text-[32rem] font-bold absolute top-0 md:top-[8vh] lg:-top-[5vh]">AY</p>
            <Image
              src={AmeerYousufPic}
              alt="ameeryousuf_pic"
              className="absolute -bottom-14 z-20 transform scale-x-[-1] w-[380px] h-[380px] lg:h-[650px] lg:w-[650px]"
              style={{
                filter: 'drop-shadow(0 30px 25px rgba(0, 0, 0, 1))',
              }}
            />
          </div>
        </div>
        <div className="absolute -bottom-2 w-full h-[15vh] flex justify-center items-center parent-bg">
          <div className="ticker custom-gradient transform rotate-[-1deg] z-10">
            <span className="ticker-text gradient-text text-2xl font-bold py-2">
              Founder & CEO at BhattiSphere.com | Software Engineer | Innovator | MERN Stack Developer | AI & Automation Enthusiast | Building Next-Gen Tech Solutions
            </span>
            <span className="ticker-text gradient-text text-2xl font-bold py-2">
              Founder & CEO at BhattiSphere.com | Software Engineer | Innovator | MERN Stack Developer | AI & Automation Enthusiast | Building Next-Gen Tech Solutions
            </span>
          </div>
        </div>
      </section>

      {/* Introduction Page 2 */}
      <section id="intro" className="relative z-50 w-full md:h-[120vh] bg-[#202020] px-10 py-16 md:py-5 flex flex-col md:flex-row justify-center items-center overflow-hidden">
        {/* Left Secction */}
        <div className="animate-slideUpLeftIntro w-full md:w-1/2 h-[20%] md:h-full flex flex-col justify-end pb-[4vw] items-center gap-4">
          <h1 className="text-4xl font-bold">INTRODUCTION</h1>
          <Image
            src={AmeerYousufPic}
            alt="ameeryousuf_pic"
            className="bg-white rounded-xl w-[380px] h-[380px] lg:h-[650px] lg:w-[650px]"
          />
        </div>
        {/* Right Section */}
        <div className="opacity-0 animate-slideUpRightIntro w-full md:w-1/2 h-[80%] md:h-full flex flex-col justify-start items-center pt-10">
          <div className="text-start flex flex-col gap-5">
            <p>
              Ameer Yousuf Ali Bhatti is a skilled software engineer and web developer from Islamabad, Pakistan, with a strong educational foundation from Bahria University and SZABIST. As a dynamic and motivated professional, he brings expertise in HTML, CSS, JavaScript, and the MERN stack, along with hands-on experience in GitHub and cloud platforms.
            </p>
            <p>
              Ameer has gained valuable professional experience through internships at Mehdi Tech and NADRA. At Mehdi Tech, he honed his skills in React.js and Node.js, contributing to projects such as a Telegram dashboard app and mini-apps like a Tic Tac Toe game and Pizza App. At NADRA, he developed detailed dashboards using Power BI and Tableau, providing insights through advanced data analysis and visualization.
            </p>
            <p>
              His commitment to innovation and problem-solving is evident in projects like &quot;ClassConnect,&quot; a facial recognition-based attendance system, and &quot;CyberSphereX,&quot; a custom chatbot utilizing GPT-3.5. He has consistently demonstrated the ability to independently manage projects while fostering collaboration within teams.
            </p>
            <p>
              Ameer’s notable technical projects showcase his expertise in technologies such as Tailwind.css, Firebase, and JWT authentication. His strong analytical skills and willingness to learn have made him a valuable contributor to each initiative he undertakes. His GitHub repository is a testament to his practical experience and creative solutions in software engineering.
            </p>
            <p>
              With a proactive approach to professional growth, Ameer continues to excel in the tech industry while actively building a network of like-minded professionals. To explore more about his work and career, visit his LinkedIn profile or GitHub repository.
            </p>
            <div className="w-full hover:translate-y-[-5px] transition-transform flex">
              <a
                href="https://www.linkedin.com/in/yousufalipk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#32b0b4] py-2 text-xl font-semibold rounded-3xl w-full text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TechStack Page 3 */}
      <section id="techstack" className="w-full md:h-[100vh] bg-[#e8edff] overflow-hidden">
        <div className="w-full h-[50vh] flex md:hidden justify-center items-center">
          <Image
            src={StackImage}
            alt="teachStack_img"
            width={300}
            height={300}
            className="hover-effect2"
          />
        </div>
        <div className="opacity-0 animate-slideUpRightTech flex flex-col justify-center items-center py-5 md:py-20 gap-5 md:gap-10">
          <div className="w-[80vw] md:w-[70vw] h-[7vh] md:h-[10vh] flex justify-evenly items-center gap-5 md:gap-15 lg:gap-20 bg-white rounded-full shadow-lg">
            {topTechStack.map((stack, index) => {
              return (
                <Image
                  key={index}
                  src={stack.icon}
                  alt={stack.altText}
                  width={380}
                  height={380}
                  className="hover-effect1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                />
              )
            })}
          </div>
          <div className="w-full h-[40vh] flex justify-center items-center gap-5 md:gap-0">
            <div className="w-[39%] md:w-[20%] h-full grid grid-cols-2 justify-items-center items-center bg-white rounded-3xl shadow-lg">
              {midLeftStack.map((stack, index) => {
                return (
                  <Image
                    key={index}
                    src={stack.icon}
                    alt={stack.altText}
                    width={50}
                    height={50}
                    className="hover-effect1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                  />
                )
              })}
            </div>
            <div className="hidden md:flex w-[30%] h-full justify-center items-center animate-beat">
              <Image
                src={StackImage}
                alt="teachStack_img"
                width={260}
                height={260}
                className="hover-effect2"
              />
            </div>
            <div className="w-[39%] md:w-[20%] h-full grid grid-cols-2 justify-items-center items-center bg-white rounded-3xl shadow-lg">
              {midRightStack.map((stack, index) => {
                return (
                  <Image
                    key={index}
                    src={stack.icon}
                    alt={stack.altText}
                    width={50}
                    height={50}
                    className="hover-effect1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                  />
                )
              })}
            </div>
          </div>
          <div className="w-[80vw] md:w-[70vw] h-[7vh] md:h-[10vh] flex justify-evenly items-center gap-5 md:gap-15 lg:gap-20 bg-white rounded-full shadow-lg">
            {bottomStack.map((stack, index) => {
              return (
                <Image
                  key={index}
                  src={stack.icon}
                  alt={stack.altText}
                  width={50}
                  height={50}
                  className="hover-effect1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* My Projects */}
      <section
        style={{
          backgroundImage: "url('/bg1.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        id="projects" className="w-full h-[98vh] md:h-[100vh] overflow-hidden"
      >
        <div className="absolute z-0 w-full h-full bg-cyan-800 bg-opacity-70"></div>
        <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold h-[10vh] flex justify-center items-end">Projects</h1>
          <div className="stock-ticker w-full h-[60vh] overflow-hidden">
            <div className="stock-child">
              {youtubeVideos.map((video, index) => {
                return (
                  <div key={index} className="w-[90vw] md:w-[30vw] hover:translate-y-[-20px] transition-transform flex flex-col gap-4">
                    <div
                      style={{
                        backgroundImage: `url(${video.image})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      className="w-full h-[30vh] rounded-3xl"
                    >
                    </div>
                    <div className="w-full bg-white yt-card-text rounded-full text-center font-bold text-xl p-2 text-black">
                      <span className="gradient-text">{video.title}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div aria-hidden='true' className="stock-child">
              {youtubeVideos.map((video, index) => {
                return (
                  <div key={index} className="w-[90vw] md:w-[30vw] hover:translate-y-[-20px] transition-transform flex flex-col gap-4">
                    <div
                      style={{
                        backgroundImage: `url(${video.image})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      className="w-full h-[30vh] rounded-3xl"
                    >
                    </div>
                    <div className="w-full bg-white yt-card-text rounded-full text-center font-bold text-xl p-2 text-black">
                      <span className="gradient-text">{video.title}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section >

      {/* Work Experince  */}
      <section id="workExperience" className="w-full h-[110vh]">
        <WorkExperience />
      </section>

      {/* Education  */}
      <section id="education" className="w-full h-[140vh]">
        <EducationPage />
      </section>

      {/* Contact Us */}
      <section className="w-full h-[150vh] md:h-[100vh]">
        <ContactUs />
      </section>

      {/* Reviews & Feedback */}
      <section id="review" className="w-full h-[100vh]">
        <ReviewPage />
      </section>

      {/* Footer - social link - other */}
      <section className="relative z-50 w-full h-[25vh] bg-white flex justify-center">
        <div className="absolute -top-1/2 w-[90%] md:w-[60%] h-[40vh] bg-gradient-to-t from-[#32b0b4] to-[#42548a] rounded-[6vh] flex flex-col justify-center items-center p-5 gap-5 md:gap-2">
          <ul className="w-[80%] h-1/2 flex flex-col md:flex-row justify-between items-center text-lg font-thin gap-2 md:gap-0 lg:font-semibold">
            <li className="hover:cursor-pointer">
              <Link href='#intro' >About</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href='#projects' >Projects</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href='#workExperience' >Work Experience</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href='#education' >Education</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href='#review' >Reviews & Feedback</Link>
            </li>
          </ul>
          <div className="w-[90%] md:w-2/5 h-1/2 flex justify-between items-center">
            {socialLinks.map((link, index) => {
              const Icon = link.Component;
              return (
                <div
                  key={index}
                  className="w-9 h-9 md:w-8 md:h-8 lg:w-12 lg:h-12 flex justify-center items-center border-[3px] border-white rounded-full hover:translate-y-[-5px] transition-transform"
                >
                  <a
                    href={link.link}
                    alt={link.altText}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 md:w-4 md:h-4 lg:w-7 lg:h-7" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer - Copyrights */}
      <section className="w-full h-[15vh] md:h-[25vh] flex flex-col justify-center items-center gap-5 bg-white">
        <hr className="w-[60vw]" />
        <div className="w-full text-gray-500 text-center">
          © 2023 Ameer Yousuf. All Rights Reserved
        </div>
      </section>
    </>
  );
}
