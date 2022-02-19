import { useState } from "react";

const List = ({ lists, deleteTask, taskEdit, setTaskEdit, editTask }) => {

    const [edit, setEdit] = useState(false);
    const [check, setCheck] = useState('');

    const startEdit = (id, task) => {
        setTaskEdit(task);
        setCheck(id);
        setEdit(true);
    };

    return (  
        <div className="blog-list">
            {lists.map((list)=> (
                <div className="blog-preview" key={list.id}>
                  {check!=list.id && <h2>{list.task}</h2>}
                  {edit && check==list.id && <input type="text" value={taskEdit} onChange={(e)=>setTaskEdit(e.target.value)} />}
                  <p>Created on {list.date}</p>
                  <button type="button" onClick={()=>deleteTask(list.id)}>Delete Task</button>
                  {!edit && <button type="button" onClick={()=>startEdit(list.id, list.task)}>Edit Task</button>}
                  {edit && check==list.id && <button type="button" onClick={()=>{editTask(list.id, taskEdit); setEdit(false); setCheck('')}}>Save</button>}
              </div>
            ))}
        </div>
    );
}
 
export default List;