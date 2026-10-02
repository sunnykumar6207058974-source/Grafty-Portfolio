import { Project } from '../models/Project.js';

export const getProjects = async (req, res, next) => {
  try {
    const projects = Project.findAll();
    return res.json({
      success: true,
      data: projects
    });
  } catch (err) {
    next(err);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const project = Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project with ID '${req.params.id}' not found`
      });
    }
    return res.json({
      success: true,
      data: project
    });
  } catch (err) {
    next(err);
  }
};
