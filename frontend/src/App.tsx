import './App.css';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Header from './components/Header';

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
          <img src="js.png" alt="JavaScript" className='w-16 hover:animate-tada' />
          <p>JavaScript</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <img src="ts.png" alt="TypeScript" className='w-16 hover:animate-tada' />
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
          <h2 className='text-lg bg-gradient-to-r from-slate-50 to-cyan-600 bg-clip-text text-transparent'>Junior Full Stack DEVELOPER</h2>
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

function App() {
  return (
    <>
      <Header />
      {/* <div className="bg-gradient-to-b from-slate-800 to-teal-900 text-white flex items-center flex-col"> */}
      <div className="bg-gradient-to-t from-cyan-900 to-slate-900 text-white flex items-center flex-col">
        <About />
        <Experience />
        <Technologies />
      </div>
    </>
  );
}



export default App;