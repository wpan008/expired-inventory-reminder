import React, { useState, useEffect } from 'react';
import { InventoryList } from './components/InventoryList';
import { AddInventoryForm } from './components/AddInventoryForm';
import { Divider, notification } from 'antd';
import { interval } from 'rxjs';
import './App.css'

const inventoryItems: Item[] = [
  {
    id: '23412834234',
    text: '镇江香醋',
    expiry: new Date("2022-03-23"),
    comment: ''
  },
  {
    id: '82739471239',
    text: '德州扒鸡',
    expiry: new Date("2021-12-13"),
    comment: ''
  },
];



function App() {
  useEffect(() => {
    const timerSub = interval(10*1000)
    .subscribe((val) => {
      var today = new Date();
      items.forEach(item => {
        if(item.expiry<=today){
          notification['warning']({
            message: '过期提醒',
            description:
              '商品：'+item.text+' 编号：'+item.id+'已过期',
          });
        }
      });
    });
    return ()=>{
      timerSub.unsubscribe();
    }
  });
  
  const [items, setTodos] = useState(inventoryItems);
  const addTodo: AddTodo = (id: string, text: string, expiry: Date, comment: string) => {
    const newItem = { id, text, expiry, comment };
    setTodos([...items, newItem]);
  };

  return (
    <div className="App">
      <Divider>添加</Divider>
      <AddInventoryForm addTodo={addTodo}/>
      <Divider>库存</Divider>
      <InventoryList todos={items} />
    </div>
  );
}

export default App;
