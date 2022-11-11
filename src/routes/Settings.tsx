import { useState } from 'react';
import { Cascader, Switch } from 'antd';

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

function onCheckboxChange(checked: boolean) {
  // update settings in local storage
}

const onCascaderChange = (value: string[]) => {};

const Settings = () => {
  // load settings from local storage

  const [settings, setSettings] = useState();

  return (
    <main>
      <h1>Settings</h1>
      <form action="">
        <div>
          <label htmlFor="">Auto Collapse after select</label>
          <Switch onChange={onCheckboxChange} />
        </div>
        <div>
          <label htmlFor="">Notification</label>
          <Switch onChange={onCheckboxChange} />
        </div>
        <div>
          <Cascader options={options} onChange={onCascaderChange} defaultValue={[1]} allowClear={false} />
        </div>
        <div>
          <label htmlFor="">Clear History</label>
          <button onClick={localStorage.clear()}>Clear</button>
        </div>
      </form>
    </main>
  );
};

export default Settings;
