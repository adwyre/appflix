import './popup.css';
import '../../../index.css';
import { exitIcon } from '../../../utils';
import Hero from '../../mainComponents/hero/Hero';
import ItemCard from '../itemCard/ItemCard';
import Poster from '../../poster/Poster';
import MobileInfoButtons from '../mobileInfoButtons/MobileInfoButtons';

const DetailsPopUp = () => {
  const mockItems = [0, 1, 2, 3, 4, 5, 6, 7]

  const handleExit = () => {
    document.getElementsByClassName("popup-container")[0].style.display = "none";
  }

  return (
    <div className='popup-container'>
      <div className='popup'>
        <Hero />
        <div className='exit-popup' onClick={handleExit}>
          {exitIcon}
        </div>
        {/* Info Section */}
        <div className='mobile-wrapper'>
          <div className='info'>
            <Poster />
            <div className="info-left">
              <h1>Title</h1>
              <div className='stats'>
                <span className='match-text'>97% Match</span>
                <span>2022</span>
                <span className='rating'>PG-13</span>
                <span>1h 30m</span>
              </div>
              <div className='description'>
                <p>Description description description description. Description description description. Description description description description description.</p>
              </div>
            </div>
            <div className="info-right">
              <div className='cast-genres'>
                <p><span>Cast:</span>Actor Name, Actor Name, Actor Name, Actor Name</p>
              </div>
              <div className='cast-genres'>
              <p><span>Genres:</span>Action, Suspense, Explosive, Intense</p>
              </div>
            </div>
          </div>
          <MobileInfoButtons />
        </div>
        {/* More Like This Section */}
        <h2>More Like This</h2>
        <div className='more-like'>
          {mockItems.map(item => <ItemCard />)}
        </div>
      </div>
    </div>
  );
};

export default DetailsPopUp;