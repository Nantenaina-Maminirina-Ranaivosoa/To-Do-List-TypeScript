import { useState } from 'react';
import TaskItem from './components/TaskItem';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

export interface Task {
    id: number;
    text : string;
    completed: boolean;
  }

function App() {
  const [tasks, setTasks] = useState<Task[]>([
  {id :1, text: 'Apprendre TypeScript', completed: true},
  {id :2, text: 'Créer une To-Do List', completed: false},
  {id :3, text: 'Publier sur Github', completed: false},
]);

const handeAddTask = (text: string) => {
  const newTask: Task = {
    id: Date.now(),
    text : text,
    completed: false,
  };
  setTasks([...tasks, newTask]); 
}

const handleToggleTask = (id: number) => {
setTasks(tasks.map(task =>
  task.id === id? { ... task, completed: !task.completed} : task
)
)
}

  return(
    <div className='app-container'>
      <h1>Ma To-Do List</h1>

      <AddTaskForm onAddTask={handeAddTask} />
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggleTask={handleToggleTask}/>
        ))}
      </ul>
    </div>
  )
}
  export default App;
