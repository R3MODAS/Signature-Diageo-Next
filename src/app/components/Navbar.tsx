import Image from "next/image";
import { useEffect, useRef } from "react";
import navlinks from "@/app/utils/navbar.json";
import sidebarlinks from "@/app/utils/sidebar.json";
import Link from "next/link";

const Navbar = () => {

    const header = useRef<HTMLHeadingElement>(null);
    const ul = useRef<HTMLUListElement>(null);
    const logo = useRef<HTMLDivElement>(null);
    const menu = useRef<HTMLDivElement>(null);
    const sidebar = useRef<HTMLDivElement>(null);
    const closemenu = useRef<HTMLDivElement>(null);
    const sidebarItem = useRef<HTMLUListElement>(null);

    // Sticky and Scroll down Hide Header
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

    // On Click Sidebar Open
    function Sidebar() {
        menu.current?.addEventListener("click", () => {
            sidebar.current!.classList.add("active");
        })

        closemenu.current!.addEventListener("click", () => {
            sidebar.current!.classList.remove("active");
        })

    }

    // On Clicking Menu Items Sidebar Close 
    function SidebarClose() {
        const sideitems = sidebarItem.current;
        const li = sideitems?.querySelectorAll("li");
        li?.forEach((item) => {
            item.addEventListener("click", () => {
                sidebar.current?.classList.remove("active");
            })
        })
    }

    // Type of elements inside the Array
    interface NavType {
        id: number,
        href: string,
        title: string,
        className: string
    }

    // Setting the type to the Array
    const NavLinks: NavType[] = navlinks;
    const SideBarLinks: NavType[] = sidebarlinks;

    useEffect(() => {
        Header();
        Sidebar();
        SidebarClose();
    }, [])

    return (
        <>
            <div className="sidebar" ref={sidebar}>
                <div id="close" ref={closemenu}>
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
                <ul ref={sidebarItem}>
                    {
                        SideBarLinks.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} className={item.className}>{item.title}</Link>
                            </li>
                        ))
                    }
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
                    {
                        NavLinks!.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} className={item.className}>{item.title}</Link>
                            </li>
                        ))
                    }
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
        </>
    )
}

export default Navbar