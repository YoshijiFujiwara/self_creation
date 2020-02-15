import { Layout } from "antd";
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
import { RightSiderProps } from "~/components/RightSider";
import componentGroups from "~/data/ui_frameworks/material_ui/component_groups";
import { TComponent } from "~/interfaces/material_components";
import DefaultLayout from "~/layouts/default";
import axiosInstance from "~/plugins/axios";
import { makeRandomId } from "~/utils";

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
export type TRequestSave = {
  [key: string]: {
    top: number;
    left: number;
    jsx: JSX.Element;
    componentName: TComponent["title"];
  };
};

const IndexPage: NextPage = () => {
  // 選択中のボックスのkey
  const [selectedKey, setSelectedKey] = useState<string>("");

  const [boxes, setBoxes]: [
    TBoxes,
    Dispatch<SetStateAction<TBoxes>>
  ] = useState<TBoxes>({});

  const selectedComponentProps =
    boxes[selectedKey] && boxes[selectedKey].jsx
      ? boxes[selectedKey].jsx.props
      : [];

  // TODO: マテリアルコンポーネントの設定が終わり、undefinedがくることがなくなれば、`| undefined`は除去する
  const addDnDBox = (jsx: JSX.Element | undefined): void => {
    const key = makeRandomId(5);
    setBoxes(
      update(boxes, {
        // TODO: この部分、型指定が出来ないの、よろしくないのでは？
        $merge: {
          [key]: {
            top: 180, // TODO: 初期値をハードコーディングしておる
            left: 20,
            jsx,
            componentName: "Button", // TODO: コンポーネントネームのハードコーディング
            onClick: () => setSelectedKey(key)
          }
        }
      })
    );
  };

  const updateBoxProps: RightSiderProps["onChange"] = (
    propName: string,
    value: any
  ) => {
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

  const saveBoxes = () => {
    // stateのboxのonChangeプロパティ以外を渡す
    const reqBody: TRequestSave = {};
    Object.keys(boxes).forEach(key => {
      const { top, left, jsx, componentName } = boxes[key];
      reqBody[key] = { top, left, jsx, componentName };
    });

    axiosInstance
      .put("/save_boxes", reqBody)
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
