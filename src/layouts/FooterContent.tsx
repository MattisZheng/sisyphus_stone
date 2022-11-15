import { Anchor } from 'antd';
import { GithubOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Link } = Anchor;

const FooterContent = () => {
  return (
    <footer>
      <Anchor style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="https://github.com/mattiszheng" target="_blank" title={<GithubOutlined />} />
        <Link href="https://github.com/mattiszheng" target="_blank" title={<InfoCircleOutlined />} />
      </Anchor>
    </footer>
  );
};

export default FooterContent;
