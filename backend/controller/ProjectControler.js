const mongoose = require("mongoose");
const Projects = require("../models/ProjectsModel");

const getProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const projects = await Projects.findById(id);
    if (!projects) {
      return res.status(404).json({ error: "Task not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};
const createProject = async (req, res) => {
  const { title, des } = req.body;
  try {
    const project = await Projects.create({ title, des });
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
  }
};
const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const projects = await Projects.findByIdAndDelete(id);
    if (!projects) {
      return res.status(404).json({ error: "Task not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }
  try {
    const taskTracker = await Projects.findByIdAndUpdate(id);
    if (!taskTracker) {
      return res.status(404).json({ error: "Updated" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getProject,
  getProjects,
  createProject,
  deleteProject,
  updateProject,
};
