import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  useEffect(() => {
    document.title = `Today ${people.length} Birthday`;
  });

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id} className="person">
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                  <button onClick={() => removeItem(id)}>Remove</button>
                </div>
              </article>
            );
          })}
        </>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
