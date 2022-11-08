import { useState } from 'react'
import './App.css'
import  Experience from "./data";

export default function App() {
  const [nav, chooseNav] = useState(0);

  const section = Experience.map((exp) => {
    return (
      <section className="profile">
        <h2>{exp.job}</h2>
        <h4 className='name'>{exp.name}</h4>
        <h4>{exp.date}</h4>
        <ul style={{ paddingLeft: 15}}>
          {exp.description.map((desc) => (
            <li className="description">{desc}</li>
          ))}
        </ul>
      </section>
    );
  });

  return (
    <div className="App">
      <h1>Experience</h1>
      <div className="underline"></div>
      <section className="navDesc">
        <nav>
          <ul>
            <li className="navButton">
              <button onClick={() => chooseNav(0)}>TOMMY</button>
            </li>
            <li className="navButton">
              <button onClick={() => chooseNav(1)}>BIGDROP</button>
            </li>
            <li className="navButton">
              <button onClick={() => chooseNav(2)}>CUKER</button>
            </li>
          </ul>
        </nav>
        {section[nav]}
      </section>
      <button onClick={() => {}} className="moreInfo">
        MORE INFO
      </button>
    </div>
  );
}
