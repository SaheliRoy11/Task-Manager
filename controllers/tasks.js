
const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

//Create a task
module.exports.createTask = asyncWrapper(async function(req, res) {
    const newTask = await Task.create(req.body);
    return res.status(200).json({
        task: newTask})
})

//Display a task in the 'edit-task' page
module.exports.getTask = asyncWrapper(async function (req, res, next) {

    const task = await Task.findById(req.params.id);

    if(!task) {
        return next(createCustomError(`No task with ID: ${req.params.id}`, 404));
    }

    return res.status(200).json({
        task: task
    })

})

//Edit a task
module.exports.editTask = asyncWrapper(async function (req, res) {
    
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true //checks that when a doc is updated, all the validations mentioned in model is held true.
    });

    if(!updatedTask) {
        return next(createCustomError(`No task with ID: ${req.params.id}`, 404));
    }

    return res.status(200).json({
        task: updatedTask
    });
})

//Delete a task
module.exports.deleteTask = asyncWrapper(async function(req, res) {
    
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if(!deletedTask) {
        return next(createCustomError(`No task with ID: ${req.params.id}`, 404));
    }

    return res.status(200).json({
        task: deletedTask
    });
  
})

//Display all tasks in home page
module.exports.getAllTasks = asyncWrapper( async function(req, res) {
    
        const tasks = await Task.find({});
        return res.status(200).json({
            tasks: tasks
        });

})

