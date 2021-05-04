import React from 'react';
import store from '../stores/store';
import { bugActions } from '../actions/bug';
import { useSelector, useDispatch } from 'react-redux';
import IBug from '../reducers/bug/bug';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(
//   bugActions.issueBug({
//     issuerName: "Dennis Gonzales",
//     timestamp: new Date().toDateString(),
//     title: "Test",
//     description: "Some bug issue!"
//   })
// );

// store.dispatch(bugActions.resolveBug(1));
// store.dispatch(bugActions.deleteBug(1));

const App: React.FC = (): JSX.Element => {

  const bug: IBug[] = useSelector((state: { bug: IBug[] }) => state.bug);
  const dispatch = useDispatch();

  const issueBugTest = bugActions.issueBug({
    issuerName: "Dennis Gonzales",
    timestamp: new Date().toDateString(),
    title: "Test",
    description: "Some bug issue!"
  });

  React.useEffect(() => {
    return () => unsubscribe(); // unsubscribe to prevent memory leaks
  }, []);

  return (
    <div>
      <h5>Name: {bug ? bug[0]?.issuerName : "Hello"}</h5>
      <button onClick={() => dispatch(issueBugTest)}>Issue bug</button>
    </div>
  )
}

export default App;
