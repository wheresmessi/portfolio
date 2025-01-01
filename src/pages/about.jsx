import React from 'react';
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
export const About = () => {
    return(
        <section id='about' className='text-white p-8'>
            <h2 className='text-6xl font-bold mb-8'>
                About <span className='text-emerald-300'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                <p className='text-white/50 mb-6'>
I’m a BTech student in AI & Data Science and a freelancing full-stack developer. With a passion for creating innovative solutions, I specialize in building dynamic web and AI-driven applications. Outside of work, I’m a football enthusiast, dancer, and Event Head of my college’s GDG club, where I lead and organize tech events.</p>

<div className='rounded-lg p-4 mb-4 border border-white/20'>
<code className='text-emerald-200/50'>
const skills = [<br/>
&nbsp;&nbsp;'JavaScript',
<br />
&nbsp;&nbsp;'React',
<br />
&nbsp;&nbsp;'Node.js',
<br />
&nbsp;&nbsp;'Python',
<br />
&nbsp;&nbsp;'SQL',
<br />
&nbsp;&nbsp;'Numpy',
<br />
&nbsp;&nbsp;'Scikit-learn',
<br />
&nbsp;&nbsp;'Pandas',
<br />
&nbsp;&nbsp;'Matplotlib'
<br />
];
</code>
</div>
                </div>
                <div className='border border-white/20 rounded-lg p-6'>
                <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
                <p className='text-white/50'>
                I specialize in Artificial Intelligence, Data Science, and full-stack development. With a strong foundation in AI and machine learning, I create data-driven solutions to solve real-world problems. As a full-stack developer, I build scalable and responsive web applications using modern frameworks and technologies.
                </p>
                <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[350px] overflow-hidden'>
                <a href="https://maplearningacademy.com/" target="_blank" rel="noopener noreferrer">
  <img src={project1} alt="Project1" className="absolute inset-0 w-full h-full object-cover" />
</a>

                </div>
                </div>

                <div className='border border-white/20 rounded-lg p-6'>
                <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                <p className='text-white/50 mb-4'>
                I am skilled in Artificial Intelligence and Data Science, specializing in machine learning, data analysis, and predictive modeling. As a full-stack developer, I build dynamic web applications using React, Node.js, Express, and MongoDB. I am proficient in both frontend and backend development, ensuring responsive UIs and robust APIs. Additionally, I have delivered freelance projects with a focus on clean, maintainable code.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                <div className='border border-white/20 rounded-lg p-3'>
                <h4 className='text-emerald-300 font-medium mb-2'>Machine Learning</h4>
                <ul className='text-white/50 space-y-1 text-sm'>
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                </ul>
                </div>
                <div className='border border-white/20 rounded-lg p-3'>
                <h4 className='text-emerald-300 font-medium mb-2'>Data Science</h4>
                <ul className='text-white/50 space-y-1 text-sm'>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>Seaborn</li>
                </ul>
                </div>
                <div className='border border-white/20 rounded-lg p-3'>
                <h4 className='text-emerald-300 font-medium mb-2'>FrontEnd</h4>
                <ul className='text-white/50 space-y-1 text-sm'>
                    <li>React/Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Elementor</li>
                </ul>
                </div>
                <div className='border border-white/20 rounded-lg p-3'>
                <h4 className='text-emerald-300 font-medium mb-2'>BackEnd</h4>
                <ul className='text-white/50 space-y-1 text-sm'>
                    <li>Node.JS</li>
                    <li>Python</li>
                    <li>Express.JS</li>
                </ul>
                </div>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <div className='space-y-4 mb-10'>
                    <div>
                            <label className='block text-sm font-medium mb-1'>Machine Learning</label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full'
                                style={{width: "85%"}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>FrontEnd</label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full'
                                style={{width: "80%"}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>BackEnd</label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full'
                                style={{width: "70%"}}>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Data Analytics</label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full'
                                style={{width: "90%"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold mt-4 mv-2'>04. Approach</h3>
                    <p className='text-white/50'>
                    I focus on delivering innovative, data-driven solutions through a user-centric development process. By combining my expertise in AI, Data Science, and full-stack development, I ensure that each project is scalable, efficient, and tailored to meet client needs. My approach emphasizes collaboration, clean code, and timely delivery, while maintaining flexibility to adapt to evolving requirements.</p>
                </div>

                <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                    <div className='relative border border-white/20 rounded-lg p-4 h-[250px] overflow-hidden mb-5'>
                    <a href="https://themindflex.in" target="_blank" rel="noopener noreferrer">
                    <img src={project2} alt="" className='absolute inset-0 w-full h-full object-cover'/></a>
                     </div>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>05. Goals</h3>
                        <p className='text-white/50'>
                        I aim to apply my skills in AI, Data Science, and full-stack development to create innovative, real-world solutions. My focus is on expanding my expertise in machine learning and web development while contributing to open-source projects and gaining hands-on experience in scalable application development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}