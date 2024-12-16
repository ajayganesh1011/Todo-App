import axios from "axios";

const base_url="http://localhost:3000/tasks"


export const fetchTasks = async() =>{
 return await axios.get(`${base_url}`)
    }
export const addTask = async(task) =>{
 return await axios.post(`${base_url}`, task)
}
export const updateTask =async (id, updatedTask) => {
    axios.put(`${base_url}/${id}`, updatedTask)
}
export const deleteTask =async (id) =>{
     axios.delete(`${base_url}/${id}`)
}