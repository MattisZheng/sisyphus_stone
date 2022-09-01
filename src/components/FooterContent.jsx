import { GithubOutlined, InfoCircleOutlined } from "@ant-design/icons";
const FooterContent = () => {
  // copyright
  // external links

  return (
    <footer>
      <p>
        Designed by <a href="https://mattiszheng.com">Mattis Zheng</a>
      </p>
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
