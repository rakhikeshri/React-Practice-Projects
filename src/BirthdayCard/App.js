import React, { useState } from 'react';
import './App.css';
import { data } from './data'
import { List } from './List'

function App() {
  const [people,setPeople] = useState(data);
  return (
    <main className="main">
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} /> 
        <button onClick={() => setPeople([]) }className="birthdayBtn">Clear All</button>
      </section>
    </main>
  );
}

export default App;
