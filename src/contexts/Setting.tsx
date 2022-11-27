import { useState, useEffect } from 'react';
import { Form, Switch, Select } from 'antd';
// utils
import setInitFile from '../utils/setInitFile';
// init file settings
import plans from '../data/plans.json';
import tasks from '../data/tasks.json';
import routines from '../data/routines.json';
import habits from '../data/habits.json';
import missions from '../data/missions.json';
import rewards from '../data/rewards.json';
import goals from '../data/goals.json';
import configs from '../data/configs.json';

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

// clear history

const Settings = () => {
  const [config, setConfig] = useState();

  const getLocalStorage = () => {
    console.log('getLocalStorage');
    let getData: string | null = localStorage.getItem('configs');
    if (getData) {
      console.log('getData', getData);
      let parsedData = JSON.parse(getData);
      console.log('parsedData', parsedData);
      setConfig(parsedData);
      setTimeout(() => {
        console.log('config', config)
      }, 1000);
    }
  };

  const saveConfig = (data: any) => {
    localStorage.setItem('configs', JSON.stringify(data));
    getLocalStorage();
  };

  const handleClearHistory = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    // init files
    setInitFile('plans', plans);
    setInitFile('tasks', tasks);
    setInitFile('routines', routines);
    setInitFile('habits', habits);
    setInitFile('missions', missions);
    setInitFile('rewards', rewards);
    setInitFile('goals', goals);
    setInitFile('configs', configs);
    getLocalStorage();
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <Form
      name="setting"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onValuesChange={(changedValues, allValues) => {
        console.log(changedValues, allValues);
      }}
      onFinish={() => {
        console.log('finish');
      }}
    >
      <Form.Item label="Opens at" name="tab">
        <Select options={tabOptions} />
      </Form.Item>
      <Form.Item label="Auto Collapse" valuePropName="checked" name="auto_collapse">
        <Switch />
      </Form.Item>
      <Form.Item label="Theme" name="theme">
        <Select options={themeOptions} />
      </Form.Item>
      <Form.Item label="Language" name="language">
        <Select options={languageOptions} />
      </Form.Item>
      <Form.Item label="Clear History" name="clear_history">
        <button onClick={handleClearHistory}>Reset</button>
      </Form.Item>
    </Form>
  );
};

export default Settings;
