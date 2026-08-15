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
    qrcode,
    nodejsapplication,
    indetechs,
    website
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
        link: "https://drive.google.com/file/d/1eBR0jNFSZbpkGmXOBuJzZTgUszNkOoXn/view?usp=sharing",
    },
];

const services = [
    {
        title: "React.js Developer",
        icon: web,
    },
    {
        title: "Next.js Developer",
        icon: mobile,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "SaaS & Multi-Tenant",
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
        title: "SDE-I",
        company_name: "KyloApps",
        icon: kyloapps,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Dec 2023",
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
            "Joined as Junior Frontend Developer and was promoted to Frontend Developer within six months.",
            "Owned Sales Risk Policies — the ERP platform's largest feature — end to end against a Laravel backend.",
            "Built the Employee Test Module: scheduling, scoring, fullscreen-on-start, and screenshot-based proctoring.",
            "Cut single-task page load time from ~50s to ~15s by removing redundant API calls and dead code.",
            "Added error boundaries, Puppeteer-based logging, and a design system to speed up feature work.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Indetechs Software Ltd.",
        icon: indetechs,
        iconBg: "#383E56",
        date: "Dec 2024 - Present",
        points: [
            "Building the DPP (Digital Product Passport) platform for DigiProdPass in the UK — a multi-tenant SaaS. Promoted from Jr. Software Engineer.",
            "Led the move to a Clean Architecture and Turborepo monorepo, separating domain, use-case, and infrastructure layers.",
            "Built the DPP CLI (v1 and v2) in Node.js to generate typed API integration layers — adopted by the whole team.",
            "Designed and shipped a dynamic, theme-driven Public View with Next.js SSR, powering real customer rollouts (SBN, DFS).",
            "Built multi-language localization across templates, sections, fields, and passports with an AI-assisted auto-translate flow.",
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
            "Kubernetes manifests for the single-node k3s cluster I self-host. Traefik ingress, MetalLB in L2 mode, NFS and local-path storage, Prometheus/Grafana monitoring, and self-hosted apps. Secrets are kept out of git.",
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
        image: website,
        source_code_link: "https://github.com/mdmahfujarrahman/home-lab",
    },
    {
        name: "Amader Polashbari",
        description:
            "A community site for Polashbari, built with Astro and SQLite and running on my own k3s cluster. Containerized, deployed behind Traefik with its own persistent volumes.",
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
        image: website,
        live_link: "https://amaderpolashbari.mdmahfujarrahman.com",
    },
    {
        name: "Aspire Proptech",
        description:
            "Aspire Proptech is a one-stop destination for people seeking their dream home in Bangalore. It is a platform that connects buyers and sellers of real estate properties.",
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
            "https://github.com/mdmahfujarrahman/ahmed-auto-parts",
        live_link: "https://ahmed-auto-parts.vercel.app/",
    },
    {
        name: "QR Code Brew",
        description:
            "Discover the power of our free QR code generator online. Create dynamic QR codes for URL, Text, Vcard, Email, Wifi, and Twitter.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Redux Toolkit",
                color: "green-text-gradient",
            },
            {
                name: "Server Side Rendering",
                color: "pink-text-gradient",
            },
        ],
        image: qrcode,
        live_link: "https://qrcodebrew.com/",
    },
    {
        name: "Get Local IP",
        description:
            "Get your local IP address using this simple web application. It also provides information about your public IP address.",
        tags: [
            {
                name: "Node.js",
                color: "blue-text-gradient",
            },
            {
                name: "Express.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: nodejsapplication,
        source_code_link:
        "https://github.com/mdmahfujarrahman/seoextentionbackend",
        live_link: "https://seoextentionbackend.vercel.app/api/v1/ipconfig",
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
