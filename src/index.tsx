import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import './index.css';
import store from 'app/store';
import App from 'app/App';
import Authenticate from 'component/security/AuthorizeProvider';

const { compactAlgorithm } = theme;

createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
    <Authenticate>
      <Router>
        <ConfigProvider
          locale={zhCN}
          theme={{
            algorithm: compactAlgorithm,
            token:{
              lineHeight: 1.2,
              padding: 6,
            },
            components: {
              Table: {       
                paddingContentVerticalLG: 6,                
              },
              Menu: {
                padding: 12,
                itemHeight: 25,
              },
              Form: {
                margin: 8,
              }
            }   
          }}
        >
          <App />
        </ConfigProvider>
      </Router>
    </Authenticate>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
