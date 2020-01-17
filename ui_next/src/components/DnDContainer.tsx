import React from "react";
import DnDBox from "./DnDBox";
import "./dnd_container.less";
import { IndexPageState } from "~/pages/index";
import update from "immutability-helper";
import { useDrop, XYCoord } from "react-dnd";
import dndItemTypes from "~/data/dndItemTypes";
import { DragItem } from "~/interfaces/drag_item";

export type ContainerProps = {
  hideSourceOnDrag: boolean;
  boxes: IndexPageState["boxes"];
  setBoxes: Function;
};

const DndContainer: React.FC<ContainerProps> = ({
  hideSourceOnDrag,
  boxes,
  setBoxes
}) => {
  const moveBox = (id: string, left: number, top: number) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top }
        }
      })
    );
  };

  const [, drop] = useDrop({
    accept: dndItemTypes.BOX,
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      return undefined;
    }
  });

  return (
    <div ref={drop} className="dnd_container">
      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key];
        return (
          <DnDBox
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
          </DnDBox>
        );
      })}
    </div>
  );
};

export default DndContainer;
