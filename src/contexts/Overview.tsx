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
  address: string;
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
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },

  {
    title: 'Action',
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
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
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
