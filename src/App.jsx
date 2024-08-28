import React from 'react'
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Note-Taking App</h1>
      <NoteInput />
      <NotesList />
      </div>
  )
}

export default App;