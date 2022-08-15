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
          <h3>This is a description of the film. A short description of the film. This is a much longer description of the rest of the film.</h3>
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