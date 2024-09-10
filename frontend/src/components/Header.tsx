

const Header = () => {
    return (
        <div className='h-12  w-full shadow-lg rounded-b-lg text-center backdrop-blur-sm fixed flex flex-row justify-center'>
            <div className="w-1/2 flex flex-row justify-center items-center">
                <div className='w-1/3 flex flex-row items-center text-white'>
                    <img src="python.png" alt="sda" className='p-5 w-16 h-16' />
                    <p className="text-xl">Adán Pérez Hernández</p>
                </div>
                <div className='w-1/3 flex flex-row justify-evenly items-center'>
                    <a href="https://www.linkedin.com/in/ad%C3%A1n-p%C3%A9rez-hern%C3%A1ndez-06ba722a6/" target="_blank"><img src="linkedin.png" alt="Linkedin" className='w-6 h-6' /></a>
                    <a href="https://github.com/adanph15" target="_blank"><img src="github.png" alt="GitHub" className='w-6 h-6' /></a>
                </div>
                <div className='w-1/3 flex flex-row justify-evenly items-center'>
                    <a><img src="sun.png" alt="sda" className='w-6 h-6' /></a>
                    <a><img src="moon.png" alt="sda" className='w-8 h-8' /></a>
                   
                </div>
            </div>
        </div>
    );
}

export default Header;



