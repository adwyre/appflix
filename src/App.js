import './App.css';
// Components
import NavBar from './components/navBar/NavBar';
import CategoryBar from './components/categoryBar/CategoryBar';
import BrowseRow from './components/browseRow/BrowseRow';
import Top10 from './components/top10/Top10';
import MobileNavBar from './components/mobileNavBar/MobileNavBar';
import Hero from './components/hero/Hero';
import DetailsPopUp from './components/detailsPopUp/DetailsPopUp'

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
