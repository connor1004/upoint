import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Icons, Bitmaps } from '../../../theme';
import SvgIcon from '../../../components/modules/SvgIcon';
import SvgItem from '../../../components/modules/SvgItem';

class FinanceInsurance extends Component {
  render() {
    return (
      <div>
        <div className="mt-6 panel-card panel-upoint">
          <div className="panel-card-heading bg-cherry">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointInsurance} size="58px" />
            <div className="panel-card-heading-content bg-gray py-4 text-white font-weight-extrabold">
              UNION HEALTH
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <div className="mb-5">
                <img src={Bitmaps.unionHealthLogo} alt="union health logo" style={{ maxWidth: 227 }} />
              </div>
              <p>As a union member you appreciate the importance of having a health fund that strives for fair. One that looks after its members. One you can trust to protect your health long into the future.</p>
              <p>Union Health is proudly brought to you by TUH Health Fund, Australia’s Most Recommended Members-Owned Health Fund based on results from DBM Consultants’ Consumer Atlas survey of over 60,000 Australians.</p>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <SvgItem
                    source={Icons.upointLogo}
                    size="46px"
                    content="<p class='font-weight-bold text-navy'>Special uPoint offer</p>"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SvgItem
                    source={Icons.upointWorker}
                    size="46px"
                    content="<p class='font-weight-bold text-navy'>Strictly for Union Members</p>"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SvgItem
                    source={Icons.upointHealth}
                    size="46px"
                    content="<p class='font-weight-bold text-navy'>Best Value Health Insurance</p>"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SvgItem
                    source={Icons.upointCard}
                    size="46px"
                    content="<p class='font-weight-bold text-navy'>Eftpos Gift Cards</p>"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <SvgItem
                    source={Icons.upointPercent}
                    size="46px"
                    content="<p class='font-weight-bold text-navy'>Receive discounts automatically</p>"
                  />
                </div>
              </div>
              <NavLink to="/union-health" className="btn btn-cherry btn-round">
                Learn more
              </NavLink>
            </div>
            <div className="panel-card-right bg-cherry text-white" style={{ paddingLeft: 34, paddingRight: 34, width: 356 }}>
              <h3 className="font-weight-semi-bold mb-3">Exclusive offer when you join today!</h3>
              <p>
                What’s more, because you are a uPoint member you will also receive an exclusive
                <span className="font-weight-bold"> EFTPOS gift card </span>
                upon joining Union Health.
              </p>
              <div className="union-people">
                <img src={Bitmaps.unionPeople} alt="union people" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FinanceInsurance);
