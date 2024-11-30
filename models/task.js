const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    deadline: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure 'user' is required
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

