import { useState, useEffect } from 'react';
import { Button, Cascader, Switch } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const tabOptions: Option[] = [
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'overview',
    label: 'Overview',
  },
  {
    value: 'history',
    label: 'History',
  },
  {
    value: 'reward',
    label: 'Reward',
  },
  {
    value: 'setting',
    label: 'Setting',
  },
];

const themeOptions: Option[] = [
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

const languageOptions: Option[] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'zh',
    label: '中文',
  },
];

function handleCheckboxChange(checked: boolean) {
  // update settings in local storage
}

const handleCascaderChange = (e: any): void => {};

function handleClearHistory(e: any) {
  // clear history in local storage
  e.preventDefault();
  localStorage.clear();
}

const Settings = () => {
  const [config, setConfig] = useState();

  // load settings from local storage

  useEffect(() => {
    // update settings in local storage
    setConfig(localStorage.getItem('settings'));
  }, []);

  return (
    <main>
      <p>{config}</p>
      <form onSubmit={() => console.log('submit')}>
        <div>
          <Cascader options={tabOptions} onChange={handleCascaderChange} defaultValue={[1]} allowClear={false} />
        </div>
        <div>
          <label htmlFor="">Auto Collapse after select</label>
          <Switch onChange={handleCheckboxChange} />
        </div>
        <div>
          <label htmlFor="">Notification</label>
          <Switch onChange={handleCheckboxChange} />
        </div>
        <div>
          <label htmlFor="">Theme</label>
          <Cascader options={themeOptions} onChange={handleCascaderChange} defaultValue={[1]} allowClear={false} />
        </div>
        <div>
          <label htmlFor="">Clear History</label>
          <Button onClick={handleClearHistory} type="primary" danger>
            Clear
          </Button>
        </div>
        <div>
          <label htmlFor="">Language</label>
          <Cascader options={languageOptions}/>
        </div>
      </form>
    </main>
  );
};

export default Settings;
