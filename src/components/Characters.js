import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Characters(props) {
    
    const [currentCharacters, setCurrentCharacters] = useState([])
    
    useEffect(() => {
        setCurrentCharacters(props.savedCharacters)
    }, [props.savedCharacters])

    return (
        <div className="characters">

            <header>
                <div className='wrapper'>
                    <h1>Saved Characters</h1>
                    <p className='instructions'><span className='note'>Note:</span> click on any character to see more info</p>
                    <ul className="characterList">
                        {
                            currentCharacters[0]
                                ? currentCharacters.map((character) => {
                                    return (
                                        <Link className="characterBox" key={character.key} to={"/characters/" + character.key}>
                                            <li className="character">
                                                <h2>{character.info.name}</h2>
                                                <div>
                                                    <p>{character.info.alignment}</p>
                                                    <p>{character.info.race} {character.info.class}</p>
                                                </div>
                                                
                                            </li>
                                        </Link>
                                    )
                                })
                                : null
                        }
                    </ul>
                </div>
            </header>

        </div>
    );
}

export default Characters;