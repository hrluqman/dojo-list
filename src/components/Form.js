import { useState } from "react";

const Form = ({ task, setTask, handleSubmit }) => {

    return (  
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Task Name:</label>
                <input 
                    type="text" 
                    required
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
    );
}
 
export default Form;