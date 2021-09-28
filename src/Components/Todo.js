import React from 'react'
import TodoItem from './TodoItem'


export default function Todo({todo,onclickdelete}) {
    return (
        <>
        <div className="container">
            <h3 className="my-3">Todo Items</h3>
            <hr/>
            {todo.length != 0 ?
            todo.map((t)=>{
                return <><TodoItem todo={t} key={t.sno} onclickdelete={onclickdelete}></TodoItem><hr></hr></>
            })
            : <div className="alert alert-primary" role="alert">
            No Todo : Please Add Todo's
          </div>}
            
        </div>
        </>
    )
}
