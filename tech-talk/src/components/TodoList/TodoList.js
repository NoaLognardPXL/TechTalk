import React, { useEffect } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

//don't forget to import the useState

function TodoList() {
    //useState example
    //const [state, setState] = useState(0);

    //add state here for the tasks (array)
    //state = tasks
    //setState = setTasks

    //add state here for the text of the new task (string)
    //state = text
    //setState = setText


    useEffect(() => {
        //let's add 3 tasks

        //call the setTasks function with the new array of tasks objects
        //each task should have the following properties:
        //id: unique number
        //text: the text of the task
        //completed: false

    }, []);
     
    // uncomment after the tasks and text state is added
    /*
    function addTask(text) {
        if (text === '') return;

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
    */
        

    return (
        <div className="todo-container">

            <div className="todo-input-container">
                {/* remove the comments in the input and button after adding the useState at the top */}
                <input type="text" /* value={text} onChange={e => setText(e.target.value)} */ />
                <button /* onClick={() => addTask(text)} */ >Add Task</button>
            </div>

            <div className="todo-list">
                {
                    // uncomment after the tasks and text state is added
                    /*
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
                    
                
                    // uncomment when we added the props to the TodoItem component
                    // add the props to the TodoItem component after task={task}
                    // pass the deleteTask function as a prop to the TodoItem component
                    // pass the toggleTaskCompleted function as a prop to the TodoItem component
                    /*
                    tasks.map(task => (
                        <TodoItem key={task.id} task={task} />
                    ))
                    */        
                
                }
            </div>
        </div>
    );
}

export default TodoList;