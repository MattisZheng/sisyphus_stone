// antd grid system
import { Col, Row } from 'antd';

import Plans from './Overview/Plans';
import Tasks from './Overview/Tasks';
import Routines from './Overview/Routines';
import Habits from './Overview/Habits';
import Missions from './Overview/Missions';

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
    </main>
  );
};

export default Overview;
