import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superhero from './components/Superhero';

function App() {
  return (
    <div >
      {/* intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* the end of intro Section */}
      {/* Trending Section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* The End of Trending Section */}
      {/* SuperHero section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* The End Of SuperHero Section */}
    </div>
  )
}

export default App;
