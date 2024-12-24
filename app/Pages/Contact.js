"use client"
import React, { useState } from 'react';
import ContactPic from '../../public/contact.png';
import Image from "next/image";

const Contact = () => {
    const accessKey = process.env.NEXT_PUBLIC_FORM_API;
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ ...values, access_key: accessKey }),
            });

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center shadow-lg mx-auto rounded-2xl'>
            <div className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center'>
                <Image
                    src={ContactPic}
                    width={400}
                    height={400}
                    alt="contact_pic"
                />
            </div>
            <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center'>
                <form
                    className='w-[80%] h-full flex flex-col gap-5 justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <h1 className='text-center text-5xl gradient-text2 font-bold'>Contact Us</h1>
                    <div className='w-full h-[10vh] flex flex-col justify-center items-start gap-2'>
                        <label className='text-black' htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            required
                            className='border w-full text-[#32b0b4] p-2 rounded-lg placeholder:text-gray-400 text-light active:border-[#32b0b4] focus:outline-none focus:border-[#32b0b4] focus:border-2'
                        />
                    </div>
                    <div className='w-full h-[10vh] flex flex-col justify-center items-start gap-2'>
                        <label className='text-black' htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            className='border w-full text-[#32b0b4] p-2 rounded-lg placeholder:text-gray-400 text-light active:border-[#32b0b4] focus:outline-none focus:border-[#32b0b4] focus:border-2'
                        />
                    </div>
                    <div className='w-full h-[10vh] flex flex-col justify-center items-start gap-2'>
                        <label className='text-black' htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            required
                            className='border w-full text-[#32b0b4] p-2 rounded-lg placeholder:text-gray-400 text-light active:border-[#32b0b4] focus:outline-none focus:border-[#32b0b4] focus:border-2'
                        />
                    </div>
                    <div
                        className='w-full h-[10vh] flex justify-center items-center'
                    >
                        <button
                            className="w-full h-12 bg-[#32b0b4] rounded-lg font-bold text-white transition duration-300 ease-in-out hover:bg-transparent hover:gradient-text2 hover:border-2 hover:border-[#32b0b4] hover:text-[#32b0b4]"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
                {success && <p>Your message has been sent successfully!</p>}
                {error && <p>There was an error sending your message. Please try again.</p>}
            </div>

        </div>
    );
};

export default Contact;
