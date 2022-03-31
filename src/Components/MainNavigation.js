import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNvaigation.module.css';
const Navigation = props => {
  const {  onLogout } = props.auth
  return (
    <header className={classes.header}>
      <div >FDM Timesheets</div>
      <nav className={classes.logo}>
        <ul>
          <li>
            <Link to='scheduleTab'>Schedule</Link>
          </li>
          <li>
            <Link to='profileTab'>Profile</Link>
          </li>
          <li>
            <Link to='menu-tab'>Menu</Link>
          </li>
          <div onClick={onLogout} className={classes.logout}>
              Logout
          </div>
        </ul>
        
      </nav>
    </header>
  );
}

export default Navigation;