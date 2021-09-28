import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="container my-2">
            <h5>{props.todo.task}</h5>
            <p>{props.todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{props.onclickdelete(props.todo)}}>Delete</button>
        </div>
    )
}
