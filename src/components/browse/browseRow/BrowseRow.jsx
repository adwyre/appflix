import './browseRow.css';
import Poster from '../../poster/Poster';

const BrowseRow = () => {
  const mockList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='row-container'>
      <h2>Category Title</h2>
      <div className='scroller'>
        {mockList.map(item => 
          <Poster />
        )}
      </div>
    </div>
  );
};

export default BrowseRow;