import React, { useState } from 'react';
import "../Layouts/Main.css"
import ListItem from '../ListItem/index';
import NewTaskInput from '../NewTaskItem/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const Main = () => {
    const [tasks, setTasks] = useState([]);

    function addNewTask(task) {
        const itensCopy = Array.from(tasks);
        itensCopy.push({ id: tasks.length, value: task });
        setTasks(itensCopy);
    }

    function updateTask({ target }, index) {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1, { id: index, value: target.value });
        setTasks(itensCopy);
    }

    function deleteTask(index) {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1);
        setTasks(itensCopy);
    }

    return (
        <div className="App">
            <div className="Todo-junto">
                <br />
                <text className="tittle">Agenda   <FontAwesomeIcon icon="calendar-check"/></text>
                <br />
                <NewTaskInput onSubmit={addNewTask} />
                {tasks.map(({ id, value }, index) => (
                    <ListItem
                        key={id}
                        value={value}
                        onChange={(event) => updateTask(event, index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Main;