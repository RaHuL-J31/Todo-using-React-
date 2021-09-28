import './App.css';
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo"
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react'
import AddTodo from './Components/AddTodo';

  function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const clickDelete = (todo) => {
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("deleted", todos)
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const addTodo = (title, desc) => {
      let sno;
      if (todos.length === 0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
  
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    
  return (
    <div className="App">
      <Navbar></Navbar>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todo todo={todos} onclickdelete={clickDelete}></Todo>
      <Footer name="Rahul"></Footer>
    </div>


  );
}

export default App;
