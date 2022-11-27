import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'Normalize.css';
import 'antd/dist/antd.css';
import { ConfigProvider, theme } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={theme}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
);
