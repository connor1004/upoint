import React, {
  Fragment
} from 'react';
import moment from 'moment';
import {
  SERVICE_TYPE_LIST
} from '../../configs/constants';
import ConstantHelper from '../../helpers/ConstantHelper';

const currencyFormatter = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  minimumFractionDigits: 2
});

export const OrderHistoryHeader = () => (
  <Fragment>
    <tr>
      <th>Order details</th>
      <th>Order date</th>
      <th>Order ID</th>
      <th>Order amount</th>
    </tr>
  </Fragment>
);


export const OrderHistoryItem = (props) => {
  const {
    data
  } = props;
  const {
    service_type, service_name, description, order_date, order_id, order_amount
  } = data;

  const serviceTypeItem = ConstantHelper.getListItem(SERVICE_TYPE_LIST, 'value', service_type, SERVICE_TYPE_LIST[0]);

  return (
    <tr>
      <td>
        <b>{description}</b>
        <div>
          <small className={`text-${serviceTypeItem.color}`}><b>{service_name}</b></small>
        </div>
      </td>
      <td>{moment(order_date).format('DD/MM/YYYY')}</td>
      <td>{order_id}</td>
      <td>{currencyFormatter.format(order_amount)}</td>
    </tr>
  );
};

const OrderHistoryTable = (props) => {
  const {
    data
  } = props;

  return (
    <div className="table-responsive">
      <table className="table table-order-history">
        <thead>
          <OrderHistoryHeader />
        </thead>
        <tbody>
          {
            data.length > 0 ? (
              data.map((item, index) => (
                <OrderHistoryItem key={`${index}`} data={item} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">There are no order histories</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

OrderHistoryTable.defaultProps = {
  data: []
};

export default OrderHistoryTable;
