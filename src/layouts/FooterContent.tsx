import { GithubOutlined, InfoCircleOutlined } from '@ant-design/icons';

const FooterContent = () => {
  return (
    <>
      <a href="https://github.com/mattiszheng/task_manager" target="_blank" style={{ margin: '5px' }}>
        {<GithubOutlined style={{ fontSize: '24px' }} />}
      </a>
      <a href="https://github.com/mattiszheng" target="_blank" style={{ margin: '5px' }}>
        {<InfoCircleOutlined style={{ fontSize: '24px' }} />}
      </a>
    </>
  );
};

export default FooterContent;
