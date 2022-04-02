import { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import NewTask from './components/NewTask.jsx';
import getBlockchain from './ethereum.js';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [tasks, setTasks] = useState(undefined);
  const [todo, setTodo] = useState(undefined);

  useEffect(() => {
     const init = async () => {
       const { todo } = await getBlockchain();
       const tasks = await todo.getTasks();
       setTodo(todo);
       setTasks(tasks);
     };
     init();
  }, []);

  const createTask = async (content, author) => {
    const tx = await todo.createTask(content, author)
    await tx.wait();
    const tasks = await todo.getTasks(); 
    setTasks(tasks);
  }

  const toggleDone = async id => {
    const tx = await todo.toggleDone(id);
    await tx.wait();
    const tasks = await todo.getTasks(); 
    setTasks(tasks);
  }

  return (
    <div id="App">
      <Navbar />
      <Welcome />
      <NewTask createTask={createTask} /> 
      <TaskList tasks={tasks} toggleDone={toggleDone} />
      <Footer />
    </div>
  );
}

export default App;