// antd grid system
import { Col, Row } from 'antd';
import { Table, Space, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Plans from './Overview/Plans';
import Tasks from './Overview/Tasks';
import Routines from './Overview/Routines';
import Habits from './Overview/Habits';
import Missions from './Overview/Missions';

interface DataType {
  key: string;
  name: string;
  age: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
];

const Overview = () => {
  return (
    <main>
      <Col>
        <Row>
          <Plans />
          <Tasks />
        </Row>
        <Row>
          <Routines />
          <Habits />
          <Missions />
        </Row>
      </Col>

      <Table columns={columns} dataSource={data} />
    </main>
  );
};

export default Overview;
