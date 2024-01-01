import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tech Talk</h1>
      </header>
      {/* need to add it for the demo */}
      <TodoList />
    </div>
  );
}

export default App;
