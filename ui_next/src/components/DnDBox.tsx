import React from "react";
import { useDrag } from "react-dnd";
import dndItemTypes from "~/data/dndItemTypes";
import "./dnd_box.less";

export type BoxProps = {
  id: any;
  left: number;
  top: number;
  hideSourceOnDrag?: boolean;
};

const DndBox: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children
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
    <div ref={drag} className="dnd_box" style={{ left, top }}>
      {children}
    </div>
  );
};

export default DndBox;
