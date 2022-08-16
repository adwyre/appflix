import './buttons.css';
import { symbols } from '../../../utils';

const PlayButton = () => {

  return (
      <>
      <div className='small-play'>
        {symbols.smallPlay}
        <span className="small-play">Play</span>
      </div>
      <button className="play">
        {symbols.play} Play
      </button>
      </>
      
  );
};

export default PlayButton;