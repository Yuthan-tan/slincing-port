import { useEffect, useState } from 'react';
import Jello from 'react-reveal/Jello';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);
    // fetching data dari json file

    useEffect(() => {
        fetch("projects.json").then(res => res.json()).then(data => setProjects(data))
    }, []);



    return (
        <div className='lg:mx-12 mx-4 my-32' id='portfolio'>
            <div className='flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center'>
                <div className="text-headingColor ">
                <Jello><p className="text-xl font-semibold mb-5">Recent Projects</p>
                <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2></Jello>
                
            </div>
            <div>
                <button className='btn-primary bg-dribble py-5'><img src="/src/assets/dibble.png" alt="" className='h-6 w-6 inline-block mr-2'/>Visit My Dribble</button>
            </div>
            </div>

            {/* Buat Json terlebih dahulu untuk portfolio */}

            {/* Project Card */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    projects.map(project => <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
                        <img src={project.image} alt="" className='hover:scale-90 transition-all duration-300'/>
                        <div className='p-8'>
                            <h3 className='text-2xl font-semibold mb-2 text-headingColor'>{project.name}</h3>
                            <p className='text-body mb-4'>{project.description}</p>
                            <a href="/" className='underline underline-offset-8 hover:text-primary'>View In Dribble <img src="/src/assets/b-cursor.png" alt="" className='w-3 inline-block ml-3'/></a>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}

export default Portfolio;