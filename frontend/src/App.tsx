
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className='flex flex-col items-center w-2/3 text-lg text-[#DAF1F9] font-semibold '>
      <h2 className='text-xl font-bold'>Tech SKILLS</h2>
      <div className='flex flex-wrap p-4 m-4'>
        <div className='flex flex-col items-center p-2'>
          <img src="React.png" alt="React" className='w-16 hover:animate-tada' />
          <p>ReactJS</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Angular.png" alt="Angular" className='w-16 hover:animate-tada' />
          <p>Angular</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="JavaScript.png" alt="JavaScript" className='w-16 hover:animate-tada' />
          <p>JavaScript</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="TypeScript.png" alt="TypeScript" className='w-16 hover:animate-tada' />
          <p>TypeScript</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Tailwind.png" alt="Tailwind CSS" className='w-16 hover:animate-tada' />
          <p>Tailwind CSS</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Bootstrap.png" alt="Bootstrap" className='w-16 hover:animate-tada' />
          <p>Bootstrap</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="SASS.png" alt="SASS" className='w-16 hover:animate-tada' />
          <p>SASS</p>
        </div>
      </div>
      <div className='flex flex-wrap p-8 m-4'>
        <div className='flex flex-col items-center p-2'>
          <img src="nodejs.png" alt="Node.js" className='w-16 hover:animate-tada' />
          <p>Node.js</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Spring_Boot.png" alt="Spring Boot" className='w-16 hover:animate-tada' />
          <p>SpringBoot</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="MySQL.png" alt="MySQL" className='w-16 hover:animate-tada' />
          <p>MySQL</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="PostgreSQL.png" alt="PostgreSQL" className='w-16 hover:animate-tada' />
          <p>PostgreSQL</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="MongoDB.png" alt="MongoDB" className='w-16 hover:animate-tada' />
          <p>MongoDB</p>
        </div>
      </div>

      <div className='flex flex-wrap text-lg bg-white text-black font-semibold p-8 rounded-lg border-red-500 border-8 m-4'>
        <div className='flex flex-col items-center p-2'>
          <img src="nodejs.png" alt="Node.js" className='w-16' />
          <p>Node.js</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Figma.png" alt="Figma Boot" className='w-16' />
          <p>Figma</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="GitHub.png" alt="GitHub" className='w-16' />
          <p>GitHub</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Git.png" alt="Git" className='w-16' />
          <p>Git</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Postman.png" alt="Postman" className='w-16' />
          <p>Postman</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="Notion.png" alt="Notion" className='w-16' />
          <p>Notion</p>
        </div>
      </div>
    </div>
  )
}

const About = () => {

  return (

    <div className='w-1/2 mt-20'>
      <div className='flex flex-row items-center mt-20'>
        <div className=''>
          <h1 className='text-4xl font-semibold'>Hello, <span className='text-cyan-400 font-bold'>I am Adán</span> </h1>
          <h2 className='text-lg  bg-gradient-to-bl from-emerald-900 to-cyan-500 bg-clip-text text-transparent'>Junior Full Stack DEVELOPER</h2>
        </div>
        {/* <div className='w-1/3'>
          <img src="python.png" alt="sda" className='p-5' />
        </div> */}
      </div>
      <div>
        <p>
          passionate about web development
          I am a recently graduated as a full stack developer,
          motivated to learn and improve my knowledge.
          I am looking for innovative andinteresting projects,
          and I would be interested in working with technologies such as React,
          Angular and NodeJS, I am willing tolearn new
          languages and technologies,
          which I would be very excited about.
        </p>
      </div>
    </div>


  )
}

const Info = () => {

  return (
    <div className='w-1/2'>
      <div>
        <button className='bg-red-500 rounded-lg p-5'>Download CV</button>
      </div>

      <h3 className='text-2xl text-white mt-16 mb-16 font-bold'>Experience</h3>

      <div>
        <div className='flex flex-row h-32'>
          <div className='flex flex-col w-1/6 items-center justify-start'>
            <FontAwesomeIcon className='text-2xl p-2' icon={faLinkedin} />
            <div className="border-2-2 border-white absolute h-20 border mt-10"></div>
          </div>
          <div className='flex flex-col w-5/6'>
            <p className='text-cyan-400 text-lg font-semibold'>Full Stack Developer <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>Instituto Tecnológico de Canarias</span></p>
            <p className='text-sm font-light'>2024</p>
            <p className='text-base'>Development of an online store with an augmented reality glasses viewer, where users could try on the glasses before buyingthem.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row h-32'>
          <div className='flex flex-col w-1/6 items-center'>
            <FontAwesomeIcon className='text-2xl p-2' icon={faLinkedin} />
            <div className="border-2-2 border-white absolute h-20 border mt-10"></div>
          </div>
          <div className='flex flex-col w-5/6'>
            <p className='text-cyan-400 text-lg font-semibold'>Full Stack Developer <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>IES El Rincón</span> <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>Erasmus Project</span> </p>
            <p className='text-sm font-light'>2024</p>
            <p className='text-base'>Development of an application to organize and manage beach cleaning events.This project allowed me to meet people of different nationalities and their work methodologies, practice my English skills with fullcommunication in English, and improve my teamwork experience.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row h-32'>
          <div className='flex flex-col w-1/6 items-center'>
            <FontAwesomeIcon className='text-2xl p-2' icon={faLinkedin} />
            <div className="border-2-2 border-white absolute h-20 border mt-10"></div>

          </div>
          <div className='flex flex-col w-5/6'>
            <p className='text-cyan-400 text-lg font-semibold'>Full Stack Developer <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>ISS Tecnico Professionale </span> <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>Italy</span> <span className='text-white'>-</span> <span className='text-[#DAF1F9] text-base font-normal'>Erasmus Intership</span> </p>
            <p className='text-sm font-light'>2024</p>
            <p className='text-base'>Development of an online store with an augmented reality glasses viewer, where users could try on the glasses before buyingthem.</p>
          </div>
        </div>
      </div>





    </div>
  )
}

function App() {
  return (
    <>
      <div className='h-12  w-full shadow-lg rounded-b-lg text-center backdrop-blur-sm fixed flex flex-row justify-center justify-items-center'>
        <div className='w-1/3 flex flex-row items-center'>
          <img src="python.png" alt="sda" className='p-5 w-16 h-16' />
          <p>Adansadasdasda</p>
        </div>
        <div className='w-1/3 flex flex-row'>
          0
        </div>
        <div className='w-1/3 flex flex-row '>
          <img src="linkedin.png" alt="sda" className='p-5 w-16 h-16' />
          <img src="github.png" alt="sda" className='p-5 w-16 h-16' />
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-800 to-teal-900 text-white flex items-center flex-col">
        <About />
        <Info />
        <Skills />
      </div>
    </>
  );
}





export default App;
