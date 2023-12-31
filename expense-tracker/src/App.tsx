import React from 'react';
import './App.css';
import ShowList from './components/ShowList.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/add'element={<ExpenseTracker onTrue={undefined} onClose={undefined}></ExpenseTracker>}>

            </Route>

            <Route path='/' element={<ShowList></ShowList>}>

            </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
