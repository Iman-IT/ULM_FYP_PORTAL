const mongoose = require("mongoose");
const Task
 = require("../models/WorkModel");

const getTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const projects = await Task.findById(id);
    if (!projects) {
      return res.status(404).json({ error: "Task not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getTasks = async (req, res) => {
  try {
    const projects = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};
const createTask = async (req, res) => {
  const { title, des } = req.body;
  try {
    const project = await Task.create({ title, des });
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const projects = await Task.findByIdAndDelete(id);
    if (!projects) {
      return res.status(404).json({ error: "Task not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const taskTracker = await Task.findByIdAndUpdate(id);
    if (!taskTracker) {
      return res.status(404).json({ error: "Task not found" });
    }
    // Add the logic for updating the task here...
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
