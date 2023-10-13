"use client";
import Image from "next/image";
import TabCarousel from "./components/TabCarousel";
import Footer from "./components/Footer";
import GrainSection from "./components/GrainSection";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Responsive } from "./utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


export default function Home() {

  // ========== Sticky and Scroll down Hide Header ===========
  const header = useRef<HTMLHeadingElement>(null);
  const ul = useRef<HTMLUListElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  function Header() {
    let lastScrollTop: number;

    document.addEventListener("scroll", () => {
      let scrollValue = window.scrollY;

      var scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        header.current!.style.top = "-80px";
      }
      else {
        header.current!.style.top = '0';
      }

      lastScrollTop = scrollTop;

      if (scrollValue > 1) {
        header.current!.classList.add("sticky");
        logo.current!.classList.add("onscroll-logo");
        logo.current!.style.setProperty("--remove", "none");
        ul.current!.classList.add("onscroll-ul");
        header.current!.classList.add("onscroll-header");
        menu.current!.classList.add("onscroll-menu");
      }

      else {
        header.current!.classList.remove("sticky");
        logo.current!.classList.remove("onscroll-logo");
        logo.current!.style.setProperty("--remove", "block");
        ul.current!.classList.remove("onscroll-ul");
        header.current!.classList.remove("onscroll-header");
        menu.current!.classList.remove("onscroll-menu");
      }



    });

  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out"
    })
    Header();
  }, [])

  return (
    <div className="wrapper">
      {/* ======================= Navbar Section ===================== */}
      <div className="sidebar">
        <div id="close">
          <Image
            src="/assets/images/close-btn.svg"
            alt="close-btn"
            width={17}
            height={17} loading="lazy"
          />
        </div>
        <div className="header-logo">
          <Image
            src="/assets/images/menu-logo.svg"
            alt="logo"
            width={120}
            height={35.75} loading="lazy"
          />
        </div>
        <ul>
          <li>
            <a href="#second-section" className="bebas sidebar-item">
              Our Master Blender
            </a>
          </li>
          <li>
            <a href="#fourth-section" className="bebas sidebar-item">
              Products
            </a>
          </li>
          <li>
            <a href="#sixth-section" className="bebas sidebar-item">
              Grain To Glass
            </a>
          </li>
          <li>
            <a href="#eighth-section" className="bebas sidebar-item">
              Recipes
            </a>
          </li>
          <li>
            <a href="#ninth-section" className="bebas sidebar-item">
              Our mixologists
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <a
            href="https://www.instagram.com/signaturegreenvibes/"
            target="_blank"
            className="white bebas"
          >
            <span>
              <Image
                src="/assets/images/menu-instagram.svg"
                alt="logo"
                width={19}
                height={19} loading="lazy"
              />
            </span>
            INSTAGRAM
          </a>
          <div>
            <label className="roboto white">© 2023 Diageo</label>
          </div>
        </div>
      </div>

      <header id="header-section" ref={header}>
        <div className="logo" ref={logo}>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={151}
            height={45} loading="lazy"
          />
        </div>
        <ul ref={ul}>
          <li>
            <a href="#second-section" className="bebas">
              Our Master Blender
            </a>
          </li>
          <li>
            <a href="#fourth-section" className="bebas">
              Products
            </a>
          </li>
          <li>
            <a href="#sixth-section" className="bebas">
              Grain To Glass
            </a>
          </li>
          <li>
            <a href="#eighth-section" className="bebas">
              Recipes
            </a>
          </li>
          <li>
            <a href="#ninth-section" className="bebas">
              Our mixologists
            </a>
          </li>
        </ul>
        <div id="menu" ref={menu}>
          <Image
            className=""
            src="/assets/images/ham-menu.svg"
            alt="ham-menu" loading="lazy"
            width={25}
            height={25}
          />
        </div>
      </header>

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
                <div className="left position-relative" data-aos="slide-down">
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
                <div className="right first-carousel" data-aos="slide-up">
                  <OwlCarousel className="owl-theme" items={1} margin={30} loop={true} nav={false} autoplay={false} autoplayTimeout={4000} smartSpeed={2000} responsive={Responsive}>
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

      {/* ======================= Section 7 ===================== */}
      <section id="seventh-section" className="section common-section common-bg">
        <div className="container">
          <div className="seventh-container position-relative">
            <Image
              src="/assets/images/seven-top-left.webp"
              alt="img"
              className="top-left"
              width={294}
              height={283}
              loading="lazy"
            />
            <Image
              src="/assets/images/seven-top-right.webp"
              alt="img"
              className="top-right"
              width={403}
              height={410}
              loading="lazy"
            />
            <div className="content">
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
              src="/assets/images/Arrow.webp"
              alt="img"
              className="middle-arrow"
              width={30}
              height={83}
              loading="lazy"
            />
            <Image
              src="/assets/images/seven-bottom-left.webp"
              alt="img"
              className="bottom-left"
              width={237}
              height={228}
              loading="lazy"
            />
            <Image
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
      <section id="eighth-section" className="section common-section">
        <TabCarousel />
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

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Section 10 ===================== */}
      <section id="tenth-section" className="section common-section common-bg">
        <div className="container">
          <div className="tenth-container">
            <Image
              src="/assets/images/tenth-top-left.webp"
              alt="img"
              className="remove-effect top-left"
              width={403} height={340}
              loading="lazy"
            />
            <Image
              src="/assets/images/tenth-top-right.webp"
              alt="img"
              className="remove-effect top-right"
              width={228} height={220} loading="lazy"
            />
            <div className="remove-effect content">
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
              src="/assets/images/tenth-bottom-left.webp"
              alt="img"
              className="remove-effect bottom-left" width={288} height={223}
              loading="lazy"
            />
            <Image
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
  );
}
