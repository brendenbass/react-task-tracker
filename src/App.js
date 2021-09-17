import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks}
      onDelete={deleteTask}
      /> : 'No Tasks to Show'}
    </div>
  )
}

export default App;
