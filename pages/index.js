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
import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Mahfujur Rahman | Full Stack Developer",
    description:
        "I am a Full Stack Developer. I love to build web applications.",
};

const Home = () => {
    const messengerRef = useRef(null);

    useEffect(() => {
        if (messengerRef.current) {
            messengerRef.current.setAttribute(
                "attribution_version",
                "biz_inbox"
            );
            messengerRef.current.setAttribute("attribution", "install_email");
            messengerRef.current.setAttribute("page_id", "106645127396616");
            window.fbAsyncInit = function () {
                window.FB.init({
                    xfbml: true,
                    version: "v16.0",
                });
            };

            (function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                    "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
                fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk");
        }
    }, []);
    return (
        <div className="relative z-0 bg-primary">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta
                    name="google-site-verification"
                    content="BnUudtDXlxXfB8IJ8_qK9JxsNo8em2UNt6-Xb7k-uRY"
                />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                (function(d, s, id) {
                                    var js, fjs = d.getElementsByTagName(s)[0];
                                    if (d.getElementById(id)) return;
                                    js = d.createElement(s); js.id = id;
                                    js.src = 'https://connect.facebook.net/en_US/sdk.js';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }(document, 'script', 'facebook-jssdk'));

                                window.fbAsyncInit = function() {
                                    FB.init({
                                    xfbml: true,
                                    version: 'v17.0',
                                    });
                                };
                                `,
                    }}
                /> */}
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

            <div id="fb-root" />
            <div className="fb-customerchat" ref={messengerRef} />
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Home;
