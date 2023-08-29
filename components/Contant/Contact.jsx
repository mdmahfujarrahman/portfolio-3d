import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "@/styles/Motion";
import SectionWrapper from "../../HOC/SectionWrapper";
import EarthCanvas from "../Earth/Earth";

import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!form.name) {
            toast.error("Name is required!");
            setLoading(false);
            return;
        } else if (!form.email) {
            toast.error("Email is required!");
            setLoading(false);
            return;
        } else if (!form.message) {
            toast.error("Message is required!");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post("/api/contact", form);
            if (res.status === 200) {
                toast.success(res.data.message);
                setLoading(false);
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            if (error.response.status === 429) {
                toast.error("Too many requests, please try again later!");
            } else {
                toast.error(error.response.data.message);
            }

            setLoading(false);
        }
    };
    return (
        <div
            id="contact"
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                    Get in touch
                </p>
                <h3 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                    Contact.
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};
export default SectionWrapper(Contact, "");
