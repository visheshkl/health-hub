import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import DashTopNav from '../../components/DashTopNav/DashTopNav';
import Charts from '../../components/Charts/Charts';
import { Switch, Route, Redirect } from "react-router-dom";
import Concern from '../Concern/Concern';

import styles from './UserDash.module.css';

const UserDash = ({ isLoggedIn, logMeOut }) => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar parentLink='/dashboard' />
      <div className={styles["main-right"]}>
        <DashTopNav isLoggedIn={isLoggedIn} logMeOut={logMeOut} />
        <div className={styles.containerWrapper}>
          <Switch>
            <Route exact path={["/dashboard", "/dashboard/analysis"]}>
              <Charts />
            </Route>
            <Route exact path="/dashboard/raise">
              <Concern />
            </Route>            
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
