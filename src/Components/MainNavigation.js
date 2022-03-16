import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>FDM Timesheets</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Schedule</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;