"use client"
import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdSchool } from "react-icons/md";

const WorkExperience = () => {
    return (
        <div className='w-full h-full'>
            <div className="w-full h-[30vh] flex justify-center items-center yt-card-text">
                <h1 className="gradient-text2 text-5xl font-bold">Work Experience</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'>August 2024 - Present</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">Web Developer Mehdi Tech, PK</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Reactjs, Nodejs, Express, Mongodb, Firebase, Tailwind, Github
                        </h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'> August 2020 - August 2024</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">Intern Software Engineer
                            NADRA, PK</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Power Bi, Tableau & python project.
                        </h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'>March 2018 - March 2020</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">Graphic Design Trainning
                            DigiSkills, PK</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Adobe Photoshop, Adobe XD & Adobe Premier Pro.
                        </h4>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default WorkExperience;
