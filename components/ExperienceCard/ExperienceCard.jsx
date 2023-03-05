import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{
                borderRight: "7px solid  #322631",
            }}
            date={experience.date}
            iconStyle={{
                background: experience.iconBg,
            }}
            icon={
                <div className="flexCenter w-full h-full">
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p className="text-secondary text-[16px] font-semibold company-title">
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience?.points?.map((point) => (
                    <li
                        key={point}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
