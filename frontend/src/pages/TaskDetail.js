import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`/api/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((error) => console.error('Error fetching task:', error));
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6 bg-gray-100 rounded-xl shadow-neumorphism">
        <h1 className="text-2xl font-bold text-primary mb-4">{task.title}</h1>
        <p className="text-secondary mb-2">{task.description}</p>
        <p className="text-accent">{task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskDetail;

