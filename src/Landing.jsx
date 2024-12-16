import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchTasks, addTask, updateTask, deleteTask } from './services/allApi'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'

function Landing() {

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
            .then((response) => {
                setTasks(response.data);
                setFilteredTasks(response.data);
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    const handleAddTask = (task) => {
        addTask(task)
            .then((response) => setTasks([...tasks, response.data]))
            .catch((error) => console.error("Error adding task:", error));
    };

    const handleUpdateTask = (id, updatedTask) => {
        updateTask(id, updatedTask)
            .then(() =>
                setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
            )
            .catch((error) => console.error("Error updating task:", error));
    };

    const handleDeleteTask = (id) => {
        deleteTask(id)
            .then(() => setTasks(tasks.filter((task) => task.id !== id)))
            .catch((error) => console.error("Error deleting task:", error));
    };

    const handleFilterTasks = (filterCriteria) => {
        setFilteredTasks(
            tasks.filter((task) =>
                Object.keys(filterCriteria).every(
                    (key) => filterCriteria[key] === "" || task[key] === filterCriteria[key]
                )
            )
        )
    }

    return (
        <>
            <div>
                <h1>Task Management App</h1>
                <TaskForm onAddTask={handleAddTask} />
                <TaskFilter onFilter={handleFilterTasks} />
                <TaskList
                    tasks={filteredTasks}
                    onUpdateTask={handleUpdateTask}
                    onDeleteTask={handleDeleteTask}
                />
            </div>
        </>
    )
}

export default Landing