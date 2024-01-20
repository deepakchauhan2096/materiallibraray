import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import TestNew from "./modules/test";
import SignIn from "./modules/signIn/signIn";
import Header from "./modules/vms/shared/header"
import branchIndex from "./modules/vms/shared/branch/index"
import ContactIndex from "./modules/vms/shared/Contact/index"
import KycIndex from "./modules/vms/shared/KycDetails/index";
import Location from "./modules/vms/shared/Location/index";
import Branch from "./modules/vms/shared/branch";
import BankDetailPms from "./modules/pms/Bankdetails"
import BankDetails from "./modules/vms/shared/BankDetails";
import Category from "./modules/vms/shared/Category/Index";
import distributionIndex from "./modules/vms/shared/distribution/index"
import userData from "./modules/vms/shared/distribution/indexgrid"
import BranchTable from "./modules/vms/shared/branch/branchTable";

import Projects from "./modules/pms/projects/index";
import PersonalDetail from "./modules/pms/PersonalDetails/index";
import ProfessionalBusinessDetails from "./modules/pms/ProfessionalBusinessDetails/index";
import PostedJob from "./modules/pms/Postedjobs/index"
import StudentProfile from "./modules/sms/profiledetail/index";
import Job from "./modules/pms/AppliedJobs";
import ManageBlog from "./modules/pms/Manageblogs"

import FavoritePms from "./modules/pms/Favorites";
import Resume from "./modules/pms/Resume";


import BasicCompanyDetails from "./modules/signup/BasicCompanyDetails";
class Routes extends BaseComponent {
  componentDidMount() { }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path={"/"} component={Login} /> */}
            <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/"} component={SignIn} />
        

            <Route exact path={"/header"} component={Header} />
            <Route exact path={"/branch"} component={branchIndex} />
            <Route exact path={"/contact"} component={ContactIndex} />
            <Route exact path={"/resume"} component={Resume} />
            
            <Route exact path="/kyc" component={KycIndex} />
            <Route exact path={"/location"} component={Location} />
            <Route exact path={"/bankdetails"} component={BankDetails} />
            <Route exact path={"/branch"} component={Branch} />
            <Route exact path={"/branchtable"} component={BranchTable} />
            <Route exact path={"/category"} component={Category} />
            <Route exact path={"/distribution"} component={distributionIndex} />
            <Route exact path={"/distributionData"} component={userData} />

            <Route exact path={"/bankdetails-pms"} component={BankDetailPms} />

            <Route exact path={"/professional-projects"} component={Projects} />
            <Route exact path={"/professional-personaldetail"} component={PersonalDetail} />
            <Route exact path={"/professional-businessdetail"} component={ProfessionalBusinessDetails} />
            <Route exact path={"/professional-favorite"} component={FavoritePms} />
            <Route exact path={"/professional-postedjob"} component={PostedJob} />
            <Route exact path={"/professional-manageblog"} component={ManageBlog} />
           
            <Route exact path={"/student-profile"} component={StudentProfile} />
            <Route exact path={"/basic-details"} component={BasicCompanyDetails} />

            <Route exact path={"/my-jobs"} component={Job} />

            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
