import {
    About,
    Banner,
    Experience,
    Feedbacks,
    Navbar,
    Tech,
    Work,
    Contact,
} from "@/components/constants";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Mahfujur Rahman | Full Stack Developer",
    description:
        "I am a Full Stack Developer. I love to build web applications.",
};

const Home = () => {
    return (
        <div className="relative z-0 bg-primary">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Banner />
            </div>
            <About />
            <Experience />
            <Tech />
            <Work />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
                <Contact />
                {/* <StarsCanvas /> */}
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Home;
