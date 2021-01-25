import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

import {getKey} from "../lib/util";

function Todo() {
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn tReact', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);
  
  const [filter, setFilter] = React.useState('ALL');
  
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
  
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
  
  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false }]);
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
    </div>
  );
}

export default Todo;