import './mobileNavBar.css';
import { navIcons } from '../../../utils';

const MobileNavBar = () => {

  return (
    <div className='nav-bar mobile-nav'>
      <div>
        <a id="home">{navIcons.home}</a>
        <span>Home</span>
      </div>
      <div>
        <a id="games">{navIcons.games}</a>
        <span>Games</span>
      </div>
      <div>
        <a id="new">{navIcons.new}</a>
        <span>New & Hot</span>
      </div>
      <div>
        <a id="laughs">{navIcons.laughs}</a>
        <span>Fast Laughs</span>
      </div>
      <div>
        <a id="downloads">{navIcons.downloads}</a>
        <span>Downloads</span>
      </div>
    </div>
  );
};

export default MobileNavBar;