import { Route, Routes, Link } from 'react-router-dom';
import firebase from "./firebase";
import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';
import logo from "./assets/d20-icon-34405.png"

import Home from './components/Home';
import Characters from './components/Characters';
import Character from './components/Character';
import { useState, useEffect } from 'react';

function App() {
  const [characterList, setCharacterList] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState({})

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const newState = [];
      const data = response.val()
      for (let key in data) {
        newState.push({ key: key, info: data[key] })
      }
      setCharacterList(newState);
    })

  }, [])

  const setCharacter = (characterName, characterClass, characterRace, characterAlignment) => {
    setCurrentCharacter({ name: characterName, class: characterClass, race: characterRace, alignment: characterAlignment })
  }

  const saveCharacter = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, currentCharacter);
    setCurrentCharacter("");
  }


  return (
    <>
        <nav>
          <div className='wrapper'>
            <Link className='imgContainer' to="/"><img src={logo} alt="d20 (20 sided die) logo" /></Link>
            <ul>
              <li className='generator'>
                <Link className='navButton' to="/">Character Generator</Link>
              </li>
              <li>
              <Link className='navButton primary' to="/characters"><span className="at500">Saved </span>Characters</Link>
              </li>
            </ul>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home setCharacter={ setCharacter } saveCharacter={ saveCharacter} />} />
        <Route path="/characters" element={<Characters savedCharacters={ characterList } />} />
        <Route path="/characters/:characterKey" element={<Character />} />
      </Routes>

      <footer>
        <a target="_blank" href="https://junocollege.com/">Created at Juno College</a>
      </footer>
    </>
  )
}

export default App;
