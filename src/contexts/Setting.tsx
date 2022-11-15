import { useState, useEffect } from 'react';
import { List, Form, Input, Switch, Select } from 'antd';
import { ConsoleSqlOutlined } from '@ant-design/icons';

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

function handleSave() {
  console.log('save');
}

// clear history
function handleClearHistory(e: any) {
  // clear history in local storage
  e.preventDefault();
  localStorage.clear();
}

const Settings = () => {
  const [config, setConfig] = useState();

  // load config from local storage
  const loadConfig = () => {
    const data = localStorage.getItem('settings');
    console.log(data);
    if (data) {
      setConfig(JSON.parse(data));
    }
    console.log(config);
  };

  useEffect(() => {
    loadConfig();
  }, []);

  return (
    <main>
      {localStorage.getItem('settings')}
      {config && (
        <Form
          name="setting"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={() => console.log('finished')}
        >
          <Form.Item label="Opens at" name="tab">
            <Select options={tabOptions} />
          </Form.Item>
          <Form.Item label="Auto Collapse" name="tab">
            <Switch />
          </Form.Item>
          <Form.Item label="Theme" name="theme">
            <Select options={themeOptions} />
          </Form.Item>
          <Form.Item label="Language" name="language">
            <Select options={languageOptions} />
          </Form.Item>
        </Form>
      )}
    </main>
  );
};

export default Settings;
