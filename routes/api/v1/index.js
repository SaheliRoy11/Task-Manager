

const router = require('express').Router();
const {getTask, getAllTasks, createTask, editTask, deleteTask} = require('../../../controllers/tasks');

router.route('/tasks').get(getAllTasks).post(createTask);
router.route('/tasks/:id').get(getTask).patch(editTask).delete(deleteTask);


module.exports = router;