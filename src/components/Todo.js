import React, { useState } from 'react';
import TodoItem from './TodoItem';

import {getKey} from "../lib/util";

function Todo() {
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS1 ToDoアプリ
      </div>
       {items.map(item => (
         <TodoItem key={item.key} item={item} />
       ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;