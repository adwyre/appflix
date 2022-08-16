import './itemCard.css';
import '../../../index.css'

const ItemCard = () => {

  return (
    <div className="item-card">
      <div className='image'></div>
      <div className='card-info'>
        <span className='match-text'>97% Match</span>
        <div className='rating-group'>
          <span className='rating'>PG-13</span>
          <span>2022</span>
        </div>
        <p>This is a description of the film. A short description of the film. This is a much longer description of the rest of the film.</p>
      </div>
    </div>
  );
};

export default ItemCard;