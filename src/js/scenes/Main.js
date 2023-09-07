import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {
  connect
} from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Campaign from './Campaign';
import Energy from './Energy';
import MobileSelectPlan from './MobileFlow';
import MobileYourDetails from './MobileFlow/YourDetails';
import MobileIdentity from './MobileFlow/Identity';
import MobileConfirm from './MobileFlow/Confirm';
import NbnConfirm from './NbnFlow/Confirm';
import NbnIdentification from './NbnFlow/Identification';
import NbnYourDetails from './NbnFlow/YourDetails';
import NbnSpecial from './NbnFlow/Special';
import NbnSelectPlan from './NbnFlow/SelectPlan';
import NbnCheck from './NbnFlow';
import EnergySelectPlan from './EnergyFlow/SelectPlan';
import EnergySpecial from './EnergyFlow/Special';
import EnergyYourDetails from './EnergyFlow/YourDetails';
import EnergyIdentification from './EnergyFlow/Identification';
import EnergyConfirm from './EnergyFlow/Confirm';
import EnergyCheck from './EnergyFlow';
import Bills from './Bills';
import PaymentSuccess from './PaymentDetails/Success';
import PaymentDetails from './PaymentDetails';
import Contact from './Contact';
import AccountSetting from './AccountSetting';
import DashboardLayout from '../layouts/Dashboard';
import FrontendLayout from '../layouts/Frontend';
import { logout } from '../actions/common';

class Main extends Component {
  componentDidMount() {
    const { user, location } = this.props;
    if (!user && location.pathname.includes('dashboard')) {
      this.props.logout();
      this.props.history.replace('/login');
    }
  }

  render() {
    const { location, user } = this.props;
    return location.pathname && location.pathname.includes('dashboard') && user ? (
      <DashboardLayout>
        <Switch>
          <Route component={Contact} path="/dashboard/details/contact" />
          <Route component={AccountSetting} path="/dashboard/details/account-settings" />
          <Route component={PaymentSuccess} path="/dashboard/payment-success" />
          <Route component={PaymentDetails} path="/dashboard/payment-details" />
          <Route component={Bills} path="/dashboard/bills" />
          <Route component={NbnConfirm} path="/dashboard/nbn/confirm" />
          <Route component={NbnIdentification} path="/dashboard/nbn/identification" />
          <Route component={NbnYourDetails} path="/dashboard/nbn/your-details" />
          <Route component={NbnSpecial} path="/dashboard/nbn/special-requirements" />
          <Route component={NbnSelectPlan} path="/dashboard/nbn/select-plan" />
          <Route component={NbnCheck} path="/dashboard/nbn/check-address" />
          <Route component={EnergyConfirm} path="/dashboard/energy/confirm" />
          <Route component={EnergyIdentification} path="/dashboard/energy/identification" />
          <Route component={EnergyYourDetails} path="/dashboard/energy/your-details" />
          <Route component={EnergySpecial} path="/dashboard/energy/special-requirements" />
          <Route component={EnergySelectPlan} path="/dashboard/energy/select-plan" />
          <Route component={EnergyCheck} path="/dashboard/energy/check-address" />
          <Route component={MobileConfirm} path="/dashboard/mobile/confirm" />
          <Route component={MobileIdentity} path="/dashboard/mobile/identity" />
          <Route component={MobileYourDetails} path="/dashboard/mobile/your-details" />
          <Route component={MobileSelectPlan} path="/dashboard/mobile/select-plan" />
          <Route component={Dashboard} path="/dashboard" />
        </Switch>
      </DashboardLayout>
    ) : (
      <FrontendLayout>
        <Switch>
          <Route component={Energy} path="/energy" />
          <Route component={Campaign} path="/campaign" />
          <Route component={Login} path="/login" />
          <Route component={Home} path="/" />
        </Switch>
      </FrontendLayout>
    );
  }
}

const mapStateToProps = state => ({
  user: state.common.auth ? state.common.auth.profile : null
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
