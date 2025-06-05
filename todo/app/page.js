"use client";
import { useState } from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

function TodoList() {

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([
    // {
    //     id: 1,
    //     text: 'Hello',
    //     completed: true
    // },
    // {
    //     id: 2,
    //     text: 'World',
    //     completed: false
    // }
  ]);

  const addTodoItem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false
    }
    setTodoList(prev => [...prev, item]);
    setInput('')
  }

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map(t => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed
          }
        }
        else {
          return t;
        }
      })
    )
  }

  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter(t => {
        if (t.id !== id) {
          return t;
        }
      })
    )
  }

  return (
    <div>
      {/* Todo  */}
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Todo List</h2>
        <div style={{ display: 'flex', marginTop: '3rem' }}>
          <input placeholder="Enter todo" type="text" className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addTodoItem()} className="btn btn-primary">Add</button>
        </div>
        <ul>
          {todoList.map(t => <li key={t.id} style={{
            margin: "10px 0px", display: "flex",
            justifyContent: "space-between"
          }}>
            <input type="checkbox" className="form-check-input btn btn-info" checked={t.completed} onChange={() => toggleCompleted(t.id)} />
            {/* <span style={t.completed ? { textDecoration: "line-through" } : {}}>{t.text}</span> */}
            <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

