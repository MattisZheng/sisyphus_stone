import { GithubOutlined, InfoCircleOutlined } from "@ant-design/icons";

const FooterContent = () => {
  return (
    <footer>
      <p>
        Developed by <a href="https://mattiszheng.com">Mattis Zheng</a>
      </p>
      <p>Copyright</p>
      <a href="https://github.com/mattiszheng">
        <GithubOutlined />
      </a>

      <a href="">
        <InfoCircleOutlined />
      </a>
    </footer>
  );
};

export default FooterContent;
