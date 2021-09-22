import React, { useState } from "react";

function Baseball() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You hit {count} balls.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function Professor() {
  const [age, setAge] = useState(20);
  const [professor, setProfessor] = useState("Dr. Bart");
  const [todos, setTodos] = useState([{ text: "Learn Languages" }]);
}


import React, { useState, useEffect } from "react";

function Baseball() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked ${count} times";
  });

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function ContextHook() {
  const local = useContext(LocalContext);
  const main = useContext(MainContext);
}


function Todos() {
  const [todos, manage] = useReducer(todosReducer);
}