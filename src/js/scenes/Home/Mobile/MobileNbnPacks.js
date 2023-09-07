import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PricingCardMini from '../../../components/cards/PricingMini';
import { PRICING_MINI_MOBILE, PRICING_MINI_NBN } from '../../../configs/constants';
import { Icons, Svgs } from '../../../theme';
import SvgIcon from '../../../components/modules/SvgIcon';
import SvgImage from '../../../components/modules/SvgImage';

class MobilePacks extends Component {
  render() {
    const renderPricingCardsMobile = PRICING_MINI_MOBILE.map((item, index) => (
      <div key={`${index}`}>
        <PricingCardMini
          {...item}
        />
      </div>
    ));
    const renderPricingCardsNbn = PRICING_MINI_NBN.map((item, index) => (
      <div key={`${index}`}>
        <PricingCardMini
          {...item}
        />
      </div>
    ));
    return (
      <div>
        <div className="mt-6 panel-card panel-upoint">
          <div className="panel-card-heading bg-primary">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointMobile} size="58px" />
            <div className="panel-card-heading-content">
              <SvgImage source={Svgs.brandUPoint} />
              <span className="ml-2 text-primary font-weight-bold">MOBILE</span>
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <h3 className="mb-4">Need a great deal? We have plans starting at $29.</h3>
              <div className="row">
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.wifi} className="icon-primary" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Trusted Network</span>
                      <p>Enjoy a great mobile experience on a 4G Network. Our service has extensive breadth and depth of coverage and is supported by a quality network.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.sim1} className="icon-primary" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Zero Bill-Shock</span>
                      <p>You’ll pay what you were expecting to pay.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.mobileTransfer} className="icon-primary" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Keep your number</span>
                      <p>It’s quick and easy to port an existing number or get a new one.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.mobile} className="icon-primary" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">BYO or buy a device</span>
                      <p>
                        BYO device and get all the benefits of a SIM-only plan.
                        <br />
                        <br />
                        Need a new device? Have a look at the great deals offered by our partner&nbsp;
                        <a href="https://www.mobileciti.com.au/upoint"><strong>Mobileciti</strong></a>
                        &nbsp;and get an exclusive 10% discount across all products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <NavLink className="btn btn-primary btn-round text-uppercase font-weight-extrabold" to="mobile/plans">Find out more</NavLink>
            </div>
            <div className="panel-card-right bg-primary text-white">
              <h3 className="text-center">Mobile Plans</h3>
              <div className="text-center">Compatible with Smartphones and Tablets</div>
              {renderPricingCardsMobile}
            </div>
          </div>
        </div>

        <div className="mt-6 panel-card panel-upoint">
          <div className="panel-card-heading bg-purple">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointNbn} size="58px" />
            <div className="panel-card-heading-content">
              <SvgImage source={Svgs.brandUPoint} />
              <span className="ml-2 text-purple font-weight-bold">NBN</span>
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <h3 className="mb-4">Unlimited data plans at super fast speeds!</h3>
              <div className="row">
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.download} className="icon-purple" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Unlimited data*</span>
                      <p>Don’t worry about data caps or your speed being restricted – we have you covered.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.nbnNetwork} className="icon-purple" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">NBN network</span>
                      <p>Take advantage of Australia’s Fibre network.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.superSpeeds} className="icon-purple" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Super speeds</span>
                      <p>We offer two different speed tiers so you can get the best bang for buck.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 mb-md-6">
                  <div className="d-flex">
                    <div className="pr-4">
                      <SvgIcon size="51px" source={Icons.wholeFamily} className="icon-purple" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="font-weight-bold">Speed for the whole family</span>
                      <p>We will provide you with the best plan to suit your family’s Internet needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <NavLink className="btn btn-purple btn-round text-uppercase font-weight-extrabold" to="/nbn/check-address">Check your address for availability</NavLink>
            </div>
            <div className="panel-card-right bg-purple text-white">
              <h3 className="text-center">Nbn plans</h3>
              {renderPricingCardsNbn}
              <div className="text-center text-white font-size-sm mt-3">
                <p>
                  *&nbsp;
                  <u>
                    <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/Upoint_NBN_Fair+Use+Policy_NEW_Speed_Guidelines_September2018.pdf">Fair use policy</a>
                  </u>
                  &nbsp;applies at 1TB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MobilePacks);
