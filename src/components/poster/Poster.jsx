import './poster.css';
import {Link} from 'react-router-dom';

const Poster = () => {

  const showDetails = () => {
    document.getElementsByClassName("popup-container")[0].style.display = "block";
  }

  return (
    <div className="poster-container" onClick={showDetails}>
      {/* link */}
      {/* image */}
    </div>
  );
};

export default Poster;