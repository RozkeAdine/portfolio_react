import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Banner from './Banner';
import Mise_En_Pratique from './Mise_En_Pratique';
import Juvignac from './Juvignac';
import DonkeyCar from './DonkeyCar';
import ScrapAndCompare from './ScrapAndCompare';
import MonCV from './MonCV';
import Home from './Home';
import Footer from './Footer';
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="" element={<Home/>} />
        <Route path="/portfolio_react/" element={<Home/>} />
        <Route path="/Mise_En_Pratique" element={<Mise_En_Pratique/>} />
        <Route path="/Juvignac" element={<Juvignac/>} />
        <Route path="/DonkeyCar" element={<DonkeyCar/>} />
        <Route path="/ScrapAndCompare" element={<ScrapAndCompare/>} />
        <Route path="/MonCV" element={<MonCV/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
