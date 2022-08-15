import './buttons.css';
import { symbols } from '../../utils';

const InfoButton = () => {

  return (
    <>
      <button className="large-info">{symbols.info} More Info</button>
      <div className="small-info">
        <button className="info">{symbols.info}</button>
        <span>Info</span>
      </div>
    </>
  );
};

export default InfoButton;