/*
  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.
  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,
  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.
  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.
*/
import React, {useState} from "react";
import styles from "@/styles/TodoList.module.css";

// TodoItem 컴포넌트를 정의합니다.
const TodoItem = ({ todos, setTodos, todo, onToggle, onDelete }) => {
  let [edited, setEdited] = useState(false);
  let [newInput, setNewInput] = useState(todo.text);

  function editTodo() {
    setTodos(
      todos.map((item) => {
        return item.id === todo.id ? { ...item, text: newInput } : item;
      })
    );

    setEdited(false)
  }

  


  // 각 할 일 항목을 렌더링합니다.
  return (
    <li className={styles.todoItem}>
      {/* 체크박스를 렌더링하고, 체크박스의 상태를 할 일의 완료 상태와 동기화합니다.
          체크박스의 상태가 변경되면 onToggle 함수를 호출하여 완료 상태를 업데이트합니다. */}
      {edited == true ? (
        <input
          type="text"
          // className={styles.itemInput}
          // -- itemInput CSS code --
          // input[type="text"].itemInput {
          //   width: 100%;
          //   padding: 5px;
          //   margin-bottom: 10px;
          // }
          className="shadow-lg w-full p-1 mb-4 border border-gray-300"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
      ) : (
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      )}

      {edited == true ? null : (
        <span className={styles.todoText} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
      )}

      {/* 할 일의 텍스트를 렌더링하고, 완료 상태에 따라 텍스트에 취소선을 적용합니다. */}

      {/* 삭제 버튼을 렌더링하고, 클릭 시 onDelete 함수를 호출하여 해당 할 일을 삭제합니다. */}
      {edited == true ? (
        <button
          className="mx-2 shadow-lg justify-self-end p-1 mb-4 bg-blue-500 text-white border border-blue-500 rounded hover:bg-white hover:text-blue-500"
          onClick={editTodo}
        >
          Complete
        </button>
      ) : (
        <button
          className="mx-2 shadow-lg justify-self-end p-1 mb-4 bg-blue-500 text-white border border-blue-500 rounded hover:bg-white hover:text-blue-500"
          onClick={() => {
            setEdited(true);
          }}
        >
          Edit
        </button>
      )}
      <button className="shadow-lg justify-self-end p-1 mb-4 bg-blue-500 text-white border border-blue-500 rounded hover:bg-white hover:text-blue-500" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

// TodoItem 컴포넌트를 내보냅니다.
export default TodoItem;
