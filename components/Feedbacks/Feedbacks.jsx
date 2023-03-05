import { motion } from "framer-motion";

import SectionWrapper from "../../HOC/SectionWrapper";
import { fadeIn, textVariant } from "@/styles/Motion";
import { testimonials } from "../constants/content";
import { TestimonialsCard } from "../constants";

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div className="bg-tertiaty rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10">
                <motion.div variants={textVariant()}>
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        What others Say
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Testimonials.
                    </h2>
                </motion.div>
            </div>
            <div className="sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7">
                {testimonials.map((testimonial, index) => (
                    <TestimonialsCard
                        testimonial={testimonial}
                        key={index + 1}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
