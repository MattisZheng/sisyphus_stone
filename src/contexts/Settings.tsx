import { useState } from 'react';
import { Button, Cascader, Switch } from 'antd';
import setInitFile from '../utils/setInitFile';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
  {
    value: 'system',
    label: 'System',
  },
];

function handleCheckboxChange(checked: boolean) {
  // update settings in local storage
}

const handleCascaderChange = (e: any): void => {};

function handleClearHistory(e: any) {
  // clear history in local storage
  e.preventDefault();
  setInitFile('history', 'history');
}

const Settings = () => {
  const [config, setConfig] = useState({})

  // load settings from local storage

  const test = localStorage.getItem('settings');
  

  return (
    <main>
      {test}
      <form action="">
        <div>
          <label htmlFor="">Auto Collapse after select</label>
          <Switch onChange={handleCheckboxChange} />
        </div>
        <div>
          <label htmlFor="">Notification</label>
          <Switch onChange={handleCheckboxChange} />
        </div>
        <div>
          <Cascader options={options} onChange={handleCascaderChange} defaultValue={[1]} allowClear={false} />
        </div>
        <div>
          <label htmlFor="">Clear History</label>
          <Button onClick={handleClearHistory} type="primary" danger>Clear</Button>
        </div>
      </form>
    </main>
  );
};

export default Settings;
