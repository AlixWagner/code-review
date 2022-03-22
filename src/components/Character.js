import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, remove } from "firebase/database";
import firebase from "../firebase";

import apiCall from "./apiCall";
import CharacterAlignment from "./CharacterAlignment";
import CharacterClassInfo from "./CharacterClassInfo";
import CharacterRaceInfo from "./CharacterRaceInfo";

const Character = (props) => {

    const [characterName, setCharacterName] = useState("");
    const [characterClass, setCharacterClass] = useState({});
    const [characterRace, setCharacterRace] = useState({});
    const [characterAlignment, setCharacterAlignment] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [deleteCharacter, setDeleteCharacter] = useState(false)

    // get firebase key from URL 
    const { characterKey } = useParams();

    const database = getDatabase(firebase)
    // Instead of referencing the whole database, we are now reference one specific node.
    const userRef = ref(database, `/${ characterKey }`)
    // The same syntax as we would use for retrieving the whole list as before!

    useEffect(() => {
        get(userRef).then((data) => {
            const currentCharacterInfo = data.val()
            const gotAlignment = currentCharacterInfo.alignment
            const gotClass = currentCharacterInfo.class
            const gotRace = currentCharacterInfo.race
            setCharacterName(currentCharacterInfo.name)

            const classPromise = apiCall("classes/", gotClass, setCharacterClass);
            const racePromise = apiCall("races/", gotRace, setCharacterRace);
            const alignmentPromise = apiCall("alignments/", gotAlignment, setCharacterAlignment);
            // collect the "promise" that API call was complete from all 3 calls:
            Promise.all([classPromise, racePromise, alignmentPromise])
                // ensure that all 3 API calls have returned before continuing:
                .then(() => { setLoaded(true) })
        }).catch((error) => {
            alert(error)
        })
    }, [])

    const handleClick = () => {
        setDeleteCharacter(true);
    }
    const handleCancel = () => {
        setDeleteCharacter(false)
    }
    const navigate = useNavigate()
    const handleDelete = () => {
        remove(userRef)
        setLoaded(false)
        navigate("/characters");
    }



    return(
        loaded 
            ? <section className="character">
                <div className="wrapper">
                    <div className="flexContainer">
                        <CharacterAlignment infoObject={characterAlignment} name={characterName} />
                        <div className="innerFlex">
                            <CharacterRaceInfo infoObject={characterRace} />
                            <CharacterClassInfo infoObject={characterClass} />
                        </div>
                        {
                            deleteCharacter
                                ? <div className="buttonContainer delete">
                                    <button onClick={ handleCancel }>Cancel</button>
                                    <button onClick={ handleDelete } className="primary">Delete Character</button>
                                </div>
                                : <div className="buttonContainer preDelete">
                                    <button onClick={handleClick} className="primary">Delete Character</button>
                                </div>
                            }
                    </div>
                </div>
            </section>
            : null
    )
}

export default Character