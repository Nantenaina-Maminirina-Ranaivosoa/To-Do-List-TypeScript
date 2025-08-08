import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
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

  return(
    <div className='app-container'>
      <h1>Ma To-Do List</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
  export default App;
