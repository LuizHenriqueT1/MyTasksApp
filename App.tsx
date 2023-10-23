import React from 'react';
import { Home } from './src/pages/Home';
import { TasksProvider } from './src/context/TasksContext';


function App() {
  return (
    <TasksProvider>
      <Home/>
    </TasksProvider>
  )

}

export default App;
