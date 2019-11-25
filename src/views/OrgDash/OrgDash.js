import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import DashTopNav from '../../components/DashTopNav/DashTopNav';
import OrgCharts from '../../components/Charts/OrgCharts';
import { Switch, Route, Redirect } from "react-router-dom";
import Concern from '../Concern/Concern';

import styles from './UserDash.module.css';

const OrgDash = ({ isLoggedIn, logMeOut }) => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar parentLink='/orgDashboard' />
      <div className={styles["main-right"]}>
        <DashTopNav isLoggedIn={isLoggedIn} logMeOut={logMeOut} />
        <div className={styles.containerWrapper}>
          <Switch>
            <Route exact path={["/orgDashboard", "/orgDashboard/analysis"]}>
              <OrgCharts />
            </Route>
            <Route exact path="/orgDashboard/raise">
              <Concern />
            </Route>            
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default OrgDash;
