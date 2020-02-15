import { Icon, Menu, Layout } from "antd";
import * as React from "react";
import { TComponent, TComponentGroup } from "~/interfaces/material_components";

const { SubMenu } = Menu;
const { Sider } = Layout;

export type LeftSiderProps = {
  subMenus: TComponentGroup[];
  selectMenu: (
    title: TComponent["title"],
    jsx: JSX.Element | undefined
  ) => void;
};

const LeftSider: React.FC<LeftSiderProps> = ({ subMenus, selectMenu }) => {
  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {subMenus.map((subMenu: TComponentGroup, subMenuIndex: number) => (
          <SubMenu
            key={subMenuIndex}
            title={
              <span>
                <Icon type={subMenu.iconType} />
                {subMenu.title}
              </span>
            }
          >
            {subMenu.components.map((item: TComponent, itemIndex: number) => (
              <Menu.Item
                key={`${subMenuIndex}-${itemIndex}`}
                onClick={() => {
                  selectMenu(item.title, item.jsx);
                }}
              >
                {item.title}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default LeftSider;
