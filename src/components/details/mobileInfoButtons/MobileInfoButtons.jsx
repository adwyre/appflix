import './mobileInfoButtons.css';
import PlayButton from '../../mainComponents/buttons/PlayButton';
import AddButton from '../../mainComponents/buttons/AddButton';
import InfoButton from '../../mainComponents/buttons/InfoButton';
import { symbols } from '../../../utils';

const MobileInfoButtons = () => {

  return (
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
  );
};

export default MobileInfoButtons;