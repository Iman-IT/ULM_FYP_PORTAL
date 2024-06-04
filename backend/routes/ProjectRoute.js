const express = require("express");
const router = express.Router();
const {
  createProject,
  getProject,
  getProjects,
  deleteProject,
  updateProject,
} = require("../controller/ProjectControler");
// Require controller modules.

router.get("/:id", getProject);

router.get("/", getProjects);

router.post("/", createProject);

router.delete("/:id", deleteProject);

router.patch("/:id", updateProject);

module.exports = router;
