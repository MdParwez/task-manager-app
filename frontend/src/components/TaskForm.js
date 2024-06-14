import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate, id: task ? task.id : undefined });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-glass backdrop-blur-lg p-4 rounded-lg shadow-lg border border-blue-600">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 mb-2 w-full bg-glass backdrop-blur-sm text-primary"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 mb-2 w-full bg-glass backdrop-blur-sm text-primary"
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="border p-2 mb-2 w-full bg-glass backdrop-blur-sm text-primary"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg shadow-glass">
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

