import update from "immutability-helper";
import React, { Dispatch, SetStateAction } from "react";
import { useDrop, XYCoord } from "react-dnd";
import DnDBox from "~/components/DnDBox";
import "~/components/dnd_container.less";
import dndItemTypes from "~/data/dndItemTypes";
import { DragItem } from "~/interfaces/drag_item";
import { TBoxes } from "~/pages";

export type ContainerProps = {
  hideSourceOnDrag: boolean;
  boxes: TBoxes;
  setBoxes: Dispatch<SetStateAction<TBoxes>>;
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
        const { left, top, jsx, onClick } = boxes[key];
        return (
          <DnDBox
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
            onClick={onClick}
          >
            {jsx}
          </DnDBox>
        );
      })}
    </div>
  );
};

export default DndContainer;
