import Image from "next/image";
import Link from "next/link";
import InvertmentsImage from '../public/investments.webp';

import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import AmeerYousufPic from '../public/ameeryousuf.png';

export default function Home() {

  const socialLinks = [
    { icon: <GrFacebookOption size={25} />, altText: 'facebook', link: 'https://www.facebook.com/yousufbhatti2002' },
    { icon: <GrGithub size={25} />, altText: 'github', link: 'https://github.com/yousufalipk' },
    { icon: <GrInstagram size={25} />, altText: 'instagram', link: 'https://www.instagram.com/yousufbhatti_1' },
    { icon: <GrLinkedinOption size={25} />, altText: 'linkedin', link: 'https://www.linkedin.com/in/yousufalipk' },
  ];

  const topInvestments = [
    { icon: '/investments/topInvestments/Abhi.webp', altText: 'abhi_logo' },
    { icon: '/investments/topInvestments/bookme.pk.webp', altText: 'bookme_logo' },
    { icon: '/investments/topInvestments/Haball.webp', altText: 'haball_logo' },
    { icon: '/investments/topInvestments/Nayapay.webp', altText: 'nayapay_logo' },
    { icon: '/investments/topInvestments/PostEx..webp', altText: 'postex_logo' }
  ]

  const midLeftInvertments = [
    { icon: '/investments/midLeftInvestments/AdalFi.webp', altText: 'adalfi_logo' },
    { icon: '/investments/midLeftInvestments/Bazaar.webp', altText: 'bazaar_logo' },
    { icon: '/investments/midLeftInvestments/EduFi.webp', altText: 'edufi_logo' },
    { icon: '/investments/midLeftInvestments/KTrade.webp', altText: 'ktrade_logo' },
    { icon: '/investments/midLeftInvestments/Laam.webp', altText: 'laam_logo' },
    { icon: '/investments/midLeftInvestments/SnappRetail.webp', altText: 'snappRetail_logo' }
  ]

  const midRightInvertments = [
    { icon: '/investments/midRightInvestments/GrocerApp.webp', altText: 'grocerapp_logo' },
    { icon: '/investments/midRightInvestments/KraveMart.webp', altText: 'kravemart_logo' },
    { icon: '/investments/midRightInvestments/Prosper.webp', altText: 'prosper_logo' },
    { icon: '/investments/midRightInvestments/Savyour.webp', altText: 'savyour_logo' },
    { icon: '/investments/midRightInvestments/Truckitin.webp', altText: 'truckitin_logo' }
  ]

  const bottomInvestments = [
    { icon: '/investments/bottomInvetments/BaGallery.webp', altText: 'bagallery_logo' },
    { icon: '/investments/bottomInvetments/Collabs.webp', altText: 'collabs_logo' },
    { icon: '/investments/bottomInvetments/Taaza.webp', altText: 'taaza_logo' },
    { icon: '/investments/bottomInvetments/TrellisHousing.webp', altText: 'trellisHousing_logo' },
    { icon: '/investments/bottomInvetments/Zaraye.webp', altText: 'zaraye_logo' }
  ]

  return (
    <>
      <section className="parent relative w-full h-[115vh] bg-gradient-to-t from-[#32b0b4] to-[#42548a] flex flex-col overflow-hidden">
        <div className="w-full h-[100vh] flex justify-center items-center overflow-hidden">
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-5 pl-[10vw]">
            <h1 className="text-8xl font-bold leading-[5.5vw] bg-gradient-to-tl from-[#ffffff] to-[#53cfd6] text-transparent bg-clip-text">
              AMEER YOUSUF
            </h1>
            <p className="text-xl font-thin">
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
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex justify-center items-center border-[3px] border-white rounded-full hover:translate-y-[-5px] transition-transform"
                >
                  <a
                    href={link.link}
                    alt={link.altText}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
            <div className="hover:translate-y-[-5px] transition-transform">
              <a
                href="https://www.linkedin.com/in/yousufalipk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#32b0b4] py-2 px-6 text-xl font-semibold rounded-3xl"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center gap-5 pr-[10vw]">
            <p className="text-[32rem] font-bold absolute -top-[5vh]">AY</p>
            <Image
              src={AmeerYousufPic}
              alt="ameeryousuf_pic"
              width={650}
              height={650}
              className="absolute bottom-14 z-20 transform scale-x-[-1]"
              style={{
                filter: 'drop-shadow(0 30px 25px rgba(0, 0, 0, 1))',
              }}
            />
          </div>
        </div>
        <div className="w-full h-[15vh] flex justify-center items-center relative z-30 parent-bg">
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

      <section className="w-full h-[120vh] bg-[#202020] px-10 py-5 flex">
        <div className="w-1/2 h-full flex flex-col justify-end pb-[4vw] items-center gap-4">
          <h1 className="text-4xl font-bold">INTRODUCTION</h1>
          <Image
            src={AmeerYousufPic}
            alt="ameeryousuf_pic"
            width={480}
            height={480}
            className="bg-white rounded-xl"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-start items-center pt-10">
          <div className="text-start flex flex-col gap-5">
            <p>
              Ameer Yousuf Ali Bhatti is a skilled software engineer and web developer from Islamabad, Pakistan, with a strong educational foundation from Bahria University and SZABIST. As a dynamic and motivated professional, he brings expertise in HTML, CSS, JavaScript, and the MERN stack, along with hands-on experience in GitHub and cloud platforms.
            </p>
            <p>
              Ameer has gained valuable professional experience through internships at Mehdi Tech and NADRA. At Mehdi Tech, he honed his skills in React.js and Node.js, contributing to projects such as a Telegram dashboard app and mini-apps like a Tic Tac Toe game and Pizza App. At NADRA, he developed detailed dashboards using Power BI and Tableau, providing insights through advanced data analysis and visualization.
            </p>
            <p>
              His commitment to innovation and problem-solving is evident in projects like "ClassConnect," a facial recognition-based attendance system, and "CyberSphereX," a custom chatbot utilizing GPT-3.5. He has consistently demonstrated the ability to independently manage projects while fostering collaboration within teams.
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

      <section className="w-full h-[100vh] bg-[#e8edff] flex flex-col justify-center items-center py-20 gap-10">
        <div className="w-[70vw] h-[10vh] flex justify-evenly items-center gap-20 bg-white rounded-full shadow-lg">
          {topInvestments.map((investment, index) => {
            return (
              <Image
                key={index}
                src={investment.icon}
                alt={investment.altText}
                width={100}
                height={100}
              />
            )
          })}
        </div>
        <div className="w-full h-[40vh] flex justify-center items-center">
          <div className="w-[20%] h-full grid grid-cols-2 justify-items-center items-center bg-white rounded-3xl">
            {midLeftInvertments.map((investment, index) => {
              return (
                <Image
                  key={index}
                  src={investment.icon}
                  alt={investment.altText}
                  width={100}
                  height={100}
                />
              )
            })}
          </div>
          <div className="w-[30%] h-full flex justify-center items-center animate-beat">
            <Image
              src={InvertmentsImage}
              alt="invertments_img"
              width={260}
              height={260}
            />
          </div>
          <div className="w-[20%] h-full grid grid-cols-2 justify-items-center items-center bg-white rounded-3xl">
            {midRightInvertments.map((investment, index) => {
              return (
                <Image
                  key={index}
                  src={investment.icon}
                  alt={investment.altText}
                  width={100}
                  height={100}
                />
              )
            })}
          </div>
        </div>
        <div className="w-[70vw] h-[10vh] flex justify-evenly items-center gap-20 bg-white rounded-full shadow-lg">
          {bottomInvestments.map((investment, index) => {
            return (
              <Image
                key={index}
                src={investment.icon}
                alt={investment.altText}
                width={100}
                height={100}
              />
            )
          })}
        </div>
      </section>
    </>
  );
}
