import React from 'react';
import './todoItem.css';

function TodoItem({task, deleteTask, toggleCompleted}) {

    function taskChange() {
        toggleCompleted(task.id);
        }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={task.completed} onChange={taskChange} />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    );
}

export default TodoItem;