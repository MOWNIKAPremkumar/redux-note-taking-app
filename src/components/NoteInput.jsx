import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../slices/noteSlice';

const NoteInput = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      dispatch(addNote(note));
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        placeholder="Write a note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteInput;
