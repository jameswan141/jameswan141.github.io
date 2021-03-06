import React, { useState } from "react";

function Baseball() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You hit {count} balls.</p>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
    </div>
  );
}


function Professor() {
  const [age, setAge] = useState(20);
  const [professor, setProfessor] = useState("Dr. Bart");
  const [todos, setTodos] = useState([{ text: "Learn Languages" }]);
}


<p>You hit {this.state.count} balls.</p>


<p>You hit {count} balls.</p>


<button onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click here
</button>


<button onClick={() => setCount(count + 1)}>
  Click here
</button>


import React, { useState, useEffect } from "react";

function Baseball() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You hit ${count} balls.";
  });

  return (
    <div>
      <p>You hit {count} balls.</p>
      <button onClick={() => setCount(count + 1)}>
        Click here
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


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  import React, { useState } from "react";
  
    function Example() {
      const [count, setCount] = useState(0);
  
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      });

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
          Click here
         </button>
       </div>
     );
   }


 const [count, setCount] = useState(0);


 const [fruit, setFruit] = useState("banana");


 const Example = (props) => {
  return <div />;
}


function Example(props) {
  return <div />;
}


 function handleOrange() {
  setFruit('orange');
}


var fruitStateVariable = useState('banana'); 
var fruit = fruitStateVariable[0]; 
var setFruit = fruitStateVariable[1];


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


const [state, setState] = useState(initialState);


setState(newState);


class FriendStatusWithCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }


  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate(prevProps) {
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }


  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);


  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]);


import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}


function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}


function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completed: false
      }];
    // ...
    default:
      return state;
  }
}


function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}


function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text });
  }

  // ...
}


const friendList = [
  { id: 1, name: 'Phineas' },
  { id: 2, name: 'Bella' },
  { id: 3, name: 'John' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}


const [recipientID, setRecipientID] = useState(1);
const isRecipientOnline = useFriendStatus(recipientID);