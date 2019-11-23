import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import DashTopNav from '../../components/DashTopNav/DashTopNav';

import styles from './UserDash.module.css';

const UserDash = ({ isLoggedIn, logMeOut }) => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar />
      <div className={styles["main-right"]}>
        <DashTopNav isLoggedIn={isLoggedIn} logMeOut={logMeOut} />
        <div className={styles.containerWrapper}>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
