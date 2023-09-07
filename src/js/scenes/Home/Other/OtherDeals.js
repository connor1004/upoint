import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Svgs, Icons, Bitmaps } from '../../../theme';
import SvgIcon from '../../../components/modules/SvgIcon';
import SvgImage from '../../../components/modules/SvgImage';

class OtherDeals extends Component {
  render() {
    return (
      <div>
        <div className="mt-6 panel-card panel-upoint">
          <div className="panel-card-heading bg-danger">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointAdvantage} size="58px" />
            <div className="panel-card-heading-content">
              <SvgImage source={Svgs.brandUPoint} />
              <span className="ml-2 text-danger font-weight-bold">MEMBER ADVANTAGE</span>
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <img className="mb-5" src={Bitmaps.memberAdvantage} style={{ width: '289px', height: '81px' }} alt="member advantage" />
              <p>uPoint has recently partnered with Member Advantage, a leading provider of member benefit programs, to expand on the range of benefits you can access as one of our valued members.</p>
              <NavLink className="btn btn-danger btn-round" to="/member-discounts">Find out more</NavLink>
            </div>
            <div className="panel-card-right bg-light">
              <ul className="advantage-list">
                <li>
                  <span>✓</span>
                  Dining
                </li>
                <li>
                  <span>✓</span>
                  Movie tickets
                </li>
                <li>
                  <span>✓</span>
                  Airline lounge memberships
                </li>
                <li>
                  <span>✓</span>
                  Hotel accommodation
                </li>
                <li>
                  <span>✓</span>
                  Leisure activities
                </li>
                <li>
                  <span>✓</span>
                  Credit cards
                </li>
                <li>
                  <span>✓</span>
                  Car rental
                </li>
                <li>
                  <span>✓</span>
                  Electronics
                </li>
                <li>
                  <span>✓</span>
                  Whitegoods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OtherDeals);

