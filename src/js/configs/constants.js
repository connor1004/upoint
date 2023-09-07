
/* eslint-disable react/react-in-jsx-scope */
import {
  PERIOD_TYPE,
  SERVICE_TYPE,
  PLAN_TYPE
} from './enums';
import Bitmaps from '../theme/Bitmaps';

export const PERIOD_TYPE_LIST = [
  {
    value: PERIOD_TYPE.MONTHLY,
    label: 'Per month'
  },
  {
    value: PERIOD_TYPE.YEARLY,
    label: 'Per year'
  }
];

export const SERVICE_TYPE_LIST = [
  {
    value: SERVICE_TYPE.MOBILE,
    label: 'Mobile',
    label2: 'Mobile',
    icon: 'mobile',
    color: 'primary',
    button_link: '/dashboard/mobile/select-plan',
    detail_link: ''
  },
  {
    value: SERVICE_TYPE.NBN,
    label: 'NBN',
    label2: 'NBN',
    icon: 'global',
    color: 'secondary',
    button_link: '/dashboard/nbn/check-address',
    detail_link: ''
  },
  {
    value: SERVICE_TYPE.ENERGY,
    label: 'Energy',
    label2: 'Electricity',
    icon: 'electricity',
    color: 'success',
    button_link: '/dashboard/energy/check-address',
    detail_link: ''
  }
];

export const PLAN_LIST = [
  {
    plan_type: PLAN_TYPE.BASIC,
    title: 'Standard Plan',
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'primary',
    price: 29,
    description: 'For 12 months<br />Min. cost $348',
    summary: 'https://www.google.com',
    capacities: [
      {
        amount: 4,
        unit: 'GB',
        label: '',
        details: 'data'
      }
    ],
    features: [
      {
        label: 'Unlimited standard calls & SMS',
        details: 'to standard numbers within Australia'
      },
      {
        label: '100 minutes international call included',
        details: 'to landlines in 26 countries'
      }
    ]
  },
  {
    plan_type: PLAN_TYPE.SUPER,
    title: 'Supr Plan',
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'danger',
    price: 39,
    description: 'For 12 months<br />Min. cost $348',
    summary: 'https://www.google.com',
    capacities: [
      {
        amount: 25,
        unit: 'GB',
        label: 'total data',
        details: '15GB BONUS + included 10GB'
      }
    ],
    features: [
      {
        label: 'Unlimited standard calls & SMS',
        details: 'to standard numbers within Australia'
      },
      {
        label: '300 minutes international call included',
        details: 'to landlines in 26 countries'
      }
    ]
  },
  {
    plan_type: PLAN_TYPE.MAX,
    title: 'Max Plan',
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'success',
    price: 49,
    description: 'For 12 months<br />Min. cost $348',
    summary: 'https://www.google.com',
    capacities: [
      {
        amount: 45,
        unit: 'GB',
        label: 'total data',
        details: '25GB BONUS + included 20GB'
      }
    ],
    features: [
      {
        label: 'Unlimited standard calls & SMS',
        details: 'to standard numbers within Australia'
      },
      {
        label: '300 minutes international call included',
        details: 'to landlines in 26 countries'
      }
    ]
  },
  {
    plan_type: PLAN_TYPE.NSW,
    title: 'NSW Super deal',
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'primary',
    price: 29,
    description: 'For 12 months<br />Min. cost $348',
    summary: 'https://www.google.com',
    capacities: [
      {
        amount: 4,
        unit: 'GB',
        label: '',
        details: 'data'
      }
    ],
    features: [
      {
        label: 'Unlimited standard calls & SMS',
        details: 'to standard numbers within Australia'
      },
      {
        label: '100 minutes international call included',
        details: 'to landlines in 26 countries'
      }
    ]
  },
  {
    plan_type: PLAN_TYPE.QLD,
    title: 'OLD Mega pack',
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'pink',
    price: 49,
    description: 'For 12 months<br />Min. cost $348',
    summary: 'https://www.google.com',
    capacities: [
      {
        amount: 45,
        unit: 'GB',
        label: 'total data',
        details: '25GB BONUS + included 20GB'
      }
    ],
    features: [
      {
        label: 'Unlimited standard calls & SMS',
        details: 'to standard numbers within Australia'
      },
      {
        label: '300 minutes international call included',
        details: 'to landlines in 26 countries'
      }
    ]
  },
  {
    plan_type: PLAN_TYPE.BILL,
    service_type: SERVICE_TYPE.MOBILE,
    period_type: PERIOD_TYPE.MONTHLY,
    color: 'success',
    price: 218.87,
    description: 'For the same bill (excl. GST)',
    features: [
      {
        details: '<strong>32% off </strong>electricity usage charges for 12 months when you pay on time',
      },
      {
        label: 'Monthly billing'
      }
    ],
    to: ''
  }
];

export const PRICING_NBN_PACKS = [
  {
    value: 'super_nbn_pack',
    type: 'primary',
    title: 'Super',
    name: 'Super NBN Plan',
    pack: '$65 / month',
    price: 65,
    description: 'Unlimited data*',
    data: [
      '<small>Max theoretical speed of:</small>',
      '50Mbps download',
      '20Mbps upload',
      '<a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/Upoint_NBN_Speed+Tiers_NEW_Speed_Guidelines_Sept2018.pdf"><small class="text-primary">Click HERE for more details</small></a>'
    ]
  },
  {
    value: 'max_nbn_pack',
    type: 'danger',
    title: 'Max',
    name: 'Max NBN Plan',
    pack: '$85 / month',
    price: 85,
    description: 'Unlimited data*',
    data: [
      '<small>Max theoretical speed of:</small>',
      '100Mbps download',
      '40Mbps upload',
      '<a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/Upoint_NBN_Speed+Tiers_NEW_Speed_Guidelines_Sept2018.pdf"><small class="text-primary">Click HERE for more details</small></a>'
    ]
  }
];

export const PRICING_UNION = [
  {
    value: 'union_saver',
    color: 'primary',
    title: 'Union Saver',
    price: 105.60,
    description: 'For the same bill (excl.GST)',
    features: [
      {
        label: 'A great offer for current and financial members of approved Trade Unions'
      },
      {
        label: 'Monthly billing available'
      }
    ]
  },
  {
    value: 'union_plus_saver',
    color: 'danger',
    title: 'Union Saver Plus',
    price: 105.60,
    description: 'For the same bill (excl.GST)',
    features: [
      {
        label: 'A great offer for current and financial members of approved Trade Unions'
      },
      {
        label: 'Monthly billing available'
      }
    ]
  },
  {
    value: 'union_max_saver',
    color: 'success',
    title: 'Union Saver Max',
    price: 105.60,
    description: 'For the same bill (excl.GST)',
    features: [
      {
        label: 'A great offer for current and financial members of approved Trade Unions'
      },
      {
        label: 'Monthly billing available'
      }
    ]
  }
];

export const PRICING_DETAILS = [
  {
    value: 'standard_mobile_pack',
    type: 'primary',
    title: 'Standard Plan',
    name: 'Standard Plan',
    price: 29,
    period: 'Per month',
    priceDetails: [
      'for 12 months',
      'Min cost $348'
    ],
    summary: {
      description: 'Critical information summary',
      src: 'https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/UPoint_CIS_STANDARD_Mobile_August+2018_V2.pdf'
    },
    resource: {
      amount: '4GB',
      unit: 'data'
    },
    data: [
      {
        title: 'Unlimited standard calls',
        description: 'to standard numbers within Australia'
      },
      {
        title: 'Unlimited standard SMS',
        description: 'to standard numbers within Australia'
      },
      {
        title: '100 Minutes International Calls Included',
        description: 'to landlines in 26 countries'
      }
    ]
  },
  {
    value: 'super_mobile_pack',
    type: 'danger',
    title: 'Super Plan',
    name: 'Super Plan',
    price: 39,
    period: 'Per month',
    priceDetails: [
      'for 12 months',
      'Min cost $468'
    ],
    summary: {
      description: 'Critical information summary',
      // src: 'https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/CIS_SUPER_Mobile_PROMO_Dec18.pdf'
      // src: require('../../docs/WL_CIS_SUPER_Mobile_30GB.pdf')
      src: 'https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/WL_CIS_SUPER_Mobile_30GB.pdf'
    },
    resource: {
      amount: '30GB total data',
      unit: '20GB BONUS + Included 10GB'
    },
    data: [
      {
        title: 'Unlimited standard calls',
        description: 'to standard numbers within Australia'
      },
      {
        title: 'Unlimited standard SMS',
        description: 'to standard numbers within Australia'
      },
      {
        title: '300 Minutes International Calls Included',
        description: 'to landlines in 26 countries'
      }
    ]
  },
  {
    value: 'max_mobile_pack',
    type: 'success',
    title: 'Max Plan',
    name: 'Max Plan',
    price: 49,
    period: 'Per month',
    priceDetails: [
      'for 12 months',
      'Min cost $588'
    ],
    summary: {
      description: 'Critical information summary',
      // src: 'https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/CIS_MAX_Mobile_PROMO_Dec18.pdf'
      // src: require('../../docs/WL_CIS_MAX_Mobile_50GB.pdf')
      src: 'https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/WL_CIS_MAX_Mobile_50GB.pdf'
    },
    resource: {
      amount: '50GB total data',
      unit: '30GB BONUS + Included 20GB'
    },
    data: [
      {
        title: 'Unlimited standard calls',
        description: 'to standard numbers within Australia'
      },
      {
        title: 'Unlimited standard SMS',
        description: 'to standard numbers within Australia'
      },
      {
        title: '300 Minutes International Calls Included',
        description: 'to landlines in 26 countries'
      }
    ]
  }
];

export const STATES = [
  { label: 'ACT', value: 'ACT' },
  { label: 'NSW', value: 'NSW' },
  { label: 'NT', value: 'NT' },
  { label: 'QLD', value: 'QLD' },
  { label: 'SA', value: 'SA' },
  { label: 'TAS', value: 'TAS' },
  { label: 'VIC', value: 'VIC' },
  { label: 'WA', value: 'WA' }
];

export const COUNTRIES = {
  AU: 'Australia',
  NZ: 'New Zealand',
  AF: 'Afghanistan',
  AX: 'Åland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua & Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AC: 'Ascension Island',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia & Herzegovina',
  BW: 'Botswana',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  VG: 'British Virgin Islands',
  BN: 'Brunei',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  IC: 'Canary Islands',
  CV: 'Cape Verde',
  BQ: 'Caribbean Netherlands',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  EA: 'Ceuta & Melilla',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo - Brazzaville',
  CD: 'Congo - Kinshasa',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: 'Côte d’Ivoire',
  HR: 'Croatia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czechia',
  DK: 'Denmark',
  DG: 'Diego Garcia',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  EZ: 'Eurozone',
  FK: 'Falkland Islands',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HN: 'Honduras',
  HK: 'Hong Kong SAR China',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  XK: 'Kosovo',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: 'Laos',
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macau SAR China',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar (Burma)',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  NC: 'New Caledonia',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  KP: 'North Korea',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territories',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn Islands',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Réunion',
  RO: 'Romania',
  RU: 'Russia',
  RW: 'Rwanda',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'São Tomé & Príncipe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia & South Sandwich Islands',
  KR: 'South Korea',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  BL: 'St. Barthélemy',
  SH: 'St. Helena',
  KN: 'St. Kitts & Nevis',
  LC: 'St. Lucia',
  MF: 'St. Martin',
  PM: 'St. Pierre & Miquelon',
  VC: 'St. Vincent & Grenadines',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard & Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syria',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad & Tobago',
  TA: 'Tristan da Cunha',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks & Caicos Islands',
  TV: 'Tuvalu',
  UM: 'U.S. Outlying Islands',
  VI: 'U.S. Virgin Islands',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  UN: 'United Nations',
  US: 'United States',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VA: 'Vatican City',
  VE: 'Venezuela',
  VN: 'Vietnam',
  WF: 'Wallis & Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe'
};

export const IDENTIFICATIONS = [
  {
    src: Bitmaps.card_medicare,
    title: 'Medicare card',
    value: 'medicare_card',
    scale: 0.8
  },
  {
    src: Bitmaps.card_license,
    title: 'Driver licence',
    value: 'driver_licence',
    scale: 0.8
  },
  {
    src: Bitmaps.card_passport,
    title: 'Passport',
    value: 'passport'
  }
];

export const COLOURS = [
  {
    label: 'Green', value: 'green'
  },
  {
    label: 'Red', value: 'Red'
  }
];

export const TITLES = [
  {
    label: 'Mr', value: 'Mr'
  },
  {
    label: 'Mrs', value: 'Mrs'
  },
  {
    label: 'Miss', value: 'Miss'
  }
];

export const PRICINGS = [
  {
    value: 'standard_mobile_pack',
    type: 'primary',
    price: 29,
    cycle: 'per month',
    title: 'Standard Mobile Plan',
    name: 'Standard Mobile Plan',
    data: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    description: '4GB data'
  },
  {
    value: 'super_mobile_pack',
    type: 'danger',
    price: 39,
    cycle: 'per month',
    title: 'Super Mobile Plan',
    name: 'Super Mobile Plan',
    data: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    description: '30GB total data',
    subDescription: '20GB BONUS + included 10GB'
  },
  {
    value: 'max_mobile_pack',
    type: 'success',
    price: 49,
    cycle: 'per month',
    title: 'Max Mobile Plan',
    name: 'Max Mobile Plan',
    data: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    description: '50GB total data',
    subDescription: '30GB BONUS + included 20GB'

  }
];

export const PRICING_MINI_MOBILE = [
  {
    type: 'primary',
    title: 'Standard Plan',
    name: 'Standard Plan',
    price: 29,
    period: 'inc. GST per month',
    priceDetails: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    resource: {
      amount: '4GB',
      unit: 'data'
    },
    description: ''
  },
  {
    type: 'danger',
    title: 'Super Plan',
    name: 'Super Plan',
    price: 39,
    period: 'inc. GST per month',
    priceDetails: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    resource: {
      amount: '30GB',
      unit: 'data'
    },
    description: '20GB BONUS + Included 10gb'
  },
  {
    type: 'success',
    title: 'Max Plan',
    name: 'Max Plan',
    price: 49,
    period: 'inc. GST per month',
    priceDetails: [
      'Unlimited standard calls',
      'Unlimited standard SMS'
    ],
    resource: {
      amount: '50GB',
      unit: 'total data'
    },
    description: '30GB BONUS + Included 20GB'
  }
];

export const PRICING_MINI_NBN = [
  {
    type: 'primary',
    title: 'Super Plan',
    name: 'Super Plan',
    price: 65,
    period: 'inc. GST per month',
    priceDetails: [
      'Max theoretical speed of:',
      '50Mbps download',
      '20Mbps upload',
      '<span><a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/WL_NBN_Speeds.pdf">Click HERE for more details</a></span>'
    ],
    resource: {
      amount: 'Unlimited',
      unit: 'data*'
    }
  },
  {
    type: 'danger',
    title: 'Max Plan',
    name: 'Max Plan',
    price: 85,
    period: 'inc. GST per month',
    priceDetails: [
      'Max theoretical speed of:',
      '100Mbps download',
      '40Mbps upload',
      '<span><a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/upoint-api-prod/cis/Upoint_NBN_Speed+Tiers_NEW_Speed_Guidelines_Sept2018.pdf">Click HERE for more details</a></span>'
    ],
    resource: {
      amount: 'Unlimited',
      unit: 'data*'
    }
  }
];
