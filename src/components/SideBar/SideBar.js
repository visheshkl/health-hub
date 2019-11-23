import React from 'react'
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import styles from './SideBar.module.css'

const SideBar = () => {
  //const [activeItem, setActiveItem] = useState('globe');
  //const handleItemClick = (e, { name }) => setActiveItem(name)

  return(
    <div id="sideNavv">
      <a href='https://sehatone.com/' className={classNames(styles.sideLink, styles.headerLogo, styles.pointer)}>
        <img src={`aa`} alt="magehost logo" className='headerLogoImg' />
      </a>
      <NavLink exact className={styles.sideLink}
        name='hohme'
        to='/dashboard'
        alt='Home'
        activeClassName={styles.activeSideNavClass}
      >
        <i className={classNames('fas', 'fa-home', styles.sideNavIcon)} />
        <span className={styles.sideText}>Home</span>
      </NavLink>
      <NavLink className={styles.sideLink}
        name='home'
        to='/dashboard/sites'
        activeClassName={styles.activeSideNavClass}
      >
        <i className={classNames('fas', 'fa-globe', styles.sideNavIcon)} />
        <span className={styles.sideText}>Websites</span>
      </NavLink>
      <NavLink exact className={styles.sideLink}
        name='home'
        to='/dashboard/guide'
        activeClassName={styles.activeSideNavClass}
      >
        <i className={classNames('fas', 'fa-book', styles.sideNavIcon)} />
        <span className={styles.sideText}>User Guide</span>
      </NavLink>
    </div>
  );
}

export default SideBar;
