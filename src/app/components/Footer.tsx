import Image from "next/image"

const Footer = () => {
    return (
        <footer id="footer-section" className="section">
            <div className="container">
                <div className="footer-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left">
                                <Image
                                    src="/assets/images/bottles.webp"
                                    alt="img" width={352} height={438}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right">
                                <Image
                                    src="/assets/images/logo.svg"
                                    alt="img" width={151} height={45}
                                    loading="lazy"
                                />
                                <h3 className="gothic text-greenish common-heading-1 position-relative">
                                    CRAFTED FROM NATURE,
                                    <span className="leaf-green">
                                        <Image
                                            className="position-absolute"
                                            src="/assets/images/leaf-green.svg"
                                            alt="leaf-img" width={19} height={19}
                                            loading="lazy"
                                        />
                                    </span>
                                    my signature
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer