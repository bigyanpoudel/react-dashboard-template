import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";

import SideNavBar from "./SideNavBar";

import "../dashboard.css"
const Dashboard = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <Navbar toggle={toggle} setToggle={setToggle} />
        <div className={toggle ? "main__content main-pd" : "main__content"}>
          {children}
        </div>
        <div className="dashboard__footer">
          <Grid container direction="row">
            <Grid item xs={11}>
              <h3 className="dashboard__footer-text">
                Copyright 2021 <span>Dashboard</span>
              </h3>
            </Grid>
            <Grid item xs={1} style={{ position: "relative" }}>
              <div
                className={
                   "dashboard__up-wrapper active"
                }
              >
                <a >
                  <i className="bx bx-up-arrow-alt dashboard__footer-up"></i>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <SideNavBar toggle={toggle} />
    </div>
  );
};

export default Dashboard;
