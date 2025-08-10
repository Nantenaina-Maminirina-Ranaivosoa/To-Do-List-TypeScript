import type { Task } from "../App";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} 
      onChange={()=> onToggleTask(task.id)} 
      />
      <span>{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)}>&times;</button>
    </li>
  );
}

export default TaskItem;