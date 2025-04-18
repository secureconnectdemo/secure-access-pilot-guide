
export const getUrl = (orgNumber: string, path: string) => 
  `https://dashboard.sse.cisco.com/org/${orgNumber}${path}`;

export const PATHS = {
  overview: '/overview',
  rootCertificate: '/secure/certificates/internet-decryption',
  trafficSteering: '/connect/user-connectivity/internet-security',
  clientSetup: '/connect/user-connectivity/internet-security',
  activityLogging: '/connect/user-connectivity/internet-security',
  scheduledReports: '/reports/scheduledreports',
  securityProfiles: '/secure/securityprofiles',
  dontDecryptLists: '/secure/dontdecryptlists',
  policyDashboard: '/secure/policy'
};

export const TEST_POLICY_URL = 'https://policy.test.sse.cisco.com/';
export const MALWARE_TEST_DOMAINS = {
  example: 'http://examplemalwaredomain.com',
  badguys: 'http://www.internetbadguys.com'
};
