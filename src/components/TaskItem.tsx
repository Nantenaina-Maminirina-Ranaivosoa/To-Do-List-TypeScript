import type { Task } from "../App";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} />
      <span>{task.text}</span>
      <button>&times;</button>
    </li>
  );
}

export default TaskItem;