"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Responsive, Responsive2 } from "@/app/utils/constants";

// Dynamic Imports
const Navbar = dynamic(() => import("@/app/components/Navbar"), {
    ssr: false
});

const Popup = dynamic(() => import("@/app/components/Popup"), {
    ssr : false
})

const GrainSection = dynamic(() => import("@/app/components/GrainSection"), {
    ssr : false
})

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false
});

const Footer = dynamic(() => import("@/app/components/Footer"), {
    ssr: true
})

const Signature = () => {

    // useRef References
    const videoOnScrollPlay = useRef<HTMLVideoElement>(null);
    const eightsection = useRef<HTMLElement>(null);
    const tabBtnRef = useRef<HTMLDivElement>(null);
    const tabContainerRef = useRef<HTMLDivElement>(null);
    const paneRef = useRef<HTMLDivElement>(null);
    const tenthsection = useRef<HTMLDivElement>(null);

    // On Scroll video play
    const VideoPlay = () => {
        window.addEventListener("scroll", () => {
            const scrollVal = window.scrollY;
            if (scrollVal > 3800) {
                videoOnScrollPlay.current?.play();
            }
        })
    }

    // Scroll to next Section
    const ScrolltoNext = () => {
        eightsection.current?.scrollIntoView();
    }

    // Adding Fade Right Effect on selecting the tab on carousel 
    const handleTab = () => {
        const tabBtns = tabBtnRef.current;
        const tabContainer = tabContainerRef.current;

        const tabs = tabContainer?.querySelectorAll(".tab-pane");
        const tabbtns = tabBtns?.querySelectorAll(".tab-button");
        tabbtns?.forEach((btn) => {
            btn.addEventListener("click", () => {
                tabs?.forEach((tab) => {
                    if (!tab.classList.contains("active")) {
                        tab.classList.remove("fadeinright");
                    } else tab.classList.add("fadeinright");
                })
            })
        })
    }

    // Adding Fade Right Effect on selecting the tab on carousel
    const PlayAnim = () => {
        const eightSect = eightsection.current;
        const firstTab = paneRef.current;
        window.addEventListener("scroll", () => {
            const rect = eightSect!.getBoundingClientRect();
            if (rect.top <= 800) {
                firstTab!.classList.add("fadeinright");
            }
        })
    }

    // On Scroll hide the Elements
    const RemoveAnim = () => {
        window.addEventListener("scroll", () => {
            const tenthSect = tenthsection.current;
            const RemoveEffect = tenthSect!.querySelectorAll(".remove-effect");

            if (tenthSect!.getBoundingClientRect().top < -400) {
                RemoveEffect!.forEach((item: any) => {
                    item!.style.opacity = 0;
                    item!.style.transition = "1.2s ease-in-out";
                });
            } else {
                RemoveEffect!.forEach((item: any) => {
                    item!.style.opacity = 1;
                    item!.style.transition = "1.2s ease-in-out";
                });
            }
        })

    }

    // Adding a Preloader
    const Preloader = () => {
        $(".loader").delay(2000).fadeOut("slow");
        setTimeout(function () {
            $("#overlayer").addClass("loaded-page");
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "hidden";
        }, 2500);
    }

    // Supressing Errors
    const SupError = () => {
        window.onerror = () => {
            return true;
        };
        console.warn = () => { };
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            offset: 100,
            once: true

        })
        SupError();
        VideoPlay();
        handleTab();
        PlayAnim();
        RemoveAnim();
        Preloader();
    }, [])

    return (
        <>
            {/* ========================== Preloader ========================== */}
            <div id="overlayer" />

            <div className="loader">
                <div className="loader-inner">
                    <div className="spinner-square">
                        <div className="square-1 square" />
                        <div className="square-2 square" />
                        <div className="square-3 square" />
                    </div>
                </div>
            </div>

            {/* ======================== End Preloader ========================== */}
            <div className="wrapper">

                {/* ======================= Navbar Section ===================== */}
                <Navbar />

                {/* ======================= Section 1 ===================== */}
                <section id="home-section" className="section common-section">
                    <div className="home-container">
                        <Image
                            className="bg-img position-absolute"
                            src="/assets/images/firstbg.svg"
                            alt="img" fill={true} loading="lazy"
                        />
                        <div className="content container">
                            <div className="text-section">
                                <h1 className="gothic text-white common-heading-1">
                                    CRAFTED FROM NATURE
                                    <span className="leaf position-relative">
                                        <Image
                                            className="position-absolute"
                                            src="/assets/images/leaf.svg"
                                            alt="leaf"
                                            width={17}
                                            height={17} loading="lazy"
                                        />
                                    </span>
                                </h1>
                                <p className="common-p text-white">
                                    Welcome to the world of Signature. Setting out a bold vision to
                                    be India&apos;s Green Whisky, the all-new Signature is as
                                    authentic &amp; natural as it gets. Our whisky is an exquisite
                                    blend of nature&apos;s finest ingredients - two row &amp; six
                                    row strains of barley, fresh water and fine grain spirits
                                    imported from Scottish highlands and spey-side. Crafted with
                                    perfection by our Master Blender Louise Martin, it is truly
                                    unique, full of character &amp; bound to leave a lasting
                                    signature. Taste of Nature in a Glass!
                                </p>
                                <Image
                                    src="/assets/images/symbol.svg"
                                    alt="img"
                                    className="symbol-img position-absolute"
                                    width={154}
                                    height={154} loading="lazy"
                                />
                                <a
                                    aria-label="View Recipes"
                                    href="#eighth-section"
                                    className="bg-deepgreen text-lightgreen bebas common-btn view-recipe-btn"
                                >
                                    VIEW RECIPES
                                </a>
                            </div>
                        </div>
                        <Image
                            className="bottom-img position-absolute"
                            src="/assets/images/bottom.webp"
                            alt="img" fill={true} loading="lazy"
                        />
                        <Popup />
                    </div>
                </section>

                {/* ======================= Section 2 ===================== */}
                <section id="second-section" className="section common-section common-bg">
                    <div className="container">
                        <div className="second-container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="left position-relative" data-aos="fade-down">
                                        <h2 className="gothic text-lightgreen common-heading-1">
                                            the signature of our master blender
                                        </h2>
                                        <p className="common-p text-whitealter">
                                            In the skilled hands of Louise Martin, our Master Blender,
                                            the new Signature attains a level of perfection that is
                                            truly remarkable. Her meticulous craftsmanship infuses every
                                            sip of these exquisite blends with a sense of revelation,
                                            offering a remarkably smooth and delightfully rich
                                            experience.
                                        </p>
                                        <Image
                                            src="/assets/images/sign.webp"
                                            alt="sign img"
                                            width={217}
                                            height={54}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="right first-carousel" data-aos="fade-up">
                                        <OwlCarousel className="owl-theme" items={1} margin={30} loop={true} nav={false} autoplay={true} autoplayTimeout={4000} smartSpeed={2000} responsive={Responsive}>
                                            <div className="item">
                                                <div className="img-container-1">
                                                    <Image
                                                        src="/assets/images/carousel-1-top-left.webp"
                                                        alt="img" width={34} height={36} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-1-top-right.webp"
                                                        alt="img" width={238} height={242} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-1-middle-left.webp"
                                                        alt="img" width={132} height={125} loading="lazy"
                                                    />
                                                    <video
                                                        className="middle"
                                                        autoPlay
                                                        playsInline
                                                        loop
                                                        muted
                                                        preload="none"
                                                        poster="/assets/images/carousel-1-middle.webp"
                                                    >
                                                        <source
                                                            src="/assets/videos/carousel-1-middle.mp4"
                                                            type="video/mp4"
                                                        />
                                                        <source
                                                            src="/assets/videos/carousel-1-middle.webm"
                                                            type="video/webm"
                                                        />
                                                        <p>
                                                            Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/carousel-1-middle.mp4">link to the video</a>
                                                            instead.
                                                        </p>
                                                    </video>
                                                    <Image
                                                        src="/assets/images/carousel-1-middle-right.webp"
                                                        alt="img"
                                                        width={52} height={53} loading="lazy"
                                                    />
                                                    <video
                                                        playsInline
                                                        autoPlay
                                                        muted
                                                        loop
                                                        className="bottom-left opacity-75"
                                                        preload="none"
                                                        poster="/assets/images/born-of-craft-carousel.webp"
                                                    >
                                                        <source src="/assets/videos/born-of-craft.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/born-of-craft.webm" type="video/webm" />
                                                        <p>
                                                            Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/born-of-craft.mp4">link to the video</a>
                                                            instead.
                                                        </p>
                                                    </video>
                                                    <Image
                                                        src="/assets/images/carousel-1-bottom-right.webp"
                                                        alt="img" width={382} height={331} loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="img-container-2">
                                                    <Image
                                                        src="/assets/images/carousel-2-top-left.webp"
                                                        alt="img" width={132} height={125} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-2-top-left-2.webp"
                                                        alt="img" width={41} height={41} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-2-middle.webp"
                                                        alt="img" width={500} height={500} loading="lazy"
                                                    />
                                                    <video
                                                        className="bottom-left opacity-75"
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        preload="none"
                                                        poster="/assets/images/carousel-2-video.webp"
                                                    >
                                                        <source src="/assets/videos/carousel-2-video.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/carousel-2-video.webm" type="video/webm" />
                                                        <p>
                                                            Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/carousel-2-video.mp4">link to the video</a>
                                                            instead.
                                                        </p>
                                                    </video>
                                                    <Image
                                                        src="/assets/images/carousel-2-bottom-left-2.webp"
                                                        alt="img" width={238} height={242} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-2-bottom-right.webp"
                                                        alt="img" width={428} height={359} loading="lazy"
                                                    />
                                                    <Image
                                                        src="/assets/images/carousel-2-bottom-right-2.webp"
                                                        alt="img" width={48} height={48} loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================= Section 3 ===================== */}
                <section id="third-section" className="section common-section">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload="none"
                        poster="/assets/images/born-of-craft.webp"
                    >
                        <source src="/assets/videos/born-of-craft.mp4" type="video/mp4" />
                        <source src="/assets/videos/born-of-craft.webm" type="video/webm" />
                        <p>
                            Your browser doesn&apos;t support HTML video. Here is a
                            <a href="/assets/videos/born-of-craft.mp4">link to the video</a>
                            instead.
                        </p>
                    </video>
                    <div className="container">
                        <div className="third-container">
                            <h2 className="gothic text-lightgreen common-heading-1">
                                Born of craft
                            </h2>
                            <p className="roboto common-p text-white">
                                Signature is a creation of natural ingredients- Nature&apos;s
                                finest, barley, fresh water and 10 imported scotches harmonize to
                                become one. They are blended with aged Indian malts and fine grain
                                spirits. Even the bottle is made from recycled glass.
                            </p>
                            <Image
                                src="/assets/images/qr.webp"
                                alt="qr-img"
                                loading="lazy"
                                width={191}
                                height={191}
                            />
                            <span className="bebas text-white">scan the qr code for more</span>
                        </div>
                    </div>
                </section>

                {/* ======================= Section 4 ===================== */}
                <section id="fourth-section" className="section common-section common-bg">
                    <div className="container">
                        <div className="fourth-container">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="left">
                                        <Image
                                            src="/assets/images/bottle.webp"
                                            alt="img"
                                            width={580}
                                            height={778}
                                            loading="lazy"
                                            data-aos="slide-up" data-aos-delay="100"
                                        />
                                        <video
                                            className="opacity-75"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="none"
                                            poster="/assets/images/fourth-video.webp"
                                            data-aos="slide-up" data-aos-delay="200"
                                        >
                                            <source
                                                src="/assets/videos/fourth-video.mp4"
                                                type="video/mp4"
                                            />
                                            <source
                                                src="/assets/videos/fourth-video.webm"
                                                type="video/webm"
                                            />
                                            <p>
                                                Your browser doesn&apos;t support HTML video. Here is a
                                                <a href="/assets/videos/fourth-video.mp4">
                                                    link to the video
                                                </a>
                                                instead.
                                            </p>
                                        </video>
                                        <Image
                                            src="/assets/images/fourth-middle.webp"
                                            alt="img"
                                            width={782}
                                            height={726}
                                            loading="lazy"
                                            data-aos="slide-up" data-aos-delay="300"
                                        />
                                        <Image
                                            src="/assets/images/fourth-bottom-left.webp"
                                            alt="img"
                                            width={158}
                                            height={288}
                                            loading="lazy"
                                            data-aos="zoom-in-up" data-aos-delay="400"
                                        />
                                        <Image
                                            src="/assets/images/fourth-bottom-right.webp"
                                            alt="img"
                                            width={328}
                                            height={234}
                                            loading="lazy"
                                            data-aos="zoom-out" data-aos-delay="500"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="right" data-aos="slide-up">
                                        <h2 className="gothic text-lightgreen common-heading-1">
                                            signature premier whisky
                                        </h2>
                                        <span className="din text-orangish text-uppercase">
                                            Smooth &amp; Creamy
                                        </span>
                                        <p className="text-whitealter common-p">
                                            Signature Premier Whisky Gives a perfect smooth and creamy
                                            taste that&apos;s elevated sensorially with silky honey, a
                                            dash of fruitiness &amp; tinge of Maltiness. An exquisite
                                            Scotch selection, Signature Premier is a blend of Natural
                                            Ingredients 10 Imported Scotches, Aged Indian Malts &amp;
                                            Fine Grain Spirits.The fine ingredients are purposefully
                                            selected to bring out a remarkably creamy character
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================= Section 5 ===================== */}
                <section id="fifth-section" className="section common-section common-bg">
                    <div className="container">
                        <div className="fifth-container">
                            <div className="row">
                                <div className="col-xl-6 order-xl-1 order-2">
                                    <div className="left" data-aos="slide-up">
                                        <h2 className="gothic text-lightgreen common-heading-1">
                                            signature rare aged whisky
                                        </h2>
                                        <span className="din text-orangish text-uppercase">
                                            deep &amp; rich
                                        </span>
                                        <p className="common-p text-whitealter">
                                            Signature Rare Whisky gives a perfect Taste that&apos;s DEEP
                                            &amp; RICH An authentically rich taste, with Notes of Dried
                                            Fruits &amp; a nutty Aroma. A 3 Grain Whisky with Imported
                                            Scotch, Aged Indian Malts and Grain Spirits.The fine
                                            ingredients are purposefully sourced to bring out a
                                            remarkably rich character
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 order-xl-2 order-1">
                                    <div className="right">
                                        <Image
                                            src="/assets/images/bottle-2.webp"
                                            alt="img"
                                            width={580}
                                            height={778}
                                            loading="lazy"
                                            data-aos="slide-up"
                                            data-wow-delay="100"
                                        />
                                        <video
                                            className="opacity-75"
                                            autoPlay
                                            playsInline
                                            loop
                                            muted
                                            preload="none"
                                            poster="/assets/images/fifth-video.webp"
                                            data-aos="slide-up"
                                            data-wow-delay="200"
                                        >
                                            <source
                                                src="/assets/videos/fifth-video.mp4"
                                                type="video/mp4"
                                            />
                                            <source
                                                src="/assets/videos/fifth-video.webm"
                                                type="video/webm"
                                            />
                                            <p>
                                                Your browser doesn&apos;t support HTML video. Here is a
                                                <a href="/assets/videos/fifth-video.mp4">
                                                    link to the video
                                                </a>
                                                instead.
                                            </p>
                                        </video>
                                        <Image
                                            src="/assets/images/fifth-bottom-left.webp"
                                            alt="img"
                                            width={216}
                                            height={229}
                                            loading="lazy"
                                            data-aos="fade-left"
                                            data-wow-delay="300"
                                        />
                                        <Image
                                            src="/assets/images/fifth-bottom-left-2.webp"
                                            alt="img"
                                            width={382}
                                            height={117}
                                            loading="lazy"
                                            data-aos="zoom-in-left"
                                            data-wow-delay="400"
                                        />
                                        <Image
                                            src="/assets/images/fifth-bottom-right.webp"
                                            alt="img"
                                            width={727}
                                            height={748}
                                            loading="lazy"
                                            data-aos="slide-up"
                                            data-wow-delay="500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================= Section 6 ===================== */}
                <GrainSection />

                {/* ======================= Full Video Section ===================== */}
                <div className="common-section video-section">
                    <div className="video-container">
                        <video
                            ref={videoOnScrollPlay}
                            loop
                            muted
                            playsInline
                            preload="none"
                            poster="/assets/images/sixth-video.webp"
                        >
                            <source src="/assets/videos/sixth-video.mp4" type="video/mp4" />
                            <source src="/assets/videos/sixth-video.webm" type="video/webm" />
                            <p>
                                Your browser doesn&apos;t support HTML video. Here is a
                                <a href="/assets/videos/sixth-video.mp4">link to the video</a> instead.
                            </p>
                        </video>
                    </div>
                </div>

                {/* ======================= Section 7 ===================== */}
                <section id="seventh-section" className="section common-section common-bg">
                    <div className="container">
                        <div className="seventh-container position-relative">
                            <Image
                                data-aos="slide-up" data-aos-delay="100"
                                src="/assets/images/seven-top-left.webp"
                                alt="img"
                                className="top-left"
                                width={294}
                                height={283}
                                loading="lazy"
                            />
                            <Image
                                data-aos="slide-up" data-aos-delay="200"
                                src="/assets/images/seven-top-right.webp"
                                alt="img"
                                className="top-right"
                                width={403}
                                height={410}
                                loading="lazy"
                            />
                            <div className="content" data-aos="fade-up">
                                <h2 className="gothic text-lightgreen common-heading-2">
                                    nature in a glass
                                </h2>
                                <p className="roboto common-p text-whitealter">
                                    Experience the beauty of nature in every sip with these special
                                    curations crafted by the world&apos;s top mixologists. Made with
                                    only the finest-locally sourced ingredients that celebrate
                                    natural flavors and aromas of the earth.
                                </p>
                            </div>
                            <Image
                                data-aos="slide-up" data-aos-delay="300"
                                src="/assets/images/Arrow.webp"
                                alt="img"
                                className="middle-arrow"
                                width={30}
                                height={83}
                                loading="lazy"
                                onClick={ScrolltoNext}
                            />
                            <Image
                                data-aos="slide-up" data-aos-delay="100"
                                src="/assets/images/seven-bottom-left.webp"
                                alt="img"
                                className="bottom-left"
                                width={237}
                                height={228}
                                loading="lazy"
                            />
                            <Image
                                data-aos="slide-up" data-aos-delay="200"
                                src="/assets/images/seven-bottom-right.webp"
                                alt="img"
                                className="bottom-right"
                                width={288}
                                height={236}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* ======================= Section 8 ===================== */}
                <section id="eighth-section" className="section common-section" ref={eightsection}>
                    <Image src="/assets/images/eighthbg.svg" alt="eighth-bg" fill={true} className="eight-bg position-absolute" loading="lazy" />
                    <div className="tab-section">
                        <div ref={tabBtnRef} className="nav nav-tabs tabs" id="nav-tab" role="tablist">
                            <button
                                className="tab-button bebas active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-1"
                                type="button"
                                role="tab"
                                aria-selected="true"
                            >
                                Signature Serve
                            </button>
                            <button
                                className="tab-button bebas"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-2"
                                type="button"
                                role="tab"
                                aria-selected="false"
                            >
                                Region Inspired
                            </button>
                            <button
                                className="tab-button bebas"
                                id="nav-contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-3"
                                type="button"
                                role="tab"
                                aria-selected="false"
                            >
                                Recipes
                            </button>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-1" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img1.svg"
                                                alt="img"
                                                width={376}
                                                height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close"
                                                    width={19}
                                                    height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>001</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1">
                                                    signature <br className="breaks" /> premier
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    GT Sour is a depiction of that strong cumin element in a
                                                    sour with the fine full bodied &quot;Signature
                                                    Premier&quot; defining the versatile classic cocktail of
                                                    the century.
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        60 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Signature</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        15 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Roasted Cumin Cordial
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        3 <span className="roboto">drops</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Aromatic Bitters
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        15 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Fresh Lime juice
                                                    </p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – Shaken with ice and served straight or on the
                                                        rocks.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-2" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img2.svg"
                                                alt="img" width={376} height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close" width={19} height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>002</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1">
                                                    signature <br className="breaks" /> rare
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    Signature paired with the two most iconic flavours of
                                                    coffee &amp; coconut along with just the right amount of
                                                    soda!
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        60 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Signature</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Coffee</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        30 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Coconut</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Soda</p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – Shaken with ice and served straight.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-3" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img3.svg"
                                                alt="img" width={376} height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close" width={19} height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>001</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1 changed-heading">
                                                    Filter <br className="breaks" />
                                                    Coconut <br className="breaks" /> Kappi
                                                    <span>(south)</span>
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    Signature paired with the two most iconic flavours of
                                                    coffee &amp; coconut along with just the right amount of
                                                    soda!
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        60 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Signature</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Coffee</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        30 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Coconut</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Soda</p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – Shaken with ice and served straight.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-4" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img4.svg"
                                                alt="img" width={376} height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close" width={19} height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>002</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1 changed-heading">
                                                    The <br className="breaks" />
                                                    Signature <br className="breaks" /> Cutting
                                                    <span>(west)</span>
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    A refreshing end to the weekend with Signature pairing
                                                    beautifully with Kokum and its two best friends, lime
                                                    &amp; chili
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        60 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Signature</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Black masala tea
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        30 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Pineapple</p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Touch of jaggery
                                                    </p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – Shaken with ice and served straight.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-5" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img5.svg"
                                                alt="img" width={376} height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close" width={19} height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>001</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1">
                                                    Salty <br className="breaks" /> bay
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    Complementing the fine aromas is the salty sweet syrup
                                                    made with Himalayan Pink salt and Palm Candy Sugar
                                                    making this a whole some cocktail that has a depth of
                                                    flavors and long-lasting finish.
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        60 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Signature Premier
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Himalayan Pink Salt &amp; Palm CandySyrup
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        30 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Bay Leaf Water
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Lime Juice
                                                    </p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – Shaken with ice and served straight.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="recipe-modal-6" tabIndex={-1} aria-labelledby="recipe-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-left">
                                            <Image
                                                src="/assets/images/eight-img6.svg"
                                                alt="img" width={376} height={486}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-right">
                                            <button
                                                type="button"
                                                className="modal-closebtn"
                                                data-bs-dismiss="modal"
                                            >
                                                <Image
                                                    src="/assets/images/modal-close.svg"
                                                    alt="close" width={19} height={18}
                                                />
                                            </button>
                                            <div className="modal-label text-greenish gothic">
                                                <label>002</label>
                                            </div>
                                            <div className="modal-heading">
                                                <h3 className="text-greenish gothic common-heading-1">
                                                    East India <br className="breaks" /> Julep
                                                </h3>
                                            </div>
                                            <div className="modal-para">
                                                <p className="roboto700 text-greenish common-p">
                                                    The flavours of east in west. Kaffir lime &amp; mint
                                                    cordial taking you back to a more nostalgic time, topped
                                                    off with a perfect amount of lime juice.
                                                </p>
                                            </div>
                                            <div className="line bg-greenish" />
                                            <ul className="modal-recipe-container">
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        45 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Signature Premier
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Mint cordial
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        10 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">
                                                        Fresh lime juice
                                                    </p>
                                                </li>
                                                <li className="modal-recipe">
                                                    <div className="quantity text-greenish gothic">
                                                        90 <span className="roboto">ml</span>
                                                    </div>
                                                    <p className="name common-p text-greenish">Soda</p>
                                                </li>
                                                <li className="recipe-method">
                                                    <p className="common-p roboto700 text-greenish">
                                                        Method – muddled and built over ice in a tall hi ball
                                                        glass. Garnish with kaffir lime leaf.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={tabContainerRef} className="tab-content tab-container" id="nav-tabContent">

                        <div ref={paneRef} className="tab-pane active show" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <OwlCarousel className="owl-theme" items={1} loop={true} nav={false} dots={false} margin={30} responsive={Responsive2} >
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img1.svg" alt="img" width={488} height={579.06} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content">
                                                    <div className="text-greenish gothic">
                                                        <label>001</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1">
                                                        signature <br className="breaks" /> premier
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        Crafted from earth-friendly methods, this whiskey unveils a
                                                        harmonious blend of nature&apos;s abundance and silky elegance.
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-1"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img2.svg" alt="img" width={488} height={579.06} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content">
                                                    <div className="text-greenish gothic">
                                                        <label>002</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1">
                                                        signature <br className="breaks" /> rare
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        Signature Rare reveals an unmistakable depth, weaving a tale of
                                                        opulence that lingers on the palate, to savor all its layers.
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-2"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </div>

                        <div className="tab-pane" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                            <OwlCarousel className="owl-theme" items={1} loop={true} nav={false} dots={false} margin={30} responsive={Responsive2}>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img3.svg" alt="img" width={443.75} height={573.56} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content">
                                                    <div className="text-greenish gothic">
                                                        <label>001</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1 changed-heading">

                                                        Filter <br className="breaks" />
                                                        Coconut <br className="breaks" /> Kappi <span>(south)</span>
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        Signature paired with the two most iconic flavours of coffee &amp;
                                                        coconut along with just the right amount of soda!
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-3"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img4.svg" alt="img" width={443.75} height={573.56} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content">
                                                    <div className="text-greenish gothic">
                                                        <label>002</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1 changed-heading">

                                                        The <br className="breaks" />
                                                        Signature <br className="breaks" /> Cutting <span>(west)</span>
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        Taste of Maharashtra with the famous masala tea flavour, a lip
                                                        smacking mix of pineapple and a touch of Jaggery.
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-4"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                        <div className="tab-pane" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                            <OwlCarousel className="owl-theme" items={1} loop={true} nav={false} dots={false} margin={30} responsive={Responsive2}>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img5.svg" alt="img" width={443.75} height={573.56} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content last">
                                                    <div className="text-greenish gothic">
                                                        <label>001</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1">
                                                        Salty <br className="breaks" /> bay
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        Complementing the fine aromas is the salty sweet syrup made with
                                                        Himalayan Pink salt and Palm Candy Sugar making this a whole some
                                                        cocktail that has a depth of flavors and long-lasting finish.
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-5"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left">
                                                <div className="left-img">
                                                    <Image loading="lazy" src="/assets/images/eight-img6.svg" alt="img" width={443.75} height={573.56} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="carousel-right">
                                                <div className="carousel-content last">
                                                    <div className="text-greenish gothic">
                                                        <label>002</label>
                                                    </div>
                                                    <h3 className="text-greenish gothic common-heading-1">
                                                        East India <br className="breaks" /> Julep
                                                    </h3>
                                                    <p className="roboto700 text-greenish common-p">
                                                        The flavours of east in west. Kaffir lime &amp; mint cordial
                                                        taking you back to a more nostalgic time, topped off with a
                                                        perfect amount of lime juice.
                                                    </p>
                                                    <button
                                                        className="bebas text-lightgreen bg-deepgreen common-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#recipe-modal-6"
                                                    >
                                                        view recipe
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>
                </section>

                {/* ======================= Section 9 ===================== */}
                <section id="ninth-section" className="section common-section">
                    <Image src="/assets/images/mixologistbg.svg" fill={true} className="ninth-bg position-absolute" alt="bg-img" loading="lazy" />
                    <div className="container">
                        <div className="ninth-container">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="left">
                                        <h2 className="gothic text-greenish common-heading-2 text-center">
                                            OUR MIXOLOGISTS
                                        </h2>
                                        <p className="common-p roboto700 text-greenish">
                                            Our mixologists elevate libations to liquid art, crafting
                                            unforgettable cocktails and drinks that galvanize the senses.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 p-3">
                                    <div className="right">
                                        <div className="video-top">
                                            <div className="col-12 p-0">
                                                <div className="top">
                                                    <video
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        preload="none"
                                                        poster="/assets/images/ninth-top.webp"
                                                    >
                                                        <source src="/assets/videos/ninth-top.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/ninth-top.webm" type="video/webm" />
                                                        <p>
                                                            Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="assets/videos/ninth-top.mp4">link to the video</a> instead.
                                                        </p>
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="video-bottom pt-1">
                                            <div className="row">
                                                <div className="col-7 p-0">
                                                    <div className="bottom-left">
                                                        <video
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            preload="none"
                                                            poster="/assets/images/ninth-bottom-left.webp"
                                                        >
                                                            <source
                                                                src="/assets/videos/ninth-bottom-left.mp4"
                                                                type="video/mp4"
                                                            />
                                                            <source
                                                                src="/assets/videos/ninth-bottom-left.webm"
                                                                type="video/webm"
                                                            />
                                                            <p>
                                                                Your browser doesn&apos;t support HTML video. Here is a
                                                                <a href="assets/videos/ninth-bottom-left.mp4">
                                                                    link to the video
                                                                </a>
                                                                instead.
                                                            </p>
                                                        </video>
                                                    </div>
                                                </div>
                                                <div className="col-5 p-0">
                                                    <div className="bottom-right">
                                                        <video
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            preload="none"
                                                            poster="/assets/images/ninth-bottom-right.webp"
                                                        >
                                                            <source
                                                                src="/assets/videos/ninth-bottom-right.mp4"
                                                                type="video/mp4"
                                                            />
                                                            <source
                                                                src="/assets/videos/ninth-bottom-right.webm"
                                                                type="video/webm"
                                                            />
                                                            <p>
                                                                Your browser doesn&apos;t support HTML video. Here is a
                                                                <a href="assets/videos/ninth-bottom-right.mp4">
                                                                    link to the video
                                                                </a>
                                                                instead.
                                                            </p>
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ninth-carousel">
                                        <OwlCarousel className="owl-theme" items={1} margin={50} loop={true} nav={false} dots={true} autoplay={true} autoplayTimeout={4000} smartSpeed={1000} animateIn="slideInRight" animateOut="slideOutLeft" muted={true}>
                                            <div className="item">
                                                <div className="ninth-carousel-item">
                                                    <video disablePictureInPicture className="ninth-video" autoPlay muted loop playsInline poster="/assets/images/ninth-top.webp">
                                                        <source src="/assets/videos/ninth-top.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/ninth-top.webm" type="video/webm" />
                                                        <p>Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/ninth-top.mp4">link to the video</a> instead.
                                                        </p>
                                                    </video>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ninth-carousel-item">
                                                    <video disablePictureInPicture className="ninth-video" autoPlay muted loop playsInline poster="/assets/images/ninth-bottom-left.webp">
                                                        <source src="/assets/videos/ninth-bottom-left.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/ninth-bottom-left.webm" type="video/webm" />
                                                        <p>Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/ninth-bottom-left.mp4">link to the video</a> instead.
                                                        </p>
                                                    </video>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ninth-carousel-item">
                                                    <video disablePictureInPicture className="ninth-video" autoPlay muted loop playsInline poster="/assets/images/ninth-bottom-right.webp">
                                                        <source src="/assets/videos/ninth-bottom-right.mp4" type="video/mp4" />
                                                        <source src="/assets/videos/ninth-bottom-right.webm" type="video/webm" />
                                                        <p>Your browser doesn&apos;t support HTML video. Here is a
                                                            <a href="/assets/videos/ninth-bottom-right.mp4">link to the video</a> instead.
                                                        </p>
                                                    </video>
                                                </div>
                                            </div>

                                        </OwlCarousel>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ======================= Section 10 ===================== */}
                <section id="tenth-section" className="section common-section common-bg">
                    <div className="container">
                        <div className="tenth-container" ref={tenthsection}>
                            <Image
                                data-aos="slide-up" data-aos-delay="100"
                                src="/assets/images/tenth-top-left.webp"
                                alt="img"
                                className="remove-effect top-left"
                                width={403} height={340}
                                loading="lazy"
                            />
                            <Image
                                data-aos="slide-up" data-aos-delay="200"
                                src="/assets/images/tenth-top-right.webp"
                                alt="img"
                                className="remove-effect top-right"
                                width={228} height={220} loading="lazy"
                            />
                            <div className="remove-effect content" data-aos="slide-up">
                                <h2 className="gothic text-lightgreen common-heading-2 text-center">Think green drink green</h2>
                                <p className="common-p text-whitealter">
                                    We take pride in using thoughtfully sourced, sustainable materials
                                    to serve our drinks. From paper straws to recycled drinkware, we
                                    minimize waste without compromising on pizzazz. Our commitment to
                                    conservation extends to our innovative recycling and composting
                                    systems, ensuring that nothing goes to waste. Join us for a
                                    guilt-free drinking experience that&apos;s kind to both the planet and
                                    your taste buds. Cheers to a greener future, one drink at a time!
                                </p>
                            </div>
                            <Image
                                data-aos="slide-up" data-aos-delay="100"
                                src="/assets/images/tenth-bottom-left.webp"
                                alt="img"
                                className="remove-effect bottom-left" width={288} height={223}
                                loading="lazy"
                            />
                            <Image
                                data-aos="slide-up" data-aos-delay="200"
                                src="/assets/images/tenth-bottom-right.webp"
                                alt="img"
                                className="remove-effect bottom-right" width={247} height={238}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* ======================= Footer Section ===================== */}
                <Footer />

            </div>

        </>
    )
}

export default Signature