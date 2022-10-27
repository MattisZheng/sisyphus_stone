import { GithubOutlined, InfoCircleOutlined } from "@ant-design/icons";

const FooterContent = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <a href="https://github.com/mattiszheng" target="_blank" style={{ margin: "8px" }}>
        <GithubOutlined />
      </a>

      <a href="" target="_blank" style={{ margin: "8px" }}>
        <InfoCircleOutlined />
      </a>
    </footer>
  );
};

export default FooterContent;
