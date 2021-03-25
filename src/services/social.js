import OAuthManager from 'react-native-social-login';

const social = new OAuthManager('safedriver');

social.configure({
  facebook: {
    client_id: '388371155672971',
    client_secret: 'b64fdcc2eeba107fc07d3e4cb45a7ab8',
  }
});

export default social;
