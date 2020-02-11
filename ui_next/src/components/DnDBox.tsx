import React from "react";
import { useDrag } from "react-dnd";
import dndItemTypes from "~/data/dndItemTypes";
import "~/components/dnd_box.less";

export type BoxProps = {
  id: any;
  left: number;
  top: number;
  hideSourceOnDrag?: boolean;
  onClick: Function;
};

const DndBox: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  onClick
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: dndItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div
      ref={drag}
      className="dnd_box"
      style={{ left, top }}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default DndBox;
