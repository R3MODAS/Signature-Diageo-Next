"use client"
import Image from "next/image";
import { useRef } from "react"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const TabCarousel = () => {

    const Responsive2 = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }

    return (

        <>
            <div className="tab-section">
                <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
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

            <div className="tab-content tab-container" id="nav-tabContent">

                <div className="tab-pane active show" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
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
                                                Salty <br className="breaks" /> bay{" "}
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
                                                East India <br className="breaks" /> Julep{" "}
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
        </>
    )
}

export default TabCarousel