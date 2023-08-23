import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth, Amplify } from 'aws-amplify';


Amplify.configure({
    Auth: {
      region:'us-east-2',
      userPoolId: 'us-east-2_XxVhj3oss',
      userPoolWebClientId: '5qkcqpfktfhofugbnlgdi2e2p',
      mandatorySignIn: true
    }
});

const myAppConfig = {
  // ...
  aws_appsync_graphqlEndpoint:
    'https://ojo2xbqc3fcqfdqeouxdybxet4.appsync-api.us-east-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-2',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS' // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
  // ...
};

Amplify.configure(myAppConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);