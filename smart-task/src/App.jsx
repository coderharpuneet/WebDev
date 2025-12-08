import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Tasks from './pages/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
    date: "2025-11-28",
    taskName: "Finish React Project Setup",
    detail: "Initialize SmartTask project using Vite and configure Tailwind CSS."
  },
  {
    date: "2025-11-29",
    taskName: "Create Sidebar Component",
    detail: "Implement navigation links: All Tasks, Today, Completed, Notes, Settings."
  },
  {
    date: "2025-11-29",
    taskName: "Implement Task Context",
    detail: "Create global context to manage tasks with add/edit/delete functionality."
  },
  {
    date: "2025-11-30",
    taskName: "Build TaskCard UI",
    detail: "Design card layout for displaying each task with title and date."
  },
  {
    date: "2025-12-01",
    taskName: "Add New Task Form",
    detail: "Build modal or page to add new tasks with validation."
  },
  {
    date: "2025-12-02",
    taskName: "Integrate LocalStorage",
    detail: "Persist tasks on refresh using custom useLocalStorage hook."
  },
  {
    date: "2025-12-03",
    taskName: "Implement Search Feature",
    detail: "Add input to filter tasks by taskName and details."
  },
  {
    date: "2025-12-04",
    taskName: "Task Detail Page",
    detail: "Create dynamic route to show full details of a specific task."
  },
  {
    date: "2025-12-05",
    taskName: "Dark/Light Theme Toggle",
    detail: "Add theme context and implement Tailwind dark mode classes."
  },
  {
    date: "2025-12-06",
    taskName: "Build Notes Page",
    detail: "Add simple notes CRUD functionality using localStorage."
  }
  ])
  

  return (
    <div>
      <Navbar />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App