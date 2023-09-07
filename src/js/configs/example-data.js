import {
  SERVICE_TYPE, PLAN_TYPE
} from './enums';
import { PLAN_LIST } from './constants';
import ConstantHelper from '../helpers/ConstantHelper';

export const orderHistoriesData = [
  {
    service_type: SERVICE_TYPE.MOBILE,
    service_name: '20GB Basic Mobile Plan',

    description: 'Sim shipped',

    order_date: '2019-02-25',
    order_id: '001634',
    order_amount: 35.00
  },
  {
    service_type: SERVICE_TYPE.MOBILE,
    service_name: '5G data',

    description: 'Mobile data added',

    order_date: '2019-02-25',
    order_id: '001634',
    order_amount: 35.00
  },
  {
    service_type: SERVICE_TYPE.NBN,
    service_name: '120GB Super Plan',

    description: 'NBN contract renewed',

    order_date: '2019-02-25',
    order_id: '001634',
    order_amount: 35.00
  },
  {
    service_type: SERVICE_TYPE.ENERGY,
    service_name: '$400 MEGA pack',

    description: 'Electricity pack added',

    order_date: '2019-02-25',
    order_id: '001634',
    order_amount: 35.00
  }
];

export const servicesData = [
  {
    service_name: '0400 123 456',
    service_plan: '20GB Basic Mobile plan',
    service_nickname: 'Service nickname',
    service_type: SERVICE_TYPE.MOBILE,
    price: 15,
    period_type: 'monthly'
  },
  {
    service_name: '0400 123 456',
    service_plan: '20GB Basic Mobile plan',
    service_type: SERVICE_TYPE.MOBILE,
    price: 15,
    period_type: 'monthly'
  },
  {
    service_name: 'NBN',
    service_plan: '120GB Super Plan',
    service_type: SERVICE_TYPE.NBN,
    price: 15,
    period_type: 'monthly'
  },
  {
    service_name: 'Electricity',
    service_plan: 'Add electricity and save',
    service_type: SERVICE_TYPE.ENERGY
  },
  {
    service_name: 'Mobile Service',
    service_plan: 'Add another mobile service',
    service_type: SERVICE_TYPE.MOBILE
  },
  {
    service_name: 'NBN Service',
    service_plan: 'Add another NBN service',
    service_type: SERVICE_TYPE.NBN
  }
];

export const campaignPlansData = [
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.NSW),
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.QLD)
];

export const servicePlanData = [
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.BASIC),
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.SUPER),
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.MAX)
];

export const billPlanData = [
  ConstantHelper.getListItem(PLAN_LIST, 'plan_type', PLAN_TYPE.BILL)
];

export const SAMPLE_BILL = {
  id: 1,
  postcode: '3000',
  bill_type_residential: 'YES',
  solar: 'NO',
  electricity_single_rate: 'YES',
  controlled_load: 'NO',
  peak_usage: '750',
  bill_days: '750',
  name: 'Andrew Welstead',
  phone_number: '0400 123 456',
  email: 'welly@weareflip.com'
};
