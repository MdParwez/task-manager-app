import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-glass backdrop-blur-md p-4 rounded-lg shadow-neumorphism mb-4 border border-cyan-200">
          <h2 className="text-xl font-bold text-primary">{task.title}</h2>
          <p className="text-secondary">{task.description}</p>
          <p className="text-accent">{task.dueDate}</p>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(task.id)} className="bg-primary-light text-primary-dark border border-blue-600 px-4 py-2 rounded-lg shadow-glass">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white border border-blue-600 px-4 py-2 rounded-lg shadow-glass">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;


