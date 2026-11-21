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
    docker,
    sonarqube,
    nextjs,
    reactNative,
    infyney,
    kyloapps,
    seopage1,
    carrent,
    jobit,
    tripguides,
    bootstrap,
    aspireprop,
    indetechs,
    website,
    homelab,
    polashbari,
    uniapi,
    libloc,
    foodapp
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
];

const services = [
    {
        title: "Full-Stack Web Apps",
        icon: web,
    },
    {
        title: "System Design & APIs",
        icon: backend,
    },
    {
        title: "Infrastructure & Automation",
        icon: creator,
    },
    {
        title: "Performance & Real-Time Tracking",
        icon: mobile,
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
        name: "Docker",
        icon: docker,
    },
    {
        name: "SonarQube",
        icon: sonarqube,
    }
];

const experiences = [
    {
        title: "Full Stack Developer - Internship",
        company_name: "Infyney",
        icon: infyney,
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Implemented authentication and authorization flows with Keycloak.",
            "Explored Keycloak realms, clients, and role mapping for a multi-app setup.",
        ],
    },
    {
        title: "SDE-I (joined as an intern)",
        company_name: "KyloApps",
        icon: kyloapps,
        iconBg: "#E6DEDD",
        date: "Jul 2022 - Oct 2023",
        points: [
            "Built full stack features across Node.js, Express, MongoDB, React, and Next.js — REST endpoints, data models, and the UI on top of them.",
            "Integrated multiple payment gateways (including Razorpay) with server-side order creation, signature verification, and webhook handling.",
            "Delivered 5+ projects and supported 10+ others, and set up workflows for the team.",
            "Mentored interns and cleared blockers to keep projects on schedule.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "SEOPAGE1",
        icon: seopage1,
        iconBg: "#E6DEDD",
        date: "Feb 2024 - Dec 2024",
        points: [
            "Core contributor to the company's in-house ERP platform, built on a PHP/Laravel backend and used daily by the whole company. Promoted from Junior within six months.",
            "Owned the platform's largest module, a sales risk assessment system, end to end, working with the backend team on the endpoints and payloads behind it.",
            "Cut a core page's load time from around 50 seconds to 15 by removing redundant API calls and dead code.",
            "Built an online examination system used to assess employees: scheduling, difficulty levels, automatic scoring, fullscreen lock, and screenshot-based proctoring.",
            "Delivered role-based dashboards, task checklist and review workflows, and an automated price quotation flow used by the sales team.",
            "Added error tracking and logging, set up a shared design system, and built a browser extension that checks how a page responds across screen sizes.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Indetechs Software Ltd.",
        icon: indetechs,
        iconBg: "#383E56",
        date: "Dec 2024 - Present",
        points: [
            "Building a multi-tenant SaaS platform for a UK client, where each business customer gets their own branded workspace. Promoted from Jr. Software Engineer.",
            "Take features from requirement to production: agree the API contract with the backend team, build both sides of it, test, release, and support it afterwards.",
            "Built an internal command-line tool that generates the code our apps use to call backend services. A day of hand-written integration work became one command, and the whole team uses it daily.",
            "Led the restructure to Clean Architecture in a monorepo, so business logic no longer depends on the API layer and swapping a data source stopped meaning a rewrite.",
            "Designed a configuration-driven customer-facing site, so onboarding a new enterprise client with their own branding is a config change instead of a new build.",
            "Shipped multi-language support across the product with AI-assisted translation, replacing a slow manual process.",
        ],
    },
];

// Placeholder testimonials removed — the Feedbacks section stays empty until
// there are real ones to show.
const testimonials = [];

const projects = [
    {
        name: "home-lab (k3s cluster)",
        description:
            "Self-hosted infrastructure on single-node k3s. Runs multi-tenant ingress, persistent storage, monitoring stack, and production apps at home—no vendor, no surprises.",
        tags: [
            {
                name: "kubernetes",
                color: "blue-text-gradient",
            },
            {
                name: "docker",
                color: "green-text-gradient",
            },
            {
                name: "traefik",
                color: "pink-text-gradient",
            },
        ],
        image: homelab,
        source_code_link: "https://github.com/mdmahfujarrahman/home-lab",
    },
    {
        name: "Amader Polashbari",
        description:
            "Community site for a village: publish events, track attendance, keep members connected. Live on my k3s cluster—pages load fast, data persists, no middleman.",
        tags: [
            {
                name: "astro",
                color: "blue-text-gradient",
            },
            {
                name: "drizzle orm",
                color: "green-text-gradient",
            },
            {
                name: "kubernetes",
                color: "pink-text-gradient",
            },
        ],
        image: polashbari,
        live_link: "https://amaderpolashbari.mdmahfujarrahman.com",
    },
    {
        name: "University Management API",
        description:
            "REST API for academic records: enroll students, track courses, manage roles. Modular structure keeps business logic separate from HTTP—swap databases without touching business code.",
        tags: [
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
            {
                name: "express + typescript",
                color: "green-text-gradient",
            },
            {
                name: "mongoose",
                color: "pink-text-gradient",
            },
        ],
        image: uniapi,
        source_code_link:
            "https://github.com/mdmahfujarrahman/university-management-auth-services",
    },
    {
        name: "lib-dynamic-localization",
        description:
            "Translation library for React apps that render both server and client. One API, one provider—language switches at runtime without rebuilds. Published as npm package.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "react + i18next",
                color: "green-text-gradient",
            },
            {
                name: "npm package",
                color: "pink-text-gradient",
            },
        ],
        image: libloc,
        source_code_link:
            "https://github.com/mdmahfujarrahman/lib-dynamic-localization",
    },
    {
        name: "Food Ordering App",
        description:
            "Mobile app for browsing menus, managing a cart, and placing orders. Auth, real-time data, and crash reporting from day one—not bolted on later.",
        tags: [
            {
                name: "react native",
                color: "blue-text-gradient",
            },
            {
                name: "expo router",
                color: "green-text-gradient",
            },
            {
                name: "appwrite",
                color: "pink-text-gradient",
            },
        ],
        image: foodapp,
        source_code_link: "https://github.com/mdmahfujarrahman/native-food-app",
    },
    {
        name: "Aspire Proptech",
        description:
            "Real estate marketplace connecting buyers and sellers in Bangalore. Search, filter, and contact verified listings—built for speed and conversion.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux toolkit",
                color: "green-text-gradient",
            },
            {
                name: "Server Side Rendering",
                color: "pink-text-gradient",
            },
        ],
        image: aspireprop,
        live_link: "https://aspireprop.com/",
    },
    
];

export const socialLinks = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/md-mahfujar-rahman",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    },
    {
        name: "GitHub",
        link: "https://github.com/mdmahfujarrahman",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    },
];

export { services, technologies, experiences, testimonials, projects };
