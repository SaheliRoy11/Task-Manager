
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,//trim any leading or trailing spaces in input 'name'
        maxlength: 20
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
},
{timestamps: true});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;