import './buttons.css';
import { symbols } from '../../utils';

const AddButton = () => {
  
  return (
    <>
    <div className="small-add">
      {symbols.smallPlus}
      <span className="small-add">My List</span>
    </div>
    <div className='add'>
      <button className="add">{symbols.plus}</button>
      <span className="add">My List</span>
    </div>
    </>
  );
};

export default AddButton;