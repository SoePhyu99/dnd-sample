export interface Item {
  id: string;
  content: string;
}

export interface Column {
  id: string;
  title: string;
  items: Item[];
}

export interface BoardData {
  columns: Record<string, Column>;
  columnOrder: string[];
}

export const initialData: BoardData = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      items: [
        { id: "task-1", content: "Set up project repository" },
        { id: "task-2", content: "Install dependencies" },
        { id: "task-3", content: "Create basic layout" },
        { id: "task-4", content: "Define TypeScript interfaces" },
        { id: "task-5", content: "Configure drag and drop" },
      ],
    },
    inProgress: {
      id: "inProgress",
      title: "In Progress",
      items: [
        { id: "task-6", content: "Build Kanban columns" },
        { id: "task-7", content: "Implement onDragEnd logic" },
        { id: "task-8", content: "Fix TypeScript errors" },
      ],
    },
    review: {
      id: "review",
      title: "Review",
      items: [
        { id: "task-9", content: "Code review for DnD setup" },
        { id: "task-10", content: "Test drag between columns" },
      ],
    },
    done: {
      id: "done",
      title: "Done",
      items: [
        { id: "task-11", content: "Create initial board data" },
        { id: "task-12", content: "Verify TypeScript types" },
      ],
    },
  },
  columnOrder: ["todo", "inProgress", "review", "done"],
};
