import React from 'react'
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import AccountPane from './AccountPane/AccountPane';
import styles from './DashTopNav.module.css';

const DashTopNav = (props) => {
  return (
    <div className={classNames(styles.mainNavDiv, 'center', 'mr4')}>

      <div className={styles.navLeft}>
        <div>
          <i className={classNames('fas', 'fa-search', styles.searchIconBar)} />
          <input placeholder="  Search..." className='pl4 w5' type="text" id={styles.searchNav} />
        </div>
      </div>

      <div className={styles.navRight}>
        <NavLink className={classNames(styles.navLinks, styles.dashBtn)}
          name='home'
          to='/dashboard'
          activeClassName={styles.activeNavClass}
        >
          Dashboard 
        </NavLink>

        <div className={classNames(styles.navLinks, styles.notifBell)} name='home'>
          <span><i className="fas fa-bell" /></span>
        </div>



        <AccountPane {...props} />

      </div>
    </div>
  )
}

export default DashTopNav;
