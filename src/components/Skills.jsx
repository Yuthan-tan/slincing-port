import {  } from "react";


// buat array dari objek untuk card item

const skills = [
    {
        id : 1, name: "Strategy Direction", 
        desciptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
        Image: "src/assets/skills-1.png"
    },
    {
        id : 2, name: "Branding & Logo", 
        desciptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
        Image: "src/assets/skills-2.png"
    },
    {
        id : 3, name: "UI & UX Design", 
        desciptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
        Image: "src/assets/skills-3.png"
    },
    {
        id : 4, name: "Webflow Development", 
        desciptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
        Image: "src/assets/skills-4.png"
    }
];

const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 py-32 text-headingColor" id="skills">
            <div className="text-headingColor mb-20">
                <p className="text-xl font-semibold mb-5">My Skills</p>
                <h2 className="md:text-5xl text-4xl font-bold">My Expertise</h2>
            </div>

            {/* skills card */}

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {
                    skills.map(skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-x-4 transition-all duration-300 skillcard">
                        <img src={skill.Image} alt="" className="w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3"/>
                        <h3 className="text-2x1 font-bold mb-4">{skill.name}</h3>
                        <p className="">{skill.desciptions}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;