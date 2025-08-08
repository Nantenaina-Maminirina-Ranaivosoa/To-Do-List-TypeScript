import type { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
}

function TaskItem({ task, onToggleTask }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} 
      onChange={()=> onToggleTask(task.id)} 
      />
      <span>{task.text}</span>
      <button>&times;</button>
    </li>
  );
}

export default TaskItem;