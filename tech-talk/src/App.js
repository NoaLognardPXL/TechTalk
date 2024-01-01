import './App.css';
import TodoList from './components/TodoList/TodoList';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tech Talk</h1>
      </header>
      {/* need to add it for the demo */}
      <TodoList />
        <Footer />
    </div>
  );
}

export default App;
