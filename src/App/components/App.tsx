import React from 'react';
import store from '../stores/store';
import { bugActions } from '../actions/bug';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(
  bugActions.issueBug({
    issuerName: "Dennis Gonzales",
    timestamp: new Date().toDateString(),
    title: "Test",
    description: "Some bug issue!",
    resolved: false
  })
);

store.dispatch(bugActions.deleteBug(1));

const App: React.FC = (): JSX.Element => {

  React.useEffect(() => {
    return () => unsubscribe(); // unsubscribe to prevent memory leaks
  }, []);

  return (
    <div>
      Hello World!!!!!!
    </div>
  )
}

export default App;
