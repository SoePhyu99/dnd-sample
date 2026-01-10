import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import { useState } from "react";
import { initialData, type BoardData } from "../lib/data";

const Board = () => {
  const [data, setData] = useState<BoardData>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = data.columns[source.droppableId];
    const destCol = data.columns[destination.droppableId];

    // Moving within same column
    if (sourceCol === destCol) {
      const items = Array.from(sourceCol.items);
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);

      setData({
        ...data,
        columns: {
          ...data.columns,
          [sourceCol.id]: {
            ...sourceCol,
            items,
          },
        },
      });
    }
    // Moving between columns
    else {
      const sourceItems = Array.from(sourceCol.items);
      const destItems = Array.from(destCol.items);

      const [moved] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, moved);

      setData({
        ...data,
        columns: {
          ...data.columns,
          [sourceCol.id]: {
            ...sourceCol,
            items: sourceItems,
          },
          [destCol.id]: {
            ...destCol,
            items: destItems,
          },
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: 16 }}>
        {data.columnOrder.map((colId) => {
          const column = data.columns[colId];

          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-[#f4f5f7] overflow-y-auto rounded-lg px-2 py-5 space-y-5 w-75 h-[calc(100vh-180px)]"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <h3 className="px-4">{column.title}</h3>

                  {column.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                          className="p-2 space-y-3 rounded-lg bg-white mb-2 cursor-pointer"
                        >
                          {item.content}
                          <p className="text-left text-xs text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
