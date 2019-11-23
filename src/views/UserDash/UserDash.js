import React from 'react';
import SideBar from '../../components/SideBar/SideBar';

import styles from './UserDash.module.css';

const UserDash = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar />
    </div>
  );
};

export default UserDash;
