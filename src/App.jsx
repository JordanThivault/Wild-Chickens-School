import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card';
import logo from "../public/assets/logo.png"


function App() {
  const [characters, setCharacters] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('../chickenTab.json');
      const data = await response.json();
      setCharacters(data.chickenTab);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const filteredTeachers = characters.filter(character => character.position === 'Teacher');
    const filteredStudents = characters.filter(character => character.position === 'Student');
    setTeachers(filteredTeachers);
    setStudents(filteredStudents);
  }, [characters]);

  return (
    <>

    <header>
      <img src={logo} alt="logo"/>
      <h1>Wild Chickens School</h1>
    </header>

    <section className='equipePedagogique'>
      <h2>Equipe pédagogique</h2>
      <div className='card'>
      {teachers.map((teacher) => (
                <Card 
                  key={teacher.id} 
                  name={teacher.name} 
                  imgSrc={teacher.imgSrc} 
                  position={teacher.position} 
                  biography={teacher.biography} 
                />
              ))}
      </div>
    </section>

    <section className='camarades'>
      <h2>Camarades</h2>
      <div className='card'>
      {students.map((student) => (
                <Card 
                  key={student.id} 
                  name={student.name} 
                  imgSrc={student.imgSrc} 
                  position={student.position} 
                  biography={student.biography} 
                />
              ))}
      </div>
    </section>
    </>
  );
}

export default App
