"use client"
import Image from "next/image";
import { useRef } from "react";

const GrainSection = () => {

    const video = useRef<HTMLVideoElement>(null);
    const playBtn = useRef<HTMLImageElement>(null);
    const closeVideo = useRef<HTMLImageElement>(null);

    const handleVideo = () => {
        video.current!.classList.remove("d-none");
        playBtn.current!.classList.add("d-none");
        closeVideo.current!.style.transform = "scale(1)";
    }

    const handleCloseVideo = (e: any) => {
        video.current!.classList.add("d-none");
        playBtn.current!.classList.remove("d-none");
        closeVideo.current!.style.transform = "scale(0)";
    }

    return (
        <section id="sixth-section" className="section common-section common-bg">
            <Image ref={closeVideo} onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => handleCloseVideo(e)} width={30} height={30} src="/assets/images/close-video.svg" className="position-absolute close-video" alt="close-btn" loading="lazy"></Image>
            <video ref={video} className="d-none" controls loop muted playsInline preload="none" poster="/assets/images/sixth-video.webp">
                <source src="/assets/videos/sixth-video.mp4" type="video/mp4" />
                <source src="/assets/videos/sixth-video.webm" type="video/webm" />
                <p>
                    Your browser doesn&apos;t support HTML video. Here is a
                    <a href="/assets/videos/sixth-video.mp4">link to the video</a>
                    instead.
                </p>
            </video>
            <div className="container position-relative">
                <Image
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="/assets/images/sixth-top.webp"
                    alt="img"
                    className="position-absolute sixth-top"
                    width={36}
                    height={37}
                    loading="lazy"
                />
                <div className="sixth-container" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="gothic text-lightgreen text-center common-heading-2">
                        grain to glass
                    </h2>
                    <p className="roboto common-p text-whitealter">
                        From the careful sourcing of organic, locally grown grains to the
                        use of energy-efficient distillation methods, sustainability is
                        always at the forefront. The result? A sustainably produced
                        whiskey, from grain to glass. So, sip and savour this sublime
                        concoction, knowing that it was crafted with a commitment to both
                        taste and the planet.
                    </p>
                </div>
                <Image
                    data-aos="fade-up" data-aos-delay="300"
                    ref={playBtn}
                    onClick={handleVideo}
                    src="/assets/images/play.svg"
                    alt="img"
                    className="position-absolute play-btn"
                    width={157}
                    height={157}
                    loading="lazy"
                />
                <Image
                    data-aos="fade-up" data-aos-delay="400"
                    src="/assets/images/sixth-bottom-left.webp"
                    alt="img"
                    className="position-absolute sixth-bottom-left"
                    width={349}
                    height={369}
                    loading="lazy"
                />
                <Image
                    data-aos="fade-up" data-aos-delay="500"
                    src="/assets/images/sixth-bottom-right.webp"
                    alt="img"
                    className="position-absolute sixth-bottom-right"
                    width={50}
                    height={51}
                    loading="lazy"
                />
                <Image
                    data-aos="fade-up" data-aos-delay="600"
                    src="/assets/images/sixth-bottom-right-2.webp"
                    alt="img"
                    className="position-absolute sixth-bottom-right-2"
                    width={214}
                    height={219}
                    loading="lazy"
                />
            </div>
        </section>
    )
}

export default GrainSection