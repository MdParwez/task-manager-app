
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks([...tasks, newTask]))
      .catch((error) => console.error('Error adding task:', error));
  };

  const updateTask = (task) => {
    fetch(`http://localhost:5000/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((updatedTask) => setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))))
      .catch((error) => console.error('Error updating task:', error));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error('Error deleting task:', error));
  };

  const handleEdit = (id) => {
    const task = tasks.find((task) => task.id === id);
    setEditingTask(task);
  };

  return (
    <div className="w-full h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Task Manager App</h1>
        <TaskForm onSubmit={editingTask ? updateTask : addTask} task={editingTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Home;

;


