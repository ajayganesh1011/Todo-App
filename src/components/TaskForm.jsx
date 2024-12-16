import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        addTask(newTask);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control task-input"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-group mb-3">
                <textarea
                    className="form-control task-input"
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block add-task-btn">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
