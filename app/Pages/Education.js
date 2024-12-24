"use client"
import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdSchool } from "react-icons/md";

const Education = () => {
    return (
        <div className='w-full h-full'>
            <div className="w-full h-[30vh] flex justify-center items-center yt-card-text">
                <h1 className="gradient-text2 text-5xl font-bold">Education</h1>
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
                        <h3 className="gradient-text2 text-2xl font-bold">MS Software Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Bahria University H-11 Campus, PK
                        </h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'> July 2023 - August 2023</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">BS Software Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology, PK
                        </h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'>June 2021 - Sept 2021</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">Intermediate</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            KIPS College G-9 Islamabad, PK
                        </h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: "7px solid  gray" }}
                    date={<span className='text-black'>March 2016 - March 2018</span>}
                    iconStyle={{ background: "linear-gradient(45deg, #42548a, #32b0b4)", color: "#fff" }}
                    icon={<MdSchool />}
                >
                    <div className="content-body">
                        <h3 className="gradient-text2 text-2xl font-bold">Matric</h3>
                        <h4 className="vertical-timeline-element-subtitle text-gray-500">
                            Fazaia Education System Schools E-9 Islamabad, PK
                        </h4>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education;
