import React, { useState } from "react";

function TodoList() {
  
  // Khai báo state lưu trữ
  const [todo, setTodo] = useState([]);

  // Khai báo state để lưu trữ value trong ô input
  const [text, setText] = useState("");

  // Thêm dữ liệu ng dùng nhập trong input vào trong mảng ban đầu
  const handleAdd = () => {
    //đặt dk khác trống
    if (text !== "") {
      setTodo([...todo, { text: text, complete: false }]);
      setText("");
    }
  };

  //  Set lại giá trị cho complete
  const handleToggle = (index) => {
    const todoComplete = todo.map((e, i) =>
      index === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(todoComplete);
  };

  // Delete
  const handleDelete = (index) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo);
  };

  // Update
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  console.log(editIndex);
  console.log(editText);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };

  const handleUpdate = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
  };

  //   console.log(todo);
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type='text'
        id="myInput" 
        placeholder="Things to be done..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />             
                <button onClick={handleUpdate}>Update</button>
              </div>//{dấu : sẽ trả ngược lại kết quả...chạy map sẽ kiểm chạy nd người dùng nhập vào}
            ) : (
              <>
                <span
                  onClick={() => handleToggle(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "",
                  }}
                >
                  {element.text}
                </span>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;