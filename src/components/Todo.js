import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

import useStorage from '../hooks/storage';

import {getKey} from "../lib/util";

function Todo() {
  // const [items, setItems] = React.useState([
  //   { key: getKey(), text: 'Learn JavaScript', done: false },
  //   { key: getKey(), text: 'Learn tReact', done: false },
  //   { key: getKey(), text: 'Get some good sleep', done: false },
  // ]);
  
  const [filter, setFilter] = React.useState('ALL');
  
  const [todos, putTodos, clearTodos] = useStorage();
  
  const displayItems = todos.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
  
  const handleCheck = checked => {
    const newItems = todos.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putTodos(newItems);
  };
  
  const handleAdd = text => {
    putTodos([...todos, { key: getKey(), text, done: false }]);
  };
  
  const handleFilterChange = value => setFilter(value);
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS1 ToDoアプリ
      </div>
       <Input onAdd={handleAdd} />
       <Filter
        onChange={handleFilterChange}
        value={filter}
      />
       {displayItems.map(item => (
        <TodoItem
          key={item.key}
          item={item}
          onCheck={handleCheck}
        />
       ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearTodos}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Todo;