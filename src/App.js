import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctor Appointment',
    day: 'Feb 5 at 2:30 PM',
    reminder: true,
    },
    {
    id: 2,
    text: 'Dentist Appointment',
    day: 'Feb 6 at 2:30 PM',
    reminder: true,
    },
    {
    id: 3,
    text: 'School Meeting',
    day: 'Feb 7 at 2:30 PM',
    reminder: false,
    },
    {
    id: 4,
    text: 'City Council',
    day: 'Feb 8 at 2:30 PM',
    reminder: true,
    },
])

//Add Task


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : 'No Tasks to Show'}
    </div>
  )
}

export default App;
