import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/navbar'
import 'materialize-css/dist/css/materialize.min.css'
import { ToDoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { ITodo } from './interfaces';
import DnD from './containers/dnd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev]);
  }

  const toggleHandler = (id: number) => {
    console.log("asfdasdf")
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
  }


  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <div className='container'>
              <ToDoForm onAdd={addHandler} />
              <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
            </div>
          </Route>
          <Route path="/dnd">
              <DnD />
          </Route>
        </Switch>
    

      </Router>
    </>
  );
}

export default App;
