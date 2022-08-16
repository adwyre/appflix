import './hero.css';
import { symbols } from '../../utils';
import AddButton from '../buttons/AddButton';
import PlayButton from '../buttons/PlayButton';
import InfoButton from '../buttons/InfoButton';

const Hero = () => {

  return (
    <div className="hero-container" >
      <div className="hero-text">
        <div><h1>Title</h1></div>
        <div className="category-banner">
          <span>Category</span>
          <span> - </span>
          <span>Category</span>
          <span> - </span>
          <span>Category</span>
          <span> - </span>
          <span>Category</span>
          <span> - </span>
          <span>Category</span>
        </div>
        <div className='hero-description'>
          <h3>Description description description description. Description description description. Description description description description description.</h3>
        </div>
        <div className="hero-buttons">
          <AddButton />
          <PlayButton />
          <InfoButton />
        </div>
      </div>
      <div className='gradient'></div>
    </div>
  );
};

export default Hero;