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

const Home = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover- bg-no-repeat bg-center">
                <Navbar />
                <Banner />
            </div>
            <About />
            <Experience />
            <Tech />
            <Work />
            <Feedbacks />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
