import React, { useState } from 'react';

interface AddTaskFormProps {
    onAddTask : (text: string) => void;
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {

    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAddTask(text);
        setText('');
}
return (
    <form onSubmit={handleSubmit} className='add-task-form'>
        <input type="text"
        placeholder='Ajouter une nouvelle tache'
        value={text}
        onChange={(e) => setText(e.target.value)} />
        <button type='submit'>Ajouter</button>
    </form>
)
}
export default AddTaskForm;