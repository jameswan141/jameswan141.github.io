function baseball() {
  const [innings, setinnings] = useState(0);

  return (
    <div>
      <p>You clicked {innings} times</p>
      <button onClick={() => setininnings(innings + 1)}>
        Click me
      </button>
    </div>
  );
}