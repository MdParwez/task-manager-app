const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let tasks = [];
let id = 0;

// Retrieve all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = { id: id++, title, description, dueDate };
  tasks.push(newTask);
  res.json(newTask);
});

// Retrieve a single task by its ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id, 10));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Update an existing task
app.put('/api/tasks/:id', (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = tasks.find((t) => t.id === parseInt(req.params.id, 10));
  if (task) {
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id, 10));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
