import React, {
  Component
} from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import {
  Container
} from 'reactstrap';
import Menu from '../../components/modules/Menu';
import { Icons } from '../../theme';
import Section from '../../sections/Section';
import SvgIcon from '../../components/modules/SvgIcon';
import MobileNbnPacks from './Mobile/MobileNbnPacks';
import ElectricityGas from './Electricity/ElectricityGas';
import FinanceInsurance from './Finance/FinanceInsurance';
import OtherDeals from './Other/OtherDeals';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Section className="section-top section-default has-triangle-right">
        <Container>
          <Menu
            className="menu menu-tabs mt-lg-4"
            data={[
              {
                to: '/',
                exact: true,
                title: (
                  <div className="d-flex align-items-center">
                    <SvgIcon className="menu-icon icon-primary" source={Icons.upointMobile} size="42px" />
                    <div style={{ flex: 1 }}>
                      Mobile &amp; NBN
                    </div>
                  </div>
                ),
                className: 'menu-item-primary'
              },
              {
                to: '/electricity-gas',
                title: (
                  <div className="d-flex align-items-center">
                    <SvgIcon className="menu-icon icon-primary" source={Icons.upointEnergy} size="42px" />
                    <div style={{ flex: 1 }}>
                      Electricity
                    </div>
                  </div>
                ),
                className: 'menu-item-success'
              },
              {
                to: '/finance-insurance',
                title: (
                  <div className="d-flex align-items-center">
                    <SvgIcon className="menu-icon icon-primary" source={Icons.upointInsurance} size="42px" />
                    <div style={{ flex: 1 }}>
                      Finance &amp; Insurance
                    </div>
                  </div>
                ),
                className: 'menu-item-danger'
              },
              {
                to: '/other-deals',
                title: (
                  <div className="d-flex align-items-center">
                    <SvgIcon className="menu-icon icon-primary" source={Icons.upointAdvantage} size="42px" />
                    <div style={{ flex: 1 }}>
                      Other Deals
                    </div>
                  </div>
                ),
                className: 'menu-item-cyan'
              }
            ]}
          />
          <Switch>
            <Route exact path="/" title="Mobile &amp; Nbn" component={MobileNbnPacks} />
            <Route path="/electricity-gas" title="Electricity &amp; Gas" component={ElectricityGas} />
            <Route path="/finance-insurance" title="Finance &amp; Insurance" component={FinanceInsurance} />
            <Route path="/other-deals" title="Other Deals" component={OtherDeals} />
          </Switch>
        </Container>
      </Section>
    );
  }
}

export default withRouter(Main);
