import * as React from "react";
import { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import DefaultLayout from "~/layouts/default";
import { NextPage } from "next";
import { TMenuItem, TSubMenu } from "~/interfaces/menu";
import subMenus from "~/data/subMenus";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DnDContainer from "~/components/DnDContainer";
import update from "immutability-helper";

const { SubMenu } = Menu;
const { Sider } = Layout;

export type IndexPageState = {
  boxes: { [key: string]: { top: number; left: number; title: string } };
};

const IndexPage: NextPage = () => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: string;
    };
  }>({
    a: { top: 20, left: 80, title: "Drag me around" },
    b: { top: 180, left: 20, title: "Drag me too" }
  });

  const makeId = (length: number): string => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const addDnDBox = (title: string): void => {
    const key = makeId(5);
    setBoxes(
      update(boxes, {
        $merge: {
          [key]: { top: 180, left: 20, title }
        }
      })
    );
  };

  return (
    <DefaultLayout>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {subMenus.map((subMenu: TSubMenu, subMenuIndex: number) => (
              <SubMenu
                key={subMenuIndex}
                title={
                  <span>
                    <Icon type={subMenu.iconType} />
                    {subMenu.title}
                  </span>
                }
              >
                {subMenu.menuItems.map((item: TMenuItem, itemIndex: number) => (
                  <Menu.Item
                    key={`${subMenuIndex}-${itemIndex}`}
                    onClick={(): void => addDnDBox(item.title)}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
        <DndProvider backend={Backend}>
          <DnDContainer
            hideSourceOnDrag={true}
            boxes={boxes}
            setBoxes={setBoxes}
          />
        </DndProvider>
      </Layout>
    </DefaultLayout>
  );
};

export default IndexPage;
