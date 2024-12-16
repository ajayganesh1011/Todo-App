import React from "react";

const TaskList = ({ tasks, markComplete, deleteTask }) => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    const renderTasks = (tasks, category) => (
        <div className={`task-category ${category.toLowerCase()}-tasks`}>
            <h3 className="category-title">{category}</h3>
            {tasks.length === 0 ? (
                <p className="no-tasks-msg">No tasks in this category.</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <div className="task-details">
                                <h5 className="task-title">{task.title}</h5>
                                <p className="task-desc">{task.description}</p>
                            </div>
                            <div className="task-actions">
                                <button
                                    className="btn btn-success task-action-btn"
                                    onClick={() => markComplete(task.id)}
                                >
                                    {task.completed ? "Mark Pending" : "Mark Complete"}
                                </button>
                                <button
                                    className="btn btn-danger task-action-btn"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

    return (
        <div className="task-list-container">
            {renderTasks(pendingTasks, "Pending Tasks")}
            {renderTasks(completedTasks, "Completed Tasks")}
        </div>
    );
};

export default TaskList;
