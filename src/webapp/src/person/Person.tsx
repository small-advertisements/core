import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { setName } from './personSlice';

export const Person = () => {
  const name = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const handleNameUpdate = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    dispatch(setName({ name: newName }));
    setNewName('');
  };

  return (
    <div>
      <p>I am a person with the name: {name}</p>
      <form onSubmit={handleNameUpdate}>
        <input
          value={newName}
          onChange={(e): void => {
            setNewName(e.target.value);
          }}
        />
        <button type='submit'>change name</button>
      </form>
    </div>
  );
};