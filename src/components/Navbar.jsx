import { useEffect, useState } from "react";

// import logo
import logo from "../assets/Logo.png";

// import to menu
import { HiMenu } from "react-icons/hi";

// efek scroll
import { Link } from 'react-scroll';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toogle Menu
    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    //funcions for menu
    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 0) {
                setIsSticky(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className="w-full fixed top-0 right-0 left-0">
            <nav className={`py-4 md:px12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
                {/* untuk device besar */}
                <div className="flex items-center justify-between">
                    {/* untuk logo */}
                    <div className="cursor-pointer">
                        <img src={logo} alt="" className="h-10"/>
                    </div>
                    {/* menu items ukuran komputer */}
                    <div className="lg:flex items-center gap-3 hidden text-body text-lg">
                        <Link to="home" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 ">Home</Link>
                        <Link to="skills" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Skill</Link>
                        <Link to="about" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">About Me</Link>
                        <Link to="portfolio" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Portfolio</Link>
                        <Link to="testimonials" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Testimonials</Link>
                    </div>
                    {/* contact person */}
                    <div className="lg:block hidden">
                        <button className="outlineBtn">
                        Contact Me
                        </button>
                    </div>
                    {/* menu untuk mobile */}
                    <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
                        <HiMenu></HiMenu>
                    </button>
                </div>

                {/* menu semua devicess */}
                {
                    isMenuOpen && <div className="mt-4 p-4 bg-body rounded-lg text-white">
                        <a href="home" className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 ">Home</a>
                        <a href="skills" className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Skill</a>
                        <a href="about" className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">About Me</a>
                        <a href="portfolio" className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Portfolio</a>
                        <a href="testimonials" className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Testimonials</a>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Navbar;