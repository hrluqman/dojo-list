import { useState } from "react";
import Form from "./Form";
import List from "./List";

const ToDoList = () => {
    const Monthly = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [lists, setLists] = useState([
        {task: 'First Task', date: '2 February 2022', id: 1},
    ]);
    const [task, setTask] = useState('');
    const [taskEdit, setTaskEdit] = useState('');
    
    const deleteTask = (id) => {
        const newList = lists.filter((list)=>list.id!==id);
        setLists(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.random()*32.2;
        let date = getTheDate();
        const listing = { task, date, id };
        lists.push(listing);
        setLists(lists);
        setTask('');
    };

    const editTask = (id, value) => {
        for(var i in lists) {
            if (lists[i].id==id) lists[i].task=value;
        }
        setLists(lists);
    };

    let getTheDate = () => {
        var d = new Date(),
        month = '' + (d.getMonth()),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (day.length < 2) day = '0' + day;
        let formattedDate = `${day} ${Monthly[month]} ${year}`;
        return formattedDate;
    };

    return (  
        <div className="container">
            <h1>To Do List</h1>
            <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
            <List taskEdit={taskEdit} setTaskEdit={setTaskEdit} editTask={editTask} lists={lists} deleteTask={deleteTask} />
        </div>
    );
}
 
export default ToDoList;