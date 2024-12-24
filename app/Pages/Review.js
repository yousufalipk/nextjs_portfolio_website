"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

import LeftAngle from '../../public/left-angle.svg';
import RightAngle from '../../public/right-angle.svg';

import Reviewer1 from '../../public/reviews/1.jpg';
import Reviewer2 from '../../public/reviews/2.jpg';
import Reviewer3 from '../../public/reviews/3.jpg';
import Reviewer4 from '../../public/reviews/4.jpg';
import Reviewer5 from '../../public/reviews/5.jpg';

const reviews = [
    { id: 1, name: 'John Doe', country: 'USA', feedback: 'Great work! Delivered the project on time and exceeded expectations in UI design and performance.', img: Reviewer1 },
    { id: 2, name: 'Sara Lee', country: 'Canada', feedback: 'Amazing problem-solving skills. The app is responsive, user-friendly, and performs efficiently.', img: Reviewer2 },
    { id: 3, name: 'Michael Smith', country: 'UK', feedback: 'A fantastic developer! Developed the backend and integrated it seamlessly with the frontend. Highly recommended!', img: Reviewer3 },
    { id: 4, name: 'Emily Davis', country: 'Australia', feedback: 'Highly skilled and dependable. Their work on the server and database was key to the success of our project.', img: Reviewer4 },
    { id: 5, name: 'David Brown', country: 'Germany', feedback: 'Creative and professional. Helped design a smooth user interface that enhanced user engagement and satisfaction.', img: Reviewer5 },
];

const Reviews = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const intervalRef = useRef(null);

    // Function to reset autoplay interval
    const resetAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the existing interval
        }
        intervalRef.current = setInterval(() => {
            setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
        }, 2500);
    };

    // Autoplay effect
    useEffect(() => {
        resetAutoplay(); // Initialize autoplay

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); // Cleanup on component unmount
            }
        };
    }, []);

    const handleNext = () => {
        setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
        resetAutoplay(); // Reset autoplay when the next button is clicked
    };

    const handlePrev = () => {
        setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
        resetAutoplay(); // Reset autoplay when the prev button is clicked
    };

    return (
        <div
            style={{
                backgroundImage: "url('/bg2.jpg')",
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="relative w-full h-full flex flex-col justify-center items-center text-black"
        >
            <div className='absolute z-0 w-full h-full bg-gradient-to-t from-[#32b0b4] to-[#42548a] opacity-70'></div>
            <div className='absolute z-10 w-full h-full'>
                <div className="relative w-full h-full flex justify-center items-center">
                    <h1 className='absolute top-[10%] text-4xl font-bold text-white text-center'>
                        {'What Do People Think About Ameer Yousuf’s Work?'}
                    </h1>
                    <div className="w-full h-[40%] flex justify-center items-center text-white">
                        <div className="w-[15%] h-full flex justify-center items-center">
                            {currentReviewIndex > 0 && (
                                <button onClick={handlePrev} className="bg-transparent border-0">
                                    <Image src={LeftAngle} width={100} height={100} alt="prev" className='invert' />
                                </button>
                            )}
                        </div>
                        <div className='w-[70%] h-full flex justify-center items-center'>
                            <div
                                className="w-1/2 h-full bg-gradient-to-t from-[#32b0b4] to-[#42548a] border rounded-[6vh] p-10 relative"
                            >
                                <div className="w-full h-1/2 flex justify-start items-center text-justify font-light text-gray-200">
                                    {reviews[currentReviewIndex].feedback}
                                </div>
                                <div className="w-full h-1/2 flex justify-start items-center gap-2">
                                    <Image
                                        src={reviews[currentReviewIndex].img}
                                        width={70}
                                        height={70}
                                        alt='review_img'
                                        className="rounded-full overflow-hidden"
                                    />
                                    <div className="w-full">
                                        <h1 className="text-xl font-bold">
                                            {reviews[currentReviewIndex].name}
                                        </h1>
                                        <span className="text-md font-light">
                                            {reviews[currentReviewIndex].country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[15%] h-full flex justify-center items-center">
                            {currentReviewIndex < reviews.length - 1 && (
                                <button onClick={handleNext} className="bg-transparent border-0">
                                    <Image src={RightAngle} width={100} height={100} alt="next" className='invert' />
                                </button>
                            )}
                        </div>
                        {/* Review Tracker */}
                        <div className="absolute bottom-[25%] flex gap-2">
                            {reviews.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${currentReviewIndex === index ? 'bg-white' : 'bg-gray-300 opacity-35'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
