const Technologies = () => {
    return (
        <>
            <div className='w-1/2 gap-4 mb-40'>
                <h3 className='text-3xl text-white mt-20 mb-16 font-bold'>Technologies</h3>
                <div className='flex gap-4'> {/* Flex para que los dos cuadros estén en una fila */}
                    <div className="bg-gradient-to-b from-cyan-900 to-slate-900 rounded-lg w-1/2 text-center flex flex-col justify-center border-2 border-inherit shadow-md font-semibold">
                        <h3 className='bg-gradient-to-b from-cyan-400 to-slate-50 bg-clip-text text-transparent text-2xl font-bold mt-4'>Frontend</h3>
                        <div className='flex flex-wrap p-4 m-4 text-sm'>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="HTML5.png" alt="HTML5" className='w-16 hover:animate-tada' />
                                <p>HTML</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="CSS.png" alt="CSS3" className='w-16 hover:animate-tada' />
                                <p>CSS</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="js.png" alt="JavaScript" className='w-16 hover:animate-tada' />
                                <p>JavaScript</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="ts.png" alt="TypeScript" className='w-16 hover:animate-tada' />
                                <p>TypeScript</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="React.png" alt="React" className='w-16 hover:animate-tada' />
                                <p>ReactJS</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="Angular.png" alt="Angular" className='w-16 hover:animate-tada' />
                                <p>Angular</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="Tailwind.png" alt="Tailwind CSS" className='w-16 hover:animate-tada' />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="Bootstrap.png" alt="Bootstrap" className='w-16 hover:animate-tada' />
                                <p>Bootstrap</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="SASS.png" alt="SASS" className='w-16 hover:animate-tada' />
                                <p>SASS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-cyan-900 to-slate-900 rounded-lg w-1/2 text-center flex flex-col justify-start border-2 border-inherit shadow-md font-semibold">
                        <h3 className='bg-gradient-to-b to-cyan-400 from-slate-50 bg-clip-text text-transparent text-2xl font-bold mt-4'>Backend</h3>
                        <div className='flex flex-wrap p-4 m-4 text-sm'>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="JAVA.png" alt="JAVA" className='w-16 hover:animate-tada' />
                                <p>JAVA</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="Spring_Boot.png" alt="Spring Boot" className='w-16 hover:animate-tada' />
                                <p>Spring Boot</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="Nodejs.png" alt="Node.js" className='w-16 hover:animate-tada' />
                                <p>Node.js</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="MySQL.png" alt="MySQL" className='w-16 hover:animate-tada' />
                                <p>MySQL</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="PostgreSQL.png" alt="PostgreSQL" className='w-16 hover:animate-tada' />
                                <p>PostgreSQL</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/3'>
                                <img src="MongoDB.png" alt="MongoDB" className='w-16 hover:animate-tada' />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="bg-gradient-to-b from-cyan-900 to-slate-900 rounded-lg w-full text-center flex flex-col justify-start border-2 border-inherit shadow-md mt-4 font-semibold">
                        <h3 className='bg-gradient-to-b to-cyan-400 from-slate-50 bg-clip-text text-transparent text-2xl font-bold mt-4'>Tools</h3>
                        <div className='flex flex-wrap p-4 m-4 text-sm'>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Figma.png" alt="Figma" className='w-16 hover:animate-tada' />
                                <p>Figma</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Git.png" alt="Git" className='w-16 hover:animate-tada' />
                                <p>Git</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Postman.png" alt="Postman" className='w-16 hover:animate-tada' />
                                <p>Postman</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Notion.png" alt="Notion" className='w-16 hover:animate-tada' />
                                <p>Notion</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Visual.png" alt="Visual" className='w-16 hover:animate-tada' />
                                <p>Visual Studio Code</p>
                            </div>
                            <div className='flex flex-col items-center p-2 basis-1/6'>
                                <img src="Blender.png" alt="Blender" className='w-16 hover:animate-tada' />
                                <p>Blender</p>
                            </div>
                        </div>
                    </div>
            </div >
        </>
    );
}

export default Technologies;
