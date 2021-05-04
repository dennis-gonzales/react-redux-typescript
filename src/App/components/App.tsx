import React, { useState } from 'react';
import store from '../stores/store';
import { bugActions } from '../actions/bug';
import { useSelector, useDispatch } from 'react-redux';
import IBug from '../reducers/bug/bug';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const App: React.FC = (): JSX.Element => {

  const bug: IBug[] = useSelector((state: { bug: IBug[] }) => state.bug);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  React.useEffect(() => {
    return () => unsubscribe(); // unsubscribe to prevent memory leaks
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(bugActions.issueBug({
        issuerName: name,
        timestamp: new Date().toDateString(),
        title: title,
        description: description
      }))}
      >Issue bug</button>

      <input type="text" placeholder="issuer name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      {bug.map(bug => (
        <div key={bug.id}>
          
          <h3>ID: {bug.id}</h3>
          <h3>Title: {bug.title}</h3>
          <p>Description: {bug.description}</p>
          <p>Issuer Name: {bug.issuerName}</p>
          <p>Timestamp: {bug.timestamp}</p>
        </div>
      ))}

    </div>
  )
}

export default App;
