//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Oswaldo';
  const age = 29;
  const hobbies = [
    { id: 1, title: 'Study' },
    { id: 2, title: 'Fly' },
    { id: 3, title: 'Dance' },
    { id: 4, title: 'Swim' },
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>About me</h1>
      <p>
        {' '}
        My name is {name} I'm {age} old{' '}
      </p>
      <h2>My hobbies are:</h2>
      <ul>
        {hobbies.map((hobbies) => (
          <li key={hobbies.id}>{hobbies.title}</li>
        ))}
      </ul>
    </div>
  );
}
