import { useState, useEffect } from 'react';
import { Form, Switch, Select, Button } from 'antd';
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

const Settings = () => {
  const [config, setConfig] = useState();

  const getLocalStorage = () => {
    let getData: string | null = localStorage.getItem('configs');
    if (getData) {
      let parsedData = JSON.parse(getData);
      setConfig(parsedData);
    }
  };

  const saveConfig = (data: any) => {
    localStorage.setItem('configs', JSON.stringify(data));
    getLocalStorage();
  };

  const handleClearHistory = (e: any) => {
    e.preventDefault();
    localStorage.setItem('plans', JSON.stringify(plans));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('routines', JSON.stringify(routines));
    localStorage.setItem('habits', JSON.stringify(habits));
    localStorage.setItem('missions', JSON.stringify(missions));
    localStorage.setItem('rewards', JSON.stringify(rewards));
    localStorage.setItem('goals', JSON.stringify(goals));
    getLocalStorage();
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div>
      {config && (
        <Form
          name="config"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          onValuesChange={(changedValue, allValues) => {
            console.log(changedValue, allValues);
            saveConfig(allValues);
          }}
          initialValues={config}
          onFinish={() => console.log('finish')}
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
          <Form.Item label="Language" name="lang">
            <Select options={languageOptions} />
          </Form.Item>
          <Form.Item label="Clear History">
            <Button type="primary" onClick={handleClearHistory} danger={true}>
              Clear
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Settings;
