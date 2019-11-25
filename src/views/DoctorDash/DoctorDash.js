import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import DashTopNav from '../../components/DashTopNav/DashTopNav';
import OrgCharts from '../../components/Charts/OrgCharts';
// import Doctor from '../../components/Doctor/Doctor';
import Concern from '../Concern/Concern';
import { Switch, Route, Redirect } from "react-router-dom";

import styles from './UserDash.module.css';

const DoctorDash = ({ isLoggedIn, logMeOut }) => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar parentLink='/doctorDashboard' />
      <div className={styles["main-right"]}>
        <DashTopNav isLoggedIn={isLoggedIn} logMeOut={logMeOut} />
        <div className={styles.containerWrapper}>
          <Switch>
            <Route exact path={["/doctorDashboard", "/doctorDashboard/analysis"]}>
              <OrgCharts />
            </Route>
            <Route exact path="/doctorDashboard/raise">
              <Concern />
            </Route>     
            <Route exact path="/doctorDashboard/reports">
            </Route>           
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DoctorDash;
