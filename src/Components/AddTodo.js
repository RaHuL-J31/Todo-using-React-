import React from 'react'
import { useState } from 'react'


export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc){
            alert("Todo and Description is required")
        }else{
            props.addTodo(title,desc);
        }
        setTitle("")
        setDesc("")
        
    }
    return (
        <div className="container">
            <h3 className="text text-start">Add a Todo</h3>
            <form onSubmit = {submit}>
                <div className="form-group">
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todo" aria-describedby="emailHelp" placeholder="Add Todo" />
                    
                </div>
                <div className="form-group">
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                <hr/>
            </form>
        </div>
    )
}
