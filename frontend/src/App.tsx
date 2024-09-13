import './index.css';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
      <div className="bg-gradient-to-b from-slate-900 to-gray-900 text-white flex items-center flex-col pb-20">
        <About />
        <Experience />
        <Technologies />
        <Projects />
      </div>
  );
}

export default App;