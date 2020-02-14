import { Icon, Menu, Layout, Input } from "antd";
import * as React from "react";

const { SubMenu } = Menu;
const { Sider } = Layout;

export type RightSiderProps = {
  menuItems: {
    [key: string]: any;
  };
  onChange: (propName: string, value: any) => void;
};

const RightSider: React.FC<RightSiderProps> = ({ menuItems, onChange }) => {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu
          key="hogehoge" // TODO 直す
          title={
            <span>
              <Icon type="user" />
              プロパティ
            </span>
          }
        >
          {Object.keys(menuItems).map((propName: string, index: number) => (
            <Menu.Item key={index}>
              <Input
                placeholder={propName}
                value={menuItems[propName]}
                onChange={e => {
                  onChange(propName, e.target.value);
                }}
              />
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default RightSider;
