import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    nextjs,
    reactNative,
    meta,
    localSEO,
    infyney,
    kyloapps,
    shopify,
    carrent,
    jobit,
    tripguides,
    bootstrap,
} from "../../assets/index";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "Download",
        title: "Download Resume",
        link: "https://drive.google.com/file/d/1peyh2pJga0k1RiWH4fGFsQXHkcvTm4QD/view?usp=sharing",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Local SEO Specialist",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "React Native",
        icon: reactNative,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Local SEO Specialist",
        company_name: "Local SEO Help, Fivarr, Upwork",
        icon: localSEO,
        iconBg: "#383E56",
        date: "March 2016 - Present",
        points: [
            "Help clients to rank their business on google map pack and organic search result.",
            "Improving the quality of the website and content to rank on google.",
            "Helping clients to get more reviews on google.",
            "Helping clients to get more backlinks from high authority websites.",
        ],
    },
    {
        title: "Full Stack Developer - Internship",
        company_name: "Infyney",
        icon: infyney,
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Work on keycloak authentication and authorization.",
            "Authentication and authorization using keycloak.",
            "Explore keycloak and its features.",
        ],
    },
    {
        title: "Full Stack Developer - Internship",
        company_name: "KyloApps",
        icon: kyloapps,
        iconBg: "#383E56",
        date: "Jul 2022 - Nov 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "KyloApps",
        icon: kyloapps,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
            "Meeting both technical and consumer needs.",
            "Motivating team members and assessing performance.",
            "Building high-quality reusable code that can be used in the future.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mega Grain Trading",
        description:
            "It is a B2B platform where trading trading facility that introduces buyers and sellers globally to perform business operations in Agri commodities.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        live_link: "https://megagrain-frontend.vercel.app/",
    },
    {
        name: "NFT Marketplace",
        description:
            "Web application that allows users to buy and sell NFTs. Users can also create their own NFTs and sell them on the platform.",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "solidity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguides,
        source_code_link: "https://github.com/mdmahfujarrahman/nft-project",
        live_link: "https://nft-project-liart.vercel.app/",
    },
    {
        name: "Ahmed Auto Parts",
        description:
            "Web-based platform that allows users to search for auto parts, view estimated prices for parts, and locate available parts based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link:
            "https://github.com/mdmahfujarrahman/Home-improvment-blog",
        live_link: "https://ahmed-auto-parts.web.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };
