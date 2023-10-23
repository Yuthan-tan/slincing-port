import {  } from "react";
import bannerImg from '../assets/banner.png';
import downloadCv from '../assets/Yuthan.pdf';
import { useTypewriter } from 'react-simple-typewriter';
import Fade from 'react-reveal/Fade';

const Home = () => {

    const [text] = useTypewriter({
    words: ['ReactJs', 'Vite', 'Tailwind', 'Flutter'],
    loop: 0
})
    return (
        <div className="mt-20 bg-bgShade" id="home">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
                <div className="md:w1/2 w-full">
                    <Fade right><img src={bannerImg} alt="" className="w-full" /></Fade>
                </div>
                <div className="md:1/2 w-full mt-5">
                    <Fade left>
                    <h3 className="text-xl text-headingColor font-semibold mb-5">Hi, Iam Yuthan Jufandri</h3>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-[76px] mb-5">I create with <span className="text-primary">{text}</span> <br /> and brand experience</h1>
                    <p className="text-body text-2xl leading-9 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </Fade>
                    
                    <a href={downloadCv} download={downloadCv}>
                        <button className="btn-primary">Download CV</button>
                    </a>
                    
                </div>

            </div>
            
        </div>
    );
};

export default Home;