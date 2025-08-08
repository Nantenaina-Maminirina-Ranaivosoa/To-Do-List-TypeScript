import React, { useState } from 'react';
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
    </div>
  )
}
  export default App;
