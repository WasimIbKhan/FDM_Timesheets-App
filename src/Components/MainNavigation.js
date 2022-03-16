import { Link } from 'react-router-dom';
import classes from './MainNvaigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div >FDM Timesheets</div>
      <nav className={classes.logo}>
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