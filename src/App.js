import Topline from './components/Topline'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Pitch from './components/Pitch'
import ResponsiveDemo from './components/ResponsiveDemo'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css';

function App() {
  return (
    <div className="App">
     <Topline/>
     <Navigation/>
     <Welcome/>
     <Pitch/>
     <ResponsiveDemo/>
     <Contact/>
     <Footer/> 
    </div>
  );
}

export default App;
