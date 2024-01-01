import React from "react";
import { useState } from "react";
import "./TodoList.css";
import TodoItem from "../todoItem/todoItem";

function TodoList() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleTaskCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        }));
    }

    return (
        <div className="todo-container">

            <div className="todo-input-container">
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <button onClick={() => addTask(text)}>Add Task</button>
            </div>
            <div className="todo-list">

                {/*
            tasks.map(task => (
                <li key={task.id}>
                <input type="checkbox" 
                id={task.id} 
                checked={task.completed} 
                onChange={() => toggleTaskCompleted(task.id)} />
                <label htmlFor={task.id}>{task.text}</label>
                <button onClick={() => deleteTask(task.id)}>X</button>
                </li>
                ))
                */
                    tasks.map(task => (
                        <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleTaskCompleted} />
                    ))

                }
            </div>
        </div>
    );
}

export default TodoList;