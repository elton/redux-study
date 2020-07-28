import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store";

function TodoList() {
  const [data, setData] = useState([]);
  // React首次渲染和之后的每次渲染都会调用一遍useEffect函数
  // useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的
  useEffect(() => {
    setData(store.getState());
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder={data.inputValue}
          style={{ width: "250px", marginRight: "10px" }}
        />
        <Button type="primary">增加</Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={data.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
}

export default TodoList;
