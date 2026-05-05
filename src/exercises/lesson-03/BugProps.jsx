// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*
What’s the mistake?

Over there is  trying to update a regular variable (message) and expecting the UI to update:

React does not track normal variables. It only re-renders when:
state changes (useState)
props change

Here’s what happens:
Component renders → message is "Hello, X"
We click the button → message changes in memory
❌ React does NOT re-render → UI stays the same

So your update is essentially invisible to React.
*/
