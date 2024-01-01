import React from 'react';
import './TodoItem.css';

//add the props to the function
function TodoItem({task}) {

    /*
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
    */
}

export default TodoItem;