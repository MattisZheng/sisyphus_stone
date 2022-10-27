import { GithubOutlined, InfoCircleOutlined } from "@ant-design/icons";

const FooterContent = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <a href="https://github.com/mattiszheng" style={{ margin: "8px" }}>
        <GithubOutlined />
      </a>

      <a href="" style={{ margin: "8px" }}>
        <InfoCircleOutlined />
      </a>
    </footer>
  );
};

export default FooterContent;
