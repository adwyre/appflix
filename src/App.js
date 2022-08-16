import './App.css';
// Components
import NavBar from './components/navs/navBar/NavBar';
import CategoryBar from './components/navs/categoryBar/CategoryBar'
import BrowseRow from './components/browse/browseRow/BrowseRow';
import Top10 from './components/browse/top10/Top10';
import MobileNavBar from './components/navs/mobileNavBar/MobileNavBar';
import Hero from './components/mainComponents/hero/Hero';
import DetailsPopUp from './components/details/detailsPopUp/DetailsPopUp'

function App() {

  return (
    <div className="App">
      <header>
       <NavBar />
        <CategoryBar />
      </header>
      <body>
        <Hero />
        <section>
          <BrowseRow />
          <Top10 />
          <BrowseRow />
        </section>
      </body>
      <footer>
        <MobileNavBar />
      </footer>
      <DetailsPopUp />
    </div>
  );
}

export default App;
