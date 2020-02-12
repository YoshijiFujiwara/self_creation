import { Layout, Menu } from "antd";
import * as React from "react";
import "./default.less";

const { Header, Content } = Layout;

const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Layout>
      <Header id="header">
        <div id="logo" />
        <Menu
          id="menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="1">デフォルト</Menu.Item>
          <Menu.Item key="2">ふが</Menu.Item>
          <Menu.Item key="3">なんとかかんとか</Menu.Item>
        </Menu>
      </Header>
      <Content id="content_wrapper">
        <div id="content">{children}</div>
      </Content>
    </Layout>
  </div>
);

export default DefaultLayout;
