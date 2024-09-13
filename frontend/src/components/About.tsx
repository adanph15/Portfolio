import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='lg:w-2/3 sm:w-full p-10'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur ">
                <h2 className="text-sm font-bold uppercase text-slate-200 ">ABOUT ME</h2>
            </div>
            <div className='flex flex-col gap-4 items-start mt-20'>
                <h1 className='text-4xl font-bold tracking-tight text-slate-200  max-[450px]:text-2xl'>Hello, <span className='text-cyan-400 font-bold'>I am Adán Pérez</span> </h1>
                <h2 className='text-xl bg-gradient-to-r from-slate-50 to-cyan-600 bg-clip-text text-transparent'>Junior Full Stack Developer</h2>
                <p className='text-sm text-slate-500'>Passionate about web development.</p>
            </div>
            <div className="mb-12 mt-8 ">
                <div className=" gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className=" flex flex-col font-medium leading-snug text-slate-500 text-base gap-8">
                        <div>
                            Recently graduated as a full stack developer, motivated to learn and improve my knowledge.
                            Looking for innovative andinteresting projects, and I would be interested in working with technologies such as React, Angular and NodeJS, I am willing tolearn new languages and technologies, which I would be very excited about.
                        </div>
                        <div>
                            I am used to working in work teams, both in the development and in the design and structure of the application.
                            Supporter of the Scrum work methodology and good communication in the work team.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mt-8">
                    <button className="relative flex flex-row items-center rounded-full bg-cyan-400/10 hover:bg-cyan-600/10 hover:text-transparent px-4 py-2 text-base font-medium leading-5 text-teal-300 gap-4 transition-all duration-300 ease-in-out group border border-transparent hover:border-teal-100">
                        <a href="/CV_AdanPerezENG.pdf" target="_blank" rel="noopener noreferrer" download="CV_AdanPerezENG.pdf" className='text-center'>
                            Download CV
                        </a>
                        <FontAwesomeIcon icon={faDownload} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 text-transparent group-hover:text-teal-100" />
                    </button>
                    <a href="https://www.linkedin.com/in/ad%C3%A1n-p%C3%A9rez-hern%C3%A1ndez-06ba722a6/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" className='text-teal-300 hover:text-teal-100 hover:scale-110' /></a>
                    <a href="https://github.com/adanph15" target="_blank"><FontAwesomeIcon icon={faSquareGithub} size="2xl" className='text-teal-300 hover:text-cyan-100 hover:scale-110' /></a>
                </div>
            </div>
        </div>
    );
}

export default About;