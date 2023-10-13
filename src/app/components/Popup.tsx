import Image from 'next/image'
import React from 'react'

const Popup = () => {
    return (
        <>
            <div className="popup">
                <div className="popup-container">
                    <Image
                        className="popup-close"
                        src="/assets/images/close.svg"
                        alt="close-icon"
                        width={7.5}
                        height={7.5}
                    />
                    <div className="popup-top">
                        <Image
                            src="/assets/images/glass.svg"
                            alt="img"
                            width={31}
                            height={31}
                        />
                        <h2 className="gothic text-greenish">purchase online</h2>
                    </div>
                    <ul className="popup-middle">
                        <li>
                            <a href="https://www.swiggy.com/" target="_blank">
                                <Image
                                    width={33}
                                    height={50}
                                    className="img"
                                    src="/assets/images/swiggy.svg"
                                    alt="swiggy-icon"
                                />
                                <div className="roboto text text-uppercase">swiggy</div>
                            </a>
                        </li>
                    </ul>
                    <div className="popup-bottom">
                        <p className="roboto">
                            Home delivery of alcohol products is only applicable in West
                            Bengal and Odisha.
                        </p>
                    </div>
                </div>
            </div>
            <div className="popup-btn active">
                <div className="popup-btn-container">
                    <Image
                        src="/assets/images/glass-btn.webp"
                        alt="img"
                        className="img-fluid"
                        width={35}
                        height={35}
                    />
                    <h2 className="gothic text-greenish">purchase online</h2>
                </div>
            </div>
        </>
    )
}

export default Popup