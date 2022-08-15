import './popup.css';
import '../../index.css';
import { exitIcon, symbols } from '../../utils';
import Hero from '../hero/Hero';
import ItemCard from '../itemCard/ItemCard';
import Poster from '../poster/Poster';
import AddButton from '../buttons/AddButton';
import PlayButton from '../buttons/PlayButton';
import InfoButton from '../buttons/InfoButton';

const DetailsPopUp = () => {
  const mockItems = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className='popup-container'>
      <div className='popup'>
        <Hero />
        <div className='exit-popup'>
          {exitIcon}
        </div>
        {/* Info Section */}
        <div className='mobile-wrapper'>
          <div className='info'>
            <Poster />
            <div className="info-left">
              <h1>Title</h1>
              <div className='nums'>
                <span className='match-text'>97% Match</span>
                <span>2022</span>
                <span className='rating'>PG-13</span>
                <span>1h 30m</span>
              </div>
              <div className='description'>
                <p>This is a description of the film. A short description of the film. This is a much longer description of the rest of the film.</p>
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
          {/* Mobile Buttons */}
          <div className='info-buttons'>
            <div className='top-row'>
              <PlayButton/>
              <div className='download'>
                {symbols.smallDown}
                <span>Download</span>
              </div>
              <AddButton />
              <div className='share'>
                {symbols.smallShare}
                <span>Share</span>
              </div>
            </div>
            <div className='bottom-row'>
              <div>
                <InfoButton />
                <p>Episodes & Info</p>
              </div>
              <div>
                <p>{'>'}</p>
              </div>
            </div>
          </div>
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