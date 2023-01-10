import React, { useState } from 'react'
import NewTodo from './StateLifting/NewTodo';
import Todos from './StateLifting/Todos';

const Dymmytodos = ["todo1", "todo2"];

const Home = () => {

    const [todos, setTodos] = useState(Dymmytodos);

    const handelNewTodo = (NewTodo) => {
        setTodos([...todos, NewTodo]);
    }

  return (
    <div>
        <NewTodo onTodo={handelNewTodo}/>
        <Todos todos={todos} />
    </div>
  )
}

export default Home