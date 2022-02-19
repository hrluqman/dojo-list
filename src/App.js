import Navbar from './Navbar';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
