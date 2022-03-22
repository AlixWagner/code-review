
import { useEffect, useState } from "react";

import GeneratorForm from './GeneratorForm.js';
import CharacterInfo from './CharacterInfo.js'

import apiCall from './apiCall.js';

function Home(props) {
    const [showCharacterInfo, setShowCharacterInfo] = useState(false);
    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState({})
    const [characterRace, setCharacterRace] = useState({})
    const [characterAlignment, setCharacterAlignment] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        characterName
            ? setShowCharacterInfo(true)
            : setShowCharacterInfo(false)
    }, [characterName])


    // function to pass to the Form to:
    // Take  user input from GeneratorForm and store in state to pass to CharacterInfo
    // Hide GeneratorForm, Show Character Info
    const handleGeneratorFormSubmit = (name, charClass, race, alignment) => {
        // make sure that no State changes occur during mount/dismount - stop CharacterInfo from accessing State:
        setLoaded(false);
        setCharacterName(name)
        // set variables for returned "promises":
        const classPromise = apiCall("classes/", charClass, setCharacterClass);
        const racePromise = apiCall("races/", race, setCharacterRace);
        const alignmentPromise = apiCall("alignments/", alignment, setCharacterAlignment);
        // collect the "promise" that API call was complete from all 3 calls:
        Promise.all([classPromise, racePromise, alignmentPromise])
            // ensure that all 3 API calls have returned before continuing:
            .then(() => { setLoaded(true); props.setCharacter(name, charClass, race, alignment) })
    }



    return (
        <div className="App">

            <header>
                <div className='wrapper'>
                    <h1>Character Generator</h1>
                    <p className='instructions'><span className='note'>Note:</span> any values left blank will be set randomly</p>
                </div>
            </header>

            <main>
                <section className='formSection'>
                    <GeneratorForm onSubmit={handleGeneratorFormSubmit} />
                </section>

                <>
                    {
                        showCharacterInfo
                            ? <CharacterInfo
                                name={characterName}
                                alignment={characterAlignment}
                                class={characterClass}
                                race={characterRace}
                                saveCharacter={ props.saveCharacter }
                                loaded={loaded}
                            />
                            : null
                    }
                </>
            </main>

        </div>
    );
}

export default Home;