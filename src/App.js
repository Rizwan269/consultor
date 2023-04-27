import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import './App.css';
import Purpose from './Components/Purpose/Purpose';
import Company from './Components/Company/Company';
import Video from './Components/Video/Video';
import Solution from './Components/Solution/Solution';
import Mail from './Components/Mail/Mail';
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';
import Members from './Components/Members/Members';
import Help from './Components/Help/help';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
    <div >
    <Navbar/>
    </div>
    <div className='homebanner'>
    <Home/>
    </div>
    <div className="">
    <Purpose/>
    </div>
    <div className="">
    <Company/>
    </div>
    <div className="videocontainer">
    <Video/>
    </div>
    <div className="sol">
    <Solution/>
    </div>
    <div className="">
    <Mail/>
    </div>
    <div className="work_process">
    <Work/>
    </div>
    <div className="Portf">
    <Portfolio/>
    </div>
    <div >
    <Members/>
    </div>
    <div >
    <Help/>
    </div>
    <div >
    <Blog/>
    </div>
    <div>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;
