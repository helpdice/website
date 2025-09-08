export const DEBUG = false;
export const MAINTENANCE = false;
export const AD_BLOCK_DETECT = false;
export const API_URL = DEBUG
  ? 'http://localhost:8080'
  : 'https://api.helpdice.com';
export const BASE_URL = DEBUG
  ? 'http://localhost:3000'
  : 'https://www.helpdice.com';
export const SITE_NAME = 'Helpdice';
export const TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';
export const TOKEN_THRESHOLD_KEY = 'access-token-threshold';

export const AD_CLIENT = 'ca-pub-7034818195807373';

/* eslint-disable */
export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const PASSWORD_REGEX = /.{8,}/;
/* eslint-enable */

export const CURRENCY = '₹';
