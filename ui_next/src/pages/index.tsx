import { Layout, Menu, Icon } from "antd";
import update from "immutability-helper";
import { NextPage } from "next";
import * as React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DnDContainer from "~/components/DnDContainer";
import LeftSider from "~/components/LeftSider";
import RightSider from "~/components/RightSider";
import componentGroups from "~/data/materialComponents";
import { TComponent, TProp } from "~/interfaces/menu";
import DefaultLayout from "~/layouts/default";
import axiosInstance from "~/plugins/axios";
import { makeId } from "~/utils";

export type TBox = {
  top: number;
  left: number;
  jsx: JSX.Element;
  componentName: TComponent["title"];
  onClick: Dispatch<SetStateAction<string>>;
};
export type TBoxes = {
  [key: string]: TBox;
};
export type IndexPageState = {
  boxes: TBoxes;
};

const IndexPage: NextPage = () => {
  const [selectedKey, setSelectedKey] = useState<string>("");

  const [boxes, setBoxes]: [
    TBoxes,
    Dispatch<SetStateAction<TBoxes>>
  ] = useState<TBoxes>({});

  const selectedComponentProps =
    boxes[selectedKey] && boxes[selectedKey].jsx
      ? boxes[selectedKey].jsx.props
      : [];

  const addDnDBox = (jsx: JSX.Element | undefined): void => {
    const key = makeId(5);
    setBoxes(
      update(boxes, {
        // TODO: この部分、型指定が出来ないの、よろしくないのでは？
        $merge: {
          [key]: {
            top: 180,
            left: 20,
            jsx: jsx,
            componentName: "Button",
            onClick: () => setSelectedKey(key)
          }
        }
      })
    );
  };

  const updateBoxProps = (propName: string, value: any) => {
    if (selectedKey === "" || !boxes[selectedKey].jsx) return;
    const box = boxes[selectedKey];
    const newJsx = {
      ...box.jsx,
      props: {
        ...box.jsx.props,
        [propName]: value
      }
    };
    setBoxes(
      update(boxes, {
        $merge: {
          [selectedKey]: {
            ...box,
            jsx: newJsx
          }
        }
      })
    );
  };

  console.log("selected key = ", selectedKey);

  const saveBoxes = () => {
    console.log("save boxes");
    axiosInstance
      .put("/save_boxes", boxes)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <DefaultLayout>
      <Layout>
        <LeftSider subMenus={componentGroups} selectMenu={addDnDBox} />
        <DndProvider backend={Backend}>
          <DnDContainer
            hideSourceOnDrag={true}
            boxes={boxes}
            setBoxes={setBoxes}
          />
        </DndProvider>
        <RightSider
          menuItems={selectedComponentProps}
          onChange={updateBoxProps}
        />
      </Layout>
      <button onClick={() => saveBoxes()}>テスト用の保存ボタン</button>
    </DefaultLayout>
  );
};

export default IndexPage;
